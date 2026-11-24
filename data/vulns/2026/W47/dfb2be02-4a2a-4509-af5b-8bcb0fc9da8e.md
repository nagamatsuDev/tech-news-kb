---
{
  "uuid": "dfb2be02-4a2a-4509-af5b-8bcb0fc9da8e",
  "ids": [
    "CVE-2026-134164"
  ],
  "title": "probe-image-size before 7.5.0 contains an algorithmic-complexity denial of service vulnerability in lib/exif_utils.js that allows remote ...",
  "summary": "probe-image-size before 7.5.0 contains an algorithmic-complexity denial of service vulnerability in lib/exif_utils.js that allows remote unauthenticated attackers to exhaust CPU by supplying self-referencing EXIF IFDs. Attackers can submit a crafted 9.6 KB JPEG with repeated ExifIFD and InteropIFD pointers to block the Node.js event loop for about 23 seconds.",
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
      "kind": "vendor",
      "url": "https://github.com/nodeca/probe-image-size/security/advisories/GHSA-gvwc-5hr5-44p8",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-134164",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-134164"
    },
    {
      "kind": "patch",
      "url": "https://github.com/nodeca/probe-image-size/commit/d91678eaff2aad93f7b05bc5212b75856164ec7a",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/nodeca/probe-image-size/blob/64565c3c8b4b69655426cdfce250e6a93455c9da/lib/exif_utils.js#L210-L216",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.npmjs.com/package/probe-image-size/v/7.5.0",
      "host": "www.npmjs.com",
      "label": "www.npmjs.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/probe-image-size-before-7.5.0-denial-of-service-via-exif-sub-ifd-traversal",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-20T23:16:58.120Z",
  "updatedAt": "2026-11-23T20:17:59.883Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# probe\-image\-size before 7\.5\.0 contains an algorithmic\-complexity denial of service vulnerability in lib/exif\_utils\.js that allows remote \.\.\.

- **ID**: CVE\-2026\-134164
- **危険度**: High（重要） (CVSS 7.5)
- **言語**: JavaScript/TypeScript
- **公開**: 2026-11-20

## 原文

probe\-image\-size before 7\.5\.0 contains an algorithmic\-complexity denial of service vulnerability in lib/exif\_utils\.js that allows remote unauthenticated attackers to exhaust CPU by supplying self\-referencing EXIF IFDs\. Attackers can submit a crafted 9\.6 KB JPEG with repeated ExifIFD and InteropIFD pointers to block the Node\.js event loop for about 23 seconds\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/nodeca/probe-image-size/security/advisories/GHSA-gvwc-5hr5-44p8>)
- [NVD CVE\-2026\-134164](<https://nvd.nist.gov/vuln/detail/CVE-2026-134164>)
- [修正 \(github\.com\)](<https://github.com/nodeca/probe-image-size/commit/d91678eaff2aad93f7b05bc5212b75856164ec7a>)
- [github\.com](<https://github.com/nodeca/probe-image-size/blob/64565c3c8b4b69655426cdfce250e6a93455c9da/lib/exif_utils.js#L210-L216>)
- [www\.npmjs\.com](<https://www.npmjs.com/package/probe-image-size/v/7.5.0>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/probe-image-size-before-7.5.0-denial-of-service-via-exif-sub-ifd-traversal>)
