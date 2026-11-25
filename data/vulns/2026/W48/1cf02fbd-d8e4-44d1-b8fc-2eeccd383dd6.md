---
{
  "uuid": "1cf02fbd-d8e4-44d1-b8fc-2eeccd383dd6",
  "ids": [
    "CVE-2026-101869"
  ],
  "title": "EUSurvey 1.4.4.6738 through 1.6, prior to commit de1145c, contains an SQL injection vulnerability in the public results page GET /publica...",
  "summary": "EUSurvey 1.4.4.6738 through 1.6, prior to commit de1145c, contains an SQL injection vulnerability in the public results page GET /publication/{shortname} that allows unauthenticated attackers to infer non-public response data. ReportingService builds a SQL column expression from part of a user-supplied filter parameter name and inserts it directly into the query, so a visitor to any survey that publishes its results can inject boolean conditions and use the presence or absence of public result rows to infer private reporting data, including response data and respondent metadata from other surveys.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-101869",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-101869"
    },
    {
      "kind": "patch",
      "url": "https://github.com/EUSurvey/EUSURVEY/commit/de1145c22db859d01528cbdf414de1748b086c77",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/je-lv/eusurvey-security-research",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/eusurvey-1.4.4.6738-1.6-unauthenticated-sql-injection-via-public-result-filters",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-23T23:17:01.930Z",
  "updatedAt": "2026-11-24T17:18:10.967Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# EUSurvey 1\.4\.4\.6738 through 1\.6, prior to commit de1145c, contains an SQL injection vulnerability in the public results page GET /publica\.\.\.

- **ID**: CVE\-2026\-101869
- **危険度**: High（重要） (CVSS 7.5)
- **公開**: 2026-11-23

## 原文

EUSurvey 1\.4\.4\.6738 through 1\.6, prior to commit de1145c, contains an SQL injection vulnerability in the public results page GET /publication/\{shortname\} that allows unauthenticated attackers to infer non\-public response data\. ReportingService builds a SQL column expression from part of a user\-supplied filter parameter name and inserts it directly into the query, so a visitor to any survey that publishes its results can inject boolean conditions and use the presence or absence of public result rows to infer private reporting data, including response data and respondent metadata from other surveys\.

## リンク

- [NVD CVE\-2026\-101869](<https://nvd.nist.gov/vuln/detail/CVE-2026-101869>)
- [修正 \(github\.com\)](<https://github.com/EUSurvey/EUSURVEY/commit/de1145c22db859d01528cbdf414de1748b086c77>)
- [github\.com](<https://github.com/je-lv/eusurvey-security-research>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/eusurvey-1.4.4.6738-1.6-unauthenticated-sql-injection-via-public-result-filters>)
