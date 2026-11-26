---
{
  "uuid": "08bfcbad-af82-4f7d-8838-ab20a972fcce",
  "ids": [
    "CVE-2026-105609"
  ],
  "title": "In Eclipse Che versions 7.61.0 through 7.124.0 three related defects in the SCM-OAuth flow, chain into a Medium-severity finding:\n\n\n\n1.",
  "summary": "In Eclipse Che versions 7.61.0 through 7.124.0 three related defects in the SCM-OAuth flow, chain into a Medium-severity finding:\n\n\n\n1. Open redirect (CWE-601) — `EmbeddedOAuthAPI.callback()` and the OAuth1 callback issue `307 Temporary Redirect` to whatever URL was carried in the `redirect_after_login` field of the OAuth `state` parameter. The value is fully attacker-controlled and never compared against an allow-list of permitted hosts.\n\n\n\n2. Missing CSRF nonce in OAuth `state` (CWE-352) — `OAuthAuthenticator.prepareState()` builds the `state` parameter solely by URL-encoding the original request's query string. No random nonce is bound to the user's session, so an attacker can pre-compute a callback URL carrying _their own_ SCM authorization `code` and have a logged-in victim open it. `callback()` then stores the attacker's SCM token under the victim's Che identity (`personalAccessTokenManager.store(...)`).\n\n\n\n3. Mutable field on a `@Singleton` (CWE-362 / CWE-488) — `EmbeddedOAuthAPI` is `@Singleton` but stores the per-request `redirect_after_login` value into the instance field `private String redirectAfterLogin`. Any user's `authenticate()` call overwrites the field for all concurrent users; the `access_denied` error-path of `callback()` then redirects to the _last writer's_ URL.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.3,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:H/VI:N/VA:N/SC:H/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-105609",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-105609"
    },
    {
      "kind": "reference",
      "url": "https://gitlab.eclipse.org/security/cve-assignment/-/work_items/363",
      "host": "gitlab.eclipse.org",
      "label": "gitlab.eclipse.org"
    },
    {
      "kind": "reference",
      "url": "https://gitlab.eclipse.org/security/vulnerability-reports/-/work_items/1128",
      "host": "gitlab.eclipse.org",
      "label": "gitlab.eclipse.org"
    },
    {
      "kind": "reference",
      "url": "https://redhat.atlassian.net/browse/CRW-13151",
      "host": "redhat.atlassian.net",
      "label": "redhat.atlassian.net"
    }
  ],
  "publishedAt": "2026-11-25T11:17:06.773Z",
  "updatedAt": "2026-11-25T17:17:31.663Z",
  "firstSeenAt": "2026-11-26T04:41:30.937Z",
  "week": "2026-W48"
}
---

# In Eclipse Che versions 7\.61\.0 through 7\.124\.0 three related defects in the SCM\-OAuth flow, chain into a Medium\-severity finding\: 1\.

- **ID**: CVE\-2026\-105609
- **危険度**: High（重要） (CVSS 8.3)
- **公開**: 2026-11-25

## 原文

In Eclipse Che versions 7\.61\.0 through 7\.124\.0 three related defects in the SCM\-OAuth flow, chain into a Medium\-severity finding\:
  
1\. Open redirect \(CWE\-601\) — \`EmbeddedOAuthAPI\.callback\(\)\` and the OAuth1 callback issue \`307 Temporary Redirect\` to whatever URL was carried in the \`redirect\_after\_login\` field of the OAuth \`state\` parameter\. The value is fully attacker\-controlled and never compared against an allow\-list of permitted hosts\.
  
2\. Missing CSRF nonce in OAuth \`state\` \(CWE\-352\) — \`OAuthAuthenticator\.prepareState\(\)\` builds the \`state\` parameter solely by URL\-encoding the original request's query string\. No random nonce is bound to the user's session, so an attacker can pre\-compute a callback URL carrying \_their own\_ SCM authorization \`code\` and have a logged\-in victim open it\. \`callback\(\)\` then stores the attacker's SCM token under the victim's Che identity \(\`personalAccessTokenManager\.store\(\.\.\.\)\`\)\.
  
3\. Mutable field on a \`@Singleton\` \(CWE\-362 / CWE\-488\) — \`EmbeddedOAuthAPI\` is \`@Singleton\` but stores the per\-request \`redirect\_after\_login\` value into the instance field \`private String redirectAfterLogin\`\. Any user's \`authenticate\(\)\` call overwrites the field for all concurrent users; the \`access\_denied\` error\-path of \`callback\(\)\` then redirects to the \_last writer's\_ URL\.

## リンク

- [NVD CVE\-2026\-105609](<https://nvd.nist.gov/vuln/detail/CVE-2026-105609>)
- [gitlab\.eclipse\.org](<https://gitlab.eclipse.org/security/cve-assignment/-/work_items/363>)
- [gitlab\.eclipse\.org](<https://gitlab.eclipse.org/security/vulnerability-reports/-/work_items/1128>)
- [redhat\.atlassian\.net](<https://redhat.atlassian.net/browse/CRW-13151>)
