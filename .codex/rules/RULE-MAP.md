# AGENTS.md rule migration map

## Baseline

- Source: root `AGENTS.md` before this migration.
- SHA-256: `556f91202f87b50457dc059ebad6ba9588691c422c9918cf53ff2a3e6750fc33`
- Size: 332 lines; 51,159 bytes.
- Line references below are immutable references to that baseline.
- Grouped ranges are migration coverage summaries, not proof of one-to-one semantic preservation. Only an individually listed ID with a unique target anchor is mechanically verified.
- Each repaired or newly verified obligation must map to one stable target anchor and one exact trigger. Unverified grouped ranges remain pending verification and must not be described as complete.
- An approved behavior change must be recorded explicitly and must not be represented as one-to-one preservation.
- Authority rule: every baseline requirement has exactly one authoritative target. `$ui-acceptance` operationalizes UI verification but does not replace hard constraints.

## Mapping

| Stable IDs | Baseline location and brief | Single authoritative target | Exact trigger | Kind | Verification |
|---|---|---|---|---|---|
| PB-01 | L5 new/empty repository stack discovery | `AGENTS.md#rule-pb-01` | new or empty repository with absent or undecided stack | hard | verified |
| PB-02..PB-04, PB-06 | L6 runtime baseline; L7 strict TS/Server Components; L8 Vercel portability; L10 handoff message | root `AGENTS.md` | repository work | hard | pending one-to-one audit |
| PB-05 | L9 original all-command gate; user-approved phased command-union replacement | `AGENTS.md#rule-pb-05` | completed rules/docs increment or coherent application-code increment; union with applicable domain gates | hard | approved behavior change |
| UIA-01, UIA-03..UIA-04 | L14 material UI applicability; L16 computed-layout evidence; L17 human-review gate | root `AGENTS.md` | material UI/responsive/typography/localization/interaction/accessibility change | hard | pending one-to-one audit |
| UIA-02 | L15 locale viewport matrix and breakpoint-adjacent checks | `AGENTS.md#rule-uia-02` | material UI/responsive/typography/localization/interaction/accessibility change | hard | verified |
| LH-01..LH-06 | L21 Landing Hero independence; L22 natural wrapping; L23 no clipping workaround; L24 CTA dimensions; L25 CTA product decisions; L26 acceptance gate | `src/AGENTS.md` | Landing Hero implementation or review | hard | pending one-to-one audit |
| VC-01..VC-02, VC-05, VC-07 | L30 audit is evidence; L31 conflict stop; L34 preserve repeated imagery; L36 unknown intent requires confirmation | root `AGENTS.md` | audit, validation, design review, or proposed remediation | hard | pending one-to-one audit |
| VC-03 | L32 preserve accepted features/assets and low-priority discussion item | `AGENTS.md#rule-vc-03` | audit/validation/design review of accepted element | hard | verified |
| VC-04 | L33 preserve unknown affordance and report accessibility/interaction risks | `AGENTS.md#rule-vc-04` | apparent affordance/future behavior | hard | verified |
| VC-06 | L35 code-owned presentation fixes versus authorization for supplied logo/image changes | `AGENTS.md#rule-vc-06` | supplied logo/image remediation or code-versus-asset presentation decision | hard | verified |
| UID-01, UID-03 | L40 semantic colors; L42 final-composite contrast | `src/AGENTS.md` | UI color/style work under `src/**` | hard | pending one-to-one audit |
| UID-02 | L41 no eyedropper-only near-duplicate state tokens | `src/AGENTS.md#rule-uid-02` | color-token/UI-state color creation/change | hard | verified |
| UID-04 | L43 self-host brand typography with `next/font` and script coverage | `src/AGENTS.md` | font or typography implementation under `src/**` | hard | pending one-to-one audit |
| UID-05 | L44 CJK weights/preload/network verification | `.codex/rules/media-performance.md` | CJK font addition/change or font performance work | hard | pending one-to-one audit |
| UID-06..UID-07 | L45 purposeful/reduced motion; L46 UI change verification extras | `src/AGENTS.md` | motion; color/font/card/Footer change | hard | pending one-to-one audit |
| RESP-01..RESP-02, RESP-04..RESP-05 | L50 semantic breakpoints; L51 coordinated transitions; L53 compatible states; L54 Hero/body alignment | `src/AGENTS.md` | responsive/layout work under `src/**` | hard | pending one-to-one audit |
| RESP-03 | L52 distinct breakpoint requires distinct documented layout decision | `src/AGENTS.md#rule-resp-03` | breakpoint addition/change | hard | verified |
| RESP-06..RESP-09 | L55 page measure source; L56 full-bleed vs content; L57 bounded distribution; L58 compact shell anchoring | `.codex/rules/ui-shell.md` | Header/Footer/template/not-found/page-shell geometry | hard | pending one-to-one audit |
| RESP-10..RESP-12 | L59 container queries; L60 subgrid card bands; L61 fixed-height limits | `src/AGENTS.md` | reusable responsive component/card/content layout | hard | pending one-to-one audit |
| FOOT-01..FOOT-10 | L65 shared Footer; L66 complete IA; L67 typed localized model; L68 route-safe destinations/current state; L69 shell geometry; L70 Footer container queries; L71 caller-owned separation; L72 landmark/a11y; L73 variants need approval; L74 acceptance | `.codex/rules/ui-shell.md` | Footer, public template, localized not-found/error, or Footer caller | hard | pending one-to-one audit |
| TAB-01..TAB-06, TAB-08..TAB-11 | L78 native table semantics; L79 header association; L80 sticky-first; L81 scoped JS compensation; L82 no unrelated records per row; L83 confined scrolling; L85 scroll acceptance; L86 DOM/HTML measurement; L87 native scope/no hidden copies; L88 IA escalation | `.codex/rules/tables.md` | table, matrix, sticky header/column, or scrollable data region | hard | pending one-to-one audit |
| TAB-07 | L84 localized accessible naming and focus for scroller | `.codex/rules/tables.md#rule-tab-07` | intentionally scrollable data region | hard | verified |
| PERF-01..PERF-06, PERF-08 | L92 production clean-profile testing; L93 measured LCP; L94 initial-HTML image discovery; L95 evidence-based priority; L96 LCP timing evidence; L97 faithful responsive derivatives; L99 static HTML/DOM size | `.codex/rules/media-performance.md` | performance, LCP, font network, or large static page work | hard | pending one-to-one audit |
| PERF-07 | L98 current-locale required families/subsets/weights in production critical path | `.codex/rules/media-performance.md#rule-perf-07` | locale font-network/font-performance | hard | verified |
| PERF-09 | L100 controlled comparison and recorded baseline/result | `.codex/rules/media-performance.md#rule-perf-09` | performance comparison | hard | verified |
| NLH-01..NLH-09 | L104 scope excludes Landing; L105 shared pipeline; L106 Next optimization; L107 concern separation; L108 approved default/exception; L109 fidelity exception; L110 continuous layers; L111 priority evidence; L112 acceptance evidence | `.codex/rules/media-performance.md` | any non-Landing Hero implementation/change/review | hard | pending one-to-one audit |
| NLHC-01 | Post-migration non-Landing Hero copy occupies the left half of `page-container` at 640px and above | `.codex/rules/ui-shell.md#rule-nlhc-01` | non-Landing Hero template geometry at named `hero-copy` breakpoint (640px) or above | hard | verified |
| NLHC-02 | Post-migration non-Landing Hero compact copy uses full shared container width below 640px | `.codex/rules/ui-shell.md#rule-nlhc-02` | non-Landing Hero template geometry below named `hero-copy` breakpoint (640px) | hard | verified |
| NLHC-03 | Post-migration eyebrow remains transparent pure text | `.codex/rules/ui-shell.md#rule-nlhc-03` | non-Landing Hero eyebrow implementation or review | hard | verified |
| NLHC-04 | Post-migration product/service Hero template ownership remains independent | `.codex/rules/ui-shell.md#rule-nlhc-04` | product or service Hero template change | hard | verified |
| NLHC-05 | Post-migration Hero media, foreground, and copy-geometry layer responsibility | `.codex/rules/ui-shell.md#rule-nlhc-05` | non-Landing Hero media or foreground geometry change | hard | verified |
| IMG-01..IMG-02, IMG-04, IMG-06 | L116 image evaluation; L117 format choice; L119 scientific fidelity; L121 image acceptance | `.codex/rules/media-performance.md` | supplied image, image conversion, derivative, or page-image change | hard | pending one-to-one audit |
| IMG-03 | L118 exact preservation of supplied brand assets | `.codex/rules/media-performance.md#rule-img-03` | supplied brand-identity asset | hard | verified |
| IMG-05 | L120 authorized original and derivative integrity | `.codex/rules/media-performance.md#rule-img-05` | approved optimized image derivative | hard | verified |
| MVC-01..MVC-06 | L125 semantic parity; L126 script font without hierarchy drift; L127 no locale presentation branches; L128 natural wrapping; L129 different line counts allowed; L130 centralized exceptions | `src/AGENTS.md` | multilingual UI implementation/review under `src/**` | hard | pending one-to-one audit |
| MVC-07 | L131 computed cross-locale parity | `src/AGENTS.md#rule-mvc-07` | locale addition or shared typography change | hard | verified |
| MVC-08 | L132 human script review | `src/AGENTS.md#rule-mvc-08` | multilingual UI human review | hard | verified |
| MVC-09 | L133 all-page/shared-component scope and no single-page workaround | `src/AGENTS.md#rule-mvc-09` | multilingual UI implementation/review under `src/**` | hard | verified |
| A11Y-01 | L137 accessibility as UI completion criterion | `src/AGENTS.md#rule-a11y-01` | new page or materially changed component | hard | verified |
| A11Y-02 | L138 native landmarks and heading structure | `src/AGENTS.md#rule-a11y-02` | new page or material structural UI change | hard | verified |
| A11Y-03 | L139 localized skip-link behavior | `src/AGENTS.md#rule-a11y-03` | page with repeated navigation | hard | verified |
| A11Y-04 | L140 visible non-color-only focus indicator | `src/AGENTS.md#rule-a11y-04` | interactive element implementation/review | hard | verified |
| A11Y-05 | L141 keyboard order, operation, reverse traversal, and traps | `src/AGENTS.md#rule-a11y-05` | interaction implementation/review | hard | verified |
| A11Y-06 | L142 accessible names and image treatment | `src/AGENTS.md#rule-a11y-06` | link, control, image, or ornament implementation/review | hard | verified |
| A11Y-07 | L143 truthful state ARIA | `src/AGENTS.md#rule-a11y-07` | current or stateful UI semantics | hard | verified |
| A11Y-08 | L144 localized link and language-switcher language | `src/AGENTS.md#rule-a11y-08` | localized link or language switcher | hard | verified |
| A11Y-09 | L145 pointer target size and compact-width measurement | `src/AGENTS.md#rule-a11y-09` | pointer interaction implementation/review | hard | verified |
| A11Y-10 | L146 4.5:1 plus high-risk text enumeration | `src/AGENTS.md#rule-a11y-10` | UI contrast implementation/review under `src/**` | hard | verified |
| A11Y-11 | L147 product behavior boundary | `src/AGENTS.md#rule-a11y-11` | apparent affordance or proposed interaction change under `src/**` | hard | verified |
| A11Y-12 | L148 mandatory manual verification checklist | `src/AGENTS.md#rule-a11y-12` (operationalized by `$ui-acceptance`) | new page or material component/UI/a11y verification | hard | verified |
| A11Y-13 | L149 accessibility acceptance gate | `src/AGENTS.md#rule-a11y-13` | accessibility-related change | hard | verified |
| LOC-01..LOC-08, LOC-10, LOC-12..LOC-14 | L153 typed locale config; L154 path locale URLs; L155 static generation; L156 root language; L157 localized metadata/alternates; L158 sitemap parity; L159 site origin; L160 same-origin switches; L162 unsupported not-found; L164 isolated font imports; L165 cross-locale prefetch off; L166 localized not-found | `.codex/rules/localization.md` | locale route, layout, metadata, sitemap, switcher, font entry, or localized not-found | hard | pending one-to-one audit |
| LOC-09 | L161 default redirect and legacy URL compatibility | `.codex/rules/localization.md#rule-loc-09` | unlocalized entry or accepted legacy locale URL | hard | verified |
| LOC-11 | L163 current locale font variables/script, intended family resolution, preload isolation | `.codex/rules/localization.md#rule-loc-11` | locale font entry/document-font change | hard | verified |
| LOC-15 | L167 production multilingual routing acceptance gate | `.codex/rules/localization.md#rule-loc-15` | multilingual routing change | hard | verified |
| CNT-01, CNT-03..CNT-10 | L171 localized copy modules; L173 named records; L174 stable IDs; L175 exhaustive behavior maps; L176 structural parity; L177 no dead fields; L178 TS limits/human review; L179 repository modules/default and CMS approval; L180 content acceptance | `.codex/rules/localization.md` | localized content model or repeated localized UI content | hard | pending one-to-one audit |
| CNT-02 | L172 shared typed contract with compile-time locale/section/field/item-identity completeness | `.codex/rules/localization.md#rule-cnt-02` | localized content contract or repeated localized item identity change | hard | verified |
| REP-01..REP-03 | L184 main checkout; L185 validate there; L186 no worktree deliverable | root `AGENTS.md` | every repository task | hard | pending one-to-one audit |
| REP-04 | L187 main-checkout confirmation and main-diff-only handoff | `AGENTS.md#rule-rep-04` | repository edit/validation/handoff | hard | verified |
| PRIV-01..PRIV-04 | L191 no personal/local info; L192 prohibited data; L193 generic paths; L194 final diff scan | root `AGENTS.md` | every edit and handoff | hard | pending one-to-one audit |
| IGN-01..IGN-03 | L198 narrow ignore for generated artifacts; L199 classify source/config; L200 no broad/tracked misconception | root `AGENTS.md` | generated/cache/local artifact appears | hard | pending one-to-one audit |
| DEP-00 | L204 no preinstall; requirement, compatibility, lockfile, minimum set | root `AGENTS.md` | any dependency proposal/install/change | hard | pending one-to-one audit |
| DEP-ROUTER | Current explicit frontend dependency-capability and mutation routing | `AGENTS.md#rule-dep-router` | current Node.js/Next.js/React frontend selection or mutation; backend excluded pending narrower authority | routing | verified |
| DEP-SEL-TW | Tailwind selection anchor | `.codex/rules/dependencies.md#rule-dep-tw` | production/responsive/theme UI capability | routing | verified |
| DEP-SEL-GF | Google Fonts selection anchor | `.codex/rules/dependencies.md#rule-dep-gf` | brand or multiscript typography capability | routing | verified |
| DEP-SEL-MUI | Material UI selection anchor | `.codex/rules/dependencies.md#rule-dep-mui` | complex forms or business controls | routing | verified |
| DEP-SEL-ICONS | React Icons selection anchor | `.codex/rules/dependencies.md#rule-dep-icons` | standard non-brand icons | routing | verified |
| DEP-SEL-TOAST | React Hot Toast selection anchor | `.codex/rules/dependencies.md#rule-dep-toast` | transient action feedback | routing | verified |
| DEP-SEL-HEADLESS-UI | Headless UI selection anchor | `.codex/rules/dependencies.md#rule-dep-headless-ui` | bespoke accessible interactive primitive | routing | verified |
| DEP-SEL-REDUX | Redux selection anchor | `.codex/rules/dependencies.md#rule-dep-redux` | broad complex shared client state | routing | verified |
| DEP-SEL-SPINNER | React Loader Spinner selection anchor | `.codex/rules/dependencies.md#rule-dep-spinner` | user-visible asynchronous wait | routing | verified |
| DEP-TW-00..DEP-TW-07 | L208 Tailwind priority; L210 matrix intro; L212 production UI; L213 responsive; L214 theme roles; L215 states; L216 multi-section/reuse; L217 theme tokens | `.codex/rules/dependencies.md` | UI/CSS/responsive implementation or Tailwind dependency work | execution | pending one-to-one audit |
| DEP-TW-08 | L219 current Tailwind integration and default devDependencies | `.codex/rules/dependencies.md#rule-dep-tw-08` | approved Tailwind installation/integration | execution | verified |
| DEP-GF-00..DEP-GF-05 | L223 Google Fonts priority; L225 matrix intro; L227 brand/body fonts; L228 multiscript; L229 loading shift; L230 theme variables | `.codex/rules/dependencies.md` | typography/font-source decision | execution | pending one-to-one audit |
| DEP-GF-06 | L232 official Google Fonts catalog and next/font source/fallback workflow | `.codex/rules/dependencies.md#rule-dep-gf-06` | frontend font-family selection or coverage-source decision | execution | verified |
| DEP-MUI-00..DEP-MUI-06 | L236 MUI priority; L238 matrix intro; L240 complex forms; L241 complex controls; L242 admin/portal; L243 complete system; L244 speed/accessibility | `.codex/rules/dependencies.md` | component-system or complex business-control decision | execution | pending one-to-one audit |
| DEP-MUI-07 | L246 current MUI Next App Router integration and package/scope boundary | `.codex/rules/dependencies.md#rule-dep-mui-07` | approved MUI use/Next App Router integration | execution | verified |
| DEP-ICO-00..DEP-ICO-07 | L250 React Icons priority; L252 matrix intro; L254 nav icons; L255 contact icons; L256 action icons; L257 card icons; L258 social icons; L260 import policy | `.codex/rules/dependencies.md` | standard non-brand icon requirement | execution | pending one-to-one audit |
| DEP-TOAST-00..DEP-TOAST-07 | L264 toast priority; L266 matrix intro; L268 submission; L269 copy; L270 upload/progress; L271 action result; L272 Promise state; L274 persistent-validation boundary | `.codex/rules/dependencies.md` | transient action feedback requirement | execution | pending one-to-one audit |
| DEP-HUI-00..DEP-HUI-09 | L278 Headless UI priority; L280 matrix intro; L282 mobile nav; L283 modal; L284 menu/popover; L285 listbox/combobox; L286 disclosure; L287 tab/switch/radio; L288 focus-rich interaction; L290 Tailwind/MUI split | `.codex/rules/dependencies.md` | bespoke accessible interactive primitive | execution | pending one-to-one audit |
| DEP-RDX-00..DEP-RDX-07 | L294 Redux Toolkit threshold; L296 matrix intro; L298 broad shared state; L299 frequent changes; L300 complex transitions; L301 actions/history; L302 DevTools; L303 cart/filter/workspace | `.codex/rules/dependencies.md` | global client-state architecture decision | execution | pending one-to-one audit |
| DEP-RDX-08 | L305 current official React Redux guidance, Redux Toolkit pairing, and provider/ownership boundary | `.codex/rules/dependencies.md#rule-dep-rdx-08` | approved frontend Redux implementation/configuration/review | execution | verified |
| DEP-SPIN-00..DEP-SPIN-06 | L309 spinner priority; L311 matrix intro; L313 form wait; L314 data wait; L315 upload wait; L316 API wait; L318 Suspense/action spinner/a11y | `.codex/rules/dependencies.md` | user-visible asynchronous wait | execution | pending one-to-one audit |
| DEP-FINAL-01..DEP-FINAL-02 | L320 preferred first-choice technologies; L322 discuss inability before substitution | `.codex/rules/dependencies.md` | any preferred-technology substitution | hard | pending one-to-one audit |
| NX-01..NX-02 | L328 read local Next 16 docs before code; L330 generated block maintenance | root `AGENTS.md` | Next.js code implementation/review; `next dev` rule-block diff | hard | pending one-to-one audit |

## Section coverage

This table records intended migration coverage. It does not claim complete one-to-one preservation for grouped ranges. One-to-one preservation is established only for individually anchored obligations after bidirectional semantic verification.
