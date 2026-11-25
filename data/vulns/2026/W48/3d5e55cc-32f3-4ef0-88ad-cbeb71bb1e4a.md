---
{
  "uuid": "3d5e55cc-32f3-4ef0-88ad-cbeb71bb1e4a",
  "ids": [
    "CVE-2026-134023"
  ],
  "title": "TastyIgniter is an open-source online ordering, table reservation, and restaurant management system.",
  "summary": "TastyIgniter is an open-source online ordering, table reservation, and restaurant management system. Prior to 4.2.0, checkResetPasswordCode() in src/Auth/Models/User.php compares a submitted reset code with the stored 42-character token using a normal string comparison, which can return after the first differing byte instead of taking constant time. The password-reset flow exposes this comparison to remote requests, but the endpoint is rate-limited to six requests per minute per IP, and the advisory reports no live exploit or practical token-recovery demonstration. Recovering a high-entropy reset code through the constrained timing signal could permit an unauthorized password reset. This issue is fixed in version 4.2.0.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.4,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
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
      "kind": "vendor",
      "url": "https://github.com/tastyigniter/TastyIgniter/security/advisories/GHSA-46f8-hgf3-9p6m",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-134023",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-134023"
    },
    {
      "kind": "patch",
      "url": "https://github.com/tastyigniter/ti-ext-user/commit/a4b10ba2ccff2e00889496ffa98ad61732922ca6",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/tastyigniter/ti-ext-user/pull/47",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/tastyigniter/ti-ext-user/releases/tag/v4.2.0",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-23T23:17:05.283Z",
  "updatedAt": "2026-11-24T16:17:56.610Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# TastyIgniter is an open\-source online ordering, table reservation, and restaurant management system\.

- **ID**: CVE\-2026\-134023
- **危険度**: High（重要） (CVSS 7.4)
- **言語**: PHP
- **公開**: 2026-11-23

## 原文

TastyIgniter is an open\-source online ordering, table reservation, and restaurant management system\. Prior to 4\.2\.0, checkResetPasswordCode\(\) in src/Auth/Models/User\.php compares a submitted reset code with the stored 42\-character token using a normal string comparison, which can return after the first differing byte instead of taking constant time\. The password\-reset flow exposes this comparison to remote requests, but the endpoint is rate\-limited to six requests per minute per IP, and the advisory reports no live exploit or practical token\-recovery demonstration\. Recovering a high\-entropy reset code through the constrained timing signal could permit an unauthorized password reset\. This issue is fixed in version 4\.2\.0\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/tastyigniter/TastyIgniter/security/advisories/GHSA-46f8-hgf3-9p6m>)
- [NVD CVE\-2026\-134023](<https://nvd.nist.gov/vuln/detail/CVE-2026-134023>)
- [修正 \(github\.com\)](<https://github.com/tastyigniter/ti-ext-user/commit/a4b10ba2ccff2e00889496ffa98ad61732922ca6>)
- [修正 \(github\.com\)](<https://github.com/tastyigniter/ti-ext-user/pull/47>)
- [github\.com](<https://github.com/tastyigniter/ti-ext-user/releases/tag/v4.2.0>)
