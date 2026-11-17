---
{
  "uuid": "dfff9c35-2fa6-4fa3-b76c-5dedbdf4064f",
  "ids": [
    "CVE-2026-130366"
  ],
  "title": "AdminNeo before 5.9.1 contains an authentication bypass vulnerability in the ClickHouse driver that allows remote attackers to log in to ...",
  "summary": "AdminNeo before 5.9.1 contains an authentication bypass vulnerability in the ClickHouse driver that allows remote attackers to log in to passwordless accounts without the configured defaultPasswordHash password. Attackers who know the name of a ClickHouse no_password account can submit any non-empty password, because connect() skips openPasswordless(), and obtain a session with that account's rights.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://github.com/adminneo-org/adminneo/security/advisories/GHSA-h9x9-p972-28q9",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-130366",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-130366"
    },
    {
      "kind": "patch",
      "url": "https://github.com/adminneo-org/adminneo/commit/7905a3583d25ccfa598665d717dd722e4f7ce52e",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/adminneo-org/adminneo/releases/tag/v5.9.1",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/adminneo-before-5.9.1-authentication-bypass-via-clickhouse-driver-defaultpasswordhash",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-17T02:17:19.593Z",
  "updatedAt": "2026-11-17T02:17:19.727Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# AdminNeo before 5\.9\.1 contains an authentication bypass vulnerability in the ClickHouse driver that allows remote attackers to log in to \.\.\.

- **ID**: CVE\-2026\-130366
- **危険度**: High（重要） (CVSS 8.1)
- **公開**: 2026-11-17

## 原文

AdminNeo before 5\.9\.1 contains an authentication bypass vulnerability in the ClickHouse driver that allows remote attackers to log in to passwordless accounts without the configured defaultPasswordHash password\. Attackers who know the name of a ClickHouse no\_password account can submit any non\-empty password, because connect\(\) skips openPasswordless\(\), and obtain a session with that account's rights\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/adminneo-org/adminneo/security/advisories/GHSA-h9x9-p972-28q9>)
- [NVD CVE\-2026\-130366](<https://nvd.nist.gov/vuln/detail/CVE-2026-130366>)
- [修正 \(github\.com\)](<https://github.com/adminneo-org/adminneo/commit/7905a3583d25ccfa598665d717dd722e4f7ce52e>)
- [github\.com](<https://github.com/adminneo-org/adminneo/releases/tag/v5.9.1>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/adminneo-before-5.9.1-authentication-bypass-via-clickhouse-driver-defaultpasswordhash>)
