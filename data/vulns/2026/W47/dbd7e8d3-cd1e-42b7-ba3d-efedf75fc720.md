---
{
  "uuid": "dbd7e8d3-cd1e-42b7-ba3d-efedf75fc720",
  "ids": [
    "CVE-2026-131178"
  ],
  "title": "In Splunk Enterprise versions below 10.4.5, 10.2.9, 10.0.12, and 9.4.17, a user who holds the \"power\" Splunk role could craft a shared Cl...",
  "summary": "In Splunk Enterprise versions below 10.4.5, 10.2.9, 10.0.12, and 9.4.17, a user who holds the \"power\" Splunk role could craft a shared Classic Dashboard that runs arbitrary Search Processing Language (SPL) commands for another authenticated user. Exploitation requires the dashboard viewer to open the shared dashboard. The injected commands could access data available to the dashboard viewer, modify data available to the dashboard viewer, and partially disrupt Splunk Enterprise.\nFor more information see Add sparklines to search results (https://help.splunk.com/en/splunk-enterprise/search/search-manual/10.6/calculate-statistics/add-sparklines-to-search-results), Configure dashboard permissions (https://help.splunk.com/en/splunk-enterprise/create-dashboards-and-reports/simple-xml-dashboards/10.6/manage-and-share-dashboards/configure-dashboard-permissions), and SPL safeguards for risky commands (https://help.splunk.com/en/splunk-enterprise/administer/manage-users-and-security/10.6/best-practices-for-splunk-platform-security/spl-safeguards-for-risky-commands) in the Splunk documentation.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.6,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:H/I:H/A:L",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-131178",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-131178"
    },
    {
      "kind": "reference",
      "url": "https://advisory.splunk.com/advisories/SVD-2026-1103",
      "host": "advisory.splunk.com",
      "label": "advisory.splunk.com"
    }
  ],
  "publishedAt": "2026-11-19T20:17:29.687Z",
  "updatedAt": "2026-11-24T15:25:28.980Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# In Splunk Enterprise versions below 10\.4\.5, 10\.2\.9, 10\.0\.12, and 9\.4\.17, a user who holds the "power" Splunk role could craft a shared Cl\.\.\.

- **ID**: CVE\-2026\-131178
- **危険度**: High（重要） (CVSS 7.6)
- **公開**: 2026-11-19

## 原文

In Splunk Enterprise versions below 10\.4\.5, 10\.2\.9, 10\.0\.12, and 9\.4\.17, a user who holds the "power" Splunk role could craft a shared Classic Dashboard that runs arbitrary Search Processing Language \(SPL\) commands for another authenticated user\. Exploitation requires the dashboard viewer to open the shared dashboard\. The injected commands could access data available to the dashboard viewer, modify data available to the dashboard viewer, and partially disrupt Splunk Enterprise\.  
For more information see Add sparklines to search results \(https\://help\.splunk\.com/en/splunk\-enterprise/search/search\-manual/10\.6/calculate\-statistics/add\-sparklines\-to\-search\-results\), Configure dashboard permissions \(https\://help\.splunk\.com/en/splunk\-enterprise/create\-dashboards\-and\-reports/simple\-xml\-dashboards/10\.6/manage\-and\-share\-dashboards/configure\-dashboard\-permissions\), and SPL safeguards for risky commands \(https\://help\.splunk\.com/en/splunk\-enterprise/administer/manage\-users\-and\-security/10\.6/best\-practices\-for\-splunk\-platform\-security/spl\-safeguards\-for\-risky\-commands\) in the Splunk documentation\.

## リンク

- [NVD CVE\-2026\-131178](<https://nvd.nist.gov/vuln/detail/CVE-2026-131178>)
- [advisory\.splunk\.com](<https://advisory.splunk.com/advisories/SVD-2026-1103>)
