---
{
  "uuid": "887aa8ec-9abc-4e62-bf2f-4a15e9efb0bf",
  "ids": [
    "CVE-2026-129302",
    "GHSA-r7hm-rjvg-xx7j"
  ],
  "title": "Guard Core: Quadratic ReDoS in built-in detection pattern freezes the event loop with a single request",
  "summary": "### Summary A polynomial (quadratic) regular-expression denial of service in guard-core's built-in penetration-detection patterns allows any unauthenticated remote client to freeze **every** endpoint of an application for seconds per request, using only the default configuration. The triggering request completes without any detection match — no ban counter increments, no rate-limit violation is recorded — so it can be repeated indefinitely. Since guard-core 3.5.0, only *custom* patterns are executed through the compiler's timeout-protected `create_safe_matcher()`; all built-in patterns run as",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
  "os": [],
  "languages": [
    "Python"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "PyPI",
      "name": "guard-core",
      "vulnerableRange": ">= 3.5.0, <= 3.12.0",
      "fixedVersion": "3.13.0"
    }
  ],
  "sources": [
    "nvd",
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/Guard-Core/guard-core/security/advisories/GHSA-r7hm-rjvg-xx7j",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129302",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-129302"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-r7hm-rjvg-xx7j",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-r7hm-rjvg-xx7j"
    },
    {
      "kind": "patch",
      "url": "https://github.com/Guard-Core/guard-core/pull/68",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/Guard-Core/guard-core/releases/tag/3.13.0",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-16T20:19:01.030Z",
  "updatedAt": "2026-11-19T22:49:34Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# Guard Core\: Quadratic ReDoS in built\-in detection pattern freezes the event loop with a single request

- **ID**: CVE\-2026\-129302 / GHSA\-r7hm\-rjvg\-xx7j
- **危険度**: High（重要） (CVSS 7.5)
- **言語**: Python
- **パッケージ**: PyPI/guard\-core &gt;\= 3\.5\.0, &lt;\= 3\.12\.0 → 3\.13\.0
- **公開**: 2026-11-16

## 原文

\#\#\# Summary A polynomial \(quadratic\) regular\-expression denial of service in guard\-core's built\-in penetration\-detection patterns allows any unauthenticated remote client to freeze \*\*every\*\* endpoint of an application for seconds per request, using only the default configuration\. The triggering request completes without any detection match — no ban counter increments, no rate\-limit violation is recorded — so it can be repeated indefinitely\. Since guard\-core 3\.5\.0, only \*custom\* patterns are executed through the compiler's timeout\-protected \`create\_safe\_matcher\(\)\`; all built\-in patterns run as

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/Guard-Core/guard-core/security/advisories/GHSA-r7hm-rjvg-xx7j>)
- [NVD CVE\-2026\-129302](<https://nvd.nist.gov/vuln/detail/CVE-2026-129302>)
- [GitHub Advisory GHSA\-r7hm\-rjvg\-xx7j](<https://github.com/advisories/GHSA-r7hm-rjvg-xx7j>)
- [修正 \(github\.com\)](<https://github.com/Guard-Core/guard-core/pull/68>)
- [修正 \(github\.com\)](<https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4>)
- [github\.com](<https://github.com/Guard-Core/guard-core/releases/tag/3.13.0>)
