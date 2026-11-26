---
{
  "uuid": "83658ab4-fe21-427d-bfca-b6f1f78cebbe",
  "ids": [
    "CVE-2026-131827"
  ],
  "title": "RustDesk Client for Windows reg_recovery Missing Authorization Local Privilege Escalation Vulnerability.",
  "summary": "RustDesk Client for Windows reg_recovery Missing Authorization Local Privilege Escalation Vulnerability. This vulnerability allows local attackers to escalate privileges on affected installations of RustDesk Client for Windows. An attacker must first obtain the ability to execute low-privileged code on the target system in order to exploit this vulnerability.\n\nThe specific flaw exists within the main IPC endpoint exposed by the RustDesk service. The issue results from the lack of authorization prior to allowing access to functionality. An attacker can leverage this vulnerability to escalate privileges and execute arbitrary code in the context of SYSTEM. Was ZDI-CAN-34805.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.8,
  "cvssVector": "CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
  "os": [
    "Windows"
  ],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-131827",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-131827"
    },
    {
      "kind": "patch",
      "url": "https://github.com/rustdesk/rustdesk/pull/17040",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://www.zerodayinitiative.com/advisories/ZDI-26-1080/",
      "host": "www.zerodayinitiative.com",
      "label": "www.zerodayinitiative.com"
    }
  ],
  "publishedAt": "2026-11-25T21:17:17.227Z",
  "updatedAt": "2026-11-25T21:17:17.227Z",
  "firstSeenAt": "2026-11-26T04:41:30.937Z",
  "week": "2026-W48"
}
---

# RustDesk Client for Windows reg\_recovery Missing Authorization Local Privilege Escalation Vulnerability\.

- **ID**: CVE\-2026\-131827
- **危険度**: High（重要） (CVSS 7.8)
- **OS**: Windows
- **公開**: 2026-11-25

## 原文

RustDesk Client for Windows reg\_recovery Missing Authorization Local Privilege Escalation Vulnerability\. This vulnerability allows local attackers to escalate privileges on affected installations of RustDesk Client for Windows\. An attacker must first obtain the ability to execute low\-privileged code on the target system in order to exploit this vulnerability\.
  
The specific flaw exists within the main IPC endpoint exposed by the RustDesk service\. The issue results from the lack of authorization prior to allowing access to functionality\. An attacker can leverage this vulnerability to escalate privileges and execute arbitrary code in the context of SYSTEM\. Was ZDI\-CAN\-34805\.

## リンク

- [NVD CVE\-2026\-131827](<https://nvd.nist.gov/vuln/detail/CVE-2026-131827>)
- [修正 \(github\.com\)](<https://github.com/rustdesk/rustdesk/pull/17040>)
- [www\.zerodayinitiative\.com](<https://www.zerodayinitiative.com/advisories/ZDI-26-1080/>)
