---
{
  "uuid": "74fe8ec3-1efc-4b1f-9aaa-8034bbfbf0f3",
  "ids": [
    "CVE-2026-111433"
  ],
  "title": "UNIX symbolic link (symlink) following vulnerability in openEuler iSulad on Linux.",
  "summary": "UNIX symbolic link (symlink) following vulnerability in openEuler iSulad on Linux.\n\nThis vulnerability is associated with program file src/daemon/modules/spec/specs_mount.c.\n\n\n\nThis issue affects iSulad: through 2.1.6.\n\n\n\nIf an attacker can get the victim or the platform to run their crafted malicious image, they can cause the iSulad daemon to copy sensitive host directories into an anonymous volume when creating a container, which the container can then read.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.6,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-111433",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-111433"
    },
    {
      "kind": "reference",
      "url": "https://atomgit.com/openeuler/iSulad/commit/3af9a2bf517b570fe20b1ee1070668a6270d6e11?ref=master&prId=2652",
      "host": "atomgit.com",
      "label": "atomgit.com"
    },
    {
      "kind": "reference",
      "url": "https://atomgit.com/src-openeuler/iSulad/pull/812",
      "host": "atomgit.com",
      "label": "atomgit.com"
    },
    {
      "kind": "reference",
      "url": "https://www.openeuler.org/zh/security/security-bulletins/detail/?id=openEuler-SA-2026-4865",
      "host": "www.openeuler.org",
      "label": "www.openeuler.org"
    }
  ],
  "publishedAt": "2026-11-12T04:17:17.160Z",
  "updatedAt": "2026-11-16T20:17:50.573Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# UNIX symbolic link \(symlink\) following vulnerability in openEuler iSulad on Linux\.

- **ID**: CVE\-2026\-111433
- **危険度**: High（重要） (CVSS 8.6)
- **公開**: 2026-11-12

## 原文

UNIX symbolic link \(symlink\) following vulnerability in openEuler iSulad on Linux\.
  
This vulnerability is associated with program file src/daemon/modules/spec/specs\_mount\.c\.
  
This issue affects iSulad\: through 2\.1\.6\.
  
If an attacker can get the victim or the platform to run their crafted malicious image, they can cause the iSulad daemon to copy sensitive host directories into an anonymous volume when creating a container, which the container can then read\.

## リンク

- [NVD CVE\-2026\-111433](<https://nvd.nist.gov/vuln/detail/CVE-2026-111433>)
- [atomgit\.com](<https://atomgit.com/openeuler/iSulad/commit/3af9a2bf517b570fe20b1ee1070668a6270d6e11?ref=master&prId=2652>)
- [atomgit\.com](<https://atomgit.com/src-openeuler/iSulad/pull/812>)
- [www\.openeuler\.org](<https://www.openeuler.org/zh/security/security-bulletins/detail/?id=openEuler-SA-2026-4865>)
