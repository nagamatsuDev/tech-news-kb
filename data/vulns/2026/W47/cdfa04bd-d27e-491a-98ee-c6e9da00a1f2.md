---
{
  "uuid": "cdfa04bd-d27e-491a-98ee-c6e9da00a1f2",
  "ids": [
    "CVE-2026-129703"
  ],
  "title": "In the vulnerability-lookup web application, the authentication decorators for feed-key requests (auth_feedkey_func in website/decorators...",
  "summary": "In the vulnerability-lookup web application, the authentication decorators for feed-key requests (auth_feedkey_func in website/decorators.py) and API-key requests (auth_func in website/web/api/v1/common.py) called Flask-Login's login_user() function. This caused the HTTP response to a request authenticated solely by a feed key (supplied as the X-FEED-KEY URL parameter) or an API key (supplied as the X-API-KEY header) to set a session cookie that grants full authenticated access to every page in the application, without requiring a password or two-factor authentication.\n\nThe practical impact is that any party possessing a leaked feed URL (a common occurrence, as feed URLs are shared with RSS readers) or an API key could obtain a valid web session for the associated account. This session provides access to the user's account page, which exposes the API key and other profile data, and for accounts with the administrator role, access to the /admin interface, enabling full administrative control of the application.\n\nThe vulnerability affects all users whose feed key or API key is exposed. No prior authentication, user interaction, or special network conditions are required; a single HTTP request with the token is sufficient to establish the session. The session persists until it expires, and because it is not bound to the original credential (a related CWE-613 issue noted by the developers), revoking the feed key or API key does not invalidate the already-created session.\n\nThe fix replaces the login_user() call with assignment to g._login_user, which Flask-Login's current_user property reads for the current request only, without writing any session cookie. The affected views remain unchanged and continue to see the authenticated user for the single request.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.8,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:N/SC:H/SI:H/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
  "os": [],
  "languages": [
    "Python"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129703",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-129703"
    },
    {
      "kind": "patch",
      "url": "https://github.com/vulnerability-lookup/vulnerability-lookup/commit/3605d5b65d340343cc4b612d40d454afed84302b",
      "host": "github.com",
      "label": "修正 (github.com)"
    }
  ],
  "publishedAt": "2026-11-16T09:17:13.293Z",
  "updatedAt": "2026-11-16T15:17:21.820Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# In the vulnerability\-lookup web application, the authentication decorators for feed\-key requests \(auth\_feedkey\_func in website/decorators\.\.\.

- **ID**: CVE\-2026\-129703
- **危険度**: High（重要） (CVSS 7.8)
- **言語**: Python
- **公開**: 2026-11-16

## 原文

In the vulnerability\-lookup web application, the authentication decorators for feed\-key requests \(auth\_feedkey\_func in website/decorators\.py\) and API\-key requests \(auth\_func in website/web/api/v1/common\.py\) called Flask\-Login's login\_user\(\) function\. This caused the HTTP response to a request authenticated solely by a feed key \(supplied as the X\-FEED\-KEY URL parameter\) or an API key \(supplied as the X\-API\-KEY header\) to set a session cookie that grants full authenticated access to every page in the application, without requiring a password or two\-factor authentication\.
  
The practical impact is that any party possessing a leaked feed URL \(a common occurrence, as feed URLs are shared with RSS readers\) or an API key could obtain a valid web session for the associated account\. This session provides access to the user's account page, which exposes the API key and other profile data, and for accounts with the administrator role, access to the /admin interface, enabling full administrative control of the application\.
  
The vulnerability affects all users whose feed key or API key is exposed\. No prior authentication, user interaction, or special network conditions are required; a single HTTP request with the token is sufficient to establish the session\. The session persists until it expires, and because it is not bound to the original credential \(a related CWE\-613 issue noted by the developers\), revoking the feed key or API key does not invalidate the already\-created session\.
  
The fix replaces the login\_user\(\) call with assignment to g\.\_login\_user, which Flask\-Login's current\_user property reads for the current request only, without writing any session cookie\. The affected views remain unchanged and continue to see the authenticated user for the single request\.

## リンク

- [NVD CVE\-2026\-129703](<https://nvd.nist.gov/vuln/detail/CVE-2026-129703>)
- [修正 \(github\.com\)](<https://github.com/vulnerability-lookup/vulnerability-lookup/commit/3605d5b65d340343cc4b612d40d454afed84302b>)
