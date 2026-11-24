---
{
  "uuid": "de1ace1e-8dcd-4c1f-8c2e-3ceb9f23e9df",
  "ids": [
    "CVE-2026-96457"
  ],
  "title": "A flaw was found in the administrative interface of Keycloak, an identity and access management solution.",
  "summary": "A flaw was found in the administrative interface of Keycloak, an identity and access management solution. The issue occurs when Fine-Grained Admin Permissions are used to restrict a group administrator from managing specific sub-groups. Due to an incomplete fix for a previous vulnerability, a restricted administrator can bypass these restrictions by moving a forbidden sub-group to the top level of the hierarchy. This allows the attacker to gain unauthorized control over the groups members, potentially leading to a full takeover of the security realm.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.7,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:C/C:H/I:H/A:N",
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
      "url": "https://access.redhat.com/security/cve/CVE-2026-96457",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-96457",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-96457"
    },
    {
      "kind": "reference",
      "url": "https://bugzilla.redhat.com/show_bug.cgi?id=2539300",
      "host": "bugzilla.redhat.com",
      "label": "bugzilla.redhat.com"
    }
  ],
  "publishedAt": "2026-11-23T16:18:05.500Z",
  "updatedAt": "2026-11-23T17:18:02.007Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# A flaw was found in the administrative interface of Keycloak, an identity and access management solution\.

- **ID**: CVE\-2026\-96457
- **危険度**: High（重要） (CVSS 7.7)
- **公開**: 2026-11-23

## 原文

A flaw was found in the administrative interface of Keycloak, an identity and access management solution\. The issue occurs when Fine\-Grained Admin Permissions are used to restrict a group administrator from managing specific sub\-groups\. Due to an incomplete fix for a previous vulnerability, a restricted administrator can bypass these restrictions by moving a forbidden sub\-group to the top level of the hierarchy\. This allows the attacker to gain unauthorized control over the groups members, potentially leading to a full takeover of the security realm\.

## リンク

- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/security/cve/CVE-2026-96457>)
- [NVD CVE\-2026\-96457](<https://nvd.nist.gov/vuln/detail/CVE-2026-96457>)
- [bugzilla\.redhat\.com](<https://bugzilla.redhat.com/show_bug.cgi?id=2539300>)
