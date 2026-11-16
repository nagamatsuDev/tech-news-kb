/**
 * エントリポイント — 脆弱性収集パイプライン
 *
 *   1. 前回の状態と ID 対応表（ids.json）を読む
 *   2. NVD / GitHub Advisory / CISA KEV / JVN（直近）を並列取得
 *   3. CVE / GHSA で統合し、KEV フラグを付ける
 *   4. UUID を割り当て（既存は維持）、保存する週を決める
 *   5. 日本語: JVN の訳 → なければ機械翻訳（FuguMT）
 *   6. リンクを検証・分類して、1 件 1 ファイルの Markdown に保存
 *   7. 週ごとの JSON と週一覧を作り直す
 *
 * 依存パッケージの照合・ステータス・設定はすべてブラウザ側（サイト）で行う。
 * 旧ニュース収集は `npm run collect:news`。
 */

import { fetchNvd, fetchNvdById } from "./fetchers/nvd.js";
import { fetchGhsa } from "./fetchers/ghsa.js";
import { fetchKev } from "./fetchers/kev.js";
import { fetchJvnByCve, fetchJvnRecent, type JvnEntry } from "./fetchers/jvn.js";
import { applyKev, mergeVulns, sortByPriority } from "./processors/merge.js";
import { buildLinks } from "./processors/links.js";
import { excerpt, translate, TRANSLATE_MAX } from "./translate/machine.js";
import {
  JVN_LOOKUP_MAX,
  JVN_LOOKUP_WEEKS,
  LATE_DISCOVERY_DAYS,
  LOOKBACK_DAYS,
  PUBLISHED_WINDOW_DAYS,
} from "./config/vuln.js";
import { loadIds, loadState, readVuln, readWeek, saveIds, saveState, writeVuln, writeWeekIndexes } from "./writers/store.js";
import { addWeeks, isoWeekOf } from "./shared/week.js";
import { cleanText } from "./shared/sanitize.js";
import { uuidV4 } from "./shared/uuid.js";
import { SEVERITY_RANK, type CollectError, type CollectedVuln, type Vulnerability } from "./types/vuln.js";

const DAY = 86_400_000;

/** 主 ID の並び: CVE → GHSA → その他 */
function orderIds(ids: string[]): string[] {
  const rank = (id: string) => (id.startsWith("CVE-") ? 0 : id.startsWith("GHSA-") ? 1 : 2);
  return [...new Set(ids)].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
}

function applyJvn(v: Vulnerability, e: JvnEntry): Vulnerability {
  return {
    ...v,
    titleJa: e.title || v.titleJa,
    summaryJa: e.summary || v.summaryJa,
    translation: "jvn",
    jvnId: e.jvnId,
    sources: v.sources.includes("jvn") ? v.sources : [...v.sources, "jvn"],
  };
}

async function main(): Promise<void> {
  const startedAt = new Date();
  const now = startedAt.toISOString();
  console.log("=".repeat(50));
  console.log(`[Start] Vuln KB — ${now}`);
  console.log("=".repeat(50));
  const errors: CollectError[] = [];

  // ---- 1 ----
  const state = await loadState();
  const ids = await loadIds();
  const since = new Date(
    Math.max(
      state.lastRunAt ? Date.parse(state.lastRunAt) - 3600_000 : startedAt.getTime() - LOOKBACK_DAYS * DAY,
      startedAt.getTime() - 119 * DAY,
    ),
  );
  const publishedAfter = new Date(startedAt.getTime() - PUBLISHED_WINDOW_DAYS * DAY);
  console.log(`\n[1] since=${since.toISOString()} / known uuids=${Object.keys(ids.weeks).length}`);

  // ---- 2 ----
  console.log("\n[2] Fetching NVD / GitHub Advisory / CISA KEV / JVN...");
  const [nvd, ghsa, kev, jvn] = await Promise.all([
    fetchNvd(since, publishedAfter),
    fetchGhsa(since, publishedAfter),
    fetchKev(since),
    fetchJvnRecent(),
  ]);
  errors.push(...nvd.errors, ...ghsa.errors, ...kev.errors, ...jvn.errors);

  const known = new Set([...Object.keys(ids.ids), ...nvd.vulns.flatMap((v) => [v.id, ...v.aliases]), ...ghsa.vulns.flatMap((v) => [v.id, ...v.aliases])]);
  const missingKev = kev.catalog.recentlyAdded.map((e) => e.cveID).filter((id) => !known.has(id)).slice(0, 20);
  const kevDetails = missingKev.length ? await fetchNvdById(missingKev) : [];

  // ---- 3 ----
  const collected: CollectedVuln[] = applyKev(mergeVulns([nvd.vulns, ghsa.vulns, kevDetails]), kev.catalog.byCve);
  console.log(`\n[3] ${collected.length} vulnerabilities after merge`);

  // ---- 4 ----
  const touched: Vulnerability[] = [];
  let created = 0;
  for (const c of collected) {
    const allIds = orderIds([c.id, ...c.aliases]);
    const existingUuid = allIds.map((id) => ids.ids[id]).find(Boolean);
    const prev = existingUuid ? await readVuln(existingUuid, ids.weeks[existingUuid]) : undefined;

    const uuid = prev?.uuid ?? existingUuid ?? uuidV4();
    const publishedAt = prev?.publishedAt && prev.publishedAt < c.publishedAt ? prev.publishedAt : c.publishedAt;
    // 公開から日が経ってから見つけたもの（KEV への追加など）は見つけた週に置く
    const late = startedAt.getTime() - Date.parse(publishedAt) > LATE_DISCOVERY_DAYS * DAY;
    const week = prev?.week ?? ids.weeks[uuid] ?? isoWeekOf(late ? startedAt : publishedAt);
    if (!prev) created++;

    const v: Vulnerability = {
      uuid,
      ids: orderIds([...(prev?.ids ?? []), ...allIds]),
      title: cleanText(c.title, 300),
      summary: cleanText(c.summary, 4000),
      titleJa: prev?.titleJa,
      summaryJa: prev?.summaryJa,
      translation: prev?.translation ?? "none",
      jvnId: prev?.jvnId,
      severity: c.severity,
      cvssScore: c.cvssScore,
      cvssVector: c.cvssVector,
      os: c.os,
      languages: c.languages,
      products: c.products.map((p) => cleanText(p, 100)),
      packages: c.packages,
      kev: c.kev ?? prev?.kev,
      sources: [...new Set([...(prev?.sources ?? []), ...c.sources])],
      links: [],
      publishedAt,
      updatedAt: c.updatedAt,
      firstSeenAt: prev?.firstSeenAt ?? now,
      week,
    };
    v.links = buildLinks(v.ids, c.references, v.jvnId);
    for (const id of v.ids) ids.ids[id] = uuid;
    ids.weeks[uuid] = week;
    touched.push(v);
  }
  console.log(`[4] new=${created} / updated=${touched.length - created}`);

  // ---- 5 ----
  console.log("\n[5] Japanese text...");
  const jvnByCve = new Map<string, JvnEntry>();
  for (const e of jvn.entries) for (const cve of e.cves) jvnByCve.set(cve, e);

  // 今回更新分 + 直近数週で JVN 訳がまだないもの
  const byUuid = new Map(touched.map((v) => [v.uuid, v]));
  const currentWeek = isoWeekOf(startedAt);
  for (let i = 0; i < JVN_LOOKUP_WEEKS; i++) {
    for (const v of await readWeek(addWeeks(currentWeek, -i))) {
      if (!byUuid.has(v.uuid) && v.translation !== "jvn") byUuid.set(v.uuid, v);
    }
  }
  const needJa = () => [...byUuid.values()].filter((v) => v.translation !== "jvn");
  const changed = new Set(touched.map((v) => v.uuid));

  for (const v of needJa()) {
    const hit = v.ids.map((id) => jvnByCve.get(id)).find(Boolean);
    if (hit) {
      byUuid.set(v.uuid, applyJvn(v, hit));
      changed.add(v.uuid);
    }
  }
  // 直近分に無いものは CVE で個別に検索（危険度の高い順に上限まで）
  const lookup = sortByPriority(needJa().filter((v) => v.ids[0].startsWith("CVE-"))).slice(0, JVN_LOOKUP_MAX);
  if (lookup.length) {
    const found = await fetchJvnByCve(lookup.map((v) => v.ids[0]));
    for (const e of found) {
      for (const v of lookup) {
        if (e.cves.includes(v.ids[0])) {
          byUuid.set(v.uuid, applyJvn(byUuid.get(v.uuid)!, e));
          changed.add(v.uuid);
        }
      }
    }
  }
  // それでも無いものは機械翻訳（未翻訳のみ。訳した結果は保存して二度と訳さない）
  let translated = 0;
  const toTranslate = sortByPriority(needJa().filter((v) => v.translation === "none")).slice(0, TRANSLATE_MAX);
  for (const v of toTranslate) {
    const titleJa = await translate(v.title);
    if (!titleJa) continue;
    const summaryJa = v.summary && v.summary !== v.title ? await translate(excerpt(v.summary)) : undefined;
    byUuid.set(v.uuid, { ...v, titleJa, summaryJa, translation: "machine" });
    changed.add(v.uuid);
    translated++;
  }
  const jvnCount = [...byUuid.values()].filter((v) => v.translation === "jvn").length;
  console.log(`  → JVN ${jvnCount} / machine ${translated} (this run)`);

  // ---- 6 ----
  console.log("\n[6] Writing files...");
  const weeksTouched = new Set<string>();
  for (const uuid of changed) {
    const v = byUuid.get(uuid)!;
    v.links = buildLinks(v.ids, v.links.map((l) => ({ url: l.url, tags: l.kind === "vendor" ? ["Vendor Advisory"] : l.kind === "patch" ? ["Patch"] : [] })), v.jvnId);
    await writeVuln(v);
    weeksTouched.add(v.week);
  }
  weeksTouched.add(currentWeek);

  // ---- 7 ----
  const allFailed = nvd.errors.length > 0 && ghsa.errors.length > 0;
  await saveIds(ids);
  await writeWeekIndexes([...weeksTouched], (vs) => sortByPriority(vs));
  if (!allFailed) await saveState({ lastRunAt: now });

  console.log("\n" + "=".repeat(50));
  console.log(`[Done] new ${created} / written ${changed.size} / weeks ${[...weeksTouched].sort().join(", ")}`);
  console.log("=".repeat(50));
  if (errors.length) {
    console.warn(`\n[Warnings] ${errors.length} non-fatal errors:`);
    for (const e of errors) console.warn(`  - [${e.source}] ${e.message}`);
  }
  // 重大度の高い順に上位を表示（ログ確認用）
  const top = [...byUuid.values()].filter((v) => v.week === currentWeek && SEVERITY_RANK[v.severity] >= SEVERITY_RANK.high).length;
  console.log(`This week: ${top} high+ vulnerabilities`);
}

main().catch((err) => {
  console.error("[Fatal]", err);
  process.exit(1);
});
