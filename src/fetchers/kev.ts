/**
 * CISA KEV (Known Exploited Vulnerabilities) カタログ
 * 実際に攻撃で悪用されていることが確認された脆弱性の一覧。最優先で対応すべきもの。
 */

import type { CollectError, KevInfo } from "../types/vuln.js";
import { KEV_FEED } from "../config/vuln.js";
import { fetchJson } from "./http.js";

export interface KevEntry {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  requiredAction: string;
  dueDate: string;
  knownRansomwareCampaignUse: string;
}

export interface KevCatalog {
  /** CVE ID → KEV 情報 */
  byCve: Map<string, KevInfo & { entry: KevEntry }>;
  /** 指定日以降に追加されたもの */
  recentlyAdded: KevEntry[];
}

export async function fetchKev(addedSince: Date): Promise<{ catalog: KevCatalog; errors: CollectError[] }> {
  const byCve: KevCatalog["byCve"] = new Map();
  const recentlyAdded: KevEntry[] = [];
  const errors: CollectError[] = [];
  try {
    const { data } = await fetchJson<{ vulnerabilities: KevEntry[] }>(KEV_FEED, { timeoutMs: 60_000 });
    const sinceStr = addedSince.toISOString().slice(0, 10);
    for (const e of data.vulnerabilities) {
      byCve.set(e.cveID, {
        dateAdded: e.dateAdded,
        dueDate: e.dueDate,
        requiredAction: e.requiredAction,
        ransomware: e.knownRansomwareCampaignUse === "Known",
        entry: e,
      });
      if (e.dateAdded >= sinceStr) recentlyAdded.push(e);
    }
    console.log(`  [KEV] catalog ${byCve.size} entries, ${recentlyAdded.length} recently added`);
  } catch (err) {
    errors.push({ source: "CISA KEV", message: err instanceof Error ? err.message : String(err) });
  }
  return { catalog: { byCve, recentlyAdded }, errors };
}
