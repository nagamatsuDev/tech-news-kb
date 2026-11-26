---
{
  "uuid": "dfac79b9-b7af-4360-bf9f-3e08df7ed50e",
  "ids": [
    "CVE-2026-136507"
  ],
  "title": "psqlODBC parsed and built connection strings in ways that let a value end early:\n\n- In a braced value, such as PWD={…}, a trailing byte 0...",
  "summary": "psqlODBC parsed and built connection strings in ways that let a value end early:\n\n- In a braced value, such as PWD={…}, a trailing byte 0x7d of a GBK, Big5 or SJIS character was taken for the closing brace.\n- A braced value that ended right after an escaped }} was not reported as unterminated, and its contents were parsed as further keywords.\n- SQLConnectW(), SQLDriverConnectW() and SQLBrowseConnectW() cut a connection string whose UTF-8 form is longer than 32767 bytes, which changes how the rest of it is parsed.\n- On Windows with MSDTC, the password and user name were put into the XA open string without escaping, and the XA library copied each item of that string into a 64-byte stack buffer.\n- Percent-encoding a long password wrote one byte past a 4096-byte stack buffer.\n\nAn end user who supplies a password, or another value the application puts into the connection string, can set other connection keywords, for example to connect the application to a server of their choosing. The MSDTC case can also overflow a stack buffer in the process that loads the XA library.\n\nVersions up to and including psqlODBC 18.00.0006 are affected.",
  "translation": "none",
  "severity": "high",
  "cvssScore": 8.1,
  "cvssVector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
  "os": [
    "Windows"
  ],
  "languages": [],
  "products": [],
  "packages": [],
  "sources": [
    "nvd"
  ],
  "links": [
    {
      "kind": "vendor",
      "url": "https://github.com/postgresql-interfaces/psqlodbc/security/advisories/GHSA-7638-f7xp-wv22",
      "host": "github.com",
      "label": "ベンダー発表 (github.com)"
    },
    {
      "kind": "detail",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-136507",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-136507"
    },
    {
      "kind": "reference",
      "url": "https://odbc.postgresql.org/changelog/",
      "host": "odbc.postgresql.org",
      "label": "odbc.postgresql.org"
    }
  ],
  "publishedAt": "2026-11-25T23:17:23.830Z",
  "updatedAt": "2026-11-25T23:17:23.830Z",
  "firstSeenAt": "2026-11-26T04:41:30.937Z",
  "week": "2026-W48"
}
---

# psqlODBC parsed and built connection strings in ways that let a value end early\: \- In a braced value, such as PWD\=\{…\}, a trailing byte 0\.\.\.

- **ID**: CVE\-2026\-136507
- **危険度**: High（重要） (CVSS 8.1)
- **OS**: Windows
- **公開**: 2026-11-25

## 原文

psqlODBC parsed and built connection strings in ways that let a value end early\:
  
\- In a braced value, such as PWD\=\{…\}, a trailing byte 0x7d of a GBK, Big5 or SJIS character was taken for the closing brace\.  
\- A braced value that ended right after an escaped \}\} was not reported as unterminated, and its contents were parsed as further keywords\.  
\- SQLConnectW\(\), SQLDriverConnectW\(\) and SQLBrowseConnectW\(\) cut a connection string whose UTF\-8 form is longer than 32767 bytes, which changes how the rest of it is parsed\.  
\- On Windows with MSDTC, the password and user name were put into the XA open string without escaping, and the XA library copied each item of that string into a 64\-byte stack buffer\.  
\- Percent\-encoding a long password wrote one byte past a 4096\-byte stack buffer\.
  
An end user who supplies a password, or another value the application puts into the connection string, can set other connection keywords, for example to connect the application to a server of their choosing\. The MSDTC case can also overflow a stack buffer in the process that loads the XA library\.
  
Versions up to and including psqlODBC 18\.00\.0006 are affected\.

## リンク

- [ベンダー発表 \(github\.com\)](<https://github.com/postgresql-interfaces/psqlodbc/security/advisories/GHSA-7638-f7xp-wv22>)
- [NVD CVE\-2026\-136507](<https://nvd.nist.gov/vuln/detail/CVE-2026-136507>)
- [odbc\.postgresql\.org](<https://odbc.postgresql.org/changelog/>)
