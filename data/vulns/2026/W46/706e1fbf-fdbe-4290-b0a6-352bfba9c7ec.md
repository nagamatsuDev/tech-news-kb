---
{
  "uuid": "706e1fbf-fdbe-4290-b0a6-352bfba9c7ec",
  "ids": [
    "CVE-2026-111456"
  ],
  "title": "A missing authorization check has been found in ConsumerResource.setupOwner() function of consumer registration module in the Candlepin p...",
  "summary": "A missing authorization check has been found in ConsumerResource.setupOwner() function of consumer registration module in the Candlepin package. The registration method checks permission to create a consumer only when the caller is a user. A consumer that authenticates with its identity certificate does not go through that check. A low-privileged network attacker or user who has a valid consumer certificate for one organization can register a new consumer in a different organization by supplying that organization's key. The response includes an identity certificate for the new consumer. With that certificate, the attacker can view the target organization's subscription pools. When the organization is not using simple content access, the attacker can attach that organization's entitlements to the new consumer.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:H/A:N",
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
      "url": "https://access.redhat.com/errata/RHSA-2026:100120",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "vendor",
      "url": "https://access.redhat.com/errata/RHSA-2026:99949",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "vendor",
      "url": "https://access.redhat.com/errata/RHSA-2026:99950",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-111456",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-111456"
    },
    {
      "kind": "reference",
      "url": "https://bugzilla.redhat.com/show_bug.cgi?id=2553939",
      "host": "bugzilla.redhat.com",
      "label": "bugzilla.redhat.com"
    }
  ],
  "publishedAt": "2026-11-12T20:18:16.067Z",
  "updatedAt": "2026-11-13T17:17:17.230Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# A missing authorization check has been found in ConsumerResource\.setupOwner\(\) function of consumer registration module in the Candlepin p\.\.\.

- **ID**: CVE\-2026\-111456
- **危険度**: High（重要） (CVSS 7.1)
- **公開**: 2026-11-12

## 原文

A missing authorization check has been found in ConsumerResource\.setupOwner\(\) function of consumer registration module in the Candlepin package\. The registration method checks permission to create a consumer only when the caller is a user\. A consumer that authenticates with its identity certificate does not go through that check\. A low\-privileged network attacker or user who has a valid consumer certificate for one organization can register a new consumer in a different organization by supplying that organization's key\. The response includes an identity certificate for the new consumer\. With that certificate, the attacker can view the target organization's subscription pools\. When the organization is not using simple content access, the attacker can attach that organization's entitlements to the new consumer\.

## リンク

- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/errata/RHSA-2026:100120>)
- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/errata/RHSA-2026:99949>)
- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/errata/RHSA-2026:99950>)
- [NVD CVE\-2026\-111456](<https://nvd.nist.gov/vuln/detail/CVE-2026-111456>)
- [bugzilla\.redhat\.com](<https://bugzilla.redhat.com/show_bug.cgi?id=2553939>)
