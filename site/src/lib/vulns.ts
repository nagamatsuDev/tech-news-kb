/**
 * サイト（ビルド時）: データ読み込みと表示用の定義
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Severity, Vulnerability, WeekIndex } from "../../../src/types/vuln.js";
import { WEEK_RE, isoWeekOf, weeksBetween } from "../../../src/shared/week.js";

function readJson<T>(rel: string, fallback: T): T {
  try {
    return JSON.parse(readFileSync(resolve(process.cwd(), "../data", rel), "utf-8")) as T;
  } catch {
    return fallback;
  }
}

export const loadWeekIndex = () => readJson<WeekIndex>("weeks/index.json", { updatedAt: new Date().toISOString(), weeks: [] });

export function loadWeek(week: string): Vulnerability[] {
  if (!WEEK_RE.test(week)) return [];
  return readJson<Vulnerability[]>(`weeks/${week}.json`, []);
}

/** ページを作る週: データの最初の週〜ビルド時点の週（データのない週も空ページを作る） */
export function allWeeks(): string[] {
  const idx = loadWeekIndex();
  const current = isoWeekOf(new Date());
  const first = idx.weeks[0]?.week ?? current;
  return weeksBetween(first < current ? first : current, current);
}

export const SEVERITIES: Severity[] = ["critical", "high", "medium", "low", "unknown"];

export const SEV_STYLE: Record<Severity, { label: string; ja: string; badge: string; dot: string }> = {
  critical: { label: "Critical", ja: "緊急", badge: "bg-red-600 text-white", dot: "bg-red-600" },
  high: { label: "High", ja: "重要", badge: "bg-orange-500 text-white", dot: "bg-orange-500" },
  medium: { label: "Medium", ja: "警告", badge: "bg-amber-400 text-amber-950", dot: "bg-amber-400" },
  low: { label: "Low", ja: "注意", badge: "bg-emerald-600 text-white", dot: "bg-emerald-600" },
  unknown: { label: "未評価", ja: "未評価", badge: "bg-gray-300 text-gray-800", dot: "bg-gray-400" },
};

export const OS_OPTIONS = ["Windows", "macOS", "Linux", "iOS", "Android", "ChromeOS", "FreeBSD", "Network/Firmware"];

export const LANGUAGE_OPTIONS = [
  "JavaScript/TypeScript",
  "Python",
  "Go",
  "Java/Kotlin",
  "C#/.NET",
  "PHP",
  "Ruby",
  "Rust",
  "Swift",
  "Dart",
  "Elixir/Erlang",
  "GitHub Actions",
];

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ja-JP", { timeZone: "Asia/Tokyo", month: "2-digit", day: "2-digit" });

/** <script type="application/json"> に埋め込む JSON（</script> での脱出を防ぐ） */
export const safeJson = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
