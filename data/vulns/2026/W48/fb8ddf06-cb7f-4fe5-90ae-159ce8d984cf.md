---
{
  "uuid": "fb8ddf06-cb7f-4fe5-90ae-159ce8d984cf",
  "ids": [
    "CVE-2026-22865",
    "GHSA-mqwm-5m85-gmcv"
  ],
  "title": "Gradle causes failure to disable repositories exposing builds to malicious artifacts",
  "summary": "### Impact When resolving dependencies, Gradle searches repositories in declaration order. If it encounters connection errors, Gradle will disable the repository and fail dependency resolution. This is necessary for both reproducibility and security reasons to prevent dependencies from being resolved from other repositories without warning. In previous versions of Gradle, some exceptions were not treated as fatal errors and would not cause a repository to be disabled. If a build encountered one of these exceptions, Gradle would continue to the next repository in the list and potentially resolv",
  "translation": "none",
  "severity": "high",
  "cvssVector": "CVSS:4.0/AV:N/AC:H/AT:P/PR:N/UI:P/VC:H/VI:H/VA:N/SC:N/SI:H/SA:N",
  "os": [],
  "languages": [
    "Java/Kotlin"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "Maven",
      "name": "org.gradle:gradle-core",
      "vulnerableRange": "< 8.14.4",
      "fixedVersion": "8.14.4"
    },
    {
      "ecosystem": "Maven",
      "name": "org.gradle:gradle-core",
      "vulnerableRange": ">= 9.0.0, < 9.3.0",
      "fixedVersion": "9.3.0"
    }
  ],
  "sources": [
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/gradle/gradle/security/advisories/GHSA-mqwm-5m85-gmcv",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-22865",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-22865"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-mqwm-5m85-gmcv",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-mqwm-5m85-gmcv"
    },
    {
      "kind": "patch",
      "url": "https://github.com/gradle/gradle/commit/d38bfc0f1d4dabd38b305a67489bb8a6645138a1",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/gradle/gradle/commit/fa96c8bc7f7741e5dfa1da002c559afca3fa1fc1",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://docs.gradle.org/8.14.4/release-notes.html",
      "host": "docs.gradle.org",
      "label": "docs.gradle.org"
    },
    {
      "kind": "reference",
      "url": "https://docs.gradle.org/9.3.0/release-notes.html",
      "host": "docs.gradle.org",
      "label": "docs.gradle.org"
    },
    {
      "kind": "reference",
      "url": "https://github.com/gradle/gradle/releases/tag/v8.14.4",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/gradle/gradle/releases/tag/v9.3.0",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-23T15:41:57Z",
  "updatedAt": "2026-11-23T15:41:58Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W48"
}
---

# Gradle causes failure to disable repositories exposing builds to malicious artifacts

- **ID**: CVE\-2026\-22865 / GHSA\-mqwm\-5m85\-gmcv
- **危険度**: High（重要）
- **言語**: Java/Kotlin
- **パッケージ**: Maven/org\.gradle\:gradle\-core &lt; 8\.14\.4 → 8\.14\.4, Maven/org\.gradle\:gradle\-core &gt;\= 9\.0\.0, &lt; 9\.3\.0 → 9\.3\.0
- **公開**: 2026-11-23

## 原文

\#\#\# Impact When resolving dependencies, Gradle searches repositories in declaration order\. If it encounters connection errors, Gradle will disable the repository and fail dependency resolution\. This is necessary for both reproducibility and security reasons to prevent dependencies from being resolved from other repositories without warning\. In previous versions of Gradle, some exceptions were not treated as fatal errors and would not cause a repository to be disabled\. If a build encountered one of these exceptions, Gradle would continue to the next repository in the list and potentially resolv

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/gradle/gradle/security/advisories/GHSA-mqwm-5m85-gmcv>)
- [NVD CVE\-2026\-22865](<https://nvd.nist.gov/vuln/detail/CVE-2026-22865>)
- [GitHub Advisory GHSA\-mqwm\-5m85\-gmcv](<https://github.com/advisories/GHSA-mqwm-5m85-gmcv>)
- [修正 \(github\.com\)](<https://github.com/gradle/gradle/commit/d38bfc0f1d4dabd38b305a67489bb8a6645138a1>)
- [修正 \(github\.com\)](<https://github.com/gradle/gradle/commit/fa96c8bc7f7741e5dfa1da002c559afca3fa1fc1>)
- [docs\.gradle\.org](<https://docs.gradle.org/8.14.4/release-notes.html>)
- [docs\.gradle\.org](<https://docs.gradle.org/9.3.0/release-notes.html>)
- [github\.com](<https://github.com/gradle/gradle/releases/tag/v8.14.4>)
- [github\.com](<https://github.com/gradle/gradle/releases/tag/v9.3.0>)
