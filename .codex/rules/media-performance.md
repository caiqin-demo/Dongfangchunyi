# Media and performance rules

Read this file for Hero/image work, image conversion or derivatives, fonts/network behavior, LCP/performance work, or large statically generated pages.

## Performance evidence

- Test production builds in a clean/incognito browser profile with representative mobile/desktop throttling. Development mode, extensions, warm caches, service workers, and retained IndexedDB are diagnostic variables, not acceptance evidence.
- Identify LCP with Lighthouse or a browser Performance trace for the tested route/viewport; never infer it from visual prominence or source order.
- A confirmed or strongly expected above-fold image LCP must be discoverable in initial HTML via `next/image`, `<img>`, or equivalent responsive markup, with correct intrinsic geometry and accurate `sizes`.
- Use eager/preload/high fetch priority only for resources proven critical at the tested route/viewport. Unused-preload warnings require re-evaluating the hint or route ownership.
- After changing an LCP candidate, record discovery time, load delay/duration, decoded format, transferred bytes, render delay, and measured LCP element/result. Smaller source bytes alone do not prove improvement.
- For CJK fonts, include only the weights the interface actually uses and disable unnecessary preloading by default. After adding or changing a font, inspect production build assets and real browser network requests to confirm unused font files are not fetched eagerly.
<a id="rule-perf-07"></a>

- Do not assume that a runtime locale branch excludes another locale's font assets from the critical path. Inspect production CSS and real browser requests, and structure locale entry points and font modules so only the current locale's required families, subsets, and weights are loaded.
- For approved responsive derivatives of fidelity-sensitive images, preserve the original, generate derivatives at build time without changing scientific meaning, and use `picture`, `srcset`, or `next/image` with candidate widths close to actual rendered sizes. Compare labels, boundaries, intensities, annotations, transparency, and crop against the original.
- For large static pages measure raw HTML, compressed transfer, and rendered DOM nodes.

<a id="rule-perf-09"></a>

- Compare performance changes under the same build mode, route, viewport, throttling, cache state, and browser profile. Record the baseline, result, confirmed LCP element, and any measurement limitations; do not trade away semantics, accessibility, localization, or image fidelity for a higher synthetic score.

## Shared non-Landing Hero pipeline

- Applies to every Hero except the independent Landing Hero.
- Preserve the authorized source image unchanged, statically import it, and render through the shared page template as decorative `next/image` with `fill`, `sizes="100vw"`, shared `object-cover object-center`, and full-section overlay.
- Let Next.js create responsive optimized output. Do not manually convert an ordinary Hero, disable optimization, or bypass candidates without a verified fidelity/transfer/cache/compatibility problem.
- Keep visual treatment, fitting, optimization, and loading priority independent. Each nondefault behavior needs a named typed option and evidence.
- Default crop, focal position, overlay, foreground layering, and contrast are accepted. Add the smallest named exception only after browser evidence at a required locale/viewport/zoom identifies a problem and the user approves it.
- An approved fidelity/composited exception preserves the original and uses a distinct derivative. Lossless WebP with `unoptimized` requires pixel/visual fidelity proof, byte justification, and immutable hashed caching; it does not become the default.
- At reflow/zoom, image and overlay remain continuous across the entire Hero. Do not expose section background, image boundaries, hard gradient seams, or uncovered contrast areas. Focal-object compact compositions require an approved named visual exception.
- Loading priority follows measured performance evidence, not visual variant or format.
- Acceptance covers every locale plus root UI baseline, 400% reflow and Chrome 500% zoom, complete layering, computed fit/position, crop/focal visibility, composited contrast, initial discovery, candidate selection, decoded format, bytes, cache, loading priority, and measured production LCP.

## Image assets

- Before choosing format, inspect purpose, source format, transparency, fidelity, dimensions, animation, scientific/brand significance, and authorization.
- Prefer WebP for ordinary imagery only when browser support, meaningful byte reduction, and visual comparison support it. Preserve SVG for vectors and another format when materially better.
<a id="rule-img-03"></a>

- Preserve user-supplied logos, wordmarks, trademarks, certification marks, and other brand-identity assets in their original file and original format. Do not convert, re-encode, trace, redraw, crop, recolor, remove their background, add transparency, or otherwise alter them unless the user explicitly approves that exact transformation.
- Scientific figures, experimental images, evidence screenshots, charts, and meaning-bearing diagrams are fidelity-sensitive. Do not use lossy conversion/editing that could alter labels, boundaries, intensities, measurements, annotations, or meaning; ask before an unproven derivative.
<a id="rule-img-05"></a>

- Keep an authorized original source asset unchanged when creating an approved optimized derivative. Give derivatives distinct repository-relative names, document which version the page uses when that choice is not self-evident, and never overwrite the only original with a converted file.
- Verify dimensions, aspect ratio, transparency, responsive rendering, crop, alt text, decoded type, requests, and visual fidelity in required locale/viewports. Byte reduction alone is insufficient.
