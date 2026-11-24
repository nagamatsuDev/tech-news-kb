/**
 * 脆弱性収集の設定
 * 環境変数で上書きできる値は ENV 名をコメントに書いている
 */

import type { Severity } from "../types/vuln.js";

/** 旧版の保持日数（未使用。互換のため残す） */
export const RETENTION_DAYS = Number(process.env.RETENTION_DAYS ?? 30);

/**
 * 取り込む脆弱性の公開日の範囲（日）  ENV: PUBLISHED_WINDOW_DAYS
 * 古い脆弱性が「更新」されただけで新着扱いにならないようにする（KEV 追加分は例外）
 */
export const PUBLISHED_WINDOW_DAYS = Number(process.env.PUBLISHED_WINDOW_DAYS ?? 28);

/** 公開から何日以上経って初めて見つけたものを「見つけた週」に置くか */
export const LATE_DISCOVERY_DAYS = 14;

/** JVN を CVE 番号で個別に探す 1 回あたりの上限 / 遡る週数  ENV: JVN_LOOKUP_MAX */
export const JVN_LOOKUP_MAX = Number(process.env.JVN_LOOKUP_MAX ?? 60);
export const JVN_LOOKUP_WEEKS = 8;

/** 初回実行時に遡る日数  ENV: LOOKBACK_DAYS */
export const LOOKBACK_DAYS = Number(process.env.LOOKBACK_DAYS ?? 3);

/**
 * NVD から取り込む最低危険度  ENV: NVD_MIN_SEVERITY
 * NVD は 1 日 100 件以上公開されるため、既定では High 以上に絞る。
 * （GitHub Advisory は言語パッケージ単位なので全危険度を取り込む。KEV は常に取り込む）
 */
export const NVD_MIN_SEVERITY = (process.env.NVD_MIN_SEVERITY ?? "high") as Severity;

/** API エンドポイント */
export const NVD_API = "https://services.nvd.nist.gov/rest/json/cves/2.0";
export const GHSA_API = "https://api.github.com/advisories";
export const KEV_FEED =
  "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json";
export const OSV_API = "https://api.osv.dev/v1";

/** 表示用の OS 一覧（並び順） */
export const OS_ORDER = ["Windows", "macOS", "Linux", "iOS", "Android", "ChromeOS", "FreeBSD", "Network/Firmware"];

/** 表示用の言語一覧（並び順） */
export const LANGUAGE_ORDER = [
  "JavaScript/TypeScript",
  "Python",
  "Go",
  "Java/Kotlin",
  "C#/.NET",
  "PHP",
  "Ruby",
  "Rust",
  "C/C++",
  "Swift",
  "Dart",
  "Elixir/Erlang",
  "GitHub Actions",
];
