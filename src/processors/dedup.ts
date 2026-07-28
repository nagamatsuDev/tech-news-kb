/**
 * 重複排除モジュール
 * URL ベースで重複を検出する
 * 既存の index.json と突合することで、過去に収集済みの記事も排除できる
 */

import type { Article } from "../types/index.js";

/**
 * URL を正規化して比較しやすくする
 * - トレーリングスラッシュを除去
 * - クエリパラメータのうちトラッキング系（utm_*）を除去
 * - フラグメント (#) を除去
 */
function normalizeUrl(url: string): string {
  try {
    const u = new URL(url);
    // トラッキングパラメータを除去
    for (const key of [...u.searchParams.keys()]) {
      if (key.startsWith("utm_") || key === "ref" || key === "source") {
        u.searchParams.delete(key);
      }
    }
    u.hash = "";
    return u.toString().replace(/\/$/, "");
  } catch {
    // URL パースに失敗した場合はそのまま返す
    return url.replace(/\/$/, "");
  }
}

/**
 * 新規記事リストから重複を除去する
 *
 * @param articles - 重複排除前の記事一覧
 * @param existingUrls - すでに収集済みの URL セット（index.json から読み込む）
 * @returns 重複を除いた記事一覧
 */
export function deduplicateArticles(
  articles: Article[],
  existingUrls: Set<string> = new Set()
): Article[] {
  const seenUrls = new Set<string>(
    [...existingUrls].map(normalizeUrl)
  );
  const result: Article[] = [];

  for (const article of articles) {
    const normalized = normalizeUrl(article.url);
    if (!seenUrls.has(normalized)) {
      seenUrls.add(normalized);
      result.push(article);
    }
  }

  const removed = articles.length - result.length;
  if (removed > 0) {
    console.log(`[Dedup] Removed ${removed} duplicates. ${result.length} articles remain.`);
  }

  return result;
}
