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

## What Architecture Does the Project Use?

The most accurate description is:

> A modular monolith, content-driven, server-first, bilingual Next.js corporate marketing website.

It is not a microfrontend system or a complex full-stack application requiring Redux, a database, a CMS, or a large API layer.

```text
Browser
└── Next.js 16 App Router
    ├── /zh locale root layout
    ├── /ja locale root layout
    ├── Localized route adapters
    │   └── Shared page implementations
    │       ├── AboutPageTemplate
    │       ├── ProductPageTemplate
    │       └── ServicePageTemplate
    ├── Shared site components
    │   ├── SiteHeader
    │   ├── SiteFooter
    │   └── NonLandingHeroMedia
    ├── Strongly typed content layer
    │   ├── Chinese content modules
    │   ├── Japanese content modules
    │   ├── Shared product source data
    │   └── TypeScript content contracts
    ├── Small client-side islands
    │   ├── Locale switching
    │   ├── URL query-parameter synchronization
    │   └── Error recovery
    └── Platform capabilities
        ├── Metadata, canonical URLs, and hreflang
        ├── Sitemap and robots configuration
        ├── Error boundaries
        └── Server error instrumentation
```

## Why Did We Choose This Architecture?

### Server Components-first

The website is primarily used to present company, product, and life sciences service information. Most pages do not require browser-side state.

For that reason, Server Components are used by default. Client Components are limited to features that genuinely require browser-side interaction:

- Service technology selection
- Yeast two-hybrid system selection
- URL query-parameter synchronization
- Preserving state during locale switching
- Error recovery and screen-reader announcements

This reduces client-side JavaScript, hydration work, and state-management complexity.

### Path-based bilingual routing

The current language is represented by `/zh/...` and `/ja/...` instead of a query parameter such as `?lang=zh`.

This provides:

- Stable and shareable URLs
- Clear language-specific URLs for search engines
- Predictable canonical and `hreflang` relationships
- Correct document-level `<html lang>` values
- Separation of Chinese and Japanese font entry points

The current implementation uses thin route adapters for Chinese and Japanese, while the actual page implementations are shared. This creates a small amount of route-file duplication but avoids duplicating entire pages.

### Strongly typed content modules instead of a CMS or i18n library

The project currently supports only Chinese and Japanese. The content is developer-managed and does not require frequent publishing by nontechnical users.

The localization architecture therefore uses TypeScript content modules:

- One content module per locale
- One shared content contract for all locales
- Stable semantic IDs for repeated items
- Separation between product source data and localized presentation
- Compile-time completeness checks using tuples, unions, and `satisfies`

This catches missing fields, unsupported item IDs, and incomplete translations during type checking.

The tradeoff is that content updates require a code change and deployment. If the number of locales, editors, or publishing workflows grows significantly, introducing a CMS or a dedicated internationalization platform would become more appropriate.

### Shared templates and a shared site shell

Product pages, service pages, and About pages use separate shared templates. They also share the site Header, Footer, page container, and non-Landing Hero media pipeline.

This reduces duplication and prevents visual behavior from drifting between routes without forcing every page into one overly generic template.

### The URL as part of the UI state

Service technology and yeast two-hybrid selections are stored in the query string rather than only in local React state or Redux.

This makes the selected state:

- Refreshable
- Shareable
- Compatible with browser navigation
- Preservable during locale switching

The tradeoff is additional logic for invalid values, duplicate parameters, defaults, URL normalization, and internally triggered URL updates.

### Tailwind CSS and native browser features first

The project is a custom corporate marketing website, so it primarily uses:

- Tailwind CSS
- CSS Grid
- Container queries
- CSS Subgrid
- Semantic design tokens
- Native HTML tables and buttons

Material UI, Redux, and other larger libraries were not introduced because the project does not currently need a complete administrative component system or complex global client-side state.

This keeps the dependency surface small, although it means the project must implement and verify more of its responsive behavior and accessibility directly.

## License

[MIT](https://github.com/caiqin-demo/Dongfangchunyi/blob/main/LICENSE). The shortest license that works.
