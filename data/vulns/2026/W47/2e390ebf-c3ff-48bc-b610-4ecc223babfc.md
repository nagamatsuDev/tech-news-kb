---
{
  "uuid": "2e390ebf-c3ff-48bc-b610-4ecc223babfc",
  "ids": [
    "CVE-2026-95839"
  ],
  "title": "containerd is an open-source container runtime.",
  "summary": "containerd is an open-source container runtime. From 2.2.0 until 2.2.10, 2.3.7, and 2.4.2, image manifest processing through the transfer service can encounter a child descriptor containing the io.containerd.manifest.subject annotation and a malformed digest. Pulling or importing such an image, including through a default CRI PullImage request, can trigger an unrecovered panic and crash the containerd daemon. In Kubernetes, kubelet retries can repeatedly trigger the crash and disrupt container operations on the worker node. This issue is fixed in versions 2.2.10, 2.3.7, and 2.4.2.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.1,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
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
      "url": "https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-95839",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-95839"
    },
    {
      "kind": "patch",
      "url": "https://github.com/containerd/containerd/commit/20a3b31390653d7a83fdaeb0c318b01a263c9d9a",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/containerd/containerd/commit/2181d7baa2a303ea2082e5c0f1a7697787b61ef2",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "patch",
      "url": "https://github.com/containerd/containerd/commit/2455fec2f7bfa63adb1f993c63ba0cea9cdedb8c",
      "host": "github.com",
      "label": "修正 (github.com)"
    },
    {
      "kind": "reference",
      "url": "https://github.com/containerd/containerd/releases/tag/v2.2.10",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/containerd/containerd/releases/tag/v2.3.7",
      "host": "github.com",
      "label": "github.com"
    },
    {
      "kind": "reference",
      "url": "https://github.com/containerd/containerd/releases/tag/v2.4.2",
      "host": "github.com",
      "label": "github.com"
    }
  ],
  "publishedAt": "2026-11-16T20:19:20.417Z",
  "updatedAt": "2026-11-16T20:19:20.417Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# containerd is an open\-source container runtime\.

- **ID**: CVE\-2026\-95839
- **危険度**: High（重要） (CVSS 7.1)
- **公開**: 2026-11-16

## 原文

containerd is an open\-source container runtime\. From 2\.2\.0 until 2\.2\.10, 2\.3\.7, and 2\.4\.2, image manifest processing through the transfer service can encounter a child descriptor containing the io\.containerd\.manifest\.subject annotation and a malformed digest\. Pulling or importing such an image, including through a default CRI PullImage request, can trigger an unrecovered panic and crash the containerd daemon\. In Kubernetes, kubelet retries can repeatedly trigger the crash and disrupt container operations on the worker node\. This issue is fixed in versions 2\.2\.10, 2\.3\.7, and 2\.4\.2\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f>)
- [NVD CVE\-2026\-95839](<https://nvd.nist.gov/vuln/detail/CVE-2026-95839>)
- [修正 \(github\.com\)](<https://github.com/containerd/containerd/commit/20a3b31390653d7a83fdaeb0c318b01a263c9d9a>)
- [修正 \(github\.com\)](<https://github.com/containerd/containerd/commit/2181d7baa2a303ea2082e5c0f1a7697787b61ef2>)
- [修正 \(github\.com\)](<https://github.com/containerd/containerd/commit/2455fec2f7bfa63adb1f993c63ba0cea9cdedb8c>)
- [github\.com](<https://github.com/containerd/containerd/releases/tag/v2.2.10>)
- [github\.com](<https://github.com/containerd/containerd/releases/tag/v2.3.7>)
- [github\.com](<https://github.com/containerd/containerd/releases/tag/v2.4.2>)
