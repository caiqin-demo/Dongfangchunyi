# Eastern Purity Co., Ltd.

[简体中文](./README.zh-CN.md) | [日本語](./README.ja.md)

This is the official multilingual website of Eastern Purity Co., Ltd. (`東方純一株式会社`), a B2B company serving the life-science sector. It is built with Next.js and provides Chinese (`zh`) and Japanese (`ja`) public routes.

## Site scope

Each supported locale includes the following pages:

- Landing page
- Company Profile
- Contact
- Antibody Products
- ELISA Kits
- Lab Instruments
- Yeast Two Hybrid
- Genome Sequencing

The root route redirects to Japanese (`/ja`) by default. Legacy `/?lang=zh` and `/?lang=ja` requests redirect to their corresponding localized route.

## Technology

- Node.js 24.x
- npm 11 (the repository declares `npm@11.17.0`)
- Next.js 16 App Router
- React 19
- TypeScript with strict checking
- Tailwind CSS 4 and PostCSS
- ESLint 9 with the Next.js configuration
- React Icons

## Project structure

```text
src/
  app/        Localized routes, shared page implementations, fonts, and page assets
  components/ Shared site components and page templates
  content/    Typed Chinese and Japanese content
  i18n/       Locale configuration
  lib/        Route, site URL, and metadata helpers
tests/        Node.js tests
```

The site uses shared components and typed localized content. It also generates localized metadata, canonical URLs, `hreflang` links, and a sitemap.

## Local development

### Prerequisites

Install Node.js 24.x. The project uses npm and includes a lockfile.

If you use nvm, the repository includes an `.nvmrc` file:

```bash
nvm use
node --version
npm --version
```

### Install dependencies

```bash
npm ci
```

### Configure the site URL (optional)

Copy the environment-variable template when you need local absolute metadata URLs:

```bash
cp .env.example .env.local
```

Set `SITE_URL` to the local address while testing canonical, `hreflang`, or sitemap URLs:

```dotenv
SITE_URL=http://localhost:3000
```

`SITE_URL` is used only to generate absolute canonical, `hreflang`, and sitemap URLs. It defaults to the production site URL when unset.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You can also visit [http://localhost:3000/zh](http://localhost:3000/zh) and [http://localhost:3000/ja](http://localhost:3000/ja) directly.

### Run a production build locally

```bash
npm run build
npm run start
```

## Quality checks

Run the applicable checks before handing off a change:

```bash
npm run lint
npm run typecheck
node --test tests/*.test.mjs
npm run build
```

`npm run typecheck` runs `next typegen` followed by `tsc --noEmit`.

## Deploying to Vercel

This repository follows the standard Vercel integration for a Next.js application:

1. Import the repository into a Vercel project.
2. Keep the detected Next.js framework settings unless your deployment has a specific requirement.
3. Set `SITE_URL` to the public site origin in the Vercel project environment variables when the deployment needs a different origin from the default.
4. Deploy. Vercel installs dependencies and runs the configured production build.

The repository does not define a custom `vercel.json`, Docker image, or CI deployment workflow.

## Project documentation

- [Repository rules](./AGENTS.md)
- [Environment-variable template](./.env.example)
- [Project task list](./TODO.md)

## License

No license file is currently included in this repository. Contact the repository owner before reusing the source or assets.
