---
{
  "uuid": "6c3e2a56-80d3-4bdb-ba55-d78c2ceedff8",
  "ids": [
    "CVE-2026-127078"
  ],
  "title": "OpsTree BuildPiper before 2.7.0 contains an authorization bypass vulnerability that allows authenticated users to attach another applicat...",
  "summary": "OpsTree BuildPiper before 2.7.0 contains an authorization bypass vulnerability that allows authenticated users to attach another application's environment to their service by supplying a foreign project_env_id. Attackers can configure CI and trigger builds and deployments through the component env endpoints using the other application's configuration, registries and deployment infrastructure.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:H/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-127078",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-127078"
    },
    {
      "kind": "reference",
      "url": "https://gist.github.com/neelkotnis/26f637bfda3513ab255d8f8e46bcf8d1",
      "host": "gist.github.com",
      "label": "gist.github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.buildpiper.io/",
      "host": "www.buildpiper.io",
      "label": "www.buildpiper.io"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/opstree-buildpiper-before-2.7.0-authorization-bypass-via-project-env-id-parameter",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:18:03.970Z",
  "updatedAt": "2026-11-18T04:17:13.333Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# OpsTree BuildPiper before 2\.7\.0 contains an authorization bypass vulnerability that allows authenticated users to attach another applicat\.\.\.

- **ID**: CVE\-2026\-127078
- **危険度**: High（重要） (CVSS 7.1)
- **公開**: 2026-11-13

## 原文

OpsTree BuildPiper before 2\.7\.0 contains an authorization bypass vulnerability that allows authenticated users to attach another application's environment to their service by supplying a foreign project\_env\_id\. Attackers can configure CI and trigger builds and deployments through the component env endpoints using the other application's configuration, registries and deployment infrastructure\.

## リンク

- [NVD CVE\-2026\-127078](<https://nvd.nist.gov/vuln/detail/CVE-2026-127078>)
- [gist\.github\.com](<https://gist.github.com/neelkotnis/26f637bfda3513ab255d8f8e46bcf8d1>)
- [www\.buildpiper\.io](<https://www.buildpiper.io/>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/opstree-buildpiper-before-2.7.0-authorization-bypass-via-project-env-id-parameter>)
