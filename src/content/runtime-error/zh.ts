import type { RuntimeErrorContent } from "./types";

export const zhRuntimeErrorContent = {
  title: "页面暂时无法显示",
  description: "页面遇到了意外问题。您可以重试、重新加载页面，或返回首页。",
  retryLabel: "重试",
  reloadLabel: "重新加载",
  homeLabel: "返回首页",
  announcement: "页面发生错误。请选择重试、重新加载或返回首页。",
} satisfies RuntimeErrorContent;
