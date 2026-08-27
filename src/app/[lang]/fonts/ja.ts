import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: "variable",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Arial", "Hiragino Kaku Gothic ProN", "Yu Gothic", "sans-serif"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Hiragino Mincho ProN", "Yu Mincho", "serif"],
});

export const fontVariables = `${notoSansJp.variable} ${notoSerifJp.variable}`;
