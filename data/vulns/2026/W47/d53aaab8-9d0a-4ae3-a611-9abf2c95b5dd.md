---
{
  "uuid": "d53aaab8-9d0a-4ae3-a611-9abf2c95b5dd",
  "ids": [
    "CVE-2026-131303"
  ],
  "title": "In Splunk AI Assistant versions below 2.0.0, a user who does not hold the \"admin\" or \"power\" Splunk roles could obtain limited informatio...",
  "summary": "In Splunk AI Assistant versions below 2.0.0, a user who does not hold the \"admin\" or \"power\" Splunk roles could obtain limited information about indexes and data sources outside their authorized scope through the assistant.\nThe vulnerability is possible because Splunk AI Assistant does not fully apply authorization controls to all information that it retrieves.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:L/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-131303",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-131303"
    },
    {
      "kind": "reference",
      "url": "https://advisory.splunk.com/advisories/SVD-2026-1111",
      "host": "advisory.splunk.com",
      "label": "advisory.splunk.com"
    }
  ],
  "publishedAt": "2026-11-19T20:17:46.630Z",
  "updatedAt": "2026-11-19T20:17:46.630Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# In Splunk AI Assistant versions below 2\.0\.0, a user who does not hold the "admin" or "power" Splunk roles could obtain limited informatio\.\.\.

- **ID**: CVE\-2026\-131303
- **危険度**: High（重要） (CVSS 7.1)
- **公開**: 2026-11-19

## 原文

In Splunk AI Assistant versions below 2\.0\.0, a user who does not hold the "admin" or "power" Splunk roles could obtain limited information about indexes and data sources outside their authorized scope through the assistant\.  
The vulnerability is possible because Splunk AI Assistant does not fully apply authorization controls to all information that it retrieves\.

## リンク

- [NVD CVE\-2026\-131303](<https://nvd.nist.gov/vuln/detail/CVE-2026-131303>)
- [advisory\.splunk\.com](<https://advisory.splunk.com/advisories/SVD-2026-1111>)
