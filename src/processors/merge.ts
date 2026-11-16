/**
 * 複数ソースの脆弱性を CVE / GHSA ID で統合する
 */

import type { CollectedVuln, KevInfo } from "../types/vuln.js";
import { SEVERITY_RANK } from "../types/vuln.js";

const uniq = <T>(xs: T[]) => [...new Set(xs)];

function mergeRefs(a: CollectedVuln["references"], b: CollectedVuln["references"]) {
  const byUrl = new Map<string, string[]>();
  for (const r of [...a, ...b]) byUrl.set(r.url, uniq([...(byUrl.get(r.url) ?? []), ...r.tags]));
  return [...byUrl.entries()].map(([url, tags]) => ({ url, tags })).slice(0, 40);
}

/** 同じ脆弱性を表す 2 件を統合する（a が既存、b が新しい情報） */
function mergeTwo(a: CollectedVuln, b: CollectedVuln): CollectedVuln {
  // CVE ID を主 ID にする
  const id = a.id.startsWith("CVE-") ? a.id : b.id.startsWith("CVE-") ? b.id : a.id;
  const aliases = uniq([...a.aliases, ...b.aliases, a.id, b.id]).filter((x) => x !== id);

  // 危険度は高い方を採用（安全側に倒す）
  const sev = SEVERITY_RANK[b.severity] > SEVERITY_RANK[a.severity] ? b : a;
  // タイトルは GHSA（人がレビューした短い要約）を優先
  const titled = b.sources.includes("ghsa") ? b : a.sources.includes("ghsa") ? a : b;

  const packages = [...a.packages];
  for (const p of b.packages) {
    if (!packages.some((x) => x.ecosystem === p.ecosystem && x.name === p.name)) packages.push(p);
  }

  return {
    ...a,
    id,
    aliases,
    title: titled.title,
    summary: titled.summary || a.summary || b.summary,
    severity: sev.severity,
    cvssScore: sev.cvssScore ?? a.cvssScore ?? b.cvssScore,
    cvssVector: sev.cvssVector ?? a.cvssVector ?? b.cvssVector,
    os: uniq([...a.os, ...b.os]),
    languages: uniq([...a.languages, ...b.languages]),
    products: uniq([...a.products, ...b.products]).slice(0, 10),
    packages,
    kev: b.kev ?? a.kev,
    sources: uniq([...a.sources, ...b.sources]),
    references: mergeRefs(a.references, b.references),
    publishedAt: a.publishedAt < b.publishedAt ? a.publishedAt : b.publishedAt,
    updatedAt: a.updatedAt > b.updatedAt ? a.updatedAt : b.updatedAt,
  };
}

/** ID・別名が重なるものを 1 件にまとめる */
export function mergeVulns(lists: CollectedVuln[][]): CollectedVuln[] {
  const byKey = new Map<string, CollectedVuln>();
  for (const v of lists.flat()) {
    const keys = [v.id, ...v.aliases];
    const existing = keys.map((k) => byKey.get(k)).find(Boolean);
    const merged = existing ? mergeTwo(existing, v) : v;
    for (const k of [merged.id, ...merged.aliases, ...keys]) byKey.set(k, merged);
  }
  return uniq([...byKey.values()]);
}

/** KEV 情報を付与する */
export function applyKev(vulns: CollectedVuln[], kev: Map<string, KevInfo>): CollectedVuln[] {
  return vulns.map((v) => {
    const info = [v.id, ...v.aliases].map((id) => kev.get(id)).find(Boolean);
    if (!info) return v;
    return {
      ...v,
      kev: {
        dateAdded: info.dateAdded,
        dueDate: info.dueDate,
        requiredAction: info.requiredAction,
        ransomware: info.ransomware,
      },
      sources: v.sources.includes("kev") ? v.sources : [...v.sources, "kev"],
    };
  });
}

/** 優先度順（KEV → 危険度 → CVSS → 新しい順）に並べる */
export function sortByPriority<T extends Pick<CollectedVuln, "kev" | "severity" | "cvssScore" | "publishedAt">>(vulns: T[]): T[] {
  return [...vulns].sort(
    (a, b) =>
      Number(Boolean(b.kev)) - Number(Boolean(a.kev)) ||
      SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity] ||
      (b.cvssScore ?? 0) - (a.cvssScore ?? 0) ||
      b.publishedAt.localeCompare(a.publishedAt),
  );
}
