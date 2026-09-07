import type { ImageProps } from "next/image";

import type { OtherBusinessServicesContent } from "@/content/other-business-services";

import { BusinessConsultingPart } from "./BusinessConsultingPart";
import { CoachingProgramPart } from "./CoachingProgramPart";
import { SelfCoachingWorkshopPart } from "./SelfCoachingWorkshopPart";

type OtherBusinessServicesBodyProps = Readonly<{
  businessConsultingImage: ImageProps["src"];
  coachingLeadershipImage: ImageProps["src"];
  content: OtherBusinessServicesContent;
  selfCoachingImage: ImageProps["src"];
}>;

export function OtherBusinessServicesBody({
  businessConsultingImage,
  coachingLeadershipImage,
  content,
  selfCoachingImage,
}: OtherBusinessServicesBodyProps) {
  const [selfCoaching, coachingLeadership] = content.coachingPrograms;

  return (
    <section className="bg-ui-subtle py-8" lang="zh-CN">
      <article className="page-container overflow-hidden rounded-product-card border border-line bg-white shadow-media">
        <BusinessConsultingPart content={content.businessConsulting} image={businessConsultingImage} />
        <SelfCoachingWorkshopPart content={selfCoaching} image={selfCoachingImage} />
        <CoachingProgramPart content={coachingLeadership} image={coachingLeadershipImage} imageSide="left" />
      </article>
    </section>
  );
}
