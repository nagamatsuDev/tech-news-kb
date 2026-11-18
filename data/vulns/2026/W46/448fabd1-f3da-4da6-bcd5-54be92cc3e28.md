---
{
  "uuid": "448fabd1-f3da-4da6-bcd5-54be92cc3e28",
  "ids": [
    "CVE-2026-126953"
  ],
  "title": "Cudy TR3000 before 2.5.42 contains an OS command injection vulnerability that allows a malicious or compromised ACS to execute commands a...",
  "summary": "Cudy TR3000 before 2.5.42 contains an OS command injection vulnerability that allows a malicious or compromised ACS to execute commands as root by supplying an unvalidated InternetGatewayDevice.User.{i}.Username value. Attackers can send a SetParameterValues request with shell metacharacters that set_UserUsername() in obuspa_system.lua passes to os.execute(), gaining root command execution.",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126953",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126953"
    },
    {
      "kind": "reference",
      "url": "https://d1jvyy13vm72kv.cloudfront.net/device/upgrade/m_upgrade_TR3000_256MB_Flash-R103-2.5.42-20261103-160202-sysupgrade_82672.zip",
      "host": "d1jvyy13vm72kv.cloudfront.net",
      "label": "d1jvyy13vm72kv.cloudfront.net"
    },
    {
      "kind": "reference",
      "url": "https://www.cudy.com/en-us/pages/download-center/tr3000-1-0",
      "host": "www.cudy.com",
      "label": "www.cudy.com"
    },
    {
      "kind": "reference",
      "url": "https://www.cudy.com/pages/security-advisory/cudy-sa-26-11-yhix-9-s",
      "host": "www.cudy.com",
      "label": "www.cudy.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/cudy-tr3000-before-2.5.42-os-command-injection-via-tr-098-user-username",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:18:02.737Z",
  "updatedAt": "2026-11-17T16:17:47.307Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Cudy TR3000 before 2\.5\.42 contains an OS command injection vulnerability that allows a malicious or compromised ACS to execute commands a\.\.\.

- **ID**: CVE\-2026\-126953
- **危険度**: High（重要） (CVSS 8.1)
- **公開**: 2026-11-13

## 原文

Cudy TR3000 before 2\.5\.42 contains an OS command injection vulnerability that allows a malicious or compromised ACS to execute commands as root by supplying an unvalidated InternetGatewayDevice\.User\.\{i\}\.Username value\. Attackers can send a SetParameterValues request with shell metacharacters that set\_UserUsername\(\) in obuspa\_system\.lua passes to os\.execute\(\), gaining root command execution\.

## リンク

- [NVD CVE\-2026\-126953](<https://nvd.nist.gov/vuln/detail/CVE-2026-126953>)
- [d1jvyy13vm72kv\.cloudfront\.net](<https://d1jvyy13vm72kv.cloudfront.net/device/upgrade/m_upgrade_TR3000_256MB_Flash-R103-2.5.42-20261103-160202-sysupgrade_82672.zip>)
- [www\.cudy\.com](<https://www.cudy.com/en-us/pages/download-center/tr3000-1-0>)
- [www\.cudy\.com](<https://www.cudy.com/pages/security-advisory/cudy-sa-26-11-yhix-9-s>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/cudy-tr3000-before-2.5.42-os-command-injection-via-tr-098-user-username>)
