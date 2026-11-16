/**
 * テキストベースの保存
 *
 *   data/vulns/YYYY/Www/<uuid>.md   1 件 1 ファイル
 *       frontmatter: JSON（YAML としても有効なので Obsidian のプロパティとして読める）
 *       本文: 人が読む用（日本語・原文・リンク）。すべてエスケープ済み
 *   data/ids.json                    CVE/GHSA/JVNDB → uuid、uuid → 週
 *   data/weeks/YYYY-Www.json         週ごとの一覧（サイトが読む。md から生成）
 *   data/weeks/index.json            週の一覧と件数
 *   data/vulns/state.json            前回の実行時刻
 */

import fs from "node:fs/promises";
import path from "node:path";
import type { CollectState, IdIndex, Severity, Vulnerability, WeekIndex } from "../types/vuln.js";
import { mdEscape, mdEscapeInline, mdLink, safeUrl } from "../shared/sanitize.js";
import { ID_PATTERNS } from "../shared/sanitize.js";
import { WEEK_RE } from "../shared/week.js";

export const DATA_DIR = path.resolve(process.cwd(), process.env.DATA_DIR ?? "data");
const IDS_PATH = () => path.join(DATA_DIR, "ids.json");
const STATE_PATH = () => path.join(DATA_DIR, "vulns", "state.json");

async function readJson<T>(p: string): Promise<T | undefined> {
  try {
    return JSON.parse(await fs.readFile(p, "utf-8")) as T;
  } catch {
    return undefined;
  }
}

async function writeFile(p: string, content: string) {
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, content, "utf-8");
}

export const loadIds = async (): Promise<IdIndex> => (await readJson<IdIndex>(IDS_PATH())) ?? { ids: {}, weeks: {} };
export const saveIds = (idx: IdIndex) => writeFile(IDS_PATH(), JSON.stringify(idx, null, 1) + "\n");
export const loadState = async (): Promise<CollectState> => (await readJson<CollectState>(STATE_PATH())) ?? {};
export const saveState = (s: CollectState) => writeFile(STATE_PATH(), JSON.stringify(s, null, 2) + "\n");

/** uuid と週からファイルパスを決める（どちらも検証してからパスに使う） */
export function vulnPath(uuid: string, week: string): string {
  if (!ID_PATTERNS.uuid.test(uuid)) throw new Error(`invalid uuid: ${uuid}`);
  const m = week.match(WEEK_RE);
  if (!m) throw new Error(`invalid week: ${week}`);
  return path.join(DATA_DIR, "vulns", m[1], `W${m[2]}`, `${uuid}.md`);
}

// ----------------------------------------------------------------
// Markdown 1 件
// ----------------------------------------------------------------

const SEV_LABEL: Record<Severity, string> = {
  critical: "Critical（緊急）",
  high: "High（重要）",
  medium: "Medium（警告）",
  low: "Low（注意）",
  unknown: "未評価",
};

export function renderVulnMarkdown(v: Vulnerability): string {
  const fm = JSON.stringify(v, null, 2);
  const title = v.titleJa || v.title;
  const lines = [
    "---",
    fm,
    "---",
    "",
    `# ${mdEscapeInline(title)}`,
    "",
    `- **ID**: ${v.ids.map(mdEscapeInline).join(" / ")}`,
    `- **危険度**: ${SEV_LABEL[v.severity]}${v.cvssScore !== undefined ? ` (CVSS ${v.cvssScore.toFixed(1)})` : ""}${v.kev ? " / 🔥 悪用確認 (CISA KEV)" : ""}`,
    v.os.length ? `- **OS**: ${v.os.map(mdEscapeInline).join(", ")}` : null,
    v.languages.length ? `- **言語**: ${v.languages.map(mdEscapeInline).join(", ")}` : null,
    v.packages.length
      ? `- **パッケージ**: ${v.packages
          .map((p) => mdEscapeInline(`${p.ecosystem}/${p.name} ${p.vulnerableRange ?? ""}${p.fixedVersion ? ` → ${p.fixedVersion}` : ""}`))
          .join(", ")}`
      : null,
    `- **公開**: ${v.publishedAt.slice(0, 10)}`,
    "",
  ].filter((l): l is string => l !== null);

  if (v.summaryJa) {
    lines.push(`## 概要${v.translation === "machine" ? "（機械翻訳）" : v.translation === "jvn" ? "（JVN iPedia）" : ""}`, "", mdEscape(v.summaryJa), "");
  }
  lines.push("## 原文", "", mdEscape(v.summary || v.title), "");

  if (v.links.length) {
    lines.push("## リンク", "");
    for (const l of v.links) {
      const u = safeUrl(l.url); // 保存済みでも出力直前にもう一度検証する
      if (u) lines.push(`- ${mdLink(l.label, u)}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

/** frontmatter（JSON）を読み出す */
export function parseVulnMarkdown(text: string): Vulnerability | undefined {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return undefined;
  try {
    const v = JSON.parse(m[1]) as Vulnerability;
    return ID_PATTERNS.uuid.test(v.uuid) && WEEK_RE.test(v.week) ? v : undefined;
  } catch {
    return undefined;
  }
}

export async function readVuln(uuid: string, week: string): Promise<Vulnerability | undefined> {
  try {
    return parseVulnMarkdown(await fs.readFile(vulnPath(uuid, week), "utf-8"));
  } catch {
    return undefined;
  }
}

export async function writeVuln(v: Vulnerability): Promise<void> {
  await writeFile(vulnPath(v.uuid, v.week), renderVulnMarkdown(v));
}

/** 週フォルダ内の全件を読む */
export async function readWeek(week: string): Promise<Vulnerability[]> {
  const m = week.match(WEEK_RE);
  if (!m) return [];
  const dir = path.join(DATA_DIR, "vulns", m[1], `W${m[2]}`);
  const files = await fs.readdir(dir).catch(() => [] as string[]);
  const out: Vulnerability[] = [];
  for (const f of files) {
    if (!f.endsWith(".md")) continue;
    const v = parseVulnMarkdown(await fs.readFile(path.join(dir, f), "utf-8"));
    if (v) out.push(v);
  }
  return out;
}

/** 週 JSON と週一覧を作り直す */
export async function writeWeekIndexes(weeks: string[], sort: (v: Vulnerability[]) => Vulnerability[]) {
  const indexPath = path.join(DATA_DIR, "weeks", "index.json");
  const index = (await readJson<WeekIndex>(indexPath)) ?? { updatedAt: "", weeks: [] };
  for (const week of new Set(weeks)) {
    const vulns = sort(await readWeek(week));
    await writeFile(path.join(DATA_DIR, "weeks", `${week}.json`), JSON.stringify(vulns) + "\n");
    const entry = {
      week,
      count: vulns.length,
      critical: vulns.filter((v) => v.severity === "critical").length,
      high: vulns.filter((v) => v.severity === "high").length,
      kev: vulns.filter((v) => v.kev).length,
    };
    index.weeks = [...index.weeks.filter((w) => w.week !== week), entry];
  }
  index.weeks.sort((a, b) => a.week.localeCompare(b.week));
  index.updatedAt = new Date().toISOString();
  await writeFile(indexPath, JSON.stringify(index, null, 2) + "\n");
}
