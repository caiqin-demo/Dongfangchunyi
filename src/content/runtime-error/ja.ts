import type { RuntimeErrorContent } from "./types";

export const jaRuntimeErrorContent = {
  title: "ページを表示できません",
  description: "予期しない問題が発生しました。再試行するか、ページを再読み込みするか、ホームへ戻ってください。",
  retryLabel: "再試行",
  reloadLabel: "再読み込み",
  homeLabel: "ホームへ戻る",
  announcement: "ページでエラーが発生しました。再試行、再読み込み、またはホームへ戻る操作を選べます。",
} satisfies RuntimeErrorContent;
