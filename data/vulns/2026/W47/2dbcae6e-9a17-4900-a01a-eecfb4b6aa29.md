---
{
  "uuid": "2dbcae6e-9a17-4900-a01a-eecfb4b6aa29",
  "ids": [
    "CVE-2026-119528"
  ],
  "title": "A flaw was found in GIMP.",
  "summary": "A flaw was found in GIMP. The PSD plug-in’s image resource header loader uses an incorrect destination size when copying a converted resource name into a fixed stack buffer. Opening a crafted PSD file can cause a stack-based buffer overflow, leading to a crash and potentially arbitrary code execution.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.8,
  "cvssVector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
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
      "url": "https://access.redhat.com/errata/RHSA-2026:98532",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "vendor",
      "url": "https://access.redhat.com/errata/RHSA-2026:99154",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "vendor",
      "url": "https://access.redhat.com/security/cve/CVE-2026-119528",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-119528",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-119528"
    },
    {
      "kind": "reference",
      "url": "https://bugzilla.redhat.com/show_bug.cgi?id=2563900",
      "host": "bugzilla.redhat.com",
      "label": "bugzilla.redhat.com"
    },
    {
      "kind": "reference",
      "url": "https://gitlab.gnome.org/GNOME/gimp/-/work_items/16799",
      "host": "gitlab.gnome.org",
      "label": "gitlab.gnome.org"
    }
  ],
  "publishedAt": "2026-10-30T14:16:45.143Z",
  "updatedAt": "2026-11-13T18:17:27.267Z",
  "firstSeenAt": "2026-11-16T07:24:38.436Z",
  "week": "2026-W47"
}
---

# A flaw was found in GIMP\.

- **ID**: CVE\-2026\-119528
- **危険度**: High（重要） (CVSS 7.8)
- **公開**: 2026-10-30

## 原文

A flaw was found in GIMP\. The PSD plug\-in’s image resource header loader uses an incorrect destination size when copying a converted resource name into a fixed stack buffer\. Opening a crafted PSD file can cause a stack\-based buffer overflow, leading to a crash and potentially arbitrary code execution\.

## リンク

- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/errata/RHSA-2026:98532>)
- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/errata/RHSA-2026:99154>)
- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/security/cve/CVE-2026-119528>)
- [NVD CVE\-2026\-119528](<https://nvd.nist.gov/vuln/detail/CVE-2026-119528>)
- [bugzilla\.redhat\.com](<https://bugzilla.redhat.com/show_bug.cgi?id=2563900>)
- [gitlab\.gnome\.org](<https://gitlab.gnome.org/GNOME/gimp/-/work_items/16799>)
