---
{
  "uuid": "8f74ff66-0c14-4caa-881f-cbc28edcb8de",
  "ids": [
    "CVE-2026-136184"
  ],
  "title": "compose-farm 0.19.0 before 1.22.0 contains a cross-site WebSocket hijacking and cross-site request forgery vulnerability because its unau...",
  "summary": "compose-farm 0.19.0 before 1.22.0 contains a cross-site WebSocket hijacking and cross-site request forgery vulnerability because its unauthenticated web UI performs no Origin validation. Malicious websites visited by users can open /ws/shell/{host} or /ws/exec sockets, or abuse unquoted service parameters and PUT /api/console/file, to execute commands on all managed hosts.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.6,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:H",
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
      "url": "https://github.com/basnijholt/compose-farm/security/advisories/GHSA-64fv-7j6v-8vjj",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-136184",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-136184"
    },
    {
      "kind": "patch",
      "url": "https://github.com/basnijholt/compose-farm/commit/244d56c022de61d2c6b3543b5c973ced97de6cc8",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/basnijholt/compose-farm/commit/d944a28f0aca4ef2bd20f397bc75c7869f1efe7c",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/basnijholt/compose-farm/commit/df21578fcc8e6ed439406591e57b4f5673a51863",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/basnijholt/compose-farm/blob/v1.21.5/src/compose_farm/web/ws.py#L250-L256",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/basnijholt/compose-farm/releases/tag/v1.22.0",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/compose-farm-0.19.0-before-1.22.0-cross-site-websocket-hijacking-rce-via-web-ui",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-24T17:18:46.180Z",
  "updatedAt": "2026-11-24T17:18:46.180Z",
  "firstSeenAt": "2026-11-25T05:13:17.065Z",
  "week": "2026-W48"
}
---

# compose\-farm 0\.19\.0 before 1\.22\.0 contains a cross\-site WebSocket hijacking and cross\-site request forgery vulnerability because its unau\.\.\.

- **ID**: CVE\-2026\-136184
- **危険度**: Critical（緊急） (CVSS 9.6)
- **公開**: 2026-11-24

## 原文

compose\-farm 0\.19\.0 before 1\.22\.0 contains a cross\-site WebSocket hijacking and cross\-site request forgery vulnerability because its unauthenticated web UI performs no Origin validation\. Malicious websites visited by users can open /ws/shell/\{host\} or /ws/exec sockets, or abuse unquoted service parameters and PUT /api/console/file, to execute commands on all managed hosts\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/basnijholt/compose-farm/security/advisories/GHSA-64fv-7j6v-8vjj>)
- [NVD CVE\-2026\-136184](<https://nvd.nist.gov/vuln/detail/CVE-2026-136184>)
- [修正 \(github\.com\)](<https://github.com/basnijholt/compose-farm/commit/244d56c022de61d2c6b3543b5c973ced97de6cc8>)
- [修正 \(github\.com\)](<https://github.com/basnijholt/compose-farm/commit/d944a28f0aca4ef2bd20f397bc75c7869f1efe7c>)
- [修正 \(github\.com\)](<https://github.com/basnijholt/compose-farm/commit/df21578fcc8e6ed439406591e57b4f5673a51863>)
- [github\.com](<https://github.com/basnijholt/compose-farm/blob/v1.21.5/src/compose_farm/web/ws.py#L250-L256>)
- [github\.com](<https://github.com/basnijholt/compose-farm/releases/tag/v1.22.0>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/compose-farm-0.19.0-before-1.22.0-cross-site-websocket-hijacking-rce-via-web-ui>)
