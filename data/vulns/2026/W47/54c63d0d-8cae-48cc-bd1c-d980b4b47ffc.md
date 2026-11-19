---
{
  "uuid": "54c63d0d-8cae-48cc-bd1c-d980b4b47ffc",
  "ids": [
    "CVE-2026-73968"
  ],
  "title": "AnsibleForms is a self-hosted web application that turns automation into self-service forms.",
  "summary": "AnsibleForms is a self-hosted web application that turns automation into self-service forms. Prior to 6.2.1, AnsibleForms allows a user with repository management privileges to inject shell syntax through repository uri, branch, name, or host values processed by server/src/models/repo.model.js. The Repo.clone and Repo.addKnownHosts paths interpolate these values into git and ssh-keyscan command strings, and server/src/lib/cmd.js executes the strings through Cmd.executeSilentCommand with shell interpretation enabled. Creating or updating a repository can therefore execute arbitrary commands as the AnsibleForms application process. This issue is fixed in version 6.2.1.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.2,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
  "os": [],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/ansibleforms/ansibleforms/security/advisories/GHSA-56pr-p4x6-mwm6",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-73968",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-73968"
    },
    {
      "kind": "patch",
      "url": "https://github.com/ansibleforms/ansibleforms/commit/27d2064f4714c40356ac928545287548f817819d",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/ansibleforms/ansibleforms/pull/473",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/ansibleforms/ansibleforms/releases/tag/6.2.1",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-18T21:18:01.973Z",
  "updatedAt": "2026-11-18T21:18:01.973Z",
  "firstSeenAt": "2026-11-19T03:57:45.838Z",
  "week": "2026-W47"
}
---

# AnsibleForms is a self\-hosted web application that turns automation into self\-service forms\.

- **ID**: CVE\-2026\-73968
- **危険度**: High（重要） (CVSS 7.2)
- **公開**: 2026-11-18

## 原文

AnsibleForms is a self\-hosted web application that turns automation into self\-service forms\. Prior to 6\.2\.1, AnsibleForms allows a user with repository management privileges to inject shell syntax through repository uri, branch, name, or host values processed by server/src/models/repo\.model\.js\. The Repo\.clone and Repo\.addKnownHosts paths interpolate these values into git and ssh\-keyscan command strings, and server/src/lib/cmd\.js executes the strings through Cmd\.executeSilentCommand with shell interpretation enabled\. Creating or updating a repository can therefore execute arbitrary commands as the AnsibleForms application process\. This issue is fixed in version 6\.2\.1\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/ansibleforms/ansibleforms/security/advisories/GHSA-56pr-p4x6-mwm6>)
- [NVD CVE\-2026\-73968](<https://nvd.nist.gov/vuln/detail/CVE-2026-73968>)
- [修正 \(github\.com\)](<https://github.com/ansibleforms/ansibleforms/commit/27d2064f4714c40356ac928545287548f817819d>)
- [修正 \(github\.com\)](<https://github.com/ansibleforms/ansibleforms/pull/473>)
- [github\.com](<https://github.com/ansibleforms/ansibleforms/releases/tag/6.2.1>)
