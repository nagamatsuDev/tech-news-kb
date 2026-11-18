---
{
  "uuid": "14c12d2c-4c4d-4d7f-b45c-0cafe5ebb6fb",
  "ids": [
    "CVE-2026-130851"
  ],
  "title": "wishthis through 1.2.3 contains an authorization bypass vulnerability in User::ownsWishlist() that allows authenticated users to modify o...",
  "summary": "wishthis through 1.2.3 contains an authorization bypass vulnerability in User::ownsWishlist() that allows authenticated users to modify other users' wishes and wishlists. Attackers can supply sequential wish_id and wishlist_id values to the wishes and wishlists API handlers to edit wishes, add wishes, or rename and delete wishlists.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:L",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-130851",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-130851"
    },
    {
      "kind": "patch",
      "url": "https://github.com/wishthis/wishthis/commit/6798ada87f821bc955cda15e4412e84143dbcb85",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/wishthis/wishthis/blob/v1.2.3/src/api/wishlists.php#L223-L265",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/wishthis/wishthis/blob/v1.2.3/src/classes/wishthis/User.php#L317-L332",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/wishthis/wishthis/issues/244",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/wishthis-through-1.2.3-authorization-bypass-via-ownswishlist-ownership-check",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-17T20:17:50.437Z",
  "updatedAt": "2026-11-17T23:17:53.900Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W47"
}
---

# wishthis through 1\.2\.3 contains an authorization bypass vulnerability in User\:\:ownsWishlist\(\) that allows authenticated users to modify o\.\.\.

- **ID**: CVE\-2026\-130851
- **危険度**: High（重要） (CVSS 7.1)
- **公開**: 2026-11-17

## 原文

wishthis through 1\.2\.3 contains an authorization bypass vulnerability in User\:\:ownsWishlist\(\) that allows authenticated users to modify other users' wishes and wishlists\. Attackers can supply sequential wish\_id and wishlist\_id values to the wishes and wishlists API handlers to edit wishes, add wishes, or rename and delete wishlists\.

## リンク

- [NVD CVE\-2026\-130851](<https://nvd.nist.gov/vuln/detail/CVE-2026-130851>)
- [修正 \(github\.com\)](<https://github.com/wishthis/wishthis/commit/6798ada87f821bc955cda15e4412e84143dbcb85>)
- [github\.com](<https://github.com/wishthis/wishthis/blob/v1.2.3/src/api/wishlists.php#L223-L265>)
- [github\.com](<https://github.com/wishthis/wishthis/blob/v1.2.3/src/classes/wishthis/User.php#L317-L332>)
- [github\.com](<https://github.com/wishthis/wishthis/issues/244>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/wishthis-through-1.2.3-authorization-bypass-via-ownswishlist-ownership-check>)
