---
{
  "uuid": "1e856ddc-316c-4a3d-a682-d8cdcdbcaa47",
  "ids": [
    "CVE-2026-55216"
  ],
  "title": "Logto is the modern, open-source auth infrastructure for SaaS and AI apps.",
  "summary": "Logto is the modern, open-source auth infrastructure for SaaS and AI apps. Prior to 1.46.0, social account linking can use an unverified email returned by the standard OAuth 2.0 or Azure AD connector to select an existing local account. When findSocialRelatedUser matches a victim's email and a request to POST /api/experience/identification enables linkSocialIdentity, an attacker who controls that unverified provider email can link an attacker-controlled social identity to the victim account and sign in as the victim. The issue applies when the provider does not verify email ownership or allows the value to be set freely; Google, GitHub, and default OIDC connector behavior is not affected because those paths expose only verified email. Version 1.46.0 adds an opt-in email synchronization control to the standard OAuth 2.0 connector, while the Azure AD connector has offered an equivalent opt-in control since version 1.43.0. These controls preserve existing behavior by default, so administrators must enable them on affected connectors. A configurable mitigation is available in version 1.46.0.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
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
      "url": "https://github.com/logto-io/logto/security/advisories/GHSA-gc94-xqg8-v8r7",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-55216",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-55216"
    },
    {
      "kind": "patch",
      "url": "https://github.com/logto-io/logto/commit/1b03993a59c627ae83f0c892d76988ca056208b0",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/logto-io/logto/pull/9858",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/logto-io/logto/releases/tag/v1.46.0",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-20T18:18:54.100Z",
  "updatedAt": "2026-11-23T17:17:55.140Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# Logto is the modern, open\-source auth infrastructure for SaaS and AI apps\.

- **ID**: CVE\-2026\-55216
- **危険度**: High（重要） (CVSS 8.1)
- **公開**: 2026-11-20

## 原文

Logto is the modern, open\-source auth infrastructure for SaaS and AI apps\. Prior to 1\.46\.0, social account linking can use an unverified email returned by the standard OAuth 2\.0 or Azure AD connector to select an existing local account\. When findSocialRelatedUser matches a victim's email and a request to POST /api/experience/identification enables linkSocialIdentity, an attacker who controls that unverified provider email can link an attacker\-controlled social identity to the victim account and sign in as the victim\. The issue applies when the provider does not verify email ownership or allows the value to be set freely; Google, GitHub, and default OIDC connector behavior is not affected because those paths expose only verified email\. Version 1\.46\.0 adds an opt\-in email synchronization control to the standard OAuth 2\.0 connector, while the Azure AD connector has offered an equivalent opt\-in control since version 1\.43\.0\. These controls preserve existing behavior by default, so administrators must enable them on affected connectors\. A configurable mitigation is available in version 1\.46\.0\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/logto-io/logto/security/advisories/GHSA-gc94-xqg8-v8r7>)
- [NVD CVE\-2026\-55216](<https://nvd.nist.gov/vuln/detail/CVE-2026-55216>)
- [修正 \(github\.com\)](<https://github.com/logto-io/logto/commit/1b03993a59c627ae83f0c892d76988ca056208b0>)
- [修正 \(github\.com\)](<https://github.com/logto-io/logto/pull/9858>)
- [github\.com](<https://github.com/logto-io/logto/releases/tag/v1.46.0>)
