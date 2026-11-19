---
{
  "uuid": "8e4232c5-db22-4ffc-a78e-b2ad82ade8da",
  "ids": [
    "CVE-2026-61532"
  ],
  "title": "Chamilo LMS is an open-source learning management system.",
  "summary": "Chamilo LMS is an open-source learning management system. Prior to 1.11.40 and 2.0.3, src/Chamilo/CourseBundle/Component/CourseCopy/CourseRestorer.php and src/CourseBundle/Component/CourseCopy/CourseRestorer.php use paths supplied by an imported legacy course backup without consistently confining them to the extraction directory. A course teacher can import a crafted backup containing parent-directory path segments, causing file operations to write attacker-controlled content outside the intended destination, including PHP-executable or automatically loaded locations. This can result in code execution as the PHP process and compromise course data, user data, credentials, and the host. This issue is fixed in versions 1.11.40 and 2.0.3.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:H/A:H",
  "os": [],
  "languages": [
    "PHP"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/chamilo/chamilo-lms/security/advisories/GHSA-97gp-5f3j-vwqr",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-61532",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-61532"
    },
    {
      "kind": "patch",
      "url": "https://github.com/chamilo/chamilo-lms/commit/a2e404fb1d512908280011aa3a2211fc2fcb6ad8",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/chamilo/chamilo-lms/commit/d23787c8c79a4ff09d46f73fcf54ccce1bbcba15",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/chamilo/chamilo-lms/pull/8569",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/chamilo/chamilo-lms/releases/tag/v1.11.40",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/chamilo/chamilo-lms/releases/tag/v2.0.3",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-18T19:18:06.843Z",
  "updatedAt": "2026-11-18T19:18:06.843Z",
  "firstSeenAt": "2026-11-19T03:57:45.838Z",
  "week": "2026-W47"
}
---

# Chamilo LMS is an open\-source learning management system\.

- **ID**: CVE\-2026\-61532
- **危険度**: Critical（緊急） (CVSS 9.0)
- **言語**: PHP
- **公開**: 2026-11-18

## 原文

Chamilo LMS is an open\-source learning management system\. Prior to 1\.11\.40 and 2\.0\.3, src/Chamilo/CourseBundle/Component/CourseCopy/CourseRestorer\.php and src/CourseBundle/Component/CourseCopy/CourseRestorer\.php use paths supplied by an imported legacy course backup without consistently confining them to the extraction directory\. A course teacher can import a crafted backup containing parent\-directory path segments, causing file operations to write attacker\-controlled content outside the intended destination, including PHP\-executable or automatically loaded locations\. This can result in code execution as the PHP process and compromise course data, user data, credentials, and the host\. This issue is fixed in versions 1\.11\.40 and 2\.0\.3\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/chamilo/chamilo-lms/security/advisories/GHSA-97gp-5f3j-vwqr>)
- [NVD CVE\-2026\-61532](<https://nvd.nist.gov/vuln/detail/CVE-2026-61532>)
- [修正 \(github\.com\)](<https://github.com/chamilo/chamilo-lms/commit/a2e404fb1d512908280011aa3a2211fc2fcb6ad8>)
- [修正 \(github\.com\)](<https://github.com/chamilo/chamilo-lms/commit/d23787c8c79a4ff09d46f73fcf54ccce1bbcba15>)
- [修正 \(github\.com\)](<https://github.com/chamilo/chamilo-lms/pull/8569>)
- [github\.com](<https://github.com/chamilo/chamilo-lms/releases/tag/v1.11.40>)
- [github\.com](<https://github.com/chamilo/chamilo-lms/releases/tag/v2.0.3>)
