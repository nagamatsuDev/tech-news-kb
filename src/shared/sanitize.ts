/**
 * 外部データを表示するときの無害化
 * サーバー（収集）とブラウザ（サイト）の両方から使うので Node 専用 API は使わない
 *
 * 脅威モデル:
 *  - 脆弱性の説明文には XSS ペイロード（<script> など）がそのまま書かれていることが多い
 *  - 参照 URL は誰でも登録できる（CNA / GHSA の報告者）ため javascript: などが混ざりうる
 *  - Obsidian は Markdown 内の HTML・画像・[[wikilink]]・obsidian:// を解釈する
 */

/** 許可する ID の形式 */
export const ID_PATTERNS = {
  cve: /^CVE-\d{4}-\d{4,7}$/,
  ghsa: /^GHSA(-[23456789cfghjmpqrvwx]{4}){3}$/,
  jvndb: /^JVNDB-\d{4}-\d{6}$/,
  /** OSV の ID（PYSEC-2024-1, GO-2024-1234, RUSTSEC-2024-0001, MAL-2024-1 など） */
  osv: /^[A-Z][A-Z0-9]{1,15}(-[A-Za-z0-9]{1,15}){1,4}$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
} as const;

export const isValidVulnId = (id: string) =>
  ID_PATTERNS.cve.test(id) || ID_PATTERNS.ghsa.test(id) || ID_PATTERNS.jvndb.test(id) || ID_PATTERNS.osv.test(id);

const MAX_URL_LENGTH = 2048;

export interface SafeUrl {
  /** 正規化済み URL（https のみ） */
  href: string;
  /** 表示用ホスト名（punycode のまま。見た目の似た文字による偽装対策） */
  host: string;
}

/**
 * 外部 URL を検証する。安全でなければ undefined
 *  - https: のみ（javascript: data: file: obsidian: vbscript: などは拒否）
 *  - 認証情報入り（user:pass@）、IP アドレス直書き、localhost、ポート指定は拒否
 *  - 制御文字・空白を含むもの、長すぎるものは拒否
 */
export function safeUrl(raw: unknown): SafeUrl | undefined {
  if (typeof raw !== "string") return undefined;
  const s = raw.trim();
  if (!s || s.length > MAX_URL_LENGTH) return undefined;
  // 制御文字・空白・バックスラッシュ（パーサー差異を突く手口）を拒否
  if (/[\u0000- \u007f-\u009f\\<>"'`]/.test(s)) return undefined;
  let u: URL;
  try {
    u = new URL(s);
  } catch {
    return undefined;
  }
  if (u.protocol !== "https:") return undefined;
  if (u.username || u.password) return undefined;
  if (u.port) return undefined;
  const host = u.hostname.toLowerCase();
  if (!host.includes(".") || host.endsWith(".")) return undefined;
  if (host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal")) {
    return undefined;
  }
  // IPv4 / IPv6 直書き
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.startsWith("[")) return undefined;
  return { href: u.href, host };
}

/** ID から詳細ページの URL を組み立てる（ID を検証してから決まった形式に当てはめる） */
export function detailUrl(id: string): SafeUrl | undefined {
  let href: string | undefined;
  if (ID_PATTERNS.cve.test(id)) href = `https://nvd.nist.gov/vuln/detail/${id}`;
  else if (ID_PATTERNS.ghsa.test(id)) href = `https://github.com/advisories/${id}`;
  else if (ID_PATTERNS.jvndb.test(id)) {
    const year = id.slice(6, 10);
    href = `https://jvndb.jvn.jp/ja/contents/${year}/${id}.html`;
  } else if (ID_PATTERNS.osv.test(id)) href = `https://osv.dev/vulnerability/${encodeURIComponent(id)}`;
  return href ? safeUrl(href) : undefined;
}

/** CVE.org の詳細ページ */
export function cveOrgUrl(id: string): SafeUrl | undefined {
  return ID_PATTERNS.cve.test(id) ? safeUrl(`https://www.cve.org/CVERecord?id=${id}`) : undefined;
}

/**
 * 外部テキストを平文として正規化する（保存前）
 *  - 制御文字（タブ・改行以外）と双方向制御文字（表示偽装に使われる）を除去
 *  - 長さを制限
 */
export function cleanText(raw: unknown, max = 4000): string {
  if (typeof raw !== "string") return "";
  return raw
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f​-‏‪-‮⁦-⁩﻿]/g, "")
    .replace(/\r\n?/g, "\n")
    .trim()
    .slice(0, max);
}

/**
 * Markdown（Obsidian）に埋め込むテキストをエスケープする
 * HTML・リンク・画像・wikilink・表・強調などの記法をすべて文字として表示させる
 */
export function mdEscape(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/([\\`*_{}\[\]()#+\-.!|~=^$:])/g, "\\$1")
    .replace(/\n{2,}/g, "\n\n")
    .replace(/\n(?!\n)/g, "  \n");
}

/** 表のセルや見出しなど 1 行に収める用 */
export const mdEscapeInline = (text: string) => mdEscape(text.replace(/\s+/g, " "));

/** Markdown のリンク（検証済み URL のみ。リンク文字列もエスケープ） */
export function mdLink(label: string, url: SafeUrl): string {
  // URL 内の ( ) と空白は %XX にして記法を壊さない
  const href = url.href.replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/ /g, "%20");
  return `[${mdEscapeInline(label)}](<${href}>)`;
}

/** 機械翻訳の出力を検証する（翻訳エンジンが URL や記法を「作り出した」ら捨てる） */
export function isSafeTranslation(source: string, translated: string): boolean {
  if (!translated || translated.length > source.length * 4 + 200) return false;
  const urlRe = /\b(?:https?|javascript|data|file|obsidian|vbscript):/gi;
  const count = (s: string, re: RegExp) => (s.match(re) ?? []).length;
  if (count(translated, urlRe) > count(source, urlRe)) return false;
  if (/<\s*\/?\s*[a-z]/i.test(translated) && !/<\s*\/?\s*[a-z]/i.test(source)) return false;
  if (/\]\(|\[\[|!\[/.test(translated)) return false;
  return true;
}
