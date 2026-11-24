---
{
  "uuid": "3ca8bba4-bf19-48ea-90ae-fa10ea0bdd05",
  "ids": [
    "CVE-2026-134812"
  ],
  "title": "msgpackr before 2.1.4 contains an inefficient algorithmic complexity vulnerability that allows remote attackers to cause denial of servic...",
  "summary": "msgpackr before 2.1.4 contains an inefficient algorithmic complexity vulnerability that allows remote attackers to cause denial of service by repeatedly re-decoding buffered incomplete values. Attackers can stream a large container of small elements in small chunks to UnpackrStream or decodeIter, triggering quadratic decoding cost that blocks the Node.js event loop.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
  "os": [],
  "languages": [
    "JavaScript/TypeScript"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-134812",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-134812"
    },
    {
      "kind": "patch",
      "url": "https://github.com/kriszyp/msgpackr/commit/4eae7a11e96bb4ac292bb9ec9b4765cf18095a2f",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/kriszyp/msgpackr/blob/v2.1.3/iterators.js#L89-L127",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/kriszyp/msgpackr/issues/229",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/msgpackr-before-2.1.4-inefficient-algorithmic-complexity-via-unpackrstream-and-decodeiter",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-22T22:17:35.343Z",
  "updatedAt": "2026-11-23T17:17:48.260Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# msgpackr before 2\.1\.4 contains an inefficient algorithmic complexity vulnerability that allows remote attackers to cause denial of servic\.\.\.

- **ID**: CVE\-2026\-134812
- **危険度**: High（重要） (CVSS 7.5)
- **言語**: JavaScript/TypeScript
- **公開**: 2026-11-22

## 原文

msgpackr before 2\.1\.4 contains an inefficient algorithmic complexity vulnerability that allows remote attackers to cause denial of service by repeatedly re\-decoding buffered incomplete values\. Attackers can stream a large container of small elements in small chunks to UnpackrStream or decodeIter, triggering quadratic decoding cost that blocks the Node\.js event loop\.

## リンク

- [NVD CVE\-2026\-134812](<https://nvd.nist.gov/vuln/detail/CVE-2026-134812>)
- [修正 \(github\.com\)](<https://github.com/kriszyp/msgpackr/commit/4eae7a11e96bb4ac292bb9ec9b4765cf18095a2f>)
- [github\.com](<https://github.com/kriszyp/msgpackr/blob/v2.1.3/iterators.js#L89-L127>)
- [github\.com](<https://github.com/kriszyp/msgpackr/issues/229>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/msgpackr-before-2.1.4-inefficient-algorithmic-complexity-via-unpackrstream-and-decodeiter>)
