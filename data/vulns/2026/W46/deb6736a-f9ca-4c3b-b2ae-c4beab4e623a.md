---
{
  "uuid": "deb6736a-f9ca-4c3b-b2ae-c4beab4e623a",
  "ids": [
    "CVE-2026-123711"
  ],
  "title": "The WPCOM Member WordPress plugin before 1.8.3 does not limit or bind attempts to verify WeChat login codes, allowing unauthenticated att...",
  "summary": "The WPCOM Member WordPress plugin before 1.8.3 does not limit or bind attempts to verify WeChat login codes, allowing unauthenticated attackers to brute-force a code issued to another user and log in as that user, including administrators, when WeChat official-account keyword login is enabled.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
  "os": [],
  "languages": [
    "PHP"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123711",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-123711"
    },
    {
      "kind": "reference",
      "url": "https://wpscan.com/vulnerability/7d7ca1b4-0d9e-4127-8252-cfe0bb51b18a/",
      "host": "wpscan.com",
      "label": "wpscan.com"
    }
  ],
  "publishedAt": "2026-11-13T06:16:53.687Z",
  "updatedAt": "2026-11-13T19:19:20.320Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# The WPCOM Member WordPress plugin before 1\.8\.3 does not limit or bind attempts to verify WeChat login codes, allowing unauthenticated att\.\.\.

- **ID**: CVE\-2026\-123711
- **危険度**: High（重要） (CVSS 8.1)
- **言語**: PHP
- **公開**: 2026-11-13

## 原文

The WPCOM Member WordPress plugin before 1\.8\.3 does not limit or bind attempts to verify WeChat login codes, allowing unauthenticated attackers to brute\-force a code issued to another user and log in as that user, including administrators, when WeChat official\-account keyword login is enabled\.

## リンク

- [NVD CVE\-2026\-123711](<https://nvd.nist.gov/vuln/detail/CVE-2026-123711>)
- [wpscan\.com](<https://wpscan.com/vulnerability/7d7ca1b4-0d9e-4127-8252-cfe0bb51b18a/>)
