import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("genome sequencing content keeps the approved Chinese copy and option order", () => {
  const content = readSource("src/content/genome-sequencing/zh.ts");
  const options = content.match(/options: \[([\s\S]*?)\n  \],\n  body:/)?.[1] ?? "";

  assert.match(content, /title: "基因组测序"/);
  assert.match(content, /intro: "专注于动植物和微生物领域的二代\/三代基因组及转录组测序相关服务"/);
  assert.deepEqual(
    [...options.matchAll(/\{ id: "([^"]+)", label: "([^"]+)" \}/g)].map(([, id, label]) => ({ id, label })),
    [
      { id: "plant-and-cell", label: "植物及细胞" },
      { id: "animal-and-cell", label: "动物及细胞" },
      { id: "microorganism", label: "微生物" },
      { id: "multidimensional-analysis-platform", label: "多维度解析平台" },
    ],
  );
});

test("genome sequencing options remain disabled without selector state", () => {
  const options = readSource("src/app/[lang]/services/genome-sequencing/GenomeSequencingOptions.tsx");

  assert.match(options, /<section className="bg-ui-subtle pt-8 text-ink"/);
  assert.match(options, /<button[\s\S]*disabled[\s\S]*type="button"/);
  assert.doesNotMatch(options, /aria-(?:controls|pressed|selected)|onClick|useState|useRouter|searchParams/);
});

test("genome sequencing body keeps the approved Chinese structure and copy", () => {
  const content = readSource("src/content/genome-sequencing/zh.ts");

  assert.match(content, /label: "咨询请联系"/);
  assert.match(content, /emails: \["market@easternpurity\.com", "info@shanghaigenomics\.com"\]/);
  assert.deepEqual(
    [...content.matchAll(/id: "(plant-and-cell|animal-and-cell|microorganism|multidimensional-analysis-platform)",\n        label: "([^"]+)"/g)].map(([, id, label]) => ({ id, label })),
    [
      { id: "plant-and-cell", label: "植物及细胞" },
      { id: "animal-and-cell", label: "动物及细胞" },
      { id: "microorganism", label: "微生物" },
      { id: "multidimensional-analysis-platform", label: "多维度解析平台" },
    ],
  );
  assert.match(content, /title: "客户发表的文章"/);
  assert.match(content, /id: "heng-xu-2026-07-15"/);
  assert.match(content, /id: "chaocheng-guo-2025-03-17"/);
  assert.match(content, /title: "核心服务团队"/);
  assert.match(content, /上海睿星生物技术有限公司测序核心团队有着20多年的二代基因组测序经验/);
});

test("Japanese body content remains structurally equivalent and provisional", () => {
  const content = readSource("src/content/genome-sequencing/ja.ts");

  assert.equal((content.match(/"暂定"/g) ?? []).length, 57);
  assert.deepEqual(
    [...content.matchAll(/id: "(plant-and-cell|animal-and-cell|microorganism|multidimensional-analysis-platform)"/g)].map(([, id]) => id),
    [
      "plant-and-cell",
      "animal-and-cell",
      "microorganism",
      "multidimensional-analysis-platform",
      "plant-and-cell",
      "animal-and-cell",
      "microorganism",
      "multidimensional-analysis-platform",
    ],
  );
  assert.match(content, /id: "heng-xu-2026-07-15", citation: "暂定", title: "暂定"/);
  assert.match(content, /id: "chaocheng-guo-2025-03-17", citation: "暂定", title: "暂定"/);
});

test("genome sequencing body is static, structured, and uses the team image", () => {
  const page = readSource("src/app/[lang]/services/genome-sequencing/GenomeSequencingPage.tsx");
  const body = readSource("src/app/[lang]/services/genome-sequencing/GenomeSequencingBody.tsx");
  const globals = readSource("src/app/globals.css");
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/_assets/genome-sequencing-team.jpg", import.meta.url);

  assert.match(page, /GenomeSequencingOptions/);
  assert.match(page, /GenomeSequencingBody body=\{t\.body\} teamImage=\{genomeSequencingTeam\}/);
  assert.match(body, /<div className="page-container">\s*<div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3">[\s\S]*?body\.contact\.label[\s\S]*?body\.contact\.emails[\s\S]*?<\/div>\s*<article/);
  assert.match(body, /<article className="overflow-hidden rounded-product-card border border-line bg-white shadow-media">/);
  assert.match(globals, /--color-genome-sequencing-accent: color\(srgb 0 0\.621 0\.858\)/);
  assert.match(body, /border-l border-genome-sequencing-accent/);
  assert.match(body, /border-t-4 border-genome-sequencing-accent/);
  assert.match(body, /text-genome-sequencing-accent/);
  assert.match(body, /<h2 className="m-0 text-service-body font-bold text-genome-sequencing-accent" id="genome-sequencing-publications-title">/);
  assert.match(body, /const publicationTextClass = "text-service-card-body text-ink-muted"/);
  assert.equal((body.match(/className=\{`[^`]*\$\{publicationTextClass\}`\}/g) ?? []).length, 2);
  assert.match(body, /<div className="grid grid-cols-4 grid-rows-\[auto_auto\] gap-y-12 px-\[clamp\(1\.5rem,3vw,2\.5rem\)\] py-\[clamp\(2rem,4vw,3\.5rem\)\] max-page:grid-cols-2">/);
  assert.equal((body.match(/body\.categories\.map/g) ?? []).length, 1);
  assert.match(body, /<section className="row-span-2 grid grid-rows-subgrid first:\[&>div\]:border-l-0 first:\[&>div\]:pl-0 first:\[&>button\]:pl-0 max-page:odd:\[&>div\]:border-l-0 max-page:odd:\[&>div\]:pl-0 max-page:odd:\[&>button\]:pl-0"[\s\S]*?<div className="min-w-0 border-l border-genome-sequencing-accent pl-6">[\s\S]*?<\/div>\s*<button className="justify-self-start pl-6 text-left text-service-body text-genome-sequencing-accent/);
  assert.doesNotMatch(body, /col-span-full|mt-12 grid grid-cols-4 max-page:grid-cols-2 max-compact:grid-cols-1/);
  assert.match(body, /<Image alt="" aria-hidden="true" className="object-cover object-center" fill loading="lazy" sizes=/);
  assert.match(body, /<div className="relative z-10 max-w-1\/3 max-compact:max-w-none">/);
  assert.match(body, /<button[^>]*disabled[^>]*type="button">技术路线\+<\/button>/);
  assert.doesNotMatch(body, /技术规格|云托管服务|技术路线这里有链接到同一个子页面|use client|useState|useEffect|useRouter|searchParams|onClick|aria-(?:controls|pressed|selected)|<form|href=/);
  assert.doesNotMatch(body, /bg-linear-to-r|from-ui-section|via-ui-section|to-ui-section|max-compact:bg-none/);
  assert.doesNotMatch(body, /color\(|rgb\(|rgba\(|#[0-9A-Fa-f]{3,8}/);
  assert.equal(statSync(asset).size, 250757);
  assert.match(readFileSync(asset).subarray(0, 3).toString("hex"), /^ffd8ff$/);
});

test("genome sequencing uses the shared service path for its public entry points", () => {
  const servicePaths = readSource("src/lib/service-paths.ts");
  const landing = readSource("src/app/[lang]/LandingPage.tsx");
  const footer = readSource("src/components/SiteFooter.tsx");

  assert.match(servicePaths, /"genome-sequencing": "\/services\/genome-sequencing"/);
  assert.match(landing, /"genome-sequencing": servicePaths\["genome-sequencing"\]/);
  assert.match(footer, /"genome-sequencing": servicePaths\["genome-sequencing"\]/);
});
