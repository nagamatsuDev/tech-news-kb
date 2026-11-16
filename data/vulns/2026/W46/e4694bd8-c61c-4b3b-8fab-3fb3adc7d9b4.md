---
{
  "uuid": "e4694bd8-c61c-4b3b-8fab-3fb3adc7d9b4",
  "ids": [
    "CVE-2026-126470"
  ],
  "title": "OpenEMR before 8.5.0 contains an insecure direct object reference vulnerability in the Carecoordination module that allows authenticated ...",
  "summary": "OpenEMR before 8.5.0 contains an insecure direct object reference vulnerability in the Carecoordination module that allows authenticated users with send_to_hie permission to access any patient's CCDA/CCR/QRDA documents. Attackers can supply arbitrary document or patient IDs to download, transmit, or export patient health records, inject falsified clinical data, and delete audit records.",
  "titleJa": "OpenEMR before 8.5.0は、認証された.NET Coreモジュールに安全でない直接オブジェクト参照脆弱性を含む。",
  "summaryJa": "8.5.0以前のOpenEMRは、Careコーディネーションモジュールに安全でない直接オブジェクト参照脆弱性を含み、send_to_hie許可を持つ認証されたユーザが患者のCCDA/CCR/QRDA文書にアクセスできるようにする。攻撃者は、患者の健康記録をダウンロード、送信、またはエクスポートし、偽の臨床データを送り、監査記録を削除するためのHgbitrary文書または患者IDを供給できます。。。。",
  "translation": "machine",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
  "os": [],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/openemr/openemr/security/advisories/GHSA-3vxh-7hh5-vhhm",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126470",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-126470"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/openemr-before-8.5.0-idor-in-carecoordination-ccda-ccr-qrda-document-actions",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-13T10:17:56.087Z",
  "updatedAt": "2026-11-13T10:17:56.207Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# OpenEMR before 8\.5\.0は、認証された\.NET Coreモジュールに安全でない直接オブジェクト参照脆弱性を含む。

- **ID**: CVE\-2026\-126470
- **危険度**: High（重要） (CVSS 8.8)
- **公開**: 2026-11-13

## 概要（機械翻訳）

8\.5\.0以前のOpenEMRは、Careコーディネーションモジュールに安全でない直接オブジェクト参照脆弱性を含み、send\_to\_hie許可を持つ認証されたユーザが患者のCCDA/CCR/QRDA文書にアクセスできるようにする。攻撃者は、患者の健康記録をダウンロード、送信、またはエクスポートし、偽の臨床データを送り、監査記録を削除するためのHgbitrary文書または患者IDを供給できます。。。。

## 原文

OpenEMR before 8\.5\.0 contains an insecure direct object reference vulnerability in the Carecoordination module that allows authenticated users with send\_to\_hie permission to access any patient's CCDA/CCR/QRDA documents\. Attackers can supply arbitrary document or patient IDs to download, transmit, or export patient health records, inject falsified clinical data, and delete audit records\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/openemr/openemr/security/advisories/GHSA-3vxh-7hh5-vhhm>)
- [NVD CVE\-2026\-126470](<https://nvd.nist.gov/vuln/detail/CVE-2026-126470>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/openemr-before-8.5.0-idor-in-carecoordination-ccda-ccr-qrda-document-actions>)
