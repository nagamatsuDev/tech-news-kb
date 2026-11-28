---
{
  "uuid": "c4236ec2-cb88-46ed-acd1-3bdbab4ecef1",
  "ids": [
    "CVE-2026-136995"
  ],
  "title": "The Upsell Funnel Builder for WooCommerce – Create Upsells, Cross-Sells, Order Bumps, Frequently Bought, and Popups.",
  "summary": "The Upsell Funnel Builder for WooCommerce – Create Upsells, Cross-Sells, Order Bumps, Frequently Bought, and Popups. plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the 'form_data' parameter in all versions up to, and including, 3.1.7 due to insufficient input sanitization and output escaping. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page. The nonce gating the vulnerable AJAX endpoint is publicly emitted to any visitor loading a cart, checkout, or shortcode page, making the endpoint fully exploitable by unauthenticated attackers without any prior account or login.",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-136995",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-136995"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/includes/class-upsell-order-bump-offer-for-woocommerce.php#L368",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/public/class-upsell-order-bump-offer-for-woocommerce-public.php#L1622",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/public/class-upsell-order-bump-offer-for-woocommerce-public.php#L1656",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/public/class-upsell-order-bump-offer-for-woocommerce-public.php#L213",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    },
    {
      "kind": "reference",
      "url": "https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/public/class-upsell-order-bump-offer-for-woocommerce-public.php#L503",
      "host": "plugins.trac.wordpress.org",
      "label": "plugins.trac.wordpress.org"
    }
  ],
  "publishedAt": "2026-11-27T05:19:01.603Z",
  "updatedAt": "2026-11-27T05:19:01.777Z",
  "firstSeenAt": "2026-11-28T04:29:51.467Z",
  "week": "2026-W48"
}
---

# The Upsell Funnel Builder for WooCommerce – Create Upsells, Cross\-Sells, Order Bumps, Frequently Bought, and Popups\.

- **ID**: CVE\-2026\-136995
- **危険度**: High（重要） (CVSS 7.2)
- **言語**: PHP
- **公開**: 2026-11-27

## 原文

The Upsell Funnel Builder for WooCommerce – Create Upsells, Cross\-Sells, Order Bumps, Frequently Bought, and Popups\. plugin for WordPress is vulnerable to Stored Cross\-Site Scripting via the 'form\_data' parameter in all versions up to, and including, 3\.1\.7 due to insufficient input sanitization and output escaping\. This makes it possible for unauthenticated attackers to inject arbitrary web scripts in pages that will execute whenever a user accesses an injected page\. The nonce gating the vulnerable AJAX endpoint is publicly emitted to any visitor loading a cart, checkout, or shortcode page, making the endpoint fully exploitable by unauthenticated attackers without any prior account or login\.

## リンク

- [NVD CVE\-2026\-136995](<https://nvd.nist.gov/vuln/detail/CVE-2026-136995>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/includes/class-upsell-order-bump-offer-for-woocommerce.php#L368>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/public/class-upsell-order-bump-offer-for-woocommerce-public.php#L1622>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/public/class-upsell-order-bump-offer-for-woocommerce-public.php#L1656>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/public/class-upsell-order-bump-offer-for-woocommerce-public.php#L213>)
- [plugins\.trac\.wordpress\.org](<https://plugins.trac.wordpress.org/browser/upsell-order-bump-offer-for-woocommerce/tags/3.1.7/public/class-upsell-order-bump-offer-for-woocommerce-public.php#L503>)
