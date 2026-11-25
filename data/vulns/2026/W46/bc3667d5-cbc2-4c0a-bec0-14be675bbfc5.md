---
{
  "uuid": "bc3667d5-cbc2-4c0a-bec0-14be675bbfc5",
  "ids": [
    "CVE-2026-129139"
  ],
  "title": "paicoding from commit b8206b9 through commit 903adce uses predictable credentials for accounts created via ZSXQ login, because loginByZsx...",
  "summary": "paicoding from commit b8206b9 through commit 903adce uses predictable credentials for accounts created via ZSXQ login, because loginByZsxq derives both the username and password solely from the member's ZSXQ number. Unauthenticated attackers can read that number from the victim's /user/{userId} profile page, compute the credentials, and log in via /login/username to take over the account.",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129139",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-129139"
    },
    {
      "kind": "reference",
      "url": "https://github.com/itwanger/paicoding/blob/903adce70309d340f7eec51ec3c80cfe3c8326c1/paicoding-service/src/main/java/com/github/paicoding/forum/service/user/service/user/LoginServiceImpl.java#L244-L250",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/itwanger/paicoding/blob/903adce70309d340f7eec51ec3c80cfe3c8326c1/paicoding-ui/src/main/resources/templates/views/user/info/edit.html#L81-L90",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/itwanger/paicoding/issues/137",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://vul.yulun.ac.cn/20261112/paicoding/",
      "host": "vul.yulun.ac.cn",
      "label": "vul.yulun.ac.cn"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/paicoding-commit-b8206b9-through-903adce-predictable-zsxq-account-credentials",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T18:17:38.447Z",
  "updatedAt": "2026-11-24T20:48:26.733Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# paicoding from commit b8206b9 through commit 903adce uses predictable credentials for accounts created via ZSXQ login, because loginByZsx\.\.\.

- **ID**: CVE\-2026\-129139
- **危険度**: High（重要） (CVSS 8.2)
- **公開**: 2026-11-13

## 原文

paicoding from commit b8206b9 through commit 903adce uses predictable credentials for accounts created via ZSXQ login, because loginByZsxq derives both the username and password solely from the member's ZSXQ number\. Unauthenticated attackers can read that number from the victim's /user/\{userId\} profile page, compute the credentials, and log in via /login/username to take over the account\.

## リンク

- [NVD CVE\-2026\-129139](<https://nvd.nist.gov/vuln/detail/CVE-2026-129139>)
- [github\.com](<https://github.com/itwanger/paicoding/blob/903adce70309d340f7eec51ec3c80cfe3c8326c1/paicoding-service/src/main/java/com/github/paicoding/forum/service/user/service/user/LoginServiceImpl.java#L244-L250>)
- [github\.com](<https://github.com/itwanger/paicoding/blob/903adce70309d340f7eec51ec3c80cfe3c8326c1/paicoding-ui/src/main/resources/templates/views/user/info/edit.html#L81-L90>)
- [github\.com](<https://github.com/itwanger/paicoding/issues/137>)
- [vul\.yulun\.ac\.cn](<https://vul.yulun.ac.cn/20261112/paicoding/>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/paicoding-commit-b8206b9-through-903adce-predictable-zsxq-account-credentials>)
