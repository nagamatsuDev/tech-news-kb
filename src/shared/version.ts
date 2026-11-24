/**
 * バージョン比較と GHSA 形式の範囲判定（ブラウザ / Node 共通）
 *   範囲の例: "< 1.2.3" / ">= 4.0.0, < 4.5.2" / "= 1.0.0" / "<= 2.1"
 * semver に限らず、数字とプレリリースを含む一般的な表記を扱う
 */

type Part = number | string;

function parts(v: string): { main: Part[]; pre: Part[] } {
  const clean = v.trim().replace(/^v/i, "").split("+")[0];
  const [mainStr, ...preRest] = clean.split("-");
  const split = (s: string) => s.split(/[._]/).filter(Boolean).map((x) => (/^\d+$/.test(x) ? Number(x) : x));
  return { main: split(mainStr), pre: preRest.length ? split(preRest.join("-")) : [] };
}

function cmpParts(a: Part[], b: Part[], padNumeric: boolean): number {
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const x = a[i] ?? (padNumeric ? 0 : undefined);
    const y = b[i] ?? (padNumeric ? 0 : undefined);
    if (x === undefined) return -1;
    if (y === undefined) return 1;
    if (x === y) continue;
    if (typeof x === "number" && typeof y === "number") return x < y ? -1 : 1;
    if (typeof x === "number") return -1;
    if (typeof y === "number") return 1;
    return x < y ? -1 : 1;
  }
  return 0;
}

/** a < b なら負、a > b なら正 */
export function compareVersions(a: string, b: string): number {
  const pa = parts(a);
  const pb = parts(b);
  const c = cmpParts(pa.main, pb.main, true);
  if (c !== 0) return c;
  // プレリリースは正式版より小さい
  if (pa.pre.length === 0 && pb.pre.length === 0) return 0;
  if (pa.pre.length === 0) return 1;
  if (pb.pre.length === 0) return -1;
  return cmpParts(pa.pre, pb.pre, false);
}

/** GHSA の vulnerable_version_range に version が含まれるか。解釈できなければ undefined */
export function inRange(version: string, range: string | undefined): boolean | undefined {
  if (!range) return undefined;
  const conds = range.split(",").map((s) => s.trim()).filter(Boolean);
  if (!conds.length) return undefined;
  for (const c of conds) {
    const m = c.match(/^(<=|>=|<|>|=|==)?\s*([0-9A-Za-z][0-9A-Za-z._+\-]*)$/);
    if (!m) return undefined;
    const op = m[1] ?? "=";
    const r = compareVersions(version, m[2]);
    const ok =
      op === "<" ? r < 0 : op === "<=" ? r <= 0 : op === ">" ? r > 0 : op === ">=" ? r >= 0 : r === 0;
    if (!ok) return false;
  }
  return true;
}
