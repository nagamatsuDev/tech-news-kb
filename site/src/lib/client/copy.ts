/**
 * ID（CVE / GHSA / JVNDB など）のコピー
 *   <button data-copy-id="CVE-2026-1234"> をクリックするとクリップボードにコピーする
 *   コピーする前に ID の形式を検証する（改ざんされた属性から任意の文字列をコピーさせない）
 */

import { isValidVulnId } from "../../../../src/shared/sanitize.js";

const SVG_NS = "http://www.w3.org/2000/svg";

/** コピー / 完了アイコン（Tabler Icons の outline） */
const ICON_PATHS = {
  copy: [
    "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",
    "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",
  ],
  check: ["M5 12l5 5l10 -10"],
};

export function iconSvg(kind: keyof typeof ICON_PATHS): SVGSVGElement {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "14");
  svg.setAttribute("height", "14");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  for (const d of ICON_PATHS[kind]) {
    const p = document.createElementNS(SVG_NS, "path");
    p.setAttribute("d", d);
    svg.append(p);
  }
  return svg;
}

/** 過去の未対応タブなど、JS で作るカード用のコピーボタン */
export function createCopyButton(id: string): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "copy-id inline-flex items-center gap-1 rounded px-1 py-0.5 font-mono text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900";
  btn.dataset.copyId = id;
  btn.title = "クリックでコピー";
  btn.setAttribute("aria-label", `${id} をコピー`);
  const label = document.createElement("span");
  label.textContent = id;
  const icon = document.createElement("span");
  icon.className = "copy-icon inline-flex";
  icon.append(iconSvg("copy"));
  btn.append(label, icon);
  return btn;
}

async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // 古いブラウザ・権限がない場合の代替
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.append(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {}
    ta.remove();
    return ok;
  }
}

const timers = new WeakMap<HTMLElement, number>();

function feedback(btn: HTMLElement, ok: boolean) {
  const icon = btn.querySelector<HTMLElement>(".copy-icon");
  const id = btn.dataset.copyId ?? "";
  if (icon) icon.replaceChildren(iconSvg(ok ? "check" : "copy"));
  btn.classList.toggle("text-emerald-700", ok);
  btn.title = ok ? "コピーしました" : "コピーできませんでした";
  btn.setAttribute("aria-label", ok ? `${id} をコピーしました` : `${id} をコピーできませんでした`);
  clearTimeout(timers.get(btn));
  timers.set(
    btn,
    window.setTimeout(() => {
      if (icon) icon.replaceChildren(iconSvg("copy"));
      btn.classList.remove("text-emerald-700");
      btn.title = "クリックでコピー";
      btn.setAttribute("aria-label", `${id} をコピー`);
    }, 1500),
  );
}

document.addEventListener("click", async (e) => {
  const btn = (e.target as Element | null)?.closest?.<HTMLElement>("[data-copy-id]");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const id = btn.dataset.copyId ?? "";
  if (!isValidVulnId(id)) return;
  feedback(btn, await writeClipboard(id));
});
