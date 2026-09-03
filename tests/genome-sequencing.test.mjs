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
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/_assets/genome-sequencing-team.jpg", import.meta.url);

  assert.match(page, /GenomeSequencingOptions/);
  assert.match(page, /GenomeSequencingBody body=\{t\.body\} teamImage=\{genomeSequencingTeam\}/);
  assert.match(body, /<div className="page-container">\s*<div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-2">[\s\S]*?body\.contact\.label[\s\S]*?body\.contact\.emails[\s\S]*?<\/div>\s*<article/);
  assert.match(body, /<article className="overflow-hidden rounded-product-card border border-line bg-white shadow-media">/);
  assert.match(body, /border-t-4 border-accent/);
  assert.match(body, /<Image alt="" aria-hidden="true" className="object-cover object-center" fill loading="lazy" sizes=/);
  assert.match(body, /<div className="relative z-10 max-w-1\/3 max-compact:max-w-none">/);
  assert.match(body, /<button[^>]*disabled type="button">技术路线\+<\/button>/);
  assert.doesNotMatch(body, /技术规格|云托管服务|技术路线这里有链接到同一个子页面|use client|useState|useEffect|useRouter|searchParams|onClick|aria-(?:controls|pressed|selected)|<form|href=/);
  assert.doesNotMatch(body, /bg-linear-to-r|from-ui-section|via-ui-section|to-ui-section|max-compact:bg-none/);
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
