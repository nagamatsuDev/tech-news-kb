---
{
  "uuid": "83a7ab7b-90ec-464f-8a4f-49ce7dd8acba",
  "ids": [
    "CVE-2026-126401"
  ],
  "title": "Fleet before 4.86.2 contains a denial of service vulnerability that allows unauthenticated attackers to exhaust server memory through qua...",
  "summary": "Fleet before 4.86.2 contains a denial of service vulnerability that allows unauthenticated attackers to exhaust server memory through quadratic XML canonicalization of unsigned SAML responses. Attackers can send a single crafted SAML response with deeply nested elements declaring new namespace prefixes to POST /api/v1/fleet/sso/callback, crashing the Fleet server.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
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
      "url": "https://github.com/fleetdm/fleet/security/advisories/GHSA-mjrh-3v6h-8g5p",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126401",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126401"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/fleet-before-4.86.2-unauthenticated-dos-via-sso-callback-xml-canonicalization",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:44.597Z",
  "updatedAt": "2026-11-18T19:17:38.000Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Fleet before 4\.86\.2 contains a denial of service vulnerability that allows unauthenticated attackers to exhaust server memory through qua\.\.\.

- **ID**: CVE\-2026\-126401
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-13

## 原文

Fleet before 4\.86\.2 contains a denial of service vulnerability that allows unauthenticated attackers to exhaust server memory through quadratic XML canonicalization of unsigned SAML responses\. Attackers can send a single crafted SAML response with deeply nested elements declaring new namespace prefixes to POST /api/v1/fleet/sso/callback, crashing the Fleet server\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/fleetdm/fleet/security/advisories/GHSA-mjrh-3v6h-8g5p>)
- [NVD CVE\-2026\-126401](<https://nvd.nist.gov/vuln/detail/CVE-2026-126401>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/fleet-before-4.86.2-unauthenticated-dos-via-sso-callback-xml-canonicalization>)
