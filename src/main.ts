/**
 * エントリポイント
 * 収集パイプライン全体を順番に実行する
 *
 * 実行順:
 *   1. 既存インデックスを読み込む（重複排除用）
 *   2. RSS / HN / GitHub Trending を並列取得
 *   3. 重複排除
 *   4. タグ付け
 *   5. Markdown ファイルに書き込む
 *   6. index.json を更新する
 *   7. 実行結果をサマリー表示
 */

import { fetchAllFeeds } from "./fetchers/rss.js";
import { fetchHackerNews } from "./fetchers/hackernews.js";
import { fetchGithubTrending } from "./fetchers/github.js";
import { deduplicateArticles } from "./processors/dedup.js";
import { tagArticles } from "./processors/tagger.js";
import { writeArticles, updateIndex, loadExistingUrls } from "./writers/markdown.js";
import { FEED_SOURCES } from "./config/sources.js";
import type { CollectError } from "./types/index.js";

async function main(): Promise<void> {
  console.log("=".repeat(50));
  console.log(`[Start] Tech News KB Collection — ${new Date().toISOString()}`);
  console.log("=".repeat(50));

  const allErrors: CollectError[] = [];

  // ----------------------------------------------------------------
  // Step 1: 既存インデックスを読み込む
  // ----------------------------------------------------------------
  console.log("\n[Step 1] Loading existing URL index for deduplication...");
  const existingUrls = await loadExistingUrls();
  console.log(`  → ${existingUrls.size} existing URLs loaded`);

  // ----------------------------------------------------------------
  // Step 2: 各ソースから並列取得
  // ----------------------------------------------------------------
  console.log("\n[Step 2] Fetching articles from all sources...");

  const [rssResult, hnResult, githubResult] = await Promise.all([
    fetchAllFeeds(FEED_SOURCES),
    fetchHackerNews(),
    fetchGithubTrending(),
  ]);

  allErrors.push(...rssResult.errors, ...hnResult.errors, ...githubResult.errors);

  const rawArticles = [
    ...rssResult.articles,
    ...hnResult.articles,
    ...githubResult.articles,
  ];
  console.log(`  → Total fetched: ${rawArticles.length} articles`);

  // ----------------------------------------------------------------
  // Step 3: 重複排除
  // ----------------------------------------------------------------
  console.log("\n[Step 3] Deduplicating...");
  const dedupedArticles = deduplicateArticles(rawArticles, existingUrls);
  console.log(`  → ${dedupedArticles.length} new articles after dedup`);

  if (dedupedArticles.length === 0) {
    console.log("\n[Done] No new articles to write. Exiting.");
    printErrors(allErrors);
    return;
  }

  // ----------------------------------------------------------------
  // Step 4: タグ付け
  // ----------------------------------------------------------------
  console.log("\n[Step 4] Tagging articles...");
  const taggedArticles = tagArticles(dedupedArticles);
  const tagStats = taggedArticles.reduce<Record<string, number>>((acc, a) => {
    for (const t of a.tags) acc[t] = (acc[t] ?? 0) + 1;
    return acc;
  }, {});
  const topTags = Object.entries(tagStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([t, n]) => `${t}(${n})`)
    .join(", ");
  console.log(`  → Top tags: ${topTags}`);

  // ----------------------------------------------------------------
  // Step 5: Markdown ファイルに書き込む
  // ----------------------------------------------------------------
  console.log("\n[Step 5] Writing Markdown file...");
  const { mdPath, written } = await writeArticles(taggedArticles);

  // ----------------------------------------------------------------
  // Step 6: index.json を更新する
  // ----------------------------------------------------------------
  console.log("\n[Step 6] Updating index.json...");
  await updateIndex(taggedArticles, mdPath);

  // ----------------------------------------------------------------
  // 完了サマリー
  // ----------------------------------------------------------------
  console.log("\n" + "=".repeat(50));
  console.log("[Done] Collection complete!");
  console.log(`  Fetched  : ${rawArticles.length}`);
  console.log(`  New      : ${written}`);
  console.log(`  File     : ${mdPath}`);
  console.log("=".repeat(50));

  printErrors(allErrors);

  // エラーがある場合でも exit code 0 で終了（CI を止めない）
  // 致命的エラーの場合は process.exit(1) を使う
}

function printErrors(errors: CollectError[]): void {
  if (errors.length === 0) return;
  console.warn(`\n[Warnings] ${errors.length} non-fatal errors:`);
  for (const e of errors) {
    console.warn(`  - [${e.source}] ${e.message}`);
  }
}

main().catch((err) => {
  console.error("[Fatal]", err);
  process.exit(1);
});
