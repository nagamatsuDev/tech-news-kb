---
{
  "uuid": "7c8b6d6a-e856-4eca-bb4b-b284bd6fefee",
  "ids": [
    "CVE-2026-76173"
  ],
  "title": "Blind SQL injection vulnerability in the public endpoint `public/webhook/receiver.php` of the WhatsApp module for Dolibarr 1.9.",
  "summary": "Blind SQL injection vulnerability in the public endpoint `public/webhook/receiver.php` of the WhatsApp module for Dolibarr 1.9. The phone number value derived from the `data.key.remoteJid` parameter, received via a JSON request, is incorporated into an SQL query without escaping or parameterization. With the WHATSAPP_WEBHOOK_ALLOW option enabled, an unauthenticated remote attacker could manipulate this parameter to alter the query. Exploitation using a timing-based technique could allow an attacker to extract information from the database and cause service disruption.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.8,
  "cvssVector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:N/VA:L/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
  "os": [],
  "languages": [
    "PHP"
  ],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-76173",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-76173"
    },
    {
      "kind": "reference",
      "url": "https://www.incibe.es/en/incibe-cert/notices/aviso/sql-injection-whatsapp-dolibarr-sgestion-easysoft",
      "host": "www.incibe.es",
      "label": "www.incibe.es"
    }
  ],
  "publishedAt": "2026-11-12T10:17:29.353Z",
  "updatedAt": "2026-11-17T18:17:58.833Z",
  "firstSeenAt": "2026-11-18T04:00:41.687Z",
  "week": "2026-W46"
}
---

# Blind SQL injection vulnerability in the public endpoint \`public/webhook/receiver\.php\` of the WhatsApp module for Dolibarr 1\.9\.

- **ID**: CVE\-2026\-76173
- **危険度**: High（重要） (CVSS 8.8)
- **言語**: PHP
- **公開**: 2026-11-12

## 原文

Blind SQL injection vulnerability in the public endpoint \`public/webhook/receiver\.php\` of the WhatsApp module for Dolibarr 1\.9\. The phone number value derived from the \`data\.key\.remoteJid\` parameter, received via a JSON request, is incorporated into an SQL query without escaping or parameterization\. With the WHATSAPP\_WEBHOOK\_ALLOW option enabled, an unauthenticated remote attacker could manipulate this parameter to alter the query\. Exploitation using a timing\-based technique could allow an attacker to extract information from the database and cause service disruption\.

## リンク

- [NVD CVE\-2026\-76173](<https://nvd.nist.gov/vuln/detail/CVE-2026-76173>)
- [www\.incibe\.es](<https://www.incibe.es/en/incibe-cert/notices/aviso/sql-injection-whatsapp-dolibarr-sgestion-easysoft>)
