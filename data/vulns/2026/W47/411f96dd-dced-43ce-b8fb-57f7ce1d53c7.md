---
{
  "uuid": "411f96dd-dced-43ce-b8fb-57f7ce1d53c7",
  "ids": [
    "CVE-2026-116619"
  ],
  "title": "The MetForm – Contact Form, Survey, Quiz, Conditional Forms, Form Templates & Custom Form Builder for Elementor plugin for WordPress is v...",
  "summary": "The MetForm – Contact Form, Survey, Quiz, Conditional Forms, Form Templates & Custom Form Builder for Elementor plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'mf-te (the form-builder-chosen name of the Text Editor field)' parameter in all versions up to, and including, 4.3.3 due to insufficient input sanitization and output escaping. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page. Successful exploitation requires a published form containing a Text Editor block; the form's public markup exposes the submission nonce as data-form-nonce, allowing any unauthenticated visitor to satisfy the only submission barrier and store the malicious payload.",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116619",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-116619"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/base/api.php#L28",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/core/entries/action.php#L1128",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/core/entries/api.php#L29",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/core/entries/form-data.php#L228",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/core/entries/form-data.php#L434",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    }
  ],
  "publishedAt": "2026-11-21T08:16:37.610Z",
  "updatedAt": "2026-11-23T17:17:28.873Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# The MetForm – Contact Form, Survey, Quiz, Conditional Forms, Form Templates &amp; Custom Form Builder for Elementor plugin for WordPress is v\.\.\.

- **ID**: CVE\-2026\-116619
- **危険度**: High（重要） (CVSS 7.2)
- **言語**: PHP
- **公開**: 2026-11-21

## 原文

The MetForm – Contact Form, Survey, Quiz, Conditional Forms, Form Templates &amp; Custom Form Builder for Elementor plugin for WordPress is vulnerable to Stored Cross\-Site Scripting via the 'mf\-te \(the form\-builder\-chosen name of the Text Editor field\)' parameter in all versions up to, and including, 4\.3\.3 due to insufficient input sanitization and output escaping\. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page\. Successful exploitation requires a published form containing a Text Editor block; the form's public markup exposes the submission nonce as data\-form\-nonce, allowing any unauthenticated visitor to satisfy the only submission barrier and store the malicious payload\.

## リンク

- [NVD CVE\-2026\-116619](<https://nvd.nist.gov/vuln/detail/CVE-2026-116619>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/base/api.php#L28>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/core/entries/action.php#L1128>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/core/entries/api.php#L29>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/core/entries/form-data.php#L228>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/metform/tags/4.3.3/core/entries/form-data.php#L434>)
