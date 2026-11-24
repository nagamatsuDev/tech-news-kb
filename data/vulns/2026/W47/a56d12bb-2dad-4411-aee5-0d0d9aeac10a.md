---
{
  "uuid": "a56d12bb-2dad-4411-aee5-0d0d9aeac10a",
  "ids": [
    "CVE-2026-99366"
  ],
  "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nnfsd: don't modify a session slot when replaying its cached reply\n\nn...",
  "summary": "In the Linux kernel, the following vulnerability has been resolved:\n\nnfsd: don't modify a session slot when replaying its cached reply\n\nnfsd4_sequence() claims a session slot by setting NFSD4_SLOT_INUSE\nunder nn->client_lock. A reply served from the slot's reply cache does\nnot claim it, and that distinction lived only in cstate->status, which\nnfsd4_sequence() set to nfserr_replay_cache. Commit cc028a10a48c\n(\"NFSD: Hoist status code encoding into XDR encoder functions\") moved\nnfsd4_proc_compound()'s cstate->status assignment below the out:\nlabel, and the replay path's goto out was the one path that relied on\nskipping it. The test in nfsd4_sequence_done() therefore no longer\nidentifies a replay, and every replay now stores its reply and clears\nNFSD4_SLOT_INUSE as though it owned the slot.\n\nNFSD4_SLOT_INUSE is the interlock: check_slot_seqid() rejects every\nsequence id for a slot that is in use, before replay_matches_cache()\nruns. A replay never sets it, so two replays can be in flight on the\nsame slot at once. One can read slot->sl_cred under nn->client_lock\nwhile the other's completion frees and rebuilds it from the XDR\nencoder without that lock. Two completions can also collide with each\nother and release the same group_info twice. free_svc_cred() leaves\ncr_uid, cr_gid and cr_flavor intact, so the reader passes every\nearlier test in same_creds() and dereferences a NULL cr_group_info.\nFrom a 6.12.91 production server:\n\n  BUG: kernel NULL pointer dereference, address: 0000000000000004\n  CPU: 63 UID: 0 PID: 39015 Comm: nfsd\n  RIP: 0010:same_creds+0x38/0xa0 [nfsd]\n  RDX: 0000000000000000\n  Call Trace:\n   nfsd4_sequence+0x6a8/0x910 [nfsd]\n   nfsd4_proc_compound+0x345/0x670 [nfsd]\n   nfsd_dispatch+0x100/0x220 [nfsd]\n   svc_process_common+0x311/0x700 [sunrpc]\n   svc_process+0x131/0x1c0 [sunrpc]\n   svc_recv+0x7ef/0x9c0 [sunrpc]\n   nfsd+0xa3/0x100 [nfsd]\n  Kernel panic - not syncing: Fatal exception\n\nSince v6.14 a live session's slot table can shrink, and the unowned\nstore becomes a use-after-free write. nfsd4_sequence() defers the\nshrink while a slot is in use, but it tests NFSD4_SLOT_INUSE, which a\nreplay does not set, so free_session_slots() can kfree() the slot the\nreplay still holds in cstate->slot.\n\nRecord the claim in cstate->slot_owned when nfsd4_sequence() accepts a\nrequest and test that in nfsd4_sequence_done(), so only the request\nthat claimed the slot updates its cached reply and clears\nNFSD4_SLOT_INUSE. svc_generic_init_request() zeroes the compound\nresponse before each request, so the flag starts clear.",
  "translation": "none",
  "severity": "critical",
  "cvssScore": 9.8,
  "cvssVector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99366",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-99366"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/065764e256ebff20201dca5bc6ff075c6cb62e17",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/0b5149b7ad8ccd64c61e887e2cf1af068b6210c9",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/2987838317501ff67b672ac2a441fe34b7729f3d",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/4e3c12151f13c4e51eb381f9377835fb94b9f56a",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/55ff12f6805a3afba9b1ee1b3b09d8e486770c24",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    }
  ],
  "publishedAt": "2026-11-19T15:17:48.317Z",
  "updatedAt": "2026-11-23T08:17:41.443Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# In the Linux kernel, the following vulnerability has been resolved\: nfsd\: don't modify a session slot when replaying its cached reply n\.\.\.

- **ID**: CVE\-2026\-99366
- **危険度**: Critical（緊急） (CVSS 9.8)
- **OS**: Linux
- **公開**: 2026-11-19

## 原文

In the Linux kernel, the following vulnerability has been resolved\:
  
nfsd\: don't modify a session slot when replaying its cached reply
  
nfsd4\_sequence\(\) claims a session slot by setting NFSD4\_SLOT\_INUSE  
under nn\-&gt;client\_lock\. A reply served from the slot's reply cache does  
not claim it, and that distinction lived only in cstate\-&gt;status, which  
nfsd4\_sequence\(\) set to nfserr\_replay\_cache\. Commit cc028a10a48c  
\("NFSD\: Hoist status code encoding into XDR encoder functions"\) moved  
nfsd4\_proc\_compound\(\)'s cstate\-&gt;status assignment below the out\:  
label, and the replay path's goto out was the one path that relied on  
skipping it\. The test in nfsd4\_sequence\_done\(\) therefore no longer  
identifies a replay, and every replay now stores its reply and clears  
NFSD4\_SLOT\_INUSE as though it owned the slot\.
  
NFSD4\_SLOT\_INUSE is the interlock\: check\_slot\_seqid\(\) rejects every  
sequence id for a slot that is in use, before replay\_matches\_cache\(\)  
runs\. A replay never sets it, so two replays can be in flight on the  
same slot at once\. One can read slot\-&gt;sl\_cred under nn\-&gt;client\_lock  
while the other's completion frees and rebuilds it from the XDR  
encoder without that lock\. Two completions can also collide with each  
other and release the same group\_info twice\. free\_svc\_cred\(\) leaves  
cr\_uid, cr\_gid and cr\_flavor intact, so the reader passes every  
earlier test in same\_creds\(\) and dereferences a NULL cr\_group\_info\.  
From a 6\.12\.91 production server\:
  
  BUG\: kernel NULL pointer dereference, address\: 0000000000000004  
  CPU\: 63 UID\: 0 PID\: 39015 Comm\: nfsd  
  RIP\: 0010\:same\_creds\+0x38/0xa0 \[nfsd\]  
  RDX\: 0000000000000000  
  Call Trace\:  
   nfsd4\_sequence\+0x6a8/0x910 \[nfsd\]  
   nfsd4\_proc\_compound\+0x345/0x670 \[nfsd\]  
   nfsd\_dispatch\+0x100/0x220 \[nfsd\]  
   svc\_process\_common\+0x311/0x700 \[sunrpc\]  
   svc\_process\+0x131/0x1c0 \[sunrpc\]  
   svc\_recv\+0x7ef/0x9c0 \[sunrpc\]  
   nfsd\+0xa3/0x100 \[nfsd\]  
  Kernel panic \- not syncing\: Fatal exception
  
Since v6\.14 a live session's slot table can shrink, and the unowned  
store becomes a use\-after\-free write\. nfsd4\_sequence\(\) defers the  
shrink while a slot is in use, but it tests NFSD4\_SLOT\_INUSE, which a  
replay does not set, so free\_session\_slots\(\) can kfree\(\) the slot the  
replay still holds in cstate\-&gt;slot\.
  
Record the claim in cstate\-&gt;slot\_owned when nfsd4\_sequence\(\) accepts a  
request and test that in nfsd4\_sequence\_done\(\), so only the request  
that claimed the slot updates its cached reply and clears  
NFSD4\_SLOT\_INUSE\. svc\_generic\_init\_request\(\) zeroes the compound  
response before each request, so the flag starts clear\.

## リンク

- [NVD CVE\-2026\-99366](<https://nvd.nist.gov/vuln/detail/CVE-2026-99366>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/065764e256ebff20201dca5bc6ff075c6cb62e17>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/0b5149b7ad8ccd64c61e887e2cf1af068b6210c9>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/2987838317501ff67b672ac2a441fe34b7729f3d>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/4e3c12151f13c4e51eb381f9377835fb94b9f56a>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/55ff12f6805a3afba9b1ee1b3b09d8e486770c24>)
