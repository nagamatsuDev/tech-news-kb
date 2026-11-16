/**
 * 脆弱性パイプラインのユニットテスト（ネットワーク不要）
 *   npm test
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { cvss3BaseScore, languagesFromText, osFromCpe, osFromText } from "../src/processors/classify.js";
import { parseManifest, selectManifests } from "../src/projects/manifests.js";
import { normalizeNvdCve, type NvdCve } from "../src/fetchers/nvd.js";
import { normalizeGhsa, type GhsaAdvisory } from "../src/fetchers/ghsa.js";
import { applyKev, mergeVulns, sortByPriority } from "../src/processors/merge.js";

test("CVSS v3 base score", () => {
  assert.equal(cvss3BaseScore("CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"), 9.8);
  assert.equal(cvss3BaseScore("CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H"), 10);
  assert.equal(cvss3BaseScore("CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N"), 6.1);
  assert.equal(cvss3BaseScore("CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N"), 5.5);
  assert.equal(cvss3BaseScore("CVSS:4.0/AV:N/AC:L/AT:N"), undefined);
});

test("OS / 言語の判定", () => {
  assert.equal(osFromCpe("cpe:2.3:o:microsoft:windows_11_23h2:*:*:*:*:*:*:x64:*"), "Windows");
  assert.equal(osFromCpe("cpe:2.3:o:apple:macos:*:*:*:*:*:*:*:*"), "macOS");
  assert.equal(osFromCpe("cpe:2.3:o:apple:iphone_os:*:*:*:*:*:*:*:*"), "iOS");
  assert.equal(osFromCpe("cpe:2.3:o:linux:linux_kernel:*:*:*:*:*:*:*:*"), "Linux");
  assert.equal(osFromCpe("cpe:2.3:o:tp-link:archer_ax21_firmware:*:*:*:*:*:*:*:*"), "Network/Firmware");
  assert.equal(osFromCpe("cpe:2.3:a:nodejs:node.js:*:*:*:*:*:*:*:*"), undefined);
  assert.deepEqual(osFromText("A flaw in Cisco IOS XE allows..."), []);
  assert.deepEqual(osFromText("Apple iOS and iPadOS before 18.1"), ["iOS"]);
  assert.deepEqual(languagesFromText("The WordPress plugin XYZ is vulnerable"), ["PHP"]);
  assert.deepEqual(languagesFromText("JavaScript library"), ["JavaScript/TypeScript"]);
  assert.deepEqual(languagesFromText("Fixed in ASP.NET Core 8"), ["C#/.NET"]);
});

test("依存ファイルの選択", () => {
  const picked = selectManifests([
    "package.json",
    "site/package.json",
    "site/package-lock.json",
    "api/requirements.txt",
    "api/poetry.lock",
    "README.md",
  ]);
  assert.deepEqual(picked.sort(), ["api/poetry.lock", "package.json", "site/package-lock.json"]);
});

test("package-lock.json v3", () => {
  const lock = JSON.stringify({
    lockfileVersion: 3,
    packages: {
      "": { name: "app", version: "1.0.0" },
      "node_modules/astro": { version: "4.5.0" },
      "node_modules/@astrojs/tailwind": { version: "5.1.0", dev: true },
      "node_modules/astro/node_modules/vite": { version: "5.1.1" },
    },
  });
  const deps = parseManifest("site/package-lock.json", lock);
  assert.deepEqual(
    deps.map((d) => `${d.name}@${d.version}${d.dev ? ":dev" : ""}`),
    ["astro@4.5.0", "@astrojs/tailwind@5.1.0:dev", "vite@5.1.1"],
  );
});

test("package.json（範囲から推定）", () => {
  const deps = parseManifest(
    "package.json",
    JSON.stringify({ dependencies: { "fast-xml-parser": "^4.3.6", x: "workspace:*" }, devDependencies: { tsx: "~4.7" } }),
  );
  assert.deepEqual(
    deps.map((d) => [d.name, d.version, d.approximate, d.dev]),
    [
      ["fast-xml-parser", "4.3.6", true, false],
      ["tsx", "4.7.0", true, true],
    ],
  );
});

test("pnpm-lock v9 / yarn v1", () => {
  const pnpm = `lockfileVersion: '9.0'

importers:
  .:
    dependencies:
      next:
        specifier: ^14.0.0
        version: 14.1.0

packages:

  '@babel/core@7.24.0':
    resolution: {integrity: sha512-x}

  next@14.1.0(react@18.2.0):
    resolution: {integrity: sha512-y}

snapshots:

  next@14.1.0(react@18.2.0):
    dependencies: {}
`;
  assert.deepEqual(
    parseManifest("pnpm-lock.yaml", pnpm).map((d) => `${d.name}@${d.version}`),
    ["@babel/core@7.24.0", "next@14.1.0"],
  );

  const yarn = `# yarn lockfile v1

"@types/node@^20.0.0":
  version "20.11.5"
  resolved "https://registry.yarnpkg.com/x"

lodash@^4.17.0, lodash@^4.17.20:
  version "4.17.21"
  resolved "https://registry.yarnpkg.com/y"
`;
  assert.deepEqual(
    parseManifest("yarn.lock", yarn).map((d) => `${d.name}@${d.version}`),
    ["@types/node@20.11.5", "lodash@4.17.21"],
  );
});

test("requirements.txt / go.mod / Gemfile.lock", () => {
  assert.deepEqual(
    parseManifest("requirements.txt", "django==4.2.1\nrequests>=2.31.0 # http\n-r base.txt\nflask\n").map((d) => [
      d.name,
      d.version,
      d.approximate,
    ]),
    [
      ["django", "4.2.1", false],
      ["requests", "2.31.0", true],
    ],
  );
  const gomod = `module github.com/me/app

go 1.22

require (
\tgithub.com/gin-gonic/gin v1.9.1
\tgolang.org/x/net v0.17.0 // indirect
)
`;
  assert.deepEqual(
    parseManifest("go.mod", gomod).map((d) => `${d.name}@${d.version}${d.dev ? ":indirect" : ""}`),
    ["github.com/gin-gonic/gin@v1.9.1", "golang.org/x/net@v0.17.0:indirect"],
  );
  const gem = `GEM
  remote: https://rubygems.org/
  specs:
    rack (2.2.8)
    rails (7.1.2)
      actionpack (= 7.1.2)
    nokogiri (1.15.4-x86_64-linux)

PLATFORMS
  x86_64-linux
`;
  assert.deepEqual(
    parseManifest("Gemfile.lock", gem).map((d) => `${d.name}@${d.version}`),
    ["rack@2.2.8", "rails@7.1.2", "nokogiri@1.15.4"],
  );
});

const nvdSample: NvdCve = {
  id: "CVE-2026-1234",
  published: "2026-11-15T10:15:00.000",
  lastModified: "2026-11-15T12:00:00.000",
  descriptions: [{ lang: "en", value: "Remote code execution in Example Server on Windows. Attackers can..." }],
  metrics: {
    cvssMetricV31: [
      { type: "Secondary", cvssData: { baseScore: 9.8, baseSeverity: "CRITICAL", vectorString: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H" } },
    ],
  },
  configurations: [
    {
      nodes: [
        {
          cpeMatch: [
            { criteria: "cpe:2.3:a:example:server:*:*:*:*:*:*:*:*", vulnerable: true },
            { criteria: "cpe:2.3:o:microsoft:windows:-:*:*:*:*:*:*:*", vulnerable: false },
          ],
        },
      ],
    },
  ],
  references: [{ url: "https://example.com/advisory" }],
};

const ghsaSample: GhsaAdvisory = {
  ghsa_id: "GHSA-aaaa-bbbb-cccc",
  cve_id: "CVE-2026-1234",
  html_url: "https://github.com/advisories/GHSA-aaaa-bbbb-cccc",
  summary: "Example Server allows RCE via crafted header",
  description: "Details...",
  severity: "high",
  published_at: "2026-11-15T09:00:00Z",
  updated_at: "2026-11-15T13:00:00Z",
  cvss_severities: { cvss_v3: { score: 8.1, vector_string: "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H" } },
  vulnerabilities: [
    { package: { ecosystem: "npm", name: "example-server" }, vulnerable_version_range: "< 2.0.1", first_patched_version: "2.0.1" },
  ],
};

test("NVD / GHSA の正規化と統合", () => {
  const n = normalizeNvdCve(nvdSample);
  assert.equal(n.severity, "critical");
  assert.deepEqual(n.os, ["Windows"]); // CPE が vulnerable:false なので本文から判定
  assert.equal(n.publishedAt, "2026-11-15T10:15:00.000Z");

  const g = normalizeGhsa(ghsaSample);
  assert.equal(g.id, "CVE-2026-1234");
  assert.deepEqual(g.languages, ["JavaScript/TypeScript"]);
  assert.equal(g.packages[0].ecosystem, "npm");

  const [merged, ...rest] = mergeVulns([[n], [g]]);
  assert.equal(rest.length, 0);
  assert.equal(merged.id, "CVE-2026-1234");
  assert.deepEqual(merged.aliases, ["GHSA-aaaa-bbbb-cccc"]);
  assert.equal(merged.severity, "critical"); // 高い方
  assert.equal(merged.title, ghsaSample.summary); // GHSA のタイトルを優先
  assert.deepEqual(merged.sources.sort(), ["ghsa", "nvd"]);

  const withKev = applyKev([merged], new Map([["CVE-2026-1234", { dateAdded: "2026-11-15", ransomware: true }]]));
  assert.equal(withKev[0].kev?.ransomware, true);

  const sorted = sortByPriority([{ ...g, id: "GHSA-low", aliases: [], severity: "low" }, withKev[0]]);
  assert.equal(sorted[0].id, "CVE-2026-1234");
});

// ================================================================
// v2: 無害化・週・UUID・バージョン範囲・リンク・保存・JVN
// ================================================================
import { cleanText, detailUrl, isSafeTranslation, mdEscape, mdLink, safeUrl } from "../src/shared/sanitize.js";
import { addWeeks, isoWeekOf, weekRangeLabel, weeksBetween } from "../src/shared/week.js";
import { uuidV5 } from "../src/shared/uuid.js";
import { compareVersions, inRange } from "../src/shared/version.js";
import { buildLinks } from "../src/processors/links.js";
import { parseVulnMarkdown, renderVulnMarkdown } from "../src/writers/store.js";
import { parseJvnRss } from "../src/fetchers/jvn.js";
import type { Vulnerability } from "../src/types/vuln.js";

test("URL の検証（インジェクション対策）", () => {
  const bad = [
    "javascript:alert(1)",
    "JaVaScRiPt:alert(1)",
    " javascript:alert(1)",
    "java\tscript:alert(1)",
    "data:text/html,<script>alert(1)</script>",
    "vbscript:msgbox(1)",
    "file:///etc/passwd",
    "obsidian://open?vault=x",
    "http://example.com/",
    "https://user:pass@example.com/",
    "https://127.0.0.1/",
    "https://[::1]/",
    "https://localhost/",
    "https://example.com:8080/",
    "https://example.com/\"onmouseover=alert(1)",
    "https://example.com/<script>",
    "https://example.com\\@evil.com",
    "//evil.com",
    "https://" + "a".repeat(3000) + ".com",
  ];
  for (const u of bad) assert.equal(safeUrl(u), undefined, u);
  assert.equal(safeUrl("https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-1234")?.host, "msrc.microsoft.com");
  // 国際化ドメインは punycode のまま表示
  assert.equal(safeUrl("https://аpple.com/")?.host, "xn--pple-43d.com");
  // ID から組み立てるリンクは ID を検証する
  assert.equal(detailUrl("CVE-2026-1234")?.href, "https://nvd.nist.gov/vuln/detail/CVE-2026-1234");
  assert.equal(detailUrl("CVE-2026-1234/../../evil"), undefined);
  assert.equal(detailUrl("JVNDB-2026-012345")?.href, "https://jvndb.jvn.jp/ja/contents/2026/JVNDB-2026-012345.html");
});

test("Markdown のエスケープ（Obsidian 対策）", () => {
  const evil = "<img src=x onerror=alert(1)> [click](javascript:alert(1)) ![](https://tracker.example/p.gif) [[Secret]] | col | `code` **b**";
  const out = mdEscape(evil);
  assert.ok(!out.includes("<img"));
  assert.ok(!/\]\(/.test(out.replace(/\\\]\\\(/g, "")));
  assert.ok(!out.includes("[["));
  assert.ok(!out.includes("!["));
  assert.ok(!/(?<!\\)\|/.test(out));
  // リンクのラベルと URL も壊せない
  const link = mdLink("x](javascript:alert(1)) [y", safeUrl("https://example.com/a(b)c")!);
  assert.equal(link, "[x\\]\\(javascript\\:alert\\(1\\)\\) \\[y](<https://example.com/a%28b%29c>)");
  // 双方向制御文字・制御文字を除去
  assert.equal(cleanText("abc\u202Edef\u0000g"), "abcdefg");
});

test("機械翻訳の出力検証", () => {
  assert.ok(isSafeTranslation("A flaw in X allows RCE.", "X の欠陥により RCE が可能になる。"));
  assert.ok(!isSafeTranslation("A flaw in X.", "X の欠陥。詳細は https://evil.example を参照"));
  assert.ok(!isSafeTranslation("A flaw in X.", "[詳細](https://evil.example)"));
  assert.ok(!isSafeTranslation("A flaw in X.", "<script>alert(1)</script>"));
  // 原文に元からあるものは許す
  assert.ok(isSafeTranslation("XSS via <script> tag.", "<script> タグによる XSS。"));
});

test("ISO 週（JST・月曜始まり）", () => {
  assert.equal(isoWeekOf("2026-11-16T00:00:00+09:00"), "2026-W47");
  assert.equal(isoWeekOf("2026-11-15T23:59:00+09:00"), "2026-W46");
  assert.equal(isoWeekOf("2026-11-15T15:30:00Z"), "2026-W47"); // JST では 11/16 0:30
  assert.equal(isoWeekOf("2027-01-01T12:00:00+09:00"), "2026-W53");
  assert.equal(addWeeks("2026-W53", 1), "2027-W01");
  assert.equal(addWeeks("2026-W01", -1), "2025-W52");
  assert.equal(weekRangeLabel("2026-W47"), "11/16–11/22");
  assert.deepEqual(weeksBetween("2026-W52", "2027-W02"), ["2026-W52", "2026-W53", "2027-W01", "2027-W02"]);
});

test("UUID v5 は決定的", () => {
  // Python: uuid.uuid5(UUID('6f1c2b0e-8d3a-4f5b-9c7e-2a1d4e6b8f90'), 'CVE-2026-1234')
  assert.equal(uuidV5("CVE-2026-1234"), "26920951-94bd-594f-837e-d8d8ca5d623e");
});

test("バージョン範囲", () => {
  assert.equal(inRange("15.1.0", "< 15.2.3"), true);
  assert.equal(inRange("15.2.3", "< 15.2.3"), false);
  assert.equal(inRange("5.0.10", ">= 5.0.0, < 5.0.12"), true);
  assert.equal(inRange("4.9.0", ">= 5.0.0, < 5.0.12"), false);
  assert.equal(inRange("1.0.0", "= 1.0.0"), true);
  assert.equal(inRange("1.0.0-rc.1", "< 1.0.0"), true);
  assert.equal(inRange("1.0.0", "garbage !!"), undefined);
  assert.ok(compareVersions("1.10.0", "1.9.9") > 0);
  assert.ok(compareVersions("v2.0", "2.0.0") === 0);
});

test("リンクの分類（PoC 除外・危険な URL 除外）", () => {
  const links = buildLinks(["CVE-2026-1234", "GHSA-67mh-4wv8-2f99"], [
    { url: "https://vendor.example/security/2026-01", tags: ["Vendor Advisory"] },
    { url: "https://github.com/foo/bar/commit/abc", tags: [] },
    { url: "https://www.exploit-db.com/exploits/1", tags: [] },
    { url: "https://gist.example/poc", tags: ["Exploit", "Third Party Advisory"] },
    { url: "javascript:alert(1)", tags: ["Vendor Advisory"] },
    { url: "https://blog.example/analysis", tags: ["Third Party Advisory"] },
  ]);
  assert.deepEqual(
    links.map((l) => `${l.kind}:${l.host}`),
    ["vendor:vendor.example", "detail:nvd.nist.gov", "detail:github.com", "patch:github.com", "reference:blog.example"],
  );
});

const stored: Vulnerability = {
  uuid: "3f2b8c1e-9a4d-4c1b-8e2f-1a2b3c4d5e6f",
  ids: ["CVE-2026-1234"],
  title: "XSS via <script>alert(1)</script> in [x](javascript:alert(1))",
  summary: "Line one.\n\n---\n\nInjected frontmatter? ![](https://t.example/p.gif)",
  translation: "none",
  severity: "high",
  cvssScore: 7.5,
  os: [],
  languages: ["PHP"],
  products: [],
  packages: [],
  sources: ["nvd"],
  links: [{ kind: "detail", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-1234", host: "nvd.nist.gov", label: "NVD CVE-2026-1234" }],
  publishedAt: "2026-11-16T01:00:00.000Z",
  updatedAt: "2026-11-16T01:00:00.000Z",
  firstSeenAt: "2026-11-16T02:00:00.000Z",
  week: "2026-W47",
};

test("Markdown 保存と読み戻し", () => {
  const md = renderVulnMarkdown(stored);
  assert.deepEqual(parseVulnMarkdown(md), stored);
  const body = md.slice(md.indexOf("\n---\n", 4) + 5);
  assert.ok(!body.includes("<script>"));
  assert.ok(!body.includes("!["));
  assert.ok(!/\n---\n/.test(body)); // 本文の --- で frontmatter を偽装できない
  assert.ok(body.includes("[NVD CVE\\-2026\\-1234](<https://nvd.nist.gov/vuln/detail/CVE-2026-1234>)"));
  // 不正な uuid / 週は読み込まない
  assert.equal(parseVulnMarkdown(md.replace(stored.uuid, "../../etc")), undefined);
});

test("JVNRSS の解析", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://purl.org/rss/1.0/" xmlns:sec="http://jvn.jp/rss/mod_sec/3.0/">
<item rdf:about="https://jvndb.jvn.jp/ja/contents/2026/JVNDB-2026-012345.html">
<title>Example 社製 Server における OS コマンドインジェクションの脆弱性</title>
<link>https://jvndb.jvn.jp/ja/contents/2026/JVNDB-2026-012345.html</link>
<description>Example 社製 Server には、OS コマンドインジェクション &lt;script&gt; の脆弱性が存在します。</description>
<sec:identifier>JVNDB-2026-012345</sec:identifier>
<sec:references source="NVD" id="CVE-2026-1234">https://nvd.nist.gov/vuln/detail/CVE-2026-1234</sec:references>
<sec:references source="CWE" id="CWE-78" title="OSコマンドインジェクション(CWE-78)"/>
</item>
<item rdf:about="x"><sec:identifier>../../evil</sec:identifier><title>bad</title></item>
<status:Status xmlns:status="http://jvndb.jvn.jp/myjvn/Status" version="3.3" method="getVulnOverviewList" totalRes="1" totalResRet="1" firstRes="1"/>
</rdf:RDF>`;
  const { entries, total } = parseJvnRss(xml);
  assert.equal(total, 1);
  assert.equal(entries.length, 1);
  assert.deepEqual(entries[0].cves, ["CVE-2026-1234"]);
  assert.equal(entries[0].jvnId, "JVNDB-2026-012345");
  assert.ok(entries[0].summary.includes("<script>")); // 平文として保存し、表示時にエスケープする
});
