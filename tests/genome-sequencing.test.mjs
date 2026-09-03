import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("genome sequencing content keeps the approved Chinese copy and option order", () => {
  const content = readSource("src/content/genome-sequencing/zh.ts");

  assert.match(content, /title: "基因组测序"/);
  assert.match(content, /intro: "专注于动植物和微生物领域的二代\/三代基因组及转录组测序相关服务"/);
  assert.deepEqual(
    [...content.matchAll(/\{ id: "([^"]+)", label: "([^"]+)" \}/g)].map(([, id, label]) => ({ id, label })),
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

  assert.match(options, /<button[\s\S]*disabled[\s\S]*type="button"/);
  assert.doesNotMatch(options, /aria-(?:controls|pressed|selected)|onClick|useState|useRouter|searchParams/);
});

test("genome sequencing uses the shared service path for its public entry points", () => {
  const servicePaths = readSource("src/lib/service-paths.ts");
  const landing = readSource("src/app/[lang]/LandingPage.tsx");
  const footer = readSource("src/components/SiteFooter.tsx");

  assert.match(servicePaths, /"genome-sequencing": "\/services\/genome-sequencing"/);
  assert.match(landing, /"genome-sequencing": servicePaths\["genome-sequencing"\]/);
  assert.match(footer, /"genome-sequencing": servicePaths\["genome-sequencing"\]/);
});
