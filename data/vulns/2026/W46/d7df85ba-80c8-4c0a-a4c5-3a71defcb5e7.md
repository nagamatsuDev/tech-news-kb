---
{
  "uuid": "d7df85ba-80c8-4c0a-a4c5-3a71defcb5e7",
  "ids": [
    "CVE-2026-126823"
  ],
  "title": "A local user with an ordinary account on the same host can place a file in a shared temporary location that the JDBC driver's native libr...",
  "summary": "A local user with an ordinary account on the same host can place a file in a shared temporary location that the JDBC driver's native library loading routine will accept and load without verifying its origin. Loading the driver class in a Java application may then run code of that user's choosing inside the application process, which may result in disclosure or alteration of data held by that process or in the process becoming unavailable.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7,
  "cvssVector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H",
  "os": [],
  "languages": [
    "Java/Kotlin"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126823",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126823"
    },
    {
      "kind": "reference",
      "url": "https://jira.mongodb.org/browse/SQL-3540",
      "host": "jira.mongodb.org",
      "label": "jira.mongodb.org"
    }
  ],
  "publishedAt": "2026-11-12T22:19:21.100Z",
  "updatedAt": "2026-11-13T16:05:40.350Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# A local user with an ordinary account on the same host can place a file in a shared temporary location that the JDBC driver's native libr\.\.\.

- **ID**: CVE\-2026\-126823
- **危険度**: High（重要） (CVSS 7.0)
- **言語**: Java/Kotlin
- **公開**: 2026-11-12

## 原文

A local user with an ordinary account on the same host can place a file in a shared temporary location that the JDBC driver's native library loading routine will accept and load without verifying its origin\. Loading the driver class in a Java application may then run code of that user's choosing inside the application process, which may result in disclosure or alteration of data held by that process or in the process becoming unavailable\.

## リンク

- [NVD CVE\-2026\-126823](<https://nvd.nist.gov/vuln/detail/CVE-2026-126823>)
- [jira\.mongodb\.org](<https://jira.mongodb.org/browse/SQL-3540>)
