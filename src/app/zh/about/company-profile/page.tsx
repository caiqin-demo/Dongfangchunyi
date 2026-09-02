import { CompanyProfilePage, getCompanyProfilePageMetadata } from "@/app/[lang]/about/company-profile/CompanyProfilePage";

export const metadata = getCompanyProfilePageMetadata("zh");

export default function Page() {
  return <CompanyProfilePage lang="zh" />;
}
