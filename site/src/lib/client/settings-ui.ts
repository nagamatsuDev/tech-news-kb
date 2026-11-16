/**
 * 設定ダイアログ（右上の ⚙️）
 * 保存すると "vulnkb:changed" イベントを出し、ボードが再照合する
 */

import { parseManifest } from "../../../../src/projects/manifests.js";
import type { Dependency } from "../../../../src/types/vuln.js";
import { manifestType } from "./manifest-type.js";
import { exportAll, importAll, loadDeps, loadSettings, saveDeps, saveSettings, type DepsStore } from "./storage.js";

const MAX_FILE_BYTES = 10 * 1024 * 1024;

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;

function renderDepsSummary(store: DepsStore) {
  const el = $("deps-summary");
  if (!el) return;
  if (store.files.length === 0) {
    el.textContent = "まだ読み込んでいません";
    return;
  }
  const approx = store.deps.filter((d) => d.approximate).length;
  el.textContent =
    `${store.files.map((f) => `${f.name}（${f.count} 件）`).join("、")} — 合計 ${store.deps.length} パッケージ` +
    (approx ? `（うち ${approx} 件は package.json の範囲から推定。正確に照合するにはロックファイルを読み込んでください）` : "");
}

function fill() {
  const s = loadSettings();
  document.querySelectorAll<HTMLInputElement>('#settings input[name="os"]').forEach((i) => (i.checked = s.os.includes(i.value)));
  document.querySelectorAll<HTMLInputElement>('#settings input[name="lang"]').forEach((i) => (i.checked = s.languages.includes(i.value)));
  const products = $<HTMLTextAreaElement>("products");
  if (products) products.value = s.products.join("\n");
  renderDepsSummary(loadDeps());
  $("deps-error")?.classList.add("hidden");
  const io = $("io-message");
  if (io) io.textContent = "";
}

/** 読み込み中の依存（保存ボタンで確定） */
let pendingDeps: DepsStore | undefined;

async function onFiles(files: FileList) {
  const err = $("deps-error");
  const errors: string[] = [];
  const store: DepsStore = pendingDeps ?? loadDeps();
  for (const file of Array.from(files)) {
    const type = manifestType(file.name);
    if (!type) {
      errors.push(`${file.name}: 対応していない形式です`);
      continue;
    }
    if (file.size > MAX_FILE_BYTES) {
      errors.push(`${file.name}: 10MB を超えています`);
      continue;
    }
    try {
      const deps: Dependency[] = parseManifest(type, await file.text()).map((d) => ({ ...d, manifest: file.name }));
      // 同じ名前のファイルは置き換え
      store.deps = [...store.deps.filter((d) => d.manifest !== file.name), ...deps];
      store.files = [...store.files.filter((f) => f.name !== file.name), { name: file.name, count: deps.length, loadedAt: new Date().toISOString() }];
    } catch (e) {
      errors.push(`${file.name}: 読み込めませんでした（${e instanceof Error ? e.message : e}）`);
    }
  }
  pendingDeps = store;
  renderDepsSummary(store);
  if (err) {
    err.textContent = errors.join(" / ");
    err.classList.toggle("hidden", errors.length === 0);
  }
}

function save() {
  const os = [...document.querySelectorAll<HTMLInputElement>('#settings input[name="os"]:checked')].map((i) => i.value);
  const languages = [...document.querySelectorAll<HTMLInputElement>('#settings input[name="lang"]:checked')].map((i) => i.value);
  const products = ($<HTMLTextAreaElement>("products")?.value ?? "")
    .split(/[\n,]/)
    .map((s) => s.trim())
    .filter(Boolean);
  saveSettings({ os, languages, products });
  if (pendingDeps) saveDeps(pendingDeps);
  pendingDeps = undefined;
  window.dispatchEvent(new CustomEvent("vulnkb:changed"));
}

function download(name: string, text: string) {
  const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function init() {
  const dialog = $<HTMLDialogElement>("settings");
  if (!dialog) return;
  $("settings-open")?.addEventListener("click", () => {
    pendingDeps = undefined;
    fill();
    dialog.showModal();
  });
  const close = () => {
    pendingDeps = undefined;
    dialog.close();
  };
  $("settings-close")?.addEventListener("click", close);
  $("settings-cancel")?.addEventListener("click", close);
  $("settings-save")?.addEventListener("click", () => {
    save();
    dialog.close();
  });
  $<HTMLInputElement>("deps-file")?.addEventListener("change", (e) => {
    const input = e.target as HTMLInputElement;
    if (input.files?.length) void onFiles(input.files).then(() => (input.value = ""));
  });
  $("deps-clear")?.addEventListener("click", () => {
    pendingDeps = { files: [], deps: [] };
    renderDepsSummary(pendingDeps);
  });
  $("export")?.addEventListener("click", () => download(`vulnkb-${new Date().toISOString().slice(0, 10)}.json`, exportAll()));
  $<HTMLInputElement>("import")?.addEventListener("change", async (e) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    const io = $("io-message");
    if (!file) return;
    try {
      if (file.size > MAX_FILE_BYTES) throw new Error("ファイルが大きすぎます");
      const { statuses } = importAll(await file.text());
      fill();
      if (io) io.textContent = `読み込みました（ステータス ${statuses} 件）`;
      window.dispatchEvent(new CustomEvent("vulnkb:changed"));
    } catch (err) {
      if (io) io.textContent = `読み込めませんでした: ${err instanceof Error ? err.message : err}`;
    } finally {
      input.value = "";
    }
  });
}

init();
