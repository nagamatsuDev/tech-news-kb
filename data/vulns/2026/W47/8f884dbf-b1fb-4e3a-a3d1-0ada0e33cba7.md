---
{
  "uuid": "8f884dbf-b1fb-4e3a-a3d1-0ada0e33cba7",
  "ids": [
    "CVE-2026-129303",
    "GHSA-w7wg-6q7v-44f2"
  ],
  "title": "Guard Core: Whitespace-collapse preprocessing permanently disables the CRLF-anchored http-splitting and command-injection detectors in the default detection mode",
  "summary": "### Summary In the default \"enhanced\" detection mode, `ContentPreprocessor.preprocess()` collapses all whitespace (`re.sub(r\"\\s+\", \" \", content)`, `guard_core/detection_engine/preprocessor.py:137` on master `08780f1`; `:384` in the 3.12.0 sdist) **before** pattern matching. This erases every `\\r` and `\\n` from the scanned value, rendering two built-in detectors structurally unmatchable regardless of input: - http_split — `guard_core/handlers/suspatterns_handler.py:540`: `r\"[\\r\\n]\\s*(?:HTTP\\/[0-9.]+|Location:|Set-Cookie:)\"` requires a literal `\\r` or `\\n`, which no longer exists after preproces",
  "translation": "none",
  "severity": "low",
  "cvssScore": 3.7,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:L/A:N",
  "os": [],
  "languages": [
    "Python"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "PyPI",
      "name": "guard-core",
      "vulnerableRange": ">= 1.0.0, < 3.13.0",
      "fixedVersion": "3.13.0"
    }
  ],
  "sources": [
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/Guard-Core/guard-core/security/advisories/GHSA-w7wg-6q7v-44f2",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129303",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-129303"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-w7wg-6q7v-44f2",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-w7wg-6q7v-44f2"
    },
    {
      "kind": "patch",
      "url": "https://github.com/Guard-Core/guard-core/pull/68",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/Guard-Core/guard-core/releases/tag/3.13.0",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-19T22:50:13Z",
  "updatedAt": "2026-11-19T22:50:14Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# Guard Core\: Whitespace\-collapse preprocessing permanently disables the CRLF\-anchored http\-splitting and command\-injection detectors in the default detection mode

- **ID**: CVE\-2026\-129303 / GHSA\-w7wg\-6q7v\-44f2
- **危険度**: Low（注意） (CVSS 3.7)
- **言語**: Python
- **パッケージ**: PyPI/guard\-core &gt;\= 1\.0\.0, &lt; 3\.13\.0 → 3\.13\.0
- **公開**: 2026-11-19

## 原文

\#\#\# Summary In the default "enhanced" detection mode, \`ContentPreprocessor\.preprocess\(\)\` collapses all whitespace \(\`re\.sub\(r"\\s\+", " ", content\)\`, \`guard\_core/detection\_engine/preprocessor\.py\:137\` on master \`08780f1\`; \`\:384\` in the 3\.12\.0 sdist\) \*\*before\*\* pattern matching\. This erases every \`\\r\` and \`\\n\` from the scanned value, rendering two built\-in detectors structurally unmatchable regardless of input\: \- http\_split — \`guard\_core/handlers/suspatterns\_handler\.py\:540\`\: \`r"\[\\r\\n\]\\s\*\(?\:HTTP\\/\[0\-9\.\]\+\|Location\:\|Set\-Cookie\:\)"\` requires a literal \`\\r\` or \`\\n\`, which no longer exists after preproces

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/Guard-Core/guard-core/security/advisories/GHSA-w7wg-6q7v-44f2>)
- [NVD CVE\-2026\-129303](<https://nvd.nist.gov/vuln/detail/CVE-2026-129303>)
- [GitHub Advisory GHSA\-w7wg\-6q7v\-44f2](<https://github.com/advisories/GHSA-w7wg-6q7v-44f2>)
- [修正 \(github\.com\)](<https://github.com/Guard-Core/guard-core/pull/68>)
- [修正 \(github\.com\)](<https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4>)
- [github\.com](<https://github.com/Guard-Core/guard-core/releases/tag/3.13.0>)
