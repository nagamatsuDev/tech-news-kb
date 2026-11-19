---
{
  "uuid": "231cedd5-a6f2-4dbb-bc09-ee3c6e243d8a",
  "ids": [
    "CVE-2016-20105"
  ],
  "title": "Lucee Server versions 5.0.0.0 before 5.3.4.46 contain an insecure default configuration that allows unauthenticated attackers to set the ...",
  "summary": "Lucee Server versions 5.0.0.0 before 5.3.4.46 contain an insecure default configuration that allows unauthenticated attackers to set the initial admin password via the first-run form on /lucee/admin/web.cfm and /lucee/admin/server.cfm. Attackers can access the 'New Password' set-password form before any password is configured to seize administrative control of the server. Exploitation evidence was first observed by the Shadowserver Foundation on 2023-10-24.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2016-20105",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2016-20105"
    },
    {
      "kind": "patch",
      "url": "https://github.com/lucee/Lucee/commit/206cdab0a7c6",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/projectdiscovery/nuclei-templates/blob/main/http/vulnerabilities/other/lucee-unset-credentials.yaml",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://luceeserver.atlassian.net/browse/LDEV-926",
      "host": "luceeserver.atlassian.net",
      "label": "luceeserver.atlassian.net"
    },
    {
      "kind": "reference",
      "url": "https://www.petefreitag.com/blog/lucee-admin-password-box/",
      "host": "www.petefreitag.com",
      "label": "www.petefreitag.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/lucee-server-5.0.0.0-5.3.4.46-unauthenticated-admin-password-setup",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/lucee-server-5.0.0.0-before-5.3.4.46-unauthenticated-admin-password-setup",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-18T16:17:47.940Z",
  "updatedAt": "2026-11-18T18:17:32.227Z",
  "firstSeenAt": "2026-11-19T03:57:45.838Z",
  "week": "2026-W47"
}
---

# Lucee Server versions 5\.0\.0\.0 before 5\.3\.4\.46 contain an insecure default configuration that allows unauthenticated attackers to set the \.\.\.

- **ID**: CVE\-2016\-20105
- **危険度**: High（重要） (CVSS 8.1)
- **公開**: 2026-11-18

## 原文

Lucee Server versions 5\.0\.0\.0 before 5\.3\.4\.46 contain an insecure default configuration that allows unauthenticated attackers to set the initial admin password via the first\-run form on /lucee/admin/web\.cfm and /lucee/admin/server\.cfm\. Attackers can access the 'New Password' set\-password form before any password is configured to seize administrative control of the server\. Exploitation evidence was first observed by the Shadowserver Foundation on 2023\-10\-24\.

## リンク

- [NVD CVE\-2016\-20105](<https://nvd.nist.gov/vuln/detail/CVE-2016-20105>)
- [修正 \(github\.com\)](<https://github.com/lucee/Lucee/commit/206cdab0a7c6>)
- [github\.com](<https://github.com/projectdiscovery/nuclei-templates/blob/main/http/vulnerabilities/other/lucee-unset-credentials.yaml>)
- [luceeserver\.atlassian\.net](<https://luceeserver.atlassian.net/browse/LDEV-926>)
- [www\.petefreitag\.com](<https://www.petefreitag.com/blog/lucee-admin-password-box/>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/lucee-server-5.0.0.0-5.3.4.46-unauthenticated-admin-password-setup>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/lucee-server-5.0.0.0-before-5.3.4.46-unauthenticated-admin-password-setup>)
