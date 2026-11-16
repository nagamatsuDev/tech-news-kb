/**
 * サイトのブラウザ側ロジック（DOM なし）
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  exportAll,
  importAll,
  loadDepHits,
  loadSettings,
  loadStatuses,
  migrateStatuses,
  recordDepHits,
  setStatus,
  useStorage,
  validateDeps,
  validateStatusMap,
} from "../site/src/lib/client/storage.js";
import { indexDeps, matchVuln } from "../site/src/lib/client/match.js";
import { manifestType } from "../site/src/lib/client/manifest-type.js";
import { uuidV5 } from "../src/shared/uuid.js";

class MemStorage {
  m = new Map<string, string>();
  getItem(k: string) {
    return this.m.get(k) ?? null;
  }
  setItem(k: string, v: string) {
    this.m.set(k, v);
  }
  removeItem(k: string) {
    this.m.delete(k);
  }
}

const U1 = "3f2b8c1e-9a4d-4c1b-8e2f-1a2b3c4d5e6f";
const U2 = "7c9e6679-7425-40de-944b-e07fc1f90ae7";

test("ステータス: UUID → ステータス、記録なしは未対応", () => {
  const mem = new MemStorage();
  useStorage(mem);
  setStatus(U1, "doing");
  assert.equal(loadStatuses()[U1].status, "doing");
  assert.equal(loadStatuses()[U2], undefined);
  setStatus("not-a-uuid", "done");
  setStatus(U2, "evil" as any);
  assert.deepEqual(Object.keys(loadStatuses()), [U1]);
});

test("ステータス: 壊れた・改ざんされた値は無視", () => {
  const map = validateStatusMap({
    [U1]: { status: "done", updatedAt: "2026-11-16T00:00:00Z" },
    [U2]: { status: "<img onerror>", updatedAt: "x" },
    "../../x": { status: "todo" },
    "__proto__": { status: "todo" },
  });
  assert.deepEqual(Object.keys(map), [U1]);
  const mem = new MemStorage();
  mem.setItem("vulnkb:v1:status", "{not json");
  useStorage(mem);
  assert.deepEqual(loadStatuses(), {});
  assert.deepEqual(loadSettings(), { os: [], languages: [], products: [] });
});

test("仮 UUID（v5）のステータスを正式 UUID へ付け替え", () => {
  useStorage(new MemStorage());
  const provisional = uuidV5("GHSA-67mh-4wv8-2f99");
  setStatus(provisional, "doing", ["GHSA-67mh-4wv8-2f99", "CVE-2026-6001"]);
  assert.equal(migrateStatuses({ "CVE-2026-6001": U1 }), 1);
  const s = loadStatuses();
  assert.equal(s[U1].status, "doing");
  assert.equal(s[provisional], undefined);
});

test("依存に該当した記録は、対応完了で消える", () => {
  useStorage(new MemStorage());
  recordDepHits([U1, U2]);
  setStatus(U1, "done");
  assert.deepEqual(Object.keys(loadDepHits()), [U2]);
});

test("エクスポート / インポート", () => {
  useStorage(new MemStorage());
  setStatus(U1, "done");
  const json = exportAll();
  useStorage(new MemStorage());
  assert.equal(importAll(json).statuses, 1);
  assert.equal(loadStatuses()[U1].status, "done");
  assert.throws(() => importAll('{"app":"other"}'));
});

test("依存の検証", () => {
  const d = validateDeps({ files: [{ name: "package-lock.json", count: 1 }], deps: [{ ecosystem: "npm", name: "next", version: "15.1.0" }, { name: 1 }, "x"] });
  assert.equal(d.deps.length, 1);
});

test("照合: 依存 > 製品・言語 > OS", () => {
  const deps = indexDeps([
    { ecosystem: "npm", name: "next", version: "15.1.0", approximate: false, dev: false, manifest: "package-lock.json" },
    { ecosystem: "PyPI", name: "Django", version: "5.1.0", approximate: false, dev: false, manifest: "requirements.txt" },
  ]);
  const settings = { os: ["Linux"], languages: ["Python"], products: ["nginx"] };
  const base = { os: [], languages: [], products: [], title: "", packages: [] };

  const next = matchVuln({ ...base, languages: ["JavaScript/TypeScript"], packages: [{ ecosystem: "npm", name: "next", vulnerableRange: "< 15.2.3", fixedVersion: "15.2.3" }] }, settings, deps);
  assert.equal(next.level, 3);
  assert.equal(next.deps[0].fixed, "15.2.3");

  // 修正済みバージョンなら該当しない
  const fixed = matchVuln({ ...base, packages: [{ ecosystem: "npm", name: "next", vulnerableRange: "< 15.0.0" }] }, settings, deps);
  assert.equal(fixed.level, 0);

  // GHSA の "pip" と OSV の "PyPI"、大文字小文字の違いを吸収
  const dj = matchVuln({ ...base, packages: [{ ecosystem: "pip", name: "django", vulnerableRange: "< 5.1.4" }] }, settings, deps);
  assert.equal(dj.level, 3);

  assert.equal(matchVuln({ ...base, title: "nginx resolver off-by-one" }, settings, deps).level, 2);
  assert.equal(matchVuln({ ...base, title: "nginxfoo" }, settings, deps).level, 0);
  assert.equal(matchVuln({ ...base, languages: ["Python"] }, settings, deps).level, 2);
  assert.equal(matchVuln({ ...base, os: ["Linux"] }, settings, deps).level, 1);
  // 正規表現として危険な製品名でも落ちない
  assert.equal(matchVuln({ ...base, title: "a (b" }, { ...settings, products: ["(b"] }, deps).level, 2);
});

test("依存ファイル名の判定", () => {
  assert.equal(manifestType("package-lock (1).json"), "package-lock.json");
  assert.equal(manifestType("package.json"), "package.json");
  assert.equal(manifestType("requirements-dev.txt"), "requirements.txt");
  assert.equal(manifestType("photo.png"), undefined);
});
