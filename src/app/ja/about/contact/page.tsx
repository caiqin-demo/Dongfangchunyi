import { ContactPage, getContactPageMetadata } from "@/app/[lang]/about/contact/ContactPage";

export const metadata = getContactPageMetadata("ja");

export default function Page() {
  return <ContactPage lang="ja" />;
}
