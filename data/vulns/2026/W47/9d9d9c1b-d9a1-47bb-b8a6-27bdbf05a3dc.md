---
{
  "uuid": "9d9d9c1b-d9a1-47bb-b8a6-27bdbf05a3dc",
  "ids": [
    "CVE-2022-51028"
  ],
  "title": "CmsEasy 7.7.5_20210919 contains an unauthenticated SQL injection vulnerability in the execsql_action function at /?case=crossall&act=exec...",
  "summary": "CmsEasy 7.7.5_20210919 contains an unauthenticated SQL injection vulnerability in the execsql_action function at /?case=crossall&act=execsql that executes attacker-supplied queries decrypted with the hardcoded key 'cmseasy_sql'. Attackers can send a crafted 'sql' parameter to run arbitrary SQL and dump the admin username and password hash. Exploitation evidence was first observed by the Shadowserver Foundation on 2023-10-22.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.2,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:L/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2022-51028",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2022-51028"
    },
    {
      "kind": "reference",
      "url": "https://cn-sec.com/archives/1580677.html",
      "host": "cn-sec.com",
      "label": "cn-sec.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/PeiQi0/PeiQi-WIKI-Book/blob/main/docs/wiki/cms/CmsEasy/CmsEasy%20crossall_act.php%20SQL%E6%B3%A8%E5%85%A5%E6%BC%8F%E6%B4%9E.md",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/projectdiscovery/nuclei-templates/blob/main/http/vulnerabilities/other/cmseasy-crossall-act-sqli.yaml",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/cmseasy-7.7-5-20210919-unauthenticated-sql-injection-via-crossall-execsql",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-18T16:17:51.760Z",
  "updatedAt": "2026-11-21T04:17:10.353Z",
  "firstSeenAt": "2026-11-19T03:57:45.838Z",
  "week": "2026-W47"
}
---

# CmsEasy 7\.7\.5\_20210919 contains an unauthenticated SQL injection vulnerability in the execsql\_action function at /?case\=crossall&amp;act\=exec\.\.\.

- **ID**: CVE\-2022\-51028
- **危険度**: High（重要） (CVSS 8.2)
- **公開**: 2026-11-18

## 原文

CmsEasy 7\.7\.5\_20210919 contains an unauthenticated SQL injection vulnerability in the execsql\_action function at /?case\=crossall&amp;act\=execsql that executes attacker\-supplied queries decrypted with the hardcoded key 'cmseasy\_sql'\. Attackers can send a crafted 'sql' parameter to run arbitrary SQL and dump the admin username and password hash\. Exploitation evidence was first observed by the Shadowserver Foundation on 2023\-10\-22\.

## リンク

- [NVD CVE\-2022\-51028](<https://nvd.nist.gov/vuln/detail/CVE-2022-51028>)
- [cn\-sec\.com](<https://cn-sec.com/archives/1580677.html>)
- [github\.com](<https://github.com/PeiQi0/PeiQi-WIKI-Book/blob/main/docs/wiki/cms/CmsEasy/CmsEasy%20crossall_act.php%20SQL%E6%B3%A8%E5%85%A5%E6%BC%8F%E6%B4%9E.md>)
- [github\.com](<https://github.com/projectdiscovery/nuclei-templates/blob/main/http/vulnerabilities/other/cmseasy-crossall-act-sqli.yaml>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/cmseasy-7.7-5-20210919-unauthenticated-sql-injection-via-crossall-execsql>)
