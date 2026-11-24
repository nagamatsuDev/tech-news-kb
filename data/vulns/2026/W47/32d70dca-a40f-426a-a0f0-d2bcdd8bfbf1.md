---
{
  "uuid": "32d70dca-a40f-426a-a0f0-d2bcdd8bfbf1",
  "ids": [
    "CVE-2026-99388"
  ],
  "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nsmb: smbdirect: fix buffer length underflow in RDMA transfers\n\nWhen ...",
  "summary": "In the Linux kernel, the following vulnerability has been resolved:\n\nsmb: smbdirect: fix buffer length underflow in RDMA transfers\n\nWhen a remote buffer descriptor is larger than the remaining local\nbuffer, smbdirect_connection_rdma_xmit() clamps its length and sets\nbuf_len to zero. The common accounting code then subtracts the clamped\nlength from buf_len, causing it to underflow. If another descriptor\nfollows, the loop processes it with a wrapped remaining length and\nincludes memory beyond the local buffer in the RDMA transfer.\n\nA client can trigger an out-of-bounds kernel write with an SMB WRITE\nrequest, or an out-of-bounds kernel read with an SMB READ request, by\nsupplying multiple RDMA buffer descriptors with an oversized descriptor\nbefore the last one.\n\nRemove the premature assignment to buf_len. Subtracting the clamped length\nalready consumes the remaining buffer, so the next iteration stops and\nonly descriptors within the local buffer are used to build work requests.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
  "os": [
    "Linux"
  ],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99388",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-99388"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/1f5c774488fa2dabe6667cb26888aaea39c4ead6",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/2e4a60ba7adc1e7529f8923a8b1e452c6ba53c76",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/5072f32330c71de91c1a844e7becaee48d743561",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/7193241a49c958782ba4b8df06da3734d1e317d2",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/94b94000981c56aa01e9ca2b411dff15600c079c",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    }
  ],
  "publishedAt": "2026-11-19T15:17:51.087Z",
  "updatedAt": "2026-11-23T08:17:43.523Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# In the Linux kernel, the following vulnerability has been resolved\: smb\: smbdirect\: fix buffer length underflow in RDMA transfers When \.\.\.

- **ID**: CVE\-2026\-99388
- **危険度**: High（重要） (CVSS 8.8)
- **OS**: Linux
- **公開**: 2026-11-19

## 原文

In the Linux kernel, the following vulnerability has been resolved\:
  
smb\: smbdirect\: fix buffer length underflow in RDMA transfers
  
When a remote buffer descriptor is larger than the remaining local  
buffer, smbdirect\_connection\_rdma\_xmit\(\) clamps its length and sets  
buf\_len to zero\. The common accounting code then subtracts the clamped  
length from buf\_len, causing it to underflow\. If another descriptor  
follows, the loop processes it with a wrapped remaining length and  
includes memory beyond the local buffer in the RDMA transfer\.
  
A client can trigger an out\-of\-bounds kernel write with an SMB WRITE  
request, or an out\-of\-bounds kernel read with an SMB READ request, by  
supplying multiple RDMA buffer descriptors with an oversized descriptor  
before the last one\.
  
Remove the premature assignment to buf\_len\. Subtracting the clamped length  
already consumes the remaining buffer, so the next iteration stops and  
only descriptors within the local buffer are used to build work requests\.

## リンク

- [NVD CVE\-2026\-99388](<https://nvd.nist.gov/vuln/detail/CVE-2026-99388>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/1f5c774488fa2dabe6667cb26888aaea39c4ead6>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/2e4a60ba7adc1e7529f8923a8b1e452c6ba53c76>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/5072f32330c71de91c1a844e7becaee48d743561>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/7193241a49c958782ba4b8df06da3734d1e317d2>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/94b94000981c56aa01e9ca2b411dff15600c079c>)
