---
{
  "uuid": "87df81d6-bbbf-4af6-a78a-d14f8b2a55cc",
  "ids": [
    "CVE-2026-58800"
  ],
  "title": "In IMG_vkCreateImageView of image_view.c, there is a possible way to trigger a use after free due to memory corruption.",
  "summary": "In IMG_vkCreateImageView of image_view.c, there is a possible way to trigger a use after free due to memory corruption. This could lead to remote code execution with no additional execution privileges needed. User interaction is not needed for exploitation.",
  "titleJa": "image_view.c の IMG_vkCreateImageView では、メモリの破損によりフリーで使用をトリガーする方法があります。",
  "summaryJa": "image_view.c の IMG_vkCreateImageView では、メモリの破損によりフリーで使用をトリガーする方法があります。。これにより、追加の実行プリビレッジが不要になるリモートコード実行につながる可能性がある。。コード実行 。 )探索にはユーザーインタラクションは不要です。。。。。。は、利用は不要。",
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
      "kind": "vendor",
      "url": "https://source.android.com/docs/security/bulletin/pixel/2026/2026-11-01",
      "host": "source.android.com",
      "label": "ベンダー発表 (source.android.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-58800",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-58800"
    }
  ],
  "publishedAt": "2026-11-10T20:19:27.060Z",
  "updatedAt": "2026-11-13T14:17:58.830Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# image\_view\.c の IMG\_vkCreateImageView では、メモリの破損によりフリーで使用をトリガーする方法があります。

- **ID**: CVE\-2026\-58800
- **危険度**: Critical（緊急） (CVSS 9.8)
- **公開**: 2026-11-10

## 概要（機械翻訳）

image\_view\.c の IMG\_vkCreateImageView では、メモリの破損によりフリーで使用をトリガーする方法があります。。これにより、追加の実行プリビレッジが不要になるリモートコード実行につながる可能性がある。。コード実行 。 \)探索にはユーザーインタラクションは不要です。。。。。。は、利用は不要。

## 原文

In IMG\_vkCreateImageView of image\_view\.c, there is a possible way to trigger a use after free due to memory corruption\. This could lead to remote code execution with no additional execution privileges needed\. User interaction is not needed for exploitation\.

## リンク

- [ベンダー発表 \(source\.android\.com\)](<https://source.android.com/docs/security/bulletin/pixel/2026/2026-11-01>)
- [NVD CVE\-2026\-58800](<https://nvd.nist.gov/vuln/detail/CVE-2026-58800>)
