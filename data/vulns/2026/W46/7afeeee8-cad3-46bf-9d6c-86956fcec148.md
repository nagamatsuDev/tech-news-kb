---
{
  "uuid": "7afeeee8-cad3-46bf-9d6c-86956fcec148",
  "ids": [
    "CVE-2026-126442"
  ],
  "title": "OpenEMR before 8.5.0 contains a missing authorization vulnerability in create_portallogin.php that allows low-privilege authenticated use...",
  "summary": "OpenEMR before 8.5.0 contains a missing authorization vulnerability in create_portallogin.php that allows low-privilege authenticated users to replace patient portal credentials without ACL checks. Attackers can select a victim patient in session and post replacement credentials to take over portal accounts, read PHI, and lock patients out.",
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
      "kind": "vendor",
      "url": "https://github.com/openemr/openemr/security/advisories/GHSA-83hq-c876-fcwf",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126442",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126442"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/openemr-before-8.5.0-missing-authorization-via-create-portallogin-php-portal-takeover",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:51.480Z",
  "updatedAt": "2026-11-17T20:59:55.573Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# OpenEMR before 8\.5\.0 contains a missing authorization vulnerability in create\_portallogin\.php that allows low\-privilege authenticated use\.\.\.

- **ID**: CVE\-2026\-126442
- **危険度**: High（重要） (CVSS 8.1)
- **言語**: PHP
- **公開**: 2026-11-13

## 原文

OpenEMR before 8\.5\.0 contains a missing authorization vulnerability in create\_portallogin\.php that allows low\-privilege authenticated users to replace patient portal credentials without ACL checks\. Attackers can select a victim patient in session and post replacement credentials to take over portal accounts, read PHI, and lock patients out\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/openemr/openemr/security/advisories/GHSA-83hq-c876-fcwf>)
- [NVD CVE\-2026\-126442](<https://nvd.nist.gov/vuln/detail/CVE-2026-126442>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/openemr-before-8.5.0-missing-authorization-via-create-portallogin-php-portal-takeover>)
