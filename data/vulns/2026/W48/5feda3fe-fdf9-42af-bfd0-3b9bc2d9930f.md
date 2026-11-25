---
{
  "uuid": "5feda3fe-fdf9-42af-bfd0-3b9bc2d9930f",
  "ids": [
    "CVE-2026-136328"
  ],
  "title": "A flaw was found in the file-psd plugin in GIMP.",
  "summary": "A flaw was found in the file-psd plugin in GIMP. When processing a specially crafted PSD (Photoshop Document) image file in LAB color mode, the plugin does not properly validate that a fourth channel is present when the transparency flag is set. This mismatch causes the merged-image path to allocate buffers for three components while performing color conversion with four-component formats, resulting in a heap-based buffer overflow. This issue can result in an application crash, leading to a denial of service, or potentially allow for arbitrary code execution.",
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
      "url": "https://access.redhat.com/security/cve/CVE-2026-136328",
      "host": "access.redhat.com",
      "label": "ベンダー発表 (access.redhat.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-136328",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-136328"
    },
    {
      "kind": "reference",
      "url": "https://bugzilla.redhat.com/show_bug.cgi?id=2583381",
      "host": "bugzilla.redhat.com",
      "label": "bugzilla.redhat.com"
    },
    {
      "kind": "reference",
      "url": "https://gitlab.gnome.org/GNOME/gimp/-/work_items/17002",
      "host": "gitlab.gnome.org",
      "label": "gitlab.gnome.org"
    }
  ],
  "publishedAt": "2026-11-24T20:18:53.347Z",
  "updatedAt": "2026-11-24T20:18:53.480Z",
  "firstSeenAt": "2026-11-25T05:13:17.065Z",
  "week": "2026-W48"
}
---

# A flaw was found in the file\-psd plugin in GIMP\.

- **ID**: CVE\-2026\-136328
- **危険度**: High（重要） (CVSS 7.8)
- **公開**: 2026-11-24

## 原文

A flaw was found in the file\-psd plugin in GIMP\. When processing a specially crafted PSD \(Photoshop Document\) image file in LAB color mode, the plugin does not properly validate that a fourth channel is present when the transparency flag is set\. This mismatch causes the merged\-image path to allocate buffers for three components while performing color conversion with four\-component formats, resulting in a heap\-based buffer overflow\. This issue can result in an application crash, leading to a denial of service, or potentially allow for arbitrary code execution\.

## リンク

- [ベンダー発表 \(access\.redhat\.com\)](<https://access.redhat.com/security/cve/CVE-2026-136328>)
- [NVD CVE\-2026\-136328](<https://nvd.nist.gov/vuln/detail/CVE-2026-136328>)
- [bugzilla\.redhat\.com](<https://bugzilla.redhat.com/show_bug.cgi?id=2583381>)
- [gitlab\.gnome\.org](<https://gitlab.gnome.org/GNOME/gimp/-/work_items/17002>)
