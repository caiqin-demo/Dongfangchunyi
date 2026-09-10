import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

function createRecord(input) {
  const script = `
    import { createServerErrorRecord } from "./src/lib/server-error-record.ts";
    const input = ${JSON.stringify(input)};
    const error = input.errorKind === "error" ? new Error(input.errorName) : input.errorKind === "digest" ? Object.assign(new Error(input.errorName), { digest: input.digest }) : { toString() { throw new Error("must not stringify"); } };
    if (input.errorKind === "digest") error.name = input.errorName;
    const record = createServerErrorRecord(error, { path: input.path, method: input.method, headers: { cookie: "cookie-sentinel" } }, { routePath: input.routePath, routeType: "render", routerKind: "App Router", revalidateReason: undefined });
    console.log(JSON.stringify(record));
  `;
  const result = spawnSync(process.execPath, ["--no-warnings", "--experimental-strip-types", "--input-type=module", "--eval", script], {
    cwd: new URL("..", import.meta.url),
    encoding: "utf8",
  });

  assert.equal(result.status, 0, result.stderr);
  return JSON.parse(result.stdout);
}

test("runtime error copy is complete and matches the approved locale contract", () => {
  const zh = readSource("src/content/runtime-error/zh.ts");
  const ja = readSource("src/content/runtime-error/ja.ts");
  const index = readSource("src/content/runtime-error/index.ts");

  assert.match(index, /zh: zhRuntimeErrorContent/);
  assert.match(index, /ja: jaRuntimeErrorContent/);
  assert.match(index, /satisfies Record<Locale, RuntimeErrorContent>/);
  assert.match(zh, /title: "页面暂时无法显示"/);
  assert.match(zh, /description: "页面遇到了意外问题。您可以重试、重新加载页面，或返回首页。"/);
  assert.match(zh, /retryLabel: "重试"/);
  assert.match(zh, /reloadLabel: "重新加载"/);
  assert.match(zh, /homeLabel: "返回首页"/);
  assert.match(zh, /announcement: "页面发生错误。请选择重试、重新加载或返回首页。"/);
  assert.match(ja, /title: "ページを表示できません"/);
  assert.match(ja, /description: "予期しない問題が発生しました。再試行するか、ページを再読み込みするか、ホームへ戻ってください。"/);
  assert.match(ja, /retryLabel: "再試行"/);
  assert.match(ja, /reloadLabel: "再読み込み"/);
  assert.match(ja, /homeLabel: "ホームへ戻る"/);
  assert.match(ja, /announcement: "ページでエラーが発生しました。再試行、再読み込み、またはホームへ戻る操作を選べます。"/);
});

test("server error records have only the five allowlisted and sanitized fields", () => {
  const record = createRecord({
    errorKind: "digest",
    errorName: "ServerError\r\nInjected",
    digest: "digest\r\nvalue",
    method: "post\r\n",
    path: "/zh/path?email=message-sentinel&token=token-sentinel#fragment-sentinel",
    routePath: "/app/[lang]/route\r\nnext",
  });

  assert.deepEqual(new Set(Object.keys(record)), new Set(["digest", "errorName", "method", "pathname", "routePattern"]));
  assert.deepEqual(record, {
    digest: "digestvalue",
    errorName: "ServerErrorInjected",
    method: "POST",
    pathname: "/zh/path",
    routePattern: "/app/[lang]/routenext",
  });
  const serialized = JSON.stringify(record);
  for (const sentinel of ["message-sentinel", "token-sentinel", "fragment-sentinel", "cookie-sentinel", "headers", "body", "stack", "cause"]) {
    assert.doesNotMatch(serialized, new RegExp(sentinel));
  }
});

test("server error records never stringify non-Error throws and enforce field limits", () => {
  const unknown = createRecord({
    errorKind: "unknown",
    errorName: "ignored",
    digest: "ignored",
    method: "\r\n",
    path: "",
    routePath: "x".repeat(600),
  });
  const long = createRecord({
    errorKind: "digest",
    errorName: "n".repeat(120),
    digest: "d".repeat(140),
    method: "m".repeat(20),
    path: `/${"p".repeat(2100)}`,
    routePath: "r".repeat(600),
  });

  assert.deepEqual(unknown, {
    digest: null,
    errorName: "UnknownError",
    method: "UNKNOWN",
    pathname: "/",
    routePattern: "x".repeat(512),
  });
  assert.equal(long.digest.length, 128);
  assert.equal(long.errorName.length, 100);
  assert.equal(long.method.length, 16);
  assert.equal(long.pathname.length, 2048);
  assert.equal(long.routePattern.length, 512);
});

test("adapters delegate locale UI, and instrumentation emits one record per invocation without client monitoring", () => {
  const zh = readSource("src/app/zh/error.tsx");
  const ja = readSource("src/app/ja/error.tsx");
  const localized = readSource("src/components/error-pages/LocalizedRuntimeErrorPage.tsx");
  const global = readSource("src/app/global-error.tsx");
  const instrumentation = readSource("src/instrumentation.ts");

  assert.match(zh, /^"use client";/);
  assert.match(ja, /^"use client";/);
  assert.match(zh, /<LocalizedRuntimeErrorPage error=\{error\} lang="zh" retry=\{retry\} \/>/);
  assert.match(ja, /<LocalizedRuntimeErrorPage error=\{error\} lang="ja" retry=\{retry\} \/>/);
  assert.match(localized, /href="#main-content"/);
  assert.match(localized, /onClick=\{retry\}/);
  assert.match(localized, /onClick=\{\(\) => window\.location\.reload\(\)\}/);
  assert.match(localized, /aria-live="polite"/);
  assert.match(localized, /aria-atomic="true"/);
  assert.match(localized, /SiteFooter lang=\{lang\}/);
  assert.doesNotMatch(localized, /error\.(?:message|stack|cause|digest)/);
  assert.match(global, /<html lang="ja">/);
  assert.doesNotMatch(global, /SiteFooter|SiteHeader|next\/image|Logo|fonts\//);
  assert.match(instrumentation, /console\.error\(JSON\.stringify\(createServerErrorRecord\(error, request, context\)\)\);/);
  assert.doesNotMatch(instrumentation, /register\(|fetch\(|window\.|onerror|unhandledrejection/);
});
