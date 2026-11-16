---
{
  "uuid": "c955faab-06ea-454f-ad2a-820a86ca4edf",
  "ids": [
    "CVE-2026-92441"
  ],
  "title": "Kong Gateway Enterprise and Kong AI Gateway include decoded CR/LF characters from the request path in the X-Forwarded-Prefix header on re...",
  "summary": "Kong Gateway Enterprise and Kong AI Gateway include decoded CR/LF characters from the request path in the X-Forwarded-Prefix header on regex Routes, allowing HTTP header injection and request smuggling to the upstream.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.8,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:N/SC:H/SI:H/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
  "os": [],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-92441",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-92441"
    },
    {
      "kind": "reference",
      "url": "https://developer.konghq.com/ai-gateway/changelog/",
      "host": "developer.konghq.com",
      "label": "developer.konghq.com"
    },
    {
      "kind": "reference",
      "url": "https://developer.konghq.com/gateway/changelog/",
      "host": "developer.konghq.com",
      "label": "developer.konghq.com"
    }
  ],
  "publishedAt": "2026-11-10T22:21:14.867Z",
  "updatedAt": "2026-11-13T15:17:56.773Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Kong Gateway Enterprise and Kong AI Gateway include decoded CR/LF characters from the request path in the X\-Forwarded\-Prefix header on re\.\.\.

- **ID**: CVE\-2026\-92441
- **危険度**: High（重要） (CVSS 7.8)
- **公開**: 2026-11-10

## 原文

Kong Gateway Enterprise and Kong AI Gateway include decoded CR/LF characters from the request path in the X\-Forwarded\-Prefix header on regex Routes, allowing HTTP header injection and request smuggling to the upstream\.

## リンク

- [NVD CVE\-2026\-92441](<https://nvd.nist.gov/vuln/detail/CVE-2026-92441>)
- [developer\.konghq\.com](<https://developer.konghq.com/ai-gateway/changelog/>)
- [developer\.konghq\.com](<https://developer.konghq.com/gateway/changelog/>)
