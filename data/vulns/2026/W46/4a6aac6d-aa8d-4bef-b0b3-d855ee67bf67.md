---
{
  "uuid": "4a6aac6d-aa8d-4bef-b0b3-d855ee67bf67",
  "ids": [
    "CVE-2026-126372"
  ],
  "title": "Vvveb through 1.0.8.6 contains an incomplete fix for CVE-2026-41934 that allows authenticated editor or site_admin users to write server-...",
  "summary": "Vvveb through 1.0.8.6 contains an incomplete fix for CVE-2026-41934 that allows authenticated editor or site_admin users to write server-side templates by bypassing save restrictions. Attackers can upload or rename .tpl files via editor/code upload and rename actions, or evade isExecutableFile checks in save(), to inject PHP code into templates.",
  "titleJa": "Vvvebから1.0.8.6には、認証されたエディタまたはsite_adminユーザがサーバーを書くことができるCVE-2026-41934の不完全な修正が含まれている。",
  "summaryJa": "Vvvebから1.0.8.6には、CVE-2026-41934の不完全な修正が含まれている。これにより、認証されたエディタやsite_adminユーザが保存制限をバイパスしてサーバーサイドテンプレートを書くことができる。攻撃者は、エディタ/コードのアップロードおよびリネームアクションを介して.tplファイルをアップロードまたはリネームするか、isExecutableFileチェックをsave()で回避してPHPコードをテンプレートに注入できます。.",
  "translation": "machine",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
  "os": [],
  "languages": [
    "PHP"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/givanz/Vvveb/security/advisories/GHSA-7h6v-ww3f-24pp",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126372",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126372"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/vvveb-through-1.0.8.6-template-upload-bypass-via-mediatrait-editor-code",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:39.410Z",
  "updatedAt": "2026-11-13T21:17:41.820Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Vvvebから1\.0\.8\.6には、認証されたエディタまたはsite\_adminユーザがサーバーを書くことができるCVE\-2026\-41934の不完全な修正が含まれている。

- **ID**: CVE\-2026\-126372
- **危険度**: High（重要） (CVSS 8.8)
- **言語**: PHP
- **公開**: 2026-11-13

## 概要（機械翻訳）

Vvvebから1\.0\.8\.6には、CVE\-2026\-41934の不完全な修正が含まれている。これにより、認証されたエディタやsite\_adminユーザが保存制限をバイパスしてサーバーサイドテンプレートを書くことができる。攻撃者は、エディタ/コードのアップロードおよびリネームアクションを介して\.tplファイルをアップロードまたはリネームするか、isExecutableFileチェックをsave\(\)で回避してPHPコードをテンプレートに注入できます。\.

## 原文

Vvveb through 1\.0\.8\.6 contains an incomplete fix for CVE\-2026\-41934 that allows authenticated editor or site\_admin users to write server\-side templates by bypassing save restrictions\. Attackers can upload or rename \.tpl files via editor/code upload and rename actions, or evade isExecutableFile checks in save\(\), to inject PHP code into templates\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/givanz/Vvveb/security/advisories/GHSA-7h6v-ww3f-24pp>)
- [NVD CVE\-2026\-126372](<https://nvd.nist.gov/vuln/detail/CVE-2026-126372>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/vvveb-through-1.0.8.6-template-upload-bypass-via-mediatrait-editor-code>)
