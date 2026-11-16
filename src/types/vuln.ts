/**
 * 脆弱性ナレッジベースの型定義（収集側・サイト側で共通）
 */

export type Severity = "critical" | "high" | "medium" | "low" | "unknown";

export const SEVERITY_RANK: Record<Severity, number> = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
  unknown: 0,
};

export type VulnSource = "nvd" | "ghsa" | "kev" | "jvn";

/** 影響を受けるパッケージ（言語エコシステム単位） */
export interface AffectedPackage {
  /** OSV 形式のエコシステム名（npm, PyPI, Go, Maven ...） */
  ecosystem: string;
  name: string;
  /** GHSA 形式の範囲（例: ">= 1.0.0, < 1.2.3"） */
  vulnerableRange?: string;
  fixedVersion?: string;
}

/** CISA KEV（悪用が確認された脆弱性）の情報 */
export interface KevInfo {
  dateAdded: string;
  dueDate?: string;
  requiredAction?: string;
  ransomware: boolean;
}

/** 取得元の参照 URL（未検証。タグは NVD の分類） */
export interface RawReference {
  url: string;
  tags: string[];
}

/** 収集直後の脆弱性（ソースごと → 統合） */
export interface CollectedVuln {
  /** 主 ID（CVE があれば CVE） */
  id: string;
  aliases: string[];
  title: string;
  summary: string;
  severity: Severity;
  cvssScore?: number;
  cvssVector?: string;
  os: string[];
  languages: string[];
  products: string[];
  packages: AffectedPackage[];
  kev?: KevInfo;
  sources: VulnSource[];
  references: RawReference[];
  publishedAt: string;
  updatedAt: string;
}

// ----------------------------------------------------------------
// 保存形式（data/vulns/YYYY/Www/<uuid>.md の frontmatter）
// ----------------------------------------------------------------

export type LinkKind = "detail" | "vendor" | "patch" | "reference";

/** 検証済みのリンク（https のみ） */
export interface VulnLink {
  kind: LinkKind;
  url: string;
  /** 表示用ホスト名 */
  host: string;
  label: string;
}

export type TranslationSource = "jvn" | "machine" | "none";

export interface Vulnerability {
  uuid: string;
  /** 主 ID が先頭（CVE → GHSA → JVNDB） */
  ids: string[];
  title: string;
  summary: string;
  titleJa?: string;
  summaryJa?: string;
  translation: TranslationSource;
  jvnId?: string;
  severity: Severity;
  cvssScore?: number;
  cvssVector?: string;
  os: string[];
  languages: string[];
  products: string[];
  packages: AffectedPackage[];
  kev?: KevInfo;
  sources: VulnSource[];
  links: VulnLink[];
  publishedAt: string;
  updatedAt: string;
  firstSeenAt: string;
  /** 表示する週（JST の ISO 週） */
  week: string;
}

/** data/ids.json — ID と UUID の対応 */
export interface IdIndex {
  /** CVE / GHSA / JVNDB → uuid */
  ids: Record<string, string>;
  /** uuid → 保存先の週 */
  weeks: Record<string, string>;
}

/** data/weeks/index.json */
export interface WeekIndex {
  updatedAt: string;
  weeks: { week: string; count: number; critical: number; high: number; kev: number }[];
}

/** data/vulns/state.json */
export interface CollectState {
  lastRunAt?: string;
}

// ----------------------------------------------------------------
// 依存ファイル（ブラウザで読み込む）
// ----------------------------------------------------------------

export interface Dependency {
  ecosystem: string;
  name: string;
  version: string;
  /** package.json の範囲指定から推定したバージョンか */
  approximate: boolean;
  dev: boolean;
  manifest: string;
}

export interface CollectError {
  source: string;
  message: string;
}
