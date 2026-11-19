---
{
  "uuid": "a3137f7d-a48a-4a83-bda9-ada1ecbd9b7e",
  "ids": [
    "CVE-2026-131820"
  ],
  "title": "A server-side request forgery vulnerability in GitHub Enterprise Server allowed an authenticated user with repository write access to sen...",
  "summary": "A server-side request forgery vulnerability in GitHub Enterprise Server allowed an authenticated user with repository write access to send requests to internal services through Slack webhook validity checks, potentially leading to remote code execution on the appliance. Exploitation required Secret Protection with secret scanning and validity checks for partner patterns enabled. This vulnerability affected all versions prior to 3.23 and was fixed in versions 3.22.5, 3.21.10, and 3.20.12. This vulnerability was reported via the GitHub Bug Bounty program.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.7,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:P/PR:L/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-131820",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-131820"
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
  "publishedAt": "2026-11-18T02:17:41.427Z",
  "updatedAt": "2026-11-18T18:19:13.670Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W47"
}
---

# A server\-side request forgery vulnerability in GitHub Enterprise Server allowed an authenticated user with repository write access to sen\.\.\.

- **ID**: CVE\-2026\-131820
- **危険度**: High（重要） (CVSS 7.7)
- **公開**: 2026-11-18

## 原文

A server\-side request forgery vulnerability in GitHub Enterprise Server allowed an authenticated user with repository write access to send requests to internal services through Slack webhook validity checks, potentially leading to remote code execution on the appliance\. Exploitation required Secret Protection with secret scanning and validity checks for partner patterns enabled\. This vulnerability affected all versions prior to 3\.23 and was fixed in versions 3\.22\.5, 3\.21\.10, and 3\.20\.12\. This vulnerability was reported via the GitHub Bug Bounty program\.

## リンク

- [NVD CVE\-2026\-131820](<https://nvd.nist.gov/vuln/detail/CVE-2026-131820>)
- [docs\.github\.com](<https://docs.github.com/en/enterprise-server@3.20/admin/release-notes#3.20.12>)
- [docs\.github\.com](<https://docs.github.com/en/enterprise-server@3.21/admin/release-notes#3.21.10>)
- [docs\.github\.com](<https://docs.github.com/en/enterprise-server@3.22/admin/release-notes#3.22.5>)
