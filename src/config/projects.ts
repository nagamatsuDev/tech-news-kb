/**
 * 監視対象プロジェクト
 *
 * ここに自分のプロジェクトを追加すると、依存パッケージに既知の脆弱性があるかを
 * 毎朝 OSV.dev で照合し、該当があれば「タスク」として表示する。
 *
 * 追加例:
 *   {
 *     name: "my-app",
 *     source: { type: "github", repo: "nagamatsuDev/my-app" },
 *     // manifests 省略時はリポジトリ内の依存ファイルを自動検出
 *     watch: { os: ["linux"], products: ["nginx", "postgresql"] },
 *   },
 *
 * private リポジトリを読む場合は、リポジトリの Secrets に PROJECTS_TOKEN
 * （対象リポジトリの Contents: Read 権限を持つ fine-grained PAT）を登録する。
 */

import type { ProjectConfig } from "../types/vuln.js";

export const PROJECTS: ProjectConfig[] = [
  {
    // このリポジトリ自身（Actions 上ではチェックアウト済みのファイルを読む）
    name: "tech-news-kb",
    source: { type: "local", path: "." },
    // 実行環境の Node.js ランタイム自体の脆弱性も監視する
    watch: { products: ["node.js"] },
  },
];
