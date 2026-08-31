# Dependency selection rules

Read this file whenever a requested frontend capability matches any Selection matrix trigger, or whenever proposing, installing, removing, replacing, or materially configuring a dependency for this repository's current Node.js/Next.js/React frontend.

## Gate

The root dependency gate is authoritative. This file defines the preferred selection matrix. Technologies below are first choices when their trigger matches; if one cannot satisfy the requirement, explain why and obtain discussion before substituting it.

## Selection matrix

| Trigger | First choice | Boundary |
|---|---|---|
| Production UI layout, responsive CSS, theme roles/tokens, states, multi-section or reusable visual work | <a id="rule-dep-tw"></a>Tailwind CSS and `@tailwindcss/postcss` | Follow current theme/integration guidance; use `@theme` semantic tokens. |
| Brand/body typography, multilingual script coverage, font loading/layout shift, theme font variables | <a id="rule-dep-gf"></a>Google Fonts through `next/font/google` | Usually no package; discuss `next/font/local` or alternatives if coverage/brand needs are unmet. |
| Complex forms, Select/Autocomplete/Date Picker/Tabs/Table/Pagination, admin/portal, complete component system | <a id="rule-dep-mui"></a>Material UI with only required MUI/Emotion packages | Bespoke marketing UI remains Tailwind; define responsibilities/CSS layer order when both are needed. |
| Standard non-brand navigation/contact/action/card/social icon | <a id="rule-dep-icons"></a>React Icons | Import directly from one chosen family; do not recreate available standards with glyphs, complex handwritten SVG, or CSS. |
| Transient submission/copy/upload/save/sign-in/loading success/failure/progress | <a id="rule-dep-toast"></a>React Hot Toast | Not a replacement for persistent field validation. |
| Bespoke accessible mobile menu, modal, menu/popover, listbox/combobox, disclosure, tab/switch/radio, or focus-rich primitive | <a id="rule-dep-headless-ui"></a>Headless UI + Tailwind | Prefer MUI for a complete pre-styled Material system. |
| Broad, frequently changing shared client state with complex transitions/history/DevTools needs, including approved cart/filter/workspace flows | <a id="rule-dep-redux"></a>Redux Toolkit + React Redux | Keep provider focused; do not duplicate URL state or state owned by one component. |
| Noticeable async wait for form, data, upload, or API action | <a id="rule-dep-spinner"></a>React Loader Spinner plus appropriate Next.js loading/Suspense boundary | Use a compact local spinner for local actions, accessible status text, and no page block for a small wait. |

<a id="rule-dep-tw-08"></a>

- When an approved requirement requires Tailwind installation or integration, follow the current Tailwind theme and framework-integration guidance. Install `tailwindcss` and `@tailwindcss/postcss` as development dependencies unless the current official integration guidance requires otherwise.

<a id="rule-dep-mui-07"></a>

- When an approved requirement uses Material UI, follow the current Material UI Next.js App Router integration guidance and install only the required MUI and Emotion packages. For a bespoke marketing interface, use Tailwind CSS for visual styling; when both systems are required, define their separate responsibilities and CSS-layer order before implementation.

<a id="rule-dep-gf-06"></a>

- When selecting or changing the frontend font family, browse the available families in the current official Google Fonts catalog. Prefer Next.js `next/font/google` so the selected font is optimized and self-hosted at build time; this normally requires no additional npm package. If Google Fonts cannot provide the required language coverage or brand typeface, discuss `next/font/local` or another source with the user before substituting it.

<a id="rule-dep-rdx-08"></a>

- When an approved requirement selects Redux for frontend state management, follow the current official React Redux guidance and pair React Redux with Redux Toolkit rather than writing Redux boilerplate manually. Keep the provider in a focused Client Component, and do not duplicate state already represented reliably by the URL or owned locally by a single component.
