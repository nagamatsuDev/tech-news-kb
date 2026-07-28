/**
 * ルールベース自動タグ付けモジュール
 * src/config/tags.ts のルール定義をもとに、タイトルと概要からタグを付与する
 */

import type { Article } from "../types/index.js";
import { TAG_RULES } from "../config/tags.js";

/**
 * 記事1件にタグを付与する
 * タイトル + summary を小文字化してキーワードマッチングを行う
 */
export function tagArticle(article: Article): Article {
  // 検索対象テキスト（小文字化して比較）
  const searchText = `${article.title} ${article.summary}`.toLowerCase();

  const tags = new Set<string>();

  // RSS ソースのカテゴリをタグとして追加する
  if (article.category) {
    tags.add(article.category);
  }

  // ソース種別をタグとして追加する
  if (article.source === "hackernews") tags.add("hackernews");
  if (article.source === "github-trending") tags.add("github-trending");

  // ルールベースマッチング
  for (const rule of TAG_RULES) {
    for (const keyword of rule.keywords) {
      if (searchText.includes(keyword.toLowerCase())) {
        tags.add(rule.tag);
        break; // 同じルールのキーワードが複数マッチしても1タグだけ付与
      }
    }
  }

  return { ...article, tags: [...tags].sort() };
}

/**
 * 記事リスト全体にタグを付与する
 */
export function tagArticles(articles: Article[]): Article[] {
  return articles.map(tagArticle);
}
