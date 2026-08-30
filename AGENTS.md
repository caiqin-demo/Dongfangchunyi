# Repository rules

## Rule loading and precedence

- Follow user instructions and every applicable `AGENTS.md`; narrower files supplement this root file and do not create implicit exceptions.
- Before coding or reviewing anything under `src/**`, read `src/AGENTS.md` in full, even when the task starts at repository root. Nested-file auto-discovery can depend on the tool working directory, so this root rule is the fallback.
- Files under `.codex/rules/*.md` are ordinary repository rule files, not automatically loaded prompts. Explicitly read every file whose trigger below matches before acting.
- `$ui-acceptance` may be selected implicitly for matching UI verification, but no hard constraint depends on the Skill alone. Read authoritative root/src/rule files first.
- Cross-domain work loads the union of matching rules. If applicable rules or an audit recommendation conflict, stop the conflicting change, identify the rules and tradeoff, and ask for an explicit user decision; never silently weaken a rule.

## Loading sequence

- Classify the task against the router before inspecting implementation files; then read each selected rule file in full before coding or review.
- If scope expands while working, re-run routing and load the newly applicable files before continuing.

## Project baseline

- Stack: Node.js 24.x, Next.js 16 App Router, React, strict TypeScript. Prefer Server Components; add `"use client"` only for state, effects, event handlers, or browser-only APIs.
- Keep standard Next.js behavior and Vercel deployability. Do not introduce machine-specific paths, persistent local filesystem state, or a custom server without an approved requirement.
<a id="rule-pb-01"></a>

- In a new or empty repository, inspect the repository state before implementation. If the stack is absent or undecided, ask the user to confirm the runtime and version policy, framework, language, package manager, rendering architecture, deployment target, and required validation commands, then update this Project baseline before writing application code. Do not silently select or inherit an unconfirmed stack.
- Before writing or reviewing Next.js code, read the relevant local guide under `node_modules/next/dist/docs/` and heed Next.js 16 changes/deprecations.
- The generated Next.js rule block at this file's end is maintained by `next dev`; do not remove it as cleanup.

## Repository and change safety

- Work only in the user's main checkout unless explicitly told otherwise. Run servers, browser checks, visual comparisons, validations, and Git inspection there; never deliver a Codex worktree result.
<a id="rule-rep-04"></a>

- Before editing or validating, confirm that the working directory is the main checkout without writing its machine-specific absolute path into repository files. Base the final change summary and proposed commit message exclusively on the main repository diff.
- Before editing, confirm repository/branch/status and preserve all user changes in a dirty worktree. Make the narrowest complete change; do not refactor, reformat, delete, stage, or clean unrelated work.
- Do not commit or push unless the user explicitly asks. Every implementation handoff still proposes a concise English Git commit message.
- Never place personal/local information, usernames, home/temp paths, hostnames/IPs, account data, credentials, tokens, secrets, or machine identifiers in repository content. Use repository-relative paths or generic placeholders and scan the final diff.
- When work introduces generated/cache/log/local/editor/OS artifacts, classify them and add the narrowest safe `.gitignore` entry. Never ignore required source/configuration, use broad patterns that hide source, or assume ignoring untracks an existing file.

## Validation and change control

<a id="rule-pb-05"></a>

- Use phased validation. A completed change means the smallest coherent implementation increment ready to be handed off or used as the verified base for the next increment, not each file save:
  - For rules- or documentation-only work that changes no executable application behavior, run the narrowest relevant structural checks and `git diff --check`; do not run application build, lint, or typecheck unless the user or another applicable rule explicitly requires them.
  - After every completed application-code change, run the standard `npm run build`.
  - The required validation command set is the union of this root rule and every applicable routed domain rule. A domain-specific completion gate may require lint, typecheck, tests, production-browser evidence, or other validation earlier than the page-completion milestone; the page-in-progress deferral does not override it.
  - For a small change within a page that remains in progress, `npm run lint` and `npm run typecheck` may be deferred only when no applicable routed rule requires either command for that change.
  - When a page is declared complete, run `npm run build`, `npm run lint`, and `npm run typecheck`, plus every additional command required by applicable routed rules.
  - Report every result honestly. A failed standard build remains a failed gate; a diagnostic alternate build does not replace or erase it.
- Third-party audits, automated reports, and design reviews are evidence, not edit authorization. Verify each finding against current code, assess correctness/priority/scope, and identify whether confirmation is required.
<a id="rule-vc-03"></a>

- Preserve existing features, supplied assets, repeated imagery, icons, controls, and visual treatments implemented from customer requirements or accepted by the product manager. If one appears confusing or visually suboptimal during validation, record it as a low-priority discussion item and ask the user before deleting, replacing, redesigning, or changing its meaning.

<a id="rule-vc-04"></a>

- Do not assume that a visually button-like, expandable, or linked element is a false affordance. First confirm whether it is an approved design or a placeholder for later functionality. Preserve it until the user authorizes a behavior or design change, while explicitly reporting both accessibility and interaction risks.
<a id="rule-vc-06"></a>

- Distinguish a code-layer presentation defect from a source-asset or approved-design decision. Codex may correct an extra wrapper background, crop, padding, or other code-owned styling that it introduced when that styling conflicts with the accepted design, but must ask the user before generating, editing, deleting, removing, or replacing a supplied logo or image, including changing an asset from an opaque background to transparency.
- Only implement validation findings whose evidence, priority, and modification scope are accepted. Unknown product intent requires confirmation.

## Shared UI acceptance gate

- Applies to every material UI, responsive-layout, typography, localization, interaction, and accessibility change. Matching work must use `$ui-acceptance` after loading the authoritative rules.
<a id="rule-uia-02"></a>

- Test every supported locale initially at 390, 641, 700, 800, 950, and 1440 CSS px. In a new project, confirm the supported locales and known device or layout constraints with the user, explain any additional viewport checks required by the proposed layout and breakpoint system, and update this baseline after confirmation. A changed breakpoint also requires checks immediately below, at, and immediately above its threshold; add or adjust project-specific widths when product requirements or client feedback establish a different need.
- Browser acceptance inspects computed styles, element dimensions, document/component overflow, clipping, overlap, interaction state, focus, and final composited contrast. Screenshots and visual impressions alone are insufficient.
- Automated checks and computed-style parity support but do not replace human review. Completion requires human confirmation of legibility, hierarchy, natural wrapping, visual meaning, and usability; unperformed checks must be reported as limitations, not passes.

## Explicit rule router

Read all matching entries; multi-domain tasks use their union.

| Trigger | Required source |
|---|---|
| Any implementation/review under `src/**`; UI/CSS/responsive/accessibility/multilingual visual work; Landing Hero | `src/AGENTS.md`; material UI also `$ui-acceptance` |
| Header, Footer, page measure/gutters, shell geometry, page template, localized not-found/error | `.codex/rules/ui-shell.md` |
| Locale routes/layouts, localized content model, metadata, canonical/hreflang, sitemap, language switcher, locale font entry, localized not-found | `.codex/rules/localization.md` |
| Table, matrix, sticky header/column, scrollable data region | `.codex/rules/tables.md` |
| Any non-Landing Hero, supplied/page image, image conversion/derivative, LCP/performance, font-network behavior, large static page | `.codex/rules/media-performance.md` |
| Proposing, installing, removing, replacing, or materially configuring a dependency for this repository's current Node.js/Next.js/React frontend | `.codex/rules/dependencies.md` |
| A requirement matches a dependency-selection trigger: production/responsive/theme UI; brand or multiscript typography; complex forms or business controls; standard non-brand icons; transient action feedback; bespoke accessible interactive primitives; broad complex shared client state; or a user-visible asynchronous wait | `.codex/rules/dependencies.md` |
| Material UI/responsive/typography/localization/interaction/accessibility verification | `$ui-acceptance` plus every authoritative file matched above |

<a id="rule-dep-router"></a>

Load the frontend dependency rules when the requested frontend functionality matches a selection-matrix category, even if no dependency change has yet been proposed, and for dependency mutations within this repository's current Node.js/Next.js/React frontend. Do not apply this frontend selection matrix to backend dependencies. Future backend code must follow any applicable narrower `AGENTS.md` or routed backend rule; if no such authority exists, inspect the backend stack and ask for the applicable dependency policy before selecting or changing a backend dependency.

Examples of unions: localized Footer loads `src/AGENTS.md`, `ui-shell.md`, `localization.md`, and `$ui-acceptance`; a localized non-Landing Hero/LCP task additionally loads `media-performance.md`.

## Dependency gate

- For this repository's current Node.js/Next.js/React frontend, do not install optional dependencies preemptively. A concrete approved requirement must justify a new dependency; discuss it with the user before installation.
- For an approved frontend dependency change, verify Node.js, Next.js, and React compatibility, use the smallest sufficient set, preserve the lockfile change, and follow `.codex/rules/dependencies.md`. Backend dependency work is outside this frontend gate and must follow applicable narrower authority.

## Rule maintenance

- `.codex/rules/RULE-MAP.md` records the pre-migration baseline and stable rule IDs. Update the map when moving or deleting authority; every rule must retain one authoritative home and an exact trigger.
- Do not duplicate full rules across files. Root contains routing/global gates; `src/AGENTS.md` contains source-wide UI constraints; routed files contain domain authority; Skills contain execution workflows.
- Do not add `project_doc_max_bytes` as a workaround for oversized or poorly routed instructions.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
