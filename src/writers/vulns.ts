/**
 * 脆弱性データの書き出し
 *   data/vulns/index.json          … サイト用の全件（保持期間内）
 *   data/vulns/state.json          … 前回実行時刻
 *   data/vulns/YYYY/MM/YYYY-MM-DD.md … 日次ダイジェスト（Obsidian 互換）
 *   data/tasks.json / data/tasks.md … 自分のプロジェクトの対応タスク
 */

import fs from "node:fs/promises";
import path from "node:path";
import type { CollectState, Severity, TaskIndex, VulnIndex, Vulnerability } from "../types/vuln.js";
import { LANGUAGE_ORDER, OS_ORDER } from "../config/vuln.js";

const DATA_DIR = path.resolve(process.cwd(), "data");
const VULN_DIR = path.join(DATA_DIR, "vulns");
const INDEX_PATH = path.join(VULN_DIR, "index.json");
const STATE_PATH = path.join(VULN_DIR, "state.json");
const TASKS_JSON = path.join(DATA_DIR, "tasks.json");
const TASKS_MD = path.join(DATA_DIR, "tasks.md");

export const SEVERITY_LABEL: Record<Severity, string> = {
  critical: "🟥 Critical（緊急）",
  high: "🟧 High（重要）",
  medium: "🟨 Medium（警告）",
  low: "🟩 Low（注意）",
  unknown: "⬜ 未評価",
};

async function readJson<T>(p: string): Promise<T | undefined> {
  try {
    return JSON.parse(await fs.readFile(p, "utf-8")) as T;
  } catch {
    return undefined;
  }
}

async function writeJson(p: string, data: unknown) {
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

export const loadVulnIndex = () => readJson<VulnIndex>(INDEX_PATH);
export const loadState = async () => (await readJson<CollectState>(STATE_PATH)) ?? {};
export const saveState = (s: CollectState) => writeJson(STATE_PATH, s);
export const loadTasks = () => readJson<TaskIndex>(TASKS_JSON);

export async function saveVulnIndex(vulns: Vulnerability[], retentionDays: number) {
  const index: VulnIndex = {
    updatedAt: new Date().toISOString(),
    retentionDays,
    totalCount: vulns.length,
    vulns,
  };
  await writeJson(INDEX_PATH, index);
}

// ----------------------------------------------------------------
// Markdown
// ----------------------------------------------------------------

const esc = (s: string) => s.replace(/\|/g, "\\|").replace(/\n/g, " ");
const cvss = (v: { cvssScore?: number }) => (v.cvssScore !== undefined ? v.cvssScore.toFixed(1) : "-");

function vulnRow(v: Vulnerability): string {
  const target = v.packages.length
    ? v.packages.slice(0, 3).map((p) => `${p.name}${p.fixedVersion ? ` → ${p.fixedVersion}` : ""}`).join(", ")
    : v.products.slice(0, 2).join(", ");
  return `| ${v.kev ? "🔥 " : ""}[${v.id}](${v.url}) | ${esc(v.title)} | ${cvss(v)} | ${v.os.join(", ") || "-"} | ${
    v.languages.join(", ") || "-"
  } | ${esc(target) || "-"} |`;
}

function groupCounts(vulns: Vulnerability[], key: "os" | "languages", order: string[]) {
  const counts = new Map<string, Vulnerability[]>();
  for (const v of vulns) for (const k of v[key]) counts.set(k, [...(counts.get(k) ?? []), v]);
  return [...counts.entries()].sort(
    ([a], [b]) => (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99),
  );
}

/** 今回新たに見つかった脆弱性の日次ダイジェストを書く */
export async function writeDailyDigest(newVulns: Vulnerability[], tasks: TaskIndex): Promise<string | undefined> {
  if (newVulns.length === 0) return undefined;
  const now = new Date();
  // JST の日付でファイルを作る
  const jst = new Date(now.getTime() + 9 * 3600_000).toISOString().slice(0, 10);
  const [yyyy, mm] = jst.split("-");
  const rel = `vulns/${yyyy}/${mm}/${jst}.md`;

  const bySev = (s: Severity) => newVulns.filter((v) => v.severity === s);
  const kev = newVulns.filter((v) => v.kev);
  const openTasks = tasks.tasks.filter((t) => t.status === "open");

  const lines: string[] = [
    "---",
    `date: "${jst}"`,
    `total: ${newVulns.length}`,
    `critical: ${bySev("critical").length}`,
    `high: ${bySev("high").length}`,
    `medium: ${bySev("medium").length}`,
    `low: ${bySev("low").length}`,
    `kev: ${kev.length}`,
    `open_tasks: ${openTasks.length}`,
    "tags:",
    "  - vulnerability",
    ...[...new Set(newVulns.flatMap((v) => [...v.os, ...v.languages]))].map(
      (t) => `  - ${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    ),
    "---",
    "",
    `# 脆弱性ダイジェスト — ${jst}`,
    "",
    `> 新着 ${newVulns.length} 件 ／ 🟥 Critical ${bySev("critical").length} ・ 🟧 High ${bySev("high").length} ・ 🟨 Medium ${
      bySev("medium").length
    } ・ 🟩 Low ${bySev("low").length} ／ 🔥 悪用確認 (KEV) ${kev.length}`,
    "",
  ];

  if (openTasks.length) {
    lines.push("## ✅ 自分のプロジェクトのタスク", "", `未対応 ${openTasks.length} 件 → [[tasks]]`, "");
    for (const t of openTasks.slice(0, 10)) {
      lines.push(`- [ ] **${t.project}** ${SEVERITY_LABEL[t.severity].split(" ")[0]} ${t.action} — [${t.vulnId}](${t.url})`);
    }
    lines.push("");
  }

  const header = ["| ID | 概要 | CVSS | OS | 言語 | 対象 / 修正版 |", "|---|---|---|---|---|---|"];

  if (kev.length) {
    lines.push("## 🔥 実際に悪用されている脆弱性 (CISA KEV)", "", ...header, ...kev.map(vulnRow), "");
  }

  lines.push("## 危険度別", "");
  for (const s of ["critical", "high", "medium", "low", "unknown"] as Severity[]) {
    const list = bySev(s);
    if (!list.length) continue;
    lines.push(`### ${SEVERITY_LABEL[s]} — ${list.length} 件`, "", ...header, ...list.map(vulnRow), "");
  }

  const link = (v: Vulnerability) => `[${v.id}](${v.url})${v.kev ? "🔥" : ""}`;
  lines.push("## OS 別", "");
  for (const [os, list] of groupCounts(newVulns, "os", OS_ORDER)) {
    lines.push(`- **${os}** (${list.length}): ${list.slice(0, 15).map(link).join(", ")}${list.length > 15 ? " …" : ""}`);
  }
  lines.push("", "## 言語別", "");
  for (const [lang, list] of groupCounts(newVulns, "languages", LANGUAGE_ORDER)) {
    lines.push(`- **${lang}** (${list.length}): ${list.slice(0, 15).map(link).join(", ")}${list.length > 15 ? " …" : ""}`);
  }
  lines.push("");

  const full = path.join(DATA_DIR, rel);
  await fs.mkdir(path.dirname(full), { recursive: true });
  await fs.writeFile(full, lines.join("\n"), "utf-8");
  return rel;
}

/** tasks.json と Obsidian 用のチェックリスト tasks.md を書く */
export async function saveTasks(tasks: TaskIndex) {
  await writeJson(TASKS_JSON, tasks);

  const lines: string[] = [
    "---",
    `updated: "${tasks.updatedAt}"`,
    `open: ${tasks.openCount}`,
    "tags:",
    "  - vulnerability",
    "  - task",
    "---",
    "",
    "# 脆弱性対応タスク",
    "",
    "> 依存パッケージを更新すると、次回の収集で自動的に「解決済み」になります。",
    "",
  ];

  for (const p of tasks.projects) {
    const list = tasks.tasks.filter((t) => t.project === p.name);
    const open = list.filter((t) => t.status === "open");
    lines.push(`## ${p.name}`, "");
    if (p.error) lines.push(`> ⚠️ スキャン失敗: ${p.error}`, "");
    lines.push(`依存 ${p.dependencies} 件（${p.manifests.join(", ") || "依存ファイルなし"}）／ 未対応 ${open.length} 件`, "");
    for (const t of open) {
      const badges = [SEVERITY_LABEL[t.severity].split(" ")[0], t.kev ? "🔥KEV" : "", t.dev ? "dev" : "", t.kind === "watch" ? "要確認" : ""]
        .filter(Boolean)
        .join(" ");
      const ver = t.installedVersions.length ? ` (使用中: ${t.installedVersions.join(", ")})` : "";
      lines.push(`- [ ] ${badges} ${t.action}${ver} — [${t.vulnId}](${t.url}) ${esc(t.title)}`);
    }
    for (const t of list.filter((t) => t.status === "resolved")) {
      lines.push(`- [x] ~~${t.package} ${t.vulnId}~~ 解決 ${t.resolvedAt?.slice(0, 10)}`);
    }
    lines.push("");
  }
  await fs.writeFile(TASKS_MD, lines.join("\n"), "utf-8");
}
