---
{
  "uuid": "5acceacc-87b7-4a60-afde-dd736e7f1e09",
  "ids": [
    "CVE-2026-128075",
    "GHSA-96x6-fvhx-49hg"
  ],
  "title": "Nuxt exposes the message and data of unhandled errors thrown during server rendering",
  "summary": "### Summary When a page, plugin or route middleware throws an error that is not an HTTP error, Nuxt wraps it with `createError` before rendering the error page. The wrapped error was treated as one the app raised deliberately, so in production its `message` and `data` were sent to the client in the error page payload (`__NUXT_DATA__`) and in JSON error responses. For a failed `$fetch`, that is the URL that was requested (including its query string) and the body of the upstream error response. ### Impact An application is affected if server-rendered code lets an error with sensitive details rea",
  "translation": "none",
  "severity": "medium",
  "cvssScore": 5.3,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
  "os": [],
  "languages": [
    "JavaScript/TypeScript"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "npm",
      "name": "nuxt",
      "vulnerableRange": ">= 4.0.0, < 4.6.4",
      "fixedVersion": "4.6.4"
    },
    {
      "ecosystem": "npm",
      "name": "nuxt",
      "vulnerableRange": ">= 3.0.0, < 4.0.0"
    }
  ],
  "sources": [
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/nuxt/nuxt/security/advisories/GHSA-96x6-fvhx-49hg",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128075",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-128075"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-96x6-fvhx-49hg",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-96x6-fvhx-49hg"
    },
    {
      "kind": "patch",
      "url": "https://github.com/nuxt/nuxt/commit/8c56b71e4d0377c5c047799078db09c6b3d4fde5",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/nuxt/nuxt/releases/tag/v4.6.4",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-16T15:01:26Z",
  "updatedAt": "2026-11-16T15:01:28Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# Nuxt exposes the message and data of unhandled errors thrown during server rendering

- **ID**: CVE\-2026\-128075 / GHSA\-96x6\-fvhx\-49hg
- **危険度**: Medium（警告） (CVSS 5.3)
- **言語**: JavaScript/TypeScript
- **パッケージ**: npm/nuxt &gt;\= 4\.0\.0, &lt; 4\.6\.4 → 4\.6\.4, npm/nuxt &gt;\= 3\.0\.0, &lt; 4\.0\.0
- **公開**: 2026-11-16

## 原文

\#\#\# Summary When a page, plugin or route middleware throws an error that is not an HTTP error, Nuxt wraps it with \`createError\` before rendering the error page\. The wrapped error was treated as one the app raised deliberately, so in production its \`message\` and \`data\` were sent to the client in the error page payload \(\`\_\_NUXT\_DATA\_\_\`\) and in JSON error responses\. For a failed \`\$fetch\`, that is the URL that was requested \(including its query string\) and the body of the upstream error response\. \#\#\# Impact An application is affected if server\-rendered code lets an error with sensitive details rea

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/nuxt/nuxt/security/advisories/GHSA-96x6-fvhx-49hg>)
- [NVD CVE\-2026\-128075](<https://nvd.nist.gov/vuln/detail/CVE-2026-128075>)
- [GitHub Advisory GHSA\-96x6\-fvhx\-49hg](<https://github.com/advisories/GHSA-96x6-fvhx-49hg>)
- [修正 \(github\.com\)](<https://github.com/nuxt/nuxt/commit/8c56b71e4d0377c5c047799078db09c6b3d4fde5>)
- [github\.com](<https://github.com/nuxt/nuxt/releases/tag/v4.6.4>)
