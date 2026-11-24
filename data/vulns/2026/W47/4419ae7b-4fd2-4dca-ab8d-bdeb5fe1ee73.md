---
{
  "uuid": "4419ae7b-4fd2-4dca-ab8d-bdeb5fe1ee73",
  "ids": [
    "CVE-2026-99429"
  ],
  "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nocfs2: pin refcount trees before dropping the lookup lock\n\nA refcoun...",
  "summary": "In the Linux kernel, the following vulnerability has been resolved:\n\nocfs2: pin refcount trees before dropping the lookup lock\n\nA refcount tree returned to ocfs2_lock_refcount_tree() must stay alive\nuntil that caller releases its operation reference. However,\nocfs2_get_refcount_tree() returns the cached pointer after dropping\nosb_lock, and the caller only takes its kref afterwards. The registry\nreference does not protect this gap from concurrent removal.\n\nThis can happen when another node frees a refcount root and reuses its\nblock with a different generation while this mount retains the old\ncached tree. Two local operations on different inodes sharing the new\nroot, such as data CoW and an external xattr update, can then look up\nthe same stale tree. Their inode locks are independent, and both the\nREFCOUNT DLM lock and rf_sem are acquired after the first operation\nreference.\n\nThe following ordering is possible, with no other operation references:\n\n  Data CoW                         Xattr update\n  --------                         ------------\n  Look up the old tree under\n    osb_lock, then drop osb_lock\n                                   Look up the same tree and take a kref\n                                   Acquire the tree locks and read the\n                                     new on-disk generation\n                                   Erase the old tree under osb_lock\n                                   Unlock and drop the operation kref\n                                   Drop the registry kref, freeing tree\n  Take a kref through the\n    freed tree pointer\n\nThe final kref_get() accesses freed rf_getcnt storage, and subsequent\naccesses in ocfs2_lock_refcount_tree() also use the freed allocation.\n\nTake the operation reference in ocfs2_get_refcount_tree() before\nreleasing osb_lock, including when an insertion loses to another lookup.\nRemoval must acquire the same lock, so it cannot drop the registry\nreference before the lookup has pinned the tree. Keep the existing\nunlock and error path puts. The two callers that already hold the\nrefcount tree lock keep their borrowed lookup behavior and do not\nacquire an extra reference.\n\nKASAN report as below:\n\n    BUG: KASAN: slab-use-after-free in ocfs2_lock_refcount_tree+0x94a/0x9b0\n    Read of size 4 at addr ffff888117212820 by task python3/497\n\n[Kernel and hardware identification omitted.]\n\n    Call Trace:\n     <TASK>\n     dump_stack_lvl+0x93/0xd0\n     print_report+0xce/0x630\n     ? ocfs2_lock_refcount_tree+0x94a/0x9b0\n     ? srso_alias_return_thunk+0x5/0xfbef5\n     ? __virt_addr_valid+0x20e/0x420\n     ? ocfs2_lock_refcount_tree+0x94a/0x9b0\n     kasan_report+0xe0/0x110\n     ? ocfs2_lock_refcount_tree+0x94a/0x9b0\n     ocfs2_lock_refcount_tree+0x94a/0x9b0\n     ? __pfx_ocfs2_lock_refcount_tree+0x10/0x10\n     ? srso_alias_return_thunk+0x5/0xfbef5\n     ? ocfs2_refcount_cow+0x3b6/0xd90\n     ? srso_alias_return_thunk+0x5/0xfbef5\n     ? __kmalloc_cache_noprof+0x28d/0x610\n     ? ocfs2_refcount_cow+0x3b6/0xd90\n     ocfs2_refcount_cow+0x410/0xd90\n     ? __pfx_ocfs2_refcount_cow+0x10/0x10\n     ? __pfx___might_resched+0x10/0x10\n     ? down_write+0x11a/0x1f0\n     ? __pfx_down_write+0x10/0x10\n     ? ocfs2_inode_unlock+0x1a9/0x260\n     ? __pfx_ocfs2_inode_unlock+0x10/0x10\n     ? ocfs2_file_write_iter+0x1413/0x1d30\n     ocfs2_file_write_iter+0x157b/0x1d30\n     ? __pfx_ocfs2_file_write_iter+0x10/0x10\n     ? lock_acquire+0x190/0x300\n     ? __x64_sys_pwrite64+0x1b7/0x220\n     ? __pfx___might_resched+0x10/0x10\n     ? srso_alias_return_thunk+0x5/0xfbef5\n     ? security_file_permission+0x26/0x80\n     ? srso_alias_return_thunk+0x5/0xfbef5\n     ? lock_is_held_type+0x8f/0x100\n     vfs_write+0x639/0x1010\n     ? __pfx_ocfs2_file_write_iter+0x10/0x10\n     ? lock_vma_under_rcu+0x154/0x4a0\n     ? __pfx_vfs_write+0x10/0x10\n     ? lock_release+0x121/0x290\n     ? srso_alias_return_thunk+0x5/0xfbef5\n     __x64_sys_pwrite64+0x1b7/0x220\n     ? __pfx___x64_sys_pwrite64+0x10/0x10\n     ? irqentry_exit+0xbe/0x820\n---truncated---",
  "translation": "none",
  "severity": "high",
  "cvssScore": 7.8,
  "cvssVector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
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
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99429",
      "host": "nvd.nist.gov",
      "label": "NVD CVE-2026-99429"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/2d9e864c234469dc7f56ea974f8269d251441e6a",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/4720f762623680e36d2241cf4d113cf0318c0cf9",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/4e824bf75ce260951433bb22d33f1179d5a3d2fd",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/7ff4f020f7b03fddd529735f0b61ac0a8dd92c9e",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    },
    {
      "kind": "reference",
      "url": "https://git.kernel.org/stable/c/86b7a6e80104f714cd354d36c4c8a124ea8e05b1",
      "host": "git.kernel.org",
      "label": "git.kernel.org"
    }
  ],
  "publishedAt": "2026-11-19T15:17:56.087Z",
  "updatedAt": "2026-11-23T08:17:46.680Z",
  "firstSeenAt": "2026-11-24T09:50:50.375Z",
  "week": "2026-W47"
}
---

# In the Linux kernel, the following vulnerability has been resolved\: ocfs2\: pin refcount trees before dropping the lookup lock A refcoun\.\.\.

- **ID**: CVE\-2026\-99429
- **危険度**: High（重要） (CVSS 7.8)
- **OS**: Linux
- **公開**: 2026-11-19

## 原文

In the Linux kernel, the following vulnerability has been resolved\:
  
ocfs2\: pin refcount trees before dropping the lookup lock
  
A refcount tree returned to ocfs2\_lock\_refcount\_tree\(\) must stay alive  
until that caller releases its operation reference\. However,  
ocfs2\_get\_refcount\_tree\(\) returns the cached pointer after dropping  
osb\_lock, and the caller only takes its kref afterwards\. The registry  
reference does not protect this gap from concurrent removal\.
  
This can happen when another node frees a refcount root and reuses its  
block with a different generation while this mount retains the old  
cached tree\. Two local operations on different inodes sharing the new  
root, such as data CoW and an external xattr update, can then look up  
the same stale tree\. Their inode locks are independent, and both the  
REFCOUNT DLM lock and rf\_sem are acquired after the first operation  
reference\.
  
The following ordering is possible, with no other operation references\:
  
  Data CoW                         Xattr update  
  \-\-\-\-\-\-\-\-                         \-\-\-\-\-\-\-\-\-\-\-\-  
  Look up the old tree under  
    osb\_lock, then drop osb\_lock  
                                   Look up the same tree and take a kref  
                                   Acquire the tree locks and read the  
                                     new on\-disk generation  
                                   Erase the old tree under osb\_lock  
                                   Unlock and drop the operation kref  
                                   Drop the registry kref, freeing tree  
  Take a kref through the  
    freed tree pointer
  
The final kref\_get\(\) accesses freed rf\_getcnt storage, and subsequent  
accesses in ocfs2\_lock\_refcount\_tree\(\) also use the freed allocation\.
  
Take the operation reference in ocfs2\_get\_refcount\_tree\(\) before  
releasing osb\_lock, including when an insertion loses to another lookup\.  
Removal must acquire the same lock, so it cannot drop the registry  
reference before the lookup has pinned the tree\. Keep the existing  
unlock and error path puts\. The two callers that already hold the  
refcount tree lock keep their borrowed lookup behavior and do not  
acquire an extra reference\.
  
KASAN report as below\:
  
    BUG\: KASAN\: slab\-use\-after\-free in ocfs2\_lock\_refcount\_tree\+0x94a/0x9b0  
    Read of size 4 at addr ffff888117212820 by task python3/497
  
\[Kernel and hardware identification omitted\.\]
  
    Call Trace\:  
     &lt;TASK&gt;  
     dump\_stack\_lvl\+0x93/0xd0  
     print\_report\+0xce/0x630  
     ? ocfs2\_lock\_refcount\_tree\+0x94a/0x9b0  
     ? srso\_alias\_return\_thunk\+0x5/0xfbef5  
     ? \_\_virt\_addr\_valid\+0x20e/0x420  
     ? ocfs2\_lock\_refcount\_tree\+0x94a/0x9b0  
     kasan\_report\+0xe0/0x110  
     ? ocfs2\_lock\_refcount\_tree\+0x94a/0x9b0  
     ocfs2\_lock\_refcount\_tree\+0x94a/0x9b0  
     ? \_\_pfx\_ocfs2\_lock\_refcount\_tree\+0x10/0x10  
     ? srso\_alias\_return\_thunk\+0x5/0xfbef5  
     ? ocfs2\_refcount\_cow\+0x3b6/0xd90  
     ? srso\_alias\_return\_thunk\+0x5/0xfbef5  
     ? \_\_kmalloc\_cache\_noprof\+0x28d/0x610  
     ? ocfs2\_refcount\_cow\+0x3b6/0xd90  
     ocfs2\_refcount\_cow\+0x410/0xd90  
     ? \_\_pfx\_ocfs2\_refcount\_cow\+0x10/0x10  
     ? \_\_pfx\_\_\_might\_resched\+0x10/0x10  
     ? down\_write\+0x11a/0x1f0  
     ? \_\_pfx\_down\_write\+0x10/0x10  
     ? ocfs2\_inode\_unlock\+0x1a9/0x260  
     ? \_\_pfx\_ocfs2\_inode\_unlock\+0x10/0x10  
     ? ocfs2\_file\_write\_iter\+0x1413/0x1d30  
     ocfs2\_file\_write\_iter\+0x157b/0x1d30  
     ? \_\_pfx\_ocfs2\_file\_write\_iter\+0x10/0x10  
     ? lock\_acquire\+0x190/0x300  
     ? \_\_x64\_sys\_pwrite64\+0x1b7/0x220  
     ? \_\_pfx\_\_\_might\_resched\+0x10/0x10  
     ? srso\_alias\_return\_thunk\+0x5/0xfbef5  
     ? security\_file\_permission\+0x26/0x80  
     ? srso\_alias\_return\_thunk\+0x5/0xfbef5  
     ? lock\_is\_held\_type\+0x8f/0x100  
     vfs\_write\+0x639/0x1010  
     ? \_\_pfx\_ocfs2\_file\_write\_iter\+0x10/0x10  
     ? lock\_vma\_under\_rcu\+0x154/0x4a0  
     ? \_\_pfx\_vfs\_write\+0x10/0x10  
     ? lock\_release\+0x121/0x290  
     ? srso\_alias\_return\_thunk\+0x5/0xfbef5  
     \_\_x64\_sys\_pwrite64\+0x1b7/0x220  
     ? \_\_pfx\_\_\_x64\_sys\_pwrite64\+0x10/0x10  
     ? irqentry\_exit\+0xbe/0x820  
\-\-\-truncated\-\-\-

## リンク

- [NVD CVE\-2026\-99429](<https://nvd.nist.gov/vuln/detail/CVE-2026-99429>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/2d9e864c234469dc7f56ea974f8269d251441e6a>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/4720f762623680e36d2241cf4d113cf0318c0cf9>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/4e824bf75ce260951433bb22d33f1179d5a3d2fd>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/7ff4f020f7b03fddd529735f0b61ac0a8dd92c9e>)
- [git\.kernel\.org](<https://git.kernel.org/stable/c/86b7a6e80104f714cd354d36c4c8a124ea8e05b1>)
