---
{
  "uuid": "bc67764d-eab1-4aea-9c89-fdf72a55d9ab",
  "ids": [
    "CVE-2026-107372"
  ],
  "title": "The auth0-ai-js FGA retriever does not distinguish between authorization checks under different conditions when filtering documents durin...",
  "summary": "The auth0-ai-js FGA retriever does not distinguish between authorization checks under different conditions when filtering documents during retrieval-augmented generation, resulting in documents denied by Auth0 FGA being included in the model context and used in the generated response.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
  "os": [],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-107372",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-107372"
    },
    {
      "kind": "reference",
      "url": "https://trust.okta.com/security-advisories/improper-access-control-in-auth0-ai-js-document-retrieval-cve-2026-107372",
      "host": "trust.okta.com",
      "label": "trust.okta.com"
    }
  ],
  "publishedAt": "2026-11-10T21:17:52.713Z",
  "updatedAt": "2026-11-16T20:17:39.623Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# The auth0\-ai\-js FGA retriever does not distinguish between authorization checks under different conditions when filtering documents durin\.\.\.

- **ID**: CVE\-2026\-107372
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-10

## 原文

The auth0\-ai\-js FGA retriever does not distinguish between authorization checks under different conditions when filtering documents during retrieval\-augmented generation, resulting in documents denied by Auth0 FGA being included in the model context and used in the generated response\.

## リンク

- [NVD CVE\-2026\-107372](<https://nvd.nist.gov/vuln/detail/CVE-2026-107372>)
- [trust\.okta\.com](<https://trust.okta.com/security-advisories/improper-access-control-in-auth0-ai-js-document-retrieval-cve-2026-107372>)
