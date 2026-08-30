# Table and matrix rules

Read this file for tables, matrices, sticky headers/columns, or scrollable data regions.

- Preserve native `table`, `thead`, `tbody`, `tr`, `th`, and `td` display semantics. Do not convert them to flex/block for layout or scrolling.
- Associate row/column headers with native structure and `scope` where possible. Add ARIA only when native semantics are insufficient; localize accessible meaning for visual-only symbols.
- Use CSS `position: sticky` first. Before JavaScript compensation, inspect the scroll owner, overflow ancestors, containment, stacking contexts, and table structure; add JS only after documented browser evidence shows native sticky cannot satisfy the requirement.
- Keep necessary compensation in the smallest component, document the browser limitation, and remove Client Component boundaries when browser state/effects/handlers are no longer needed.
- Do not combine unrelated logical records in one row for a two-column visual. Use semantically complete tables/wrappers with complete captions/header relationships and expose one responsive representation to assistive technology.
- Confine horizontal scrolling to a named table/panel region. The document and unrelated content must not scroll horizontally with it.
<a id="rule-tab-07"></a>

- Make an intentionally scrollable data region keyboard-focusable, give it a localized accessible name or description, and provide a visible focus indicator that is not clipped by the overflow container.
- Verify after horizontal and vertical scrolling: sticky behavior, header association, reading order, focus visibility, overlap, and root UI baseline.
- For large generated tables measure rendered DOM nodes and raw generated HTML as well as compressed transfer size. Compression does not remove parsing, memory, accessibility-tree, or interaction cost.
- Prefer native header scope over repeated cell `headers` strings or duplicate screen-reader text. Do not render multiple complete hidden table copies at one breakpoint.
- If size remains unacceptable, record search/filter/pagination/virtualization/per-product routes as an information-architecture decision requiring product approval; do not hide the problem with smaller type or clipped overflow.
