---
{
  "uuid": "ab75e14f-e42f-4ebb-86bd-029cc49bdaea",
  "ids": [
    "CVE-2026-76954"
  ],
  "title": "An improper neutralization of special elements used in an SQL command vulnerability in the Auth API in Synology DiskStation Manager (DSM)...",
  "summary": "An improper neutralization of special elements used in an SQL command vulnerability in the Auth API in Synology DiskStation Manager (DSM) before 7.2.1-69057-13, 7.2.2-72806-10, 7.3.2-86009-5, and 7.4.1-90080-1 allows remote attackers to read or write arbitrary files and conduct denial-of-service attacks.",
  "titleJa": "SQLコマンドの脆弱性に用いられる特別な要素を、Synology DiskStation Manager (DSM) の Auth API で不正に中和します。",
  "summaryJa": "SQLコマンドで使われる特別な要素を、7.2.1-69057-13、7.22-72806-10、7.3-8600600-5、7.4.1-90080-1以前のAuth API in Synology DiskStation Manager (DSM) で不正に中和することで、リモート攻撃者はHgBit%のファイルを読み書きし、サービス拒否攻撃を行うことができる。",
  "translation": "machine",
  "severity": "critical",
  "cvssScore": 9.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-76954",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-76954"
    },
    {
      "kind": "reference",
      "url": "https://www.synology.com/en-global/security/advisory/Synology_SA_26_19",
      "host": "www.synology.com",
      "label": "www.synology.com"
    }
  ],
  "publishedAt": "2026-11-12T04:17:20.407Z",
  "updatedAt": "2026-11-16T20:19:11.447Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# SQLコマンドの脆弱性に用いられる特別な要素を、Synology DiskStation Manager \(DSM\) の Auth API で不正に中和します。

- **ID**: CVE\-2026\-76954
- **危険度**: Critical（緊急） (CVSS 9.8)
- **公開**: 2026-11-12

## 概要（機械翻訳）

SQLコマンドで使われる特別な要素を、7\.2\.1\-69057\-13、7\.22\-72806\-10、7\.3\-8600600\-5、7\.4\.1\-90080\-1以前のAuth API in Synology DiskStation Manager \(DSM\) で不正に中和することで、リモート攻撃者はHgBit%のファイルを読み書きし、サービス拒否攻撃を行うことができる。

## 原文

An improper neutralization of special elements used in an SQL command vulnerability in the Auth API in Synology DiskStation Manager \(DSM\) before 7\.2\.1\-69057\-13, 7\.2\.2\-72806\-10, 7\.3\.2\-86009\-5, and 7\.4\.1\-90080\-1 allows remote attackers to read or write arbitrary files and conduct denial\-of\-service attacks\.

## リンク

- [NVD CVE\-2026\-76954](<https://nvd.nist.gov/vuln/detail/CVE-2026-76954>)
- [www\.synology\.com](<https://www.synology.com/en-global/security/advisory/Synology_SA_26_19>)
