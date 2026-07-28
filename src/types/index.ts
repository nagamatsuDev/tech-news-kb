/**
 * 型定義の中央管理ファイル
 * Phase 4 の RAG 拡張を見越して embedding / vector フィールドを予約済み
 */

// ----------------------------------------------------------------
// ニュース記事の基本型
// ----------------------------------------------------------------

/** 収集したニュース記事1件を表す型 */
export interface Article {
  /** 一意識別子（URL の SHA-1 ハッシュ） */
  id: string;
  /** 記事タイトル（Phase 2 以降は日本語訳が入る） */
  title: string;
  /** 元記事の URL */
  url: string;
  /** 収集元サービス名 */
  source: SourceType;
  /** RSS カテゴリ（RSS 以外は undefined） */
  category?: FeedCategory;
  /** 記事の概要文（Phase 2 以降は日本語訳が入る） */
  summary: string;
  /** 自動付与されたタグ一覧 */
  tags: string[];
  /** 記事の公開日時（ISO 8601） */
  publishedAt: string;
  /** 収集日時（ISO 8601） */
  fetchedAt: string;
  /** Phase 2 で追加：日本語タイトル */
  titleJa?: string;
  /** Phase 2 で追加：日本語要約 */
  summaryJa?: string;
  /** Phase 4 で追加：ベクトル埋め込み用プレースホルダー */
  embedding?: number[];
}

// ----------------------------------------------------------------
// 収集ソースの型
// ----------------------------------------------------------------

/** サポートする収集元サービス */
export type SourceType = "rss" | "hackernews" | "github-trending";

/** RSS フィードのカテゴリ */
export type FeedCategory = "react" | "node" | "ai" | "security";

/** RSS フィードソースの定義 */
export interface FeedSource {
  /** 表示名 */
  name: string;
  /** フィードの URL */
  url: string;
  /** カテゴリ */
  category: FeedCategory;
}

// ----------------------------------------------------------------
// インデックスファイルの型
// ----------------------------------------------------------------

/**
 * data/index.json の構造
 * Phase 4 でベクトル DB への移行時にこのスキーマを参照する
 */
export interface ArticleIndex {
  /** 最終更新日時（ISO 8601） */
  updatedAt: string;
  /** 総記事数 */
  totalCount: number;
  /** 記事一覧（最新順） */
  articles: ArticleIndexEntry[];
}

/** インデックスに格納する記事の要約情報 */
export interface ArticleIndexEntry {
  id: string;
  title: string;
  url: string;
  source: SourceType;
  category?: FeedCategory;
  summary: string;
  tags: string[];
  publishedAt: string;
  fetchedAt: string;
  /** その日の Markdown ファイルへの相対パス */
  mdPath: string;
}

// ----------------------------------------------------------------
// 実行結果の型
// ----------------------------------------------------------------

/** 1回の収集実行結果 */
export interface CollectResult {
  /** 収集に成功した記事数 */
  fetched: number;
  /** 重複排除後の新規記事数 */
  newArticles: number;
  /** 書き込んだファイル一覧 */
  writtenFiles: string[];
  /** エラーが発生したソース一覧 */
  errors: CollectError[];
}

/** 収集エラーの詳細 */
export interface CollectError {
  source: string;
  message: string;
}
