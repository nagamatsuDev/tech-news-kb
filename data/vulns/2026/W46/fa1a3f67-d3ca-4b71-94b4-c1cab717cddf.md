---
{
  "uuid": "fa1a3f67-d3ca-4b71-94b4-c1cab717cddf",
  "ids": [
    "CVE-2026-126384"
  ],
  "title": "n8n before 1.123.89, 2.x before 2.45.5, 2.46.x before 2.46.1, and 3.x before 3.0.1 bundles a GraphicsMagick version with known vulnerabil...",
  "summary": "n8n before 1.123.89, 2.x before 2.45.5, 2.46.x before 2.46.1, and 3.x before 3.0.1 bundles a GraphicsMagick version with known vulnerabilities in its official Docker image, which the Edit Image node uses to process images. Attackers who can supply crafted untrusted images to an Edit Image workflow, such as one fed by a Webhook node, can execute code on the n8n instance.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://github.com/n8n-io/n8n/security/advisories/GHSA-f2cw-9483-7vcp",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126384",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126384"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/n8n-before-1.123.89-rce-via-bundled-graphicsmagick-in-edit-image-node",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:41.500Z",
  "updatedAt": "2026-11-13T21:17:42.220Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# n8n before 1\.123\.89, 2\.x before 2\.45\.5, 2\.46\.x before 2\.46\.1, and 3\.x before 3\.0\.1 bundles a GraphicsMagick version with known vulnerabil\.\.\.

- **ID**: CVE\-2026\-126384
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-13

## 原文

n8n before 1\.123\.89, 2\.x before 2\.45\.5, 2\.46\.x before 2\.46\.1, and 3\.x before 3\.0\.1 bundles a GraphicsMagick version with known vulnerabilities in its official Docker image, which the Edit Image node uses to process images\. Attackers who can supply crafted untrusted images to an Edit Image workflow, such as one fed by a Webhook node, can execute code on the n8n instance\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/n8n-io/n8n/security/advisories/GHSA-f2cw-9483-7vcp>)
- [NVD CVE\-2026\-126384](<https://nvd.nist.gov/vuln/detail/CVE-2026-126384>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/n8n-before-1.123.89-rce-via-bundled-graphicsmagick-in-edit-image-node>)
