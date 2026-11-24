---
{
  "uuid": "fc5ec6c6-d863-42e1-ba79-ddaa81ecaaf3",
  "ids": [
    "CVE-2026-132660"
  ],
  "title": "In Postgres Enterprise Manager (PEM), several SECURITY DEFINER functions in the pem schema of the PEM backend database are owned by a sup...",
  "summary": "In Postgres Enterprise Manager (PEM), several SECURITY DEFINER functions in the pem schema of the PEM backend database are owned by a superuser but do not set a safe search_path. Any PEM user who can connect to the PEM backend database can create objects that these functions use in place of the intended ones, and so run arbitrary SQL with superuser privileges. Temporary objects can be used for this on every supported PostgreSQL version, and objects in the public schema on PostgreSQL 14 backends and backends upgraded from PostgreSQL 14.\nFrom PEM 10.6.1, these functions run with a fixed search_path.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.4,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:H/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-132660",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-132660"
    },
    {
      "kind": "reference",
      "url": "https://www.enterprisedb.com/docs/security/advisories/cve2026132660/",
      "host": "www.enterprisedb.com",
      "label": "www.enterprisedb.com"
    }
  ],
  "publishedAt": "2026-11-20T15:17:47.800Z",
  "updatedAt": "2026-11-23T16:24:48.897Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# In Postgres Enterprise Manager \(PEM\), several SECURITY DEFINER functions in the pem schema of the PEM backend database are owned by a sup\.\.\.

- **ID**: CVE\-2026\-132660
- **危険度**: Critical（緊急） (CVSS 9.4)
- **公開**: 2026-11-20

## 原文

In Postgres Enterprise Manager \(PEM\), several SECURITY DEFINER functions in the pem schema of the PEM backend database are owned by a superuser but do not set a safe search\_path\. Any PEM user who can connect to the PEM backend database can create objects that these functions use in place of the intended ones, and so run arbitrary SQL with superuser privileges\. Temporary objects can be used for this on every supported PostgreSQL version, and objects in the public schema on PostgreSQL 14 backends and backends upgraded from PostgreSQL 14\.  
From PEM 10\.6\.1, these functions run with a fixed search\_path\.

## リンク

- [NVD CVE\-2026\-132660](<https://nvd.nist.gov/vuln/detail/CVE-2026-132660>)
- [www\.enterprisedb\.com](<https://www.enterprisedb.com/docs/security/advisories/cve2026132660/>)
