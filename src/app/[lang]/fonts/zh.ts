import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: "variable",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Arial", "PingFang SC", "Microsoft YaHei", "sans-serif"],
});

const notoSerifSc = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Songti SC", "STSong", "SimSun", "serif"],
});

export const fontVariables = `${notoSansSc.variable} ${notoSerifSc.variable}`;
