---
{
  "uuid": "b33c40bd-dfa5-4e77-9ca2-ab7ac60eed17",
  "ids": [
    "CVE-2026-137536"
  ],
  "title": "ToolJet before 3.21.94-beta contains an authentication bypass in its server OAuth SSO sign-in module, which resolves Google and Git SSO l...",
  "summary": "ToolJet before 3.21.94-beta contains an authentication bypass in its server OAuth SSO sign-in module, which resolves Google and Git SSO logins solely by the provider-asserted email without checking email_verified or binding the SSO subject. Unauthenticated attackers can submit a trusted-issuer token carrying a victim's unverified email to the SSO callback to obtain the victim's session, including admin accounts.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://github.com/ToolJet/ToolJet/security/advisories/GHSA-7g4q-wmw6-7r36",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-137536",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-137536"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/tooljet-before-3.21.94-beta-account-takeover-via-sso-email-based-account-linking",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-26T16:18:06.410Z",
  "updatedAt": "2026-11-26T16:18:06.537Z",
  "firstSeenAt": "2026-11-27T04:45:50.968Z",
  "week": "2026-W48"
}
---

# ToolJet before 3\.21\.94\-beta contains an authentication bypass in its server OAuth SSO sign\-in module, which resolves Google and Git SSO l\.\.\.

- **ID**: CVE\-2026\-137536
- **危険度**: Critical（緊急） (CVSS 9.8)
- **公開**: 2026-11-26

## 原文

ToolJet before 3\.21\.94\-beta contains an authentication bypass in its server OAuth SSO sign\-in module, which resolves Google and Git SSO logins solely by the provider\-asserted email without checking email\_verified or binding the SSO subject\. Unauthenticated attackers can submit a trusted\-issuer token carrying a victim's unverified email to the SSO callback to obtain the victim's session, including admin accounts\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/ToolJet/ToolJet/security/advisories/GHSA-7g4q-wmw6-7r36>)
- [NVD CVE\-2026\-137536](<https://nvd.nist.gov/vuln/detail/CVE-2026-137536>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/tooljet-before-3.21.94-beta-account-takeover-via-sso-email-based-account-linking>)
