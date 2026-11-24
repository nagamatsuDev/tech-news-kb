---
{
  "uuid": "1efbe5e8-a2d1-4968-abd2-39dde5bed87f",
  "ids": [
    "CVE-2026-133949"
  ],
  "title": "pip prior to v26.2.2 the certifi bundled with pip contains the compromised eMudhra certificates.",
  "summary": "pip prior to v26.2.2 the certifi bundled with pip contains the compromised eMudhra certificates. \n\n\n\n\nUpgrading to a secure version of pip should be done either by first upgrading Python to a version that rejects the compromised intermediates (CVE-2026-115557) or use hash pinning with a known-secure version of pip. pip is not vulnerable when using a Python version that rejects the compromised certificates. See the references below for more information.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.3,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
  "os": [],
  "languages": [
    "Python"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-133949",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-133949"
    },
    {
      "kind": "patch",
      "url": "https://github.com/pypa/pip/pull/14371",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://discuss.python.org/t/information-for-python-users-regarding-emudhra-emsign-ca-certificate-security-incident/109576",
      "host": "discuss.python.org",
      "label": "discuss.python.org"
    },
    {
      "kind": "reference",
      "url": "https://github.com/advisories/ghsa-6q48-6c7w-9gw2",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://mail.python.org/archives/list/security-announce@python.org/thread/4234WU4ONSVWPT3BIGG6TOJO2UFE26Y6/",
      "host": "mail.python.org",
      "label": "mail.python.org"
    },
    {
      "kind": "reference",
      "url": "https://www.cve.org/CVERecord?id=CVE-2026-115557",
      "host": "www.cve.org",
      "label": "www.cve.org"
    }
  ],
  "publishedAt": "2026-11-20T19:18:51.517Z",
  "updatedAt": "2026-11-23T15:41:46.570Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# pip prior to v26\.2\.2 the certifi bundled with pip contains the compromised eMudhra certificates\.

- **ID**: CVE\-2026\-133949
- **危険度**: Critical（緊急） (CVSS 9.3)
- **言語**: Python
- **公開**: 2026-11-20

## 原文

pip prior to v26\.2\.2 the certifi bundled with pip contains the compromised eMudhra certificates\. 
  
Upgrading to a secure version of pip should be done either by first upgrading Python to a version that rejects the compromised intermediates \(CVE\-2026\-115557\) or use hash pinning with a known\-secure version of pip\. pip is not vulnerable when using a Python version that rejects the compromised certificates\. See the references below for more information\.

## リンク

- [NVD CVE\-2026\-133949](<https://nvd.nist.gov/vuln/detail/CVE-2026-133949>)
- [修正 \(github\.com\)](<https://github.com/pypa/pip/pull/14371>)
- [discuss\.python\.org](<https://discuss.python.org/t/information-for-python-users-regarding-emudhra-emsign-ca-certificate-security-incident/109576>)
- [github\.com](<https://github.com/advisories/ghsa-6q48-6c7w-9gw2>)
- [mail\.python\.org](<https://mail.python.org/archives/list/security-announce@python.org/thread/4234WU4ONSVWPT3BIGG6TOJO2UFE26Y6/>)
- [www\.cve\.org](<https://www.cve.org/CVERecord?id=CVE-2026-115557>)
