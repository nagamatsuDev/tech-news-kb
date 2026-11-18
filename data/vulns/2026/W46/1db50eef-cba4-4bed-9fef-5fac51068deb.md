---
{
  "uuid": "1db50eef-cba4-4bed-9fef-5fac51068deb",
  "ids": [
    "CVE-2026-124698"
  ],
  "title": "In Progress Kendo UI for jQuery, the Chart default tooltip renders point values as raw HTML.",
  "summary": "In Progress Kendo UI for jQuery, the Chart default tooltip renders point values as raw HTML. An attacker who can influence a string point value can inject markup that executes as JavaScript when a user hovers over the point. Successful exploitation may compromise the confidentiality and integrity of data available in the user's browser context. Version 2016.2.607 or earlier may be affected, but earlier releases have not been verified. The latest vulnerable version is 2026.3.1015; the issue is fixed in version 2026.4.1111.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124698",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-124698"
    },
    {
      "kind": "reference",
      "url": "https://www.telerik.com/kendo-jquery-ui/documentation/knowledge-base/kb-security-kendo-chart-tooltip-point-value-xss-cve-2026-124698",
      "host": "www.telerik.com",
      "label": "www.telerik.com"
    }
  ],
  "publishedAt": "2026-11-12T17:17:31.320Z",
  "updatedAt": "2026-11-17T17:17:57.350Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W46"
}
---

# In Progress Kendo UI for jQuery, the Chart default tooltip renders point values as raw HTML\.

- **ID**: CVE\-2026\-124698
- **危険度**: High（重要） (CVSS 7.1)
- **言語**: JavaScript/TypeScript
- **公開**: 2026-11-12

## 原文

In Progress Kendo UI for jQuery, the Chart default tooltip renders point values as raw HTML\. An attacker who can influence a string point value can inject markup that executes as JavaScript when a user hovers over the point\. Successful exploitation may compromise the confidentiality and integrity of data available in the user's browser context\. Version 2016\.2\.607 or earlier may be affected, but earlier releases have not been verified\. The latest vulnerable version is 2026\.3\.1015; the issue is fixed in version 2026\.4\.1111\.

## リンク

- [NVD CVE\-2026\-124698](<https://nvd.nist.gov/vuln/detail/CVE-2026-124698>)
- [www\.telerik\.com](<https://www.telerik.com/kendo-jquery-ui/documentation/knowledge-base/kb-security-kendo-chart-tooltip-point-value-xss-cve-2026-124698>)
