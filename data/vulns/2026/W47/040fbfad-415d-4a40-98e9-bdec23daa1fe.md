---
{
  "uuid": "040fbfad-415d-4a40-98e9-bdec23daa1fe",
  "ids": [
    "CVE-2026-77331",
    "GHSA-72jh-722p-rqr3"
  ],
  "title": "memtomem-stm: Concurrent LTM recovery can duplicate reconnects or reuse a cancelled transport session",
  "summary": "Concurrent surfacing RPC failures can trigger more than one reconnect for the same dirty session, and cancellation during a post-reconnect retry can leave the replacement session reusable despite an interrupted protocol exchange. The private fix introduces monotonic session generations, one shielded shared reconnect flight per dirty generation, and generation-aware cancellation handling across search, access-count, and scratch RPCs. The duplicate-reconnect subcase was introduced in 0.1.24; cancellation recovery affects the broader listed range.",
  "translation": "none",
  "severity": "low",
  "cvssVector": "CVSS:4.0/AV:L/AC:H/AT:P/PR:L/UI:N/VC:N/VI:L/VA:L/SC:N/SI:N/SA:L",
  "os": [],
  "languages": [
    "Python"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "PyPI",
      "name": "memtomem-stm",
      "vulnerableRange": ">= 0.1.2, <= 0.1.33",
      "fixedVersion": "0.1.34"
    }
  ],
  "sources": [
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/memtomem/memtomem-stm/security/advisories/GHSA-72jh-722p-rqr3",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-77331",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-77331"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-72jh-722p-rqr3",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-72jh-722p-rqr3"
    },
    {
      "kind": "patch",
      "url": "https://github.com/memtomem/memtomem-stm/commit/761db1802df7ce4881ff4c3acee6d674925da498",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/memtomem/memtomem-stm/releases/tag/v0.1.34",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-20T23:38:15Z",
  "updatedAt": "2026-11-20T23:38:16Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# memtomem\-stm\: Concurrent LTM recovery can duplicate reconnects or reuse a cancelled transport session

- **ID**: CVE\-2026\-77331 / GHSA\-72jh\-722p\-rqr3
- **危険度**: Low（注意）
- **言語**: Python
- **パッケージ**: PyPI/memtomem\-stm &gt;\= 0\.1\.2, &lt;\= 0\.1\.33 → 0\.1\.34
- **公開**: 2026-11-20

## 原文

Concurrent surfacing RPC failures can trigger more than one reconnect for the same dirty session, and cancellation during a post\-reconnect retry can leave the replacement session reusable despite an interrupted protocol exchange\. The private fix introduces monotonic session generations, one shielded shared reconnect flight per dirty generation, and generation\-aware cancellation handling across search, access\-count, and scratch RPCs\. The duplicate\-reconnect subcase was introduced in 0\.1\.24; cancellation recovery affects the broader listed range\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/memtomem/memtomem-stm/security/advisories/GHSA-72jh-722p-rqr3>)
- [NVD CVE\-2026\-77331](<https://nvd.nist.gov/vuln/detail/CVE-2026-77331>)
- [GitHub Advisory GHSA\-72jh\-722p\-rqr3](<https://github.com/advisories/GHSA-72jh-722p-rqr3>)
- [修正 \(github\.com\)](<https://github.com/memtomem/memtomem-stm/commit/761db1802df7ce4881ff4c3acee6d674925da498>)
- [github\.com](<https://github.com/memtomem/memtomem-stm/releases/tag/v0.1.34>)
