---
{
  "uuid": "41f94613-ed4b-4eeb-ae1c-aee571fdfc8a",
  "ids": [
    "CVE-2026-126478"
  ],
  "title": "OpenEMR before 8.5.0 contains an SQL injection vulnerability in the Syndromic Surveillance report because the form_icd_codes[] POST array...",
  "summary": "OpenEMR before 8.5.0 contains an SQL injection vulnerability in the Syndromic Surveillance report because the form_icd_codes[] POST array is concatenated into an unquoted numeric IN() clause without integer validation. Authenticated users can submit quote-free payloads that bypass add_escape_custom to perform blind or UNION-based injection and exfiltrate patient health information.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.6,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:L/A:L",
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
      "url": "https://github.com/openemr/openemr/security/advisories/GHSA-q6f8-4pm7-q39r",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126478",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126478"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/openemr-before-8.5.0-sql-injection-via-form-icd-codes-in-syndromic-surveillance",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:57.397Z",
  "updatedAt": "2026-11-13T10:17:57.520Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# OpenEMR before 8\.5\.0 contains an SQL injection vulnerability in the Syndromic Surveillance report because the form\_icd\_codes\[\] POST array\.\.\.

- **ID**: CVE\-2026\-126478
- **危険度**: High（重要） (CVSS 7.6)
- **公開**: 2026-11-13

## 原文

OpenEMR before 8\.5\.0 contains an SQL injection vulnerability in the Syndromic Surveillance report because the form\_icd\_codes\[\] POST array is concatenated into an unquoted numeric IN\(\) clause without integer validation\. Authenticated users can submit quote\-free payloads that bypass add\_escape\_custom to perform blind or UNION\-based injection and exfiltrate patient health information\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/openemr/openemr/security/advisories/GHSA-q6f8-4pm7-q39r>)
- [NVD CVE\-2026\-126478](<https://nvd.nist.gov/vuln/detail/CVE-2026-126478>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/openemr-before-8.5.0-sql-injection-via-form-icd-codes-in-syndromic-surveillance>)
