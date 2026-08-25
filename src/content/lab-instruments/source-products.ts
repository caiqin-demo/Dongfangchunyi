import type { LabInstrumentSku } from "@/content/lab-instruments/types";

type Availability = Readonly<{
  availability: string;
  shippingOrigin: string;
}>;

const pipetteSkus = [
  { id: "cx-0010", specification: "1–10 μL", catalogNumber: "CX-0010" },
  { id: "cx-0020", specification: "2–20 μL", catalogNumber: "CX-0020" },
  { id: "cx-0100", specification: "10–100 μL", catalogNumber: "CX-0100" },
  { id: "cx-0200", specification: "20–200 μL", catalogNumber: "CX-0200" },
  { id: "cx-1000", specification: "100–1000 μL", catalogNumber: "CX-1000" },
] as const;

const compactInstrumentSkus = {
  "domi-metal-bath": [
    { id: "gt20701", specification: "Domi", catalogNumber: "GT20701" },
  ],
  "curling-vortex-mixer": [
    { id: "gc20102", specification: "Curling", catalogNumber: "GC20102" },
  ],
} as const;

function localizeSkus(
  rows: readonly Readonly<{ catalogNumber: string; id: string; specification: string }>[],
  availability: Availability,
): readonly LabInstrumentSku[] {
  return rows.map((row) => ({ ...row, ...availability }));
}

export function createPipetteSkus(availability: Availability) {
  return localizeSkus(pipetteSkus, availability);
}

export function createCompactInstrumentSkus(
  id: keyof typeof compactInstrumentSkus,
  availability: Availability,
) {
  return localizeSkus(compactInstrumentSkus[id], availability);
}
