/**
 * 設定・依存パッケージとの照合（ブラウザ内。通信しない）
 *
 *   3: 依存パッケージに該当（パッケージ名一致 かつ バージョンが影響範囲内）
 *   2: 製品名 または 言語が一致
 *   1: OS が一致
 *   0: 一致なし
 */

import type { AffectedPackage, Dependency } from "../../../../src/types/vuln.js";
import { inRange } from "../../../../src/shared/version.js";
import type { Settings } from "./storage.js";

export interface MatchInput {
  os: string[];
  languages: string[];
  products: string[];
  title: string;
  packages: AffectedPackage[];
}

export interface MatchResult {
  level: 0 | 1 | 2 | 3;
  /** 表示用の理由 */
  reasons: string[];
  /** 該当した依存（level 3 のとき） */
  deps: { name: string; version: string; fixed?: string; approximate: boolean; dev: boolean }[];
}

const norm = (s: string) => s.toLowerCase().trim();

/** エコシステム名の表記ゆれ（GHSA と OSV） */
const ECO_ALIASES: Record<string, string> = { pip: "pypi", rust: "crates.io", composer: "packagist", rubygems: "rubygems" };
const eco = (e: string) => ECO_ALIASES[norm(e)] ?? norm(e);

/** パッケージ名の比較（PyPI は _ - . を同一視） */
function samePackage(a: string, b: string, ecosystem: string): boolean {
  if (eco(ecosystem) === "pypi") return norm(a).replace(/[-_.]+/g, "-") === norm(b).replace(/[-_.]+/g, "-");
  return norm(a) === norm(b);
}

export function indexDeps(deps: Dependency[]): Map<string, Dependency[]> {
  const m = new Map<string, Dependency[]>();
  for (const d of deps) {
    const key = `${eco(d.ecosystem)}|${eco(d.ecosystem) === "pypi" ? norm(d.name).replace(/[-_.]+/g, "-") : norm(d.name)}`;
    m.set(key, [...(m.get(key) ?? []), d]);
  }
  return m;
}

export function matchVuln(v: MatchInput, settings: Settings, depIndex: Map<string, Dependency[]>): MatchResult {
  const reasons: string[] = [];
  const hitDeps: MatchResult["deps"] = [];

  for (const p of v.packages) {
    const key = `${eco(p.ecosystem)}|${eco(p.ecosystem) === "pypi" ? norm(p.name).replace(/[-_.]+/g, "-") : norm(p.name)}`;
    for (const d of depIndex.get(key) ?? []) {
      if (!samePackage(d.name, p.name, p.ecosystem)) continue;
      const hit = inRange(d.version, p.vulnerableRange);
      // 範囲が読めない場合は安全側（該当扱い）にせず、名前一致として level 2 にとどめる
      if (hit === true) hitDeps.push({ name: d.name, version: d.version, fixed: p.fixedVersion, approximate: d.approximate, dev: d.dev });
      else if (hit === undefined) reasons.push(`パッケージ名が一致: ${d.name}（範囲は要確認）`);
    }
  }
  if (hitDeps.length) {
    return { level: 3, reasons: [`依存に該当: ${[...new Set(hitDeps.map((d) => `${d.name}@${d.version}`))].join(", ")}`], deps: hitDeps };
  }

  const text = `${v.title} ${v.products.join(" ")}`.toLowerCase();
  const productHit = settings.products.find((w) => {
    const word = norm(w);
    if (word.length < 2) return false;
    const re = new RegExp(`(^|[^a-z0-9])${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`);
    return re.test(text);
  });
  if (productHit) reasons.push(`製品が一致: ${productHit}`);
  const langHit = v.languages.filter((l) => settings.languages.includes(l));
  if (langHit.length) reasons.push(`言語が一致: ${langHit.join(", ")}`);
  if (reasons.length) return { level: 2, reasons, deps: [] };

  const osHit = v.os.filter((o) => settings.os.includes(o));
  if (osHit.length) return { level: 1, reasons: [`OS が一致: ${osHit.join(", ")}`], deps: [] };
  return { level: 0, reasons: [], deps: [] };
}
