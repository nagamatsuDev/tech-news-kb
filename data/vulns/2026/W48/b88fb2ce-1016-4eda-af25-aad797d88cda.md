---
{
  "uuid": "b88fb2ce-1016-4eda-af25-aad797d88cda",
  "ids": [
    "CVE-2026-126717"
  ],
  "title": "The Translate WordPress with Weglot 2.0 – Multilingual AI Translation plugin for WordPress is vulnerable to Stored Cross-Site Scripting v...",
  "summary": "The Translate WordPress with Weglot 2.0 – Multilingual AI Translation plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'comment' parameter in all versions up to, and including, 6.4.3 due to insufficient input sanitization and output escaping. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page. Successful exploitation requires the target site to permit anonymous comment posting (comment_registration disabled) and have at least one Weglot destination language active; on sites with comment moderation enabled, an administrator must approve the carrier and trigger comments before the injected script executes for subsequent visitors.",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126717",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126717"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/src/services/class-translate-service-weglot.php#L167",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/src/services/class-translate-service-weglot.php#L81",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/vendor/weglot/simplehtmldom/src/simple_html_dom.php#L1657",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/vendor/weglot/simplehtmldom/src/simple_html_dom.php#L1792",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/vendor/weglot/simplehtmldom/src/simple_html_dom.php#L488",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    }
  ],
  "publishedAt": "2026-11-27T02:16:44.237Z",
  "updatedAt": "2026-11-27T17:17:37.410Z",
  "firstSeenAt": "2026-11-27T04:45:50.968Z",
  "week": "2026-W48"
}
---

# The Translate WordPress with Weglot 2\.0 – Multilingual AI Translation plugin for WordPress is vulnerable to Stored Cross\-Site Scripting v\.\.\.

- **ID**: CVE\-2026\-126717
- **危険度**: High（重要） (CVSS 7.2)
- **言語**: PHP
- **公開**: 2026-11-27

## 原文

The Translate WordPress with Weglot 2\.0 – Multilingual AI Translation plugin for WordPress is vulnerable to Stored Cross\-Site Scripting via the 'comment' parameter in all versions up to, and including, 6\.4\.3 due to insufficient input sanitization and output escaping\. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page\. Successful exploitation requires the target site to permit anonymous comment posting \(comment\_registration disabled\) and have at least one Weglot destination language active; on sites with comment moderation enabled, an administrator must approve the carrier and trigger comments before the injected script executes for subsequent visitors\.

## リンク

- [NVD CVE\-2026\-126717](<https://nvd.nist.gov/vuln/detail/CVE-2026-126717>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/src/services/class-translate-service-weglot.php#L167>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/src/services/class-translate-service-weglot.php#L81>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/vendor/weglot/simplehtmldom/src/simple_html_dom.php#L1657>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/vendor/weglot/simplehtmldom/src/simple_html_dom.php#L1792>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/weglot/tags/6.4.3/vendor/weglot/simplehtmldom/src/simple_html_dom.php#L488>)
