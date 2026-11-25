---
{
  "uuid": "ca3dacbf-f81f-4f5e-bf5f-60ff0d79b420",
  "ids": [
    "CVE-2026-133456"
  ],
  "title": "AutoGPT is a workflow automation platform for creating, deploying, and managing continuous artificial intelligence agents.",
  "summary": "AutoGPT is a workflow automation platform for creating, deploying, and managing continuous artificial intelligence agents. From 0.11.1 before 0.11.3, anyone with an Exa Search Monitor trigger's URL can start one run of the owner's workflow per request with fake event data, even when a secret is set. The workflow runs with the owner's saved credentials and credits, and nothing is returned to the attacker. This issue is fixed in version 0.11.3.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N",
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
      "url": "https://github.com/Significant-Gravitas/AutoGPT/security/advisories/GHSA-pc98-63jj-97gm",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-133456",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-133456"
    },
    {
      "kind": "patch",
      "url": "https://github.com/Significant-Gravitas/AutoGPT/commit/938143fae092fff1a465e44d300285d3070006b1",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/Significant-Gravitas/AutoGPT/pull/16760",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.11.3",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-24T22:18:50.277Z",
  "updatedAt": "2026-11-24T22:18:50.277Z",
  "firstSeenAt": "2026-11-25T05:13:17.065Z",
  "week": "2026-W48"
}
---

# AutoGPT is a workflow automation platform for creating, deploying, and managing continuous artificial intelligence agents\.

- **ID**: CVE\-2026\-133456
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-24

## 原文

AutoGPT is a workflow automation platform for creating, deploying, and managing continuous artificial intelligence agents\. From 0\.11\.1 before 0\.11\.3, anyone with an Exa Search Monitor trigger's URL can start one run of the owner's workflow per request with fake event data, even when a secret is set\. The workflow runs with the owner's saved credentials and credits, and nothing is returned to the attacker\. This issue is fixed in version 0\.11\.3\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/Significant-Gravitas/AutoGPT/security/advisories/GHSA-pc98-63jj-97gm>)
- [NVD CVE\-2026\-133456](<https://nvd.nist.gov/vuln/detail/CVE-2026-133456>)
- [修正 \(github\.com\)](<https://github.com/Significant-Gravitas/AutoGPT/commit/938143fae092fff1a465e44d300285d3070006b1>)
- [修正 \(github\.com\)](<https://github.com/Significant-Gravitas/AutoGPT/pull/16760>)
- [github\.com](<https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.11.3>)
