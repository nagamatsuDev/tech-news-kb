---
{
  "uuid": "c9df5915-6fad-45e0-b6df-7c5c7aeddccb",
  "ids": [
    "CVE-2026-123865"
  ],
  "title": "An unauthenticated HTTP/2 client can permanently leak Node.js server memory and file descriptors.",
  "summary": "An unauthenticated HTTP/2 client can permanently leak Node.js server memory and file descriptors. If a peer triggers a protocol error, for example an oversized frame header, while the session is already shutting down, nghttp2 tears the session down internally but Node.js never notices, leaving a dangling session: the socket stays in CLOSE_WAIT and all of Node.js's HTTP/2 state for that connection is held in memory indefinitely, with no further cost to the attacker. The attacker can start the shutdown remotely by sending GOAWAY(NO_ERROR), so it is reliable against default HTTP/2 servers. It is an incomplete-fix case of CVE-2026-48937: that fix detected nghttp2 internal terminations by watching for GOAWAY sent while not shutting down, but missed terminations that arrive while the session is already shutting down. This vulnerability affects Node.js 26.x, 24.x, and 22.x.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.5,
  "cvssVector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
  "os": [],
  "languages": [
    "JavaScript/TypeScript"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://nodejs.org/en/blog/vulnerability/november-2026-security-releases",
      "host": "nodejs.org",
      "label": "ベンダー発表 (nodejs.org)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123865",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-123865"
    },
    {
      "kind": "reference",
      "url": "https://cna.openjsf.org/security-advisories.html",
      "host": "cna.openjsf.org",
      "label": "cna.openjsf.org"
    }
  ],
  "publishedAt": "2026-11-11T19:17:33.000Z",
  "updatedAt": "2026-11-16T22:18:16.647Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W46"
}
---

# An unauthenticated HTTP/2 client can permanently leak Node\.js server memory and file descriptors\.

- **ID**: CVE\-2026\-123865
- **危険度**: High（重要） (CVSS 7.5)
- **言語**: JavaScript/TypeScript
- **公開**: 2026-11-11

## 原文

An unauthenticated HTTP/2 client can permanently leak Node\.js server memory and file descriptors\. If a peer triggers a protocol error, for example an oversized frame header, while the session is already shutting down, nghttp2 tears the session down internally but Node\.js never notices, leaving a dangling session\: the socket stays in CLOSE\_WAIT and all of Node\.js's HTTP/2 state for that connection is held in memory indefinitely, with no further cost to the attacker\. The attacker can start the shutdown remotely by sending GOAWAY\(NO\_ERROR\), so it is reliable against default HTTP/2 servers\. It is an incomplete\-fix case of CVE\-2026\-48937\: that fix detected nghttp2 internal terminations by watching for GOAWAY sent while not shutting down, but missed terminations that arrive while the session is already shutting down\. This vulnerability affects Node\.js 26\.x, 24\.x, and 22\.x\.

## リンク

- [ベンダー発表 \(nodejs\.org\)](<https://nodejs.org/en/blog/vulnerability/november-2026-security-releases>)
- [NVD CVE\-2026\-123865](<https://nvd.nist.gov/vuln/detail/CVE-2026-123865>)
- [cna\.openjsf\.org](<https://cna.openjsf.org/security-advisories.html>)
