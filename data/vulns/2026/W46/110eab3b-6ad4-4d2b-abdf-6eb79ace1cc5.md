---
{
  "uuid": "110eab3b-6ad4-4d2b-abdf-6eb79ace1cc5",
  "ids": [
    "CVE-2026-126285"
  ],
  "title": "NocoDB before 2026.08.0 contains an sql injection vulnerability that allows authenticated users with read access to run arbitrary read qu...",
  "summary": "NocoDB before 2026.08.0 contains an sql injection vulnerability that allows authenticated users with read access to run arbitrary read queries via the legacy where parameter on PostgreSQL. Attackers, including Viewer-role users, can inject single quotes into filter values concatenated by CustomKnex.ts to read other tables, schemas, view-filtered rows, and hidden columns.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.7,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:N/A:N",
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
      "url": "https://github.com/nocodb/nocodb/security/advisories/GHSA-f2jp-xg6f-hjf6",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126285",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126285"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/nocodb-before-2026.08.0-sql-injection-via-legacy-where-query-filter",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:32.140Z",
  "updatedAt": "2026-11-13T10:17:32.140Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# NocoDB before 2026\.08\.0 contains an sql injection vulnerability that allows authenticated users with read access to run arbitrary read qu\.\.\.

- **ID**: CVE\-2026\-126285
- **危険度**: High（重要） (CVSS 7.7)
- **公開**: 2026-11-13

## 原文

NocoDB before 2026\.08\.0 contains an sql injection vulnerability that allows authenticated users with read access to run arbitrary read queries via the legacy where parameter on PostgreSQL\. Attackers, including Viewer\-role users, can inject single quotes into filter values concatenated by CustomKnex\.ts to read other tables, schemas, view\-filtered rows, and hidden columns\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/nocodb/nocodb/security/advisories/GHSA-f2jp-xg6f-hjf6>)
- [NVD CVE\-2026\-126285](<https://nvd.nist.gov/vuln/detail/CVE-2026-126285>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/nocodb-before-2026.08.0-sql-injection-via-legacy-where-query-filter>)
