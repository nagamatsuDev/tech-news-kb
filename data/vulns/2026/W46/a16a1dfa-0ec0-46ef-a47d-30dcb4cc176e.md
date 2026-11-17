---
{
  "uuid": "a16a1dfa-0ec0-46ef-a47d-30dcb4cc176e",
  "ids": [
    "CVE-2026-129464"
  ],
  "title": "Zr.Admin.NET commit 0ee1ab8 through commit eb9228a contains a path traversal vulnerability that allows any logged-in user to read arbitra...",
  "summary": "Zr.Admin.NET commit 0ee1ab8 through commit eb9228a contains a path traversal vulnerability that allows any logged-in user to read arbitrary server files via the path parameter of /common/DownloadFile. Attackers can supply absolute paths or ../ sequences to read appsettings files and use the JwtSettings SecretKey to forge administrator tokens.",
  "titleJa": "Admin.NETは、コミットeb9228aを通してDelabsをコミットします。",
  "summaryJa": "zr.Admin.NETは、/common/DownloadFileのパスパラメータを介して、任意のログインユーザがHbitraryサーバーファイルを読み取ることができるパストラバーサル脆弱性を含むコミットeb9228aを通してDelabsをコミットします。。....攻撃者は、アプリ設定ファイルを読み込み、JwtSettings 秘密鍵を使用して管理者トークンを偽造する絶対パスまたは.../シーケンスを供給できます。。は、.のコードが.で、.が.で、.",
  "translation": "machine",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129464",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-129464"
    },
    {
      "kind": "patch",
      "url": "https://github.com/izhaorui/Zr.Admin.NET/commit/0ee1ab8af5e3861766746d25acba1184111befcb",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/Infrastructure/Controllers/BaseController.cs#L110-L119",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/ZR.Admin.WebApi/Controllers/CommonController.cs#L220-L241",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/izhaorui/Zr.Admin.NET/issues/27",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://vul.yulun.ac.cn/20261114/zr-admin-net/",
      "host": "vul.yulun.ac.cn",
      "label": "vul.yulun.ac.cn"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/zr-admin-net-commit-0ee1ab8-through-eb9228a-path-traversal-via-downloadfile",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-15T02:17:21.597Z",
  "updatedAt": "2026-11-16T19:17:42.343Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Admin\.NETは、コミットeb9228aを通してDelabsをコミットします。

- **ID**: CVE\-2026\-129464
- **危険度**: High（重要） (CVSS 8.8)
- **公開**: 2026-11-15

## 概要（機械翻訳）

zr\.Admin\.NETは、/common/DownloadFileのパスパラメータを介して、任意のログインユーザがHbitraryサーバーファイルを読み取ることができるパストラバーサル脆弱性を含むコミットeb9228aを通してDelabsをコミットします。。\.\.\.\.攻撃者は、アプリ設定ファイルを読み込み、JwtSettings 秘密鍵を使用して管理者トークンを偽造する絶対パスまたは\.\.\./シーケンスを供給できます。。は、\.のコードが\.で、\.が\.で、\.

## 原文

Zr\.Admin\.NET commit 0ee1ab8 through commit eb9228a contains a path traversal vulnerability that allows any logged\-in user to read arbitrary server files via the path parameter of /common/DownloadFile\. Attackers can supply absolute paths or \.\./ sequences to read appsettings files and use the JwtSettings SecretKey to forge administrator tokens\.

## リンク

- [NVD CVE\-2026\-129464](<https://nvd.nist.gov/vuln/detail/CVE-2026-129464>)
- [修正 \(github\.com\)](<https://github.com/izhaorui/Zr.Admin.NET/commit/0ee1ab8af5e3861766746d25acba1184111befcb>)
- [github\.com](<https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/Infrastructure/Controllers/BaseController.cs#L110-L119>)
- [github\.com](<https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/ZR.Admin.WebApi/Controllers/CommonController.cs#L220-L241>)
- [github\.com](<https://github.com/izhaorui/Zr.Admin.NET/issues/27>)
- [vul\.yulun\.ac\.cn](<https://vul.yulun.ac.cn/20261114/zr-admin-net/>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/zr-admin-net-commit-0ee1ab8-through-eb9228a-path-traversal-via-downloadfile>)
