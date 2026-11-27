---
{
  "uuid": "c4d0afda-d6e4-4fd0-8e2c-cea2fc80ebf4",
  "ids": [
    "CVE-2026-137495"
  ],
  "title": "Budibase before 4.0.0 contains an insecure direct object reference vulnerability in the bulkDestroy function that allows authenticated us...",
  "summary": "Budibase before 4.0.0 contains an insecure direct object reference vulnerability in the bulkDestroy function that allows authenticated users to delete rows from any workspace table by supplying foreign row IDs. Attackers with TABLE WRITE on one table can send row _id values from other tables to the DELETE /api/:sourceId/rows endpoint, causing data loss and workspace metadata deletion.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:L",
  "os": [],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/Budibase/budibase/security/advisories/GHSA-jm6f-xhr9-26ff",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-137495",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-137495"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/budibase-before-4.0.0-cross-table-idor-via-bulkdestroy-row-deletion",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-26T16:18:00.140Z",
  "updatedAt": "2026-11-26T16:18:00.140Z",
  "firstSeenAt": "2026-11-27T04:45:50.968Z",
  "week": "2026-W48"
}
---

# Budibase before 4\.0\.0 contains an insecure direct object reference vulnerability in the bulkDestroy function that allows authenticated us\.\.\.

- **ID**: CVE\-2026\-137495
- **危険度**: High（重要） (CVSS 7.1)
- **公開**: 2026-11-26

## 原文

Budibase before 4\.0\.0 contains an insecure direct object reference vulnerability in the bulkDestroy function that allows authenticated users to delete rows from any workspace table by supplying foreign row IDs\. Attackers with TABLE WRITE on one table can send row \_id values from other tables to the DELETE /api/\:sourceId/rows endpoint, causing data loss and workspace metadata deletion\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/Budibase/budibase/security/advisories/GHSA-jm6f-xhr9-26ff>)
- [NVD CVE\-2026\-137495](<https://nvd.nist.gov/vuln/detail/CVE-2026-137495>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/budibase-before-4.0.0-cross-table-idor-via-bulkdestroy-row-deletion>)
