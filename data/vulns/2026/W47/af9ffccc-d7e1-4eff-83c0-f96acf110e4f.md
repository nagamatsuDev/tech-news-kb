---
{
  "uuid": "af9ffccc-d7e1-4eff-83c0-f96acf110e4f",
  "ids": [
    "CVE-2026-130802"
  ],
  "title": "The NFC authentication handshake relies on a fixed, static challenge instead of a unique, random value for every session.",
  "summary": "The NFC authentication handshake relies on a fixed, static challenge instead of a unique, random value for every session. This allows an attacker to perform a \"replay attack,\" successfully authenticating by simply sending the same pre-recorded response.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-130802",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-130802"
    },
    {
      "kind": "reference",
      "url": "https://0xd34d.github.io/hanshow/hanshowned.html",
      "host": "0xd34d.github.io",
      "label": "0xd34d.github.io"
    }
  ],
  "publishedAt": "2026-11-17T17:18:05.750Z",
  "updatedAt": "2026-11-17T20:17:46.463Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W47"
}
---

# The NFC authentication handshake relies on a fixed, static challenge instead of a unique, random value for every session\.

- **ID**: CVE\-2026\-130802
- **危険度**: Critical（緊急） (CVSS 9.1)
- **公開**: 2026-11-17

## 原文

The NFC authentication handshake relies on a fixed, static challenge instead of a unique, random value for every session\. This allows an attacker to perform a "replay attack," successfully authenticating by simply sending the same pre\-recorded response\.

## リンク

- [NVD CVE\-2026\-130802](<https://nvd.nist.gov/vuln/detail/CVE-2026-130802>)
- [0xd34d\.github\.io](<https://0xd34d.github.io/hanshow/hanshowned.html>)
