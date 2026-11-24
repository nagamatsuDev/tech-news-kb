---
{
  "uuid": "3ace946f-13ba-4f8f-8c2a-6cfbe5b0d28b",
  "ids": [
    "CVE-2026-121805"
  ],
  "title": "Description:\n\nWhen an iRule that processes client traffic using the PEM::subscriber command is configured on a virtual server, undisclose...",
  "summary": "Description:\n\nWhen an iRule that processes client traffic using the PEM::subscriber command is configured on a virtual server, undisclosed requests can cause the Traffic Management Microkernel (TMM) to terminate and may lead to remote code execution (RCE). \n\n\n\n\n\nImpact:\n\n\n\nTraffic is disrupted while the TMM process restarts. This vulnerability allows a remote unauthenticated attacker to cause a denial-of-service (DoS) on the BIG-IP system and may perform RCE. There is no control plane exposure; this is a data plane issue only.\n\n\n\n\n\n\n\nNote: Software versions which have reached End of Technical Support (EoTS) are not evaluated.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-121805",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-121805"
    },
    {
      "kind": "reference",
      "url": "https://my.f5.com/manage/s/article/K000163946",
      "host": "my.f5.com",
      "label": "my.f5.com"
    }
  ],
  "publishedAt": "2026-11-18T16:18:03.607Z",
  "updatedAt": "2026-11-23T16:24:48.897Z",
  "firstSeenAt": "2026-11-19T03:57:45.838Z",
  "week": "2026-W47"
}
---

# Description\: When an iRule that processes client traffic using the PEM\:\:subscriber command is configured on a virtual server, undisclose\.\.\.

- **ID**: CVE\-2026\-121805
- **危険度**: Critical（緊急） (CVSS 9.8)
- **公開**: 2026-11-18

## 原文

Description\:
  
When an iRule that processes client traffic using the PEM\:\:subscriber command is configured on a virtual server, undisclosed requests can cause the Traffic Management Microkernel \(TMM\) to terminate and may lead to remote code execution \(RCE\)\. 
  
Impact\:
  
Traffic is disrupted while the TMM process restarts\. This vulnerability allows a remote unauthenticated attacker to cause a denial\-of\-service \(DoS\) on the BIG\-IP system and may perform RCE\. There is no control plane exposure; this is a data plane issue only\.
  
Note\: Software versions which have reached End of Technical Support \(EoTS\) are not evaluated\.

## リンク

- [NVD CVE\-2026\-121805](<https://nvd.nist.gov/vuln/detail/CVE-2026-121805>)
- [my\.f5\.com](<https://my.f5.com/manage/s/article/K000163946>)
