import { CompanyProfilePage, getCompanyProfilePageMetadata } from "@/app/[lang]/about/company-profile/CompanyProfilePage";

export const metadata = getCompanyProfilePageMetadata("ja");

export default function Page() {
  return <CompanyProfilePage lang="ja" />;
}
