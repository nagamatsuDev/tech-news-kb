---
{
  "uuid": "a3ae3edd-93b6-49ec-8504-ea8bb7bdea87",
  "ids": [
    "CVE-2026-136404"
  ],
  "title": "ntop n2n supernode 3.0 through 3.1.1 contains a stack-based buffer overflow vulnerability that allows remote unauthenticated attackers to...",
  "summary": "ntop n2n supernode 3.0 through 3.1.1 contains a stack-based buffer overflow vulnerability that allows remote unauthenticated attackers to leak memory and execute code by sending an untrusted 16-bit auth token_size in REGISTER_SUPER_NAK datagrams. Attackers can register an edge in a chosen community, then send an oversized token_size to leak stack canaries and pointers, overwrite the return address, or crash the supernode.",
  "translation": "none",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-136404",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-136404"
    },
    {
      "kind": "patch",
      "url": "https://github.com/ntop/n2n/commit/854fbbe01bbf131bf4cb88f8450d7084267668e1",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/ntop/n2n/pull/1243",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/ntop/n2n/blob/a6f94564f2d6aaad925254590329c274058a53e5/src/sn_utils.c#L2309-L2344",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/ntop/n2n/blob/a6f94564f2d6aaad925254590329c274058a53e5/src/wire.c#L649-L679",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://www.vulncheck.com/advisories/ntop-n2n-3.0-through-3.1.1-stack-buffer-overflow-via-register-super-nak-token-size",
      "host": "www.vulncheck.com",
      "label": "www.vulncheck.com"
    }
  ],
  "publishedAt": "2026-11-24T19:18:16.040Z",
  "updatedAt": "2026-11-25T15:17:46.163Z",
  "firstSeenAt": "2026-11-25T05:13:17.065Z",
  "week": "2026-W48"
}
---

# ntop n2n supernode 3\.0 through 3\.1\.1 contains a stack\-based buffer overflow vulnerability that allows remote unauthenticated attackers to\.\.\.

- **ID**: CVE\-2026\-136404
- **危険度**: Critical（緊急） (CVSS 9.8)
- **公開**: 2026-11-24

## 原文

ntop n2n supernode 3\.0 through 3\.1\.1 contains a stack\-based buffer overflow vulnerability that allows remote unauthenticated attackers to leak memory and execute code by sending an untrusted 16\-bit auth token\_size in REGISTER\_SUPER\_NAK datagrams\. Attackers can register an edge in a chosen community, then send an oversized token\_size to leak stack canaries and pointers, overwrite the return address, or crash the supernode\.

## リンク

- [NVD CVE\-2026\-136404](<https://nvd.nist.gov/vuln/detail/CVE-2026-136404>)
- [修正 \(github\.com\)](<https://github.com/ntop/n2n/commit/854fbbe01bbf131bf4cb88f8450d7084267668e1>)
- [修正 \(github\.com\)](<https://github.com/ntop/n2n/pull/1243>)
- [github\.com](<https://github.com/ntop/n2n/blob/a6f94564f2d6aaad925254590329c274058a53e5/src/sn_utils.c#L2309-L2344>)
- [github\.com](<https://github.com/ntop/n2n/blob/a6f94564f2d6aaad925254590329c274058a53e5/src/wire.c#L649-L679>)
- [www\.vulncheck\.com](<https://www.vulncheck.com/advisories/ntop-n2n-3.0-through-3.1.1-stack-buffer-overflow-via-register-super-nak-token-size>)
