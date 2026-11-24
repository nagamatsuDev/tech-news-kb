/**
 * 依存ファイルのパーサー
 * 依存ライブラリを増やさないよう、各形式を最小限の文字列処理で読む
 */

import type { Dependency } from "../types/vuln.js";

/** 自動検出の対象ファイル名（同じディレクトリでは上にあるものを優先） */
export const MANIFEST_FILES = [
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
  "package.json",
  "poetry.lock",
  "requirements.txt",
  "go.mod",
  "Cargo.lock",
  "Gemfile.lock",
  "composer.lock",
] as const;

/** npm 系のロックファイルがあるディレクトリでは package.json を読まない */
const NPM_LOCKS = new Set(["package-lock.json", "pnpm-lock.yaml", "yarn.lock"]);

/** 探索しないディレクトリ */
export const IGNORE_DIRS = new Set(["node_modules", ".git", "dist", "build", ".next", "vendor", ".venv", "venv", "target"]);

const basename = (p: string) => p.split("/").pop() ?? p;
const dirname = (p: string) => (p.includes("/") ? p.slice(0, p.lastIndexOf("/")) : "");

/** 検出したファイル一覧から、実際に読むものを選ぶ */
export function selectManifests(paths: string[]): string[] {
  const files = paths.filter((p) => (MANIFEST_FILES as readonly string[]).includes(basename(p)));
  const dirsWithNpmLock = new Set(files.filter((p) => NPM_LOCKS.has(basename(p))).map(dirname));
  // 1 ディレクトリにロックが複数あれば優先順位の高い 1 つだけ
  const chosenLock = new Map<string, string>();
  for (const name of ["package-lock.json", "pnpm-lock.yaml", "yarn.lock"]) {
    for (const p of files.filter((f) => basename(f) === name)) {
      if (!chosenLock.has(dirname(p))) chosenLock.set(dirname(p), p);
    }
  }
  return files.filter((p) => {
    const b = basename(p);
    if (NPM_LOCKS.has(b)) return chosenLock.get(dirname(p)) === p;
    if (b === "package.json") return !dirsWithNpmLock.has(dirname(p));
    if (b === "requirements.txt") return !files.includes(`${dirname(p) ? dirname(p) + "/" : ""}poetry.lock`);
    return true;
  });
}

// ----------------------------------------------------------------
// 各形式のパーサー
// ----------------------------------------------------------------

type Parsed = Omit<Dependency, "manifest">;

/** "^1.2.3" / "~1.2" / ">=1.0.0 <2" → 範囲の下限バージョン */
function minVersion(range: string): string | undefined {
  const m = range.match(/(\d+)(?:\.(\d+|x|\*))?(?:\.(\d+|x|\*))?(-[0-9A-Za-z.-]+)?/);
  if (!m) return undefined;
  const n = (s?: string) => (s && /^\d+$/.test(s) ? s : "0");
  return `${m[1]}.${n(m[2])}.${n(m[3])}${m[4] ?? ""}`;
}

function parsePackageLock(text: string): Parsed[] {
  const json = JSON.parse(text);
  const out: Parsed[] = [];
  if (json.packages) {
    // lockfileVersion 2 / 3
    for (const [path, info] of Object.entries<any>(json.packages)) {
      if (!path || !info?.version || info.link) continue;
      const name = info.name ?? path.slice(path.lastIndexOf("node_modules/") + "node_modules/".length);
      out.push({ ecosystem: "npm", name, version: info.version, approximate: false, dev: Boolean(info.dev) });
    }
  } else if (json.dependencies) {
    // lockfileVersion 1（入れ子）
    const walk = (deps: Record<string, any>) => {
      for (const [name, info] of Object.entries(deps)) {
        if (info?.version) out.push({ ecosystem: "npm", name, version: info.version, approximate: false, dev: Boolean(info.dev) });
        if (info?.dependencies) walk(info.dependencies);
      }
    };
    walk(json.dependencies);
  }
  return out;
}

function parsePackageJson(text: string): Parsed[] {
  const json = JSON.parse(text);
  const out: Parsed[] = [];
  for (const [field, dev] of [["dependencies", false], ["devDependencies", true], ["optionalDependencies", false]] as const) {
    for (const [name, range] of Object.entries<string>(json[field] ?? {})) {
      if (/^(file|link|workspace|git|github|http):/.test(range)) continue;
      const v = minVersion(range);
      if (v) out.push({ ecosystem: "npm", name, version: v, approximate: true, dev });
    }
  }
  return out;
}

function parsePnpmLock(text: string): Parsed[] {
  const out: Parsed[] = [];
  // v6:  /name@1.2.3:   /@scope/name@1.2.3(peer...):
  // v9:  name@1.2.3:    '@scope/name@1.2.3':
  // v5:  /name/1.2.3:
  const re = /^ {2}'?\/?((?:@[^/@\s]+\/)?[^/@\s:']+)[@/](\d[^:('\s]*)/gm;
  let m: RegExpExecArray | null;
  const section = text.split(/^snapshots:/m)[0];
  const pkgStart = section.search(/^packages:/m);
  const body = pkgStart >= 0 ? section.slice(pkgStart) : section;
  while ((m = re.exec(body))) out.push({ ecosystem: "npm", name: m[1], version: m[2], approximate: false, dev: false });
  return out;
}

function parseYarnLock(text: string): Parsed[] {
  const out: Parsed[] = [];
  // "name@^1.0.0", name@^1.0.0:\n  version "1.2.3"   （yarn v1 / berry 両対応）
  const re = /^"?((?:@[^@"\s/]+\/)?[^@"\s,]+)@[^\n]*:\n(?:\s+[^\n]*\n)*?\s+version:? "?([^"\n]+)"?/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) out.push({ ecosystem: "npm", name: m[1], version: m[2].trim(), approximate: false, dev: false });
  return out;
}

function parseRequirements(text: string): Parsed[] {
  const out: Parsed[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.split("#")[0].trim();
    if (!line || line.startsWith("-")) continue;
    const m = line.match(/^([A-Za-z0-9_.\-]+)(?:\[[^\]]*\])?\s*(==|>=|~=)\s*([0-9][^\s;,]*)/);
    if (m) out.push({ ecosystem: "PyPI", name: m[1], version: m[3], approximate: m[2] !== "==", dev: false });
  }
  return out;
}

function parsePoetryLock(text: string): Parsed[] {
  const out: Parsed[] = [];
  const re = /\[\[package\]\]\s*\nname = "([^"]+)"\s*\nversion = "([^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) out.push({ ecosystem: "PyPI", name: m[1], version: m[2], approximate: false, dev: false });
  return out;
}

function parseGoMod(text: string): Parsed[] {
  const out: Parsed[] = [];
  const re = /^\s*(?:require\s+)?([a-zA-Z0-9.\-_~]+\.[a-z]+\/[^\s]+)\s+(v[^\s]+)/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    out.push({ ecosystem: "Go", name: m[1], version: m[2], approximate: false, dev: /\/\/\s*indirect/.test(text.slice(m.index, text.indexOf("\n", m.index))) });
  }
  return out;
}

function parseCargoLock(text: string): Parsed[] {
  const out: Parsed[] = [];
  const re = /\[\[package\]\]\s*\nname = "([^"]+)"\s*\nversion = "([^"]+)"(?:\s*\nsource = "registry)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) out.push({ ecosystem: "crates.io", name: m[1], version: m[2], approximate: false, dev: false });
  return out;
}

function parseGemfileLock(text: string): Parsed[] {
  const out: Parsed[] = [];
  const specs = text.split(/^GEM$/m)[1]?.split(/^\S/m)[0] ?? "";
  const re = /^ {4}([A-Za-z0-9_.\-]+) \(([0-9][^)\s-]*)[^)]*\)$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(specs))) out.push({ ecosystem: "RubyGems", name: m[1], version: m[2], approximate: false, dev: false });
  return out;
}

function parseComposerLock(text: string): Parsed[] {
  const json = JSON.parse(text);
  const out: Parsed[] = [];
  for (const [key, dev] of [["packages", false], ["packages-dev", true]] as const) {
    for (const p of json[key] ?? []) {
      if (p.name && p.version) out.push({ ecosystem: "Packagist", name: p.name, version: String(p.version).replace(/^v/, ""), approximate: false, dev });
    }
  }
  return out;
}

const PARSERS: Record<string, (text: string) => Parsed[]> = {
  "package-lock.json": parsePackageLock,
  "package.json": parsePackageJson,
  "pnpm-lock.yaml": parsePnpmLock,
  "yarn.lock": parseYarnLock,
  "requirements.txt": parseRequirements,
  "poetry.lock": parsePoetryLock,
  "go.mod": parseGoMod,
  "Cargo.lock": parseCargoLock,
  "Gemfile.lock": parseGemfileLock,
  "composer.lock": parseComposerLock,
};

/** ファイル 1 つを解析する */
export function parseManifest(path: string, text: string): Dependency[] {
  const parser = PARSERS[basename(path)];
  if (!parser) return [];
  return parser(text).map((d) => ({ ...d, manifest: path }));
}
