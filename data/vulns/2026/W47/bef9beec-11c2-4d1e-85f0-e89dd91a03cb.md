---
{
  "uuid": "bef9beec-11c2-4d1e-85f0-e89dd91a03cb",
  "ids": [
    "CVE-2026-120529"
  ],
  "title": "The Admin Columns plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'HTTP_USER_AGENT' parameter in all versions u...",
  "summary": "The Admin Columns plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'HTTP_USER_AGENT' parameter in all versions up to, and including, 7.1.7 due to insufficient input sanitization and output escaping. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page. The kses sanitization pass in classes/Sanitize/Kses.php uses wp_kses_allowed_html('post') augmented with iframe[src] and the data: protocol; because wp_kses_attr_check accepts any data-* attribute on any allowed tag without inspecting its value, a payload embedded inside a data-ac-tip attribute survives intact and is subsequently assigned to innerHTML by assets/js/table.js, bypassing the apparent mitigation entirely.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.2,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:L/A:N",
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
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-120529",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-120529"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/assets/js/table.js",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/classes/ColumnFactory/Comment/AgentFactory.php#L27",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/classes/Formatter/ColumnFilter.php#L37",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/classes/Formatter/Comment/Property.php#L23",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/classes/Sanitize/Kses.php#L11",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    }
  ],
  "publishedAt": "2026-11-21T08:16:38.377Z",
  "updatedAt": "2026-11-23T17:17:29.877Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# The Admin Columns plugin for WordPress is vulnerable to Stored Cross\-Site Scripting via the 'HTTP\_USER\_AGENT' parameter in all versions u\.\.\.

- **ID**: CVE\-2026\-120529
- **危険度**: High（重要） (CVSS 7.2)
- **言語**: PHP
- **公開**: 2026-11-21

## 原文

The Admin Columns plugin for WordPress is vulnerable to Stored Cross\-Site Scripting via the 'HTTP\_USER\_AGENT' parameter in all versions up to, and including, 7\.1\.7 due to insufficient input sanitization and output escaping\. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page\. The kses sanitization pass in classes/Sanitize/Kses\.php uses wp\_kses\_allowed\_html\('post'\) augmented with iframe\[src\] and the data\: protocol; because wp\_kses\_attr\_check accepts any data\-\* attribute on any allowed tag without inspecting its value, a payload embedded inside a data\-ac\-tip attribute survives intact and is subsequently assigned to innerHTML by assets/js/table\.js, bypassing the apparent mitigation entirely\.

## リンク

- [NVD CVE\-2026\-120529](<https://nvd.nist.gov/vuln/detail/CVE-2026-120529>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/assets/js/table.js>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/classes/ColumnFactory/Comment/AgentFactory.php#L27>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/classes/Formatter/ColumnFilter.php#L37>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/classes/Formatter/Comment/Property.php#L23>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/codepress-admin-columns/tags/7.1.7/classes/Sanitize/Kses.php#L11>)
