/**
 * localStorage（ブラウザ内だけに保存。どこにも送らない）
 *
 *   vulnkb:v1:status    { [uuid]: { status, updatedAt, ids? } }   記録なし = 未対応
 *   vulnkb:v1:settings  { os[], languages[], products[] }
 *   vulnkb:v1:deps      { files[], deps[] }                      読み込んだ依存ファイルの解析結果
 *   vulnkb:v1:depHits   { [uuid]: firstMatchedAt }               一度でも依存に該当したもの
 *   vulnkb:v1:osvCache  { at, key, items[] }                     OSV の照合結果（1 日キャッシュ）
 *
 * 同じドメイン（*.github.io）の他のページからも読み書きできるため、
 * 読み込み時に必ず形式を検証し、壊れていても動くようにする。
 */

import type { Dependency } from "../../../../src/types/vuln.js";
import { ID_PATTERNS, isValidVulnId } from "../../../../src/shared/sanitize.js";

export type Status = "todo" | "doing" | "done";
export const STATUSES: Status[] = ["todo", "doing", "done"];
export const STATUS_LABEL: Record<Status, string> = { todo: "未対応", doing: "対応中", done: "対応完了" };

export interface StatusRecord {
  status: Status;
  updatedAt: string;
  /** v5 で作った UUID のみ: 正式な UUID へ付け替えるための別名 */
  ids?: string[];
}

export interface Settings {
  os: string[];
  languages: string[];
  products: string[];
}

export interface DepsStore {
  files: { name: string; count: number; loadedAt: string }[];
  deps: Dependency[];
}

const KEY = {
  status: "vulnkb:v1:status",
  settings: "vulnkb:v1:settings",
  deps: "vulnkb:v1:deps",
  depHits: "vulnkb:v1:depHits",
  osvCache: "vulnkb:v1:osvCache",
} as const;

/** テスト用に差し替えられるストレージ */
let store: Pick<Storage, "getItem" | "setItem" | "removeItem"> | undefined;
export function useStorage(s: Pick<Storage, "getItem" | "setItem" | "removeItem">) {
  store = s;
}
function backend() {
  if (store) return store;
  try {
    return globalThis.localStorage;
  } catch {
    return undefined; // プライベートモード等
  }
}

function read(key: string): unknown {
  try {
    const raw = backend()?.getItem(key);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}
function write(key: string, value: unknown) {
  try {
    backend()?.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("[vulnkb] localStorage に保存できません", err);
  }
}

const isObj = (x: unknown): x is Record<string, unknown> => typeof x === "object" && x !== null && !Array.isArray(x);
const strList = (x: unknown, max = 200, maxLen = 100): string[] =>
  Array.isArray(x) ? x.filter((s): s is string => typeof s === "string" && s.length > 0 && s.length <= maxLen).slice(0, max) : [];
const isIso = (s: unknown): s is string => typeof s === "string" && !Number.isNaN(Date.parse(s));

// ---------------- status ----------------

export function validateStatusMap(raw: unknown): Record<string, StatusRecord> {
  const out: Record<string, StatusRecord> = {};
  if (!isObj(raw)) return out;
  for (const [uuid, rec] of Object.entries(raw)) {
    if (!ID_PATTERNS.uuid.test(uuid) || !isObj(rec)) continue;
    if (!STATUSES.includes(rec.status as Status)) continue;
    const r: StatusRecord = { status: rec.status as Status, updatedAt: isIso(rec.updatedAt) ? rec.updatedAt : new Date(0).toISOString() };
    const ids = strList(rec.ids, 20, 40).filter(isValidVulnId);
    if (ids.length) r.ids = ids;
    out[uuid] = r;
  }
  return out;
}

export const loadStatuses = () => validateStatusMap(read(KEY.status));

export function getStatus(uuid: string): Status {
  return loadStatuses()[uuid]?.status ?? "todo";
}

export function setStatus(uuid: string, status: Status, ids?: string[]) {
  if (!ID_PATTERNS.uuid.test(uuid) || !STATUSES.includes(status)) return;
  const map = loadStatuses();
  const rec: StatusRecord = { status, updatedAt: new Date().toISOString() };
  const keepIds = ids?.filter(isValidVulnId) ?? map[uuid]?.ids;
  if (keepIds?.length) rec.ids = keepIds;
  map[uuid] = rec;
  write(KEY.status, map);
  if (status === "done") {
    const hits = loadDepHits();
    delete hits[uuid];
    write(KEY.depHits, hits);
  }
}

/**
 * v5（仮）UUID のステータスを正式な UUID へ付け替える
 * @param idToUuid ids.json の ids（CVE/GHSA → 正式 uuid）
 */
export function migrateStatuses(idToUuid: Record<string, string>): number {
  const map = loadStatuses();
  let moved = 0;
  for (const [uuid, rec] of Object.entries(map)) {
    if (!rec.ids?.length) continue;
    const real = rec.ids.map((id) => idToUuid[id]).find((u) => u && ID_PATTERNS.uuid.test(u) && u !== uuid);
    if (!real) continue;
    const existing = map[real];
    if (!existing || existing.updatedAt < rec.updatedAt) map[real] = { status: rec.status, updatedAt: rec.updatedAt };
    delete map[uuid];
    moved++;
  }
  if (moved) write(KEY.status, map);
  return moved;
}

// ---------------- settings ----------------

export function validateSettings(raw: unknown): Settings {
  const r = isObj(raw) ? raw : {};
  return { os: strList(r.os, 20, 40), languages: strList(r.languages, 30, 40), products: strList(r.products, 50, 60) };
}
export const loadSettings = () => validateSettings(read(KEY.settings));
export const saveSettings = (s: Settings) => write(KEY.settings, validateSettings(s));

// ---------------- deps ----------------

export function validateDeps(raw: unknown): DepsStore {
  const r = isObj(raw) ? raw : {};
  const files = Array.isArray(r.files)
    ? r.files
        .filter(isObj)
        .map((f) => ({ name: String(f.name ?? "").slice(0, 200), count: Number(f.count) || 0, loadedAt: isIso(f.loadedAt) ? f.loadedAt : "" }))
        .slice(0, 50)
    : [];
  const deps: Dependency[] = Array.isArray(r.deps)
    ? r.deps
        .filter(isObj)
        .filter((d) => typeof d.name === "string" && typeof d.version === "string" && typeof d.ecosystem === "string")
        .map((d) => ({
          ecosystem: String(d.ecosystem).slice(0, 30),
          name: String(d.name).slice(0, 214),
          version: String(d.version).slice(0, 64),
          approximate: Boolean(d.approximate),
          dev: Boolean(d.dev),
          manifest: String(d.manifest ?? "").slice(0, 200),
        }))
        .slice(0, 20000)
    : [];
  return { files, deps };
}
export const loadDeps = () => validateDeps(read(KEY.deps));
export const saveDeps = (d: DepsStore) => {
  write(KEY.deps, validateDeps(d));
  try {
    backend()?.removeItem(KEY.osvCache); // 依存が変わったら OSV の結果を捨てる
  } catch {}
};

// ---------------- depHits ----------------

export function loadDepHits(): Record<string, string> {
  const raw = read(KEY.depHits);
  const out: Record<string, string> = {};
  if (isObj(raw)) for (const [k, v] of Object.entries(raw)) if (ID_PATTERNS.uuid.test(k) && isIso(v)) out[k] = v;
  return out;
}
export function recordDepHits(uuids: string[]) {
  const hits = loadDepHits();
  let changed = false;
  for (const u of uuids) {
    if (!hits[u] && ID_PATTERNS.uuid.test(u)) {
      hits[u] = new Date().toISOString();
      changed = true;
    }
  }
  if (changed) write(KEY.depHits, hits);
}

// ---------------- OSV cache ----------------

export function loadOsvCache<T>(key: string, maxAgeMs = 86_400_000): T[] | undefined {
  const raw = read(KEY.osvCache);
  if (!isObj(raw) || raw.key !== key || !isIso(raw.at) || Date.now() - Date.parse(raw.at) > maxAgeMs) return undefined;
  return Array.isArray(raw.items) ? (raw.items as T[]) : undefined;
}
export const saveOsvCache = (key: string, items: unknown[]) => write(KEY.osvCache, { at: new Date().toISOString(), key, items });

// ---------------- export / import ----------------

export function exportAll(): string {
  return JSON.stringify(
    { app: "vulnkb", version: 1, exportedAt: new Date().toISOString(), status: loadStatuses(), settings: loadSettings(), deps: loadDeps(), depHits: loadDepHits() },
    null,
    2,
  );
}

export function importAll(json: string): { statuses: number } {
  const raw = JSON.parse(json);
  if (!isObj(raw) || raw.app !== "vulnkb") throw new Error("Vuln KB のエクスポートファイルではありません");
  const status = validateStatusMap(raw.status);
  write(KEY.status, { ...loadStatuses(), ...status });
  if (raw.settings) saveSettings(validateSettings(raw.settings));
  if (raw.deps) saveDeps(validateDeps(raw.deps));
  if (isObj(raw.depHits)) {
    const hits = loadDepHits();
    for (const [k, v] of Object.entries(raw.depHits)) if (ID_PATTERNS.uuid.test(k) && isIso(v)) hits[k] = v;
    write(KEY.depHits, hits);
  }
  return { statuses: Object.keys(status).length };
}

// ---------------- past snapshots ----------------
// 「過去の未対応」に一度出たものを保存しておき、依存から外れても対応完了にするまで表示し続ける

const SNAP_KEY = "vulnkb:v1:pastSnapshots";

export function loadSnapshots<T extends { uuid: string }>(): Record<string, T> {
  const raw = read(SNAP_KEY);
  const out: Record<string, T> = {};
  if (isObj(raw)) for (const [k, v] of Object.entries(raw)) if (ID_PATTERNS.uuid.test(k) && isObj(v) && v.uuid === k) out[k] = v as unknown as T;
  return out;
}

export function saveSnapshots<T extends { uuid: string }>(items: T[]) {
  const map = { ...loadSnapshots<T>() };
  for (const it of items) map[it.uuid] = it;
  const statuses = loadStatuses();
  // 対応完了になったものは消す。上限 500 件
  const kept = Object.entries(map).filter(([k]) => statuses[k]?.status !== "done").slice(-500);
  write(SNAP_KEY, Object.fromEntries(kept));
}
