---
{
  "uuid": "994aa315-fbad-4a30-aa65-ed0fa8dccadc",
  "ids": [
    "CVE-2026-103933"
  ],
  "title": "Netatalk is a Free and Open Source file server suite for Unix-like operating systems.",
  "summary": "Netatalk is a Free and Open Source file server suite for Unix-like operating systems. From 2.1.0 until 4.5.2, get_eacontent in libatalk/vfs/ea_ad.c subtracts MAX_REPLY_EXTRA_BYTES from a client-controlled FPGetExtAttr MaxReplySize without rejecting values from 1 through 5, and a signed-to-unsigned comparison can then select an untrusted AppleDouble ea_size. An authenticated client on a volume configured with ea = ad can use a pre-existing malformed AppleDouble sidecar to make read copy attacker-controlled bytes beyond dsi->data + 6 into the surrounding struct DSI, including protocol callback pointers. The malformed sidecar must already exist or be created through a separate local, co-export, management, restore, or vulnerability-assisted write path, and practical code execution depends on the target architecture, structure layout, and address uncertainty; runtime command execution was demonstrated on one x86-64 build. Volumes using ea = sys, ea = none, or ea = auto when it resolves to native system xattrs do not reach this path. This issue is fixed in version 4.5.2.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.7,
  "cvssVector": "CVSS:4.0/AV:N/AC:H/AT:P/PR:L/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://github.com/Netatalk/netatalk/security/advisories/GHSA-qj62-fcj5-w24x",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-103933",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-103933"
    },
    {
      "kind": "patch",
      "url": "https://github.com/Netatalk/netatalk/commit/7ce1448cafe985f2f9604b0341858ec5a03cfa79",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/Netatalk/netatalk/releases/tag/netatalk-4-5-2",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-20T18:18:34.790Z",
  "updatedAt": "2026-11-20T21:17:27.737Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# Netatalk is a Free and Open Source file server suite for Unix\-like operating systems\.

- **ID**: CVE\-2026\-103933
- **危険度**: High（重要） (CVSS 7.7)
- **公開**: 2026-11-20

## 原文

Netatalk is a Free and Open Source file server suite for Unix\-like operating systems\. From 2\.1\.0 until 4\.5\.2, get\_eacontent in libatalk/vfs/ea\_ad\.c subtracts MAX\_REPLY\_EXTRA\_BYTES from a client\-controlled FPGetExtAttr MaxReplySize without rejecting values from 1 through 5, and a signed\-to\-unsigned comparison can then select an untrusted AppleDouble ea\_size\. An authenticated client on a volume configured with ea \= ad can use a pre\-existing malformed AppleDouble sidecar to make read copy attacker\-controlled bytes beyond dsi\-&gt;data \+ 6 into the surrounding struct DSI, including protocol callback pointers\. The malformed sidecar must already exist or be created through a separate local, co\-export, management, restore, or vulnerability\-assisted write path, and practical code execution depends on the target architecture, structure layout, and address uncertainty; runtime command execution was demonstrated on one x86\-64 build\. Volumes using ea \= sys, ea \= none, or ea \= auto when it resolves to native system xattrs do not reach this path\. This issue is fixed in version 4\.5\.2\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/Netatalk/netatalk/security/advisories/GHSA-qj62-fcj5-w24x>)
- [NVD CVE\-2026\-103933](<https://nvd.nist.gov/vuln/detail/CVE-2026-103933>)
- [修正 \(github\.com\)](<https://github.com/Netatalk/netatalk/commit/7ce1448cafe985f2f9604b0341858ec5a03cfa79>)
- [github\.com](<https://github.com/Netatalk/netatalk/releases/tag/netatalk-4-5-2>)
