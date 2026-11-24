---
{
  "uuid": "37f35af4-4ddb-487f-9ead-5afaeff9c855",
  "ids": [
    "CVE-2026-134370"
  ],
  "title": "Frappe Framework before 15.120.1 and 16.x before 16.33.1 contains a path traversal vulnerability in file attachment handling that permits...",
  "summary": "Frappe Framework before 15.120.1 and 16.x before 16.33.1 contains a path traversal vulnerability in file attachment handling that permits arbitrary file read. Authenticated attackers holding a single ordinary role without write permissions can abuse attachment handling to read server files outside the application boundary.",
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
      "url": "https://github.com/frappe/frappe/security/advisories/GHSA-r8px-9662-x39c",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-134370",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-134370"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/frappe-framework-before-16.33.1-authenticated-arbitrary-file-read-via-file-attachment-handling",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-21T17:16:58.457Z",
  "updatedAt": "2026-11-23T17:17:40.053Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# Frappe Framework before 15\.120\.1 and 16\.x before 16\.33\.1 contains a path traversal vulnerability in file attachment handling that permits\.\.\.

- **ID**: CVE\-2026\-134370
- **危険度**: High（重要） (CVSS 7.7)
- **公開**: 2026-11-21

## 原文

Frappe Framework before 15\.120\.1 and 16\.x before 16\.33\.1 contains a path traversal vulnerability in file attachment handling that permits arbitrary file read\. Authenticated attackers holding a single ordinary role without write permissions can abuse attachment handling to read server files outside the application boundary\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/frappe/frappe/security/advisories/GHSA-r8px-9662-x39c>)
- [NVD CVE\-2026\-134370](<https://nvd.nist.gov/vuln/detail/CVE-2026-134370>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/frappe-framework-before-16.33.1-authenticated-arbitrary-file-read-via-file-attachment-handling>)
