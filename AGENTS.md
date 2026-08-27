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

## Responsive layout architecture requirements

- Define a small set of named, semantic breakpoints in the Tailwind theme and use them consistently across shared layouts and components. Do not scatter arbitrary viewport values such as `max-[...]` through JSX unless a measured requirement cannot be represented by an existing breakpoint and the exception is documented.
- Treat a breakpoint as a coordinated layout transition, not as the width where one component happens to wrap. When adding or changing one, inspect the Header, page container, cards, tables, and Footer together.
- Do not create adjacent or near-adjacent breakpoints for the same responsive state. A distinct breakpoint must represent a distinct layout decision with a documented reason.
- Verify every changed breakpoint immediately below, at, and immediately above its threshold in every supported locale. The change fails if related components enter incompatible layout states, content overlaps, or the page gains unintended horizontal overflow.
- Give the Hero and the body content a shared outer container and gutter system so the heading and the content it introduces follow a deliberate alignment line. A section may use a narrower readable inner width, but it must not silently introduce a different page measure or outer gutter.
- Let the shared page template own page-level width and horizontal padding. Individual sections must not recreate slightly different `max-width`, margin, or gutter calculations unless the design explicitly requires a named variant.
- When a reusable component can appear in containers of materially different widths, use a named CSS container and container queries for its internal layout changes. Reserve viewport breakpoints for page- or shell-level transitions, and centralize any reused container thresholds.
- Align repeated semantic bands across sibling cards with CSS Grid and `subgrid` where supported by the project browser baseline. Do not use fixed heights, minimum-height spacers, or empty blocks to simulate cross-card alignment; content must be allowed to grow naturally.
- Use fixed heights only for deliberately bounded media or an explicitly designed scrolling region. Do not use them to align variable text, translated copy, specifications, tables, or complete cards.

## Data table and overflow requirements

- Preserve native table elements and their native display semantics. Do not change `table`, `thead`, `tbody`, `tr`, `th`, or `td` to `flex` or `block` merely to implement scrolling or layout.
- Associate row and column headers with data cells using native structure and `scope` wherever possible. Add ARIA only when native semantics cannot express the relationship, and give visual-only symbols such as checkmarks a localized accessible meaning.
- Implement frozen headers and columns with CSS `position: sticky` first. Before introducing JavaScript scroll compensation, inspect the scroll owner, overflow ancestors, containment, stacking contexts, and table structure; use JavaScript only when documented browser testing proves the native solution cannot satisfy the requirement.
- Keep any necessary scroll-compensation logic inside the smallest affected component, document the browser limitation it addresses, and remove Client Component boundaries when browser state, effects, and event handlers are no longer required.
- Do not place unrelated logical records into one DOM table row to obtain a two-column visual layout. Use separate semantically complete tables or CSS wrappers, ensure captions and header relationships remain complete, and expose only one responsive representation to assistive technology at a time.
- Confine intentional horizontal scrolling to a named table or panel region. The document itself must not acquire horizontal overflow, and unrelated content must not move when the region is scrolled.
- Make an intentionally scrollable data region keyboard-focusable, give it a localized accessible name or description, and provide a visible focus indicator that is not clipped by the overflow container.
- Verify tables after both horizontal and vertical scrolling at representative mobile, breakpoint-adjacent, laptop, and desktop widths. A screenshot of the initial scroll position is not sufficient; confirm sticky behavior, header association, reading order, focus visibility, and the absence of overlap.
- For large generated tables, measure rendered DOM node count and generated HTML size in addition to compressed transfer size. Gzip compression does not remove browser parsing, memory, accessibility-tree, or interaction costs.
- Prefer native header scope over repeated per-cell `headers` strings and duplicated screen-reader-only text when the native structure is sufficient. Do not render multiple complete hidden copies of a large table at the same breakpoint.
- When a matrix remains too large for acceptable parsing, memory, navigation, or interaction, record search, filtering, pagination, virtualization, or per-product routes as an information-architecture decision requiring product approval; do not disguise the problem through tighter typography or clipped overflow.

## Performance verification requirements

- Run performance acceptance against a production build in a clean or incognito browser profile with representative mobile and desktop throttling. Development mode, browser extensions, warm caches, service-worker state, and retained IndexedDB data are diagnostic variables, not acceptance evidence.
- Do not infer the Largest Contentful Paint element from visual prominence or source order. Confirm it with a production Lighthouse report or browser Performance trace for the tested route and viewport.
- A confirmed or strongly expected above-the-fold image LCP must be discoverable from the initial HTML through `next/image`, `<img>`, or an equivalent responsive image element rather than only through a CSS background. Declare correct intrinsic geometry and an accurate `sizes` value so the browser can select an appropriately sized resource.
- Apply eager loading, preload, or high fetch priority only to a resource proven to be critical for the tested route and viewport. Do not promote every above-the-fold image, and treat unused-preload warnings as evidence that the resource hint or route ownership must be re-evaluated.
- After changing an LCP candidate, verify request discovery time, resource load delay, load duration, decoded format, transferred bytes, element render delay, and the resulting LCP element. A smaller source file alone does not prove an LCP improvement.
- For approved responsive derivatives of fidelity-sensitive images, preserve the original asset, generate derivatives at build time without changing scientific meaning, and use `picture`, `srcset`, or `next/image` with widths close to actual rendered sizes. Verify labels, boundaries, intensities, annotations, transparency, and crop behavior against the original.
- Do not assume that a runtime locale branch excludes another locale's font assets from the critical path. Inspect production CSS and real browser requests, and structure locale entry points and font modules so only the current locale's required families, subsets, and weights are loaded.
- For large statically generated pages, measure raw generated HTML, compressed transfer size, and rendered DOM node count. Reducing gzip bytes without reducing markup does not remove parsing, memory, accessibility-tree, or interaction cost.
- Compare performance changes under the same build mode, route, viewport, throttling, cache state, and browser profile. Record the baseline, result, confirmed LCP element, and any measurement limitations; do not trade away semantics, accessibility, localization, or image fidelity for a higher synthetic score.

## Page image asset requirements

- Evaluate every supplied image before choosing its repository format. Inspect its purpose, source format, transparency, color fidelity, dimensions, animation, scientific or brand significance, and authorization constraints; do not apply one automatic conversion rule to every asset.
- Prefer WebP for ordinary photographic, decorative, and content imagery when it provides a meaningful size reduction, the target browsers support the required features, and visual comparison confirms that the conversion preserves the intended appearance. Keep SVG for suitable vector artwork and retain another source format when it is materially more appropriate.
- Preserve user-supplied logos, wordmarks, trademarks, certification marks, and other brand-identity assets in their original file and original format. Do not convert, re-encode, trace, redraw, crop, recolor, remove their background, add transparency, or otherwise alter them unless the user explicitly approves that exact transformation.
- Treat scientific figures, experimental images, charts, diagrams, screenshots used as evidence, and other meaning-bearing source images as fidelity-sensitive assets. Do not use lossy conversion or visual editing when it could change labels, boundaries, intensities, measurements, annotations, or scientific meaning; ask the user before creating a derivative when fidelity cannot be proven.
- Keep an authorized original source asset unchanged when creating an approved optimized derivative. Give derivatives distinct repository-relative names, document which version the page uses when that choice is not self-evident, and never overwrite the only original with a converted file.
- After adding or changing a page image, verify intrinsic dimensions, aspect ratio, transparency where applicable, responsive rendering, crop behavior, alternative text, decoded file type, browser requests, and visual fidelity at the required locale and viewport checks. File-size reduction alone is not evidence that a conversion is acceptable.

## Multilingual visual consistency requirements

- Treat one semantic UI role as one visual style across every supported locale. Corresponding Hero headings, section headings, body copy, card titles, card descriptions, labels, controls, navigation items, and Footer text must use the same semantic typography and spacing tokens by default.
- Locale-specific font families are permitted and expected when different scripts need the correct glyph coverage, but changing the font family must not silently change the intended hierarchy. For the same semantic role, keep `font-size`, `line-height`, `font-weight`, `letter-spacing`, color, and responsive behavior consistent unless an explicitly approved script requirement makes a difference necessary.
- Shared components must be presentation-independent from the active locale. Do not add props or render-time branches such as `isJapanese`, `isChinese`, `language === ...`, or locale-specific Tailwind class strings merely to shrink text, compress line height, alter spacing, or force translated content into an existing box.
- Handle longer or shorter translations through natural wrapping, appropriate max widths, responsive layout, flexible gaps, and content-driven height. Do not compensate by reducing one locale's font size, tightening only one locale's line height, adding per-language padding, or imposing fixed heights that clip or conceal translated content.
- Different translations may legitimately produce different line counts and section heights. Visual consistency means that corresponding roles share the same design rules; it does not require every locale to occupy an identical pixel height. Do not truncate or distort content solely to make localized screenshots geometrically identical.
- Keep language-dependent presentation decisions centralized. Locale selection may control translated content, the document language, text direction, writing mode, and the approved script-appropriate font family. Any additional visual exception must be represented by a named semantic token or typed variant, include a documented rationale, receive explicit product or design approval, and be verified in every supported locale; scattered inline locale conditionals are prohibited.
- Adding a new locale or changing shared typography requires comparing every supported locale at the same representative mobile, breakpoint-adjacent, narrow-desktop, and desktop viewports. At minimum, inspect 390px, 641px, 700px, 800px, 950px, and 1440px when those widths apply to the page's breakpoint system.
- Browser acceptance must compare computed `font-size`, `line-height`, `font-weight`, `letter-spacing`, element dimensions, and overflow for matching semantic roles. Screenshots and visual impressions alone cannot prove style parity, because different font families and glyph metrics can look optically different even when their CSS values match.
- Human review remains required after computed-style parity passes. Reviewers must confirm that each script remains legible, preserves the same hierarchy and emphasis, wraps naturally, and does not create clipping, overlap, unintended horizontal scrolling, hidden controls, or misleading visual prominence.
- These requirements apply to landing pages, all current and future subpages, and every shared component. A multilingual UI change is incomplete if it fixes one page while leaving the same locale-specific presentation workaround in a reusable component or another route.

## Accessibility UI design and development requirements

- Treat accessibility as part of the UI definition and completion criteria, not as a later visual-polish task. New pages and materially changed components must be operable with a keyboard, expose meaningful semantics to assistive technology, remain usable when zoomed, and satisfy the applicable WCAG 2.2 AA requirements.
- Use native document landmarks and elements before adding ARIA. A page must have a coherent heading hierarchy and clearly identifiable `header`, navigation, one primary `main`, and `footer` where those regions exist. Keep site-wide Header and Footer outside the page's primary `main` content; use `aria-labelledby` or an accessible name when multiple similar landmarks or sections need disambiguation.
- Provide a localized skip link as the first keyboard-focusable control on pages with repeated navigation. It must remain unobtrusive when unfocused, become fully visible without clipping when focused, target a stable primary-content ID, and move keyboard focus to that content when activated.
- Every interactive element must have a clearly visible `:focus-visible` indicator. A text-color change alone is insufficient: use an outline, ring, border, underline, or another non-color-only shape change with adequate contrast, thickness, and separation from adjacent pixels. Do not remove the browser outline unless an equal or stronger replacement is provided, and verify that overflow or sticky containers do not clip it.
- Keyboard focus order must follow the visual and reading order. All implemented actions must be reachable and usable without a pointer, reverse traversal with `Shift+Tab` must work, and no component may trap focus unless it is an intentionally modal interaction with complete focus management and an accessible exit.
- Give links and controls an accessible name that communicates their purpose without depending solely on nearby visual context. Decorative images must use empty alternative text, decorative ornaments must be hidden from assistive technology, and meaningful images must have concise alternative text appropriate to their function and surrounding content.
- Use state ARIA only when the state is semantically true. Mark the active page or current item with the appropriate `aria-current` value, and do not use dead CSS classes as a substitute for programmatic state. Do not add button, link, expanded, selected, or current semantics to a decorative or future-sprint placeholder until the corresponding behavior is implemented and approved.
- Localized links and language switchers must expose the destination language with valid BCP 47 `hreflang` and `lang` values, link to the corresponding localized route, and identify the current locale accessibly. These attributes complement, but do not replace, the correct root document language.
- Pointer targets must meet WCAG 2.2 SC 2.5.8: use at least 24 by 24 CSS pixels or provide sufficient unobstructed spacing under an allowed exception. Prefer larger targets for primary actions and touch-first interfaces. Verify computed target rectangles and spacing at compact mobile widths rather than judging the text size alone.
- Normal-sized text must meet a contrast ratio of at least 4.5:1 against its final composited background, including Footer copyright, secondary navigation, language controls, placeholders, disabled-looking text that remains interactive, and text rendered with opacity. Focus indicators and non-text UI states must also meet their applicable contrast requirements.
- Do not infer or introduce product behavior solely to make a static approved design keyboard-reachable. If an audit identifies a card, action bar, image, icon, or ornament that visually suggests unavailable behavior, preserve the approved implementation, document the accessibility risk, and obtain a product decision before making it interactive, removing it, or changing its meaning. Once behavior is approved, keyboard operation, focus treatment, accessible naming, and state semantics are mandatory in the same implementation.
- Accessibility automation is supporting evidence, not final proof. Where the project has an accessibility test stack, run automated checks such as axe, but also manually verify landmarks, heading order, keyboard traversal, focus visibility, skip-link behavior, document and link languages, target dimensions, meaningful alternative text, screen-reader announcements for changed interactions, and layout at 200% and 400% zoom.
- An accessibility-related change passes only when linting, type checking, and the default production build succeed; every supported locale is manually checked at representative desktop and mobile viewports; no unintended horizontal overflow, clipped focus indicator, unreachable action, or incorrect language metadata remains; and any intentionally deferred product-dependent issue is recorded rather than silently treated as resolved.

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
- Import locale-specific font modules only from the corresponding locale route tree. Shared layouts, shared components, global stylesheets, content maps, and barrel modules must not import or re-export font modules for multiple locales; runtime locale conditionals are not a substitute for statically isolated font dependencies.
- When language switching crosses between route trees with separate font or stylesheet assets, language-switcher links must use `prefetch={false}` by default so the current page does not preload another locale's heavyweight resources. Enabling cross-locale prefetch requires an explicit product or performance decision.
- When a localized route can call `notFound()`, provide its approved localized not-found experience in the same implementation. An unknown route under a supported locale must preserve that locale's document language, content, branding, and recovery links rather than falling through to an unlocalized global page.
- A multilingual routing change passes only when the production build identifies the localized content routes as static where expected and browser checks confirm, for every supported locale: the final URL, document language, localized metadata, canonical and alternate links, active language state, same-origin language switching, content parity, and absence of horizontal overflow at required desktop and mobile viewports.

## Multilingual UI content model requirements

- Keep localized UI copy outside page and component render implementations. Organize short, structured interface content in one typed module per locale and expose it through a locale-keyed content map; components should consume the selected content model instead of containing a single inline object for every language.
- Define one shared TypeScript content contract for every supported locale. The locale-keyed map and each locale module must use `satisfies` or an equivalent compile-time check so missing locales, required sections, fields, or expected item identities fail type checking instead of failing only at runtime.
- Represent localized records with named object fields such as `id`, `title`, and `description`. Do not use positional value tuples such as `[title, description]`, because adding, reordering, or omitting a value makes the meaning implicit and increases cross-locale errors.
- Give navigation items, cards, offerings, Footer links, and other repeated content stable semantic IDs that do not depend on translated text. Use those IDs for React keys, cross-locale correspondence, analytics identities, asset selection, and behavior mapping; translated labels and array positions must not serve as persistent identity.
- Map icons, images, actions, destinations, and other non-text behavior by stable content ID rather than by array index. When every ID requires a mapping, make that mapping exhaustive at compile time so adding an item cannot silently reuse, omit, or shift another item's behavior or asset.
- Keep the content shape consistent across locales unless the product explicitly approves a locale-specific difference. Model an approved difference as an explicit typed field or variant; do not hide structural differences in index-based logic or scattered locale conditionals inside rendering code.
- Keep only content fields that are rendered by the current approved UI or explicitly required by an approved product specification. If a field is not used by the current UI and has no approved requirement, delete it atomically from the shared contract and every locale module instead of preserving speculative or dead localized content; add it again when the product requirement is approved.
- Treat TypeScript checks as proof of structural parity only. They cannot prove translation quality, brand voice, cultural suitability, legal accuracy, business facts, or visual fit; those require human review and browser verification in every supported locale.
- Use typed repository-local modules as the default for short, developer-managed interface copy. JSON, MDX, a CMS, or another content pipeline may be introduced only after the editing roles, review and publishing workflow, preview needs, deployment expectations, ownership, cost, and maintenance requirements are approved; follow the dependency policy and do not install a content system solely because an audit names one.
- Adding or restructuring localized content passes only when `npm run typecheck` confirms the shared contract and browser checks confirm that every supported locale renders the expected item counts, labels, destinations, active-language state, and content order without missing content, incorrect asset/behavior associations, clipping, or horizontal overflow at required desktop and mobile viewports.

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
