---
{
  "uuid": "ed4f5505-9bc7-4b4a-971b-6fef1dfd9bdf",
  "ids": [
    "CVE-2026-135202"
  ],
  "title": "Several plugins for WordPress published by WP connect (Orders Sync to Airtable for WooCommerce, Add-On for Contact Form 7 to Notion, WP S...",
  "summary": "Several plugins for WordPress published by WP connect (Orders Sync to Airtable for WooCommerce, Add-On for Contact Form 7 to Notion, WP Sync for Notion – Notion to WordPress, Add-On for Contact Form 7 to Airtable, Add-on Brevo for Gravity Forms, and Air WP Sync – Airtable to WordPress) contain embedded malicious code (a backdoor) in the versions listed. The affected releases unconditionally load a backdoor module (includes/airwp-online.php) that runs on every request via the 'init' hook and on a half-hourly WP-Cron event, sends site information (site URL, PHP, WordPress and OS versions, and the server user) to a remote command-and-control server at tascredit-pay.com with TLS certificate verification disabled, and executes the PHP code returned by that server via eval(). The module also accepts queued commands that run shell commands, read, write and delete arbitrary files, query arbitrary database tables, dump the users table including password hashes, drop a webshell into the uploads directory, and install persistent hourly code execution. This makes it possible for unauthenticated attackers in control of the remote server, or able to intercept its traffic, to execute arbitrary code on the server and fully compromise affected sites. All affected plugins have been closed on WordPress.org and no patched versions are available; we strongly recommend uninstalling them and running a complete malware scan.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-135202",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-135202"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/add-on-cf7-for-airtable/tags/2.5.4/includes/airwp-online.php#L258",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/add-on-cf7-for-notion/tags/1.6.4/includes/airwp-online.php#L258",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/addon-gravityforms-sendinblue-free/tags/2.6.3/includes/airwp-online.php#L258",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/air-wp-sync/tags/2.9.4/includes/airwp-online.php#L258",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/orders-sync-to-airtable-for-woocommerce/tags/1.0.2/includes/airwp-online.php#L258",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    }
  ],
  "publishedAt": "2026-11-24T06:17:08.080Z",
  "updatedAt": "2026-11-24T06:17:08.197Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# Several plugins for WordPress published by WP connect \(Orders Sync to Airtable for WooCommerce, Add\-On for Contact Form 7 to Notion, WP S\.\.\.

- **ID**: CVE\-2026\-135202
- **危険度**: Critical（緊急） (CVSS 9.8)
- **言語**: PHP
- **公開**: 2026-11-24

## 原文

Several plugins for WordPress published by WP connect \(Orders Sync to Airtable for WooCommerce, Add\-On for Contact Form 7 to Notion, WP Sync for Notion – Notion to WordPress, Add\-On for Contact Form 7 to Airtable, Add\-on Brevo for Gravity Forms, and Air WP Sync – Airtable to WordPress\) contain embedded malicious code \(a backdoor\) in the versions listed\. The affected releases unconditionally load a backdoor module \(includes/airwp\-online\.php\) that runs on every request via the 'init' hook and on a half\-hourly WP\-Cron event, sends site information \(site URL, PHP, WordPress and OS versions, and the server user\) to a remote command\-and\-control server at tascredit\-pay\.com with TLS certificate verification disabled, and executes the PHP code returned by that server via eval\(\)\. The module also accepts queued commands that run shell commands, read, write and delete arbitrary files, query arbitrary database tables, dump the users table including password hashes, drop a webshell into the uploads directory, and install persistent hourly code execution\. This makes it possible for unauthenticated attackers in control of the remote server, or able to intercept its traffic, to execute arbitrary code on the server and fully compromise affected sites\. All affected plugins have been closed on WordPress\.org and no patched versions are available; we strongly recommend uninstalling them and running a complete malware scan\.

## リンク

- [NVD CVE\-2026\-135202](<https://nvd.nist.gov/vuln/detail/CVE-2026-135202>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/add-on-cf7-for-airtable/tags/2.5.4/includes/airwp-online.php#L258>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/add-on-cf7-for-notion/tags/1.6.4/includes/airwp-online.php#L258>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/addon-gravityforms-sendinblue-free/tags/2.6.3/includes/airwp-online.php#L258>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/air-wp-sync/tags/2.9.4/includes/airwp-online.php#L258>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/orders-sync-to-airtable-for-woocommerce/tags/1.0.2/includes/airwp-online.php#L258>)
