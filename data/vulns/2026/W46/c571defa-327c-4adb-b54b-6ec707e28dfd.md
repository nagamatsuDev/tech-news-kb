---
{
  "uuid": "c571defa-327c-4adb-b54b-6ec707e28dfd",
  "ids": [
    "CVE-2026-86531"
  ],
  "title": "The embedded OpenEJB HTTP server does not limit the size of incoming request bodies or of multipart requests, and does not remove the tem...",
  "summary": "The embedded OpenEJB HTTP server does not limit the size of incoming request bodies or of multipart requests, and does not remove the temporary files it creates for multipart parts. A remote unauthenticated attacker can cause excessive memory or disk usage, leading to denial of service. Deployments using the Tomcat connectors are not affected. Users are recommended to block network access to the embedded HTTP server from untrusted clients, or to migrate to the Tomcat based TomEE distributions.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-86531",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-86531"
    },
    {
      "kind": "reference",
      "url": "https://lists.apache.org/thread/cm1vdbx03ctl607nrrkdqyshwjscpd2y",
      "host": "lists.apache.org",
      "label": "lists.apache.org"
    }
  ],
  "publishedAt": "2026-11-10T16:17:24.817Z",
  "updatedAt": "2026-11-16T16:17:55.623Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# The embedded OpenEJB HTTP server does not limit the size of incoming request bodies or of multipart requests, and does not remove the tem\.\.\.

- **ID**: CVE\-2026\-86531
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-10

## 原文

The embedded OpenEJB HTTP server does not limit the size of incoming request bodies or of multipart requests, and does not remove the temporary files it creates for multipart parts\. A remote unauthenticated attacker can cause excessive memory or disk usage, leading to denial of service\. Deployments using the Tomcat connectors are not affected\. Users are recommended to block network access to the embedded HTTP server from untrusted clients, or to migrate to the Tomcat based TomEE distributions\.

## リンク

- [NVD CVE\-2026\-86531](<https://nvd.nist.gov/vuln/detail/CVE-2026-86531>)
- [lists\.apache\.org](<https://lists.apache.org/thread/cm1vdbx03ctl607nrrkdqyshwjscpd2y>)
