"use client";

import { useState } from "react";

import type { YeastTwoHybridContent, YeastTwoHybridSystem } from "@/content/yeast-two-hybrid/types";

import { MembraneSystemBody } from "./MembraneSystemBody";
import { NuclearSystemBody } from "./NuclearSystemBody";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type YeastTwoHybridSystemsProps = Readonly<{
  selectorLabel: string;
  systems: YeastTwoHybridContent["systems"];
}>;

export function YeastTwoHybridSystems({
  selectorLabel,
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
          id="yeast-two-hybrid-system-content"
          role="region"
        >
          {selectedSystem.kind === "membrane" ? (
            <MembraneSystemBody system={selectedSystem} />
          ) : (
            <NuclearSystemBody system={selectedSystem} />
          )}
        </div>
      </div>
    </section>
  );
}
