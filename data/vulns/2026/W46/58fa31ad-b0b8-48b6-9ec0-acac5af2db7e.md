---
{
  "uuid": "58fa31ad-b0b8-48b6-9ec0-acac5af2db7e",
  "ids": [
    "CVE-2026-126499"
  ],
  "title": "Jellyfin before 12.0 contains a path traversal vulnerability in the DELETE /Library/VirtualFolders and POST /Library/VirtualFolders/Name ...",
  "summary": "Jellyfin before 12.0 contains a path traversal vulnerability in the DELETE /Library/VirtualFolders and POST /Library/VirtualFolders/Name endpoints that allows attackers to delete or move directories via unvalidated library names. Unauthenticated attackers can supply names like .. or absolute paths before setup completes to recursively delete the data directory and jellyfin.db.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.4,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:H",
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
      "url": "https://github.com/jellyfin/jellyfin/security/advisories/GHSA-6828-c7cx-hvqm",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126499",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126499"
    },
    {
      "kind": "patch",
      "url": "https://github.com/jellyfin/jellyfin/commit/0c560b22ce73323329645b836c9910abc257ce4e",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/jellyfin/jellyfin/blob/v10.11.11/Emby.Server.Implementations/Library/LibraryManager.cs#L3255-L3275",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/jellyfin/jellyfin/blob/v10.11.11/Jellyfin.Api/Controllers/LibraryStructureController.cs#L127-L176",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/jellyfin/jellyfin/releases/tag/v12.0",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/jellyfin-before-12.0-path-traversal-via-library-virtualfolders-endpoints",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-11T01:17:14.963Z",
  "updatedAt": "2026-11-13T17:17:25.780Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Jellyfin before 12\.0 contains a path traversal vulnerability in the DELETE /Library/VirtualFolders and POST /Library/VirtualFolders/Name \.\.\.

- **ID**: CVE\-2026\-126499
- **危険度**: High（重要） (CVSS 7.4)
- **公開**: 2026-11-11

## 原文

Jellyfin before 12\.0 contains a path traversal vulnerability in the DELETE /Library/VirtualFolders and POST /Library/VirtualFolders/Name endpoints that allows attackers to delete or move directories via unvalidated library names\. Unauthenticated attackers can supply names like \.\. or absolute paths before setup completes to recursively delete the data directory and jellyfin\.db\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/jellyfin/jellyfin/security/advisories/GHSA-6828-c7cx-hvqm>)
- [NVD CVE\-2026\-126499](<https://nvd.nist.gov/vuln/detail/CVE-2026-126499>)
- [修正 \(github\.com\)](<https://github.com/jellyfin/jellyfin/commit/0c560b22ce73323329645b836c9910abc257ce4e>)
- [github\.com](<https://github.com/jellyfin/jellyfin/blob/v10.11.11/Emby.Server.Implementations/Library/LibraryManager.cs#L3255-L3275>)
- [github\.com](<https://github.com/jellyfin/jellyfin/blob/v10.11.11/Jellyfin.Api/Controllers/LibraryStructureController.cs#L127-L176>)
- [github\.com](<https://github.com/jellyfin/jellyfin/releases/tag/v12.0>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/jellyfin-before-12.0-path-traversal-via-library-virtualfolders-endpoints>)
