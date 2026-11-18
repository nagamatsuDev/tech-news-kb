---
{
  "uuid": "693cdbfe-05bd-44ea-ac5b-9fe6f7feba34",
  "ids": [
    "CVE-2026-124737"
  ],
  "title": "A flaw was found in BusyBox.",
  "summary": "A flaw was found in BusyBox. When the TFTP (Trivial File Transfer Protocol) client requests a custom small block size and receives a standard response, it falls back to the default block size without resizing the allocated memory buffer. A malicious TFTP server can exploit this issue by sending standard-sized network packets during a transfer, causing a heap buffer overflow. This flaw allows an attacker to achieve arbitrary code execution or cause a Denial of Service (DoS) by crashing the application.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:H/A:H",
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
      "url": "https://access.redhat.com/security/cve/CVE-2026-124737",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124737",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-124737"
    },
    {
      "kind": "reference",
      "url": "https://bugzilla.redhat.com/show_bug.cgi?id=2571607",
      "host": "bugzilla.redhat.com",
      "label": "bugzilla.redhat.com"
    }
  ],
  "publishedAt": "2026-11-11T10:16:43.620Z",
  "updatedAt": "2026-11-17T05:18:34.910Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# A flaw was found in BusyBox\.

- **ID**: CVE\-2026\-124737
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-11

## 原文

A flaw was found in BusyBox\. When the TFTP \(Trivial File Transfer Protocol\) client requests a custom small block size and receives a standard response, it falls back to the default block size without resizing the allocated memory buffer\. A malicious TFTP server can exploit this issue by sending standard\-sized network packets during a transfer, causing a heap buffer overflow\. This flaw allows an attacker to achieve arbitrary code execution or cause a Denial of Service \(DoS\) by crashing the application\.

## リンク

- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/security/cve/CVE-2026-124737>)
- [NVD CVE\-2026\-124737](<https://nvd.nist.gov/vuln/detail/CVE-2026-124737>)
- [bugzilla\.redhat\.com](<https://bugzilla.redhat.com/show_bug.cgi?id=2571607>)
