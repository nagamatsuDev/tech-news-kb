---
{
  "uuid": "f0c391ee-e6ad-4a4f-b747-c53f1ebcf4bd",
  "ids": [
    "CVE-2026-76544"
  ],
  "title": "In Splunk Enterprise versions below 10.4.5, 10.2.9, 10.0.12, and 9.4.16, a user who does not hold the \"admin\" or \"power\" Splunk roles cou...",
  "summary": "In Splunk Enterprise versions below 10.4.5, 10.2.9, 10.0.12, and 9.4.16, a user who does not hold the \"admin\" or \"power\" Splunk roles could cause scheduled metric alert searches to run arbitrary Search Processing Language (SPL) commands and access credentials stored in cleartext. This requires at least one non-internal metric index on the instance.\nThe vulnerability is possible because Splunk Enterprise does not fully validate metric alert filter input before using it in a scheduled search.",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-76544",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-76544"
    },
    {
      "kind": "reference",
      "url": "https://advisory.splunk.com/advisories/SVD-2026-1103",
      "host": "advisory.splunk.com",
      "label": "advisory.splunk.com"
    }
  ],
  "publishedAt": "2026-11-19T20:17:53.857Z",
  "updatedAt": "2026-11-19T20:17:53.857Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# In Splunk Enterprise versions below 10\.4\.5, 10\.2\.9, 10\.0\.12, and 9\.4\.16, a user who does not hold the "admin" or "power" Splunk roles cou\.\.\.

- **ID**: CVE\-2026\-76544
- **危険度**: High（重要） (CVSS 8.1)
- **公開**: 2026-11-19

## 原文

In Splunk Enterprise versions below 10\.4\.5, 10\.2\.9, 10\.0\.12, and 9\.4\.16, a user who does not hold the "admin" or "power" Splunk roles could cause scheduled metric alert searches to run arbitrary Search Processing Language \(SPL\) commands and access credentials stored in cleartext\. This requires at least one non\-internal metric index on the instance\.  
The vulnerability is possible because Splunk Enterprise does not fully validate metric alert filter input before using it in a scheduled search\.

## リンク

- [NVD CVE\-2026\-76544](<https://nvd.nist.gov/vuln/detail/CVE-2026-76544>)
- [advisory\.splunk\.com](<https://advisory.splunk.com/advisories/SVD-2026-1103>)
