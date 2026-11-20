---
{
  "uuid": "fd7bb1d5-728a-4aff-b0da-0ae9a2d3625b",
  "ids": [
    "CVE-2026-129291"
  ],
  "title": "PHP-FPM epoll use-after-free can lead to local privilege escalation.",
  "summary": "PHP-FPM epoll use-after-free can lead to local privilege escalation.\n\nWhen catch_workers_output is enabled and the epoll event backend is used, the PHP-FPM master can close a worker's output pipe in fpm_child_close() without removing the associated event, and the delayed cleanup can free the worker record while its epoll registration is still active. A later event is then dispatched through a pointer into freed memory. A local attacker who can execute PHP code in an FPM worker can crash the master or execute code with its privileges, commonly root. catch_workers_output is disabled by default but enabled in the official PHP-FPM Docker images.\n\nThis issue affects PHP versions from 8.1.20 through 8.1.34, from 8.2.7 before 8.2.36, 8.3.* before 8.3.37, 8.4.* before 8.4.28 and 8.5.* before 8.5.13.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:4.0/AV:L/AC:H/AT:P/PR:L/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:H/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
  "os": [],
  "languages": [
    "PHP"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/php/php-src/security/advisories/GHSA-jm4m-qfqx-967m",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129291",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-129291"
    }
  ],
  "publishedAt": "2026-11-19T15:17:27.663Z",
  "updatedAt": "2026-11-19T21:45:07.470Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# PHP\-FPM epoll use\-after\-free can lead to local privilege escalation\.

- **ID**: CVE\-2026\-129291
- **危険度**: High（重要） (CVSS 8.8)
- **言語**: PHP
- **公開**: 2026-11-19

## 原文

PHP\-FPM epoll use\-after\-free can lead to local privilege escalation\.
  
When catch\_workers\_output is enabled and the epoll event backend is used, the PHP\-FPM master can close a worker's output pipe in fpm\_child\_close\(\) without removing the associated event, and the delayed cleanup can free the worker record while its epoll registration is still active\. A later event is then dispatched through a pointer into freed memory\. A local attacker who can execute PHP code in an FPM worker can crash the master or execute code with its privileges, commonly root\. catch\_workers\_output is disabled by default but enabled in the official PHP\-FPM Docker images\.
  
This issue affects PHP versions from 8\.1\.20 through 8\.1\.34, from 8\.2\.7 before 8\.2\.36, 8\.3\.\* before 8\.3\.37, 8\.4\.\* before 8\.4\.28 and 8\.5\.\* before 8\.5\.13\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/php/php-src/security/advisories/GHSA-jm4m-qfqx-967m>)
- [NVD CVE\-2026\-129291](<https://nvd.nist.gov/vuln/detail/CVE-2026-129291>)
