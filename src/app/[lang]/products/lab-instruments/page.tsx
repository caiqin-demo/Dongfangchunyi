import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SimpleProductPage } from "@/components/product-pages/SimpleProductPage";
import { labInstrumentsContentByLocale } from "@/content/lab-instruments";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { productPaths } from "@/lib/product-paths";
import { getSiteUrl } from "@/lib/site-url";

type PageProps = Readonly<{ params: Promise<{ lang: string }> }>;

const productPath = productPaths["lab-instruments"];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return {
    ...labInstrumentsContentByLocale[lang].metadata,
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

export default async function LabInstrumentsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <SimpleProductPage content={labInstrumentsContentByLocale[lang]} imageSrc="/product-lab-instrument.webp" lang={lang} productPath={productPath} />;
}
