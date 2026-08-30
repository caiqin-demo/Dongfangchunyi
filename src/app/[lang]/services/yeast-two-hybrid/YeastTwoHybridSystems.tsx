"use client";

import { useState } from "react";
import { LuCheck, LuCircleDashed } from "react-icons/lu";

import type { YeastTwoHybridSystem } from "@/content/yeast-two-hybrid/types";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type YeastTwoHybridSystemsProps = Readonly<{
  featureTitle: string;
  selectorLabel: string;
  specificationTitle: string;
  systems: readonly [YeastTwoHybridSystem, YeastTwoHybridSystem];
}>;

export function YeastTwoHybridSystems({
  featureTitle,
  selectorLabel,
  specificationTitle,
  systems,
}: YeastTwoHybridSystemsProps) {
  const [selectedSystemId, setSelectedSystemId] = useState<YeastTwoHybridSystem["id"]>(systems[0].id);
  const selectedSystem = systems.find(({ id }) => id === selectedSystemId) ?? systems[0];
  const consultationTitleId = `yeast-two-hybrid-${selectedSystem.id}-consultation-title`;

  return (
    <section className="bg-ui-section py-8 text-on-dark" aria-labelledby="service-overview-title">
      <div className="page-container">
        <div className="mb-12 flex flex-wrap justify-center gap-3" role="group" aria-label={selectorLabel}>
          {systems.map((system) => {
            const isSelected = system.id === selectedSystem.id;

            return (
              <button
                aria-controls="yeast-two-hybrid-system-content"
                aria-pressed={isSelected}
                className={`inline-flex min-h-12 cursor-pointer items-center justify-center rounded-control border px-6 text-button-label transition-colors ${focusRingClass} ${isSelected ? "border-accent bg-service-system-selected text-white" : "border-line-dark bg-ui-card text-on-dark-muted hover:border-accent hover:bg-ui-card-accent hover:text-white"}`}
                id={`yeast-two-hybrid-${system.id}-button`}
                key={system.id}
                onClick={() => setSelectedSystemId(system.id)}
                type="button"
              >
                {system.label}
              </button>
            );
          })}
        </div>

        <div
          aria-labelledby={`yeast-two-hybrid-${selectedSystem.id}-button`}
          className="grid grid-cols-2 items-start gap-12 max-page:grid-cols-1"
          id="yeast-two-hybrid-system-content"
          role="region"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-control bg-accent/15 text-2xl text-accent" aria-hidden="true">
                <LuCircleDashed />
              </span>
              <div>
                <h2 className="m-0 text-service-current-title" id="service-overview-title">{selectedSystem.label}</h2>
                <p className="mt-1 mb-0 text-service-current-subtitle text-accent">{selectedSystem.subtitle}</p>
              </div>
            </div>

            <p className="mt-5 mb-0 text-service-body text-on-dark-muted">{selectedSystem.body}</p>

            <h3 className="mt-10 mb-5 text-service-section-title text-white">{featureTitle}</h3>
            <ul className="grid list-none grid-cols-2 gap-4 p-0 max-compact:grid-cols-1">
              {selectedSystem.features.map((feature) => (
                <li className="rounded-control border border-line-dark bg-ui-card p-5" key={feature.id}>
                  <div className="flex items-center gap-3">
                    <LuCircleDashed className="shrink-0 text-xl text-accent" aria-hidden="true" />
                    <p className="m-0 text-service-card-title text-white">{feature.title}</p>
                  </div>
                  <p className="mt-2 mb-0 whitespace-pre-line text-service-card-body text-on-dark-muted">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <section className="rounded-product-card border border-line-dark bg-ui-card p-6" aria-labelledby="service-specifications-title">
              <h3 className="m-0 text-service-section-title text-white" id="service-specifications-title">{specificationTitle}</h3>
              <ul className="mt-5 grid list-none gap-4 p-0">
                {selectedSystem.specifications.map((item) => (
                  <li className="flex items-center gap-3 text-service-body text-on-dark-muted" key={item.id}>
                    <LuCheck className="shrink-0 text-xl text-accent" aria-hidden="true" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-product-card border border-line-dark bg-service-consultation-card p-6" aria-labelledby={consultationTitleId}>
              <h3 className="m-0 text-service-section-title text-white" id={consultationTitleId}>{selectedSystem.consultation.title}</h3>
              <ul className="mt-5 list-none space-y-3 p-0 text-service-body text-on-dark-muted">
                {selectedSystem.consultation.emails.map(({ id, email }) => (
                  <li key={id}><span className="break-all">{email}</span></li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
