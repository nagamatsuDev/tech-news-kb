---
{
  "uuid": "028acfbf-fefe-4c58-b67e-62f803adaa34",
  "ids": [
    "CVE-2026-134250"
  ],
  "title": "Grav Form plugin 1.1.0 before 9.1.40 contains a stored cross-site scripting vulnerability in Form::uploadFiles(), which sanitizes SVG onl...",
  "summary": "Grav Form plugin 1.1.0 before 9.1.40 contains a stored cross-site scripting vulnerability in Form::uploadFiles(), which sanitizes SVG only when a file's last extension is .svg and accepts markup under unrecognized extensions. Anonymous attackers can upload files like drawing.svg.foo through public any-type upload forms, running script in an administrator's session when opened, enabling super-admin creation on Grav 2.x with Admin2.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:C/C:H/I:H/A:N",
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
      "url": "https://github.com/getgrav/grav/security/advisories/GHSA-2vpw-p335-mmmp",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-134250",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-134250"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/grav-form-plugin-1.1.0-before-9.1.40-stored-xss-via-unsanitized-file-uploads",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-21T17:16:42.550Z",
  "updatedAt": "2026-11-26T03:16:36.237Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# Grav Form plugin 1\.1\.0 before 9\.1\.40 contains a stored cross\-site scripting vulnerability in Form\:\:uploadFiles\(\), which sanitizes SVG onl\.\.\.

- **ID**: CVE\-2026\-134250
- **危険度**: High（重要） (CVSS 8.0)
- **公開**: 2026-11-21

## 原文

Grav Form plugin 1\.1\.0 before 9\.1\.40 contains a stored cross\-site scripting vulnerability in Form\:\:uploadFiles\(\), which sanitizes SVG only when a file's last extension is \.svg and accepts markup under unrecognized extensions\. Anonymous attackers can upload files like drawing\.svg\.foo through public any\-type upload forms, running script in an administrator's session when opened, enabling super\-admin creation on Grav 2\.x with Admin2\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/getgrav/grav/security/advisories/GHSA-2vpw-p335-mmmp>)
- [NVD CVE\-2026\-134250](<https://nvd.nist.gov/vuln/detail/CVE-2026-134250>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/grav-form-plugin-1.1.0-before-9.1.40-stored-xss-via-unsanitized-file-uploads>)
