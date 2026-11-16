---
{
  "uuid": "aeb538e1-2712-4acf-bedb-cc7d58be6d0d",
  "ids": [
    "CVE-2026-126837"
  ],
  "title": "A validation flaw in the DNS SRV host discovery of the MongoDB Node.js driver may cause the driver to connect to a host outside the expec...",
  "summary": "A validation flaw in the DNS SRV host discovery of the MongoDB Node.js driver may cause the driver to connect to a host outside the expected domain. For a mongodb+srv:// connection string, the driver checks each host name in the DNS SRV response against the domain of the connection string. The driver then builds the connection address from the original name, in which certain characters end the host name early. An unauthenticated party who can forge or change the DNS SRV response may redirect the connection to a host of their choice. TLS does not prevent this, because the driver verifies the server certificate against the redirected host name. This may result in unintended disclosure of application data and authentication credentials, and in altered query results. Applications that use mongodb:// connection strings are not affected.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.4,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
  "os": [],
  "languages": [
    "JavaScript/TypeScript"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126837",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126837"
    },
    {
      "kind": "reference",
      "url": "https://jira.mongodb.org/browse/NODE-7830",
      "host": "jira.mongodb.org",
      "label": "jira.mongodb.org"
    }
  ],
  "publishedAt": "2026-11-12T17:17:33.320Z",
  "updatedAt": "2026-11-13T19:19:25.070Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# A validation flaw in the DNS SRV host discovery of the MongoDB Node\.js driver may cause the driver to connect to a host outside the expec\.\.\.

- **ID**: CVE\-2026\-126837
- **危険度**: High（重要） (CVSS 7.4)
- **言語**: JavaScript/TypeScript
- **公開**: 2026-11-12

## 原文

A validation flaw in the DNS SRV host discovery of the MongoDB Node\.js driver may cause the driver to connect to a host outside the expected domain\. For a mongodb\+srv\:// connection string, the driver checks each host name in the DNS SRV response against the domain of the connection string\. The driver then builds the connection address from the original name, in which certain characters end the host name early\. An unauthenticated party who can forge or change the DNS SRV response may redirect the connection to a host of their choice\. TLS does not prevent this, because the driver verifies the server certificate against the redirected host name\. This may result in unintended disclosure of application data and authentication credentials, and in altered query results\. Applications that use mongodb\:// connection strings are not affected\.

## リンク

- [NVD CVE\-2026\-126837](<https://nvd.nist.gov/vuln/detail/CVE-2026-126837>)
- [jira\.mongodb\.org](<https://jira.mongodb.org/browse/NODE-7830>)
