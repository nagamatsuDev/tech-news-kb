---
{
  "uuid": "5da4d4fc-a4ea-4abb-b675-1ab6515efe15",
  "ids": [
    "CVE-2026-87758"
  ],
  "title": "The remote EJB client does not verify that the hostname of the server it connects to matches the server's TLS certificate.",
  "summary": "The remote EJB client does not verify that the hostname of the server it connects to matches the server's TLS certificate. An attacker able to intercept network traffic between an EJB client and server can impersonate the server and read or modify the traffic, including credentials and invocation data. Users are recommended to upgrade to version 10.3.0 or 11.0.0-M2, which fix the issue.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.4,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-87758",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-87758"
    },
    {
      "kind": "reference",
      "url": "https://lists.apache.org/thread/nzy4n8rmv4zl5wzdz0v0kwrj62tjrd7z",
      "host": "lists.apache.org",
      "label": "lists.apache.org"
    }
  ],
  "publishedAt": "2026-11-10T16:17:24.930Z",
  "updatedAt": "2026-11-16T15:17:33.420Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# The remote EJB client does not verify that the hostname of the server it connects to matches the server's TLS certificate\.

- **ID**: CVE\-2026\-87758
- **危険度**: High（重要） (CVSS 7.4)
- **公開**: 2026-11-10

## 原文

The remote EJB client does not verify that the hostname of the server it connects to matches the server's TLS certificate\. An attacker able to intercept network traffic between an EJB client and server can impersonate the server and read or modify the traffic, including credentials and invocation data\. Users are recommended to upgrade to version 10\.3\.0 or 11\.0\.0\-M2, which fix the issue\.

## リンク

- [NVD CVE\-2026\-87758](<https://nvd.nist.gov/vuln/detail/CVE-2026-87758>)
- [lists\.apache\.org](<https://lists.apache.org/thread/nzy4n8rmv4zl5wzdz0v0kwrj62tjrd7z>)
