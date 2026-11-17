---
{
  "uuid": "887aa8ec-9abc-4e62-bf2f-4a15e9efb0bf",
  "ids": [
    "CVE-2026-129302"
  ],
  "title": "Guard Core is an API security core engine for the FastAPI-Guard, FlaskAPI Guard, and DjAPI Guard adapters.",
  "summary": "Guard Core is an API security core engine for the FastAPI-Guard, FlaskAPI Guard, and DjAPI Guard adapters. From 3.5.0 until 3.13.0, built-in penetration-detection patterns in guard_core/handlers/suspatterns_handler.py execute through a direct pattern.search(content) call instead of the timeout-protected create_safe_matcher() path used for custom patterns. The built-in template-injection detector contains an unbounded expression with quadratic behavior when scanning repeated opening braces. Because penetration detection and enhanced mode are enabled by a stock SecurityConfig, an unauthenticated request can block the shared asyncio event loop, affecting all application endpoints. The triggering input does not produce a detection match, so the request can complete without incrementing ban counters or being recorded as suspicious. This issue is fixed in version 3.13.0.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
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
      "kind": "patch",
      "url": "https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/Guard-Core/guard-core/pull/68",
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
  "updatedAt": "2026-11-16T20:19:01.030Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# Guard Core is an API security core engine for the FastAPI\-Guard, FlaskAPI Guard, and DjAPI Guard adapters\.

- **ID**: CVE\-2026\-129302
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-16

## 原文

Guard Core is an API security core engine for the FastAPI\-Guard, FlaskAPI Guard, and DjAPI Guard adapters\. From 3\.5\.0 until 3\.13\.0, built\-in penetration\-detection patterns in guard\_core/handlers/suspatterns\_handler\.py execute through a direct pattern\.search\(content\) call instead of the timeout\-protected create\_safe\_matcher\(\) path used for custom patterns\. The built\-in template\-injection detector contains an unbounded expression with quadratic behavior when scanning repeated opening braces\. Because penetration detection and enhanced mode are enabled by a stock SecurityConfig, an unauthenticated request can block the shared asyncio event loop, affecting all application endpoints\. The triggering input does not produce a detection match, so the request can complete without incrementing ban counters or being recorded as suspicious\. This issue is fixed in version 3\.13\.0\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/Guard-Core/guard-core/security/advisories/GHSA-r7hm-rjvg-xx7j>)
- [NVD CVE\-2026\-129302](<https://nvd.nist.gov/vuln/detail/CVE-2026-129302>)
- [修正 \(github\.com\)](<https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4>)
- [修正 \(github\.com\)](<https://github.com/Guard-Core/guard-core/pull/68>)
- [github\.com](<https://github.com/Guard-Core/guard-core/releases/tag/3.13.0>)
