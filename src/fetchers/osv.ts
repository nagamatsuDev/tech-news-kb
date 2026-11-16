/**
 * OSV.dev — 依存パッケージ × バージョンで既知の脆弱性を照合する
 * https://google.github.io/osv.dev/api/
 */

import type { Dependency, Severity } from "../types/vuln.js";
import { OSV_API } from "../config/vuln.js";
import { chunk, fetchJson, mapLimit } from "./http.js";
import { cvss3BaseScore, normalizeSeverity, severityFromScore } from "../processors/classify.js";

export interface OsvVuln {
  id: string;
  aliases?: string[];
  summary?: string;
  details?: string;
  published?: string;
  modified: string;
  withdrawn?: string;
  severity?: { type: string; score: string }[];
  database_specific?: { severity?: string };
  affected?: {
    package?: { ecosystem: string; name: string };
    ranges?: { type: string; events: Record<string, string>[] }[];
    versions?: string[];
    database_specific?: { last_known_affected_version_range?: string };
  }[];
  references?: { type: string; url: string }[];
}

export interface OsvMatch {
  dep: Dependency;
  vuln: OsvVuln;
}

/** OSV の脆弱性から危険度と CVSS を求める */
export function osvSeverity(v: OsvVuln): { severity: Severity; score?: number } {
  const vector = v.severity?.find((s) => s.type === "CVSS_V3")?.score;
  const score = vector ? cvss3BaseScore(vector) : undefined;
  const fromDb = normalizeSeverity(v.database_specific?.severity);
  if (fromDb !== "unknown") return { severity: fromDb, score };
  return { severity: severityFromScore(score), score };
}

/** 対象パッケージの修正バージョンを取り出す（複数レンジがあれば、使用中バージョンより大きい最小のもの） */
export function osvFixedVersion(v: OsvVuln, dep: Dependency): string | undefined {
  const fixes: string[] = [];
  for (const a of v.affected ?? []) {
    if (a.package?.name !== dep.name || a.package?.ecosystem !== dep.ecosystem) continue;
    for (const r of a.ranges ?? []) for (const e of r.events) if (e.fixed) fixes.push(e.fixed);
  }
  if (fixes.length <= 1) return fixes[0];
  const cmp = (x: string, y: string) => x.localeCompare(y, undefined, { numeric: true });
  const above = fixes.filter((f) => cmp(f, dep.version) > 0).sort(cmp);
  return above[0] ?? fixes.sort(cmp).at(-1);
}

/** 依存一覧を OSV に問い合わせ、該当する脆弱性を返す */
export async function queryOsv(deps: Dependency[]): Promise<OsvMatch[]> {
  if (deps.length === 0) return [];
  const idsPerDep: string[][] = [];

  // querybatch は 1 回 1000 件まで
  for (const batch of chunk(deps, 1000)) {
    const { data } = await fetchJson<{ results: { vulns?: { id: string }[] }[] }>(`${OSV_API}/querybatch`, {
      method: "POST",
      body: {
        queries: batch.map((d) => ({
          package: { name: d.name, ecosystem: d.ecosystem },
          version: d.version,
        })),
      },
      timeoutMs: 60_000,
    });
    for (const r of data.results) idsPerDep.push((r.vulns ?? []).map((v) => v.id));
  }

  // 詳細を取得（重複 ID は 1 回だけ）
  const uniqueIds = [...new Set(idsPerDep.flat())];
  const details = new Map<string, OsvVuln>();
  await mapLimit(uniqueIds, 8, async (id) => {
    try {
      const { data } = await fetchJson<OsvVuln>(`${OSV_API}/vulns/${encodeURIComponent(id)}`);
      if (!data.withdrawn) details.set(id, data);
    } catch (err) {
      console.warn(`  [OSV] ${id}: ${err instanceof Error ? err.message : err}`);
    }
  });

  const matches: OsvMatch[] = [];
  deps.forEach((dep, i) => {
    for (const id of idsPerDep[i] ?? []) {
      const vuln = details.get(id);
      if (vuln) matches.push({ dep, vuln });
    }
  });
  return matches;
}
