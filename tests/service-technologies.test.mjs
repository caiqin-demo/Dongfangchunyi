import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
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
  const selection = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologySelection.ts");
  const types = readSource("src/content/service-technologies/types.ts");
  const genomeTypes = readSource("src/content/genome-sequencing/types.ts");

  assert.match(page, /GenomeSequencingBodyFrame contact=\{content\.contact\}/);
  assert.match(page, /<ServiceTechnologiesBodyCard/);
  assert.match(page, /categories=\{categories\}/);
  assert.match(page, /lang=\{lang\}/);
  assert.match(page, /preserveLocaleSearchParamKeys=\{\["technology"\]\}/);
  assert.match(page, /absoluteQuantificationMicrobialDiversitySequencingZh/);
  assert.match(page, /dapSeqTechnicalServiceZh/);
  assert.match(page, /genomeResequencingZh/);
  assert.match(page, /marineMicrobiologyResearchZh/);
  assert.match(page, /multidimensionalAnalysisPlatformZh/);
  assert.match(page, /singleCellSequencingZh/);
  assert.match(page, /wholeTranscriptomeSequencingZh/);
  assert.doesNotMatch(page, /aria-hidden="true" className="min-h-/);
  assert.match(card, /^"use client";/);
  assert.match(card, /useState<ServiceTechnologySelectionKey \| null>\(\s*\(\) => defaultSelectionKey/);
  assert.match(card, /resolveDefaultServiceTechnologySelection\(rows, card\.displayByItemId\)/);
  assert.match(selection, /rows\.find\(\(row\) => displayByItemId\[row\.itemId\]\.kind === "ready"\)/);
  assert.match(selection, /rows\[0\]\?\.selectionKey/);
  assert.match(types, /\$\{GenomeSequencingOptionId\}:\$\{GenomeSequencingServiceItemId\}/);
  assert.match(types, /Record<GenomeSequencingServiceItemId, ServiceTechnologyDisplay>/);
  assert.equal((genomeTypes.match(/^  \| "/gm) ?? []).length, 17);
  for (const id of itemIds) assert.match(genomeTypes, new RegExp(`"${id}"`));
});

test("service technologies resolves and synchronizes only validated technology selections", () => {
  const card = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesBodyCard.tsx");
  const selection = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologySelection.ts");
  const sync = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologySelectionQuerySync.tsx");

  assert.match(selection, /const exactRow = rows\.find\(\(row\) => row\.selectionKey === rawSelectionKey\)/);
  assert.match(selection, /const parts = rawSelectionKey\.split\(":"\)/);
  assert.match(selection, /parts\.length !== 2/);
  assert.match(selection, /const hasKnownCategory = rows\.some/);
  assert.match(selection, /const matchingReadyRow = rows\.find/);
  assert.match(selection, /displayByItemId\[exactRow\.itemId\]\.kind !== "ready"/);
  assert.match(selection, /shouldNormalize: true/);
  assert.doesNotMatch(selection, /as ServiceTechnologySelectionKey/);

  assert.match(card, /<Suspense fallback=\{null\}>/);
  assert.match(card, /<ServiceTechnologySelectionQuerySync/);
  assert.match(card, /internalQueryEcho/);
  assert.match(card, /url\.searchParams\.delete\("technology"\)/);
  assert.match(card, /if \(nextUrl !== currentUrl\)/);
  assert.match(card, /router\.replace\(nextUrl, \{ scroll: false \}\)/);
  assert.match(card, /id=\{`service-technologies-row-\$\{selectionKey\}`\}/);
  assert.match(card, /aria-labelledby=\{selectedButtonId\}/);
  assert.match(card, /role="region"/);

  assert.match(sync, /searchParams\.getAll\("technology"\)/);
  assert.match(sync, /consumeInternalEcho\(lang, values\)/);
  assert.match(sync, /resolveRequestedServiceTechnologySelection/);
  assert.match(sync, /normalizedSearchParams\.delete\("technology"\)/);
  assert.match(sync, /if \(url !== currentUrl\)/);
  assert.match(sync, /router\.replace\(url, \{ scroll: false \}\)/);
  assert.match(sync, /\$\{window\.location\.hash\}/);
});

test("service technologies selection resolver handles default, fallback, and invalid query states", () => {
  const moduleUrl = new URL(
    "../src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologySelection.ts",
    import.meta.url,
  ).href;
  const script = `
    import {
      resolveDefaultServiceTechnologySelection,
      resolveRequestedServiceTechnologySelection,
    } from ${JSON.stringify(moduleUrl)};

    const rows = [
      { categoryId: "plant-and-cell", itemId: "single-cell-sequencing", selectionKey: "plant-and-cell:single-cell-sequencing" },
      { categoryId: "animal-and-cell", itemId: "genome-resequencing", selectionKey: "animal-and-cell:genome-resequencing" },
      { categoryId: "multidimensional-analysis-platform", itemId: "genome-de-novo-sequencing", selectionKey: "multidimensional-analysis-platform:genome-de-novo-sequencing" },
    ];
    const display = {
      "single-cell-sequencing": { kind: "pending", label: "Pending" },
      "genome-resequencing": { kind: "ready", assetId: "test", alt: "Ready" },
      "genome-de-novo-sequencing": { kind: "ready", assetId: "test", alt: "Moved" },
    };
    const defaultKey = resolveDefaultServiceTechnologySelection(rows, display);
    console.log(JSON.stringify({
      defaultKey,
      exact: resolveRequestedServiceTechnologySelection(["multidimensional-analysis-platform:genome-de-novo-sequencing"], rows, display, defaultKey),
      defaultExplicit: resolveRequestedServiceTechnologySelection(["animal-and-cell:genome-resequencing"], rows, display, defaultKey),
      pending: resolveRequestedServiceTechnologySelection(["plant-and-cell:single-cell-sequencing"], rows, display, defaultKey),
      moved: resolveRequestedServiceTechnologySelection(["plant-and-cell:genome-de-novo-sequencing"], rows, display, defaultKey),
      unknown: resolveRequestedServiceTechnologySelection(["plant-and-cell:unknown"], rows, display, defaultKey),
      repeated: resolveRequestedServiceTechnologySelection(["animal-and-cell:genome-resequencing", "animal-and-cell:genome-resequencing"], rows, display, defaultKey),
      noReady: resolveDefaultServiceTechnologySelection(rows.slice(0, 1), display),
      noRows: resolveDefaultServiceTechnologySelection([], display),
    }));
  `;
  const result = spawnSync(
    process.execPath,
    ["--no-warnings", "--experimental-strip-types", "--input-type=module", "--eval", script],
    { encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr);
  const resolution = JSON.parse(result.stdout);

  assert.equal(resolution.defaultKey, "animal-and-cell:genome-resequencing");
  assert.deepEqual(resolution.exact, {
    selectionKey: "multidimensional-analysis-platform:genome-de-novo-sequencing",
    shouldNormalize: false,
  });
  assert.deepEqual(resolution.defaultExplicit, {
    selectionKey: "animal-and-cell:genome-resequencing",
    shouldNormalize: true,
  });
  assert.deepEqual(resolution.pending, {
    selectionKey: "animal-and-cell:genome-resequencing",
    shouldNormalize: true,
  });
  assert.deepEqual(resolution.moved, {
    selectionKey: "multidimensional-analysis-platform:genome-de-novo-sequencing",
    shouldNormalize: true,
  });
  assert.deepEqual(resolution.unknown, {
    selectionKey: "animal-and-cell:genome-resequencing",
    shouldNormalize: true,
  });
  assert.deepEqual(resolution.repeated, {
    selectionKey: "animal-and-cell:genome-resequencing",
    shouldNormalize: true,
  });
  assert.equal(resolution.noReady, "plant-and-cell:single-cell-sequencing");
  assert.equal(resolution.noRows, null);
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

test("service technologies locale maps are exhaustive and preserve Japanese page copy", () => {
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
  assert.equal((zh.match(/kind: "ready"/g) ?? []).length, 13);
  assert.match(ja, /metadata: \{\s+title: "サービス関連技術 \| 東方純一",\s+description: "ゲノムシーケンシング技術の応用およびその他の分子間相互作用機構と発現制御",\s+\}/);
  assert.match(ja, /title: "サービス関連技術"/);
  assert.match(ja, /intro: "ゲノムシーケンシング技術の応用およびその他の分子間相互作用機構と発現制御"/);
  assert.match(ja, /optionGroupLabel: "シーケンシングの選択肢"/);
  assert.match(ja, /categoryLabelMode: "source"/);
  assert.match(ja, /placeholderLabel: "準備中"/);
  assert.match(ja, /label: "お問い合わせ"/);
  assert.equal((ja.match(/kind: "ready"/g) ?? []).length, 13);
  assert.doesNotMatch(ja, /kind: "pending"/);
  assert.doesNotMatch(ja, /暂定/);
});

test("service technologies maps each supplied Japanese asset to the matching ready items", () => {
  const ja = readSource("src/content/service-technologies/ja.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");
  const assets = [
    ["absolute-quantification-microbial-diversity-sequencing-ja", 1037073, "5dd23ffd1910e17593681cb714b07d1e09d37f5c635926d0255a086befa80901"],
    ["dap-seq-technical-service-ja", 769040, "540364fbd83ae90025c4feffb30fa3ea3a2b1f9a077df4cebf80013547501bdd"],
    ["genome-de-novo-sequencing-ja", 851820, "7ec16544567b2df778263637109a2393d64b66bd4bb4a5b98eb9ef1146fd2ba2"],
    ["genome-resequencing-ja", 613454, "f83be915da06f69a98140ff0c3c8457f5159e31910007868390529e5852f7d31"],
    ["marine-microbiology-research-ja", 959124, "1a024b5047c7ea2940d87fe2eb6f7440117a09f3e19f1350900f9d5eacc4cbce"],
    ["multidimensional-analysis-platform-ja", 799257, "33b99a51fd44aa704713e234e6df9d8a90a49b31da87fdbc086ddb08a2200376"],
    ["multidimensional-analysis-platform-interactions-ja", 835814, "0ff8b694371969d91761d9398c70c1e7c24019e84908d7d04e65d6136d2cf041"],
    ["multidimensional-analysis-platform-multiomics-ja", 1001580, "6ee44cf9f877add051ec2cff76bf12626a750a75441de4e1f2e7de4c9e0d0284"],
    ["single-cell-sequencing-ja", 825630, "ed4698f4559cb221d5cd0a7be98e944c571cc38b48198f6f28d522c2a9865b33"],
    ["whole-transcriptome-sequencing-ja", 851226, "b54f020e816a8b969a3b76a82fa5f5ca6e81c5c8801ea352f7f8782bedcf50c9"],
  ];

  for (const [assetId, size, sha256] of assets) {
    const asset = new URL(`../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/${assetId}.jpg`, import.meta.url);
    const bytes = readFileSync(asset);

    assert.equal(statSync(asset).size, size);
    assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
    assert.equal(createHash("sha256").update(bytes).digest("hex"), sha256);
    assert.match(page, new RegExp(`"${assetId}":`));
  }

  for (const [itemId, assetId] of [
    ["absolute-quantification-microbial-diversity-sequencing", "absolute-quantification-microbial-diversity-sequencing-ja"],
    ["dap-seq-technical-service", "dap-seq-technical-service-ja"],
    ["genome-de-novo-sequencing", "genome-de-novo-sequencing-ja"],
    ["genome-resequencing", "genome-resequencing-ja"],
    ["marine-microbiology-research", "marine-microbiology-research-ja"],
    ["single-cell-sequencing", "single-cell-sequencing-ja"],
    ["whole-transcriptome-sequencing", "whole-transcriptome-sequencing-ja"],
  ]) {
    assert.match(ja, new RegExp(`"${itemId}": \\{\\s+kind: "ready",\\s+assetId: "${assetId}"`));
  }

  for (const [assetId, itemIdsForAsset] of [
    ["multidimensional-analysis-platform-ja", ["epigenetics-service", "mrna-in-situ-hybridization"]],
    ["multidimensional-analysis-platform-interactions-ja", ["yeast-two-hybrid", "spr-molecular-interaction-research"]],
    ["multidimensional-analysis-platform-multiomics-ja", ["proteomics-and-metabolomics", "multiomics-combined-analysis"]],
  ]) {
    for (const itemId of itemIdsForAsset) {
      assert.match(ja, new RegExp(`"${itemId}": \\{\\s+kind: "ready",\\s+assetId: "${assetId}"`));
    }
  }
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
  assert.match(
    page,
    /import singleCellSequencingZh from "\.\/\_assets\/single-cell-sequencing-zh\.jpg"/,
  );
  assert.match(page, /"single-cell-sequencing-zh":\s*singleCellSequencingZh/);
});

test("service technologies maps all genome de novo sequencing rows to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/genome-de-novo-sequencing-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const genomeZh = readSource("src/content/genome-sequencing/zh.ts");
  const zh = readSource("src/content/service-technologies/zh.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 851520);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "d7f090f0c9e18793455c1bb2374ef400063ffb062f6f98e8b757f848b48405a1",
  );
  assert.equal((genomeZh.match(/id: "genome-de-novo-sequencing"/g) ?? []).length, 3);
  assert.match(
    zh,
    /"genome-de-novo-sequencing": \{\s+kind: "ready",\s+assetId: "genome-de-novo-sequencing-zh",\s+alt: "基因组de novo测序技术路线图"/,
  );
  assert.match(
    page,
    /import genomeDeNovoSequencingZh from "\.\/\_assets\/genome-de-novo-sequencing-zh\.jpg"/,
  );
  assert.match(page, /"genome-de-novo-sequencing-zh":\s*genomeDeNovoSequencingZh/);
});

test("service technologies maps all DAP-seq technical service rows to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/dap-seq-technical-service-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const genomeZh = readSource("src/content/genome-sequencing/zh.ts");
  const zh = readSource("src/content/service-technologies/zh.ts");
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");

  assert.equal(statSync(asset).size, 743651);
  assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff");
  assert.equal(
    createHash("sha256").update(bytes).digest("hex"),
    "8fd6d8284749685b02a877d7f3e4cb7d02717a1e6921b990aa9517f39f6b9444",
  );
  assert.equal((genomeZh.match(/id: "dap-seq-technical-service"/g) ?? []).length, 3);
  assert.match(
    zh,
    /"dap-seq-technical-service": \{\s+kind: "ready",\s+assetId: "dap-seq-technical-service-zh",\s+alt: "DAP-seq技术服务路线图"/,
  );
  assert.match(
    page,
    /import dapSeqTechnicalServiceZh from "\.\/\_assets\/dap-seq-technical-service-zh\.jpg"/,
  );
  assert.match(page, /"dap-seq-technical-service-zh":\s*dapSeqTechnicalServiceZh/);
});

test("service technologies maps whole-transcriptome sequencing to the approved Chinese image", () => {
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/whole-transcriptome-sequencing-zh.jpg", import.meta.url);
  const bytes = readFileSync(asset);
  const zh = readSource("src/content/service-technologies/zh.ts");
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
  assert.match(
    page,
    /import wholeTranscriptomeSequencingZh from "\.\/\_assets\/whole-transcriptome-sequencing-zh\.jpg"/,
  );
  assert.match(
    page,
    /"whole-transcriptome-sequencing-zh":\s*wholeTranscriptomeSequencingZh/,
  );
});
