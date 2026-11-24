# Vuln KB（旧 Tech News KB）

脆弱性情報を毎朝自動収集し、**週ごと**に GitHub Pages のボードで確認できるナレッジベースです。
日本語の説明（JVN iPedia → なければ機械翻訳）と元記事へのリンク付き。
自分の環境（OS・言語・製品・依存ファイル）に一致するものはハイライトし、未対応・対応中・対応完了で管理できます。

## 仕組み

```
毎朝（GitHub Actions）                         ブラウザ（GitHub Pages）
─────────────────────────────                 ──────────────────────────────────────
NVD / GitHub Advisory / CISA KEV / JVN        右上の ⚙️ 設定: OS・言語・製品・依存ファイル
        ↓ 統合・UUID 付与                      ↓（すべて localStorage。どこにも保存しない）
日本語: JVN → なければ FuguMT（ローカル）     今週分: 週データとブラウザ内で照合 → ハイライト
        ↓                                      過去分: 依存一覧を OSV.dev に問い合わせ → 「過去の未対応」
data/vulns/YYYY/Www/<uuid>.md（1 件 1 ファイル） ステータス: localStorage に UUID → 未対応/対応中/対応完了
data/weeks/YYYY-Www.json（サイト用）
```

- 設定・依存ファイル・ステータスは**サーバーに一切保存しません**（public リポジトリに自分の環境や未対応状況を公開しないため）。
  別の端末に移すときは設定画面のエクスポート / インポートを使います。
- 「過去の未対応」の照合では、パッケージ名・バージョン・エコシステムだけを OSV.dev に送ります（1 日キャッシュ）。

## データ

| パス | 内容 |
|---|---|
| `data/vulns/YYYY/Www/<uuid>.md` | 1 件 1 ファイル。先頭の frontmatter は JSON（YAML としても有効なので Obsidian のプロパティで読める）、本文は日本語・原文・リンク |
| `data/ids.json` | CVE / GHSA / JVNDB → UUID、UUID → 週 |
| `data/weeks/YYYY-Www.json` | 週ごとの一覧（md から生成） |
| `data/weeks/index.json` | 週の一覧と件数 |

- UUID は新規にランダム（v4）で付け、`ids.json` で ID と対応させます。GHSA が先に出て後から CVE が付いても UUID は変わりません。
- 収集データにない脆弱性（「過去の未対応」で OSV から見つかったもの）は、ID から決まる UUID（v5）を使います。後で収集データに入ったら、ステータスは正式な UUID へ自動で付け替えます。
- 週は月曜始まり・日本時間の ISO 週（例: 2026-W47 = 11/16〜11/22）。公開から 14 日以上経って見つけたもの（KEV への追加など）は見つけた週に入ります。

## 分類

- **危険度**: Critical / High / Medium / Low / 未評価。🔥 は CISA KEV 掲載（実際に悪用されている）
- **OS**: NVD の CPE → なければ説明文から推定
- **言語**: GitHub Advisory のエコシステム → NVD は説明文から推定
- **ハイライト**（強い順）: 依存パッケージに該当 → 製品・言語が一致 → OS が一致

## セキュリティ（外部データの扱い）

- URL は `https:` のみ。`javascript:` `data:` `file:` `obsidian:`、認証情報入り、IP 直書き、localhost、ポート指定は捨てます（`src/shared/sanitize.ts`）
- 詳細ページのリンクは ID を検証してから決まった形式で組み立てます
- 攻撃コード（PoC / Exploit）へのリンクは載せません
- Markdown 本文は HTML・リンク・画像・`[[wikilink]]`・表の記法をすべてエスケープします
- サイトは Astro の自動エスケープのみ（`set:html` 不使用）、ブラウザ側は `textContent` で描画、Content-Security-Policy でスクリプトは自サイトのみ
- 機械翻訳は指示に従わない翻訳専用モデル（FuguMT）を使い、出力に URL・リンク記法・HTML が増えていたら捨てます
- localStorage の値は読み込み時に必ず検証します（同じ `*.github.io` の他ページからも書き換えられるため）
- 攻撃文字列を使ったテストは `test/` にあります

## セットアップ

```bash
npm install
npm run collect   # 収集（翻訳モデルは初回に約 100MB ダウンロード。TRANSLATE=off で無効化）
npm test          # テスト（ネットワーク不要）
npm run dev:site  # サイトをローカルで確認
```

GitHub Actions（`.github/workflows/collect.yml`）が毎朝 JST 8:00 に収集 → サイトのデプロイを実行します。
`main` へ push したときは収集をせず、サイトのビルド・デプロイだけを行います。

| Secret（任意） | 用途 |
|---|---|
| `NVD_API_KEY` | NVD のレート制限緩和（[無料で発行](https://nvd.nist.gov/developers/request-an-api-key)）。推奨 |

| 環境変数 | 既定 | 内容 |
|---|---|---|
| `NVD_MIN_SEVERITY` | `high` | NVD から取り込む最低危険度（KEV は常に取り込む） |
| `PUBLISHED_WINDOW_DAYS` | `28` | これより古い公開日のものは「更新」されても取り込まない（KEV 追加分は例外） |
| `LOOKBACK_DAYS` | `3` | 初回に遡る日数 |
| `JVN_LOOKUP_MAX` | `60` | JVN を CVE 番号で個別に探す 1 回の上限 |
| `TRANSLATE` / `TRANSLATE_MAX` | on / `150` | 機械翻訳の有効・無効 / 1 回の上限件数 |

## 構成

```
src/
├── main.ts                 # 収集パイプライン
├── shared/                 # サーバー・ブラウザ共通: sanitize / week / uuid / version
├── fetchers/               # nvd / ghsa / kev / jvn / http
├── processors/             # classify（危険度・OS・言語）/ merge / links（リンク検証・分類）
├── translate/machine.ts    # FuguMT（任意）
├── projects/manifests.ts   # 依存ファイルの解析（ブラウザから使う）
└── writers/store.ts        # Markdown・JSON の保存
site/src/
├── pages/weeks/[week].astro  # 週ページ（ボード・過去の未対応）
├── components/VulnCard.astro
├── layouts/Base.astro        # ヘッダー・設定ダイアログ・CSP
└── lib/client/               # storage / match / osv / board-ui / settings-ui
```
