---
{
  "uuid": "d76eed44-3d0d-4eb2-8ffb-b87f68aa5dba",
  "ids": [
    "CVE-2026-95378"
  ],
  "title": "Path traversal in the certificate upload endpoint (/api/certificate/upload) of the turbineweb web interface in Zenitel VSFF6, VSFF8, VSFF...",
  "summary": "Path traversal in the certificate upload endpoint (/api/certificate/upload) of the turbineweb web interface in Zenitel VSFF6, VSFF8, VSFF8MP, VSFF8MN, and VSFT devices with software versions from 10.0.3.0 before 10.1.3.0 allows authenticated administrators to write arbitrary files as root via a crafted filename parameter in a multipart upload request when the type field is set to any value other than https_certificate. In that case, both path validation and certificate content validation are skipped.\n\n\n\nThis can be escalated to arbitrary code execution as root, for example by overwriting startup scripts or planting SSH keys.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.6,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:H/UI:N/VC:H/VI:H/VA:H/SC:L/SI:L/SA:L/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:P/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-95378",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-95378"
    },
    {
      "kind": "reference",
      "url": "https://www.zenitel.com/sites/default/files/2026-11/A100K12404-Zenitel-Security-Advisory.pdf",
      "host": "www.zenitel.com",
      "label": "www.zenitel.com"
    }
  ],
  "publishedAt": "2026-11-13T16:19:37.510Z",
  "updatedAt": "2026-11-13T20:19:03.120Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Path traversal in the certificate upload endpoint \(/api/certificate/upload\) of the turbineweb web interface in Zenitel VSFF6, VSFF8, VSFF\.\.\.

- **ID**: CVE\-2026\-95378
- **危険度**: High（重要） (CVSS 8.6)
- **公開**: 2026-11-13

## 原文

Path traversal in the certificate upload endpoint \(/api/certificate/upload\) of the turbineweb web interface in Zenitel VSFF6, VSFF8, VSFF8MP, VSFF8MN, and VSFT devices with software versions from 10\.0\.3\.0 before 10\.1\.3\.0 allows authenticated administrators to write arbitrary files as root via a crafted filename parameter in a multipart upload request when the type field is set to any value other than https\_certificate\. In that case, both path validation and certificate content validation are skipped\.
  
This can be escalated to arbitrary code execution as root, for example by overwriting startup scripts or planting SSH keys\.

## リンク

- [NVD CVE\-2026\-95378](<https://nvd.nist.gov/vuln/detail/CVE-2026-95378>)
- [www\.zenitel\.com](<https://www.zenitel.com/sites/default/files/2026-11/A100K12404-Zenitel-Security-Advisory.pdf>)
