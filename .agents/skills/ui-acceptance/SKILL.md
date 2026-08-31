---
name: ui-acceptance
description: Verify material UI, responsive layout, typography, localization, interaction, or accessibility changes in a real browser against repository acceptance requirements.
---

# UI acceptance

Use this skill after reading the root `AGENTS.md`, `src/AGENTS.md`, and every routed rule file relevant to the changed surface. Those files remain authoritative; this skill is the execution checklist.

## Browser matrix

- Test every supported locale at 390, 641, 700, 800, 950, and 1440 CSS px using the build or server state required by the authoritative rules for the current change.
- For every changed breakpoint, also test immediately below, at, and immediately above the threshold. Add product-required widths when applicable.
- Inspect computed styles and bounding boxes, not screenshots alone: typography, target dimensions, container alignment, document/component overflow, clipping, overlap, sticky/positioned state, and final composited contrast.
- For high-risk text covered by `A11Y-10`, record the computed foreground color, final composited background, and measured contrast ratio. Secondary, placeholder, low-opacity, and disabled-looking-but-interactive text receive no measurement exemption.

## Interaction and accessibility

- Traverse forward and backward by keyboard. Verify focus order, activation, state ARIA, visible unclipped focus, target size/spacing, and absence of traps.
- Activate the localized skip link and confirm it becomes visible, targets one stable primary `main`, and transfers focus.
- Check landmarks, heading hierarchy, accessible names, current states, decorative/meaningful image treatment, root/link language, and locale switching.
- For every changed interaction, use an actual screen reader to verify announcements for status, state, validation, loading, and result feedback as applicable; record the assistive technology and browser used. Source or ARIA inspection alone is not a pass.
- Test 200% and 400% reflow. Confirm natural wrapping, no document overflow, no hidden action, and no misleading hierarchy.

## Routed media checks

Classify the changed surface by the authoritative trigger; loading `.codex/rules/media-performance.md` alone does not activate every workflow below.

### Performance evidence

For performance, LCP, font-network, or large-static-page work, collect browser evidence from the production build under the clean-profile, cache, throttling, route, and viewport conditions required by the authoritative media-performance rules. Record the baseline, result, confirmed LCP element when applicable, and measurement limitations.

### Non-Landing Hero

For a non-Landing Hero implementation, change, or review, follow the production evidence required by the authoritative non-Landing Hero and performance rules and additionally test Chrome 500% zoom. Record complete layering, crop/focal behavior, contrast, responsive candidate selection, loading behavior, and every limitation.

### Ordinary image assets

For an ordinary supplied image, page-image addition, format decision, conversion, or derivative that is not a non-Landing Hero and does not independently trigger performance acceptance, use the general viewport matrix and 200%/400% reflow workflow plus the authoritative image-asset checks. Do not require production-browser performance evidence or Chrome 500% solely because the media-performance file was routed.

## Human review

Review each locale for legibility, hierarchy, visual meaning, natural wrapping, and usability. Automated parity and screenshots are supporting evidence, not the pass decision.

## Evidence report

Report:

- build mode, route, locale, viewport/zoom, cache/profile assumptions;
- computed typography and element/target dimensions for changed semantic roles;
- overflow, clipping, overlap, focus, keyboard, landmarks, headings, language, and interaction results;
- relevant media/network/LCP evidence when the routed media-performance rules apply;
- failures, measurement limitations, and items requiring human/product approval.

Do not claim a pass for checks that were not run or were inferred only from source code or visual prominence.
