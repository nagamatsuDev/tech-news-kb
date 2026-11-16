---
{
  "uuid": "c50fbbfc-5fb5-4096-a1d7-e34f2dcf2fd0",
  "ids": [
    "CVE-2026-129143"
  ],
  "title": "paicoding 1.0.3 contains a missing authorization vulnerability in the ArticleRestController article detail endpoint that allows unauthent...",
  "summary": "paicoding 1.0.3 contains a missing authorization vulnerability in the ArticleRestController article detail endpoint that allows unauthenticated attackers to read restricted articles. Attackers can enumerate article IDs via GET /article/api/data/detail/{articleId} to retrieve full content of paid, login-only, member-only and draft articles.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129143",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-129143"
    },
    {
      "kind": "reference",
      "url": "https://github.com/itwanger/paicoding/blob/903adce70309d340f7eec51ec3c80cfe3c8326c1/paicoding-web/src/main/java/com/github/paicoding/forum/web/front/article/rest/ArticleRestController.java#L87-L94",
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
      "url": "https://www.vulncheck.com/advisories/paicoding-1.0.3-missing-authorization-via-article-detail-api-endpoint",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T18:17:39.040Z",
  "updatedAt": "2026-11-13T18:17:39.040Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# paicoding 1\.0\.3 contains a missing authorization vulnerability in the ArticleRestController article detail endpoint that allows unauthent\.\.\.

- **ID**: CVE\-2026\-129143
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-13

## 原文

paicoding 1\.0\.3 contains a missing authorization vulnerability in the ArticleRestController article detail endpoint that allows unauthenticated attackers to read restricted articles\. Attackers can enumerate article IDs via GET /article/api/data/detail/\{articleId\} to retrieve full content of paid, login\-only, member\-only and draft articles\.

## リンク

- [NVD CVE\-2026\-129143](<https://nvd.nist.gov/vuln/detail/CVE-2026-129143>)
- [github\.com](<https://github.com/itwanger/paicoding/blob/903adce70309d340f7eec51ec3c80cfe3c8326c1/paicoding-web/src/main/java/com/github/paicoding/forum/web/front/article/rest/ArticleRestController.java#L87-L94>)
- [github\.com](<https://github.com/itwanger/paicoding/issues/137>)
- [vul\.yulun\.ac\.cn](<https://vul.yulun.ac.cn/20261112/paicoding/>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/paicoding-1.0.3-missing-authorization-via-article-detail-api-endpoint>)
