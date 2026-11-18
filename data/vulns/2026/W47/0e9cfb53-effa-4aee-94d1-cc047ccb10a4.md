---
{
  "uuid": "0e9cfb53-effa-4aee-94d1-cc047ccb10a4",
  "ids": [
    "CVE-2026-130073"
  ],
  "title": "CBoard before commit 7bd8180 contains a missing authorization vulnerability that allows any authenticated user to reach admin functions b...",
  "summary": "CBoard before commit 7bd8180 contains a missing authorization vulnerability that allows any authenticated user to reach admin functions because AdminController and DashboardController methods bypass AOP role checks. Attackers with no role grants can call deleteUser, deleteRole, getUserList, getAllWidgetList and getAllDatasetList to read query configurations and delete accounts including the administrator.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.3,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-130073",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-130073"
    },
    {
      "kind": "patch",
      "url": "https://github.com/TuiQiao/CBoard/commit/7bd8180d8423a36b29a803433078bd66f94a81ed",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/TuiQiao/CBoard/blob/046914c785eca1c1f91a8887ce36f1c2b34f25f6/src/main/java/org/cboard/controller/AdminController.java#L72-L98",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/TuiQiao/CBoard/blob/046914c785eca1c1f91a8887ce36f1c2b34f25f6/src/main/java/org/cboard/services/role/ConfigRuleService.java#L135-L158",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/TuiQiao/CBoard/issues/740",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/cboard-before-commit-7bd8180-missing-authorization-in-admin-and-dashboard-endpoints",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-16T22:18:22.690Z",
  "updatedAt": "2026-11-17T17:18:03.553Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# CBoard before commit 7bd8180 contains a missing authorization vulnerability that allows any authenticated user to reach admin functions b\.\.\.

- **ID**: CVE\-2026\-130073
- **危険度**: High（重要） (CVSS 8.3)
- **公開**: 2026-11-16

## 原文

CBoard before commit 7bd8180 contains a missing authorization vulnerability that allows any authenticated user to reach admin functions because AdminController and DashboardController methods bypass AOP role checks\. Attackers with no role grants can call deleteUser, deleteRole, getUserList, getAllWidgetList and getAllDatasetList to read query configurations and delete accounts including the administrator\.

## リンク

- [NVD CVE\-2026\-130073](<https://nvd.nist.gov/vuln/detail/CVE-2026-130073>)
- [修正 \(github\.com\)](<https://github.com/TuiQiao/CBoard/commit/7bd8180d8423a36b29a803433078bd66f94a81ed>)
- [github\.com](<https://github.com/TuiQiao/CBoard/blob/046914c785eca1c1f91a8887ce36f1c2b34f25f6/src/main/java/org/cboard/controller/AdminController.java#L72-L98>)
- [github\.com](<https://github.com/TuiQiao/CBoard/blob/046914c785eca1c1f91a8887ce36f1c2b34f25f6/src/main/java/org/cboard/services/role/ConfigRuleService.java#L135-L158>)
- [github\.com](<https://github.com/TuiQiao/CBoard/issues/740>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/cboard-before-commit-7bd8180-missing-authorization-in-admin-and-dashboard-endpoints>)
