---
{
  "uuid": "667fedb4-0fe3-4ac4-bcaa-1e5e1ff091fd",
  "ids": [
    "CVE-2026-100081"
  ],
  "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nxen-netback: defer xenvif_mcast_addr_list_free()\n\nIn order for the f...",
  "summary": "In the Linux kernel, the following vulnerability has been resolved:\n\nxen-netback: defer xenvif_mcast_addr_list_free()\n\nIn order for the function to legitimately avoid locking/RCU, it needs to\nrun after all TX/RX processing has finished/stopped: Lookups happen from\nxenvif_start_xmit(), while adds/removes happen from xenvif_tx_action()\n(called out of xenvif_poll()).\n\nMove the call out of xenvif_disconnect_data() (the call to the function\nfrom connect()'s error path doesn't require any cleaning up there), and\nput it past the synchronization point in backend_disconnect().\n\nThis is XSA-527 / CVE-2026-100081.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.8,
  "cvssVector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:C/C:H/I:H/A:H",
  "os": [
    "Linux"
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-100081",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-100081"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/0d515c409033c8e2a645a781be3ca76ab825fc8c",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/0e786123e46d08d2247ce93a5435e45ed9f4c5d1",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/34f0f63dc6dc11895a17bb5672451b6b11622c99",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/96e05a8ce243e2207704e2e7a6e7d1172730f515",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/990d123d9eaa3ac6c979eed245658676d65ce0db",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    }
  ],
  "publishedAt": "2026-11-06T19:17:03.373Z",
  "updatedAt": "2026-11-13T15:17:28.483Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W45"
}
---

# In the Linux kernel, the following vulnerability has been resolved\: xen\-netback\: defer xenvif\_mcast\_addr\_list\_free\(\) In order for the f\.\.\.

- **ID**: CVE\-2026\-100081
- **危険度**: High（重要） (CVSS 7.8)
- **OS**: Linux
- **公開**: 2026-11-06

## 原文

In the Linux kernel, the following vulnerability has been resolved\:
  
xen\-netback\: defer xenvif\_mcast\_addr\_list\_free\(\)
  
In order for the function to legitimately avoid locking/RCU, it needs to  
run after all TX/RX processing has finished/stopped\: Lookups happen from  
xenvif\_start\_xmit\(\), while adds/removes happen from xenvif\_tx\_action\(\)  
\(called out of xenvif\_poll\(\)\)\.
  
Move the call out of xenvif\_disconnect\_data\(\) \(the call to the function  
from connect\(\)'s error path doesn't require any cleaning up there\), and  
put it past the synchronization point in backend\_disconnect\(\)\.
  
This is XSA\-527 / CVE\-2026\-100081\.

## リンク

- [NVD CVE\-2026\-100081](<https://nvd.nist.gov/vuln/detail/CVE-2026-100081>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/0d515c409033c8e2a645a781be3ca76ab825fc8c>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/0e786123e46d08d2247ce93a5435e45ed9f4c5d1>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/34f0f63dc6dc11895a17bb5672451b6b11622c99>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/96e05a8ce243e2207704e2e7a6e7d1172730f515>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/990d123d9eaa3ac6c979eed245658676d65ce0db>)
