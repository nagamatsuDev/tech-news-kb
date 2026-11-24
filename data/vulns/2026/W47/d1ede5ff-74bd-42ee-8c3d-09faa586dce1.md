---
{
  "uuid": "d1ede5ff-74bd-42ee-8c3d-09faa586dce1",
  "ids": [
    "CVE-2026-61832"
  ],
  "title": "NukeViet CMS is a multi Content Management System.",
  "summary": "NukeViet CMS is a multi Content Management System. Prior to 4.6.00, a network attacker who can alter outbound traffic to the extension store can exploit the HTTP client's disabled sslverify setting to substitute a serialized response. Extension-store handlers pass the response to unserialize() without an allowed_classes restriction, allowing an in-tree GuzzleHttp\\Cookie\\FileCookieJar gadget to write attacker-controlled content to a chosen path. When a GODADMIN opens or uses the store list, detail, install, or update functions, the substituted response can write a PHP file under the web root and execute code as the web-server user. This issue is fixed in version 4.6.00.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:H/A:H",
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
      "url": "https://github.com/nukeviet/nukeviet/security/advisories/GHSA-9xfw-vx6g-wpmm",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-61832",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-61832"
    },
    {
      "kind": "patch",
      "url": "https://github.com/nukeviet/nukeviet/commit/099ec8cc4734ba8c1b871653ee454367a07446cc",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/nukeviet/nukeviet/releases/tag/4.6.00",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://nukeviet.vn/vi/news/Tin-tuc/thong-bao-phat-hanh-nukeviet-4-6-00-855.html",
      "host": "nukeviet.vn",
      "label": "nukeviet.vn"
    }
  ],
  "publishedAt": "2026-11-20T19:18:52.917Z",
  "updatedAt": "2026-11-20T19:18:52.917Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# NukeViet CMS is a multi Content Management System\.

- **ID**: CVE\-2026\-61832
- **危険度**: High（重要） (CVSS 7.5)
- **言語**: PHP
- **公開**: 2026-11-20

## 原文

NukeViet CMS is a multi Content Management System\. Prior to 4\.6\.00, a network attacker who can alter outbound traffic to the extension store can exploit the HTTP client's disabled sslverify setting to substitute a serialized response\. Extension\-store handlers pass the response to unserialize\(\) without an allowed\_classes restriction, allowing an in\-tree GuzzleHttp\\Cookie\\FileCookieJar gadget to write attacker\-controlled content to a chosen path\. When a GODADMIN opens or uses the store list, detail, install, or update functions, the substituted response can write a PHP file under the web root and execute code as the web\-server user\. This issue is fixed in version 4\.6\.00\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/nukeviet/nukeviet/security/advisories/GHSA-9xfw-vx6g-wpmm>)
- [NVD CVE\-2026\-61832](<https://nvd.nist.gov/vuln/detail/CVE-2026-61832>)
- [修正 \(github\.com\)](<https://github.com/nukeviet/nukeviet/commit/099ec8cc4734ba8c1b871653ee454367a07446cc>)
- [github\.com](<https://github.com/nukeviet/nukeviet/releases/tag/4.6.00>)
- [nukeviet\.vn](<https://nukeviet.vn/vi/news/Tin-tuc/thong-bao-phat-hanh-nukeviet-4-6-00-855.html>)
