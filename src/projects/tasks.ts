/**
 * 自分のプロジェクトに関係する脆弱性を「タスク」にする
 *
 * 1. dependency: 依存パッケージ（ロックファイルのバージョン）が OSV の既知脆弱性に該当
 * 2. watch     : 監視リスト（OS・製品名）が今回収集した脆弱性に該当 → 要確認
 *
 * 前回の tasks.json と比較し、該当しなくなったタスクは自動で「解決済み」にする。
 */

import type { ProjectConfig, TaskIndex, VulnTask, Vulnerability } from "../types/vuln.js";
import { SEVERITY_RANK } from "../types/vuln.js";
import { loadProjectDependencies } from "./loader.js";
import { osvFixedVersion, osvSeverity, queryOsv } from "../fetchers/osv.js";

/** 解決済みタスクを残す日数 */
const RESOLVED_KEEP_DAYS = 30;

const canonicalId = (id: string, aliases: string[] = []) => aliases.find((a) => a.startsWith("CVE-")) ?? id;

function dependencyAction(pkg: string, fixed?: string, approximate = false): string {
  const base = fixed ? `${pkg} を ${fixed} 以上に更新する` : `${pkg} に修正版がまだない — 回避策を確認するか代替を検討する`;
  return approximate ? `${base}（package.json の範囲から推定。ロックファイルで実バージョンを確認）` : base;
}

/** 依存パッケージのタスクを作る */
async function dependencyTasks(project: ProjectConfig, now: string) {
  const { manifests, deps } = await loadProjectDependencies(project);
  const matches = await queryOsv(deps);
  const tasks = new Map<string, VulnTask>();

  for (const { dep, vuln } of matches) {
    const vulnId = canonicalId(vuln.id, vuln.aliases);
    const id = `${project.name}:${vulnId}:${dep.ecosystem}:${dep.name}`;
    const { severity, score } = osvSeverity(vuln);
    const fixed = osvFixedVersion(vuln, dep);
    const prev = tasks.get(id);

    if (prev) {
      // 同じ脆弱性の別 ID（GHSA と PYSEC など）や別バージョンをまとめる
      prev.installedVersions = [...new Set([...prev.installedVersions, dep.version])];
      prev.manifests = [...new Set([...prev.manifests, dep.manifest])];
      prev.aliases = [...new Set([...prev.aliases, vuln.id, ...(vuln.aliases ?? [])])].filter((a) => a !== vulnId);
      prev.dev = prev.dev && dep.dev;
      if (SEVERITY_RANK[severity] > SEVERITY_RANK[prev.severity]) prev.severity = severity;
      if (fixed && (!prev.fixedVersion || fixed.localeCompare(prev.fixedVersion, undefined, { numeric: true }) > 0)) {
        prev.fixedVersion = fixed;
        prev.action = dependencyAction(dep.name, fixed, prev.approximate);
      }
      continue;
    }

    tasks.set(id, {
      id,
      project: project.name,
      kind: "dependency",
      vulnId,
      aliases: [vuln.id, ...(vuln.aliases ?? [])].filter((a) => a !== vulnId),
      title: vuln.summary || vuln.details?.slice(0, 120) || vulnId,
      severity,
      cvssScore: score,
      kev: false,
      url: `https://osv.dev/vulnerability/${vuln.id}`,
      package: dep.name,
      ecosystem: dep.ecosystem,
      installedVersions: [dep.version],
      fixedVersion: fixed,
      dev: dep.dev,
      approximate: dep.approximate,
      manifests: [dep.manifest],
      action: dependencyAction(dep.name, fixed, dep.approximate),
      status: "open",
      firstSeenAt: now,
      updatedAt: now,
    });
  }
  return { manifests, depCount: deps.length, tasks: [...tasks.values()] };
}

/** 監視リスト（OS・製品）のタスクを作る */
function watchTasks(project: ProjectConfig, vulns: Vulnerability[], now: string): VulnTask[] {
  const out: VulnTask[] = [];
  const osWords = (project.watch?.os ?? []).map((w) => w.toLowerCase());
  const productWords = (project.watch?.products ?? []).map((w) => w.toLowerCase());
  if (osWords.length === 0 && productWords.length === 0) return out;

  for (const v of vulns) {
    // 説明文まで見ると「Node.js 向けライブラリ」などを拾いすぎるので、タイトルと CPE 製品名だけで照合
    const text = `${v.title} ${v.products.join(" ")}`.toLowerCase();
    const osList = v.os.map((o) => o.toLowerCase());
    // OS は範囲が広いので Critical または KEV のみ、製品は High 以上
    const osHit =
      (v.kev || v.severity === "critical") &&
      osWords.find((w) => osList.includes(w) || new RegExp(`\\b${escapeRe(w)}\\b`).test(text));
    const productHit =
      (v.kev || SEVERITY_RANK[v.severity] >= SEVERITY_RANK.high) &&
      productWords.find((w) => new RegExp(`(^|[^a-z0-9])${escapeRe(w)}([^a-z0-9]|$)`).test(text));
    const hit = productHit || osHit;
    if (!hit) continue;

    out.push({
      id: `${project.name}:${v.id}:watch:${hit}`,
      project: project.name,
      kind: "watch",
      vulnId: v.id,
      aliases: v.aliases,
      title: v.title,
      severity: v.severity,
      cvssScore: v.cvssScore,
      kev: Boolean(v.kev),
      url: v.url,
      package: hit,
      installedVersions: [],
      dev: false,
      approximate: false,
      manifests: [],
      action: v.kev?.requiredAction
        ? `「${hit}」の利用バージョンが影響を受けるか確認する（CISA 推奨: ${v.kev.requiredAction}）`
        : `「${hit}」の利用バージョンが影響を受けるか確認し、必要ならパッチを適用する`,
      status: "open",
      firstSeenAt: now,
      updatedAt: now,
    });
  }
  return out;
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** 全プロジェクトをスキャンし、前回のタスクと統合した TaskIndex を返す */
export async function buildTasks(
  projects: ProjectConfig[],
  vulns: Vulnerability[],
  previous: TaskIndex | undefined,
): Promise<TaskIndex> {
  const now = new Date().toISOString();
  const current: VulnTask[] = [];
  const summaries: TaskIndex["projects"] = [];
  const scanned = new Set<string>();
  const kevIds = new Set(vulns.filter((v) => v.kev).flatMap((v) => [v.id, ...v.aliases]));

  for (const project of projects) {
    try {
      const { manifests, depCount, tasks } = await dependencyTasks(project, now);
      current.push(...tasks, ...watchTasks(project, vulns, now));
      summaries.push({ name: project.name, dependencies: depCount, manifests });
      scanned.add(project.name);
      console.log(`  [Project] ${project.name}: ${depCount} deps, ${tasks.length} dependency tasks`);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      summaries.push({ name: project.name, dependencies: 0, manifests: [], error: message });
      console.warn(`  [Project] ${project.name}: ${message}`);
    }
  }

  // KEV に載っている依存脆弱性はフラグを立てる
  for (const t of current) if ([t.vulnId, ...t.aliases].some((id) => kevIds.has(id))) t.kev = true;

  // 前回との統合
  const prevById = new Map((previous?.tasks ?? []).map((t) => [t.id, t]));
  const merged: VulnTask[] = current.map((t) => {
    const prev = prevById.get(t.id);
    return prev ? { ...t, firstSeenAt: prev.firstSeenAt } : t;
  });
  const currentIds = new Set(current.map((t) => t.id));
  const cutoff = Date.now() - RESOLVED_KEEP_DAYS * 86_400_000;

  for (const prev of previous?.tasks ?? []) {
    if (currentIds.has(prev.id)) continue;
    if (!projects.some((p) => p.name === prev.project)) continue; // 設定から外したプロジェクト
    if (!scanned.has(prev.project)) {
      merged.push(prev); // スキャン失敗時は状態を変えない
    } else if (prev.status === "open") {
      merged.push({ ...prev, status: "resolved", resolvedAt: now, updatedAt: now });
    } else if (prev.resolvedAt && Date.parse(prev.resolvedAt) > cutoff) {
      merged.push(prev);
    }
  }

  merged.sort(
    (a, b) =>
      Number(a.status === "resolved") - Number(b.status === "resolved") ||
      Number(b.kev) - Number(a.kev) ||
      SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity] ||
      Number(a.dev) - Number(b.dev) ||
      (b.cvssScore ?? 0) - (a.cvssScore ?? 0),
  );

  return {
    updatedAt: now,
    openCount: merged.filter((t) => t.status === "open").length,
    tasks: merged,
    projects: summaries,
  };
}
