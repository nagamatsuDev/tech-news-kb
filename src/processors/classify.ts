/**
 * 分類ユーティリティ
 * 危険度の正規化、CVSS v3 スコア計算、OS・言語の判定を行う
 */

import type { Severity } from "../types/vuln.js";

// ----------------------------------------------------------------
// 危険度
// ----------------------------------------------------------------

/** 各種表記（"MODERATE", "Important" など）を Severity に正規化する */
export function normalizeSeverity(raw: string | undefined | null): Severity {
  switch ((raw ?? "").toLowerCase()) {
    case "critical":
      return "critical";
    case "high":
    case "important":
      return "high";
    case "medium":
    case "moderate":
      return "medium";
    case "low":
      return "low";
    default:
      return "unknown";
  }
}

/** CVSS スコアから危険度を求める（CVSS v3 / v4 の区分） */
export function severityFromScore(score: number | undefined): Severity {
  if (score === undefined || Number.isNaN(score)) return "unknown";
  if (score >= 9.0) return "critical";
  if (score >= 7.0) return "high";
  if (score >= 4.0) return "medium";
  if (score > 0) return "low";
  return "unknown";
}

// ----------------------------------------------------------------
// CVSS v3.x 基本値の計算（OSV はベクトルしか返さないため）
// ----------------------------------------------------------------

const W = {
  AV: { N: 0.85, A: 0.62, L: 0.55, P: 0.2 },
  AC: { L: 0.77, H: 0.44 },
  UI: { N: 0.85, R: 0.62 },
  CIA: { H: 0.56, L: 0.22, N: 0 },
} as const;

function roundUp(n: number): number {
  const i = Math.round(n * 100000);
  return i % 10000 === 0 ? i / 100000 : (Math.floor(i / 10000) + 1) / 10;
}

/** "CVSS:3.1/AV:N/AC:L/..." から基本値を計算する。v3 以外は undefined */
export function cvss3BaseScore(vector: string): number | undefined {
  if (!/^CVSS:3\.[01]\//.test(vector)) return undefined;
  const m: Record<string, string> = {};
  for (const part of vector.split("/").slice(1)) {
    const [k, v] = part.split(":");
    if (k && v) m[k] = v;
  }
  const av = W.AV[m.AV as keyof typeof W.AV];
  const ac = W.AC[m.AC as keyof typeof W.AC];
  const ui = W.UI[m.UI as keyof typeof W.UI];
  const c = W.CIA[m.C as keyof typeof W.CIA];
  const i = W.CIA[m.I as keyof typeof W.CIA];
  const a = W.CIA[m.A as keyof typeof W.CIA];
  const scope = m.S;
  if ([av, ac, ui, c, i, a].some((x) => x === undefined) || !["U", "C"].includes(scope)) {
    return undefined;
  }
  const changed = scope === "C";
  const pr =
    m.PR === "N" ? 0.85 : m.PR === "L" ? (changed ? 0.68 : 0.62) : m.PR === "H" ? (changed ? 0.5 : 0.27) : undefined;
  if (pr === undefined) return undefined;

  const iss = 1 - (1 - c) * (1 - i) * (1 - a);
  const impact = changed ? 7.52 * (iss - 0.029) - 3.25 * Math.pow(iss - 0.02, 15) : 6.42 * iss;
  const exploitability = 8.22 * av * ac * pr * ui;
  if (impact <= 0) return 0;
  return changed
    ? roundUp(Math.min(1.08 * (impact + exploitability), 10))
    : roundUp(Math.min(impact + exploitability, 10));
}

// ----------------------------------------------------------------
// 言語（エコシステム）
// ----------------------------------------------------------------

/** GHSA / OSV のエコシステム名 → 表示言語 */
const ECOSYSTEM_LANGUAGE: Record<string, string> = {
  npm: "JavaScript/TypeScript",
  pip: "Python",
  pypi: "Python",
  go: "Go",
  maven: "Java/Kotlin",
  nuget: "C#/.NET",
  composer: "PHP",
  packagist: "PHP",
  rubygems: "Ruby",
  rust: "Rust",
  "crates.io": "Rust",
  swift: "Swift",
  swifturl: "Swift",
  pub: "Dart",
  erlang: "Elixir/Erlang",
  hex: "Elixir/Erlang",
  actions: "GitHub Actions",
  "github actions": "GitHub Actions",
};

export function languageFromEcosystem(ecosystem: string): string | undefined {
  return ECOSYSTEM_LANGUAGE[ecosystem.toLowerCase()];
}

/** GHSA API のエコシステム名 → OSV のエコシステム名 */
export function ghsaToOsvEcosystem(eco: string): string {
  const map: Record<string, string> = {
    npm: "npm",
    pip: "PyPI",
    go: "Go",
    maven: "Maven",
    nuget: "NuGet",
    composer: "Packagist",
    rubygems: "RubyGems",
    rust: "crates.io",
    pub: "Pub",
    erlang: "Hex",
    actions: "GitHub Actions",
    swift: "SwiftURL",
  };
  return map[eco.toLowerCase()] ?? eco;
}

/**
 * NVD の説明文・製品名から言語を推定する（NVD には言語情報がないため）
 * 誤判定を避けるため、はっきりした表現だけを拾う
 */
const LANGUAGE_KEYWORDS: [RegExp, string][] = [
  [/\b(npm|node\.?js|javascript|typescript|next\.js|express\.js)\b(?!:)/i, "JavaScript/TypeScript"],
  [/\b(python|pypi|django|flask|pip package)\b/i, "Python"],
  [/\b(golang|go module|go package)\b/i, "Go"],
  [/\b(java|spring framework|spring boot|apache struts|log4j|kotlin)\b/i, "Java/Kotlin"],
  [/(^|[^\w])(\.net|asp\.net|nuget|c#)(?=$|[^\w])/i, "C#/.NET"],
  [/\b(php|wordpress|drupal|joomla|laravel)\b/i, "PHP"],
  [/\b(ruby|rails|rubygems)\b/i, "Ruby"],
  [/\b(rust|crates\.io)\b/i, "Rust"],
  [/\b(swift)\b/i, "Swift"],
];

export function languagesFromText(text: string): string[] {
  const found = new Set<string>();
  for (const [re, lang] of LANGUAGE_KEYWORDS) if (re.test(text)) found.add(lang);
  return [...found];
}

// ----------------------------------------------------------------
// OS
// ----------------------------------------------------------------

/** CPE の vendor:product → OS */
export function osFromCpe(cpe: string): string | undefined {
  // cpe:2.3:part:vendor:product:version:...
  const [, , part, vendor = "", product = ""] = cpe.split(":");
  const vp = `${vendor}:${product}`;
  if (vendor === "microsoft" && product.startsWith("windows")) return "Windows";
  if (vendor === "apple") {
    if (/^(macos|mac_os|mac_os_x|macos_server)/.test(product)) return "macOS";
    if (/^(iphone_os|ipados|ios)/.test(product)) return "iOS";
  }
  if (vp === "google:android" || product === "android") return "Android";
  if (vp === "google:chrome_os" || product === "chromeos") return "ChromeOS";
  if (vp === "freebsd:freebsd") return "FreeBSD";
  if (
    vp === "linux:linux_kernel" ||
    /^(ubuntu_linux|debian_linux|enterprise_linux|fedora|linux_enterprise_server|opensuse|amazon_linux|alpine_linux|rocky_linux|almalinux)/.test(
      product,
    )
  ) {
    return "Linux";
  }
  // part "o" かつ上記以外（ルーター・NAS・IoT のファームウェアなど）
  if (part === "o" || part === "h") return "Network/Firmware";
  return undefined;
}

const OS_KEYWORDS: [RegExp, string][] = [
  [/\bwindows\b/i, "Windows"],
  [/\bmacos\b|\bmac os x\b/i, "macOS"],
  [/\blinux kernel\b|\bubuntu\b|\bdebian\b|\bred hat enterprise linux\b|\brhel\b/i, "Linux"],
  [/(?<!cisco\s)\b(ios|ipados)\b(?!\s*x[er]\b)/i, "iOS"],
  [/\bandroid\b/i, "Android"],
];

/** 説明文から OS を推定する（CPE が未付与の新着 CVE 向け） */
export function osFromText(text: string): string[] {
  const found = new Set<string>();
  for (const [re, os] of OS_KEYWORDS) if (re.test(text)) found.add(os);
  return [...found];
}

/** CPE を "vendor product" 表記にする */
export function productFromCpe(cpe: string): string | undefined {
  const [, , , vendor, product] = cpe.split(":");
  if (!vendor || !product) return undefined;
  return `${vendor} ${product}`.replace(/_/g, " ");
}
