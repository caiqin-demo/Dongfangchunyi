export const otherBusinessServicesPanelIds = [
  "business-consulting",
  "self-coaching-workshop",
  "coaching-leadership-training",
] as const;

export type OtherBusinessServicesPanelId = (typeof otherBusinessServicesPanelIds)[number];

export const businessConsultingOfferingIds = [
  "strategy-consulting",
  "organization-talent-development",
  "operations-management",
  "market-brand",
] as const;

export type BusinessConsultingOfferingId = (typeof businessConsultingOfferingIds)[number];

export type OtherBusinessServicesContent = Readonly<{
  businessConsulting: Readonly<{
    offerings: readonly [
      Readonly<{ description: string; id: "strategy-consulting"; title: string }>,
      Readonly<{ description: string; id: "organization-talent-development"; title: string }>,
      Readonly<{ description: string; id: "operations-management"; title: string }>,
      Readonly<{ description: string; id: "market-brand"; title: string }>,
    ];
    subtitle: string;
    title: string;
  }>;
  intro: string;
  metadata: Readonly<{
    description: string;
    title: string;
  }>;
  panels: readonly [
    Readonly<{ id: "business-consulting"; label: string }>,
    Readonly<{ id: "self-coaching-workshop"; label: string }>,
    Readonly<{ id: "coaching-leadership-training"; label: string }>,
  ];
  title: string;
}>;
