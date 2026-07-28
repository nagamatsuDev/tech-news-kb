/**
 * GitHub Trending 収集モジュール
 * 公式 API が存在しないため HTML スクレイピングを使用する
 * GitHub の HTML 構造変更で壊れる可能性があるため、エラーハンドリングを厚めにする
 */

import crypto from "node:crypto";
import type { Article, CollectError } from "../types/index.js";
import { GITHUB_TRENDING_LANGUAGE, GITHUB_TRENDING_PERIOD } from "../config/sources.js";

const GITHUB_TRENDING_URL = "https://github.com/trending";

function generateId(url: string): string {
  return crypto.createHash("sha1").update(url).digest("hex").slice(0, 12);
}

/**
 * HTML 文字列から GitHub Trending のリポジトリ情報を抽出する
 * セレクタではなく文字列パースで実装することで、依存ライブラリを最小化する
 *
 * 抽出戦略:
 *   <article class="Box-row"> が1リポジトリに対応する
 *   その中の最初の <h2> の <a href="..."> がリポジトリリンク
 */
function parseGithubTrending(html: string): Array<{
  name: string;
  url: string;
  description: string;
  language: string;
  stars: string;
}> {
  const results = [];

  // <article class="Box-row"> ... </article> を抽出
  const articleRegex = /<article[^>]*class="[^"]*Box-row[^"]*"[^>]*>([\s\S]*?)<\/article>/g;
  let match: RegExpExecArray | null;

  while ((match = articleRegex.exec(html)) !== null) {
    const articleHtml = match[1];

    // リポジトリのパス（例: /facebook/react）を抽出
    const linkMatch = articleHtml.match(/<h2[^>]*>[\s\S]*?<a[^>]*href="(\/[^"]+)"[^>]*>/);
    if (!linkMatch) continue;

    const repoPath = linkMatch[1].trim();
    const url = `https://github.com${repoPath}`;
    const name = repoPath.replace("/", "").replace("/", " / ");

    // 概要文を抽出（p タグの中身）
    const descMatch = articleHtml.match(/<p[^>]*class="[^"]*col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/);
    const description = descMatch
      ? descMatch[1].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim()
      : "";

    // 言語を抽出
    const langMatch = articleHtml.match(/itemprop="programmingLanguage"[^>]*>([\s\S]*?)<\/span>/);
    const language = langMatch ? langMatch[1].replace(/<[^>]*>/g, "").trim() : "";

    // スター数を抽出
    const starsMatch = articleHtml.match(/aria-label="star"[\s\S]*?<\/svg>([\s\S]*?)(?:<\/a>|<span)/);
    const stars = starsMatch ? starsMatch[1].replace(/\s+/g, "").trim() : "0";

    if (url && name) {
      results.push({ name, url, description, language, stars });
    }
  }

  return results;
}

/**
 * GitHub Trending ページを取得してリポジトリ一覧を返す
 */
export async function fetchGithubTrending(): Promise<{
  articles: Article[];
  errors: CollectError[];
}> {
  const fetchedAt = new Date().toISOString();
  const errors: CollectError[] = [];

  // クエリパラメータを組み立てる
  const params = new URLSearchParams();
  if (GITHUB_TRENDING_LANGUAGE) params.set("l", GITHUB_TRENDING_LANGUAGE);
  if (GITHUB_TRENDING_PERIOD) params.set("since", GITHUB_TRENDING_PERIOD);
  const url = `${GITHUB_TRENDING_URL}?${params.toString()}`;

  let html: string;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; tech-news-kb/1.0)",
        "Accept-Language": "en-US,en;q=0.9",
      },
      signal: AbortSignal.timeout(20_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    html = await res.text();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    errors.push({ source: "GitHub Trending", message });
    return { articles: [], errors };
  }

  const repos = parseGithubTrending(html);

  if (repos.length === 0) {
    // HTML 構造が変わった可能性が高い
    errors.push({
      source: "GitHub Trending",
      message: "No repositories found. GitHub HTML structure may have changed.",
    });
    return { articles: [], errors };
  }

  const articles: Article[] = repos.map((repo) => ({
    id: generateId(repo.url),
    title: repo.name,
    url: repo.url,
    source: "github-trending" as const,
    summary: [
      repo.description,
      repo.language && `Language: ${repo.language}`,
      repo.stars && `Stars: ${repo.stars}`,
    ]
      .filter(Boolean)
      .join(" | "),
    tags: [],
    publishedAt: fetchedAt,
    fetchedAt,
  }));

  console.log(`[GitHub] ${articles.length} trending repos fetched`);
  return { articles, errors };
}
