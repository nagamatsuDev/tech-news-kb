---
{
  "uuid": "e61ab0f0-0a2b-4e0e-b376-ad6f41fffb4b",
  "ids": [
    "CVE-2026-101352"
  ],
  "title": "A document can carry its own user interface customizations, such as keyboard shortcuts, menus and toolbars, which take effect while the d...",
  "summary": "A document can carry its own user interface customizations, such as keyboard shortcuts, menus and toolbars, which take effect while the document is open. A command bound in these customizations could run a macro or a script even when the macro security settings did not allow the macros of the document, so a user who pressed a shortcut or chose a menu item in a crafted document could run code without any warning. In fixed versions the customizations of a document are treated like its other macro content, and the macro and script commands in them are only kept when the macros of the document are allowed.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.5,
  "cvssVector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:P/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-101352",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-101352"
    },
    {
      "kind": "reference",
      "url": "https://www.libreoffice.org/about-us/security/advisories/cve-2026-101352",
      "host": "www.libreoffice.org",
      "label": "www.libreoffice.org"
    }
  ],
  "publishedAt": "2026-11-16T17:17:26.620Z",
  "updatedAt": "2026-11-17T05:18:27.783Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# A document can carry its own user interface customizations, such as keyboard shortcuts, menus and toolbars, which take effect while the d\.\.\.

- **ID**: CVE\-2026\-101352
- **危険度**: High（重要） (CVSS 8.5)
- **公開**: 2026-11-16

## 原文

A document can carry its own user interface customizations, such as keyboard shortcuts, menus and toolbars, which take effect while the document is open\. A command bound in these customizations could run a macro or a script even when the macro security settings did not allow the macros of the document, so a user who pressed a shortcut or chose a menu item in a crafted document could run code without any warning\. In fixed versions the customizations of a document are treated like its other macro content, and the macro and script commands in them are only kept when the macros of the document are allowed\.

## リンク

- [NVD CVE\-2026\-101352](<https://nvd.nist.gov/vuln/detail/CVE-2026-101352>)
- [www\.libreoffice\.org](<https://www.libreoffice.org/about-us/security/advisories/cve-2026-101352>)
