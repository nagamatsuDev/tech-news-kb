---
{
  "uuid": "aab1cba4-8ade-4031-8cd2-bd4071f5eac1",
  "ids": [
    "CVE-2026-125033"
  ],
  "title": "The Smash Balloon Social Post Feed – Simple Social Feeds for WordPress plugin for WordPress is vulnerable to Stored Cross-Site Scripting ...",
  "summary": "The Smash Balloon Social Post Feed – Simple Social Feeds for WordPress plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'attachments.data[].description' parameter in all versions up to, and including, 4.15.1 due to insufficient input sanitization and output escaping. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page. This makes it possible for unauthenticated outside Facebook users — any party able to contribute an attachment description to a post ingested by the configured feed (visitor posts, shared posts, or attached content) — to plant payloads that execute against every anonymous visitor of any WordPress page carrying the shortcode, requiring no WordPress account whatsoever.",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125033",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-125033"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/custom-facebook-feed/tags/4.15.1/inc/CFF_Shortcode.php#L1032",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/custom-facebook-feed/tags/4.15.1/inc/CFF_Shortcode.php#L1987",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/custom-facebook-feed/tags/4.15.1/inc/CFF_Utils.php#L170",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/custom-facebook-feed/tags/4.15.1/templates/item/post-text.php#L33",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/changeset?reponame=&new=3799153%40custom-facebook-feed%2Ftags%2F4.16.0&old=3779993%40custom-facebook-feed%2Ftags%2F4.15.1",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    }
  ],
  "publishedAt": "2026-11-18T13:17:24.860Z",
  "updatedAt": "2026-11-18T14:17:29.910Z",
  "firstSeenAt": "2026-11-19T03:57:45.838Z",
  "week": "2026-W47"
}
---

# The Smash Balloon Social Post Feed – Simple Social Feeds for WordPress plugin for WordPress is vulnerable to Stored Cross\-Site Scripting \.\.\.

- **ID**: CVE\-2026\-125033
- **危険度**: High（重要） (CVSS 7.2)
- **言語**: PHP
- **公開**: 2026-11-18

## 原文

The Smash Balloon Social Post Feed – Simple Social Feeds for WordPress plugin for WordPress is vulnerable to Stored Cross\-Site Scripting via the 'attachments\.data\[\]\.description' parameter in all versions up to, and including, 4\.15\.1 due to insufficient input sanitization and output escaping\. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page\. This makes it possible for unauthenticated outside Facebook users — any party able to contribute an attachment description to a post ingested by the configured feed \(visitor posts, shared posts, or attached content\) — to plant payloads that execute against every anonymous visitor of any WordPress page carrying the shortcode, requiring no WordPress account whatsoever\.

## リンク

- [NVD CVE\-2026\-125033](<https://nvd.nist.gov/vuln/detail/CVE-2026-125033>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/custom-facebook-feed/tags/4.15.1/inc/CFF_Shortcode.php#L1032>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/custom-facebook-feed/tags/4.15.1/inc/CFF_Shortcode.php#L1987>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/custom-facebook-feed/tags/4.15.1/inc/CFF_Utils.php#L170>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/custom-facebook-feed/tags/4.15.1/templates/item/post-text.php#L33>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/changeset?reponame=&new=3799153%40custom-facebook-feed%2Ftags%2F4.16.0&old=3779993%40custom-facebook-feed%2Ftags%2F4.15.1>)
