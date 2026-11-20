---
{
  "uuid": "fdd1ba5e-ab1c-4b16-92df-7c96e4fb3f38",
  "ids": [
    "CVE-2026-131256"
  ],
  "title": "In Splunk SOAR versions below 8.8.0, an authenticated user that holds a role with the System Settings edit permission could execute arbit...",
  "summary": "In Splunk SOAR versions below 8.8.0, an authenticated user that holds a role with the System Settings edit permission could execute arbitrary code on the host that runs Splunk SOAR.\nThe vulnerability is possible because the Representational State Transfer (REST) API accepts package references from untrusted sources and passes them to the dependency installer.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.2,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-131256",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-131256"
    },
    {
      "kind": "reference",
      "url": "https://advisory.splunk.com/advisories/SVD-2026-1108",
      "host": "advisory.splunk.com",
      "label": "advisory.splunk.com"
    }
  ],
  "publishedAt": "2026-11-19T20:17:40.787Z",
  "updatedAt": "2026-11-19T22:18:01.910Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# In Splunk SOAR versions below 8\.8\.0, an authenticated user that holds a role with the System Settings edit permission could execute arbit\.\.\.

- **ID**: CVE\-2026\-131256
- **危険度**: High（重要） (CVSS 7.2)
- **公開**: 2026-11-19

## 原文

In Splunk SOAR versions below 8\.8\.0, an authenticated user that holds a role with the System Settings edit permission could execute arbitrary code on the host that runs Splunk SOAR\.  
The vulnerability is possible because the Representational State Transfer \(REST\) API accepts package references from untrusted sources and passes them to the dependency installer\.

## リンク

- [NVD CVE\-2026\-131256](<https://nvd.nist.gov/vuln/detail/CVE-2026-131256>)
- [advisory\.splunk\.com](<https://advisory.splunk.com/advisories/SVD-2026-1108>)
