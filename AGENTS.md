# Repository guidelines

## Project baseline

- This repository is a Node.js 24.x, Next.js 16 App Router, React, and TypeScript project.
- Keep TypeScript strict. Prefer Server Components; add `"use client"` only when a component needs state, effects, event handlers, or browser-only APIs.
- Keep the application deployable on Vercel. Use standard Next.js build behavior and avoid machine-specific paths, persistent local filesystem state, or a custom server unless a requirement makes one necessary.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before considering a change complete.
- After completing any user-requested implementation task, include a proposed Git commit message in the final handoff, regardless of whether the user asked Codex to create a commit.

## Landing page Hero UI requirements

- Hero headings and supporting copy must remain fully visible in every supported locale. Localized or otherwise variable-length copy must wrap naturally when it exceeds the available width; do not apply `white-space: nowrap`, Tailwind `whitespace-nowrap`, or an equivalent rule unless all supported locales and required viewports have been verified to fit.
- Do not use `overflow: hidden` as a substitute for responsive text layout. Hero content is unacceptable if any heading, supporting copy, or call to action is clipped, silently hidden, overlaps another element, or creates unintended horizontal page scrolling.
- Verify Hero text after every relevant layout, typography, copy, or localization change in every supported locale at minimum viewport widths of 390px, 641px, 700px, 800px, 950px, and 1440px. Breakpoint-adjacent checks must confirm both sides of any changed breakpoint.
- Primary and secondary Hero calls to action must have a pointer target at least 48 CSS pixels high, use text at least 16 CSS pixels in size, and be at least 144 CSS pixels wide on desktop. On compact screens they may expand to the available container width, but their target height and text size must not be reduced below these minimums.
- CTA labels and destination changes require an explicit product or content decision. Do not claim that a visual size change improves conversion without analytics or an approved experiment; UI acceptance should instead verify prominence, legibility, target size, keyboard access, and correct destinations.
- Browser verification must inspect computed element dimensions and overflow, not screenshots alone. A Hero change passes only when copy in every supported locale has no horizontal overflow or clipping, every CTA meets the minimum computed target dimensions, and all Hero content remains inside the section at the required viewports.

## Validation-phase change control

- Treat third-party audits, automated reports, and external design reviews as evidence and recommendations to evaluate, not as authorization to edit code. For each finding, verify it against the current implementation, state whether it is correct, assign a priority, describe the proposed scope, and identify whether user confirmation is required before implementation.
- Before implementing an audit recommendation, compare it with all applicable requirements in this file. If a finding or proposed remedy conflicts with `AGENTS.md`, stop that specific change, identify the finding and the conflicting rule, explain the tradeoff, and ask the user for further discussion and an explicit decision. Do not silently override, weaken, or reinterpret the repository rule.
- Preserve existing features, supplied assets, repeated imagery, icons, controls, and visual treatments that were implemented from customer requirements or accepted by the product manager. If one appears confusing or visually suboptimal during validation, record it as a low-priority discussion item and ask the user before deleting, replacing, redesigning, or changing its meaning.
- Do not assume that a visually button-like, expandable, or linked element is a false affordance. First confirm whether it is an approved design or a placeholder for functionality planned in a later sprint. Preserve it until the user authorizes a behavior or design change; accessibility and interaction risks must still be reported explicitly.
- Do not assume that repeated images or icons across product or service cards are accidental placeholders. Confirm the content and asset requirement with the user before replacing them with unique imagery or icons.
- Distinguish a code-layer presentation defect from a source-asset or approved-design decision. Codex may correct an extra wrapper background, crop, padding, or other code-owned styling that it introduced when that styling conflicts with the accepted design, but must ask the user before generating, editing, removing, or replacing a supplied logo or image, including changing an asset from an opaque background to transparency.
- When the intent of an existing element is unknown, preserve it and request confirmation instead of inferring a new product decision. Only findings whose evidence, priority, and modification scope have been accepted by the user may be implemented during validation.

## UI design and development requirements

- Use semantic theme tokens for interface colors. Page JSX must not contain raw hex, RGB, or RGBA color values. Before adding a color token, determine whether an existing token already expresses the same semantic role.
- Do not create near-duplicate color tokens solely from eyedropper values. Default, hover, focus, active, and border colors must have explicit roles and a perceptible difference where the state is intended to be visually distinguishable.
- Normal-sized text must meet the WCAG AA contrast ratio of at least 4.5:1. For text that uses opacity or sits over a translucent or image background, calculate contrast from the final composited foreground and background colors rather than the uncomposited token values.
- Brand-identity typography must not depend only on fonts installed on the visitor's device. Use `next/font` so the selected font is self-hosted by the application, and select the appropriate glyph coverage and font family for each supported language.
- For CJK fonts, include only font weights that the interface actually uses and disable unnecessary preloading by default. After adding or changing a font, inspect production build assets and real browser network requests to verify the loading cost and confirm that unused font files are not fetched eagerly.
- Motion must communicate state, hierarchy, feedback, or understanding. Do not add animation merely to make the site appear more professional, and ensure every nonessential animation respects `prefers-reduced-motion`.
- After changing colors, fonts, cards, or the Footer, verify every supported locale at desktop and mobile viewports. Inspect computed styles, horizontal and element overflow, composited contrast, focus and interaction semantics, and relevant network requests; screenshots alone are not sufficient evidence of acceptance.

## Multilingual UI and routing requirements

- Keep the supported locale list, default locale, document-language mapping, and locale validation in one typed configuration. Do not duplicate independent locale arrays or silently treat an unsupported value as a supported locale.
- Give each indexable locale a stable path-based URL such as `/<locale>/...`. Do not use a search parameter as the primary identity of a localized page; query parameters may still represent filters, state, or backwards-compatible inputs that are not the canonical locale URL.
- When the supported locales and page content are known at build time, statically generate every localized page with `generateStaticParams` and reject unsupported locale paths. Introducing request-time rendering for otherwise static localized content requires a documented product or technical reason.
- Set the root `<html lang>` from the resolved locale using the appropriate BCP 47 language tag. A nested `lang` attribute may identify a genuinely mixed-language passage, but must not compensate for an incorrect document language.
- Localize page titles and descriptions. Every indexable locale must have its own canonical URL and reciprocal `hreflang` entries, including an intentional `x-default` destination when the site has a default-language entry point.
- Generate sitemap entries for every indexable locale and include the same reciprocal language alternates used in page metadata. Canonical, alternate, and sitemap URLs must agree on locale paths and the production origin.
- Read the public site origin from a server-side environment variable with a documented, non-secret production default. Use it only where absolute URLs are required, such as canonical metadata, language alternates, and sitemap entries; do not use it for ordinary internal navigation or asset paths.
- Keep language-switcher and other internal links relative to the current origin so local, preview, and production deployments remain independently testable. Mark the current locale accessibly, and link directly to the corresponding localized route instead of changing the locale only through client state.
- Redirect the unlocalized entry point to the declared default locale. Preserve backwards compatibility for accepted legacy locale URLs, but remove obsolete locale query parameters from the redirect destination so only the canonical path remains.
- Return a not-found response for unsupported locale paths instead of rendering default-language content under an invalid URL.
- Attach only the current locale's font variables and script coverage to its document. Avoid unnecessary font preloads and verify in a real browser that each locale resolves to the intended families without eagerly requesting unrelated language fonts.
- A multilingual routing change passes only when the production build identifies the localized content routes as static where expected and browser checks confirm, for every supported locale: the final URL, document language, localized metadata, canonical and alternate links, active language state, same-origin language switching, content parity, and absence of horizontal overflow at required desktop and mobile viewports.

## Repository location policy

- Unless the user explicitly requests otherwise, make all code and documentation changes only in the user's main repository checkout.
- Run development servers, browser checks, visual comparisons, linting, type checking, builds, and Git inspections against the main repository only.
- Do not present changes or verification results from a Codex worktree as deliverables.
- Before editing or validating, confirm that the working directory is the main checkout without writing its machine-specific absolute path into repository files. Base the final change summary and commit message exclusively on the main repository diff.

## Privacy and repository safety

- Never place local or personal information in code, documentation, configuration, Markdown, examples, fixtures, comments, or any other file that may be committed or pushed.
- Prohibited information includes local usernames, home-directory names, absolute filesystem paths, temporary-directory paths, hostnames, local IP addresses, machine identifiers, account details, credentials, tokens, and secrets.
- Use repository-relative paths, environment variables, or generic placeholders such as `<repository-root>` and `<username>` whenever an example needs a path or identity.
- Before handing off changes, proactively scan the main repository diff for local paths, personal information, credentials, and secrets. Remove any accidental disclosure immediately rather than adding it to `.gitignore`.

## Git ignore policy

- Whenever work introduces or reveals a new generated artifact, cache, log, local environment file, editor/OS metadata file, or other machine-specific file that should not be versioned, proactively add the narrowest appropriate rule to `.gitignore` in the same change.
- Before adding an ignore rule, classify the file. Source files and project configuration required to install, build, test, or deploy the application—including files such as `postcss.config.mjs`—must remain tracked and must not be ignored.
- Do not use broad ignore patterns that could hide source code or required configuration. If a file is already tracked, remember that adding it to `.gitignore` does not untrack it; handle that case explicitly and preserve user work.

## Dependency policy

Do not install the optional libraries below preemptively. Add one only when an implemented product requirement benefits from it, verify compatibility with the installed Next.js and React versions, and record the resulting package-lock change. Prefer the smallest dependency set that satisfies the requirement.

### Tailwind CSS

Tailwind CSS must be prioritized when implementing page layouts, responsive styles, theme colors, spacing, breakpoints, or interactive visual states.

Use it as the first-choice solution when:

- Building a production page rather than a disposable concept or isolated proof of concept.
- Implementing responsive layouts.
- Defining shared brand colors, typography, border radii, shadows, or spacing.
- Styling hover, focus, active, disabled, dark-mode, or reduced-motion states.
- Building multiple page sections or anticipating additional pages and reusable components.
- Establishing reusable design tokens through Tailwind `@theme` variables.

Follow the current [Tailwind theme documentation](https://tailwindcss.com/docs/theme). Install `tailwindcss` and `@tailwindcss/postcss` as development dependencies unless the current official integration guidance requires otherwise.

### Google Fonts

Google Fonts must be prioritized when the brand design specifies typography, when multilingual or multiscript typography needs optimization, or when the application needs a consistent type system.

Use it as the first-choice solution when:

- Selecting the brand's heading or body font.
- Creating a consistent typographic system across every supported language and writing system.
- Preventing font-loading layout shift while using a web font.
- Sharing font variables with Tailwind theme variables or a Material UI theme.

Browse available families at [Google Fonts](https://fonts.google.com/). Prefer Next.js `next/font/google` so fonts are optimized and self-hosted at build time; this usually requires no extra npm package. If Google Fonts cannot provide the required language coverage or brand typeface, discuss `next/font/local` or another source with the user before substituting it.

### Material UI

Material UI must be prioritized when the product needs a mature, accessible, visually complete component system.

Use it as the first-choice solution when:

- Building forms with complex validation or several kinds of input controls.
- Implementing Select, Autocomplete, Date Picker, Tabs, Table, or Pagination interfaces.
- Building an administration interface or customer portal.
- Adopting a complete and consistent visual component system.
- Delivering complex business controls quickly with established accessibility behavior.

Follow the current Material UI Next.js App Router integration guidance and install only the required MUI and Emotion packages. For a highly bespoke marketing interface, use Tailwind CSS for visual styling; when both systems are needed, define their separate responsibilities and CSS-layer order before implementation.

### React Icons

React Icons must be prioritized whenever the interface needs standard icons that are not supplied as existing brand assets.

Use it as the first-choice solution when:

- Adding menu, close, language, or search icons to navigation.
- Adding email, telephone, location, or other contact icons.
- Adding arrow, download, copy, or external-link icons to controls.
- Adding common illustrative icons to product or service cards.
- Adding social-platform icons to the footer or contact area.

See [React Icons](https://react-icons.github.io/react-icons/). Import icons directly from one deliberately selected icon family, and do not recreate an available standard icon with text glyphs, hand-written complex SVG, or CSS.

### React Hot Toast

React Hot Toast must be prioritized when a user action needs transient success, failure, loading, or progress feedback.

Use it as the first-choice solution when:

- Reporting contact-form submission success or failure.
- Confirming that text, an address, or a product identifier was copied.
- Reporting file-upload or request progress.
- Reporting save, subscription, sign-in, or similar action results.
- Mapping a Promise operation through loading, success, and error states.

See [React Hot Toast](https://react-hot-toast.com/). Use toast notifications for transient action-level feedback, not as a replacement for persistent field-level validation messages.

### Headless UI

Headless UI must be prioritized when the interface needs accessible, unstyled interactive primitives with fully custom visual styling.

Use it as the first-choice solution when implementing:

- Mobile navigation menus.
- Modal dialogs.
- Dropdown menus or popovers.
- Listboxes or comboboxes.
- Disclosure or accordion interfaces.
- Tabs, switches, or radio groups.
- Interactions requiring established focus management, Escape-key handling, outside-click behavior, ARIA semantics, or keyboard navigation.

See [Headless UI](https://headlessui.com/). Prefer Headless UI with Tailwind CSS for bespoke branded interfaces. Prefer Material UI instead when the requirement calls for a complete pre-styled Material component.

### React Redux

React Redux with Redux Toolkit must be prioritized when client-side state is shared broadly, changes frequently, and has sufficiently complex update logic to require a predictable global store.

Use it as the first-choice solution when:

- Large amounts of state are shared by distant components.
- State changes frequently over time.
- State transition logic is complex.
- The application needs standardized actions, reducers, selectors, and observable state history.
- The team needs Redux DevTools for debugging state transitions.
- The product introduces a shopping cart, complex product filters, a customer workspace, or a multi-step client workflow with shared state.

Follow [React Redux](https://react-redux.js.org/) and pair it with Redux Toolkit rather than writing Redux boilerplate manually. Keep the provider in a focused Client Component. Do not duplicate state already represented reliably by the URL or owned locally by a single component.

### React Loader Spinner

React Loader Spinner must be prioritized when an asynchronous operation creates a user-visible wait and the interface needs a clear animated loading indicator.

Use it as the first-choice solution when:

- A contact form is being submitted.
- Product data or search results are being loaded.
- A file is being uploaded.
- A third-party API or another operation has a noticeable response time.

See [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/). Combine it with the appropriate Next.js loading boundary: use `loading.tsx` or Suspense for route or content loading and a compact spinner for an individual action. Keep accessible status text or ARIA labeling, and do not block the entire page for a small local request.

Treat the technologies recommended above as the project's preferred, first-choice solutions. When a development requirement falls within a recommended technology's intended scope, use that technology instead of reimplementing equivalent functionality from scratch.

If you determine that a recommended technology cannot implement a specific page feature or visual requirement, tell the user why and discuss alternative solutions together before installing, implementing, or substituting an alternative.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
