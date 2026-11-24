---
{
  "uuid": "d3c29cbf-a3d8-48fa-a689-28bfecfb16fa",
  "ids": [
    "CVE-2026-126054"
  ],
  "title": "A Path Traversal vulnerability in workspace directory handling and Git integration in Google Cloud Dataform, BigQuery Studio and Colab En...",
  "summary": "A Path Traversal vulnerability in workspace directory handling and Git integration in Google Cloud Dataform, BigQuery Studio and Colab Enterprise on Google Cloud Platform allows an authenticated remote attacker to read private files and create arbitrary files across tenant repositories using crafted workspace operations and Git integration requests.\n\n\nThis vulnerability was patched on 10 October 2026, and no customer action is needed.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.3,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:H/VI:H/VA:N/SC:H/SI:H/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:Clear",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126054",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126054"
    },
    {
      "kind": "reference",
      "url": "https://docs.cloud.google.com/bigquery/docs/release-notes#November_19_2026",
      "host": "docs.cloud.google.com",
      "label": "docs.cloud.google.com"
    },
    {
      "kind": "reference",
      "url": "https://docs.cloud.google.com/dataform/docs/release-notes#November_19_2026",
      "host": "docs.cloud.google.com",
      "label": "docs.cloud.google.com"
    },
    {
      "kind": "reference",
      "url": "https://docs.cloud.google.com/support/bulletins/#gcp-2026-084",
      "host": "docs.cloud.google.com",
      "label": "docs.cloud.google.com"
    }
  ],
  "publishedAt": "2026-11-20T15:17:39.943Z",
  "updatedAt": "2026-11-23T16:06:05.540Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# A Path Traversal vulnerability in workspace directory handling and Git integration in Google Cloud Dataform, BigQuery Studio and Colab En\.\.\.

- **ID**: CVE\-2026\-126054
- **危険度**: Critical（緊急） (CVSS 9.3)
- **公開**: 2026-11-20

## 原文

A Path Traversal vulnerability in workspace directory handling and Git integration in Google Cloud Dataform, BigQuery Studio and Colab Enterprise on Google Cloud Platform allows an authenticated remote attacker to read private files and create arbitrary files across tenant repositories using crafted workspace operations and Git integration requests\.
  
This vulnerability was patched on 10 October 2026, and no customer action is needed\.

## リンク

- [NVD CVE\-2026\-126054](<https://nvd.nist.gov/vuln/detail/CVE-2026-126054>)
- [docs\.cloud\.google\.com](<https://docs.cloud.google.com/bigquery/docs/release-notes#November_19_2026>)
- [docs\.cloud\.google\.com](<https://docs.cloud.google.com/dataform/docs/release-notes#November_19_2026>)
- [docs\.cloud\.google\.com](<https://docs.cloud.google.com/support/bulletins/#gcp-2026-084>)
