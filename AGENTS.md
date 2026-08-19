# Repository guidelines

## Project baseline

- This repository is a Node.js 24.x, Next.js 16 App Router, React, and TypeScript project.
- Keep TypeScript strict. Prefer Server Components; add `"use client"` only when a component needs state, effects, event handlers, or browser-only APIs.
- Keep the application deployable on Vercel. Use standard Next.js build behavior and avoid machine-specific paths, persistent local filesystem state, or a custom server unless a requirement makes one necessary.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before considering a change complete.

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

Google Fonts must be prioritized when the brand design specifies typography, when Chinese/Japanese/English typography needs optimization, or when the application needs a consistent type system.

Use it as the first-choice solution when:

- Selecting the brand's heading or body font.
- Creating a consistent Chinese, Japanese, and English typographic system.
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
