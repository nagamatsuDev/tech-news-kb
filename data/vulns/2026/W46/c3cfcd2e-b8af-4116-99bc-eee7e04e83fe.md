---
{
  "uuid": "c3cfcd2e-b8af-4116-99bc-eee7e04e83fe",
  "ids": [
    "CVE-2026-124279"
  ],
  "title": "Allocation of Resources Without Limits or Throttling vulnerability in elixir-grpc grpc_server allows unauthenticated attackers to exhaust...",
  "summary": "Allocation of Resources Without Limits or Throttling vulnerability in elixir-grpc grpc_server allows unauthenticated attackers to exhaust server memory via client-streaming or bidirectional-streaming requests.\n\nThe streaming read clause of GRPC.Server.Adapters.Cowboy.Handler.info/3 (grpc_server/lib/grpc/server/adapters/cowboy/handler.ex) asks Cowboy for up to 8,000,000 bytes per read and compares the running total with max_body_size only after the read returns. The gRPC length prefix of a message is not checked before the message is buffered. Each stream can therefore buffer up to one full read beyond the configured limit before it is refused, and many concurrent streams exhaust node memory. Releases before 1.0.6 apply no limit to streaming requests at all.\n\nThis issue affects grpc_server: from 1.0.0 before 1.1.0.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.2,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://github.com/elixir-grpc/grpc/security/advisories/GHSA-736x-r87j-jhcm",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124279",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-124279"
    },
    {
      "kind": "patch",
      "url": "https://github.com/elixir-grpc/grpc/commit/49e18c3ec6bb9afe2f712caad3dbab5c56a68a00",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/elixir-grpc/grpc/commit/b1e771d558941b1ed4b6de8b39f6a5375543db01",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://cna.erlef.org/cves/CVE-2026-124279.html",
      "host": "cna.erlef.org",
      "label": "cna.erlef.org"
    },
    {
      "kind": "reference",
      "url": "https://osv.dev/vulnerability/EEF-CVE-2026-124279",
      "host": "osv.dev",
      "label": "osv.dev"
    }
  ],
  "publishedAt": "2026-11-13T17:17:20.593Z",
  "updatedAt": "2026-11-13T20:18:17.663Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W46"
}
---

# Allocation of Resources Without Limits or Throttling vulnerability in elixir\-grpc grpc\_server allows unauthenticated attackers to exhaust\.\.\.

- **ID**: CVE\-2026\-124279
- **危険度**: High（重要） (CVSS 8.2)
- **公開**: 2026-11-13

## 原文

Allocation of Resources Without Limits or Throttling vulnerability in elixir\-grpc grpc\_server allows unauthenticated attackers to exhaust server memory via client\-streaming or bidirectional\-streaming requests\.
  
The streaming read clause of GRPC\.Server\.Adapters\.Cowboy\.Handler\.info/3 \(grpc\_server/lib/grpc/server/adapters/cowboy/handler\.ex\) asks Cowboy for up to 8,000,000 bytes per read and compares the running total with max\_body\_size only after the read returns\. The gRPC length prefix of a message is not checked before the message is buffered\. Each stream can therefore buffer up to one full read beyond the configured limit before it is refused, and many concurrent streams exhaust node memory\. Releases before 1\.0\.6 apply no limit to streaming requests at all\.
  
This issue affects grpc\_server\: from 1\.0\.0 before 1\.1\.0\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/elixir-grpc/grpc/security/advisories/GHSA-736x-r87j-jhcm>)
- [NVD CVE\-2026\-124279](<https://nvd.nist.gov/vuln/detail/CVE-2026-124279>)
- [修正 \(github\.com\)](<https://github.com/elixir-grpc/grpc/commit/49e18c3ec6bb9afe2f712caad3dbab5c56a68a00>)
- [修正 \(github\.com\)](<https://github.com/elixir-grpc/grpc/commit/b1e771d558941b1ed4b6de8b39f6a5375543db01>)
- [cna\.erlef\.org](<https://cna.erlef.org/cves/CVE-2026-124279.html>)
- [osv\.dev](<https://osv.dev/vulnerability/EEF-CVE-2026-124279>)
