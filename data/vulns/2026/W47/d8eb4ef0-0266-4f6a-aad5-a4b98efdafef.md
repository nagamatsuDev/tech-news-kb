---
{
  "uuid": "d8eb4ef0-0266-4f6a-aad5-a4b98efdafef",
  "ids": [
    "CVE-2026-131282"
  ],
  "title": "In Splunk SOAR versions below 8.8.0, a user who holds the \"Observer\" Splunk SOAR role could access a password-reset credential in a diagn...",
  "summary": "In Splunk SOAR versions below 8.8.0, a user who holds the \"Observer\" Splunk SOAR role could access a password-reset credential in a diagnostic log bundle and reset the password for an active local account.\nThe vulnerability is possible because Splunk SOAR does not redact password-reset email bodies before it logs communications between product processes.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-131282",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-131282"
    },
    {
      "kind": "reference",
      "url": "https://advisory.splunk.com/advisories/SVD-2026-1108",
      "host": "advisory.splunk.com",
      "label": "advisory.splunk.com"
    }
  ],
  "publishedAt": "2026-11-19T20:17:43.997Z",
  "updatedAt": "2026-11-19T22:18:02.550Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# In Splunk SOAR versions below 8\.8\.0, a user who holds the "Observer" Splunk SOAR role could access a password\-reset credential in a diagn\.\.\.

- **ID**: CVE\-2026\-131282
- **危険度**: High（重要） (CVSS 8.1)
- **公開**: 2026-11-19

## 原文

In Splunk SOAR versions below 8\.8\.0, a user who holds the "Observer" Splunk SOAR role could access a password\-reset credential in a diagnostic log bundle and reset the password for an active local account\.  
The vulnerability is possible because Splunk SOAR does not redact password\-reset email bodies before it logs communications between product processes\.

## リンク

- [NVD CVE\-2026\-131282](<https://nvd.nist.gov/vuln/detail/CVE-2026-131282>)
- [advisory\.splunk\.com](<https://advisory.splunk.com/advisories/SVD-2026-1108>)
