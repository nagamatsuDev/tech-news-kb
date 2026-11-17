---
{
  "uuid": "838ceea1-abdf-4a2c-847d-0482deb2bdea",
  "ids": [
    "CVE-2026-129465"
  ],
  "title": "Zr.Admin.NET commit af07ffc through commit eb9228a contains an insecure direct object reference vulnerability in SysProfileController.Upd...",
  "summary": "Zr.Admin.NET commit af07ffc through commit eb9228a contains an insecure direct object reference vulnerability in SysProfileController.UpdateProfile that allows any authenticated user to modify other accounts via UserId. Attackers can set the administrator's phone number to one they control, request an SMS code via /checkMobile, and log in through /PhoneLogin to take over the administrator account.",
  "titleJa": "zr.Admin.NETは、コミットb9228aを介してf07ffcコミットは、SysProfileController.Upd.comで安全でない直接オブジェクト参照脆弱性を含む。",
  "summaryJa": "zr.Admin.NETは、コミットb9228aを介してf07ffcコミットは、任意の認証されたユーザがUserIdを介して他のアカウントを変更できるようにするSysProfileController.UpdateProfile.UpdateProfileで安全でない直接オブジェクト参照脆弱性を含む。....。。.。。。。管理者は管理者の電話番号を管理対象の電話番号に設定し、/checkMobile経由でSMSコードを要求することができる。ログインして管理者アカウントを引き継ぐことができる。管理者は、管理者アカウントを引き継ぐことができる。管理者は、管理者は、管理者アカウントを管理できる。管理者は、管理者は、管理者に、管理者が管理する電話番号を、/checkMobileからログインしてログインすることができる。から、管理者は、管理者アカウントを引き継ぐことができる。",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129465",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-129465"
    },
    {
      "kind": "patch",
      "url": "https://github.com/izhaorui/Zr.Admin.NET/commit/af07ffc5d18e7876d3780d1ff5ee776b80950399",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/ZR.Admin.WebApi/Controllers/System/SysLoginController.cs#L516-L559",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/ZR.Admin.WebApi/Controllers/System/SysProfileController.cs#L62-L75",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/ZR.ServiceCore/Services/SysUserService.cs#L220-L236",
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
    }
  ],
  "publishedAt": "2026-11-15T02:17:21.770Z",
  "updatedAt": "2026-11-16T19:17:42.483Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# zr\.Admin\.NETは、コミットb9228aを介してf07ffcコミットは、SysProfileController\.Upd\.comで安全でない直接オブジェクト参照脆弱性を含む。

- **ID**: CVE\-2026\-129465
- **危険度**: High（重要） (CVSS 8.8)
- **公開**: 2026-11-15

## 概要（機械翻訳）

zr\.Admin\.NETは、コミットb9228aを介してf07ffcコミットは、任意の認証されたユーザがUserIdを介して他のアカウントを変更できるようにするSysProfileController\.UpdateProfile\.UpdateProfileで安全でない直接オブジェクト参照脆弱性を含む。\.\.\.\.。。\.。。。。管理者は管理者の電話番号を管理対象の電話番号に設定し、/checkMobile経由でSMSコードを要求することができる。ログインして管理者アカウントを引き継ぐことができる。管理者は、管理者アカウントを引き継ぐことができる。管理者は、管理者は、管理者アカウントを管理できる。管理者は、管理者は、管理者に、管理者が管理する電話番号を、/checkMobileからログインしてログインすることができる。から、管理者は、管理者アカウントを引き継ぐことができる。

## 原文

Zr\.Admin\.NET commit af07ffc through commit eb9228a contains an insecure direct object reference vulnerability in SysProfileController\.UpdateProfile that allows any authenticated user to modify other accounts via UserId\. Attackers can set the administrator's phone number to one they control, request an SMS code via /checkMobile, and log in through /PhoneLogin to take over the administrator account\.

## リンク

- [NVD CVE\-2026\-129465](<https://nvd.nist.gov/vuln/detail/CVE-2026-129465>)
- [修正 \(github\.com\)](<https://github.com/izhaorui/Zr.Admin.NET/commit/af07ffc5d18e7876d3780d1ff5ee776b80950399>)
- [github\.com](<https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/ZR.Admin.WebApi/Controllers/System/SysLoginController.cs#L516-L559>)
- [github\.com](<https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/ZR.Admin.WebApi/Controllers/System/SysProfileController.cs#L62-L75>)
- [github\.com](<https://github.com/izhaorui/Zr.Admin.NET/blob/eb9228a23014f6000c06cab2f10ae0d44ecbbd3a/ZR.ServiceCore/Services/SysUserService.cs#L220-L236>)
- [github\.com](<https://github.com/izhaorui/Zr.Admin.NET/issues/27>)
- [vul\.yulun\.ac\.cn](<https://vul.yulun.ac.cn/20261114/zr-admin-net/>)
