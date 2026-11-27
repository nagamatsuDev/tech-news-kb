---
{
  "uuid": "a6dd29dd-af5c-426b-8b5a-71dd6cbf13e1",
  "ids": [
    "CVE-2026-137511"
  ],
  "title": "Scriban before 7.6.0 contains a state isolation vulnerability because TemplateContext.Reset() does not clear the Tags dictionary holding ...",
  "summary": "Scriban before 7.6.0 contains a state isolation vulnerability because TemplateContext.Reset() does not clear the Tags dictionary holding array.cycle and math.random state. Attackers supplying templates to a reused context can observe or influence cycle positions and random sequences across renders, and accumulate unbounded cycle entries to exhaust memory.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.6,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:L/A:H",
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
      "url": "https://github.com/scriban/scriban/security/advisories/GHSA-8637-5q5q-hxvw",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "vendor",
      "url": "https://github.com/scriban/scriban/security/advisories/GHSA-vhvh-mqjm-8vpg",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-137511",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-137511"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/scriban-before-7.6.0-state-leakage-via-templatecontext-reset-tags",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-26T16:18:02.647Z",
  "updatedAt": "2026-11-26T16:18:02.763Z",
  "firstSeenAt": "2026-11-27T04:45:50.968Z",
  "week": "2026-W48"
}
---

# Scriban before 7\.6\.0 contains a state isolation vulnerability because TemplateContext\.Reset\(\) does not clear the Tags dictionary holding \.\.\.

- **ID**: CVE\-2026\-137511
- **危険度**: High（重要） (CVSS 7.6)
- **公開**: 2026-11-26

## 原文

Scriban before 7\.6\.0 contains a state isolation vulnerability because TemplateContext\.Reset\(\) does not clear the Tags dictionary holding array\.cycle and math\.random state\. Attackers supplying templates to a reused context can observe or influence cycle positions and random sequences across renders, and accumulate unbounded cycle entries to exhaust memory\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/scriban/scriban/security/advisories/GHSA-8637-5q5q-hxvw>)
- [ベンダー発表 \(github\.com\)](<https://github.com/scriban/scriban/security/advisories/GHSA-vhvh-mqjm-8vpg>)
- [NVD CVE\-2026\-137511](<https://nvd.nist.gov/vuln/detail/CVE-2026-137511>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/scriban-before-7.6.0-state-leakage-via-templatecontext-reset-tags>)
