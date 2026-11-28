---
{
  "uuid": "d52dd49c-dfcf-4add-a878-30d09b8c7c5c",
  "ids": [
    "CVE-2026-133939"
  ],
  "title": "The OPC (OnPage Composer) start menu, which JTL-Shop shows to logged-in backend users on storefront pages, writes the current page identi...",
  "summary": "The OPC (OnPage Composer) start menu, which JTL-Shop shows to logged-in backend users on storefront pages, writes the current page identifier (which contains the search term on search pages) and further values into single-quoted JavaScript strings without escaping. A single quote in the search term terminates the string. An unauthenticated remote attacker can thereby cause script code to be executed in the browser of a backend user who opens a crafted link while logged in to the backend in the same browser; the code runs with the privileges of that user and can use the backend session token contained in the same script to send requests to the backend. Visitors and customers do not receive the start menu and are not affected.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.3,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:N",
  "os": [],
  "languages": [
    "JavaScript/TypeScript"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-133939",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-133939"
    },
    {
      "kind": "reference",
      "url": "https://www.jtl-software.com/de/security/sicherheitshinweis-opc-startmenue_xss/",
      "host": "www.jtl-software.com",
      "label": "www.jtl-software.com"
    }
  ],
  "publishedAt": "2026-11-27T09:17:01.753Z",
  "updatedAt": "2026-11-27T09:17:01.920Z",
  "firstSeenAt": "2026-11-28T04:29:51.467Z",
  "week": "2026-W48"
}
---

# The OPC \(OnPage Composer\) start menu, which JTL\-Shop shows to logged\-in backend users on storefront pages, writes the current page identi\.\.\.

- **ID**: CVE\-2026\-133939
- **危険度**: Critical（緊急） (CVSS 9.3)
- **言語**: JavaScript/TypeScript
- **公開**: 2026-11-27

## 原文

The OPC \(OnPage Composer\) start menu, which JTL\-Shop shows to logged\-in backend users on storefront pages, writes the current page identifier \(which contains the search term on search pages\) and further values into single\-quoted JavaScript strings without escaping\. A single quote in the search term terminates the string\. An unauthenticated remote attacker can thereby cause script code to be executed in the browser of a backend user who opens a crafted link while logged in to the backend in the same browser; the code runs with the privileges of that user and can use the backend session token contained in the same script to send requests to the backend\. Visitors and customers do not receive the start menu and are not affected\.

## リンク

- [NVD CVE\-2026\-133939](<https://nvd.nist.gov/vuln/detail/CVE-2026-133939>)
- [www\.jtl\-software\.com](<https://www.jtl-software.com/de/security/sicherheitshinweis-opc-startmenue_xss/>)
