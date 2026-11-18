---
{
  "uuid": "ce3b5f4f-2ecd-43ad-b1a7-712273ec4ffe",
  "ids": [
    "CVE-2026-124539"
  ],
  "title": "JSON::XS versions before 4.05 for Perl leak the decoded key of an object rejected for a missing colon in decode_hv.",
  "summary": "JSON::XS versions before 4.05 for Perl leak the decoded key of an object rejected for a missing colon in decode_hv.\n\nUnless it is short plain ASCII, a quoted key is decoded into a new scalar. Nothing frees that scalar when the object is rejected for a missing ':' after the key.\n\nA process that keeps running after a failed decode retains one key per rejected document, with its size chosen by the sender. Repeated requests exhaust process memory.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124539",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-124539"
    },
    {
      "kind": "reference",
      "url": "https://metacpan.org/release/MLEHMANN/JSON-XS-4.05/changes",
      "host": "metacpan.org",
      "label": "metacpan.org"
    }
  ],
  "publishedAt": "2026-11-14T12:17:43.560Z",
  "updatedAt": "2026-11-17T16:17:42.953Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W46"
}
---

# JSON\:\:XS versions before 4\.05 for Perl leak the decoded key of an object rejected for a missing colon in decode\_hv\.

- **ID**: CVE\-2026\-124539
- **危険度**: Critical（緊急） (CVSS 9.1)
- **公開**: 2026-11-14

## 原文

JSON\:\:XS versions before 4\.05 for Perl leak the decoded key of an object rejected for a missing colon in decode\_hv\.
  
Unless it is short plain ASCII, a quoted key is decoded into a new scalar\. Nothing frees that scalar when the object is rejected for a missing '\:' after the key\.
  
A process that keeps running after a failed decode retains one key per rejected document, with its size chosen by the sender\. Repeated requests exhaust process memory\.

## リンク

- [NVD CVE\-2026\-124539](<https://nvd.nist.gov/vuln/detail/CVE-2026-124539>)
- [metacpan\.org](<https://metacpan.org/release/MLEHMANN/JSON-XS-4.05/changes>)
