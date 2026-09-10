import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("other business service panel labels keep title and qualifier as separate content fields", () => {
  const content = readSource("src/content/other-business-services/zh.ts");
  const page = readSource("src/app/[lang]/services/other-business-services/OtherBusinessServicesPage.tsx");

  assert.match(content, /title: "Business Consulting", qualifier: "CH\/EN"/);
  assert.match(content, /title: "Self-Coaching", qualifier: "WorkShop"/);
  assert.match(content, /title: "Coaching", qualifier: "Leadership Training"/);
  assert.doesNotMatch(content, /Self- Coaching/);
  assert.doesNotMatch(content.slice(content.indexOf("panels:")), /label: "/);
  assert.match(page, /<span className="block">\{panel\.title\}<\/span>/);
  assert.match(page, /panel\.qualifier \? <span className="block">\{panel\.qualifier\}<\/span> : null/);
  assert.doesNotMatch(page, /whitespace-pre-line/);
});
