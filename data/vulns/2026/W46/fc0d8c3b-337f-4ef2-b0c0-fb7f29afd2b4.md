---
{
  "uuid": "fc0d8c3b-337f-4ef2-b0c0-fb7f29afd2b4",
  "ids": [
    "CVE-2026-111260"
  ],
  "title": "The Jakarta Security OpenID Connect authentication mechanism generates the state and nonce values with a non-cryptographic random number ...",
  "summary": "The Jakarta Security OpenID Connect authentication mechanism generates the state and nonce values with a non-cryptographic random number generator and insufficient entropy. A remote attacker who predicts these values can forge an authentication callback that logs a victim into the attacker's account, and the replay protection for ID tokens is weakened. Users are recommended to upgrade to version 10.3.0 or 11.0.0-M2, which fix the issue.",
  "titleJa": "Jakarta Security OpenID Connect認証機構は、非暗号化ランダム数で状態およびナンス値を生成する。",
  "summaryJa": "Jakarta Security OpenID Connect認証機構は、非暗号乱数生成器と不十分なエントロピーを持つ状態およびナンス値を生成する。。これらの値を予測するリモートアタッカーは、被害者を攻撃者のアカウントにログする認証コールバックを偽造し、IDトークンに対する再生保護が弱まる。ユーザは、この問題を修正するために、バージョン10.3.0または11.0.0-M2にアップグレードすることを推奨される。。",
  "translation": "machine",
  "severity": "critical",
  "cvssScore": 9.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-111260",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-111260"
    },
    {
      "kind": "reference",
      "url": "https://lists.apache.org/thread/y6oscfyggkdf5hrj518nl08v7l8rr40q",
      "host": "lists.apache.org",
      "label": "lists.apache.org"
    }
  ],
  "publishedAt": "2026-11-10T16:17:16.707Z",
  "updatedAt": "2026-11-16T14:17:04.420Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# Jakarta Security OpenID Connect認証機構は、非暗号化ランダム数で状態およびナンス値を生成する。

- **ID**: CVE\-2026\-111260
- **危険度**: Critical（緊急） (CVSS 9.1)
- **公開**: 2026-11-10

## 概要（機械翻訳）

Jakarta Security OpenID Connect認証機構は、非暗号乱数生成器と不十分なエントロピーを持つ状態およびナンス値を生成する。。これらの値を予測するリモートアタッカーは、被害者を攻撃者のアカウントにログする認証コールバックを偽造し、IDトークンに対する再生保護が弱まる。ユーザは、この問題を修正するために、バージョン10\.3\.0または11\.0\.0\-M2にアップグレードすることを推奨される。。

## 原文

The Jakarta Security OpenID Connect authentication mechanism generates the state and nonce values with a non\-cryptographic random number generator and insufficient entropy\. A remote attacker who predicts these values can forge an authentication callback that logs a victim into the attacker's account, and the replay protection for ID tokens is weakened\. Users are recommended to upgrade to version 10\.3\.0 or 11\.0\.0\-M2, which fix the issue\.

## リンク

- [NVD CVE\-2026\-111260](<https://nvd.nist.gov/vuln/detail/CVE-2026-111260>)
- [lists\.apache\.org](<https://lists.apache.org/thread/y6oscfyggkdf5hrj518nl08v7l8rr40q>)
