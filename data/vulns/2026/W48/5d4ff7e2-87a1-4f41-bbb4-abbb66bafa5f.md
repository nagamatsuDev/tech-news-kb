---
{
  "uuid": "5d4ff7e2-87a1-4f41-bbb4-abbb66bafa5f",
  "ids": [
    "CVE-2026-93585"
  ],
  "title": "An improper authorization vulnerability in the EasyVistas EV Reach Client Agent allows authenticated users with low privileges to execute...",
  "summary": "An improper authorization vulnerability in the EasyVistas EV Reach Client Agent allows authenticated users with low privileges to execute arbitrary commands on a remote Windows endpoint with LocalSystem privileges. The affected agent service does not sufficiently enforce authorization restrictions for certain privileged remote management operations. Under specific conditions, the agent fails to apply the intended user impersonation mechanism and executes user-supplied commands within the security context of the agent service, which runs as NT AUTHORITY\\SYSTEM.\n\nAs a result, an authenticated attacker may bypass the intended privilege restrictions and execute arbitrary commands with the highest user-mode privileges on an affected Windows system. Successful exploitation may lead to complete compromise of the affected endpoint, including unauthorized access to sensitive information, modification of system configurations, installation of malicious software, or disruption of system availability. \n\nThe vulnerability does not require administrative credentials or user interaction after successful authentication.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-93585",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-93585"
    },
    {
      "kind": "reference",
      "url": "https://otrs.com/release-notes/easyvista-advisory-2026-01/",
      "host": "otrs.com",
      "label": "otrs.com"
    }
  ],
  "publishedAt": "2026-11-23T14:17:27.077Z",
  "updatedAt": "2026-11-23T16:17:32.597Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# An improper authorization vulnerability in the EasyVistas EV Reach Client Agent allows authenticated users with low privileges to execute\.\.\.

- **ID**: CVE\-2026\-93585
- **危険度**: High（重要） (CVSS 8.8)
- **OS**: Windows
- **公開**: 2026-11-23

## 原文

An improper authorization vulnerability in the EasyVistas EV Reach Client Agent allows authenticated users with low privileges to execute arbitrary commands on a remote Windows endpoint with LocalSystem privileges\. The affected agent service does not sufficiently enforce authorization restrictions for certain privileged remote management operations\. Under specific conditions, the agent fails to apply the intended user impersonation mechanism and executes user\-supplied commands within the security context of the agent service, which runs as NT AUTHORITY\\SYSTEM\.
  
As a result, an authenticated attacker may bypass the intended privilege restrictions and execute arbitrary commands with the highest user\-mode privileges on an affected Windows system\. Successful exploitation may lead to complete compromise of the affected endpoint, including unauthorized access to sensitive information, modification of system configurations, installation of malicious software, or disruption of system availability\. 
  
The vulnerability does not require administrative credentials or user interaction after successful authentication\.

## リンク

- [NVD CVE\-2026\-93585](<https://nvd.nist.gov/vuln/detail/CVE-2026-93585>)
- [otrs\.com](<https://otrs.com/release-notes/easyvista-advisory-2026-01/>)
