---
{
  "uuid": "dead8875-38a9-47dc-8a0a-5ecedfe7be34",
  "ids": [
    "CVE-2026-126385"
  ],
  "title": "n8n before 2.45.5, 2.46.x before 2.46.1, and 3.x before 3.0.1 contains a flaw in the OAuth2 credential callback of the dynamic-credential...",
  "summary": "n8n before 2.45.5, 2.46.x before 2.46.1, and 3.x before 3.0.1 contains a flaw in the OAuth2 credential callback of the dynamic-credential connect flow, which does not verify that the completing browser belongs to the user who started the flow. Members with access to a resolvable OAuth2 credential can send the provider authorization URL to a victim; if the victim consents without an active n8n session, the victim's tokens are stored under the member's identity, letting the member's workflows act as the victim.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.7,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:C/C:H/I:H/A:N",
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
      "url": "https://github.com/n8n-io/n8n/security/advisories/GHSA-426f-xmcv-g8pg",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126385",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126385"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/n8n-before-2.46.1-oauth-account-hijack-via-unauthenticated-credential-callback",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:41.663Z",
  "updatedAt": "2026-11-13T10:17:41.800Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# n8n before 2\.45\.5, 2\.46\.x before 2\.46\.1, and 3\.x before 3\.0\.1 contains a flaw in the OAuth2 credential callback of the dynamic\-credential\.\.\.

- **ID**: CVE\-2026\-126385
- **危険度**: High（重要） (CVSS 7.7)
- **公開**: 2026-11-13

## 原文

n8n before 2\.45\.5, 2\.46\.x before 2\.46\.1, and 3\.x before 3\.0\.1 contains a flaw in the OAuth2 credential callback of the dynamic\-credential connect flow, which does not verify that the completing browser belongs to the user who started the flow\. Members with access to a resolvable OAuth2 credential can send the provider authorization URL to a victim; if the victim consents without an active n8n session, the victim's tokens are stored under the member's identity, letting the member's workflows act as the victim\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/n8n-io/n8n/security/advisories/GHSA-426f-xmcv-g8pg>)
- [NVD CVE\-2026\-126385](<https://nvd.nist.gov/vuln/detail/CVE-2026-126385>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/n8n-before-2.46.1-oauth-account-hijack-via-unauthenticated-credential-callback>)
