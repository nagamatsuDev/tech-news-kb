---
{
  "uuid": "95c4f1e9-073c-4afe-9bcd-5fcd1ff18ba2",
  "ids": [
    "CVE-2026-62683",
    "GHSA-pp88-jhwj-5qh5"
  ],
  "title": "File Browser: Trailing-slash directory deletion leaves public shares active for recreated paths",
  "summary": "## Summary File Browser v2.63.15 can leave a public directory share behind when the shared directory is deleted through a path with a trailing slash. The share cleanup path calls `DeleteWithPathPrefix(file.Path, userID)`, but the Bolt backend performs the database prefix query with the unnormalized argument before trimming the slash for boundary checks. For a stored share at `/a`, deleting `/a/` queries for paths prefixed by `/a/`, so the exact `/a` share is never loaded and never deleted. If a directory with the same path is later recreated, the stale public share becomes active again and exp",
  "translation": "none",
  "severity": "low",
  "cvssScore": 3.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
  "os": [],
  "languages": [
    "Go"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "Go",
      "name": "github.com/filebrowser/filebrowser/v2",
      "vulnerableRange": "< 2.63.17",
      "fixedVersion": "2.63.17"
    }
  ],
  "sources": [
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/filebrowser/filebrowser/security/advisories/GHSA-pp88-jhwj-5qh5",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-62683",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-62683"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-pp88-jhwj-5qh5",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-pp88-jhwj-5qh5"
    },
    {
      "kind": "patch",
      "url": "https://github.com/filebrowser/filebrowser/commit/f30fca636c1af9ef401e9a82ff60391cb3db97e1",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/filebrowser/filebrowser/releases/tag/v2.63.17",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://nvd.nist.gov/vuln/detail/cve-2026-62683",
      "host": "nvd.nist.gov",
      "label": "nvd.nist.gov"
    }
  ],
  "publishedAt": "2026-11-13T23:12:06Z",
  "updatedAt": "2026-11-13T23:12:07Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# File Browser\: Trailing\-slash directory deletion leaves public shares active for recreated paths

- **ID**: CVE\-2026\-62683 / GHSA\-pp88\-jhwj\-5qh5
- **危険度**: Low（注意） (CVSS 3.1)
- **言語**: Go
- **パッケージ**: Go/github\.com/filebrowser/filebrowser/v2 &lt; 2\.63\.17 → 2\.63\.17
- **公開**: 2026-11-13

## 原文

\#\# Summary File Browser v2\.63\.15 can leave a public directory share behind when the shared directory is deleted through a path with a trailing slash\. The share cleanup path calls \`DeleteWithPathPrefix\(file\.Path, userID\)\`, but the Bolt backend performs the database prefix query with the unnormalized argument before trimming the slash for boundary checks\. For a stored share at \`/a\`, deleting \`/a/\` queries for paths prefixed by \`/a/\`, so the exact \`/a\` share is never loaded and never deleted\. If a directory with the same path is later recreated, the stale public share becomes active again and exp

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/filebrowser/filebrowser/security/advisories/GHSA-pp88-jhwj-5qh5>)
- [NVD CVE\-2026\-62683](<https://nvd.nist.gov/vuln/detail/CVE-2026-62683>)
- [GitHub Advisory GHSA\-pp88\-jhwj\-5qh5](<https://github.com/advisories/GHSA-pp88-jhwj-5qh5>)
- [修正 \(github\.com\)](<https://github.com/filebrowser/filebrowser/commit/f30fca636c1af9ef401e9a82ff60391cb3db97e1>)
- [github\.com](<https://github.com/filebrowser/filebrowser/releases/tag/v2.63.17>)
- [nvd\.nist\.gov](<https://nvd.nist.gov/vuln/detail/cve-2026-62683>)
