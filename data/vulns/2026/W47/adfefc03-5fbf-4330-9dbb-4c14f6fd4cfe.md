---
{
  "uuid": "adfefc03-5fbf-4330-9dbb-4c14f6fd4cfe",
  "ids": [
    "CVE-2026-134404"
  ],
  "title": "Frappe ERPNext 6.3.0 before 15.124.0 and 16.x before 16.52.0 contains a missing authorization vulnerability in the customer and supplier ...",
  "summary": "Frappe ERPNext 6.3.0 before 15.124.0 and 16.x before 16.52.0 contains a missing authorization vulnerability in the customer and supplier portal list endpoint, which returns complete selling documents and RFQs without checking permission on the requested records. Authenticated attackers, including portal users or users without roles, can request out-of-scope records to read valuation, margin, and other bidder details.",
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
      "url": "https://github.com/frappe/erpnext/security/advisories/GHSA-29xj-69vf-fmmh",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-134404",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-134404"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/frappe-erpnext-6.3.0-before-15.124.0-missing-authorization-in-customer-and-supplier-portals",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-21T17:17:03.983Z",
  "updatedAt": "2026-11-21T17:17:04.107Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# Frappe ERPNext 6\.3\.0 before 15\.124\.0 and 16\.x before 16\.52\.0 contains a missing authorization vulnerability in the customer and supplier \.\.\.

- **ID**: CVE\-2026\-134404
- **危険度**: High（重要） (CVSS 7.7)
- **公開**: 2026-11-21

## 原文

Frappe ERPNext 6\.3\.0 before 15\.124\.0 and 16\.x before 16\.52\.0 contains a missing authorization vulnerability in the customer and supplier portal list endpoint, which returns complete selling documents and RFQs without checking permission on the requested records\. Authenticated attackers, including portal users or users without roles, can request out\-of\-scope records to read valuation, margin, and other bidder details\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/frappe/erpnext/security/advisories/GHSA-29xj-69vf-fmmh>)
- [NVD CVE\-2026\-134404](<https://nvd.nist.gov/vuln/detail/CVE-2026-134404>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/frappe-erpnext-6.3.0-before-15.124.0-missing-authorization-in-customer-and-supplier-portals>)
