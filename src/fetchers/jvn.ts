/**
 * JVN iPedia（MyJVN API）— 日本語の脆弱性情報
 *   getVulnOverviewList: 既定で発見日・更新日・発行日が過去 1 週間以内のものを返す
 *   maxCountItem は 1〜50、startItem でページ送り
 *   keyword=CVE-xxxx で個別に検索できる
 * 応答は JVNRSS（RSS 1.0 + sec 名前空間）
 */

import type { CollectError } from "../types/vuln.js";
import { ID_PATTERNS, cleanText } from "../shared/sanitize.js";
import { sleep } from "./http.js";

const MYJVN = "https://jvndb.jvn.jp/myjvn";

export interface JvnEntry {
  jvnId: string;
  cves: string[];
  title: string;
  summary: string;
}

/** XML の文字参照を戻す（CDATA にも対応） */
function decodeXml(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

/** 名前空間接頭辞を問わずに要素の中身を取り出す */
function tagText(xml: string, name: string): string | undefined {
  const m = xml.match(new RegExp(`<(?:[a-zA-Z]+:)?${name}(?:\\s[^>]*)?>([\\s\\S]*?)</(?:[a-zA-Z]+:)?${name}>`));
  return m ? decodeXml(m[1]).trim() : undefined;
}

/** JVNRSS（RSS 1.0 + sec 名前空間）を解析する。依存ライブラリなしの最小実装 */
export function parseJvnRss(xml: string): { entries: JvnEntry[]; total: number } {
  const entries: JvnEntry[] = [];
  for (const m of xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/g)) {
    const item = m[1];
    const jvnId = tagText(item, "identifier") ?? "";
    if (!ID_PATTERNS.jvndb.test(jvnId)) continue;
    const cves = new Set<string>();
    for (const r of item.matchAll(/<(?:[a-zA-Z]+:)?references\b([^>]*)>([\s\S]*?)<\/(?:[a-zA-Z]+:)?references>/g)) {
      for (const c of `${r[1]} ${r[2]}`.matchAll(/CVE-\d{4}-\d{4,7}/g)) cves.add(c[0]);
    }
    entries.push({
      jvnId,
      cves: [...cves],
      title: cleanText(tagText(item, "title") ?? "", 300),
      summary: cleanText(tagText(item, "description") ?? "", 2000),
    });
  }
  const total = Number(xml.match(/totalRes="(\d+)"/)?.[1] ?? entries.length);
  return { entries, total };
}

async function get(params: Record<string, string>): Promise<string> {
  const url = `${MYJVN}?${new URLSearchParams({ method: "getVulnOverviewList", feed: "hnd", lang: "ja", ...params })}`;
  const res = await fetch(url, { headers: { "User-Agent": "tech-news-kb-vuln-collector/2.0" }, signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

/** 直近 1 週間分（既定の範囲）をまとめて取得する */
export async function fetchJvnRecent(maxPages = 20): Promise<{ entries: JvnEntry[]; errors: CollectError[] }> {
  const entries: JvnEntry[] = [];
  const errors: CollectError[] = [];
  try {
    let start = 1;
    for (let page = 0; page < maxPages; page++) {
      const { entries: got, total } = parseJvnRss(await get({ startItem: String(start), maxCountItem: "50" }));
      entries.push(...got);
      start += 50;
      if (got.length === 0 || start > total) break;
      await sleep(1000);
    }
    console.log(`  [JVN] ${entries.length} recent entries`);
  } catch (err) {
    errors.push({ source: "JVN iPedia", message: err instanceof Error ? err.message : String(err) });
  }
  return { entries, errors };
}

/** CVE 番号で個別に検索する（直近分に無かった、まだ訳のない脆弱性用） */
export async function fetchJvnByCve(cves: string[]): Promise<JvnEntry[]> {
  const out: JvnEntry[] = [];
  for (const cve of cves) {
    if (!ID_PATTERNS.cve.test(cve)) continue;
    try {
      const { entries } = parseJvnRss(await get({ keyword: cve, rangeDatePublic: "n", rangeDatePublished: "n", rangeDateFirstPublished: "n" }));
      const hit = entries.find((e) => e.cves.includes(cve));
      if (hit) out.push(hit);
    } catch (err) {
      console.warn(`  [JVN] ${cve}: ${err instanceof Error ? err.message : err}`);
    }
    await sleep(1000);
  }
  return out;
}
