import { ContactPage, getContactPageMetadata } from "@/app/[lang]/about/contact/ContactPage";

export const metadata = getContactPageMetadata("zh");

export default function Page() {
  return <ContactPage lang="zh" />;
}
