import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const itemIds = [
  "single-cell-sequencing", "genome-de-novo-sequencing", "absolute-quantification-microbial-diversity-sequencing",
  "dap-seq-technical-service", "genome-resequencing", "whole-transcriptome-sequencing",
  "marine-microbiology-research", "epigenetics-service", "mrna-in-situ-hybridization", "yeast-two-hybrid",
  "spr-molecular-interaction-research", "proteomics-and-metabolomics", "multiomics-combined-analysis",
];

const assetFixtures = [
  ["zh", "absolute-quantification-microbial-diversity-sequencing-zh", 873987, "ff16ee454c3b4a0f65de785923552c6c37bb3045b05d477831c18b8a7fa925a9"],
  ["zh", "dap-seq-technical-service-zh", 743651, "8fd6d8284749685b02a877d7f3e4cb7d02717a1e6921b990aa9517f39f6b9444"],
  ["zh", "genome-de-novo-sequencing-zh", 851520, "d7f090f0c9e18793455c1bb2374ef400063ffb062f6f98e8b757f848b48405a1"],
  ["zh", "genome-resequencing-zh", 613158, "8477d88aafdc9c4144ee5098873d6977d714f6bee93b9e8880ff0003970de5fa"],
  ["zh", "marine-microbiology-research-zh", 888372, "8c6be642cf657b2252a92c85058d876d10e8d227b50cc3db465101e7a0dd7011"],
  ["zh", "multidimensional-analysis-platform-zh", 799557, "678261e9b09a0787658f6f9bbce07092540e6bbf995df540a33711500d25a65a"],
  ["zh", "multidimensional-analysis-platform-interactions-zh", 835814, "df2864c883d5315762a5945d81acbe62e4bd139ea7fde31ef09f515347cb7224"],
  ["zh", "multidimensional-analysis-platform-multiomics-zh", 915736, "076b9556899d67823199db20dac883d951349c36e768968f1ada3033297b6541"],
  ["zh", "single-cell-sequencing-zh", 1041141, "b7b98188cfb2bb6c3de37ef27c6fccd2538812d1e861c532cc7686f85bcf63c7"],
  ["zh", "whole-transcriptome-sequencing-zh", 851526, "fdb94fcc68d8804c3c8e3c4842fb420f609dd64d3629b947fa57fd9e8547a1e8"],
  ["ja", "absolute-quantification-microbial-diversity-sequencing-ja", 1037073, "5dd23ffd1910e17593681cb714b07d1e09d37f5c635926d0255a086befa80901"],
  ["ja", "dap-seq-technical-service-ja", 769040, "540364fbd83ae90025c4feffb30fa3ea3a2b1f9a077df4cebf80013547501bdd"],
  ["ja", "genome-de-novo-sequencing-ja", 851820, "7ec16544567b2df778263637109a2393d64b66bd4bb4a5b98eb9ef1146fd2ba2"],
  ["ja", "genome-resequencing-ja", 613454, "f83be915da06f69a98140ff0c3c8457f5159e31910007868390529e5852f7d31"],
  ["ja", "marine-microbiology-research-v2-ja", 951338, "1506a2d05700632bc482083c36b2a4823d8956ee367036331ab2b0b20a92c5e8"],
  ["ja", "multidimensional-analysis-platform-ja", 799257, "33b99a51fd44aa704713e234e6df9d8a90a49b31da87fdbc086ddb08a2200376"],
  ["ja", "multidimensional-analysis-platform-interactions-ja", 835814, "0ff8b694371969d91761d9398c70c1e7c24019e84908d7d04e65d6136d2cf041"],
  ["ja", "multidimensional-analysis-platform-multiomics-ja", 1001580, "6ee44cf9f877add051ec2cff76bf12626a750a75441de4e1f2e7de4c9e0d0284"],
  ["ja", "single-cell-sequencing-ja", 825630, "ed4698f4559cb221d5cd0a7be98e944c571cc38b48198f6f28d522c2a9865b33"],
  ["ja", "whole-transcriptome-sequencing-ja", 851226, "b54f020e816a8b969a3b76a82fa5f5ca6e81c5c8801ea352f7f8782bedcf50c9"],
];

const displayFixtures = [
  ["zh", "single-cell-sequencing", "single-cell-sequencing-zh"], ["zh", "genome-de-novo-sequencing", "genome-de-novo-sequencing-zh"],
  ["zh", "absolute-quantification-microbial-diversity-sequencing", "absolute-quantification-microbial-diversity-sequencing-zh"], ["zh", "dap-seq-technical-service", "dap-seq-technical-service-zh"],
  ["zh", "genome-resequencing", "genome-resequencing-zh"], ["zh", "whole-transcriptome-sequencing", "whole-transcriptome-sequencing-zh"],
  ["zh", "marine-microbiology-research", "marine-microbiology-research-zh"], ["zh", "epigenetics-service", "multidimensional-analysis-platform-zh"],
  ["zh", "mrna-in-situ-hybridization", "multidimensional-analysis-platform-zh"], ["zh", "yeast-two-hybrid", "multidimensional-analysis-platform-interactions-zh"],
  ["zh", "spr-molecular-interaction-research", "multidimensional-analysis-platform-interactions-zh"], ["zh", "proteomics-and-metabolomics", "multidimensional-analysis-platform-multiomics-zh"],
  ["zh", "multiomics-combined-analysis", "multidimensional-analysis-platform-multiomics-zh"],
  ["ja", "single-cell-sequencing", "single-cell-sequencing-ja"], ["ja", "genome-de-novo-sequencing", "genome-de-novo-sequencing-ja"],
  ["ja", "absolute-quantification-microbial-diversity-sequencing", "absolute-quantification-microbial-diversity-sequencing-ja"], ["ja", "dap-seq-technical-service", "dap-seq-technical-service-ja"],
  ["ja", "genome-resequencing", "genome-resequencing-ja"], ["ja", "whole-transcriptome-sequencing", "whole-transcriptome-sequencing-ja"],
  ["ja", "marine-microbiology-research", "marine-microbiology-research-v2-ja"], ["ja", "epigenetics-service", "multidimensional-analysis-platform-ja"],
  ["ja", "mrna-in-situ-hybridization", "multidimensional-analysis-platform-ja"], ["ja", "yeast-two-hybrid", "multidimensional-analysis-platform-interactions-ja"],
  ["ja", "spr-molecular-interaction-research", "multidimensional-analysis-platform-interactions-ja"], ["ja", "proteomics-and-metabolomics", "multidimensional-analysis-platform-multiomics-ja"],
  ["ja", "multiomics-combined-analysis", "multidimensional-analysis-platform-multiomics-ja"],
];

test("service technologies preserves its component boundary and data contract", () => {
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");
  const card = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesBodyCard.tsx");
  const selection = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologySelection.ts");
  assert.match(page, /GenomeSequencingBodyFrame contact=\{content\.contact\}/);
  assert.match(page, /<ServiceTechnologiesBodyCard/);
  assert.match(page, /assets=\{serviceTechnologyAssetsByLocale\[lang\]\}/);
  assert.match(page, /preserveLocaleSearchParamKeys=\{\["technology"\]\}/);
  assert.match(card, /^"use client";/);
  assert.match(card, /useState<ServiceTechnologySelectionKey \| null>/);
  assert.match(selection, /displayByItemId\[exactRow\.itemId\]\.kind !== "ready"/);
  for (const id of itemIds) assert.match(readSource("src/content/genome-sequencing/types.ts"), new RegExp(`"${id}"`));
});

test("service technologies synchronizes only validated technology selections", () => {
  const card = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesBodyCard.tsx");
  const selection = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologySelection.ts");
  const sync = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologySelectionQuerySync.tsx");
  assert.match(selection, /const exactRow = rows\.find/);
  assert.match(selection, /parts\.length !== 2/);
  assert.doesNotMatch(selection, /as ServiceTechnologySelectionKey/);
  assert.match(card, /internalQueryEcho/);
  assert.match(card, /router\.replace\(nextUrl, \{ scroll: false \}\)/);
  assert.match(sync, /consumeInternalEcho\(lang, values\)/);
  assert.match(sync, /resolveRequestedServiceTechnologySelection/);
  assert.match(sync, /router\.replace\(url, \{ scroll: false \}\)/);
});

test("service technologies selection resolver handles default, fallback, and invalid query states", () => {
  const moduleUrl = new URL("../src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologySelection.ts", import.meta.url).href;
  const script = `import { resolveDefaultServiceTechnologySelection, resolveRequestedServiceTechnologySelection } from ${JSON.stringify(moduleUrl)}; const rows = [{ categoryId: "plant-and-cell", itemId: "single-cell-sequencing", selectionKey: "plant-and-cell:single-cell-sequencing" }, { categoryId: "animal-and-cell", itemId: "genome-resequencing", selectionKey: "animal-and-cell:genome-resequencing" }, { categoryId: "multidimensional-analysis-platform", itemId: "genome-de-novo-sequencing", selectionKey: "multidimensional-analysis-platform:genome-de-novo-sequencing" }]; const display = { "single-cell-sequencing": { kind: "pending", label: "Pending" }, "genome-resequencing": { kind: "ready", assetId: "test", alt: "Ready" }, "genome-de-novo-sequencing": { kind: "ready", assetId: "test", alt: "Moved" } }; const defaultKey = resolveDefaultServiceTechnologySelection(rows, display); console.log(JSON.stringify({ defaultKey, exact: resolveRequestedServiceTechnologySelection(["multidimensional-analysis-platform:genome-de-novo-sequencing"], rows, display, defaultKey), moved: resolveRequestedServiceTechnologySelection(["plant-and-cell:genome-de-novo-sequencing"], rows, display, defaultKey), pending: resolveRequestedServiceTechnologySelection(["plant-and-cell:single-cell-sequencing"], rows, display, defaultKey), unknown: resolveRequestedServiceTechnologySelection(["plant-and-cell:unknown"], rows, display, defaultKey), repeated: resolveRequestedServiceTechnologySelection(["animal-and-cell:genome-resequencing", "animal-and-cell:genome-resequencing"], rows, display, defaultKey), noReady: resolveDefaultServiceTechnologySelection(rows.slice(0, 1), display), noRows: resolveDefaultServiceTechnologySelection([], display) }));`;
  const result = spawnSync(process.execPath, ["--no-warnings", "--experimental-strip-types", "--input-type=module", "--eval", script], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const resolution = JSON.parse(result.stdout);
  assert.equal(resolution.defaultKey, "animal-and-cell:genome-resequencing");
  assert.deepEqual(resolution.exact, { selectionKey: "multidimensional-analysis-platform:genome-de-novo-sequencing", shouldNormalize: false });
  assert.deepEqual(resolution.moved, { selectionKey: "multidimensional-analysis-platform:genome-de-novo-sequencing", shouldNormalize: true });
  assert.deepEqual(resolution.pending, { selectionKey: "animal-and-cell:genome-resequencing", shouldNormalize: true });
  assert.deepEqual(resolution.unknown, { selectionKey: "animal-and-cell:genome-resequencing", shouldNormalize: true });
  assert.deepEqual(resolution.repeated, { selectionKey: "animal-and-cell:genome-resequencing", shouldNormalize: true });
  assert.equal(resolution.noReady, "plant-and-cell:single-cell-sequencing");
  assert.equal(resolution.noRows, null);
});

test("service technologies card retains accessible display semantics", () => {
  const card = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesBodyCard.tsx");
  for (const pattern of [/<button/, /type="button"/, /aria-controls=\{detailsRegionId\}/, /aria-pressed=\{isSelected\}/, /focus-visible:outline-2/, /role="status"/, /aria-live="polite"/, /role="region"/, /alt=\{display\.alt\}/, /display\?\.kind === "pending"/]) assert.match(card, pattern);
  assert.doesNotMatch(card, /<a[\s>]/);
});

test("service technologies locale maps preserve approved Japanese copy and complete display mappings", () => {
  const contentByLocale = { zh: readSource("src/content/service-technologies/zh.ts"), ja: readSource("src/content/service-technologies/ja.ts") };
  assert.match(contentByLocale.ja, /title: "サービス関連技術 \| 東方純一"/);
  assert.match(contentByLocale.ja, /placeholderLabel: "準備中"/);
  assert.doesNotMatch(contentByLocale.ja, /暂定/);
  for (const [locale, itemId, assetId] of displayFixtures) assert.match(contentByLocale[locale], new RegExp(`"${itemId}": \\{\\s+kind: "ready",\\s+assetId: "${assetId}"`), `${locale}/${itemId}`);
});

test("service technologies preserves all approved image bytes and page asset wiring", () => {
  const page = readSource("src/app/[lang]/services/genome-sequencing/service-technologies/ServiceTechnologiesPage.tsx");
  for (const [locale, assetId, size, sha256] of assetFixtures) {
    const asset = new URL(`../src/app/[lang]/services/genome-sequencing/service-technologies/_assets/${assetId}.jpg`, import.meta.url);
    const bytes = readFileSync(asset);
    assert.equal(statSync(asset).size, size, `${locale}/${assetId} byte size`);
    assert.equal(bytes.subarray(0, 3).toString("hex"), "ffd8ff", `${locale}/${assetId} JPEG magic`);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), sha256, `${locale}/${assetId} SHA-256`);
    assert.match(page, new RegExp(`"${assetId}":`), `${locale}/${assetId} page asset map`);
  }
});
