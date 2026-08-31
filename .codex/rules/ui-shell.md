# UI shell rules

Read this file for Header, Footer, page templates, localized not-found/error pages, or page-measure/gutter/shell geometry work.

## Geometry

- Define page measure and responsive gutters once. Header/Footer inner content, non-Landing Hero content, page sections, panels, and shared templates derive their outer alignment from that source. Any difference needs an explicitly named approved variant.
- Separate full-bleed shell paint from bounded content geometry. Header/Footer backgrounds, borders, or shadows may span the viewport; their content stays in the centered shared inner container.
- Do not apply edge-to-edge distribution directly to an unconstrained shell when groups can drift toward viewport edges. Position compact navigation, locale controls, menus, and Footer groups against the shared inner container, not the viewport.

## Non-Landing Hero content geometry

<a id="rule-nlhc-01"></a>

- At the named `hero-copy` breakpoint (40rem / 640 CSS px) and above, non-Landing Hero copy occupies the first of two equal columns inside the shared `page-container`, aligned to its left edge.

<a id="rule-nlhc-02"></a>

- Below the named `hero-copy` breakpoint, non-Landing Hero copy uses the full shared container width in one column; use natural wrapping rather than a narrower desktop copy measure.

<a id="rule-nlhc-03"></a>

- An approved Hero eyebrow is transparent, pure text. Do not add a background, pill, padding, or image-conditioned surface to make it legible.

<a id="rule-nlhc-04"></a>

- Product and service page templates remain independent owners of their Hero typography and localized content. They may share only the named copy-geometry utility and existing site infrastructure.

<a id="rule-nlhc-05"></a>

- Keep Hero layer responsibilities separate: `NonLandingHeroMedia` owns decorative image delivery, fit, and overlay; the page template owns foreground content; the copy-geometry utility owns only grid placement and width.

## Footer

- Implement one shared site Footer on every public page, including localized not-found/error pages. Do not duplicate it in routes or templates.
- Render one complete approved information architecture everywhere. Subpages do not silently omit company, navigation, contact, or legal content.
- Keep Footer copy/navigation in the shared typed localization model with stable semantic IDs and the same approved structure per locale unless explicitly approved otherwise.
- Destinations must work from every route: Landing fragments include their localized Landing path; product/content links use canonical localized paths; actual current destinations expose `aria-current`.
- Use the shared measure/gutters and a named Footer container with centralized container-query thresholds. Preserve semantic/reading order; do not hide groups, force heights, or create document overflow.
- The caller owns final-section-to-Footer spacing using the shared section-gap token; do not bake route-neighbor assumptions into the Footer.
- Use one `footer` landmark with named navigation groups, coherent headings, visible focus, adequate targets, meaningful names, nonredundant decorative imagery, and final-composite contrast.
- Footer omissions or visual/IA variants require a named typed variant, documented product reason, and user approval; error pages and subpages are not implicit exceptions.
- After change, apply the root UI baseline and `$ui-acceptance`; verify complete localized content, destinations/current states, column transitions, alignment, separation, focus, contrast, clipping, and document overflow.
