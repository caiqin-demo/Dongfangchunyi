import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SimpleProductPage } from "@/components/product-pages/SimpleProductPage";
import { elisaKitsContentByLocale } from "@/content/elisa-kits";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { getSiteUrl } from "@/lib/site-url";

type PageProps = Readonly<{ params: Promise<{ lang: string }> }>;

const productPath = productPaths["elisa-kits"];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return {
    ...elisaKitsContentByLocale[lang].metadata,
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}${productPath}`,
      languages: {
        "zh-CN": `/zh${productPath}`,
        ja: `/ja${productPath}`,
        "x-default": `/${defaultLocale}${productPath}`,
      },
    },
  };
}

export default async function ElisaKitsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <SimpleProductPage content={elisaKitsContentByLocale[lang]} imageSrc="/product-elisa.webp" lang={lang} productPath={productPath} />;
}
