---
{
  "uuid": "3b027d2e-fd4c-466f-8dee-c73e2e1cab0b",
  "ids": [
    "CVE-2026-115576"
  ],
  "title": "NetBird is a zero-trust networking platform that connects people, machines, and AI agents across any network.",
  "summary": "NetBird is a zero-trust networking platform that connects people, machines, and AI agents across any network. From versions 0.5.0 through 0.75.1, the client daemon exposes its gRPC control interface to any local process without authentication. On Linux, macOS, and FreeBSD, the interface is a Unix domain socket that is accessible to all local users, allowing any of them to control the daemon. An attacker with a low-privilege account can read or modify privileged VPN and daemon settings, disconnect or hijack the NetBird peer, and gain an unauthenticated root shell via the built-in SSH server. This issue is fixed in version 0.76.0.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H",
  "os": [
    "macOS"
  ],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/netbirdio/netbird/security/advisories/GHSA-qcpp-8vwj-hhwr",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-115576",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-115576"
    },
    {
      "kind": "patch",
      "url": "https://github.com/netbirdio/netbird/commit/0f5d2d91fb3d969e30cb13396e5b6917a8f6617b",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/netbirdio/netbird/pull/6967",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/netbirdio/netbird/releases/tag/v0.76.0",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-26T02:16:59.420Z",
  "updatedAt": "2026-11-26T02:16:59.420Z",
  "firstSeenAt": "2026-11-26T04:41:30.937Z",
  "week": "2026-W48"
}
---

# NetBird is a zero\-trust networking platform that connects people, machines, and AI agents across any network\.

- **ID**: CVE\-2026\-115576
- **危険度**: High（重要） (CVSS 8.8)
- **OS**: macOS
- **公開**: 2026-11-26

## 原文

NetBird is a zero\-trust networking platform that connects people, machines, and AI agents across any network\. From versions 0\.5\.0 through 0\.75\.1, the client daemon exposes its gRPC control interface to any local process without authentication\. On Linux, macOS, and FreeBSD, the interface is a Unix domain socket that is accessible to all local users, allowing any of them to control the daemon\. An attacker with a low\-privilege account can read or modify privileged VPN and daemon settings, disconnect or hijack the NetBird peer, and gain an unauthenticated root shell via the built\-in SSH server\. This issue is fixed in version 0\.76\.0\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/netbirdio/netbird/security/advisories/GHSA-qcpp-8vwj-hhwr>)
- [NVD CVE\-2026\-115576](<https://nvd.nist.gov/vuln/detail/CVE-2026-115576>)
- [修正 \(github\.com\)](<https://github.com/netbirdio/netbird/commit/0f5d2d91fb3d969e30cb13396e5b6917a8f6617b>)
- [修正 \(github\.com\)](<https://github.com/netbirdio/netbird/pull/6967>)
- [github\.com](<https://github.com/netbirdio/netbird/releases/tag/v0.76.0>)
