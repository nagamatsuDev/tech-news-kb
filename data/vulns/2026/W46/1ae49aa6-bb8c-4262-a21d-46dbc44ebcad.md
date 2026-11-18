---
{
  "uuid": "1ae49aa6-bb8c-4262-a21d-46dbc44ebcad",
  "ids": [
    "CVE-2026-124688"
  ],
  "title": "In Progress® Kendo® UI for jQuery prior to 2026.4.1111 the TabStrip, PanelBar, and Menu widgets support mapping a dataSource field to `sp...",
  "summary": "In Progress® Kendo® UI for jQuery prior to 2026.4.1111 the TabStrip, PanelBar, and Menu widgets support mapping a dataSource field to `spriteCssClass`. If an attacker can control the mapped data, they can break out of the attribute and inject markup, including event-handler attributes. The resulting JavaScript executes in the application's origin when a victim loads a page that renders the affected widget, allowing access to data and actions available in the victim's authenticated session.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
  "os": [],
  "languages": [
    "JavaScript/TypeScript"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124688",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-124688"
    },
    {
      "kind": "reference",
      "url": "https://www.telerik.com/kendo-jquery-ui/documentation/knowledge-base/kb-security-tabstrip-panelbar-menu-spritecssclass-xss-cve-2026-124688",
      "host": "www.telerik.com",
      "label": "www.telerik.com"
    }
  ],
  "publishedAt": "2026-11-11T17:17:17.783Z",
  "updatedAt": "2026-11-17T15:17:34.407Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W46"
}
---

# In Progress® Kendo® UI for jQuery prior to 2026\.4\.1111 the TabStrip, PanelBar, and Menu widgets support mapping a dataSource field to \`sp\.\.\.

- **ID**: CVE\-2026\-124688
- **危険度**: High（重要） (CVSS 7.1)
- **言語**: JavaScript/TypeScript
- **公開**: 2026-11-11

## 原文

In Progress® Kendo® UI for jQuery prior to 2026\.4\.1111 the TabStrip, PanelBar, and Menu widgets support mapping a dataSource field to \`spriteCssClass\`\. If an attacker can control the mapped data, they can break out of the attribute and inject markup, including event\-handler attributes\. The resulting JavaScript executes in the application's origin when a victim loads a page that renders the affected widget, allowing access to data and actions available in the victim's authenticated session\.

## リンク

- [NVD CVE\-2026\-124688](<https://nvd.nist.gov/vuln/detail/CVE-2026-124688>)
- [www\.telerik\.com](<https://www.telerik.com/kendo-jquery-ui/documentation/knowledge-base/kb-security-tabstrip-panelbar-menu-spritecssclass-xss-cve-2026-124688>)
