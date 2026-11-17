---
{
  "uuid": "6efe34a4-cc91-4cbd-b01b-5ca63ca2ddaa",
  "ids": [
    "CVE-2026-128116",
    "GHSA-rqp5-r3wg-vg35"
  ],
  "title": "SvelteKit: Protocol-relative module import during server-side route resolution allows cross-origin script execution",
  "summary": "If an attacker could, using some form of social engineering or other exploit, get a user to use client-side navigation to navigate to a specially-crafted link, the attacker could cause code from another domain to be imported and run on the user's machine. This only affected apps with `router.resolution: 'server'`.",
  "translation": "none",
  "severity": "medium",
  "cvssScore": 5.3,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:N/A:N",
  "os": [],
  "languages": [
    "JavaScript/TypeScript"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "npm",
      "name": "@sveltejs/kit",
      "vulnerableRange": ">= 3.0.0, < 3.1.1",
      "fixedVersion": "3.1.1"
    },
    {
      "ecosystem": "npm",
      "name": "@sveltejs/kit",
      "vulnerableRange": "< 2.70.4",
      "fixedVersion": "2.70.4"
    }
  ],
  "sources": [
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/sveltejs/kit/security/advisories/GHSA-rqp5-r3wg-vg35",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128116",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-128116"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-rqp5-r3wg-vg35",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-rqp5-r3wg-vg35"
    },
    {
      "kind": "patch",
      "url": "https://github.com/sveltejs/kit/pull/17620",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/sveltejs/kit/commit/0a2e58cbccdd46cac20aa5af4e2edf17e0da11dd",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/sveltejs/kit/commit/a8f7c1e09f13524d3b71d814bad9c15c9f33ef49",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/sveltejs/kit/releases/tag/@sveltejs/kit@2.70.4",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/sveltejs/kit/releases/tag/@sveltejs/kit@3.1.1",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-16T14:48:54Z",
  "updatedAt": "2026-11-16T14:48:56Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# SvelteKit\: Protocol\-relative module import during server\-side route resolution allows cross\-origin script execution

- **ID**: CVE\-2026\-128116 / GHSA\-rqp5\-r3wg\-vg35
- **危険度**: Medium（警告） (CVSS 5.3)
- **言語**: JavaScript/TypeScript
- **パッケージ**: npm/@sveltejs/kit &gt;\= 3\.0\.0, &lt; 3\.1\.1 → 3\.1\.1, npm/@sveltejs/kit &lt; 2\.70\.4 → 2\.70\.4
- **公開**: 2026-11-16

## 原文

If an attacker could, using some form of social engineering or other exploit, get a user to use client\-side navigation to navigate to a specially\-crafted link, the attacker could cause code from another domain to be imported and run on the user's machine\. This only affected apps with \`router\.resolution\: 'server'\`\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/sveltejs/kit/security/advisories/GHSA-rqp5-r3wg-vg35>)
- [NVD CVE\-2026\-128116](<https://nvd.nist.gov/vuln/detail/CVE-2026-128116>)
- [GitHub Advisory GHSA\-rqp5\-r3wg\-vg35](<https://github.com/advisories/GHSA-rqp5-r3wg-vg35>)
- [修正 \(github\.com\)](<https://github.com/sveltejs/kit/pull/17620>)
- [修正 \(github\.com\)](<https://github.com/sveltejs/kit/commit/0a2e58cbccdd46cac20aa5af4e2edf17e0da11dd>)
- [修正 \(github\.com\)](<https://github.com/sveltejs/kit/commit/a8f7c1e09f13524d3b71d814bad9c15c9f33ef49>)
- [github\.com](<https://github.com/sveltejs/kit/releases/tag/@sveltejs/kit@2.70.4>)
- [github\.com](<https://github.com/sveltejs/kit/releases/tag/@sveltejs/kit@3.1.1>)
