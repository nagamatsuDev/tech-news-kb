---
{
  "uuid": "66d0beae-d0c6-4d02-83bd-e95bdd9ded75",
  "ids": [
    "CVE-2026-112740"
  ],
  "title": "A command injection vulnerability was identified in GitHub Enterprise Server that allowed an authenticated site administrator to execute ...",
  "summary": "A command injection vulnerability was identified in GitHub Enterprise Server that allowed an authenticated site administrator to execute arbitrary commands as the host git user on peer Git server nodes outside the pre-receive hook sandbox by supplying a crafted pre-receive environment download URL. Exploitation required a clustered deployment using custom pre-receive hook environments and at least one peer Git server node. This vulnerability affected all versions of GitHub Enterprise Server prior to 3.23 and was fixed in versions 3.22.5, 3.21.10, 3.20.12, and 3.19.16. This vulnerability was reported via the GitHub Bug Bounty program.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.4,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:P/PR:H/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-112740",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-112740"
    },
    {
      "kind": "reference",
      "url": "https://docs.github.com/en/enterprise-server@3.19/admin/release-notes#3.19.16",
      "host": "docs.github.com",
      "label": "docs.github.com"
    },
    {
      "kind": "reference",
      "url": "https://docs.github.com/en/enterprise-server@3.20/admin/release-notes#3.20.12",
      "host": "docs.github.com",
      "label": "docs.github.com"
    },
    {
      "kind": "reference",
      "url": "https://docs.github.com/en/enterprise-server@3.21/admin/release-notes#3.21.10",
      "host": "docs.github.com",
      "label": "docs.github.com"
    },
    {
      "kind": "reference",
      "url": "https://docs.github.com/en/enterprise-server@3.22/admin/release-notes#3.22.5",
      "host": "docs.github.com",
      "label": "docs.github.com"
    }
  ],
  "publishedAt": "2026-11-18T01:17:49.387Z",
  "updatedAt": "2026-11-18T01:17:49.387Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W47"
}
---

# A command injection vulnerability was identified in GitHub Enterprise Server that allowed an authenticated site administrator to execute \.\.\.

- **ID**: CVE\-2026\-112740
- **危険度**: High（重要） (CVSS 7.4)
- **公開**: 2026-11-18

## 原文

A command injection vulnerability was identified in GitHub Enterprise Server that allowed an authenticated site administrator to execute arbitrary commands as the host git user on peer Git server nodes outside the pre\-receive hook sandbox by supplying a crafted pre\-receive environment download URL\. Exploitation required a clustered deployment using custom pre\-receive hook environments and at least one peer Git server node\. This vulnerability affected all versions of GitHub Enterprise Server prior to 3\.23 and was fixed in versions 3\.22\.5, 3\.21\.10, 3\.20\.12, and 3\.19\.16\. This vulnerability was reported via the GitHub Bug Bounty program\.

## リンク

- [NVD CVE\-2026\-112740](<https://nvd.nist.gov/vuln/detail/CVE-2026-112740>)
- [docs\.github\.com](<https://docs.github.com/en/enterprise-server@3.19/admin/release-notes#3.19.16>)
- [docs\.github\.com](<https://docs.github.com/en/enterprise-server@3.20/admin/release-notes#3.20.12>)
- [docs\.github\.com](<https://docs.github.com/en/enterprise-server@3.21/admin/release-notes#3.21.10>)
- [docs\.github\.com](<https://docs.github.com/en/enterprise-server@3.22/admin/release-notes#3.22.5>)
