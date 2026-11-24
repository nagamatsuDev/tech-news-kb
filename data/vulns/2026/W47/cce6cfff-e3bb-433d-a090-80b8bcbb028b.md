---
{
  "uuid": "cce6cfff-e3bb-433d-a090-80b8bcbb028b",
  "ids": [
    "CVE-2026-133062"
  ],
  "title": "A flaw was found in Moodle's external database enrolment plugin.",
  "summary": "A flaw was found in Moodle's external database enrolment plugin. Insufficient sanitization of data passed to queries against the external database allows an authenticated user with course editing permissions to perform a Structured Query Language (SQL) injection attack. When this non-default plugin is enabled, an attacker can exploit this issue to view, modify, or delete sensitive records within the connected external database.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://access.redhat.com/security/cve/CVE-2026-133062",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-133062",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-133062"
    },
    {
      "kind": "patch",
      "url": "https://github.com/moodle/moodle/commit/2547dea31069f97e762f8e2ae68a96d329867b5f",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/moodle/moodle/commit/bf8f2215bdd0bd53fde1773b64a354a95fa666dc",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/moodle/moodle/commit/e2767bf3924756d58c63b53c9d11b818f70914c1",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://bugzilla.redhat.com/show_bug.cgi?id=2576520",
      "host": "bugzilla.redhat.com",
      "label": "bugzilla.redhat.com"
    }
  ],
  "publishedAt": "2026-11-19T16:21:19.867Z",
  "updatedAt": "2026-11-23T16:24:48.897Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# A flaw was found in Moodle's external database enrolment plugin\.

- **ID**: CVE\-2026\-133062
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-19

## 原文

A flaw was found in Moodle's external database enrolment plugin\. Insufficient sanitization of data passed to queries against the external database allows an authenticated user with course editing permissions to perform a Structured Query Language \(SQL\) injection attack\. When this non\-default plugin is enabled, an attacker can exploit this issue to view, modify, or delete sensitive records within the connected external database\.

## リンク

- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/security/cve/CVE-2026-133062>)
- [NVD CVE\-2026\-133062](<https://nvd.nist.gov/vuln/detail/CVE-2026-133062>)
- [修正 \(github\.com\)](<https://github.com/moodle/moodle/commit/2547dea31069f97e762f8e2ae68a96d329867b5f>)
- [修正 \(github\.com\)](<https://github.com/moodle/moodle/commit/bf8f2215bdd0bd53fde1773b64a354a95fa666dc>)
- [修正 \(github\.com\)](<https://github.com/moodle/moodle/commit/e2767bf3924756d58c63b53c9d11b818f70914c1>)
- [bugzilla\.redhat\.com](<https://bugzilla.redhat.com/show_bug.cgi?id=2576520>)
