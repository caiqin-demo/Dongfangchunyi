# Localization rules

Read this file for locale routes/layouts, localized content, metadata, canonical/hreflang, sitemap, language switching, locale font entry, or localized not-found work.

## Routes and metadata

- Keep supported locales, default locale, document-language mapping, and validation in one typed configuration. Do not duplicate locale arrays or accept unsupported values silently.
- Give every indexable locale a stable path URL. Use query parameters only for state/filter/backward compatibility, not primary locale identity.
- When locales/content are build-time known, use `generateStaticParams` and reject unsupported locale paths. Request-time rendering needs a documented reason.
- Set root `<html lang>` from the resolved locale with valid BCP 47. Nested `lang` only marks genuinely mixed-language passages.
- Localize title/description. Each indexable locale has its canonical and reciprocal hreflang entries, including intentional `x-default`.
- Sitemap entries cover every indexable locale and use the same reciprocal alternates. Canonical, alternates, sitemap, and production origin must agree.
- Read the public origin server-side from an environment variable with a documented non-secret default; use absolute origins only where required, never for ordinary internal navigation/assets.
- Language switching remains same-origin and links directly to the corresponding localized route. Mark current locale accessibly. Disable cross-locale `prefetch` by default when locale route trees have separate font/stylesheet assets.
<a id="rule-loc-09"></a>

- Redirect the unlocalized entry point to the declared default locale. Preserve backwards compatibility for accepted legacy locale URLs, but remove obsolete locale query parameters from the redirect destination so only the canonical path remains.
- Unsupported locale paths return not-found rather than default-language content.
- A route that can call `notFound()` supplies an approved localized not-found experience with correct language, branding, content, and recovery links.

<a id="rule-loc-15"></a>

- A multilingual routing change passes only when the production build identifies localized content routes as static where expected; the final URL, document language, localized metadata, canonical and alternate links, active language state, same-origin language switching, and content parity are correct for every supported locale; and the shared UI acceptance baseline passes at the required locale and viewport checks.

## Locale font entry

<a id="rule-loc-11"></a>

- Attach only the current locale's font variables and script coverage to its document. Avoid unnecessary font preloads and verify in a real browser that each locale resolves to the intended families without eagerly requesting unrelated language fonts.
- Import locale-specific font modules only from the corresponding locale route tree; shared layouts, components, stylesheets, content maps, and barrels must not import or re-export multiple locale font modules.

## Typed content model

- Keep short developer-managed localized copy in one typed module per locale behind a locale-keyed map; rendering components consume the selected model.
<a id="rule-cnt-02"></a>

- Define one shared TypeScript content contract for every supported locale. The contract and locale-keyed map must encode the approved locale, required section, required field, and expected repeated-item identity sets so missing or extra locales, sections, fields, or item identities fail type checking. Each locale module must use `satisfies` or an equivalent compile-time completeness check. This constrains approved structure and item identity, not every translated value or arbitrary business data.
- Give repeated content stable semantic IDs independent of translations. Use them for keys, correspondence, analytics, assets, destinations, and behavior; exhaustive behavior mappings are required where every ID needs one.
- Keep locale structures equivalent unless an approved difference is an explicit typed field/variant. Remove unrendered, unrequired fields atomically from the contract and every locale.
- Type checking proves structure only, not translation quality, brand voice, cultural/legal accuracy, business facts, or visual fit; those require human and browser review.
- JSON/MDX/CMS or another pipeline requires approval of editing ownership, review/publishing workflow, preview/deployment needs, cost, and maintenance. Do not install one merely because an audit names it.
- Completion requires typecheck plus per-locale counts, labels, destinations, active state, order, asset/behavior mapping, and root UI acceptance.
