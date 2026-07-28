/**
 * RSS フィードソース設定
 * URL を追加・変更するだけで収集対象を増減できる
 */

import type { FeedSource } from "../types/index.js";

/**
 * 収集対象の RSS フィード一覧
 * カテゴリごとに整理されているので、タグ付けにも再利用する
 */
export const FEED_SOURCES: FeedSource[] = [
  // ----------------------------------------------------------------
  // React カテゴリ
  // ----------------------------------------------------------------
  {
    name: "React Blog",
    url: "https://react.dev/rss.xml",
    category: "react",
  },
  {
    name: "Next.js Blog",
    url: "https://nextjs.org/feed.xml",
    category: "react",
  },
  {
    name: "Frontend Focus",
    url: "https://frontendfoc.us/rss",
    category: "react",
  },
  {
    name: "TypeScript Blog",
    url: "https://devblogs.microsoft.com/typescript/feed/",
    category: "react",
  },

  // ----------------------------------------------------------------
  // Node カテゴリ
  // ----------------------------------------------------------------
  {
    name: "Node.js Blog",
    url: "https://nodejs.org/en/feed/blog.xml",
    category: "node",
  },
  {
    name: "pnpm News",
    url: "https://pnpm.io/blog/rss.xml",
    category: "node",
  },
  {
    name: "Bun Blog",
    url: "https://bun.sh/rss",
    category: "node",
  },

  // ----------------------------------------------------------------
  // AI カテゴリ
  // ----------------------------------------------------------------
  {
    name: "OpenAI Blog",
    url: "https://openai.com/blog/rss.xml",
    category: "ai",
  },
  {
    name: "Anthropic News",
    url: "https://www.anthropic.com/rss.xml",
    category: "ai",
  },
  {
    name: "Hugging Face Blog",
    url: "https://huggingface.co/blog/feed.xml",
    category: "ai",
  },

  // ----------------------------------------------------------------
  // Security カテゴリ
  // ----------------------------------------------------------------
  {
    name: "GitHub Advisories",
    url: "https://github.com/security-advisories.atom",
    category: "security",
  },
  {
    name: "Snyk Blog",
    url: "https://snyk.io/blog/feed/",
    category: "security",
  },
  {
    name: "Node.js Security",
    url: "https://nodejs.org/en/feed/vulnerability.xml",
    category: "security",
  },
];

/** Hacker News の取得件数上限 */
export const HN_TOP_STORY_LIMIT = 30;

/** GitHub Trending の取得対象言語（空文字 = 全言語） */
export const GITHUB_TRENDING_LANGUAGE = "";

/** GitHub Trending の期間設定 */
export const GITHUB_TRENDING_PERIOD: "daily" | "weekly" | "monthly" = "daily";
