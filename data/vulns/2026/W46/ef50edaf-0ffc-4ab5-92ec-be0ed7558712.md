---
{
  "uuid": "ef50edaf-0ffc-4ab5-92ec-be0ed7558712",
  "ids": [
    "CVE-2026-126259"
  ],
  "title": "A missing authentication for critical function vulnerability in Fortinet FortiOS 8.0.0, FortiOS 7.6.0 through 7.6.7, FortiOS 7.4.0 throug...",
  "summary": "A missing authentication for critical function vulnerability in Fortinet FortiOS 8.0.0, FortiOS 7.6.0 through 7.6.7, FortiOS 7.4.0 through 7.4.12, FortiOS 7.2.0 through 7.2.13, FortiOS 7.0 all versions may allow an unauthenticated attacker with HA FGSP + standalone-config-sync, or autoscale to execute command as super admin via crafted HA packets.",
  "titleJa": "Fort fort iOS 8.0.0、Fort iOS 7.6.0から7.6.7、Fort iOS 7.4.0から.0まで、重要な関数脆弱性の認証が欠落している。",
  "summaryJa": "Fort Fort iOS 8.0.0、Fort iOS 7.6.0から7.6.7、Fort iOS 7.4.0から7.4.12、Fort iOS 7.2.0から7.2.13、Fort iOS 7.0では、重要な関数脆弱性に対する認証がないため、HA FGSP +standalone-config-syncを持つ非認証攻撃者、または自動スケールで、クラフトされたHAパケットを介してスーパーアドミンとしてコマンドを実行することができる。",
  "translation": "machine",
  "severity": "critical",
  "cvssScore": 9.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126259",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126259"
    },
    {
      "kind": "reference",
      "url": "https://fortiguard.fortinet.com/psirt/FG-IR-26-273",
      "host": "fortiguard.fortinet.com",
      "label": "fortiguard.fortinet.com"
    }
  ],
  "publishedAt": "2026-11-11T22:17:26.200Z",
  "updatedAt": "2026-11-16T19:17:31.307Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# Fort fort iOS 8\.0\.0、Fort iOS 7\.6\.0から7\.6\.7、Fort iOS 7\.4\.0から\.0まで、重要な関数脆弱性の認証が欠落している。

- **ID**: CVE\-2026\-126259
- **危険度**: Critical（緊急） (CVSS 9.8)
- **公開**: 2026-11-11

## 概要（機械翻訳）

Fort Fort iOS 8\.0\.0、Fort iOS 7\.6\.0から7\.6\.7、Fort iOS 7\.4\.0から7\.4\.12、Fort iOS 7\.2\.0から7\.2\.13、Fort iOS 7\.0では、重要な関数脆弱性に対する認証がないため、HA FGSP \+standalone\-config\-syncを持つ非認証攻撃者、または自動スケールで、クラフトされたHAパケットを介してスーパーアドミンとしてコマンドを実行することができる。

## 原文

A missing authentication for critical function vulnerability in Fortinet FortiOS 8\.0\.0, FortiOS 7\.6\.0 through 7\.6\.7, FortiOS 7\.4\.0 through 7\.4\.12, FortiOS 7\.2\.0 through 7\.2\.13, FortiOS 7\.0 all versions may allow an unauthenticated attacker with HA FGSP \+ standalone\-config\-sync, or autoscale to execute command as super admin via crafted HA packets\.

## リンク

- [NVD CVE\-2026\-126259](<https://nvd.nist.gov/vuln/detail/CVE-2026-126259>)
- [fortiguard\.fortinet\.com](<https://fortiguard.fortinet.com/psirt/FG-IR-26-273>)
