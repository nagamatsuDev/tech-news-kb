---
{
  "uuid": "defae137-6ef5-4dea-bdba-4c61ed58b3d3",
  "ids": [
    "CVE-2026-106475"
  ],
  "title": "The Elasticsearch data source resource proxy forwards the request method and path to Elasticsearch using the data source's own credential...",
  "summary": "The Elasticsearch data source resource proxy forwards the request method and path to Elasticsearch using the data source's own credentials, without restricting them to the operations the plugin needs. A user who can query the data source can alter index mappings or reach other indices on the cluster. [Improper authorization / path validation]",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:L/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-106475",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-106475"
    },
    {
      "kind": "reference",
      "url": "https://grafana.com/security/security-advisories/cve-2026-106475",
      "host": "grafana.com",
      "label": "grafana.com"
    }
  ],
  "publishedAt": "2026-11-12T18:17:12.720Z",
  "updatedAt": "2026-11-17T17:17:46.497Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W46"
}
---

# The Elasticsearch data source resource proxy forwards the request method and path to Elasticsearch using the data source's own credential\.\.\.

- **ID**: CVE\-2026\-106475
- **危険度**: High（重要） (CVSS 7.1)
- **公開**: 2026-11-12

## 原文

The Elasticsearch data source resource proxy forwards the request method and path to Elasticsearch using the data source's own credentials, without restricting them to the operations the plugin needs\. A user who can query the data source can alter index mappings or reach other indices on the cluster\. \[Improper authorization / path validation\]

## リンク

- [NVD CVE\-2026\-106475](<https://nvd.nist.gov/vuln/detail/CVE-2026-106475>)
- [grafana\.com](<https://grafana.com/security/security-advisories/cve-2026-106475>)
