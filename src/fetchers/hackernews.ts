/**
 * Hacker News 収集モジュール
 * 公式の Firebase REST API を使用する（スクレイピング不要・安定）
 * https://github.com/HackerNews/API
 */

import crypto from "node:crypto";
import type { Article, CollectError } from "../types/index.js";
import { HN_TOP_STORY_LIMIT } from "../config/sources.js";

const HN_API_BASE = "https://hacker-news.firebaseio.com/v0";

/** URL から一意 ID を生成する */
function generateId(url: string): string {
  return crypto.createHash("sha1").update(url).digest("hex").slice(0, 12);
}

/** HN アイテムの型（API レスポンス） */
interface HNItem {
  id: number;
  type: string;
  title: string;
  url?: string;
  text?: string;
  score: number;
  by: string;
  time: number; // Unix タイムスタンプ
  descendants?: number;
}

/**
 * 単一 HN アイテムを取得する
 * fetch に失敗した場合は null を返す
 */
async function fetchHNItem(id: number): Promise<HNItem | null> {
  try {
    const res = await fetch(`${HN_API_BASE}/item/${id}.json`, {
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    return (await res.json()) as HNItem;
  } catch {
    return null;
  }
}

/**
 * HN アイテムを Article 型に変換する
 * URL がない記事（Ask HN / Show HN のテキスト投稿）は HN 本体リンクを使用する
 */
function hnItemToArticle(item: HNItem, fetchedAt: string): Article {
  const url = item.url || `https://news.ycombinator.com/item?id=${item.id}`;

  // text 投稿の場合は HTML タグを除去して概要として使う
  const summary = item.text
    ? item.text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 300)
    : `Score: ${item.score} | Comments: ${item.descendants ?? 0} | by ${item.by}`;

  return {
    id: generateId(url),
    title: item.title,
    url,
    source: "hackernews",
    summary,
    tags: [],
    publishedAt: new Date(item.time * 1000).toISOString(),
    fetchedAt,
  };
}

/**
 * Hacker News のトップ記事を取得する
 * 上位 N 件を並列取得するが、API 負荷を考慮して並列数を制限する
 */
export async function fetchHackerNews(): Promise<{
  articles: Article[];
  errors: CollectError[];
}> {
  const fetchedAt = new Date().toISOString();
  const errors: CollectError[] = [];

  // Step 1: トップストーリーの ID 一覧を取得
  let topIds: number[] = [];
  try {
    const res = await fetch(`${HN_API_BASE}/topstories.json`, {
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    topIds = ((await res.json()) as number[]).slice(0, HN_TOP_STORY_LIMIT);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    errors.push({ source: "Hacker News", message: `Failed to fetch top story IDs: ${message}` });
    return { articles: [], errors };
  }

  // Step 2: 各アイテムを並列取得（5件ずつバッチ処理で API 負荷を抑える）
  const BATCH_SIZE = 5;
  const items: HNItem[] = [];

  for (let i = 0; i < topIds.length; i += BATCH_SIZE) {
    const batch = topIds.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(batch.map((id) => fetchHNItem(id)));
    for (const item of results) {
      if (item && item.type === "story") {
        items.push(item);
      }
    }
  }

  const articles = items.map((item) => hnItemToArticle(item, fetchedAt));

  console.log(`[HN] ${articles.length} articles fetched`);
  return { articles, errors };
}
