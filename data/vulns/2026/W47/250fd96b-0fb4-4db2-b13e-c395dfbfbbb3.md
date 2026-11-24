---
{
  "uuid": "250fd96b-0fb4-4db2-b13e-c395dfbfbbb3",
  "ids": [
    "CVE-2026-134399"
  ],
  "title": "Frappe ERPNext 8.11.1 before 15.124.0 and 16.x before 16.52.0 is missing an authorization check in print and portal views, which fail to ...",
  "summary": "Frappe ERPNext 8.11.1 before 15.124.0 and 16.x before 16.52.0 is missing an authorization check in print and portal views, which fail to apply desk users' User Permissions to customer documents. Authenticated desk users with an ordinary job role can send crafted requests naming records outside their permitted scope to read documents of customers their User Permissions exclude.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.7,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:N/A:N",
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
      "url": "https://github.com/frappe/erpnext/security/advisories/GHSA-877j-rg2w-v649",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-134399",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-134399"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/frappe-erpnext-8.11.1-before-15.124.0-unauthorized-document-access-via-print-and-portal-views",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-21T17:17:03.463Z",
  "updatedAt": "2026-11-23T21:17:00.003Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# Frappe ERPNext 8\.11\.1 before 15\.124\.0 and 16\.x before 16\.52\.0 is missing an authorization check in print and portal views, which fail to \.\.\.

- **ID**: CVE\-2026\-134399
- **危険度**: High（重要） (CVSS 7.7)
- **公開**: 2026-11-21

## 原文

Frappe ERPNext 8\.11\.1 before 15\.124\.0 and 16\.x before 16\.52\.0 is missing an authorization check in print and portal views, which fail to apply desk users' User Permissions to customer documents\. Authenticated desk users with an ordinary job role can send crafted requests naming records outside their permitted scope to read documents of customers their User Permissions exclude\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/frappe/erpnext/security/advisories/GHSA-877j-rg2w-v649>)
- [NVD CVE\-2026\-134399](<https://nvd.nist.gov/vuln/detail/CVE-2026-134399>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/frappe-erpnext-8.11.1-before-15.124.0-unauthorized-document-access-via-print-and-portal-views>)
