/**
 * 機械翻訳（費用 0・外部送信なし）
 *   FuguMT（英→日の翻訳専用モデル）を Transformers.js で GitHub Actions 上で動かす。
 *   指示に従う LLM ではないので、説明文に「指示を無視して…」と書かれていてもそのまま訳されるだけ。
 *   それでも出力は信用せず isSafeTranslation で検証する。
 *
 *   @huggingface/transformers は optionalDependencies。入っていない・モデルが読めない場合は
 *   翻訳をスキップして英語のまま保存する（収集は止めない）。
 *
 *   ENV: TRANSLATE=off で無効化、TRANSLATE_MAX（既定 150）で 1 回の上限件数
 */

import { cleanText, isSafeTranslation } from "../shared/sanitize.js";

const MODEL = process.env.TRANSLATE_MODEL ?? "Kadonox/fugumt-en-ja-onnx";

type Translator = (texts: string[]) => Promise<{ translation_text: string }[]>;
let translator: Translator | null | undefined;

async function load(): Promise<Translator | null> {
  if (translator !== undefined) return translator;
  if (process.env.TRANSLATE === "off") return (translator = null);
  try {
    // 型定義に依存しないよう動的 import（未インストールでもビルドが通る）
    const mod: any = await import(/* @vite-ignore */ "@huggingface/transformers" as string);
    if (process.env.HF_CACHE_DIR) mod.env.cacheDir = process.env.HF_CACHE_DIR;
    const pipe = await mod.pipeline("translation", MODEL, { dtype: "q8" });
    translator = (texts: string[]) => pipe(texts, { max_new_tokens: 512 });
    console.log(`  [Translate] loaded ${MODEL}`);
  } catch (err) {
    console.warn(`  [Translate] disabled: ${err instanceof Error ? err.message : err}`);
    translator = null;
  }
  return translator;
}

/** 文に分割（FuguMT は文単位で訳す方が品質が良い） */
export function splitSentences(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"(])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** 先頭の数文だけを訳す（全文は原文リンクで読める） */
export function excerpt(text: string, maxSentences = 3, maxChars = 600): string {
  const out: string[] = [];
  let len = 0;
  for (const s of splitSentences(text)) {
    if (out.length >= maxSentences || len + s.length > maxChars) break;
    out.push(s);
    len += s.length;
  }
  return out.join(" ") || text.slice(0, maxChars);
}

/** 1 件を訳す。失敗・不正な出力なら undefined */
export async function translate(text: string): Promise<string | undefined> {
  const t = await load();
  if (!t || !text.trim()) return undefined;
  try {
    const sentences = splitSentences(text);
    const res = await t(sentences);
    const ja = cleanText(res.map((r) => r.translation_text).join(""), 2000);
    return isSafeTranslation(text, ja) ? ja : undefined;
  } catch (err) {
    console.warn(`  [Translate] ${err instanceof Error ? err.message : err}`);
    return undefined;
  }
}

export const TRANSLATE_MAX = Number(process.env.TRANSLATE_MAX ?? 150);
