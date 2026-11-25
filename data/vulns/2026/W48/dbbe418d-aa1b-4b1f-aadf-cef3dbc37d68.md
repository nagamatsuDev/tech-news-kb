---
{
  "uuid": "dbbe418d-aa1b-4b1f-aadf-cef3dbc37d68",
  "ids": [
    "CVE-2026-135738"
  ],
  "title": "FFmpeg before 9.1 contains a heap out-of-bounds write vulnerability in libavfilter/vf_signalstats.c that allows attackers to corrupt heap...",
  "summary": "FFmpeg before 9.1 contains a heap out-of-bounds write vulnerability in libavfilter/vf_signalstats.c that allows attackers to corrupt heap memory by supplying high bit depth samples exceeding the nominal maximum. Attackers can craft planar 9 to 14 bit YUV video whose unclamped samples or saturation values index past histogram ends, crashing applications or possibly executing code.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.8,
  "cvssVector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
  "os": [],
  "languages": [],
  "products": [
    "ffmpeg ffmpeg"
  ],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-135738",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-135738"
    },
    {
      "kind": "patch",
      "url": "https://code.ffmpeg.org/FFmpeg/FFmpeg/pulls/26121",
      "host": "code.ffmpeg.org",
      "label": "修正 (code.ffmpeg.org)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/FFmpeg/FFmpeg/commit/04955e8b148fa3e7ab022cbb9f5e35c49165ae21",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/FFmpeg/FFmpeg",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/FFmpeg/FFmpeg/blob/n9.0.2/libavfilter/vf_signalstats.c#L620",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/ffmpeg-before-9.1-heap-out-of-bounds-write-via-signalstats-filter-histograms",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-24T04:17:32.827Z",
  "updatedAt": "2026-11-24T17:23:21.687Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# FFmpeg before 9\.1 contains a heap out\-of\-bounds write vulnerability in libavfilter/vf\_signalstats\.c that allows attackers to corrupt heap\.\.\.

- **ID**: CVE\-2026\-135738
- **危険度**: High（重要） (CVSS 7.8)
- **公開**: 2026-11-24

## 原文

FFmpeg before 9\.1 contains a heap out\-of\-bounds write vulnerability in libavfilter/vf\_signalstats\.c that allows attackers to corrupt heap memory by supplying high bit depth samples exceeding the nominal maximum\. Attackers can craft planar 9 to 14 bit YUV video whose unclamped samples or saturation values index past histogram ends, crashing applications or possibly executing code\.

## リンク

- [NVD CVE\-2026\-135738](<https://nvd.nist.gov/vuln/detail/CVE-2026-135738>)
- [修正 \(code\.ffmpeg\.org\)](<https://code.ffmpeg.org/FFmpeg/FFmpeg/pulls/26121>)
- [修正 \(github\.com\)](<https://github.com/FFmpeg/FFmpeg/commit/04955e8b148fa3e7ab022cbb9f5e35c49165ae21>)
- [github\.com](<https://github.com/FFmpeg/FFmpeg>)
- [github\.com](<https://github.com/FFmpeg/FFmpeg/blob/n9.0.2/libavfilter/vf_signalstats.c#L620>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/ffmpeg-before-9.1-heap-out-of-bounds-write-via-signalstats-filter-histograms>)
