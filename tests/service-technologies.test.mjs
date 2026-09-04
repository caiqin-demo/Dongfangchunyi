import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const itemIds = [
  "single-cell-sequencing",
  "genome-de-novo-sequencing",
  "absolute-quantification-microbial-diversity-sequencing",
  "dap-seq-technical-service",
  "genome-resequencing",
  "whole-transcriptome-sequencing",
  "marine-microbiology-research",
  "epigenetics-service",
  "mrna-in-situ-hybridization",
  "yeast-two-hybrid",
  "spr-molecular-interaction-research",
  "proteomics-and-metabolomics",
  "multiomics-combined-analysis",
];

test("service technologies card preserves the approved component boundary and data contract", () => {
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");
  const card = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesBodyCard.tsx");
  const types = readSource("src/content/service-technologies/types.ts");
  const genomeTypes = readSource("src/content/genome-sequencing/types.ts");

  assert.match(page, /GenomeSequencingBodyFrame contact=\{content\.contact\}/);
  assert.match(page, /<ServiceTechnologiesBodyCard/);
  assert.match(page, /categories=\{categories\}/);
  assert.match(page, /genomeResequencingZh/);
  assert.doesNotMatch(page, /aria-hidden="true" className="min-h-/);
  assert.match(card, /^"use client";/);
  assert.match(card, /useState<ServiceTechnologySelectionKey \| null>\(null\)/);
  assert.match(types, /\$\{GenomeSequencingOptionId\}:\$\{GenomeSequencingServiceItemId\}/);
  assert.match(types, /Record<GenomeSequencingServiceItemId, ServiceTechnologyDisplay>/);
  assert.equal((genomeTypes.match(/^  \| "/gm) ?? []).length, 17);
  for (const id of itemIds) assert.match(genomeTypes, new RegExp(`"${id}"`));
});

test("service technologies card has accessible buttons and exact approved display behavior", () => {
  const card = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesBodyCard.tsx");

  assert.match(card, /<button/);
  assert.match(card, /type="button"/);
  assert.match(card, /aria-controls=\{detailsRegionId\}/);
  assert.match(card, /aria-pressed=\{isSelected\}/);
  assert.match(card, /aria-pressed:font-bold/);
  assert.match(card, /focus-visible:outline-2/);
  assert.match(card, /role="status"/);
  assert.match(card, /aria-live="polite"/);
  assert.match(card, /border-l border-genome-sequencing-accent/);
  assert.match(card, /max-stack:border-t max-stack:border-l-0/);
  assert.match(card, /grid-cols-\[fit-content\(30%\)_minmax\(0,1fr\)\]/);
  assert.match(card, /max-stack:grid-cols-1/);
  assert.doesNotMatch(card, /grid-cols-\[minmax\(0,\.6fr\)_minmax\(0,1\.4fr\)\]/);
  assert.doesNotMatch(card, /grid-cols-\[minmax\(0,\.72fr\)_minmax\(0,1\.28fr\)\]/);
  assert.match(card, /<Image/);
  assert.match(card, /alt=\{display\.alt\}/);
  assert.match(card, /object-contain/);
  assert.match(card, /loading="lazy"/);
  assert.match(card, /unoptimized/);
  assert.match(card, /display\?\.kind === "pending"/);
  assert.doesNotMatch(card, /<a[\s>]/);
  assert.doesNotMatch(card, /总共12种|鼠标指向黑色字体/);
});

test("service technologies locale maps are exhaustive and keep Japanese card content pending", () => {
  const zh = readSource("src/content/service-technologies/zh.ts");
  const ja = readSource("src/content/service-technologies/ja.ts");

  for (const id of itemIds) {
    assert.match(zh, new RegExp(`"${id}"`));
    assert.match(ja, new RegExp(`"${id}"`));
  }
  assert.match(zh, /categoryLabelMode: "source"/);
  assert.match(zh, /assetId: "genome-resequencing-zh"/);
  assert.match(zh, /alt: "基因组重测序技术路线图"/);
  assert.equal((zh.match(/kind: "ready"/g) ?? []).length, 1);
  assert.match(ja, /categoryLabelMode: "placeholder"/);
  assert.equal((ja.match(/kind: "ready"/g) ?? []).length, 0);
  const jaDisplayMap = ja.match(/displayByItemId: \{([\s\S]*?)\n    \},\n  \},\n  contact:/)?.[1] ?? "";
  assert.equal((jaDisplayMap.match(/label: "暂定"/g) ?? []).length, 13);
});

test("service technologies preserves the approved resequencing image bytes", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/genome-resequencing-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);

  assert.equal(statSync(asset).size, 613158);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "8477d88aafdc9c4144ee5098873d6977d714f6bee93b9e8880ff0003970de5fa",
  );
  assert.match(readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx"), /import genomeResequencingZh from "\.\/\_assets\/genome-resequencing-zh\.jpg"/);
});
