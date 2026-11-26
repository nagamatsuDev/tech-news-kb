---
{
  "uuid": "5a20780b-befc-4ea4-9c5c-bcb1d1e2f89f",
  "ids": [
    "CVE-2026-96296"
  ],
  "title": "An API which can allow a user to delete any workflow execution results is missing authentication.",
  "summary": "An API which can allow a user to delete any workflow execution results is missing authentication. This means that any workflow result could be deleted by someone able to reach the Texera instance.\n\n\n\nThis issue affects Apache Texera: from 1.1.0-incubating before 1.3.0-incubating.\n\n\n\nUsers are recommended to upgrade to version 1.3.0-incubating, which fixes the issue.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-96296",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-96296"
    },
    {
      "kind": "reference",
      "url": "https://lists.apache.org/thread/2fdvr0rt9s8md9ogfo6scpypvozd3j7m",
      "host": "lists.apache.org",
      "label": "lists.apache.org"
    }
  ],
  "publishedAt": "2026-11-24T11:17:21.480Z",
  "updatedAt": "2026-11-25T20:18:48.073Z",
  "firstSeenAt": "2026-11-26T04:41:30.937Z",
  "week": "2026-W48"
}
---

# An API which can allow a user to delete any workflow execution results is missing authentication\.

- **ID**: CVE\-2026\-96296
- **危険度**: Critical（緊急） (CVSS 9.1)
- **公開**: 2026-11-24

## 原文

An API which can allow a user to delete any workflow execution results is missing authentication\. This means that any workflow result could be deleted by someone able to reach the Texera instance\.
  
This issue affects Apache Texera\: from 1\.1\.0\-incubating before 1\.3\.0\-incubating\.
  
Users are recommended to upgrade to version 1\.3\.0\-incubating, which fixes the issue\.

## リンク

- [NVD CVE\-2026\-96296](<https://nvd.nist.gov/vuln/detail/CVE-2026-96296>)
- [lists\.apache\.org](<https://lists.apache.org/thread/2fdvr0rt9s8md9ogfo6scpypvozd3j7m>)
