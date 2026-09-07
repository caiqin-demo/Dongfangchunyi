import {
  getOtherBusinessServicesMetadata,
  OtherBusinessServicesPage,
} from "@/app/[lang]/services/other-business-services/OtherBusinessServicesPage";

export const metadata = getOtherBusinessServicesMetadata("zh");

export default function Page() {
  return <OtherBusinessServicesPage lang="zh" />;
}
