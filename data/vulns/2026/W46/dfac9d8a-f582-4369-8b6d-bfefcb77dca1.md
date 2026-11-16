---
{
  "uuid": "dfac9d8a-f582-4369-8b6d-bfefcb77dca1",
  "ids": [
    "CVE-2026-126481"
  ],
  "title": "OpenEMR before 8.5.0 contains a path traversal vulnerability in era_payments.php and sl_eob_search.php that allows authenticated billing ...",
  "summary": "OpenEMR before 8.5.0 contains a path traversal vulnerability in era_payments.php and sl_eob_search.php that allows authenticated billing users to write files outside the ERA directory. Attackers can embed traversal sequences in the GS04 element of an uploaded X12 835 file to overwrite .edi or .835 files with attacker-controlled content anywhere writable by the web server.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:H",
  "os": [],
  "languages": [
    "PHP"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/openemr/openemr/security/advisories/GHSA-mf55-7h68-r2rp",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126481",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126481"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/openemr-before-8.5.0-path-traversal-via-era-835-file-upload",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:57.893Z",
  "updatedAt": "2026-11-13T19:19:24.300Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# OpenEMR before 8\.5\.0 contains a path traversal vulnerability in era\_payments\.php and sl\_eob\_search\.php that allows authenticated billing \.\.\.

- **ID**: CVE\-2026\-126481
- **危険度**: High（重要） (CVSS 8.1)
- **言語**: PHP
- **公開**: 2026-11-13

## 原文

OpenEMR before 8\.5\.0 contains a path traversal vulnerability in era\_payments\.php and sl\_eob\_search\.php that allows authenticated billing users to write files outside the ERA directory\. Attackers can embed traversal sequences in the GS04 element of an uploaded X12 835 file to overwrite \.edi or \.835 files with attacker\-controlled content anywhere writable by the web server\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/openemr/openemr/security/advisories/GHSA-mf55-7h68-r2rp>)
- [NVD CVE\-2026\-126481](<https://nvd.nist.gov/vuln/detail/CVE-2026-126481>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/openemr-before-8.5.0-path-traversal-via-era-835-file-upload>)
