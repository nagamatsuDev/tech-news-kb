---
{
  "uuid": "4dfac4c9-8d92-48ef-adec-f16b44a4fab7",
  "ids": [
    "CVE-2026-83493"
  ],
  "title": "A flaw was found in distributed-workloads.",
  "summary": "A flaw was found in distributed-workloads. A remote attacker could exploit a vulnerability in the pull_request_target workflow by submitting a specially crafted pull request. This workflow processes untrusted code from the pull request author while operating with the base repository's sensitive secrets, such as the SNYK_TOKEN, and its default write token. Consequently, an attacker could exfiltrate these secrets, leading to unauthorized access to the Snyk integration and potential control over the repository.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
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
      "url": "https://access.redhat.com/security/cve/CVE-2026-83493",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-83493",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-83493"
    },
    {
      "kind": "reference",
      "url": "https://bugzilla.redhat.com/show_bug.cgi?id=2526349",
      "host": "bugzilla.redhat.com",
      "label": "bugzilla.redhat.com"
    }
  ],
  "publishedAt": "2026-11-06T07:17:52.420Z",
  "updatedAt": "2026-11-21T15:17:11.303Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# A flaw was found in distributed\-workloads\.

- **ID**: CVE\-2026\-83493
- **危険度**: Critical（緊急） (CVSS 9.1)
- **公開**: 2026-11-06

## 原文

A flaw was found in distributed\-workloads\. A remote attacker could exploit a vulnerability in the pull\_request\_target workflow by submitting a specially crafted pull request\. This workflow processes untrusted code from the pull request author while operating with the base repository's sensitive secrets, such as the SNYK\_TOKEN, and its default write token\. Consequently, an attacker could exfiltrate these secrets, leading to unauthorized access to the Snyk integration and potential control over the repository\.

## リンク

- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/security/cve/CVE-2026-83493>)
- [NVD CVE\-2026\-83493](<https://nvd.nist.gov/vuln/detail/CVE-2026-83493>)
- [bugzilla\.redhat\.com](<https://bugzilla.redhat.com/show_bug.cgi?id=2526349>)
