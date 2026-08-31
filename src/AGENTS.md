# Source UI rules

These rules supplement the repository root `AGENTS.md`; they do not override it or create exceptions. The root router requires this file to be read in full before coding or reviewing any `src/**` change, even when the task starts at the repository root.

## UI and CSS

- Use Tailwind semantic theme tokens for interface colors, typography, spacing, radii, shadows, and named breakpoints. JSX must not contain raw hex, RGB, or RGBA colors. Reuse an existing semantic role before adding a token; state colors need explicit roles and perceptible differences.
<a id="rule-uid-02"></a>

- Do not create near-duplicate color tokens solely from eyedropper values. Default, hover, focus, active, and border colors must have explicit semantic roles and a perceptible difference where the state is intended to be visually distinguishable.
- Brand typography must use `next/font` with suitable script coverage; do not depend only on visitor-installed fonts. Keep font-family decisions centralized at locale entry points.
- Motion must communicate state, hierarchy, feedback, or understanding. Do not add decorative motion merely for polish; every nonessential animation must respect `prefers-reduced-motion`.
- Changes to colors, fonts, cards, or the Footer must run the shared UI acceptance gate and additionally verify final composited contrast, focus and interaction semantics, and relevant network requests.

## Responsive layout and page geometry

- Define a small named breakpoint set in the Tailwind theme. Do not scatter arbitrary viewport values unless a measured requirement cannot use an existing breakpoint and the exception is documented.
- Treat each breakpoint as a coordinated page/shell transition. When adding or changing one, inspect the Header, page container, cards, tables, and Footer together.

<a id="rule-resp-03"></a>

- Do not create adjacent or near-adjacent breakpoints for the same responsive state. A distinct breakpoint must represent a distinct layout decision with a documented reason.
- Changed states must remain compatible without clipping, overlap, or unintended document overflow. Align each Hero heading and its introduced body content to a deliberate shared outer line.
- Use named CSS containers and centralized container-query thresholds for reusable components placed in materially different container widths. Reserve viewport breakpoints for page/shell transitions.
- Align repeated semantic card bands with Grid and `subgrid` where supported. Do not simulate content alignment with fixed/min heights or empty blocks. Fixed heights are only for intentionally bounded media or approved scrolling regions.

Page-measure, gutters, Header/Footer, template, and not-found shell geometry are governed by `.codex/rules/ui-shell.md` when its trigger matches.

## Multilingual visual consistency

- One semantic role has one typography and spacing definition across every supported locale. Script-appropriate font families may differ, but corresponding `font-size`, `line-height`, `font-weight`, `letter-spacing`, color, spacing, and responsive behavior must remain the same unless an explicitly approved script requirement says otherwise.
- Shared components must not branch on locale merely to shrink text, tighten line height, change padding, or force translations into a box. Handle translation length through natural wrapping, suitable max widths, flexible gaps, responsive layout, and content-driven height.
- Different locales may produce different line counts and section heights. Never truncate, compress, or distort content to make screenshots geometrically identical.
- Centralize language-dependent presentation. Any additional visual exception needs a named semantic token or typed variant, documented rationale, product/design approval, and verification in every locale.

<a id="rule-mvc-07"></a>

- Apply the shared UI acceptance baseline when adding a locale or changing shared typography. For matching semantic roles, compare computed `font-size`, `line-height`, `font-weight`, `letter-spacing`, dimensions, and overflow across every supported locale.

<a id="rule-mvc-08"></a>

- During the required human review, confirm that each script remains legible, preserves the same hierarchy and emphasis, wraps naturally, and does not create hidden controls or misleading visual prominence.

<a id="rule-mvc-09"></a>

- These requirements apply to Landing pages, all current and future subpages, and every shared component. A multilingual UI change is incomplete if it fixes one page while leaving the same locale-specific presentation workaround in a reusable component or another route.

## Accessibility

<a id="rule-a11y-01"></a>

- Treat accessibility as part of the UI definition and completion criteria, not as later visual polish. New pages and materially changed components must be keyboard operable, expose meaningful assistive-technology semantics, remain usable when zoomed, and satisfy applicable WCAG 2.2 AA requirements.

<a id="rule-a11y-02"></a>

- Prefer native document landmarks and elements before ARIA. A page must have a coherent heading hierarchy and clearly identifiable `header`, navigation, one primary `main`, and `footer` where those regions exist. Keep the site Header and Footer outside the primary `main`; name repeated landmarks or sections when necessary.

<a id="rule-a11y-03"></a>

- Provide a localized skip link as the first keyboard-focusable control on pages with repeated navigation. It must remain unobtrusive when unfocused, become fully visible without clipping when focused, target a stable primary-content ID, and move keyboard focus to that content when activated.

<a id="rule-a11y-04"></a>

- Every interactive element must have a clearly visible `:focus-visible` indicator. A text-color change alone is insufficient; use a non-color-only shape change with adequate contrast, thickness, and separation. Do not remove the browser outline without an equal or stronger replacement, and verify that overflow or sticky containers do not clip it.

<a id="rule-a11y-05"></a>

- Keyboard focus order must follow visual and reading order. Every implemented action must be reachable and usable without a pointer, reverse traversal with `Shift+Tab` must work, and no component may trap focus except an intentional modal interaction with complete focus management and an accessible exit.

<a id="rule-a11y-06"></a>

- Give links and controls an accessible name that communicates purpose without depending only on nearby visual context. Decorative images use empty alternative text, decorative ornaments are hidden from assistive technology, and meaningful images receive concise alternative text appropriate to function and context.

<a id="rule-a11y-07"></a>

- Use state ARIA only when semantically true. Mark actual current destinations with the appropriate `aria-current`; do not use dead CSS classes as programmatic state or add button, link, expanded, selected, or current semantics to decorative or unapproved future behavior.

<a id="rule-a11y-08"></a>

- Localized links and language switchers must expose the destination language with valid BCP 47 `hreflang` and `lang`, link to the corresponding localized route, and identify the current locale accessibly. These attributes do not replace the correct root document language.

<a id="rule-a11y-09"></a>

- Pointer targets must meet WCAG 2.2 SC 2.5.8: at least 24 by 24 CSS pixels or an allowed unobstructed-spacing exception. Prefer larger primary and touch-first targets, and verify computed target rectangles and spacing at compact widths rather than judging text size alone.

<a id="rule-a11y-10"></a>

- Normal-sized text must meet the WCAG AA contrast ratio of at least 4.5:1 against its final composited background, including Footer copyright, secondary navigation, language controls, placeholders, disabled-looking text that remains interactive, and text rendered with opacity. For text over opacity, translucent layers, or images, calculate the final composited foreground and background. Focus indicators and non-text UI states must meet their applicable contrast requirements.

<a id="rule-a11y-11"></a>

- Do not infer or introduce product behavior solely to make a static approved design keyboard-reachable. If a card, action bar, image, icon, or ornament suggests unavailable behavior, preserve the approved implementation, document the accessibility risk, and obtain a product decision before making it interactive, removing it, or changing its meaning. Once behavior is approved, keyboard operation, focus treatment, accessible naming, and state semantics are mandatory in the same implementation.

<a id="rule-a11y-12"></a>

- As part of the shared UI acceptance baseline's required human review, manually verify landmarks, heading order, forward and reverse keyboard traversal, focus visibility, skip-link behavior, document and link languages, target dimensions, meaningful alternative text, screen-reader announcements for changed interactions, and layout at 200% and 400% zoom. Automated checks such as axe are supporting evidence only.

<a id="rule-a11y-13"></a>

- An accessibility-related change passes only when no unintended horizontal overflow, clipped focus indicator, unreachable action, or incorrect language metadata remains, and every intentionally deferred product-dependent issue is recorded.

## Landing Hero

- The Landing Hero is an approved independent implementation and must not inherit the non-Landing Hero pipeline.
- Headings, supporting copy, and actions remain fully visible in every locale and wrap naturally. Do not use `nowrap` or `overflow: hidden` as a responsive-text workaround.
- Primary/secondary CTAs are at least 48 CSS px high and 16 CSS px text, and at least 144 CSS px wide on desktop; compact layouts may use available width without reducing height/text minima.
- CTA label or destination changes are product/content decisions. Verify prominence, legibility, target size, keyboard access, and destination; do not claim conversion improvement without approved evidence.
- A Landing Hero change passes only after the root UI baseline and `$ui-acceptance` workflow confirm complete content visibility, no horizontal overflow, CTA dimensions, and containment at every required locale/viewport.
