---
{
  "uuid": "c6ef6cf2-6ec4-40b3-adc3-6afd8dd064ca",
  "ids": [
    "CVE-2026-123813"
  ],
  "title": "pyLoad is a free and open-source download manager written in Python.",
  "summary": "pyLoad is a free and open-source download manager written in Python. Prior to 0.5.0b3.dev102, pyLoad does not invalidate existing Flask sessions when an administrator changes a user's permissions or password through /api/set_user_permission or /api/change_password. Api.set_user_permission and Api.change_password update the database, but session authorization continues to use role and permission values copied at login by set_session in webui/app/helpers.py. A user can therefore retain revoked privileges or continue using a session established with an old password for the configured session lifetime. API-key authentication is not affected because that path rereads user data from the database. This issue is fixed in version 0.5.0b3.dev102.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H",
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
      "kind": "vendor",
      "url": "https://github.com/pyload/pyload/security/advisories/GHSA-jq7h-wrvp-3rgx",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123813",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-123813"
    },
    {
      "kind": "patch",
      "url": "https://github.com/pyload/pyload/commit/3e726ba271a6b1015e3a0ea6dc7e46a8f71a62ad",
      "host": "github.com",
      "label": "修正 (github.com)"
    }
  ],
  "publishedAt": "2026-11-09T22:18:37.587Z",
  "updatedAt": "2026-11-14T03:17:23.610Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# pyLoad is a free and open\-source download manager written in Python\.

- **ID**: CVE\-2026\-123813
- **危険度**: High（重要） (CVSS 7.5)
- **言語**: Python
- **公開**: 2026-11-09

## 原文

pyLoad is a free and open\-source download manager written in Python\. Prior to 0\.5\.0b3\.dev102, pyLoad does not invalidate existing Flask sessions when an administrator changes a user's permissions or password through /api/set\_user\_permission or /api/change\_password\. Api\.set\_user\_permission and Api\.change\_password update the database, but session authorization continues to use role and permission values copied at login by set\_session in webui/app/helpers\.py\. A user can therefore retain revoked privileges or continue using a session established with an old password for the configured session lifetime\. API\-key authentication is not affected because that path rereads user data from the database\. This issue is fixed in version 0\.5\.0b3\.dev102\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/pyload/pyload/security/advisories/GHSA-jq7h-wrvp-3rgx>)
- [NVD CVE\-2026\-123813](<https://nvd.nist.gov/vuln/detail/CVE-2026-123813>)
- [修正 \(github\.com\)](<https://github.com/pyload/pyload/commit/3e726ba271a6b1015e3a0ea6dc7e46a8f71a62ad>)
