/**
 * NVD (National Vulnerability Database) CVE API 2.0
 * https://nvd.nist.gov/developers/vulnerabilities
 *
 * 更新日時（lastMod）の範囲で取得し、新着 CVE と「後から CVSS が付いた CVE」の両方を拾う。
 * API キー（NVD_API_KEY）なしでも動くが、レート制限が厳しい（30 秒に 5 回）。
 */

import type { CollectError, CollectedVuln } from "../types/vuln.js";
import { SEVERITY_RANK } from "../types/vuln.js";
import { NVD_API, NVD_MIN_SEVERITY } from "../config/vuln.js";
import { fetchJson, sleep } from "./http.js";
import {
  languagesFromText,
  normalizeSeverity,
  osFromCpe,
  osFromText,
  productFromCpe,
  severityFromScore,
} from "../processors/classify.js";

// ---- NVD レスポンスの必要部分だけの型 ----
interface CvssMetric {
  type?: string;
  cvssData: { baseScore: number; baseSeverity?: string; vectorString?: string };
  baseSeverity?: string; // v2 はここ
}
export interface NvdCve {
  id: string;
  published: string;
  lastModified: string;
  vulnStatus?: string;
  descriptions: { lang: string; value: string }[];
  metrics?: {
    cvssMetricV40?: CvssMetric[];
    cvssMetricV31?: CvssMetric[];
    cvssMetricV30?: CvssMetric[];
    cvssMetricV2?: CvssMetric[];
  };
  configurations?: { nodes: { cpeMatch?: { criteria: string; vulnerable: boolean }[] }[] }[];
  references?: { url: string; tags?: string[] }[];
  cisaExploitAdd?: string;
  cisaActionDue?: string;
  cisaRequiredAction?: string;
  cisaVulnerabilityName?: string;
}
interface NvdResponse {
  resultsPerPage: number;
  startIndex: number;
  totalResults: number;
  vulnerabilities: { cve: NvdCve }[];
}

const PAGE_SIZE = 2000;

function nvdHeaders(): Record<string, string> {
  return process.env.NVD_API_KEY ? { apiKey: process.env.NVD_API_KEY } : {};
}

/** レート制限に合わせた待ち時間 */
const waitMs = () => (process.env.NVD_API_KEY ? 700 : 6500);

/** NVD 形式の日時（+00:00 付き） */
function nvdDate(d: Date): string {
  return d.toISOString().replace("Z", "+00:00");
}

/** NVD の日時（タイムゾーンなし = UTC）を ISO 8601 にする */
function parseNvdDate(s: string): Date {
  return new Date(/[zZ]|[+-]\d\d:\d\d$/.test(s) ? s : s + "Z");
}

/** Primary（NVD 自身）の評価を優先して CVSS を取り出す */
function pickCvss(cve: NvdCve): { score?: number; vector?: string; severity: string | undefined } {
  const m = cve.metrics ?? {};
  for (const list of [m.cvssMetricV31, m.cvssMetricV30, m.cvssMetricV40, m.cvssMetricV2]) {
    if (!list?.length) continue;
    const metric = list.find((x) => x.type === "Primary") ?? list[0];
    return {
      score: metric.cvssData.baseScore,
      vector: metric.cvssData.vectorString,
      severity: metric.cvssData.baseSeverity ?? metric.baseSeverity,
    };
  }
  return { severity: undefined };
}

/** NVD の CVE 1 件を Vulnerability に変換する */
export function normalizeNvdCve(cve: NvdCve): CollectedVuln {
  const description = cve.descriptions.find((d) => d.lang === "en")?.value ?? "";
  const cvss = pickCvss(cve);
  const severity = cvss.severity ? normalizeSeverity(cvss.severity) : severityFromScore(cvss.score);

  const cpes = (cve.configurations ?? [])
    .flatMap((c) => c.nodes)
    .flatMap((n) => n.cpeMatch ?? [])
    .filter((m) => m.vulnerable)
    .map((m) => m.criteria);

  const os = new Set<string>();
  const products = new Set<string>();
  for (const cpe of cpes) {
    const o = osFromCpe(cpe);
    if (o) os.add(o);
    const p = productFromCpe(cpe);
    if (p) products.add(p);
  }
  if (os.size === 0) for (const o of osFromText(description)) os.add(o);

  const languages = languagesFromText(`${description} ${[...products].join(" ")}`);

  // タイトル: KEV 名 → 説明文の最初の文
  const firstSentence = description.split(/(?<=\.)\s/)[0] ?? description;
  const title = cve.cisaVulnerabilityName ?? (firstSentence.length > 140 ? firstSentence.slice(0, 137) + "..." : firstSentence);

  return {
    id: cve.id,
    aliases: [],
    title,
    summary: description,
    severity,
    cvssScore: cvss.score,
    cvssVector: cvss.vector,
    os: [...os],
    languages,
    products: [...products].slice(0, 10),
    packages: [],
    kev: cve.cisaExploitAdd
      ? {
          dateAdded: cve.cisaExploitAdd,
          dueDate: cve.cisaActionDue,
          requiredAction: cve.cisaRequiredAction,
          ransomware: false,
        }
      : undefined,
    sources: ["nvd"],
    references: (cve.references ?? []).map((r) => ({ url: r.url, tags: r.tags ?? [] })).slice(0, 30),
    publishedAt: parseNvdDate(cve.published).toISOString(),
    updatedAt: parseNvdDate(cve.lastModified).toISOString(),
  };
}

/**
 * 指定期間に更新された CVE を取得する
 * @param since 取得開始（NVD の制約で最大 120 日前まで）
 * @param publishedAfter これより前に公開された古い CVE は除外する
 */
export async function fetchNvd(
  since: Date,
  publishedAfter: Date,
): Promise<{ vulns: CollectedVuln[]; errors: CollectError[] }> {
  const errors: CollectError[] = [];
  const vulns: CollectedVuln[] = [];
  const end = new Date();
  const minRank = SEVERITY_RANK[NVD_MIN_SEVERITY] ?? SEVERITY_RANK.high;
  let startIndex = 0;
  let total = Infinity;

  try {
    while (startIndex < total) {
      const params = new URLSearchParams({
        lastModStartDate: nvdDate(since),
        lastModEndDate: nvdDate(end),
        resultsPerPage: String(PAGE_SIZE),
        startIndex: String(startIndex),
      });
      // noRejected は値なしパラメータ（取り下げ済み CVE を除外）
      const url = `${NVD_API}?${params.toString()}&noRejected`;
      const { data } = await fetchJson<NvdResponse>(url, { headers: nvdHeaders(), timeoutMs: 60_000 });
      total = data.totalResults;
      for (const { cve } of data.vulnerabilities) {
        if (parseNvdDate(cve.published) < publishedAfter) continue;
        const v = normalizeNvdCve(cve);
        // KEV 掲載分は危険度に関係なく残す
        if (SEVERITY_RANK[v.severity] >= minRank || v.kev) vulns.push(v);
      }
      startIndex += data.resultsPerPage || PAGE_SIZE;
      if (startIndex < total) await sleep(waitMs());
    }
    console.log(`  [NVD] ${vulns.length} CVEs (total modified: ${total === Infinity ? 0 : total})`);
  } catch (err) {
    errors.push({ source: "NVD", message: err instanceof Error ? err.message : String(err) });
  }
  return { vulns, errors };
}

/** CVE ID を指定して取得する（KEV に新規追加された古い CVE の詳細用） */
export async function fetchNvdById(ids: string[]): Promise<CollectedVuln[]> {
  const out: CollectedVuln[] = [];
  for (const id of ids) {
    try {
      const { data } = await fetchJson<NvdResponse>(`${NVD_API}?cveId=${encodeURIComponent(id)}`, {
        headers: nvdHeaders(),
      });
      const cve = data.vulnerabilities[0]?.cve;
      if (cve) out.push(normalizeNvdCve(cve));
    } catch (err) {
      console.warn(`  [NVD] ${id}: ${err instanceof Error ? err.message : err}`);
    }
    await sleep(waitMs());
  }
  return out;
}
