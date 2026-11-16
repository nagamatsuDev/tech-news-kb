/**
 * プロジェクトの依存ファイルを読み込む
 * - local: このリポジトリ内のファイル
 * - github: GitHub API 経由（private は PROJECTS_TOKEN が必要）
 */

import fs from "node:fs/promises";
import path from "node:path";
import type { Dependency, ProjectConfig } from "../types/vuln.js";
import { IGNORE_DIRS, MANIFEST_FILES, parseManifest, selectManifests } from "./manifests.js";
import { fetchJson, fetchText } from "../fetchers/http.js";

function githubHeaders(): Record<string, string> {
  const token = process.env.PROJECTS_TOKEN || process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

/** ローカルディレクトリを再帰的に探索して依存ファイルを探す（深さ 4 まで） */
async function walkLocal(root: string, rel = "", depth = 0): Promise<string[]> {
  if (depth > 4) return [];
  const entries = await fs.readdir(path.join(root, rel), { withFileTypes: true }).catch(() => []);
  const out: string[] = [];
  for (const e of entries) {
    const p = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) {
      if (!IGNORE_DIRS.has(e.name) && !e.name.startsWith(".")) out.push(...(await walkLocal(root, p, depth + 1)));
    } else if ((MANIFEST_FILES as readonly string[]).includes(e.name)) {
      out.push(p);
    }
  }
  return out;
}

async function loadLocal(project: ProjectConfig & { source: { type: "local" } }) {
  const root = path.resolve(process.cwd(), project.source.path);
  const manifests = project.manifests ?? selectManifests(await walkLocal(root));
  const deps: Dependency[] = [];
  for (const m of manifests) {
    const text = await fs.readFile(path.join(root, m), "utf-8");
    deps.push(...parseManifest(m, text));
  }
  return { manifests, deps };
}

async function loadGithub(project: ProjectConfig & { source: { type: "github" } }) {
  const { repo } = project.source;
  let ref = project.source.ref;
  if (!ref) {
    const { data } = await fetchJson<{ default_branch: string }>(`https://api.github.com/repos/${repo}`, {
      headers: githubHeaders(),
      retries: 1,
    });
    ref = data.default_branch;
  }

  let manifests = project.manifests;
  if (!manifests) {
    const { data } = await fetchJson<{ tree: { path: string; type: string }[] }>(
      `https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`,
      { headers: githubHeaders(), retries: 1 },
    );
    const paths = data.tree
      .filter((t) => t.type === "blob")
      .map((t) => t.path)
      .filter((p) => !p.split("/").some((seg) => IGNORE_DIRS.has(seg)));
    manifests = selectManifests(paths);
  }

  const deps: Dependency[] = [];
  for (const m of manifests) {
    const text = await fetchText(
      `https://api.github.com/repos/${repo}/contents/${m.split("/").map(encodeURIComponent).join("/")}?ref=${encodeURIComponent(ref)}`,
      { ...githubHeaders(), Accept: "application/vnd.github.raw+json" },
    );
    deps.push(...parseManifest(m, text));
  }
  return { manifests, deps };
}

/** プロジェクトの依存一覧を返す（同じパッケージ・バージョンは 1 件にまとめる） */
export async function loadProjectDependencies(
  project: ProjectConfig,
): Promise<{ manifests: string[]; deps: Dependency[] }> {
  const { manifests, deps } =
    project.source.type === "local"
      ? await loadLocal(project as ProjectConfig & { source: { type: "local" } })
      : await loadGithub(project as ProjectConfig & { source: { type: "github" } });

  const seen = new Map<string, Dependency>();
  for (const d of deps) {
    const key = `${d.ecosystem}|${d.name}|${d.version}`;
    const prev = seen.get(key);
    // どこか 1 か所でも本番依存なら dev=false
    if (!prev) seen.set(key, d);
    else if (prev.dev && !d.dev) seen.set(key, { ...prev, dev: false });
  }
  return { manifests, deps: [...seen.values()] };
}
