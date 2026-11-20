---
{
  "uuid": "e5daebe7-cac3-47a8-bd69-dc9875afb17c",
  "ids": [
    "CVE-2026-62256"
  ],
  "title": "HTSlib is a library for reading and writing bioinformatics file formats.",
  "summary": "HTSlib is a library for reading and writing bioinformatics file formats. Prior to 1.21.2, 1.22.3, 1.23.2, and 1.24, fai_retrieve does not verify that the line width recorded in a FASTA .fai index is greater than or equal to the number of bases per line. When the line width is exactly one less than the base count, retrieval allocates an undersized heap buffer and writes one byte beyond its end; larger discrepancies instead cause an allocation failure that is handled. This issue can corrupt heap memory and crash the process. This issue is fixed in versions 1.21.2, 1.22.3, 1.23.2, and 1.24.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:N/VI:H/VA:L/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://github.com/samtools/htslib/security/advisories/GHSA-4hjq-r829-8c8v",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-62256",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-62256"
    },
    {
      "kind": "patch",
      "url": "https://github.com/samtools/htslib/commit/4af640f9ffd7f1fac95a739df7f560e3e5557960",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/samtools/htslib/commit/504fb841b70afb948f58089c3a4337ce875c1e52",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/samtools/htslib/commit/567fd43c6ef938de53c98217f99336e3ce5a60ab",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/samtools/htslib/releases/tag/1.21.2",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/samtools/htslib/releases/tag/1.22.3",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/samtools/htslib/releases/tag/1.23.2",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/samtools/htslib/releases/tag/1.24",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-19T16:21:37.610Z",
  "updatedAt": "2026-11-19T21:45:03.280Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# HTSlib is a library for reading and writing bioinformatics file formats\.

- **ID**: CVE\-2026\-62256
- **危険度**: High（重要） (CVSS 7.1)
- **公開**: 2026-11-19

## 原文

HTSlib is a library for reading and writing bioinformatics file formats\. Prior to 1\.21\.2, 1\.22\.3, 1\.23\.2, and 1\.24, fai\_retrieve does not verify that the line width recorded in a FASTA \.fai index is greater than or equal to the number of bases per line\. When the line width is exactly one less than the base count, retrieval allocates an undersized heap buffer and writes one byte beyond its end; larger discrepancies instead cause an allocation failure that is handled\. This issue can corrupt heap memory and crash the process\. This issue is fixed in versions 1\.21\.2, 1\.22\.3, 1\.23\.2, and 1\.24\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/samtools/htslib/security/advisories/GHSA-4hjq-r829-8c8v>)
- [NVD CVE\-2026\-62256](<https://nvd.nist.gov/vuln/detail/CVE-2026-62256>)
- [修正 \(github\.com\)](<https://github.com/samtools/htslib/commit/4af640f9ffd7f1fac95a739df7f560e3e5557960>)
- [修正 \(github\.com\)](<https://github.com/samtools/htslib/commit/504fb841b70afb948f58089c3a4337ce875c1e52>)
- [修正 \(github\.com\)](<https://github.com/samtools/htslib/commit/567fd43c6ef938de53c98217f99336e3ce5a60ab>)
- [github\.com](<https://github.com/samtools/htslib/releases/tag/1.21.2>)
- [github\.com](<https://github.com/samtools/htslib/releases/tag/1.22.3>)
- [github\.com](<https://github.com/samtools/htslib/releases/tag/1.23.2>)
- [github\.com](<https://github.com/samtools/htslib/releases/tag/1.24>)
