---
{
  "uuid": "7c6c5af6-0496-49db-adce-eeaed55b2d38",
  "ids": [
    "CVE-2026-124445"
  ],
  "title": "OpenEMR from 7.0.1 before 8.4.0 contains a flaw in src/Common/Auth/OneTimeAuth.php that ignores the enforce_onetime_use and max_access_co...",
  "summary": "OpenEMR from 7.0.1 before 8.4.0 contains a flaw in src/Common/Auth/OneTimeAuth.php that ignores the enforce_onetime_use and max_access_count flags, never revokes consumed service_auth tokens, and checks login_pin without rate limiting or strict comparison. Attackers holding a captured token can replay it or brute-force the PIN to open patient-portal sessions exposing PHI.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124445",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-124445"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/openemr-7.0.1-before-8.4.0-onetimeauth-token-replay-and-pin-brute-force",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-08T14:18:11.487Z",
  "updatedAt": "2026-11-23T21:09:47.087Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# OpenEMR from 7\.0\.1 before 8\.4\.0 contains a flaw in src/Common/Auth/OneTimeAuth\.php that ignores the enforce\_onetime\_use and max\_access\_co\.\.\.

- **ID**: CVE\-2026\-124445
- **危険度**: Critical（緊急） (CVSS 9.8)
- **言語**: PHP
- **公開**: 2026-11-08

## 原文

OpenEMR from 7\.0\.1 before 8\.4\.0 contains a flaw in src/Common/Auth/OneTimeAuth\.php that ignores the enforce\_onetime\_use and max\_access\_count flags, never revokes consumed service\_auth tokens, and checks login\_pin without rate limiting or strict comparison\. Attackers holding a captured token can replay it or brute\-force the PIN to open patient\-portal sessions exposing PHI\.

## リンク

- [NVD CVE\-2026\-124445](<https://nvd.nist.gov/vuln/detail/CVE-2026-124445>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/openemr-7.0.1-before-8.4.0-onetimeauth-token-replay-and-pin-brute-force>)
