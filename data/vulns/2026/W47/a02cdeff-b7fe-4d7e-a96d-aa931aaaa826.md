---
{
  "uuid": "a02cdeff-b7fe-4d7e-a96d-aa931aaaa826",
  "ids": [
    "CVE-2026-119114"
  ],
  "title": "The WP Fastest Cache – WordPress Cache Plugin plugin for WordPress is vulnerable to arbitrary directory deletion due to insufficient file...",
  "summary": "The WP Fastest Cache – WordPress Cache Plugin plugin for WordPress is vulnerable to arbitrary directory deletion due to insufficient file path validation in the singleDeleteCache function in all versions up to, and including, 1.5.4 This makes it possible for unauthenticated attackers to delete arbitrary files on the server, which can easily lead to remote code execution when the right file is deleted (such as wp-config.php). Successful exploitation requires either the Custom Permalinks plugin or the GeoDirectory plugin to be co-installed, as these provide the necessary mechanism to write a traversal-bearing permalink value into the database that WP Fastest Cache then consumes without validation.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.4,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-119114",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-119114"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1389",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1501",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1517",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1627",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1718",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    }
  ],
  "publishedAt": "2026-11-21T10:16:50.800Z",
  "updatedAt": "2026-11-23T19:17:30.213Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# The WP Fastest Cache – WordPress Cache Plugin plugin for WordPress is vulnerable to arbitrary directory deletion due to insufficient file\.\.\.

- **ID**: CVE\-2026\-119114
- **危険度**: High（重要） (CVSS 7.4)
- **言語**: PHP
- **公開**: 2026-11-21

## 原文

The WP Fastest Cache – WordPress Cache Plugin plugin for WordPress is vulnerable to arbitrary directory deletion due to insufficient file path validation in the singleDeleteCache function in all versions up to, and including, 1\.5\.4 This makes it possible for unauthenticated attackers to delete arbitrary files on the server, which can easily lead to remote code execution when the right file is deleted \(such as wp\-config\.php\)\. Successful exploitation requires either the Custom Permalinks plugin or the GeoDirectory plugin to be co\-installed, as these provide the necessary mechanism to write a traversal\-bearing permalink value into the database that WP Fastest Cache then consumes without validation\.

## リンク

- [NVD CVE\-2026\-119114](<https://nvd.nist.gov/vuln/detail/CVE-2026-119114>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1389>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1501>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1517>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1627>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/wp-fastest-cache/tags/1.5.3/wpFastestCache.php#L1718>)
