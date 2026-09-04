# 東方純一株式会社

[English](./README.md) | [简体中文](./README.zh-CN.md)

これは、ライフサイエンス分野にサービスを提供する東方純一株式会社（Eastern Purity Co., Ltd.）の多言語 B2B 公式 Web サイトです。Next.js で構築され、中国語（`zh`）と日本語（`ja`）の公開ルートを提供します。

## サイトの範囲

各対応ロケールには、次のページがあります。

- ランディングページ
- 会社概要
- お問い合わせ
- 抗体製品
- ELISA キット
- 研究用機器
- 酵母ツーハイブリッド
- ゲノムシーケンシング

ルートパスは、既定で日本語版（`/ja`）へリダイレクトします。旧形式の `/?lang=zh` と `/?lang=ja` は、対応するローカライズ済みルートへリダイレクトされます。

## 技術スタック

- Node.js 24.x
- npm 11（リポジトリでは `npm@11.17.0` を指定）
- Next.js 16 App Router
- React 19
- strict チェックを有効にした TypeScript
- Tailwind CSS 4 と PostCSS
- Next.js 設定を使用する ESLint 9
- React Icons

## プロジェクト構成

```text
src/
  app/        ローカライズされたルート、共有ページ実装、フォント、ページアセット
  components/ 共有サイトコンポーネントとページテンプレート
  content/    型付けされた中国語・日本語コンテンツ
  i18n/       ロケール設定
  lib/        ルート、サイト URL、メタデータのヘルパー
tests/        Node.js テスト
```

サイトでは共有コンポーネントと型付けされたローカライズコンテンツを使用し、ローカライズ済みメタデータ、canonical URL、`hreflang` リンク、サイトマップを生成します。

## ローカル開発

### 前提条件

Node.js 24.x をインストールしてください。プロジェクトは npm を使用し、ロックファイルを含みます。

nvm を使用する場合、リポジトリに `.nvmrc` があります。

```bash
nvm use
node --version
npm --version
```

### 依存関係のインストール

```bash
npm ci
```

### サイト URL の設定（任意）

ローカルで絶対メタデータ URL が必要な場合は、環境変数テンプレートをコピーします。

```bash
cp .env.example .env.local
```

canonical、`hreflang`、またはサイトマップの URL をテストするときは、`SITE_URL` をローカルアドレスに設定します。

```dotenv
SITE_URL=http://localhost:3000
```

`SITE_URL` は、絶対 canonical、`hreflang`、サイトマップ URL の生成にのみ使用されます。未設定の場合は既定の本番サイト URL が使用されます。

### 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開きます。[http://localhost:3000/zh](http://localhost:3000/zh) と [http://localhost:3000/ja](http://localhost:3000/ja) にも直接アクセスできます。

### 本番ビルドをローカルで実行する

```bash
npm run build
npm run start
```

## 品質チェック

変更を引き渡す前に、該当するチェックを実行します。

```bash
npm run lint
npm run typecheck
node --test tests/*.test.mjs
npm run build
```

`npm run typecheck` は `next typegen` の後に `tsc --noEmit` を実行します。

## Vercel へのデプロイ

このリポジトリは、Next.js アプリケーション向けの標準的な Vercel 連携に従います。

1. リポジトリを Vercel プロジェクトにインポートします。
2. デプロイ固有の要件がない限り、自動検出された Next.js フレームワーク設定を維持します。
3. デプロイで既定値と異なる公開サイトオリジンが必要な場合は、Vercel プロジェクトの環境変数で `SITE_URL` をそのオリジンに設定します。
4. デプロイします。Vercel は依存関係をインストールし、設定済みの本番ビルドを実行します。

このリポジトリには、カスタム `vercel.json`、Docker イメージ、CI デプロイワークフローはありません。

## プロジェクトドキュメント

- [リポジトリルール](./AGENTS.md)
- [環境変数テンプレート](./.env.example)
- [プロジェクトタスクリスト](./TODO.md)

## ライセンス

現在、このリポジトリにはライセンスファイルが含まれていません。ソースまたはアセットを再利用する前に、リポジトリ所有者へお問い合わせください。
