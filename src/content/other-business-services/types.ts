export type OtherBusinessServicesPanelId =
  | "business-consulting"
  | "self-coaching-workshop"
  | "coaching-leadership-training";

export type BusinessConsultingOfferingId =
  | "strategy-consulting"
  | "organization-talent-development"
  | "operations-management"
  | "market-brand";

export type CoachingProgramId =
  | "self-coaching-workshop"
  | "coaching-leadership-training";

type CoachingProgramCourseStructure =
  | Readonly<{
      description: string;
      kind: "plan";
      label: string;
    }>
  | Readonly<{
      kind: "levels";
      label: string;
      levels: readonly [
        Readonly<{ description: string; id: "basic"; label: string }>,
        Readonly<{ description: string; id: "advanced"; label: string }>,
      ];
    }>;

export type CoachingProgram = Readonly<{
  bullets: readonly [string, string, string];
  courseStructure: CoachingProgramCourseStructure;
  id: CoachingProgramId;
  lead: string;
  subtitle: string;
  title: string;
}>;

export type OtherBusinessServicesContact = Readonly<{
  address: string;
  companyName: string;
  email: string;
  language: "ja";
  phone: string;
  postalCode: string;
}>;

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
  coachingPrograms: readonly [
    CoachingProgram & Readonly<{ id: "self-coaching-workshop" }>,
    CoachingProgram & Readonly<{ id: "coaching-leadership-training" }>,
  ];
  contact: OtherBusinessServicesContact;
  intro: string;
  metadata: Readonly<{
    description: string;
    title: string;
  }>;
  panels: readonly [
    Readonly<{ id: "business-consulting"; qualifier?: string; title: string }>,
    Readonly<{ id: "self-coaching-workshop"; qualifier?: string; title: string }>,
    Readonly<{ id: "coaching-leadership-training"; qualifier?: string; title: string }>,
  ];
  title: string;
}>;
