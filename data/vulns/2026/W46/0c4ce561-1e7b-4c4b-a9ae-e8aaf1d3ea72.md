---
{
  "uuid": "0c4ce561-1e7b-4c4b-a9ae-e8aaf1d3ea72",
  "ids": [
    "CVE-2026-95613"
  ],
  "title": "The pREST database REST API in Zenitel Connect firmware before 1.11.0 signs and verifies JWTs with the platform CA private key, which is ...",
  "summary": "The pREST database REST API in Zenitel Connect firmware before 1.11.0 signs and verifies JWTs with the platform CA private key, which is stored on a data volume shared between containers, and sets the PostgreSQL session role from the unvalidated sub claim of each request while connected to the database as the \"postgres\" superuser, which allows local attackers who can read the platform CA private key from the container filesystem to execute database operations as the PostgreSQL superuser, including reading the master encryption key and password hashes, via a forged JWT with sub=postgres sent to the pREST API.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.6,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:H/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-95613",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-95613"
    },
    {
      "kind": "reference",
      "url": "https://www.zenitel.com/sites/default/files/2026-11/A100K12404-Zenitel-Security-Advisory.pdf",
      "host": "www.zenitel.com",
      "label": "www.zenitel.com"
    }
  ],
  "publishedAt": "2026-11-13T16:19:38.717Z",
  "updatedAt": "2026-11-13T20:19:04.253Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# The pREST database REST API in Zenitel Connect firmware before 1\.11\.0 signs and verifies JWTs with the platform CA private key, which is \.\.\.

- **ID**: CVE\-2026\-95613
- **危険度**: High（重要） (CVSS 8.6)
- **公開**: 2026-11-13

## 原文

The pREST database REST API in Zenitel Connect firmware before 1\.11\.0 signs and verifies JWTs with the platform CA private key, which is stored on a data volume shared between containers, and sets the PostgreSQL session role from the unvalidated sub claim of each request while connected to the database as the "postgres" superuser, which allows local attackers who can read the platform CA private key from the container filesystem to execute database operations as the PostgreSQL superuser, including reading the master encryption key and password hashes, via a forged JWT with sub\=postgres sent to the pREST API\.

## リンク

- [NVD CVE\-2026\-95613](<https://nvd.nist.gov/vuln/detail/CVE-2026-95613>)
- [www\.zenitel\.com](<https://www.zenitel.com/sites/default/files/2026-11/A100K12404-Zenitel-Security-Advisory.pdf>)
