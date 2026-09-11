"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- error recovery requires document navigation. */

import { useEffect, useRef } from "react";

import "./globals.css";

const focusRingClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type GlobalErrorProps = Readonly<{
  error: Error & { digest?: string };
  retry: () => void;
}>;

export default function GlobalError({ error, retry }: GlobalErrorProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const announcementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
    if (announcementRef.current) announcementRef.current.textContent = "";
    const frame = window.requestAnimationFrame(() => {
      if (announcementRef.current) announcementRef.current.textContent = "页面发生错误。请选择重试、重新加载或返回首页。 ページでエラーが発生しました。再試行、再読み込み、またはホームへ戻る操作を選べます。";
    });

    return () => window.cancelAnimationFrame(frame);
  }, [error]);

  return (
    <html lang="ja">
      <body className="min-h-screen bg-ui-subtle font-sans text-ink">
        <title>页面暂时无法显示 / ページを表示できません</title>
        <main className="page-container grid min-h-screen place-items-center py-16" id="main-content" tabIndex={-1}>
          <section className="w-full max-w-3xl rounded-product-card border border-line bg-white px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,7vw,6rem)] text-center shadow-media" aria-labelledby="global-runtime-error-title">
            <div lang="zh-CN">
              <h1 className="m-0 rounded-action text-section-title-prominent focus:outline-2 focus:outline-offset-4 focus:outline-accent" id="global-runtime-error-title" ref={titleRef} tabIndex={-1}>页面暂时无法显示</h1>
              <p className="mx-auto mt-6 mb-0 max-w-2xl text-body-relaxed text-ink-muted">页面遇到了意外问题。您可以重试、重新加载页面，或返回首页。</p>
            </div>
            <div className="mt-8" lang="ja">
              <p className="m-0 text-section-title-prominent">ページを表示できません</p>
              <p className="mx-auto mt-4 mb-0 max-w-2xl text-body-relaxed text-ink-muted">予期しない問題が発生しました。再試行するか、ページを再読み込みするか、ホームへ戻ってください。</p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action bg-brand-red px-6 text-button-label text-on-dark transition-colors hover:bg-brand-red-hover ${focusRingClass}`} onClick={retry} type="button">重试 / 再試行</button>
              <button className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action border border-line-dark px-6 text-button-label text-ink transition-colors hover:border-accent hover:text-accent ${focusRingClass}`} onClick={() => window.location.reload()} type="button">重新加载 / 再読み込み</button>
              <a className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action border border-line-dark px-6 text-button-label text-ink transition-colors hover:border-accent hover:text-accent ${focusRingClass}`} href="/zh">中文首页</a>
              <a className={`inline-flex min-h-12 min-w-36 items-center justify-center rounded-action border border-line-dark px-6 text-button-label text-ink transition-colors hover:border-accent hover:text-accent ${focusRingClass}`} href="/ja">日本語ホーム</a>
            </div>
            <p aria-atomic="true" aria-live="polite" className="sr-only" ref={announcementRef} role="status" />
          </section>
        </main>
      </body>
    </html>
  );
}
