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
  assert.match(page, /absoluteQuantificationMicrobialDiversitySequencingZh/);
  assert.match(page, /genomeResequencingZh/);
  assert.match(page, /marineMicrobiologyResearchZh/);
  assert.match(page, /multidimensionalAnalysisPlatformZh/);
  assert.match(page, /singleCellSequencingZh/);
  assert.match(page, /wholeTranscriptomeSequencingZh/);
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
  assert.match(zh, /assetId: "absolute-quantification-microbial-diversity-sequencing-zh"/);
  assert.match(zh, /alt: "绝对定量微生物多样性测序技术路线图"/);
  assert.match(zh, /assetId: "genome-resequencing-zh"/);
  assert.match(zh, /alt: "基因组重测序技术路线图"/);
  assert.match(zh, /assetId: "marine-microbiology-research-zh"/);
  assert.match(zh, /alt: "海洋微生物研究技术路线图"/);
  assert.equal((zh.match(/kind: "ready"/g) ?? []).length, 11);
  assert.match(ja, /categoryLabelMode: "placeholder"/);
  assert.equal((ja.match(/kind: "ready"/g) ?? []).length, 0);
  assert.match(
    ja,
    /"absolute-quantification-microbial-diversity-sequencing": \{ kind: "pending", label: "暂定" \}/,
  );
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

test("service technologies maps all absolute quantification rows to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/absolute-quantification-microbial-diversity-sequencing-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const genomeZh = readSource("src/content/genome-sequencing/zh.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 873987);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "ff16ee454c3b4a0f65de785923552c6c37bb3045b05d477831c18b8a7fa925a9",
  );
  assert.equal(
    (genomeZh.match(/id: "absolute-quantification-microbial-diversity-sequencing"/g) ?? []).length,
    3,
  );
  assert.match(
    page,
    /import absoluteQuantificationMicrobialDiversitySequencingZh from "\.\/\_assets\/absolute-quantification-microbial-diversity-sequencing-zh\.jpg"/,
  );
  assert.match(
    page,
    /"absolute-quantification-microbial-diversity-sequencing-zh":\s*absoluteQuantificationMicrobialDiversitySequencingZh/,
  );
});

test("service technologies maps marine microbiology research to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/marine-microbiology-research-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const genomeZh = readSource("src/content/genome-sequencing/zh.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 888372);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "8c6be642cf657b2252a92c85058d876d10e8d227b50cc3db465101e7a0dd7011",
  );
  assert.equal(
    (genomeZh.match(/id: "marine-microbiology-research"/g) ?? []).length,
    1,
  );
  assert.match(
    page,
    /import marineMicrobiologyResearchZh from "\.\/\_assets\/marine-microbiology-research-zh\.jpg"/,
  );
  assert.match(
    page,
    /"marine-microbiology-research-zh":\s*marineMicrobiologyResearchZh/,
  );
});

test("service technologies maps multidimensional platform items to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/multidimensional-analysis-platform-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const zh = readSource("src/content/service-technologies/zh.ts");
  const ja = readSource("src/content/service-technologies/ja.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 799557);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "678261e9b09a0787658f6f9bbce07092540e6bbf995df540a33711500d25a65a",
  );
  for (const id of ["epigenetics-service", "mrna-in-situ-hybridization"]) {
    assert.match(
      zh,
      new RegExp(`"${id}": \\{\\s+kind: "ready",\\s+assetId: "multidimensional-analysis-platform-zh"`),
    );
    assert.match(ja, new RegExp(`"${id}": \\{ kind: "pending", label: "暂定" \\}`));
  }
  assert.match(
    page,
    /import multidimensionalAnalysisPlatformZh from "\.\/\_assets\/multidimensional-analysis-platform-zh\.jpg"/,
  );
  assert.match(
    page,
    /"multidimensional-analysis-platform-zh":\s*multidimensionalAnalysisPlatformZh/,
  );
});

test("service technologies maps molecular interaction items to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/multidimensional-analysis-platform-interactions-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const zh = readSource("src/content/service-technologies/zh.ts");
  const ja = readSource("src/content/service-technologies/ja.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 835814);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "df2864c883d5315762a5945d81acbe62e4bd139ea7fde31ef09f515347cb7224",
  );
  for (const id of ["yeast-two-hybrid", "spr-molecular-interaction-research"]) {
    assert.match(
      zh,
      new RegExp(`"${id}": \\{\\s+kind: "ready",\\s+assetId: "multidimensional-analysis-platform-interactions-zh"`),
    );
    assert.match(ja, new RegExp(`"${id}": \\{ kind: "pending", label: "暂定" \\}`));
  }
  assert.match(
    page,
    /import multidimensionalAnalysisPlatformInteractionsZh from "\.\/\_assets\/multidimensional-analysis-platform-interactions-zh\.jpg"/,
  );
  assert.match(
    page,
    /"multidimensional-analysis-platform-interactions-zh":\s*multidimensionalAnalysisPlatformInteractionsZh/,
  );
});

test("service technologies maps proteomics and multiomics items to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/multidimensional-analysis-platform-multiomics-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const zh = readSource("src/content/service-technologies/zh.ts");
  const ja = readSource("src/content/service-technologies/ja.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 915736);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "076b9556899d67823199db20dac883d951349c36e768968f1ada3033297b6541",
  );
  for (const id of ["proteomics-and-metabolomics", "multiomics-combined-analysis"]) {
    assert.match(
      zh,
      new RegExp(`"${id}": \\{\\s+kind: "ready",\\s+assetId: "multidimensional-analysis-platform-multiomics-zh"`),
    );
    assert.match(ja, new RegExp(`"${id}": \\{ kind: "pending", label: "暂定" \\}`));
  }
  assert.match(
    page,
    /import multidimensionalAnalysisPlatformMultiomicsZh from "\.\/\_assets\/multidimensional-analysis-platform-multiomics-zh\.jpg"/,
  );
  assert.match(
    page,
    /"multidimensional-analysis-platform-multiomics-zh":\s*multidimensionalAnalysisPlatformMultiomicsZh/,
  );
});

test("service technologies maps all single-cell sequencing rows to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/single-cell-sequencing-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const genomeZh = readSource("src/content/genome-sequencing/zh.ts");
  const zh = readSource("src/content/service-technologies/zh.ts");
  const ja = readSource("src/content/service-technologies/ja.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 1041141);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "b7b98188cfb2bb6c3de37ef27c6fccd2538812d1e861c532cc7686f85bcf63c7",
  );
  assert.equal((genomeZh.match(/id: "single-cell-sequencing"/g) ?? []).length, 3);
  assert.match(
    zh,
    /"single-cell-sequencing": \{\s+kind: "ready",\s+assetId: "single-cell-sequencing-zh",\s+alt: "单细胞测序技术路线图"/,
  );
  assert.match(ja, /"single-cell-sequencing": \{ kind: "pending", label: "暂定" \}/);
  assert.match(
    page,
    /import singleCellSequencingZh from "\.\/\_assets\/single-cell-sequencing-zh\.jpg"/,
  );
  assert.match(page, /"single-cell-sequencing-zh":\s*singleCellSequencingZh/);
});

test("service technologies maps whole-transcriptome sequencing to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/whole-transcriptome-sequencing-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const zh = readSource("src/content/service-technologies/zh.ts");
  const ja = readSource("src/content/service-technologies/ja.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 851526);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "fdb94fcc68d8804c3c8e3c4842fb420f609dd64d3629b947fa57fd9e8547a1e8",
  );
  assert.match(
    zh,
    /"whole-transcriptome-sequencing": \{\s+kind: "ready",\s+assetId: "whole-transcriptome-sequencing-zh",\s+alt: "全转录组测序技术路线图"/,
  );
  assert.match(ja, /"whole-transcriptome-sequencing": \{ kind: "pending", label: "暂定" \}/);
  assert.match(
    page,
    /import wholeTranscriptomeSequencingZh from "\.\/\_assets\/whole-transcriptome-sequencing-zh\.jpg"/,
  );
  assert.match(
    page,
    /"whole-transcriptome-sequencing-zh":\s*wholeTranscriptomeSequencingZh/,
  );
});
