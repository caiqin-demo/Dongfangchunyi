"use client";

import { useState } from "react";
import { LuCheck, LuCircleDashed } from "react-icons/lu";

import type { YeastTwoHybridSystem } from "@/content/yeast-two-hybrid/types";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type YeastTwoHybridSystemsProps = Readonly<{
  featureTitle: string;
  overviewTitle: string;
  selectorLabel: string;
  specificationTitle: string;
  systems: readonly [YeastTwoHybridSystem, YeastTwoHybridSystem];
}>;

export function YeastTwoHybridSystems({
  featureTitle,
  overviewTitle,
  selectorLabel,
  specificationTitle,
  systems,
}: YeastTwoHybridSystemsProps) {
  const [selectedSystemId, setSelectedSystemId] = useState<YeastTwoHybridSystem["id"]>(systems[0].id);
  const selectedSystem = systems.find(({ id }) => id === selectedSystemId) ?? systems[0];

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
                className={`inline-flex min-h-12 cursor-pointer items-center justify-center rounded-control border px-6 text-base font-semibold transition-colors ${focusRingClass} ${isSelected ? "border-accent bg-ui-hero text-white" : "border-line-dark bg-ui-card text-on-dark-muted hover:border-accent hover:bg-ui-card-accent hover:text-white"}`}
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
              <h2 className="m-0 text-product-section-title" id="service-overview-title">{overviewTitle}</h2>
            </div>
            <p className="mt-5 text-product-section-body text-on-dark-muted">{selectedSystem.overview}</p>

            <h3 className="mt-10 mb-5 text-xl font-semibold text-white">{featureTitle}</h3>
            <ul className="grid list-none grid-cols-2 gap-4 p-0 max-compact:grid-cols-1">
              {selectedSystem.features.map((feature) => (
                <li className="rounded-control border border-line-dark bg-ui-card p-5" key={feature.id}>
                  <div className="flex items-center gap-3">
                    <LuCircleDashed className="shrink-0 text-xl text-accent" aria-hidden="true" />
                    <p className="m-0 font-semibold text-white">{feature.title}</p>
                  </div>
                  <p className="mt-2 mb-0 text-sm leading-6 text-on-dark-muted">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <section className="rounded-product-card border border-line-dark bg-ui-card p-6" aria-labelledby="service-specifications-title">
            <h2 className="m-0 text-xl font-semibold text-white" id="service-specifications-title">{specificationTitle}</h2>
            <ul className="mt-5 grid list-none gap-4 p-0">
              {selectedSystem.specifications.map((item) => (
                <li className="flex items-center gap-3 text-on-dark-muted" key={item.id}>
                  <LuCheck className="shrink-0 text-xl text-accent" aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
