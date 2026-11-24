---
{
  "uuid": "d5b2f8c7-a2e9-4a8b-9bdf-c3db795cb3db",
  "ids": [
    "CVE-2026-133307"
  ],
  "title": "ClassiCube before 1.4.0 contains a heap-based out-of-bounds write vulnerability in Png_Decode in src/Bitmap.c that allows malicious serve...",
  "summary": "ClassiCube before 1.4.0 contains a heap-based out-of-bounds write vulnerability in Png_Decode in src/Bitmap.c that allows malicious servers to corrupt client memory by sending a PNG with a duplicate IHDR chunk. Attackers can supply crafted PNGs via texture pack URLs or player skins so the unreset bufferIdx underflows remaining space, letting IDAT data overflow the buffer to crash clients or execute code.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-133307",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-133307"
    },
    {
      "kind": "patch",
      "url": "https://github.com/ClassiCube/ClassiCube/commit/c461fa759f218e3c6bda4642b9af79a98dc84a43",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/ClassiCube/ClassiCube",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/ClassiCube/ClassiCube/blob/1.3.9/src/Bitmap.c#L529",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/ClassiCube/ClassiCube/releases/tag/1.4.0",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/classicube-before-1.4.0-heap-out-of-bounds-write-via-png-decode-duplicate-ihdr",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-19T17:18:52.117Z",
  "updatedAt": "2026-11-20T21:17:34.763Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# ClassiCube before 1\.4\.0 contains a heap\-based out\-of\-bounds write vulnerability in Png\_Decode in src/Bitmap\.c that allows malicious serve\.\.\.

- **ID**: CVE\-2026\-133307
- **危険度**: High（重要） (CVSS 8.8)
- **公開**: 2026-11-19

## 原文

ClassiCube before 1\.4\.0 contains a heap\-based out\-of\-bounds write vulnerability in Png\_Decode in src/Bitmap\.c that allows malicious servers to corrupt client memory by sending a PNG with a duplicate IHDR chunk\. Attackers can supply crafted PNGs via texture pack URLs or player skins so the unreset bufferIdx underflows remaining space, letting IDAT data overflow the buffer to crash clients or execute code\.

## リンク

- [NVD CVE\-2026\-133307](<https://nvd.nist.gov/vuln/detail/CVE-2026-133307>)
- [修正 \(github\.com\)](<https://github.com/ClassiCube/ClassiCube/commit/c461fa759f218e3c6bda4642b9af79a98dc84a43>)
- [github\.com](<https://github.com/ClassiCube/ClassiCube>)
- [github\.com](<https://github.com/ClassiCube/ClassiCube/blob/1.3.9/src/Bitmap.c#L529>)
- [github\.com](<https://github.com/ClassiCube/ClassiCube/releases/tag/1.4.0>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/classicube-before-1.4.0-heap-out-of-bounds-write-via-png-decode-duplicate-ihdr>)
