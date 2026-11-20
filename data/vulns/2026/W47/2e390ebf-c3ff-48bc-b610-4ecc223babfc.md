---
{
  "uuid": "2e390ebf-c3ff-48bc-b610-4ecc223babfc",
  "ids": [
    "CVE-2026-95839",
    "GHSA-vwhp-8p66-mq4f"
  ],
  "title": "containerd image-triggered daemon crash via malformed digest in subject-annotated descriptor",
  "summary": "### Impact A bug in containerd's image manifest processing causes an unrecovered panic when a child descriptor contains the `io.containerd.manifest.subject` annotation and a malformed digest. Pulling or importing such an image through the transfer service (including default CRI `PullImage` requests) crashes the containerd daemon. In Kubernetes environments, `kubelet` retries failed image pulls with backoff, allowing a pod referencing an untrusted image to repeatedly crash containerd and disrupt container operations on the worker node. ### Patches This bug has been fixed in containerd 2.4.2, 2.",
  "translation": "none",
  "severity": "high",
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N",
  "os": [],
  "languages": [
    "Go"
  ],
  "products": [],
  "packages": [
    {
      "ecosystem": "Go",
      "name": "github.com/containerd/containerd/v2",
      "vulnerableRange": ">= 2.2.0, < 2.2.10",
      "fixedVersion": "2.2.10"
    },
    {
      "ecosystem": "Go",
      "name": "github.com/containerd/containerd/v2",
      "vulnerableRange": ">= 2.3.0, < 2.3.7",
      "fixedVersion": "2.3.7"
    },
    {
      "ecosystem": "Go",
      "name": "github.com/containerd/containerd/v2",
      "vulnerableRange": ">= 2.4.0, < 2.4.2",
      "fixedVersion": "2.4.2"
    }
  ],
  "sources": [
    "nvd",
    "ghsa"
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
      "kind": "detail",
      "url": "https://github.com/advisories/GHSA-vwhp-8p66-mq4f",
      "host": "github.com",
      "label": "GitHub Advisory GHSA-vwhp-8p66-mq4f"
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
  "updatedAt": "2026-11-19T22:46:25Z",
  "firstSeenAt": "2026-11-17T04:56:36.770Z",
  "week": "2026-W47"
}
---

# containerd image\-triggered daemon crash via malformed digest in subject\-annotated descriptor

- **ID**: CVE\-2026\-95839 / GHSA\-vwhp\-8p66\-mq4f
- **危険度**: High（重要）
- **言語**: Go
- **パッケージ**: Go/github\.com/containerd/containerd/v2 &gt;\= 2\.2\.0, &lt; 2\.2\.10 → 2\.2\.10, Go/github\.com/containerd/containerd/v2 &gt;\= 2\.3\.0, &lt; 2\.3\.7 → 2\.3\.7, Go/github\.com/containerd/containerd/v2 &gt;\= 2\.4\.0, &lt; 2\.4\.2 → 2\.4\.2
- **公開**: 2026-11-16

## 原文

\#\#\# Impact A bug in containerd's image manifest processing causes an unrecovered panic when a child descriptor contains the \`io\.containerd\.manifest\.subject\` annotation and a malformed digest\. Pulling or importing such an image through the transfer service \(including default CRI \`PullImage\` requests\) crashes the containerd daemon\. In Kubernetes environments, \`kubelet\` retries failed image pulls with backoff, allowing a pod referencing an untrusted image to repeatedly crash containerd and disrupt container operations on the worker node\. \#\#\# Patches This bug has been fixed in containerd 2\.4\.2, 2\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f>)
- [NVD CVE\-2026\-95839](<https://nvd.nist.gov/vuln/detail/CVE-2026-95839>)
- [GitHub Advisory GHSA\-vwhp\-8p66\-mq4f](<https://github.com/advisories/GHSA-vwhp-8p66-mq4f>)
- [修正 \(github\.com\)](<https://github.com/containerd/containerd/commit/20a3b31390653d7a83fdaeb0c318b01a263c9d9a>)
- [修正 \(github\.com\)](<https://github.com/containerd/containerd/commit/2181d7baa2a303ea2082e5c0f1a7697787b61ef2>)
- [修正 \(github\.com\)](<https://github.com/containerd/containerd/commit/2455fec2f7bfa63adb1f993c63ba0cea9cdedb8c>)
- [github\.com](<https://github.com/containerd/containerd/releases/tag/v2.2.10>)
- [github\.com](<https://github.com/containerd/containerd/releases/tag/v2.3.7>)
- [github\.com](<https://github.com/containerd/containerd/releases/tag/v2.4.2>)
