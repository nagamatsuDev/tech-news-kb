# Tech News KB

RSS・Hacker News・GitHub Trending を毎朝自動収集して、Obsidian と GitHub Pages で閲覧できる技術ニュース知識ベースです。

## 構成

```
tech-news-kb/
├── src/                    # 収集パイプライン（TypeScript）
│   ├── types/index.ts      # 全型定義
│   ├── config/
│   │   ├── sources.ts      # RSS フィード URL 一覧
│   │   └── tags.ts         # ルールベースタグ定義
│   ├── fetchers/
│   │   ├── rss.ts          # RSS / Atom 取得
│   │   ├── hackernews.ts   # Hacker News API 取得
│   │   └── github.ts       # GitHub Trending スクレイピング
│   ├── processors/
│   │   ├── dedup.ts        # URL ベース重複排除
│   │   └── tagger.ts       # ルールベース自動タグ付け
│   ├── writers/
│   │   └── markdown.ts     # Markdown / index.json 書き込み
│   └── main.ts             # エントリポイント
├── data/                   # 収集データ（Git 管理）
│   ├── index.json          # 全記事インデックス（RAG 拡張用）
│   └── articles/
│       └── YYYY/MM/
│           └── YYYY-MM-DD.md   # 1日1ファイル（Obsidian 互換）
├── site/                   # Astro サイト（GitHub Pages）
│   ├── src/
│   │   ├── layouts/Base.astro
│   │   ├── components/ArticleCard.astro
│   │   └── pages/
│   │       ├── index.astro         # トップ（タグフィルター付き）
│   │       └── tags/
│   │           ├── index.astro     # タグ一覧
│   │           └── [tag].astro     # タグ別記事一覧
│   └── package.json
└── .github/workflows/
    └── collect.yml         # 毎朝 JST 8:00 に自動実行
```

## セットアップ

### 1. このリポジトリを fork / clone する

```bash
git clone https://github.com/nagamatsuDev/tech-news-kb.git
cd tech-news-kb
```

### 2. 依存パッケージをインストール

```bash
npm install
```

### 3. 手動で収集を試す

```bash
npm run collect
```

`data/articles/YYYY/MM/YYYY-MM-DD.md` と `data/index.json` が生成されます。

### 4. GitHub Pages を有効化

リポジトリの `Settings > Pages > Source` を **GitHub Actions** に変更します。

### 5. GitHub Actions を実行

`Actions` タブ → `Collect & Deploy` → `Run workflow` で初回実行できます。
以降は毎朝 JST 8:00 に自動実行されます。

## Obsidian での使い方

`data/` ディレクトリを Obsidian の Vault として開きます。

- 各日の記事は `articles/YYYY/MM/YYYY-MM-DD.md` に保存されます
- Frontmatter にタグが含まれるため、Obsidian のタグ検索・グラフビューで活用できます

## フェーズ計画

| Phase | 内容 | 状態 |
|-------|------|------|
| Phase 1 | 収集パイプライン + Astro サイト | ✅ 実装済み |
| Phase 2 | gpt-4o-mini による日本語翻訳・要約 | 🔜 次のステップ |
| Phase 3 | タグ別集計・週次トレンドレポート | 📋 計画中 |
| Phase 4 | RAG / ベクトル検索 | 📋 計画中 |

## カスタマイズ

### RSS ソースを追加する

`src/config/sources.ts` の `FEED_SOURCES` 配列に追加するだけです。

```ts
{
  name: "My Blog",
  url: "https://example.com/rss.xml",
  category: "react", // "react" | "node" | "ai" | "security"
}
```

### タグルールを追加する

`src/config/tags.ts` の `TAG_RULES` 配列に追加します。

```ts
{ tag: "rust", keywords: ["rust", "cargo", "rustlang"] }
```

### GitHub Pages のベース URL を変更する

`site/astro.config.mjs` の `base` を変更します。

```ts
base: "/your-repo-name",
```
