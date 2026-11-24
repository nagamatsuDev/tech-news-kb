/**
 * 参照 URL を検証・分類して、表示してよいリンクだけを残す
 *  - detail : ID から組み立てる詳細ページ（NVD / GitHub Advisory / JVN）
 *  - vendor : ベンダーの公式発表（元記事）
 *  - patch  : 修正コミット・パッチ
 *  - reference : その他
 * 攻撃コード（PoC / Exploit）は載せない
 */

import type { RawReference, VulnLink } from "../types/vuln.js";
import { detailUrl, safeUrl } from "../shared/sanitize.js";

/** 攻撃コードの置き場として知られるホスト */
const EXPLOIT_HOSTS = ["exploit-db.com", "packetstormsecurity.com", "packetstorm.news", "0day.today", "vulners.com"];

const hostMatches = (host: string, list: string[]) => list.some((h) => host === h || host.endsWith(`.${h}`));

function classify(ref: RawReference, host: string, path: string): VulnLink["kind"] | "exclude" {
  const tags = ref.tags.map((t) => t.toLowerCase());
  if (tags.includes("exploit") || hostMatches(host, EXPLOIT_HOSTS)) return "exclude";
  if (tags.includes("vendor advisory")) return "vendor";
  if (tags.includes("patch")) return "patch";
  // タグがない（GHSA 由来など）場合は URL の形から推定
  if (tags.length === 0) {
    if (host === "github.com" && /\/security\/advisories\/GHSA-/.test(path)) return "vendor";
    if (host === "github.com" && /\/(commit|pull)\//.test(path)) return "patch";
    if (/^(msrc\.microsoft\.com|support\.apple\.com|chromereleases\.googleblog\.com|source\.android\.com|ubuntu\.com|www\.debian\.org|access\.redhat\.com|nodejs\.org)$/.test(host)) {
      return "vendor";
    }
  }
  return "reference";
}

const LIMITS: Record<VulnLink["kind"], number> = { detail: 4, vendor: 3, patch: 3, reference: 5 };

export function buildLinks(ids: string[], refs: RawReference[], jvnId?: string): VulnLink[] {
  const out: VulnLink[] = [];
  const seen = new Set<string>();
  const push = (l: VulnLink) => {
    if (seen.has(l.url)) return;
    if (out.filter((x) => x.kind === l.kind).length >= LIMITS[l.kind]) return;
    seen.add(l.url);
    out.push(l);
  };

  for (const id of [...ids, ...(jvnId ? [jvnId] : [])]) {
    const u = detailUrl(id);
    if (!u) continue;
    const label = id.startsWith("CVE-") ? `NVD ${id}` : id.startsWith("GHSA-") ? `GitHub Advisory ${id}` : id.startsWith("JVNDB-") ? `JVN iPedia ${id}` : id;
    push({ kind: "detail", url: u.href, host: u.host, label });
  }

  for (const ref of refs) {
    const u = safeUrl(ref.url);
    if (!u) continue;
    const kind = classify(ref, u.host, new URL(u.href).pathname);
    if (kind === "exclude") continue;
    const label = kind === "vendor" ? `ベンダー発表 (${u.host})` : kind === "patch" ? `修正 (${u.host})` : u.host;
    push({ kind, url: u.href, host: u.host, label });
  }

  const order: VulnLink["kind"][] = ["vendor", "detail", "patch", "reference"];
  return out.sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));
}
