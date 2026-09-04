import {
  getServiceTechnologiesMetadata,
  ServiceTechnologiesPage,
} from "@/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage";

export const metadata = getServiceTechnologiesMetadata("zh");

export default function Page() {
  return <ServiceTechnologiesPage lang="zh" />;
}
