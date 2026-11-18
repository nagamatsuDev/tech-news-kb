---
{
  "uuid": "caecfcdd-de9e-4476-87bb-6e8a948a975f",
  "ids": [
    "CVE-2026-130870"
  ],
  "title": "ClearFlask before 2.7.3 contains an improper authorization vulnerability that allows any account holding an invitation ID to accept it re...",
  "summary": "ClearFlask before 2.7.3 contains an improper authorization vulnerability that allows any account holding an invitation ID to accept it regardless of invited email. Attackers who obtain a forwarded or shared invitation link can redeem it via accountAcceptInvitationAdmin or accountSignupAdmin to become project administrators.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.4,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
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
      "url": "https://github.com/clearflask/clearflask/security/advisories/GHSA-q2q3-44pf-4m3f",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-130870",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-130870"
    },
    {
      "kind": "patch",
      "url": "https://github.com/clearflask/clearflask/commit/54e387023d6149058244f0f2bdac37d0e02cd2bd",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/clearflask/clearflask/blob/2.7.2/clearflask-server/src/main/java/com/smotana/clearflask/web/resource/AccountResource.java#L1198-L1211",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/clearflask/clearflask/releases/tag/2.7.3",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/clearflask-before-2.7.3-improper-authorization-via-project-admin-invitation-acceptance",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-17T20:17:53.467Z",
  "updatedAt": "2026-11-17T20:17:53.467Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W47"
}
---

# ClearFlask before 2\.7\.3 contains an improper authorization vulnerability that allows any account holding an invitation ID to accept it re\.\.\.

- **ID**: CVE\-2026\-130870
- **危険度**: High（重要） (CVSS 7.4)
- **公開**: 2026-11-17

## 原文

ClearFlask before 2\.7\.3 contains an improper authorization vulnerability that allows any account holding an invitation ID to accept it regardless of invited email\. Attackers who obtain a forwarded or shared invitation link can redeem it via accountAcceptInvitationAdmin or accountSignupAdmin to become project administrators\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/clearflask/clearflask/security/advisories/GHSA-q2q3-44pf-4m3f>)
- [NVD CVE\-2026\-130870](<https://nvd.nist.gov/vuln/detail/CVE-2026-130870>)
- [修正 \(github\.com\)](<https://github.com/clearflask/clearflask/commit/54e387023d6149058244f0f2bdac37d0e02cd2bd>)
- [github\.com](<https://github.com/clearflask/clearflask/blob/2.7.2/clearflask-server/src/main/java/com/smotana/clearflask/web/resource/AccountResource.java#L1198-L1211>)
- [github\.com](<https://github.com/clearflask/clearflask/releases/tag/2.7.3>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/clearflask-before-2.7.3-improper-authorization-via-project-admin-invitation-acceptance>)
