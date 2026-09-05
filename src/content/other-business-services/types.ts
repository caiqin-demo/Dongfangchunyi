export const otherBusinessServicesPanelIds = [
  "business-consulting",
  "self-coaching-workshop",
  "coaching-leadership-training",
] as const;

export type OtherBusinessServicesPanelId = (typeof otherBusinessServicesPanelIds)[number];

export type OtherBusinessServicesContent = Readonly<{
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
