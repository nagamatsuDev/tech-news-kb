---
{
  "uuid": "f2dfb68e-a2d5-4837-bbb3-3bec7deae868",
  "ids": [
    "CVE-2026-61798"
  ],
  "title": "netty-incubator-codec-ohttp implements Oblivious HTTP (OHTTP) gateway and client functionality using Netty.",
  "summary": "netty-incubator-codec-ohttp implements Oblivious HTTP (OHTTP) gateway and client functionality using Netty. Prior to 0.0.23.Final, BoringSSLAsymmetricCipherKeyPair.toString in codec-ohttp-hpke-classes-boringssl/src/main/java/io/netty/incubator/codec/hpke/boringssl/BoringSSLAsymmetricCipherKeyPair.java includes its private parameter, BoringSSLAsymmetricKeyParameter.toString in codec-ohttp-hpke-classes-boringssl/src/main/java/io/netty/incubator/codec/hpke/boringssl/BoringSSLAsymmetricKeyParameter.java renders the complete private-key byte array when isPrivate is true, and BoringSSL.EVP_HPKE_KEY_init_or_throw in codec-ohttp-hpke-classes-boringssl/src/main/java/io/netty/incubator/codec/hpke/boringssl/BoringSSL.java includes rejected privateKeyBytes in an exception message. Applications that log affected key-pair objects or initialization exceptions can persist complete HPKE private key material in logs or telemetry. Anyone who can read those records can recover the key and may compromise OHTTP message confidentiality or authenticity expectations while the key remains usable. This issue is fixed in version 0.0.23.Final.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
  "os": [],
  "languages": [
    "Java/Kotlin"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/netty/netty-incubator-codec-ohttp/security/advisories/GHSA-2mc4-j865-9q4r",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-61798",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-61798"
    },
    {
      "kind": "patch",
      "url": "https://github.com/netty/netty-incubator-codec-ohttp/commit/2ad8eed90e3e47a23e46589b5c68463b4741c04c",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/netty/netty-incubator-codec-ohttp/releases/tag/netty-incubator-codec-parent-ohttp-0.0.23.Final",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-19T22:18:06.490Z",
  "updatedAt": "2026-11-19T22:18:06.627Z",
  "firstSeenAt": "2026-11-20T03:52:02.594Z",
  "week": "2026-W47"
}
---

# netty\-incubator\-codec\-ohttp implements Oblivious HTTP \(OHTTP\) gateway and client functionality using Netty\.

- **ID**: CVE\-2026\-61798
- **危険度**: High（重要） (CVSS 8.1)
- **言語**: Java/Kotlin
- **公開**: 2026-11-19

## 原文

netty\-incubator\-codec\-ohttp implements Oblivious HTTP \(OHTTP\) gateway and client functionality using Netty\. Prior to 0\.0\.23\.Final, BoringSSLAsymmetricCipherKeyPair\.toString in codec\-ohttp\-hpke\-classes\-boringssl/src/main/java/io/netty/incubator/codec/hpke/boringssl/BoringSSLAsymmetricCipherKeyPair\.java includes its private parameter, BoringSSLAsymmetricKeyParameter\.toString in codec\-ohttp\-hpke\-classes\-boringssl/src/main/java/io/netty/incubator/codec/hpke/boringssl/BoringSSLAsymmetricKeyParameter\.java renders the complete private\-key byte array when isPrivate is true, and BoringSSL\.EVP\_HPKE\_KEY\_init\_or\_throw in codec\-ohttp\-hpke\-classes\-boringssl/src/main/java/io/netty/incubator/codec/hpke/boringssl/BoringSSL\.java includes rejected privateKeyBytes in an exception message\. Applications that log affected key\-pair objects or initialization exceptions can persist complete HPKE private key material in logs or telemetry\. Anyone who can read those records can recover the key and may compromise OHTTP message confidentiality or authenticity expectations while the key remains usable\. This issue is fixed in version 0\.0\.23\.Final\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/netty/netty-incubator-codec-ohttp/security/advisories/GHSA-2mc4-j865-9q4r>)
- [NVD CVE\-2026\-61798](<https://nvd.nist.gov/vuln/detail/CVE-2026-61798>)
- [修正 \(github\.com\)](<https://github.com/netty/netty-incubator-codec-ohttp/commit/2ad8eed90e3e47a23e46589b5c68463b4741c04c>)
- [github\.com](<https://github.com/netty/netty-incubator-codec-ohttp/releases/tag/netty-incubator-codec-parent-ohttp-0.0.23.Final>)
