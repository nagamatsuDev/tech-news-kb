/**
 * Markdown ライター
 * 記事を Obsidian 互換の Markdown ファイルとして書き出す
 * あわせて data/index.json を更新する
 */

import fs from "node:fs/promises";
import path from "node:path";
import type { Article, ArticleIndex, ArticleIndexEntry } from "../types/index.js";

/** data ディレクトリのルートパス（main.ts からの相対パス） */
const DATA_DIR = path.resolve(process.cwd(), "data");
const INDEX_PATH = path.join(DATA_DIR, "index.json");

// ----------------------------------------------------------------
// ヘルパー関数
// ----------------------------------------------------------------

/**
 * 日付オブジェクトから "YYYY/MM/YYYY-MM-DD" 形式のパスを生成する
 */
function dateToDirPath(date: Date): { dir: string; filename: string; mdPath: string } {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");
  const dir = path.join(DATA_DIR, "articles", yyyy, mm);
  const filename = `${yyyy}-${mm}-${dd}.md`;
  const mdPath = `articles/${yyyy}/${mm}/${filename}`;
  return { dir, filename, mdPath };
}

/**
 * ソース名を読みやすいラベルに変換する
 */
function sourceLabel(article: Article): string {
  switch (article.source) {
    case "rss": return article.category ? `RSS (${article.category})` : "RSS";
    case "hackernews": return "Hacker News";
    case "github-trending": return "GitHub Trending";
  }
}

/**
 * Obsidian 互換の Frontmatter を生成する
 * wikilink で [[タグ名]] から検索できるように tags を配列形式で出力する
 */
function buildFrontmatter(date: Date, articles: Article[]): string {
  const dateStr = date.toISOString().split("T")[0];

  // その日に登場したタグをすべて収集
  const allTags = [...new Set(articles.flatMap((a) => a.tags))].sort();

  const lines = [
    "---",
    `date: "${dateStr}"`,
    `total: ${articles.length}`,
    `tags:`,
    ...allTags.map((t) => `  - ${t}`),
    `sources:`,
    `  rss: ${articles.filter((a) => a.source === "rss").length}`,
    `  hackernews: ${articles.filter((a) => a.source === "hackernews").length}`,
    `  github_trending: ${articles.filter((a) => a.source === "github-trending").length}`,
    "---",
  ];

  return lines.join("\n");
}

/**
 * 記事1件分の Markdown ブロックを生成する
 */
function buildArticleBlock(article: Article, index: number): string {
  const tags = article.tags.map((t) => `#${t}`).join(" ");
  const source = sourceLabel(article);

  return [
    `### ${index + 1}. ${article.title}`,
    "",
    `- **URL**: [${article.url}](${article.url})`,
    `- **Source**: ${source}`,
    `- **Published**: ${article.publishedAt.split("T")[0]}`,
    tags ? `- **Tags**: ${tags}` : null,
    article.summary ? `- **Summary**: ${article.summary}` : null,
    "",
  ]
    .filter((line) => line !== null)
    .join("\n");
}

/**
 * 1日分の Markdown ファイル全体を生成する
 */
function buildMarkdownContent(date: Date, articles: Article[]): string {
  const dateStr = date.toISOString().split("T")[0];

  // ソースごとに記事を分類
  const bySource = {
    rss: articles.filter((a) => a.source === "rss"),
    hackernews: articles.filter((a) => a.source === "hackernews"),
    github: articles.filter((a) => a.source === "github-trending"),
  };

  // RSS はカテゴリごとにまとめる
  const byCategory: Record<string, Article[]> = {};
  for (const a of bySource.rss) {
    const cat = a.category ?? "other";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(a);
  }

  const sections: string[] = [
    buildFrontmatter(date, articles),
    "",
    `# Tech News — ${dateStr}`,
    "",
    `> ${articles.length} articles collected from RSS, Hacker News, and GitHub Trending.`,
    "",
    "---",
  ];

  // RSS セクション
  if (bySource.rss.length > 0) {
    sections.push("", "## RSS");
    for (const [cat, catArticles] of Object.entries(byCategory)) {
      sections.push("", `### ${cat.charAt(0).toUpperCase() + cat.slice(1)}`);
      catArticles.forEach((a, i) => {
        sections.push("", buildArticleBlock(a, i));
      });
    }
  }

  // Hacker News セクション
  if (bySource.hackernews.length > 0) {
    sections.push("", "## Hacker News", "");
    bySource.hackernews.forEach((a, i) => {
      sections.push(buildArticleBlock(a, i));
    });
  }

  // GitHub Trending セクション
  if (bySource.github.length > 0) {
    sections.push("", "## GitHub Trending", "");
    bySource.github.forEach((a, i) => {
      sections.push(buildArticleBlock(a, i));
    });
  }

  return sections.join("\n");
}

// ----------------------------------------------------------------
// メイン書き込み関数
// ----------------------------------------------------------------

/**
 * 今日の Markdown ファイルに記事を書き込む
 * ファイルが既存の場合は末尾に追記する（同日複数回実行に対応）
 */
export async function writeArticles(articles: Article[]): Promise<{
  mdPath: string;
  written: number;
}> {
  if (articles.length === 0) {
    return { mdPath: "", written: 0 };
  }

  const today = new Date();
  const { dir, filename, mdPath } = dateToDirPath(today);
  const fullPath = path.join(dir, filename);

  // ディレクトリが存在しない場合は作成
  await fs.mkdir(dir, { recursive: true });

  const content = buildMarkdownContent(today, articles);
  await fs.writeFile(fullPath, content, "utf-8");

  console.log(`[Writer] Wrote ${articles.length} articles to ${mdPath}`);
  return { mdPath, written: articles.length };
}

/**
 * data/index.json を読み込む
 * ファイルが存在しない場合は空のインデックスを返す
 */
export async function loadIndex(): Promise<ArticleIndex> {
  try {
    const raw = await fs.readFile(INDEX_PATH, "utf-8");
    return JSON.parse(raw) as ArticleIndex;
  } catch {
    return {
      updatedAt: new Date().toISOString(),
      totalCount: 0,
      articles: [],
    };
  }
}

/**
 * data/index.json を更新する
 * 新規記事を先頭に追加し、totalCount を更新する
 */
export async function updateIndex(
  newArticles: Article[],
  mdPath: string
): Promise<void> {
  const index = await loadIndex();

  const newEntries: ArticleIndexEntry[] = newArticles.map((a) => ({
    id: a.id,
    title: a.title,
    url: a.url,
    source: a.source,
    category: a.category,
    summary: a.summary,
    tags: a.tags,
    publishedAt: a.publishedAt,
    fetchedAt: a.fetchedAt,
    mdPath,
  }));

  // 新規記事を先頭に追加
  index.articles = [...newEntries, ...index.articles];
  index.totalCount = index.articles.length;
  index.updatedAt = new Date().toISOString();

  // data ディレクトリが存在しない場合は作成
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(INDEX_PATH, JSON.stringify(index, null, 2), "utf-8");

  console.log(`[Index] Updated. Total: ${index.totalCount} articles`);
}

/**
 * index.json から既存の URL セットを取得する（重複排除用）
 */
export async function loadExistingUrls(): Promise<Set<string>> {
  const index = await loadIndex();
  return new Set(index.articles.map((a) => a.url));
}
