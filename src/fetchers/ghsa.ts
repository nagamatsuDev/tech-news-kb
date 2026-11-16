/**
 * GitHub Advisory Database（レビュー済み）
 * https://docs.github.com/en/rest/security-advisories/global-advisories
 *
 * 言語パッケージ（npm / PyPI / Go / Maven ...）単位の脆弱性。
 * GITHUB_TOKEN があればレート制限が緩くなる（Actions では自動で渡される）。
 */

import type { AffectedPackage, CollectError, CollectedVuln } from "../types/vuln.js";
import { GHSA_API } from "../config/vuln.js";
import { fetchJson } from "./http.js";
import { ghsaToOsvEcosystem, languageFromEcosystem, normalizeSeverity, severityFromScore } from "../processors/classify.js";

export interface GhsaAdvisory {
  ghsa_id: string;
  cve_id: string | null;
  html_url: string;
  summary: string;
  description: string | null;
  severity: string;
  published_at: string;
  updated_at: string;
  withdrawn_at?: string | null;
  references?: string[];
  cvss?: { score: number | null; vector_string: string | null } | null;
  cvss_severities?: {
    cvss_v3?: { score: number | null; vector_string: string | null } | null;
    cvss_v4?: { score: number | null; vector_string: string | null } | null;
  };
  vulnerabilities?: {
    package: { ecosystem: string; name: string } | null;
    vulnerable_version_range: string | null;
    first_patched_version: string | null;
  }[];
}

function ghHeaders(): Record<string, string> {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

/** Link ヘッダーから次ページの URL を取り出す */
function nextLink(link: string | null): string | undefined {
  return link?.match(/<([^>]+)>;\s*rel="next"/)?.[1];
}

export function normalizeGhsa(a: GhsaAdvisory): CollectedVuln {
  const packages: AffectedPackage[] = (a.vulnerabilities ?? [])
    .filter((v) => v.package)
    .map((v) => ({
      ecosystem: ghsaToOsvEcosystem(v.package!.ecosystem),
      name: v.package!.name,
      vulnerableRange: v.vulnerable_version_range ?? undefined,
      fixedVersion: v.first_patched_version ?? undefined,
    }));

  const languages = [
    ...new Set(
      (a.vulnerabilities ?? [])
        .map((v) => (v.package ? languageFromEcosystem(v.package.ecosystem) : undefined))
        .filter((x): x is string => Boolean(x)),
    ),
  ];

  const score =
    a.cvss_severities?.cvss_v3?.score ?? a.cvss?.score ?? a.cvss_severities?.cvss_v4?.score ?? undefined;
  const vector =
    a.cvss_severities?.cvss_v3?.vector_string ?? a.cvss?.vector_string ?? a.cvss_severities?.cvss_v4?.vector_string;

  let severity = normalizeSeverity(a.severity);
  if (severity === "unknown") severity = severityFromScore(score ?? undefined);

  return {
    id: a.cve_id ?? a.ghsa_id,
    aliases: a.cve_id ? [a.ghsa_id] : [],
    title: a.summary,
    summary: (a.description ?? a.summary).replace(/\s+/g, " ").slice(0, 600),
    severity,
    cvssScore: score && score > 0 ? score : undefined,
    cvssVector: vector ?? undefined,
    os: [],
    languages,
    products: [],
    packages,
    sources: ["ghsa"],
    // GHSA の参照にはタグがないので、ホストからベンダー発表・パッチを推定する（processors/links.ts）
    references: (a.references ?? []).map((url) => ({ url, tags: [] })).slice(0, 30),
    publishedAt: a.published_at,
    updatedAt: a.updated_at,
  };
}

/** 指定日以降に更新された、指定日以降公開のアドバイザリを取得する */
export async function fetchGhsa(
  since: Date,
  publishedAfter: Date,
): Promise<{ vulns: CollectedVuln[]; errors: CollectError[] }> {
  const errors: CollectError[] = [];
  const vulns: CollectedVuln[] = [];
  const params = new URLSearchParams({
    type: "reviewed",
    updated: `>=${since.toISOString().slice(0, 10)}`,
    published: `>=${publishedAfter.toISOString().slice(0, 10)}`,
    per_page: "100",
    sort: "updated",
    direction: "desc",
  });
  let url: string | undefined = `${GHSA_API}?${params}`;
  let pages = 0;

  try {
    while (url && pages < 30) {
      const { data, headers } = await fetchJson<GhsaAdvisory[]>(url, { headers: ghHeaders() });
      for (const a of data) {
        if (a.withdrawn_at) continue;
        vulns.push(normalizeGhsa(a));
      }
      url = nextLink(headers.get("link"));
      pages++;
    }
    console.log(`  [GHSA] ${vulns.length} advisories`);
  } catch (err) {
    errors.push({ source: "GitHub Advisory", message: err instanceof Error ? err.message : String(err) });
  }
  return { vulns, errors };
}
