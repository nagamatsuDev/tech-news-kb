---
{
  "uuid": "b591a9a4-bfbb-4218-a9ed-9fd53bf4c4ac",
  "ids": [
    "CVE-2026-130724"
  ],
  "title": "NocoDB before 2026.08.0 contains a server-side request forgery vulnerability that allows authenticated base Editors to make backend HTTP ...",
  "summary": "NocoDB before 2026.08.0 contains a server-side request forgery vulnerability that allows authenticated base Editors to make backend HTTP requests by supplying arbitrary URLs to the integration remote fetch operation. Attackers can control the method, headers, and body to reach internal APIs, loopback services, and cloud metadata endpoints, reading responses and echoed decrypted integration secrets.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N",
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
      "url": "https://github.com/nocodb/nocodb/security/advisories/GHSA-hjgf-2f3h-4962",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-130724",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-130724"
    }
  ],
  "publishedAt": "2026-11-18T12:17:18.217Z",
  "updatedAt": "2026-11-18T14:17:38.527Z",
  "firstSeenAt": "2026-11-19T03:57:45.838Z",
  "week": "2026-W47"
}
---

# NocoDB before 2026\.08\.0 contains a server\-side request forgery vulnerability that allows authenticated base Editors to make backend HTTP \.\.\.

- **ID**: CVE\-2026\-130724
- **危険度**: High（重要） (CVSS 8.5)
- **公開**: 2026-11-18

## 原文

NocoDB before 2026\.08\.0 contains a server\-side request forgery vulnerability that allows authenticated base Editors to make backend HTTP requests by supplying arbitrary URLs to the integration remote fetch operation\. Attackers can control the method, headers, and body to reach internal APIs, loopback services, and cloud metadata endpoints, reading responses and echoed decrypted integration secrets\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/nocodb/nocodb/security/advisories/GHSA-hjgf-2f3h-4962>)
- [NVD CVE\-2026\-130724](<https://nvd.nist.gov/vuln/detail/CVE-2026-130724>)
