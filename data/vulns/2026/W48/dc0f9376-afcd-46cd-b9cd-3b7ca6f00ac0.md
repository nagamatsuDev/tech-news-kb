---
{
  "uuid": "dc0f9376-afcd-46cd-b9cd-3b7ca6f00ac0",
  "ids": [
    "CVE-2026-135264"
  ],
  "title": "@fastify/express is the plugin that lets an application run Express middleware and Express applications inside the Fastify web framework.",
  "summary": "@fastify/express is the plugin that lets an application run Express middleware and Express applications inside the Fastify web framework. In versions from 4.0.7 before 4.0.14, when middleware is mounted on a nested array of mount paths the plugin rewrites only the top level of the array, so paths inside a nested array are not adjusted for a plugin registered under a prefix and the middleware never runs for them, a nested regular-expression mount keeps its global or sticky flag and is matched statefully so it is skipped on alternating requests, a nested regular expression is not matched case-insensitively when case sensitivity is disabled, and nested dynamic paths are not covered by the earlier empty-segment check. An attacker can use any of these to bypass authentication or other middleware-based access controls on the affected routes. The issue is fixed in @fastify/express 4.0.14, and users should upgrade to 4.0.14 or later. As a workaround, flatten mount path arrays before passing them to the plugin, or enforce authentication in a Fastify hook such as preHandler that runs after the router resolves the request.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.4,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
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
      "url": "https://github.com/fastify/fastify-express/security/advisories/GHSA-wjm9-696x-9549",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-135264",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-135264"
    },
    {
      "kind": "reference",
      "url": "https://cna.openjsf.org/security-advisories.html",
      "host": "cna.openjsf.org",
      "label": "cna.openjsf.org"
    }
  ],
  "publishedAt": "2026-11-26T17:17:06.243Z",
  "updatedAt": "2026-11-26T17:17:06.243Z",
  "firstSeenAt": "2026-11-27T04:45:50.968Z",
  "week": "2026-W48"
}
---

# @fastify/express is the plugin that lets an application run Express middleware and Express applications inside the Fastify web framework\.

- **ID**: CVE\-2026\-135264
- **危険度**: High（重要） (CVSS 7.4)
- **公開**: 2026-11-26

## 原文

@fastify/express is the plugin that lets an application run Express middleware and Express applications inside the Fastify web framework\. In versions from 4\.0\.7 before 4\.0\.14, when middleware is mounted on a nested array of mount paths the plugin rewrites only the top level of the array, so paths inside a nested array are not adjusted for a plugin registered under a prefix and the middleware never runs for them, a nested regular\-expression mount keeps its global or sticky flag and is matched statefully so it is skipped on alternating requests, a nested regular expression is not matched case\-insensitively when case sensitivity is disabled, and nested dynamic paths are not covered by the earlier empty\-segment check\. An attacker can use any of these to bypass authentication or other middleware\-based access controls on the affected routes\. The issue is fixed in @fastify/express 4\.0\.14, and users should upgrade to 4\.0\.14 or later\. As a workaround, flatten mount path arrays before passing them to the plugin, or enforce authentication in a Fastify hook such as preHandler that runs after the router resolves the request\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/fastify/fastify-express/security/advisories/GHSA-wjm9-696x-9549>)
- [NVD CVE\-2026\-135264](<https://nvd.nist.gov/vuln/detail/CVE-2026-135264>)
- [cna\.openjsf\.org](<https://cna.openjsf.org/security-advisories.html>)
