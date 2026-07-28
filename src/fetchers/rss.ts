/**
 * RSS / Atom フィード取得モジュール
 * fast-xml-parser を使って XML をパースし、Article 型に正規化する
 */

import crypto from "node:crypto";
import { XMLParser } from "fast-xml-parser";
import type { Article, FeedSource, CollectError } from "../types/index.js";

/** fast-xml-parser の設定 */
const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  // CDATA セクションをテキストとして扱う
  cdataPropName: "__cdata",
});

/**
 * URL から一意 ID を生成する（SHA-1 の先頭 12 文字）
 * Phase 4 のベクトル DB でも同じ ID を使う
 */
function generateId(url: string): string {
  return crypto.createHash("sha1").update(url).digest("hex").slice(0, 12);
}

/**
 * RSS / Atom の日付文字列を ISO 8601 に正規化する
 * パースできない場合は現在時刻を返す
 */
function normalizeDate(dateStr: string | undefined): string {
  if (!dateStr) return new Date().toISOString();
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

/**
 * HTML タグを除去してプレーンテキストを返す
 * summary フィールドの前処理に使用する
 */
function stripHtml(html: string | undefined): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 300); // 長すぎる概要は300文字で切る
}

/**
 * CDATA またはテキストノードから文字列を取り出す
 * fast-xml-parser は CDATA を { __cdata: "..." } として返す
 */
function extractText(node: unknown): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (typeof node === "object" && node !== null) {
    const obj = node as Record<string, unknown>;
    if (obj.__cdata) return String(obj.__cdata);
    if (obj["#text"]) return String(obj["#text"]);
  }
  return String(node);
}

/**
 * パース済み XML から RSS 2.0 形式のアイテム一覧を抽出する
 */
function extractRssItems(parsed: Record<string, unknown>): unknown[] {
  try {
    const channel = (parsed?.rss as Record<string, unknown>)?.channel as Record<string, unknown>;
    const items = channel?.item;
    if (!items) return [];
    return Array.isArray(items) ? items : [items];
  } catch {
    return [];
  }
}

/**
 * パース済み XML から Atom 形式のエントリ一覧を抽出する
 */
function extractAtomEntries(parsed: Record<string, unknown>): unknown[] {
  try {
    const feed = parsed?.feed as Record<string, unknown>;
    const entries = feed?.entry;
    if (!entries) return [];
    return Array.isArray(entries) ? entries : [entries];
  } catch {
    return [];
  }
}

/**
 * RSS 2.0 のアイテムを Article 型に変換する
 */
function rssItemToArticle(item: unknown, source: FeedSource, fetchedAt: string): Article | null {
  try {
    const i = item as Record<string, unknown>;
    const url = extractText(i.link).trim();
    if (!url || !url.startsWith("http")) return null;

    return {
      id: generateId(url),
      title: extractText(i.title) || "No title",
      url,
      source: "rss",
      category: source.category,
      summary: stripHtml(extractText(i.description) || extractText(i["content:encoded"])),
      tags: [],
      publishedAt: normalizeDate(extractText(i.pubDate)),
      fetchedAt,
    };
  } catch {
    return null;
  }
}

/**
 * Atom のエントリを Article 型に変換する
 */
function atomEntryToArticle(entry: unknown, source: FeedSource, fetchedAt: string): Article | null {
  try {
    const e = entry as Record<string, unknown>;

    // Atom の link は <link href="..."> の形式が多い
    const linkNode = e.link;
    let url = "";
    if (typeof linkNode === "string") {
      url = linkNode;
    } else if (Array.isArray(linkNode)) {
      const alternate = (linkNode as Record<string, unknown>[]).find(
        (l) => !l["@_rel"] || l["@_rel"] === "alternate"
      );
      url = String(alternate?.["@_href"] || "");
    } else if (typeof linkNode === "object" && linkNode !== null) {
      url = String((linkNode as Record<string, unknown>)["@_href"] || "");
    }

    if (!url || !url.startsWith("http")) return null;

    const summary =
      stripHtml(extractText(e.summary)) ||
      stripHtml(extractText(e.content)) ||
      "";

    return {
      id: generateId(url),
      title: extractText(e.title) || "No title",
      url,
      source: "rss",
      category: source.category,
      summary,
      tags: [],
      publishedAt: normalizeDate(extractText(e.published) || extractText(e.updated)),
      fetchedAt,
    };
  } catch {
    return null;
  }
}

/**
 * 単一の RSS / Atom フィードを取得してパースする
 * エラーが発生しても throw せず、{ articles, error } を返す
 */
async function fetchFeed(
  source: FeedSource,
  fetchedAt: string
): Promise<{ articles: Article[]; error?: CollectError }> {
  try {
    const res = await fetch(source.url, {
      headers: {
        // 一部サイトはブラウザ UA でないと弾く
        "User-Agent": "Mozilla/5.0 (compatible; tech-news-kb/1.0; +https://github.com/nagamatsuDev)",
      },
      signal: AbortSignal.timeout(15_000), // 15秒タイムアウト
    });

    if (!res.ok) {
      return {
        articles: [],
        error: { source: source.name, message: `HTTP ${res.status}: ${source.url}` },
      };
    }

    const xml = await res.text();
    const parsed = xmlParser.parse(xml) as Record<string, unknown>;

    // RSS 2.0 か Atom かを判定して適切なパーサーを呼ぶ
    const isAtom = !!parsed?.feed;
    const rawItems = isAtom ? extractAtomEntries(parsed) : extractRssItems(parsed);

    const articles = rawItems
      .map((item) =>
        isAtom
          ? atomEntryToArticle(item, source, fetchedAt)
          : rssItemToArticle(item, source, fetchedAt)
      )
      .filter((a): a is Article => a !== null);

    return { articles };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      articles: [],
      error: { source: source.name, message },
    };
  }
}

/**
 * 全フィードソースからまとめて記事を取得する
 * Promise.allSettled で1件失敗しても他は続行する
 */
export async function fetchAllFeeds(sources: FeedSource[]): Promise<{
  articles: Article[];
  errors: CollectError[];
}> {
  const fetchedAt = new Date().toISOString();

  const results = await Promise.allSettled(
    sources.map((source) => fetchFeed(source, fetchedAt))
  );

  const articles: Article[] = [];
  const errors: CollectError[] = [];

  for (const result of results) {
    if (result.status === "fulfilled") {
      articles.push(...result.value.articles);
      if (result.value.error) errors.push(result.value.error);
    } else {
      errors.push({ source: "unknown", message: String(result.reason) });
    }
  }

  console.log(`[RSS] ${articles.length} articles fetched from ${sources.length} feeds`);
  if (errors.length > 0) {
    console.warn(`[RSS] ${errors.length} errors:`, errors.map((e) => e.source).join(", "));
  }

  return { articles, errors };
}
