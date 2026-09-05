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

  assert.match(content, /label: "咨询请联系："/);
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

test("Japanese genome sequencing content is translated and structurally equivalent", () => {
  const content = readSource("src/content/genome-sequencing/ja.ts");
  const chineseContent = readSource("src/content/genome-sequencing/zh.ts");

  assert.equal((content.match(/暂定/g) ?? []).length, 0);
  assert.match(content, /title: "ゲノムシーケンシング \| 東方純一"/);
  assert.match(content, /description: "動植物および微生物分野における第二・第三世代ゲノムおよびトランスクリプトームシーケンシング関連サービスに注力しています。"/);
  assert.match(content, /intro: "動植物および微生物分野における第二・第三世代ゲノムおよびトランスクリプトームシーケンシング関連サービスに注力しています。"/);
  assert.match(content, /optionGroupLabel: "シーケンシングの選択肢"/);
  assert.match(content, /technicalRouteLabel: "技術フロー\+"/);
  assert.match(content, /label: "お問い合わせ"/);
  assert.match(content, /emails: \["market@easternpurity\.com", "info@shanghaigenomics\.com"\]/);
  assert.deepEqual(
    [...content.matchAll(/id: "(plant-and-cell|animal-and-cell|microorganism|multidimensional-analysis-platform)", label: "([^"]+)"/g)].map(([, id, label]) => ({ id, label })),
    [
      { id: "plant-and-cell", label: "植物・細胞" },
      { id: "animal-and-cell", label: "動物・細胞" },
      { id: "microorganism", label: "微生物" },
      { id: "multidimensional-analysis-platform", label: "多次元解析プラットフォーム" },
      { id: "plant-and-cell", label: "植物・細胞" },
      { id: "animal-and-cell", label: "動物・細胞" },
      { id: "microorganism", label: "微生物" },
      { id: "multidimensional-analysis-platform", label: "多次元解析プラットフォーム" },
    ],
  );
  assert.match(content, /id: "genome-de-novo-sequencing", label: "de novoゲノムシーケンシング"/);
  assert.equal((content.match(/de novoゲノムシーケンシング/g) ?? []).length, 3);
  assert.match(content, /id: "whole-transcriptome-sequencing", label: "全トランスクリプトームシーケンシング"/);
  assert.match(content, /title: "お客様による発表論文"/);
  assert.match(content, /title: "シーケンシング中核チーム"/);
  assert.match(content, /上海睿星生物技術有限公司のシーケンシング中核チームは、20年以上にわたる第二世代ゲノムシーケンシングの経験を有しています。特に植物学および微生物学の分野では、中国科学院分子植物科学卓越イノベーションセンターと長年にわたり協力し、これらの分野におけるシーケンシングとバイオインフォマティクス解析の豊富な経験を蓄積してきました。/);
  assert.match(content, /2つの主要なシーケンシングプラットフォームであるIlluminaとBGIにより、さまざまなお客様のニーズに対応できます。また、経験豊富なバイオインフォマティクス解析力を活かし、お客様一人ひとりに最適なシーケンシングサービスを提供できます。現在、当社では計画に沿って、一部の技術サービスの日本市場への展開を進めています。/);
  assert.doesNotMatch(content, /ゲノムde novoシーケンシング|各分野|バイオインフォマティクス解析チーム/);
  assert.deepEqual(
    [...content.matchAll(/\{ id: "([^"]+)", citation: "([^"]+)", title: "([^"]+)" \}/g)].map(([, id, citation, title]) => [id, citation, title]),
    [...chineseContent.matchAll(/\{ id: "([^"]+)", citation: "([^"]+)", title: "([^"]+)" \}/g)].map(([, id, citation, title]) => [id, citation, title]),
  );
});

test("genome sequencing body is static, structured, and uses the team image", () => {
  const page = readSource("src/app/[lang]/services/genome-sequencing/GenomeSequencingPage.tsx");
  const body = readSource("src/app/[lang]/services/genome-sequencing/GenomeSequencingBody.tsx");
  const types = readSource("src/content/genome-sequencing/types.ts");
  const globals = readSource("src/app/globals.css");
  const asset = new URL("../src/app/[lang]/services/genome-sequencing/_assets/genome-sequencing-team.jpg", import.meta.url);

  assert.match(page, /GenomeSequencingOptions/);
  assert.match(page, /<GenomeSequencingBody\s+body=\{t\.body\}[\s\S]*?technicalRoutePath=\{`\/\$\{lang\}\$\{genomeSequencingServiceTechnologiesPath\}`\}[\s\S]*?teamImage=\{genomeSequencingTeam\}/);
  assert.match(body, /<GenomeSequencingBodyFrame contact=\{body\.contact\}>/);
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
  assert.match(body, /<section className="row-span-2 grid grid-rows-subgrid first:\[&>div\]:border-l-0 first:\[&>div\]:pl-0 first:\[&>button\]:pl-0 max-page:odd:\[&>div\]:border-l-0 max-page:odd:\[&>div\]:pl-0 max-page:odd:\[&>button\]:pl-0"[\s\S]*?<div className="min-w-0 border-l border-genome-sequencing-accent pl-6">[\s\S]*?<\/div>\s*<Link className="justify-self-start pl-6 text-left text-service-body text-genome-sequencing-accent/);
  assert.doesNotMatch(body, /col-span-full|mt-12 grid grid-cols-4 max-page:grid-cols-2 max-compact:grid-cols-1/);
  assert.match(body, /<Image alt="" aria-hidden="true" className="object-cover object-center" fill loading="lazy" sizes=/);
  assert.match(body, /<div className="relative z-10 w-full min-w-0 hero-copy:max-w-1\/3">\s*<h2[\s\S]*?\{body\.team\.title\}[\s\S]*?body\.team\.paragraphs\.map/);
  assert.match(types, /technicalRouteLabel: string;/);
  assert.match(readSource("src/content/genome-sequencing/zh.ts"), /technicalRouteLabel: "技术路线\+"/);
  assert.match(body, /<Link className=.*href=\{technicalRoutePath\}>\{body\.technicalRouteLabel\}<\/Link>/);
  assert.doesNotMatch(body, /技术规格|技术路线这里有链接到同一个子页面|use client|useState|useEffect|useRouter|searchParams|onClick|aria-(?:controls|pressed|selected)|<form/);
  assert.doesNotMatch(body, /max-compact:max-w-none|max-w-1\/3 max-compact|fixed|h-\[|min-h-|max-h-|nowrap|truncate|lang ===|bg-linear-to-r|from-ui-section|via-ui-section|to-ui-section|max-compact:bg-none/);
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
