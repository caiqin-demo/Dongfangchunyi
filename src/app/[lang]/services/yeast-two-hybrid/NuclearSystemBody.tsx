import { LuCircleDashed } from "react-icons/lu";

import type { NuclearSystem } from "@/content/yeast-two-hybrid/types";

type NuclearSystemBodyProps = Readonly<{
  system: NuclearSystem;
}>;

export function NuclearSystemBody({ system }: NuclearSystemBodyProps) {
  const sampleStandardsTitleId = `yeast-two-hybrid-${system.id}-sample-standards-title`;
  const catalogTitleId = `yeast-two-hybrid-${system.id}-catalog-title`;

  return (
    <>
      <div className="grid grid-cols-2 items-start gap-12 max-page:grid-cols-1">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-control bg-accent/15 text-2xl text-accent" aria-hidden="true">
              <LuCircleDashed />
            </span>
            <div>
              <h2 className="m-0 text-service-current-title" id="service-overview-title">{system.label}</h2>
              <p className="mt-1 mb-0 text-service-current-subtitle text-accent">{system.subtitle}</p>
            </div>
          </div>

          <p className="mt-5 mb-0 text-service-body text-ink-muted">{system.body}</p>
        </div>

        <section aria-labelledby={sampleStandardsTitleId}>
          <h3 className="m-0 text-service-section-title text-ink" id={sampleStandardsTitleId}>{system.sampleStandardsTitle}</h3>
          <ul className="mt-5 grid list-none grid-cols-2 gap-4 p-0 max-compact:grid-cols-1">
            {system.sampleStandards.map((standard) => (
              <li className="rounded-control border border-line bg-white p-5" key={standard.id}>
                <p className="m-0 text-service-card-title text-ink">{standard.title}</p>
                <p className="mt-2 mb-0 text-service-card-body text-ink-muted">{standard.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12 rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media" aria-labelledby={catalogTitleId}>
        <h3 className="m-0 text-service-current-title text-ink" id={catalogTitleId} lang="en">{system.cdnaLibrary.title}</h3>
        <div className="mt-6 grid grid-cols-4 gap-6 max-page:grid-cols-2 max-compact:grid-cols-1">
          {system.cdnaLibrary.categories.map((category) => (
            <section className="min-w-0 border-l border-line pl-6 first:border-l-0 first:pl-0 max-page:odd:border-l-0 max-page:odd:pl-0 max-compact:border-l-0 max-compact:pl-0" aria-labelledby={`yeast-two-hybrid-${system.id}-${category.id}-title`} key={category.id}>
              <h4 className="m-0 text-service-card-title text-ink" id={`yeast-two-hybrid-${system.id}-${category.id}-title`} lang="en">{category.title}</h4>
              <ul className="mt-4 list-none space-y-2 p-0 text-service-card-body text-ink-muted">
                {category.entries.map((entry) => (
                  <li className="break-words" key={entry.id}>{entry.label}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
