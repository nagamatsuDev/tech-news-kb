---
{
  "uuid": "dbd09a3e-e2f4-49bf-85ef-fb7e1133a3cc",
  "ids": [
    "CVE-2026-124488"
  ],
  "title": "OpenEMR before 8.3.0 contains an authorization bypass vulnerability that allows authenticated clinicians lacking high-sensitivity permiss...",
  "summary": "OpenEMR before 8.3.0 contains an authorization bypass vulnerability that allows authenticated clinicians lacking high-sensitivity permission to read and modify encounter-bound forms via load_form.php. Attackers can request the Clinical Notes or Care Plan direct loader to obtain restricted content and a CSRF token, then submit save.php to tamper with clinical records.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
  "os": [],
  "languages": [
    "PHP"
  ],
  "products": [
    "open-emr openemr"
  ],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124488",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-124488"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/openemr-before-8.3.0-authorization-bypass-via-load-form-php-high-sensitivity-encounters",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-08T14:18:18.370Z",
  "updatedAt": "2026-11-17T21:11:35.957Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W45"
}
---

# OpenEMR before 8\.3\.0 contains an authorization bypass vulnerability that allows authenticated clinicians lacking high\-sensitivity permiss\.\.\.

- **ID**: CVE\-2026\-124488
- **危険度**: High（重要） (CVSS 8.1)
- **言語**: PHP
- **公開**: 2026-11-08

## 原文

OpenEMR before 8\.3\.0 contains an authorization bypass vulnerability that allows authenticated clinicians lacking high\-sensitivity permission to read and modify encounter\-bound forms via load\_form\.php\. Attackers can request the Clinical Notes or Care Plan direct loader to obtain restricted content and a CSRF token, then submit save\.php to tamper with clinical records\.

## リンク

- [NVD CVE\-2026\-124488](<https://nvd.nist.gov/vuln/detail/CVE-2026-124488>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/openemr-before-8.3.0-authorization-bypass-via-load-form-php-high-sensitivity-encounters>)
