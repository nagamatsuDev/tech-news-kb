---
{
  "uuid": "0ce1bd8c-91f5-4d65-aabf-e0aa9cd11d38",
  "ids": [
    "CVE-2026-102166"
  ],
  "title": "Arista C-260 and C-250 access points ship with fleet-wide static cryptographic keys used for firmware image verification and SSLP authent...",
  "summary": "Arista C-260 and C-250 access points ship with fleet-wide static cryptographic keys used for firmware image verification and SSLP authentication. An attacker who is able to access these keys would be able to create modified firmware that will pass verification checks. This vulnerability is specific to the C-260 and C-250 models; other access point models enforce digitally signed upgrade images with secure boot and are not affected by this issue.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:3.1/AV:A/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-102166",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-102166"
    },
    {
      "kind": "reference",
      "url": "https://www.arista.com/en/support/advisories-notices/security-advisory/25049-security-advisory-0227",
      "host": "www.arista.com",
      "label": "www.arista.com"
    }
  ],
  "publishedAt": "2026-11-10T20:17:21.237Z",
  "updatedAt": "2026-11-16T20:17:26.707Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# Arista C\-260 and C\-250 access points ship with fleet\-wide static cryptographic keys used for firmware image verification and SSLP authent\.\.\.

- **ID**: CVE\-2026\-102166
- **危険度**: High（重要） (CVSS 8.8)
- **公開**: 2026-11-10

## 原文

Arista C\-260 and C\-250 access points ship with fleet\-wide static cryptographic keys used for firmware image verification and SSLP authentication\. An attacker who is able to access these keys would be able to create modified firmware that will pass verification checks\. This vulnerability is specific to the C\-260 and C\-250 models; other access point models enforce digitally signed upgrade images with secure boot and are not affected by this issue\.

## リンク

- [NVD CVE\-2026\-102166](<https://nvd.nist.gov/vuln/detail/CVE-2026-102166>)
- [www\.arista\.com](<https://www.arista.com/en/support/advisories-notices/security-advisory/25049-security-advisory-0227>)
