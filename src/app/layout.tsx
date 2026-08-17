import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
