---
{
  "uuid": "003d4502-1bbb-44dd-bdaa-9dddeba8c4a9",
  "ids": [
    "CVE-2026-109092"
  ],
  "title": "Incorrectly handled negative sizes when processing ProcXvShmPutImage requests in the X.Org xwayland before 24.1.15 and X Server before 21...",
  "summary": "Incorrectly handled negative sizes when processing ProcXvShmPutImage requests in the X.Org xwayland before 24.1.15 and X Server before 21.1.26 could be used by local authenticated X clients to crash the X server or execute code.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.8,
  "cvssVector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-109092",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-109092"
    },
    {
      "kind": "reference",
      "url": "https://gitlab.freedesktop.org/xorg/xserver/-/commit/a4d7800f0f56469a082e3755bfa6b148c707075c",
      "host": "gitlab.freedesktop.org",
      "label": "gitlab.freedesktop.org"
    }
  ],
  "publishedAt": "2026-11-13T15:17:29.740Z",
  "updatedAt": "2026-11-13T15:17:29.833Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Incorrectly handled negative sizes when processing ProcXvShmPutImage requests in the X\.Org xwayland before 24\.1\.15 and X Server before 21\.\.\.

- **ID**: CVE\-2026\-109092
- **危険度**: High（重要） (CVSS 7.8)
- **公開**: 2026-11-13

## 原文

Incorrectly handled negative sizes when processing ProcXvShmPutImage requests in the X\.Org xwayland before 24\.1\.15 and X Server before 21\.1\.26 could be used by local authenticated X clients to crash the X server or execute code\.

## リンク

- [NVD CVE\-2026\-109092](<https://nvd.nist.gov/vuln/detail/CVE-2026-109092>)
- [gitlab\.freedesktop\.org](<https://gitlab.freedesktop.org/xorg/xserver/-/commit/a4d7800f0f56469a082e3755bfa6b148c707075c>)
