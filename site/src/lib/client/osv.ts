/**
 * ブラウザから OSV.dev に依存一覧を問い合わせる（過去の未対応タブ用）
 * 送るのはパッケージ名・バージョン・エコシステムだけ。結果は 1 日キャッシュする。
 */

import type { Dependency, Severity } from "../../../../src/types/vuln.js";
import { cvss3BaseScore, normalizeSeverity, severityFromScore } from "../../../../src/processors/classify.js";
import { ID_PATTERNS, cleanText, detailUrl, isValidVulnId, safeUrl } from "../../../../src/shared/sanitize.js";
import { uuidV5 } from "../../../../src/shared/uuid.js";
import { loadOsvCache, saveOsvCache } from "./storage.js";

const OSV = "https://api.osv.dev/v1";

export interface PastItem {
  uuid: string;
  /** 正式 UUID がなく v5 で作ったか */
  provisional: boolean;
  ids: string[];
  title: string;
  severity: Severity;
  cvssScore?: number;
  published?: string;
  /** 該当した依存 */
  deps: { name: string; version: string; ecosystem: string; fixed?: string; dev: boolean; approximate: boolean }[];
  links: { url: string; host: string; label: string }[];
}

interface OsvVuln {
  id: string;
  aliases?: string[];
  summary?: string;
  details?: string;
  published?: string;
  withdrawn?: string;
  severity?: { type: string; score: string }[];
  database_specific?: { severity?: string };
  affected?: { package?: { ecosystem: string; name: string }; ranges?: { events: Record<string, string>[] }[] }[];
  references?: { type: string; url: string }[];
}

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`OSV HTTP ${res.status}`);
  return res.json() as Promise<T>;
}
async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`OSV HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

function severityOf(v: OsvVuln): { severity: Severity; score?: number } {
  const vector = v.severity?.find((s) => s.type === "CVSS_V3")?.score;
  const score = vector ? cvss3BaseScore(vector) : undefined;
  const db = normalizeSeverity(v.database_specific?.severity);
  return { severity: db !== "unknown" ? db : severityFromScore(score), score };
}

function fixedFor(v: OsvVuln, dep: Dependency): string | undefined {
  const fixes: string[] = [];
  for (const a of v.affected ?? []) {
    if (a.package?.name !== dep.name || a.package?.ecosystem !== dep.ecosystem) continue;
    for (const r of a.ranges ?? []) for (const e of r.events) if (e.fixed) fixes.push(e.fixed);
  }
  return fixes.sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).find((f) => f.localeCompare(dep.version, undefined, { numeric: true }) > 0) ?? fixes[0];
}

/** OSV の参照のうち表示するもの（攻撃コード = EVIDENCE は除外） */
function osvLinks(v: OsvVuln, ids: string[]): PastItem["links"] {
  const out: PastItem["links"] = [];
  for (const id of ids) {
    const u = detailUrl(id);
    if (u && out.length < 3) out.push({ url: u.href, host: u.host, label: id });
  }
  for (const r of v.references ?? []) {
    if (!["ADVISORY", "FIX", "WEB", "ARTICLE"].includes(r.type)) continue;
    const u = safeUrl(r.url);
    if (u && !out.some((l) => l.url === u.href) && out.length < 6) out.push({ url: u.href, host: u.host, label: r.type === "ADVISORY" ? `公式発表 (${u.host})` : u.host });
  }
  return out;
}

/** 依存一覧のキー（内容が変わればキャッシュを使わない） */
export function depsKey(deps: Dependency[]): string {
  return uuidV5(deps.map((d) => `${d.ecosystem}|${d.name}|${d.version}`).sort().join("\n"));
}

/**
 * @param idToUuid ids.json の ids（収集データにある脆弱性は正式 UUID を使う）
 */
export async function queryPast(deps: Dependency[], idToUuid: Record<string, string>, force = false): Promise<PastItem[]> {
  const key = depsKey(deps);
  if (!force) {
    const cached = loadOsvCache<PastItem>(key);
    if (cached) return cached;
  }
  if (deps.length === 0) return [];

  const idsPerDep: string[][] = [];
  for (let i = 0; i < deps.length; i += 1000) {
    const batch = deps.slice(i, i + 1000);
    const data = await postJson<{ results: { vulns?: { id: string }[] }[] }>(`${OSV}/querybatch`, {
      queries: batch.map((d) => ({ package: { name: d.name, ecosystem: d.ecosystem }, version: d.version })),
    });
    for (const r of data.results) idsPerDep.push((r.vulns ?? []).map((v) => v.id).filter(isValidVulnId));
  }

  const unique = [...new Set(idsPerDep.flat())].slice(0, 500);
  const details = new Map<string, OsvVuln>();
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(6, unique.length) }, async () => {
      while (next < unique.length) {
        const id = unique[next++];
        try {
          const v = await getJson<OsvVuln>(`${OSV}/vulns/${encodeURIComponent(id)}`);
          if (!v.withdrawn) details.set(id, v);
        } catch {}
      }
    }),
  );

  // 同じ脆弱性（GHSA と PYSEC など別 ID）をまとめる
  const byUuid = new Map<string, PastItem>();
  deps.forEach((dep, i) => {
    for (const id of idsPerDep[i] ?? []) {
      const v = details.get(id);
      if (!v) continue;
      const ids = [...new Set([v.id, ...(v.aliases ?? [])])].filter(isValidVulnId);
      ids.sort((a, b) => (a.startsWith("CVE-") ? -1 : b.startsWith("CVE-") ? 1 : 0));
      const real = ids.map((x) => idToUuid[x]).find((u) => u && ID_PATTERNS.uuid.test(u));
      const uuid = real ?? uuidV5(ids[0]);
      const { severity, score } = severityOf(v);
      const item =
        byUuid.get(uuid) ??
        ({
          uuid,
          provisional: !real,
          ids,
          title: cleanText(v.summary || v.details?.split("\n")[0] || ids[0], 300),
          severity,
          cvssScore: score,
          published: v.published,
          deps: [],
          links: osvLinks(v, ids),
        } satisfies PastItem);
      if (!item.deps.some((d) => d.name === dep.name && d.version === dep.version)) {
        item.deps.push({ name: dep.name, version: dep.version, ecosystem: dep.ecosystem, fixed: fixedFor(v, dep), dev: dep.dev, approximate: dep.approximate });
      }
      byUuid.set(uuid, item);
    }
  });
  const items = [...byUuid.values()];
  saveOsvCache(key, items);
  return items;
}
