/**
 * 週ページ: ボード（未対応 / 対応中 / 対応完了）と「過去の未対応」タブ
 *  - カードはサーバー側で描画済み（未対応列）。ここで localStorage のステータスに従って列へ移す
 *  - 設定・依存ファイルとの照合結果でハイライトする
 *  - 過去の未対応はブラウザから OSV.dev に問い合わせて作る（DOM は textContent で組み立てる）
 */

import { SEVERITY_RANK, type Severity } from "../../../../src/types/vuln.js";
import { safeUrl } from "../../../../src/shared/sanitize.js";
import { indexDeps, matchVuln, type MatchInput, type MatchResult } from "./match.js";
import { queryPast, type PastItem } from "./osv.js";
import { createCopyButton } from "./copy.js";
import {
  STATUSES,
  STATUS_LABEL,
  loadDepHits,
  loadDeps,
  loadSettings,
  loadSnapshots,
  loadStatuses,
  migrateStatuses,
  recordDepHits,
  saveSnapshots,
  setStatus,
  type Status,
} from "./storage.js";

const base = document.body.dataset.base ?? "";
const cards = () => [...document.querySelectorAll<HTMLElement>(".vuln-card")];
const column = (s: Status) => document.querySelector<HTMLElement>(`[data-column="${s}"] .column-body`);

const LEVEL_STYLE: Record<number, { card: string[]; badge: string[]; label: string }> = {
  3: { card: ["ring-2", "ring-red-500", "bg-red-50"], badge: ["bg-red-600", "text-white"], label: "依存に該当" },
  2: { card: ["ring-2", "ring-amber-400"], badge: ["bg-amber-100", "text-amber-800"], label: "設定に一致" },
  1: { card: ["ring-1", "ring-sky-300"], badge: ["bg-sky-100", "text-sky-800"], label: "OS が一致" },
};
const ALL_LEVEL_CLASSES = Object.values(LEVEL_STYLE).flatMap((s) => [...s.card, ...s.badge]);

const filters = { matchedOnly: false, kevOnly: false, sev: new Set<string>(), q: "" };

function parseMatch(card: HTMLElement): MatchInput | undefined {
  try {
    return JSON.parse(card.dataset.match ?? "") as MatchInput;
  } catch {
    return undefined;
  }
}

// ----------------------------------------------------------------
// ボード
// ----------------------------------------------------------------

function evaluate() {
  const settings = loadSettings();
  const depIndex = indexDeps(loadDeps().deps);
  const statuses = loadStatuses();
  const hits = loadDepHits();
  const newHits: string[] = [];

  for (const card of cards()) {
    const uuid = card.dataset.uuid!;
    const input = parseMatch(card);
    const m: MatchResult = input ? matchVuln(input, settings, depIndex) : { level: 0, reasons: [], deps: [] };
    card.dataset.level = String(m.level);
    if (m.level === 3) newHits.push(uuid);

    card.classList.remove(...ALL_LEVEL_CLASSES);
    const badge = card.querySelector<HTMLElement>(".match-badge")!;
    badge.classList.remove(...ALL_LEVEL_CLASSES);
    const reason = card.querySelector<HTMLElement>(".match-reason")!;
    const style = LEVEL_STYLE[m.level];
    if (style) {
      card.classList.add(...style.card);
      badge.classList.add(...style.badge);
      badge.textContent = style.label;
      badge.classList.remove("hidden");
      reason.textContent = m.reasons.join(" / ") + (m.deps.some((d) => d.fixed) ? ` → ${[...new Set(m.deps.map((d) => d.fixed).filter(Boolean))].join(", ")} 以上に更新` : "");
      reason.classList.toggle("hidden", m.level < 2);
    } else {
      badge.classList.add("hidden");
      reason.classList.add("hidden");
    }

    const status = statuses[uuid]?.status ?? "todo";
    const gone = Boolean(hits[uuid]) && m.level < 3 && status !== "done";
    card.querySelector(".gone-badge")?.classList.toggle("hidden", !gone);
    card.querySelector<HTMLSelectElement>(".status-select")!.value = status;
    const col = column(status);
    if (col && card.parentElement !== col) col.appendChild(card);
  }
  recordDepHits(newHits);
  sortColumns();
  applyFilters();
}

/** 並び順: 危険度 → CVSS スコア（大きい順）→ 設定との一致度 → KEV */
function rank(card: HTMLElement): number[] {
  return [
    SEVERITY_RANK[(card.dataset.sev ?? "unknown") as Severity] ?? 0,
    Number(card.dataset.cvss ?? 0),
    Number(card.dataset.level ?? 0),
    card.dataset.kev ? 1 : 0,
  ];
}

function sortColumns() {
  for (const s of STATUSES) {
    const col = column(s);
    if (!col) continue;
    const list = [...col.querySelectorAll<HTMLElement>(".vuln-card")];
    list.sort((a, b) => {
      const ra = rank(a);
      const rb = rank(b);
      for (let i = 0; i < ra.length; i++) if (ra[i] !== rb[i]) return rb[i] - ra[i];
      return 0;
    });
    for (const c of list) col.appendChild(c);
  }
}

function applyFilters() {
  const q = filters.q.trim().toLowerCase();
  const counts: Record<Status, number> = { todo: 0, doing: 0, done: 0 };
  for (const card of cards()) {
    const ok =
      (!filters.matchedOnly || Number(card.dataset.level) > 0) &&
      (!filters.kevOnly || card.dataset.kev === "1") &&
      (filters.sev.size === 0 || filters.sev.has(card.dataset.sev ?? "")) &&
      (!q || (card.dataset.text ?? "").includes(q));
    card.classList.toggle("hidden", !ok);
    const s = (card.closest<HTMLElement>("[data-column]")?.dataset.column ?? "todo") as Status;
    if (ok) counts[s]++;
  }
  for (const s of STATUSES) {
    const el = document.querySelector(`[data-column="${s}"] .column-count`);
    if (el) el.textContent = String(counts[s]);
  }
}

function move(card: HTMLElement, status: Status) {
  setStatus(card.dataset.uuid!, status);
  evaluate();
}

function initBoard() {
  document.addEventListener("change", (e) => {
    const sel = e.target as HTMLElement;
    if (sel instanceof HTMLSelectElement && sel.classList.contains("status-select")) {
      const card = sel.closest<HTMLElement>(".vuln-card");
      if (card && STATUSES.includes(sel.value as Status)) move(card, sel.value as Status);
    }
  });

  // ドラッグ & ドロップ
  document.addEventListener("dragstart", (e) => {
    const card = (e.target as HTMLElement).closest?.<HTMLElement>(".vuln-card");
    if (card && e.dataTransfer) {
      e.dataTransfer.setData("text/plain", card.dataset.uuid!);
      e.dataTransfer.effectAllowed = "move";
      card.classList.add("opacity-50");
    }
  });
  document.addEventListener("dragend", (e) => (e.target as HTMLElement).classList?.remove("opacity-50"));
  for (const s of STATUSES) {
    const col = document.querySelector<HTMLElement>(`[data-column="${s}"]`);
    if (!col) continue;
    col.addEventListener("dragover", (e) => {
      e.preventDefault();
      col.classList.add("bg-brand-50");
    });
    col.addEventListener("dragleave", () => col.classList.remove("bg-brand-50"));
    col.addEventListener("drop", (e) => {
      e.preventDefault();
      col.classList.remove("bg-brand-50");
      const uuid = e.dataTransfer?.getData("text/plain");
      const card = cards().find((c) => c.dataset.uuid === uuid);
      if (card) move(card, s);
    });
  }

  // 絞り込み
  const byId = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;
  byId<HTMLInputElement>("f-matched")?.addEventListener("change", (e) => ((filters.matchedOnly = (e.target as HTMLInputElement).checked), applyFilters()));
  byId<HTMLInputElement>("f-kev")?.addEventListener("change", (e) => ((filters.kevOnly = (e.target as HTMLInputElement).checked), applyFilters()));
  byId<HTMLInputElement>("f-q")?.addEventListener("input", (e) => ((filters.q = (e.target as HTMLInputElement).value), applyFilters()));
  document.querySelectorAll<HTMLButtonElement>("[data-sev-filter]").forEach((b) =>
    b.addEventListener("click", () => {
      const s = b.dataset.sevFilter!;
      filters.sev.has(s) ? filters.sev.delete(s) : filters.sev.add(s);
      b.classList.toggle("ring-2", filters.sev.has(s));
      b.classList.toggle("ring-brand-500", filters.sev.has(s));
      applyFilters();
    }),
  );
}

// ----------------------------------------------------------------
// 過去の未対応タブ
// ----------------------------------------------------------------

let idIndex: Record<string, string> | undefined;
async function loadIdIndex(): Promise<Record<string, string>> {
  if (idIndex) return idIndex;
  try {
    const res = await fetch(`${base}/ids.json`);
    const data = await res.json();
    idIndex = data && typeof data.ids === "object" ? (data.ids as Record<string, string>) : {};
  } catch {
    idIndex = {};
  }
  return idIndex;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = "", text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

const SEV_BADGE: Record<Severity, string> = {
  critical: "bg-red-600 text-white",
  high: "bg-orange-500 text-white",
  medium: "bg-amber-400 text-amber-950",
  low: "bg-emerald-600 text-white",
  unknown: "bg-gray-300 text-gray-800",
};

function renderPastItem(item: PastItem, status: Status, gone: boolean): HTMLElement {
  const card = el("article", "rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm");
  if (!gone) card.classList.add("ring-2", "ring-red-500", "bg-red-50");
  const top = el("div", "flex flex-wrap items-center gap-1");
  const sev = item.severity in SEV_BADGE ? item.severity : "unknown";
  top.append(el("span", `rounded px-1.5 py-0.5 text-xs font-semibold ${SEV_BADGE[sev]}`, `${sev === "unknown" ? "未評価" : sev[0].toUpperCase() + sev.slice(1)}${item.cvssScore ? ` ${item.cvssScore.toFixed(1)}` : ""}`));
  top.append(el("span", gone ? "rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600" : "rounded bg-red-600 px-1.5 py-0.5 text-xs font-semibold text-white", gone ? "依存から外れた" : "依存に該当"));
  if (item.ids[0]) top.append(createCopyButton(item.ids[0]));
  if (item.published) top.append(el("span", "ml-auto text-xs text-gray-400", item.published.slice(0, 10)));
  card.append(top);
  card.append(el("p", "mt-1.5 font-medium text-gray-900", item.title));

  const depLine = el("p", "mt-1 text-xs text-gray-600");
  depLine.textContent = item.deps
    .map((d) => `${d.name}@${d.version}${d.fixed ? ` → ${d.fixed} 以上に更新` : "（修正版なし）"}${d.dev ? " [dev]" : ""}${d.approximate ? " [推定]" : ""}`)
    .join(" / ");
  card.append(depLine);

  const links = el("ul", "mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-xs");
  for (const l of item.links) {
    const u = safeUrl(l.url); // キャッシュ・スナップショットは改ざんされうるので描画直前に再検証
    if (!u) continue;
    const li = el("li");
    const a = el("a", "text-brand-700 hover:underline", l.label);
    a.href = u.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer nofollow";
    a.referrerPolicy = "no-referrer";
    li.append(a, el("span", "text-gray-400", ` — ${u.host}`));
    links.append(li);
  }
  card.append(links);

  const label = el("label", "mt-2 flex items-center gap-1 text-xs text-gray-500", "ステータス ");
  const select = el("select", "rounded border border-gray-200 bg-white px-1 py-0.5 text-xs");
  for (const s of STATUSES) {
    const o = el("option", "", STATUS_LABEL[s]);
    o.value = s;
    select.append(o);
  }
  select.value = status;
  select.addEventListener("change", () => {
    if (!STATUSES.includes(select.value as Status)) return;
    setStatus(item.uuid, select.value as Status, item.provisional ? item.ids : undefined);
    void renderPast(false);
  });
  label.append(select);
  card.append(label);
  return card;
}

let pastItems: PastItem[] | undefined;

async function renderPast(refetch: boolean, force = false) {
  const list = document.getElementById("past-list");
  const msg = document.getElementById("past-message");
  const count = document.getElementById("past-count");
  if (!list || !msg) return;
  const deps = loadDeps().deps;
  if (deps.length === 0) {
    list.replaceChildren();
    msg.textContent = "右上の「設定」で package.json などの依存ファイルを読み込むと、過去の脆弱性も照合します。";
    if (count) count.textContent = "";
    return;
  }

  if (refetch || !pastItems) {
    msg.textContent = "OSV.dev で照合しています…";
    try {
      const ids = await loadIdIndex();
      migrateStatuses(ids);
      pastItems = await queryPast(deps, ids, force);
    } catch (err) {
      msg.textContent = `照合できませんでした（${err instanceof Error ? err.message : err}）。時間をおいて再照合してください。`;
      return;
    }
  }

  const thisWeek = new Set(cards().map((c) => c.dataset.uuid));
  const statuses = loadStatuses();
  const showDone = (document.getElementById("past-show-done") as HTMLInputElement | null)?.checked ?? false;
  const current = new Map(pastItems.map((i) => [i.uuid, i]));
  saveSnapshots(pastItems);
  recordDepHits(pastItems.map((i) => i.uuid));
  const snapshots = loadSnapshots<PastItem>();

  const rows: { item: PastItem; status: Status; gone: boolean }[] = [];
  for (const [uuid, item] of Object.entries({ ...snapshots, ...Object.fromEntries(current) })) {
    if (thisWeek.has(uuid)) continue; // 今週分はボードに出ている
    const status = statuses[uuid]?.status ?? "todo";
    if (status === "done" && !showDone) continue;
    rows.push({ item, status, gone: !current.has(uuid) });
  }
  // 危険度 → CVSS（大きい順）。依存から外れたものは最後
  rows.sort(
    (a, b) =>
      Number(a.gone) - Number(b.gone) ||
      (SEVERITY_RANK[b.item.severity] ?? 0) - (SEVERITY_RANK[a.item.severity] ?? 0) ||
      (b.item.cvssScore ?? 0) - (a.item.cvssScore ?? 0),
  );
  list.replaceChildren(...rows.map((r) => renderPastItem(r.item, r.status, r.gone)));
  const open = rows.filter((r) => r.status !== "done").length;
  if (count) count.textContent = open ? `（${open}）` : "";
  msg.textContent = rows.length ? "" : "過去の脆弱性で、未対応のものはありません。";
}

function initTabs() {
  const tabs = document.querySelectorAll<HTMLButtonElement>("[data-tab]");
  const show = (name: string) => {
    tabs.forEach((t) => {
      const active = t.dataset.tab === name;
      t.setAttribute("aria-selected", String(active));
      t.classList.toggle("border-gray-900", active);
      t.classList.toggle("text-gray-900", active);
      t.classList.toggle("border-transparent", !active);
      t.classList.toggle("text-gray-500", !active);
    });
    document.querySelectorAll<HTMLElement>("[data-panel]").forEach((p) => p.classList.toggle("hidden", p.dataset.panel !== name));
    if (name === "past") void renderPast(false);
    history.replaceState(null, "", name === "past" ? "#past" : location.pathname + location.search);
  };
  tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.tab!)));
  document.getElementById("past-refresh")?.addEventListener("click", () => void renderPast(true, true));
  document.getElementById("past-show-done")?.addEventListener("change", () => void renderPast(false));
  if (location.hash === "#past") show("past");
  else void renderPast(false); // タブの件数表示のため裏で照合（1 日キャッシュ）
}

// ----------------------------------------------------------------

initBoard();
initTabs();
evaluate();
window.addEventListener("vulnkb:changed", () => {
  pastItems = undefined;
  evaluate();
  void renderPast(true);
});
// 別タブでの変更を反映
window.addEventListener("storage", (e) => {
  if (e.key?.startsWith("vulnkb:")) {
    evaluate();
    void renderPast(false);
  }
});
