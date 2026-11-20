---
{
  "uuid": "7f254bdf-0a2e-4caf-8fb3-80fe9ecc4bbf",
  "ids": [
    "CVE-2026-109555"
  ],
  "title": "The WP STAGING and WP STAGING Pro plugins for WordPress are vulnerable to PHP Object Injection in all versions up to, and including, 4.17...",
  "summary": "The WP STAGING and WP STAGING Pro plugins for WordPress are vulnerable to PHP Object Injection in all versions up to, and including, 4.17.0 and 6.17.0, respectively, via deserialization of untrusted input during database restore and staging reset. This is due to the database importer treating attacker-controlled text beginning with {WPSTG_BINARY} as trusted internal binary data and decoding its hexadecimal suffix into serialized bytes. This makes it possible for authenticated attackers, with Subscriber-level access and above, to plant a malicious serialized object in their own profile. When an Administrator later performs an ordinary database-including restore or staging reset containing that value, and the restored profile metadata is loaded, either during the restore or in a later request, a built-in POP chain can be used to execute arbitrary code on the server. Additional built-in gadget chains allow arbitrary local file read in both WP STAGING and WP STAGING Pro and arbitrary file deletion in WP STAGING Pro. The attacker does not require Administrator credentials or a copy of a backup, but exploitation does require the later privileged restore or reset.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-109555",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-109555"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/changeset/3753692/wp-staging",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://wp-staging.com/wp-staging-pro-changelog/",
      "host": "wp-staging.com",
      "label": "wp-staging.com"
    },
    {
      "kind": "reference",
      "url": "https://www.wordfence.com/threat-intel/vulnerabilities/id/bf4d6205-3653-4678-86e0-4303a736bb72?source=cve",
      "host": "www.wordfence.com",
      "label": "www.wordfence.com"
    }
  ],
  "publishedAt": "2026-11-19T06:16:52.890Z",
  "updatedAt": "2026-11-19T16:18:30.187Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# The WP STAGING and WP STAGING Pro plugins for WordPress are vulnerable to PHP Object Injection in all versions up to, and including, 4\.17\.\.\.

- **ID**: CVE\-2026\-109555
- **危険度**: High（重要） (CVSS 8.0)
- **言語**: PHP
- **公開**: 2026-11-19

## 原文

The WP STAGING and WP STAGING Pro plugins for WordPress are vulnerable to PHP Object Injection in all versions up to, and including, 4\.17\.0 and 6\.17\.0, respectively, via deserialization of untrusted input during database restore and staging reset\. This is due to the database importer treating attacker\-controlled text beginning with \{WPSTG\_BINARY\} as trusted internal binary data and decoding its hexadecimal suffix into serialized bytes\. This makes it possible for authenticated attackers, with Subscriber\-level access and above, to plant a malicious serialized object in their own profile\. When an Administrator later performs an ordinary database\-including restore or staging reset containing that value, and the restored profile metadata is loaded, either during the restore or in a later request, a built\-in POP chain can be used to execute arbitrary code on the server\. Additional built\-in gadget chains allow arbitrary local file read in both WP STAGING and WP STAGING Pro and arbitrary file deletion in WP STAGING Pro\. The attacker does not require Administrator credentials or a copy of a backup, but exploitation does require the later privileged restore or reset\.

## リンク

- [NVD CVE\-2026\-109555](<https://nvd.nist.gov/vuln/detail/CVE-2026-109555>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/changeset/3753692/wp-staging>)
- [wp\-staging\.com](<https://wp-staging.com/wp-staging-pro-changelog/>)
- [www\.wordfence\.com](<https://www.wordfence.com/threat-intel/vulnerabilities/id/bf4d6205-3653-4678-86e0-4303a736bb72?source=cve>)
