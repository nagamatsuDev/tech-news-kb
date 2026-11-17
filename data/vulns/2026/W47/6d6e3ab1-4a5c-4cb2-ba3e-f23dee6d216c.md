---
{
  "uuid": "6d6e3ab1-4a5c-4cb2-ba3e-f23dee6d216c",
  "ids": [
    "CVE-2026-86046",
    "GHSA-259w-wmqg-fp76"
  ],
  "title": "termux-sync: Arbitrary file write during restore via attacker-controlled manifest source path",
  "summary": "termux-sync restore trusts fields inside an untrusted backup manifest and uses them as the extraction destination without validation. During restore, each archive entry is handled as: src_dir = Path(info.get(\"source\", ...)).parent extract_archive(archive, src_dir, ...) extract_archive opens the archive and runs tarfile.extract for every member with no path jail and no filter: with tarfile.open(archive_path, \"r:*\") as tf: for member in tf.getmembers(): tf.extract(member, dest_path, set_attrs=True) There is no check that manifest \"source\" stays under an expected restore root, that tar members st",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:H",
  "os": [],
  "languages": [
    "Python"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "PyPI",
      "name": "termux-sync",
      "vulnerableRange": "<= 1.2.3",
      "fixedVersion": "1.2.4"
    }
  ],
  "sources": [
    "nvd",
    "ghsa"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/djunekz/termux-sync/security/advisories/GHSA-259w-wmqg-fp76",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-86046",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-86046"
    },
    {
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-259w-wmqg-fp76",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-259w-wmqg-fp76"
    },
    {
      "kind": "patch",
      "url": "https://github.com/djunekz/termux-sync/commit/9c8637b280ee3e126885def5ff5b326c289ee7cf",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/djunekz/termux-sync/releases/tag/v1.2.4",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-16T17:17:35.707Z",
  "updatedAt": "2026-11-16T22:09:25Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# termux\-sync\: Arbitrary file write during restore via attacker\-controlled manifest source path

- **ID**: CVE\-2026\-86046 / GHSA\-259w\-wmqg\-fp76
- **危険度**: High（重要） (CVSS 7.1)
- **言語**: Python
- **パッケージ**: PyPI/termux\-sync &lt;\= 1\.2\.3 → 1\.2\.4
- **公開**: 2026-11-16

## 原文

termux\-sync restore trusts fields inside an untrusted backup manifest and uses them as the extraction destination without validation\. During restore, each archive entry is handled as\: src\_dir \= Path\(info\.get\("source", \.\.\.\)\)\.parent extract\_archive\(archive, src\_dir, \.\.\.\) extract\_archive opens the archive and runs tarfile\.extract for every member with no path jail and no filter\: with tarfile\.open\(archive\_path, "r\:\*"\) as tf\: for member in tf\.getmembers\(\)\: tf\.extract\(member, dest\_path, set\_attrs\=True\) There is no check that manifest "source" stays under an expected restore root, that tar members st

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/djunekz/termux-sync/security/advisories/GHSA-259w-wmqg-fp76>)
- [NVD CVE\-2026\-86046](<https://nvd.nist.gov/vuln/detail/CVE-2026-86046>)
- [GitHub Advisory GHSA\-259w\-wmqg\-fp76](<https://github.com/advisories/GHSA-259w-wmqg-fp76>)
- [修正 \(github\.com\)](<https://github.com/djunekz/termux-sync/commit/9c8637b280ee3e126885def5ff5b326c289ee7cf>)
- [github\.com](<https://github.com/djunekz/termux-sync/releases/tag/v1.2.4>)
