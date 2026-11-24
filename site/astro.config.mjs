import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // GitHub Pages のリポジトリ名に合わせて base を設定する
  // 例: https://nagamatsuDev.github.io/tech-news-kb/ なら "/tech-news-kb"
  // カスタムドメインを使う場合は base: "/" に変更する
  base: "/tech-news-kb",

  integrations: [tailwind()],

  // data/ ディレクトリを public として扱う（index.json を直接配信）
  // ビルド時にコピーされる
  publicDir: "../data",

  build: {
    // GitHub Pages 向けに assets をまとめる
    assets: "_assets",
  },

  vite: {
    // スクリプトをページ内にインライン化しない（CSP の script-src 'self' を守るため）
    build: { assetsInlineLimit: 0 },
    // ../src/shared などリポジトリ直下の共通コードを dev サーバーでも読めるようにする
    server: { fs: { allow: [".."] } },
  },
});
