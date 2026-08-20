import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Sans_SC, Noto_Serif_JP, Noto_Serif_SC } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: "variable",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Arial", "PingFang SC", "Microsoft YaHei", "sans-serif"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: "variable",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Arial", "Hiragino Kaku Gothic ProN", "Yu Gothic", "sans-serif"],
});

const notoSerifSc = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Songti SC", "STSong", "SimSun", "serif"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Hiragino Mincho ProN", "Yu Mincho", "serif"],
});

export const metadata: Metadata = {
  title: "东方纯一 | 生命科学产品与技术服务",
  description:
    "东方纯一专注标签抗体、填料偶联产品、ELISA 试剂盒及酵母双杂交技术服务。",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSansSc.variable} ${notoSansJp.variable} ${notoSerifSc.variable} ${notoSerifJp.variable}`}>
        {children}
      </body>
    </html>
  );
}
