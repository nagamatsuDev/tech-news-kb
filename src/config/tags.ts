/**
 * ルールベースのタグ定義
 * キーワードが記事タイトル・概要に含まれていれば自動的にタグを付与する
 * Phase 2 以降で LLM タグ付けに移行する場合もこのルールを補完的に使用できる
 */

/**
 * タグルールの型
 * keywords のいずれかが本文に含まれていれば tag を付与する
 */
export interface TagRule {
  /** 付与するタグ名 */
  tag: string;
  /** マッチさせるキーワード（小文字で比較） */
  keywords: string[];
}

/**
 * タグルール一覧
 * 順序に意味はない。複数ルールにマッチした場合は全タグが付く
 */
export const TAG_RULES: TagRule[] = [
  // ----------------------------------------------------------------
  // フレームワーク / ライブラリ
  // ----------------------------------------------------------------
  { tag: "react", keywords: ["react", "jsx", "tsx", "react dom", "react server"] },
  { tag: "nextjs", keywords: ["next.js", "nextjs", "next 13", "next 14", "next 15", "app router", "pages router"] },
  { tag: "typescript", keywords: ["typescript", "tsc", "type-safe", "typesafe", "ts ", ".ts "] },
  { tag: "nodejs", keywords: ["node.js", "nodejs", "node ", "npm ", "cjs", "esm"] },
  { tag: "bun", keywords: ["bun ", "bunjs", "bun runtime"] },
  { tag: "pnpm", keywords: ["pnpm"] },
  { tag: "vite", keywords: ["vite", "vitejs"] },
  { tag: "astro", keywords: ["astro", "astrojs"] },

  // ----------------------------------------------------------------
  // AI / ML
  // ----------------------------------------------------------------
  { tag: "llm", keywords: ["llm", "large language model", "language model"] },
  { tag: "openai", keywords: ["openai", "gpt-4", "gpt-3", "chatgpt", "gpt4", "gpt3"] },
  { tag: "anthropic", keywords: ["anthropic", "claude"] },
  { tag: "huggingface", keywords: ["hugging face", "huggingface", "transformers"] },
  { tag: "ai", keywords: ["artificial intelligence", " ai ", "machine learning", "deep learning", "neural"] },
  { tag: "rag", keywords: ["rag", "retrieval augmented", "vector search", "embedding"] },

  // ----------------------------------------------------------------
  // セキュリティ
  // ----------------------------------------------------------------
  { tag: "security", keywords: ["security", "vulnerability", "cve", "exploit", "patch", "advisory"] },
  { tag: "auth", keywords: ["authentication", "authorization", "oauth", "jwt", "session"] },
  { tag: "supply-chain", keywords: ["supply chain", "dependency", "malicious package", "npm package"] },

  // ----------------------------------------------------------------
  // インフラ / DevOps
  // ----------------------------------------------------------------
  { tag: "github-actions", keywords: ["github actions", "github action", "workflow"] },
  { tag: "docker", keywords: ["docker", "container", "dockerfile"] },
  { tag: "vercel", keywords: ["vercel"] },
  { tag: "cloudflare", keywords: ["cloudflare"] },

  // ----------------------------------------------------------------
  // Web 標準 / ブラウザ
  // ----------------------------------------------------------------
  { tag: "css", keywords: ["css", "tailwind", "sass", "scss", "postcss"] },
  { tag: "performance", keywords: ["performance", "web vitals", "core vitals", "lighthouse", "bundle size"] },
  { tag: "accessibility", keywords: ["accessibility", "a11y", "aria", "wcag"] },

  // ----------------------------------------------------------------
  // リリース / アップデート
  // ----------------------------------------------------------------
  { tag: "release", keywords: ["release", "released", "v1.", "v2.", "v3.", "v4.", "v5.", "changelog", "update"] },
  { tag: "breaking-change", keywords: ["breaking change", "breaking changes", "migration", "deprecat"] },
];
