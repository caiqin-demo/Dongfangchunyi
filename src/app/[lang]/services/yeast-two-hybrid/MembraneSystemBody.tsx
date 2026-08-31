import { LuCheck, LuCircleDashed } from "react-icons/lu";

import type { MembraneSystem } from "@/content/yeast-two-hybrid/types";

type MembraneSystemBodyProps = Readonly<{
  system: MembraneSystem;
}>;

export function MembraneSystemBody({ system }: MembraneSystemBodyProps) {
  const consultationTitleId = `yeast-two-hybrid-${system.id}-consultation-title`;

  return (
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

        <h3 className="mt-10 mb-5 text-service-section-title text-ink">{system.featureTitle}</h3>
        <ul className="grid list-none grid-cols-2 gap-4 p-0 max-compact:grid-cols-1">
          {system.features.map((feature) => (
            <li className="rounded-control border border-line bg-white p-5" key={feature.id}>
              <div className="flex items-center gap-3">
                <LuCircleDashed className="shrink-0 text-xl text-accent" aria-hidden="true" />
                <p className="m-0 text-service-card-title text-ink">{feature.title}</p>
              </div>
              <p className="mt-2 mb-0 whitespace-pre-line text-service-card-body text-ink-muted">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <section className="rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media" aria-labelledby="service-specifications-title">
          <h3 className="m-0 text-service-section-title text-ink" id="service-specifications-title">{system.specificationTitle}</h3>
          <ul className="mt-5 grid list-none gap-4 p-0">
            {system.specifications.map((item) => (
              <li className="flex items-center gap-3 text-service-body text-ink-muted" key={item.id}>
                <LuCheck className="shrink-0 text-xl text-accent" aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-product-card border border-line bg-white p-[clamp(1rem,2.5vw,2rem)] shadow-media" aria-labelledby={consultationTitleId}>
          <h3 className="m-0 text-service-section-title text-ink" id={consultationTitleId}>{system.consultation.title}</h3>
          <ul className="mt-5 list-none space-y-3 p-0 text-service-body text-ink-muted">
            {system.consultation.emails.map(({ id, email }) => (
              <li key={id}><span className="break-all">{email}</span></li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
