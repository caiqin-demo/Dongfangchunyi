# Sprint 1 Landing Page Acceptance Archive

## Acceptance Plan

以下计划基于主仓库只读核验结果制定。本轮未修改代码、未安装依赖、未 commit、未 push；检查结束后 Git 工作区仍然干净。

## 一、已复核的当前基线

- 当前 checkout 是主仓库 `main`，与 `origin/main` 对齐。
- [AGENTS.md](./AGENTS.md) 要求 Node.js 24.x，并要求 `lint`、`typecheck`、默认 `build` 全部通过。
- [package.json](./package.json)：
  - 声明 Node `24.x`、npm `11.17.0`。
  - 只有 `lint`、`typecheck`、`build`，没有测试、视觉或性能脚本。
  - 实际锁定安装的是 Next.js 16.3.1、React 19.2.8、Tailwind CSS 4.3.3。
- 当前执行环境实际为 Node `22.23.1`、npm `12.0.2`，与仓库声明不一致。
- [README.md](./README.md) 仍写 Node 22.x，且称尚未安装依赖，与当前事实及 AGENTS.md 不一致。
- 实际命令：
  - `npm run lint`：通过。
  - `npm run typecheck`：通过。
  - `npm run build`：失败。Turbopack 在 Tailwind/PostCSS 处理过程中尝试创建进程并绑定端口，收到 `Operation not permitted`。
  - `npx next build --webpack`：通过。
- 没有 `.github/workflows`，没有 Vitest、Playwright、`@axe-core/playwright`、Lighthouse 配置或截图基准。
- 锁文件中的 `axe-core` 只是 `eslint-plugin-jsx-a11y` 的传递依赖，不能用于浏览器 axe 验收；`@playwright/test` 未安装。
- 页面实现集中在 [src/app/page.tsx](./src/app/page.tsx)，语言由 `?lang=zh|ja` 选择。
- 根布局 [src/app/layout.tsx](./src/app/layout.tsx) 的 `<html lang>` 固定为 `zh-CN`，日文页面仅在 `<main>` 上设 `lang="ja"`。这应作为语言语义验收项明确处理。
- 仓库中没有 PDF 或整页设计参考图，只有页面图片素材。因此批准视觉基准前，需要用户提供并标记参考文件版本。

---

# 二、验收目标、范围与通过定义

## 目标

建立一条可重复执行、可在 PR 中审查、能够区分代码错误与设计判断的 Landing Page 验收链：

1. 代码和类型安全。
2. 默认生产构建真实可部署。
3. 中日文功能、内容和内部链接正确。
4. 三类关键视口布局不溢出、不遮挡、不丢失内容。
5. WCAG 相关自动检查和人工无障碍检查均有记录。
6. 视觉变化必须通过固定环境截图差异和人工设计审批。
7. 性能有可量化预算，但不把实验室数据冒充真实用户数据。
8. CI 保存足以定位失败的截图、diff、trace 和报告。

## 首期范围

页面：

- `/?lang=zh`
- `/?lang=ja`

区域：

- 导航及语言切换
- Hero
- ABOUT US
- 核心产品
- 核心服务
- Footer

视口：

- 桌面：1440×900
- 窄桌面：1024×768
- 移动端：390×844
- 另做 961/960、641/640 附近的响应式边界检查，但首期不必全部生成 golden screenshot。

## 非目标

- 本轮不修复默认构建问题。
- 不重新设计页面或重写内容。
- 不以自动测试决定日文翻译、品牌措辞、法律声明或视觉美感是否合适。
- 首期不做高并发负载、安全渗透、真实设备农场或全浏览器视觉像素比较。
- 不把 Webpack 构建成功视为默认生产构建已经合格。

## 通过/失败定义

PR 只有同时满足以下条件才可判定通过：

- lint、typecheck、默认 `npm run build` 均为零退出码。
- Vitest 和首期 Playwright 必测矩阵全部通过。
- axe 指定 WCAG A/AA 规则无未批准违规；`incomplete` 项完成人工核查。
- 内部链接、语言切换和页面锚点全部有效。
- 没有非预期横向滚动、文字截断、区域重叠或不可见 CTA。
- golden screenshot 无未批准差异。
- Lighthouse 达到约定预算。
- 用户完成设计基准记录，状态为 `Accept`，或存在明确、非阻断的 `Accept with notes`。

以下不得用 `Accept with notes` 绕过：

- 默认构建失败
- 严重无障碍问题
- 无法操作的 CTA
- 断链或错误语言内容
- 内容被遮挡、截断或不可访问
- 未解释的截图差异

---

# 三、各验收手段的责任边界

| 手段 | 自动测试能证明什么 | 不能证明、必须人工判断什么 |
|---|---|---|
| ESLint | Next/React 规则、明显代码问题、部分静态无障碍问题 | 页面是否好看、交互是否符合设计意图 |
| TypeScript | 类型关系、API 使用和 JSX 类型正确 | 运行时布局、真实浏览器行为 |
| 默认 Next build | 默认生产工具链能编译、生成路由并符合部署入口 | 页面视觉和用户操作是否正确 |
| Vitest | 语言选择、内容映射、纯函数和小组件契约稳定 | 完整页面布局、浏览器滚动和字体渲染 |
| Playwright | 浏览器内文本、链接、点击、键盘、锚点和 DOM 状态 | 翻译质量、品牌表达、主观视觉一致性 |
| 视觉回归 | 固定环境下像素输出没有意外变化 | 差异是改善还是退化、是否符合参考设计 |
| Responsive | 指定视口无横向溢出、遮挡、丢失、错误换列 | 所有真实设备上体验都完美 |
| axe | 可机器检测的语义、名称、对比度和部分 ARIA 问题 | 合理阅读顺序、文案可理解性、屏幕阅读器体验 |
| Lighthouse | 固定实验室环境下的性能趋势和预算 | 真实地区、网络、设备上的现场 Core Web Vitals |
| 链接/内容检查 | href、锚点、状态码、批准文案是否匹配 | 文案事实、翻译、版权年份和法律准确性 |

---

# 四、前置事项及实施顺序

## 阶段 0：先恢复可信的生产基线

在引入截图和性能门槛前完成：

1. 统一 Node/npm：
   - 本地和 CI 使用 Node 24.x。
   - 决定是否严格固定 npm 11.17.0。
   - 修正 README 与 package.json/AGENTS.md 的矛盾。
2. 在 Node 24 的标准 CI 环境复现默认 Turbopack 构建。
3. 判断端口错误属于：
   - 当前受限执行环境特有问题；
   - Tailwind/PostCSS/Turbopack 兼容问题；
   - 项目配置问题。
4. 默认 `npm run build` 必须成为通过项。
5. `next build --webpack` 只保留为诊断对照，不作为最终门槛。
6. 收集并编号设计参考：PDF、参考图、设计稿版本、批准日期。

原因：如果默认构建、运行时版本和设计依据都不稳定，后续截图、性能结果和 CI 失败都缺少可信基准。

## 阶段 1：静态门槛与单元测试

- 固化 lint、typecheck、默认 build。
- 引入 Vitest。
- 优先测试语言解析、内容映射和可复用的纯逻辑。
- 不为了单元测试强行渲染整个异步 Server Component。

## 阶段 2：Chromium 功能与响应式验收

- 在 production server 上运行 Playwright。
- 覆盖中日文 × 三种视口。
- 先确保 DOM、链接、布局基本正确，再建立截图。

## 阶段 3：Accessibility

- axe 覆盖六个首期组合。
- 加入键盘、focus、语言、缩放和点击目标检查。
- 完成人工屏幕阅读器/视觉检查记录。

## 阶段 4：人工设计确认与视觉基准

- 用户先批准参考设计及容许差异。
- 从固定 CI 环境生成第一批截图。
- 人工批准后才提交 golden screenshots。

原因：如果先提交截图再确认设计，错误页面也可能被“合法化”为基准。

## 阶段 5：性能及跨浏览器扩展

- 页面行为稳定后再定性能预算，避免用暂时布局建立错误基线。
- WebKit/Firefox 首期只做关键功能和无障碍 smoke；不做全量像素基准。

## 阶段 6：CI 强制与分支保护

- 先观察一到两个 PR 的稳定性。
- 再把稳定检查设为 required checks。
- 外部链接检查若存在网络波动，可与内部链接阻断门槛分开。

---

# 五、建议依赖、配置、脚本与目录

## 建议 devDependencies

首期：

- `vitest`
- `@vitest/coverage-v8`
- `jsdom`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- `@playwright/test`
- `@axe-core/playwright`
- `@lhci/cli`

不需要额外安装截图比较库；Playwright 自带 screenshot snapshot 与 diff。

所有版本应写入 lockfile。Playwright npm 版本、浏览器镜像版本和 CI 镜像必须匹配。

## 建议配置文件

```text
vitest.config.ts
vitest.setup.ts
playwright.config.ts
lighthouserc.cjs
.github/workflows/quality.yml
```

建议目录：

```text
tests/
  unit/
    locale.test.ts
    content.test.ts
  e2e/
    smoke.spec.ts
    navigation.spec.ts
    content.spec.ts
    responsive.spec.ts
    accessibility.spec.ts
    visual.spec.ts
    links.spec.ts
    fixtures/
      approved-content.ts
    visual.spec.ts-snapshots/
  manual/
    design-acceptance-template.md
    accessibility-checklist.md
```

生成物：

```text
coverage/
test-results/
playwright-report/
blob-report/
.lighthouseci/
```

这些生成物应加入 `.gitignore`；approved golden screenshot 目录必须保持可跟踪，不能被宽泛 ignore 规则误伤。

## 建议 npm scripts

```json
{
  "test:unit": "vitest run",
  "test:unit:watch": "vitest",
  "test:coverage": "vitest run --coverage",
  "test:e2e": "playwright test",
  "test:e2e:smoke": "playwright test tests/e2e/smoke.spec.ts",
  "test:a11y": "playwright test tests/e2e/accessibility.spec.ts",
  "test:visual": "playwright test tests/e2e/visual.spec.ts",
  "test:visual:update": "playwright test tests/e2e/visual.spec.ts --update-snapshots",
  "test:perf": "lhci autorun",
  "qa": "npm run lint && npm run typecheck && npm run test:unit && npm run build && npm run test:e2e"
}
```

`test:visual:update` 只能由人工批准的设计变更使用，不应在普通 CI 中自动执行。

Playwright 应连接 `npm run start` 的 production server。CI 先运行一次默认 build，再启动服务测试，避免以开发模式结果代替生产验收。

---

# 六、Playwright 测试矩阵

## 首期阻断矩阵

仅 Chromium，覆盖全部六种组合：

| 语言 | 1440×900 | 1024×768 | 390×844 |
|---|---:|---:|---:|
| 中文 `?lang=zh` | 必测 | 必测 | 必测 |
| 日文 `?lang=ja` | 必测 | 必测 | 必测 |

每个组合运行：

- 页面加载和主要区域存在性
- 文案和语言属性
- 内部链接及锚点
- 横向溢出、遮挡和可视性
- axe
- 全页或分区视觉截图

额外边界检查：

- 961px 与 960px：三列/单列断点附近。
- 641px 与 640px：移动导航、Hero、间距断点附近。

这些边界测试以 DOM/几何断言为主，不必首期都建立截图。

## 后续跨浏览器范围

WebKit 和 Firefox：

- 中日文均覆盖。
- 1440×900 和 390×844 两类视口。
- 运行 smoke、导航、键盘、链接、基础布局和 axe。
- 仅在发现浏览器特有缺陷时增加针对性截图。

首期不建议为三个浏览器都维护完整 golden screenshots；字体抗锯齿和渲染差异会显著增加误报。

---

# 七、各页面区域的具体断言

## 导航

自动功能断言：

- 存在一个有可访问名称的主导航。
- 中文、日文各有五个正确标签。
- 每个链接对应唯一存在的 `#top/#about/#products/#services/#contact`。
- 点击后 URL hash 正确，目标区域进入视口。
- 中文/日本語切换后内容、选中状态和目标 URL 正确。
- 页面只有一个主要内容入口，标题层级不跳跃。

布局断言：

- 1440、1024 下品牌、导航、语言切换不重叠。
- 390 下五个导航项均可见，无横向页面溢出。
- 文字不被截断，点击区域没有互相覆盖。

无障碍：

- Tab 顺序符合视觉顺序。
- focus 清晰可见。
- 当前语言状态不能只依靠颜色；应有 `aria-current` 或等效语义。
- 应提供可跳过重复导航的机制，并验证键盘可用。
- 移动端目标至少满足 WCAG 2.2 的 24×24 CSS px 或间距例外；触控设计目标建议 44×44。

人工：

- 判断品牌与菜单的视觉权重、字距、行高和移动端密度是否符合设计。

## Hero

自动功能断言：

- 每种语言恰有一个 H1，文案与批准内容一致。
- 描述可见。
- 两个 CTA 分别链接产品与服务区域。
- CTA 可以鼠标和键盘触发。

布局断言：

- H1、描述和按钮不超出 Hero。
- 中文/日文长文案不产生意外单字孤行或裁切。
- 移动端按钮完整可见且不互相覆盖。
- 背景图已加载，Hero 不产生布局跳动。

无障碍：

- CTA 名称明确。
- 文本和按钮对比度通过。
- 背景图为装饰内容时不产生重复朗读。
- focus、hover、active 状态均需人工和自动截图抽查。

人工：

- 背景构图、标题换行、按钮主次、文字在背景上的可读性。

## ABOUT US

自动功能断言：

- 标题、正文、四项 offering 和“了解更多/詳しく見る”存在。
- CTA 指向产品区域。
- 授权图片成功加载，尺寸非零。
- 注册符号与品牌文字没有被拆散或隐藏。

布局断言：

- 桌面双列，960px 以下按设计切换单列。
- 图片不变形、不超出容器。
- 正文和 offering 不覆盖 CTA。
- 日文正文增高后不会推入下一板块。

无障碍：

- Section 通过 `aria-labelledby` 正确关联标题。
- 若授权图只承担装饰作用，可保留空 alt；若它提供授权证明信息，应改为有意义的 alt。该判断必须由人确认。
- 列表使用真实列表语义。

人工：

- 授权图是否清晰可辨、裁切是否正确、法律/授权措辞是否准确。

## 核心产品

自动功能断言：

- 恰有三个产品卡片。
- 每张卡片有预期标题和说明。
- 产品图加载成功。
- 装饰性的 `+` 不进入键盘焦点、不被屏幕阅读器误认为按钮。
- 若产品卡片预期可点击，必须有真实链接或按钮；不能仅靠视觉上的 `+` 暗示交互。

布局断言：

- 桌面三列、窄断点以下单列。
- 卡片宽高、间距一致。
- 标题和描述不被固定高度裁切。
- 不产生横向滚动。

无障碍及人工：

- 卡片标题层级正确。
- 图像用途和 alt 决策明确。
- 人工确认卡片是否本应可操作，以及视觉层次、图片选取是否符合产品含义。

## 核心服务

自动功能断言：

- 恰有三个服务卡片。
- 标题、说明和图标存在。
- 图标为装饰时不重复朗读。
- `+` 与产品卡片采用相同的非交互语义规则。

布局和人工要求与产品区一致，并额外检查日英文混排的 `Yeast Two Hybrid` 是否换行合理。

## Footer

自动功能断言：

- 公司、产品、服务、关于我们四组内容存在。
- 所有 Footer 内部链接目标存在且唯一。
- Logo 图片加载成功。
- 版权文本与批准内容 fixture 一致。
- 没有 `href="#"`、空链接或脚本伪链接。

布局断言：

- 1440 下四列、1024 下两列、390 下单列。
- 长日文链接不截断、不覆盖。
- Footer 最后一行可见，页面底部没有异常空白或溢出。

无障碍及人工：

- 各导航组有可访问名称。
- 链接 focus 明显。
- 人工确认版权年份、公司名称、联系方式缺失是否符合业务要求。

---

# 八、视觉测试稳定性方案

为避免误报，视觉基准必须满足：

1. 使用固定 Linux CI 容器；优先使用固定版本并带 digest 的 Playwright 镜像。
2. Node 24、npm、Playwright 和浏览器版本全部锁定。
3. 固定：
   - viewport
   - device scale factor
   - timezone
   - locale
   - color scheme
   - reduced motion
4. 使用 production build，不使用 `next dev`，避免 Dev Tools、开发浮层和热更新状态进入截图。
5. 截图前等待：
   - 页面主要资源完成；
   - `document.fonts.ready`；
   - 所有关键图片 `decode()` 完成；
   - 页面布局稳定。
6. 注入或应用 reduced-motion，关闭平滑滚动、动画、过渡、光标闪烁。
7. 时间、随机数和动态数据必须固定；确有动态区域时只 mask 最小区域，并写明原因。
8. 不在 macOS 本机生成可提交基准；OS 字体栅格化不同会制造无意义 diff。
9. CI 失败时上传实际图、预期图和 diff 图。
10. 首版截图只能由固定 CI 环境生成，下载审查后再提交到仓库。

像素阈值应从严格开始。若确需容忍少量抗锯齿差异，应使用很小且记录原因的阈值，不能用大阈值掩盖真实错位。

---

# 九、Accessibility 验收

## 自动化

- 使用 `@axe-core/playwright` 扫描六个首期组合。
- 覆盖 WCAG 2.x/2.2 A、AA 相关规则。
- 原则上要求零 axe violation；任何临时豁免必须包含：
  - 规则 ID
  - 受影响元素
  - 原因
  - issue
  - 负责人
  - 到期日
- 验证：
  - landmarks 和 heading 层级
  - 唯一 ID
  - 链接/按钮名称
  - ARIA 引用有效
  - 中日文语言属性
  - 图片 alt
  - 对比度
  - 键盘 focus
  - Tab 顺序
  - 点击目标尺寸
  - 无横向内容丢失

语言属性验收建议：

- 中文页根文档为 `zh-CN`。
- 日文页根文档为 `ja`，或有经过明确评审的等价结构。
- 页面标题与 metadata 也应随语言匹配，而不只是正文 `<main lang>`。

## 人工检查

每个发布候选至少执行：

- 仅键盘完成语言切换及全部导航。
- 检查 focus 不被遮挡且始终可见。
- 浏览器文字缩放 200%，内容不丢失。
- 400% 缩放或等效 320 CSS px reflow，不产生双向滚动。
- macOS VoiceOver 或 Windows NVDA 至少抽查一次：
  - 页面标题
  - landmarks
  - 标题列表
  - 导航名称
  - 链接名称和顺序
- 检查中日文朗读语言是否正确切换。
- 检查颜色以外是否仍能区分当前状态。
- 检查触控目标和目标间距。
- 检查高对比度/系统放大时仍可操作。

axe 无法判断翻译是否合理、阅读顺序是否自然、图片是否真正有意义，也不能替代屏幕阅读器和缩放验收。

---

# 十、性能和链接/内容检查

## 性能

建议在固定 CI 环境对两种语言各运行三次，取中位数。初始预算可设为：

- Performance：
  - 桌面 ≥ 90
  - 移动端 ≥ 85
- Accessibility、Best Practices、SEO ≥ 95
- LCP ≤ 2.5 秒
- CLS ≤ 0.10
- TBT ≤ 200 毫秒

还应记录：

- 首屏图片传输量
- 全页传输量
- 请求数
- JS 总量
- 图片是否经过 Next Image 优化
- 字体是否稳定加载、是否引起布局移动

这些是实验室趋势门槛，不等于真实 INP 或现场 Core Web Vitals。上线后若需要真实结论，应补充 RUM/Vercel Analytics 等现场数据。

## 链接与内容

自动检查：

- 所有内部 hash 目标存在且 ID 唯一。
- 点击后 hash 正确且目标可见。
- 站内 URL 返回成功状态。
- 图片返回成功且 `naturalWidth > 0`。
- 批准内容 fixture 与页面关键文案一致。
- 页面只有一个 H1，区域标题顺序合理。
- 禁止空 href、无效协议和意外占位文本。

如果未来加入外部链接：

- PR 中可做带重试和 allowlist 的检查。
- 外部服务不稳定时，不能让它掩盖内部链接失败；可拆为独立检查或定时任务。
- 外部链接的业务正确性仍需人工确认。

人工确认：

- 中日文翻译、品牌名、产品描述、授权关系、版权年份和法律准确性。
- `www.gnipharma.com` 当前只是正文文本；是否应成为链接是产品决定，不应由测试擅自决定。

---

# 十一、CI 建议

## 推荐命令顺序

1. checkout
2. 安装并验证 Node 24 和指定 npm 版本
3. `npm ci`
4. `npm run lint`
5. `npm run typecheck`
6. `npm run test:unit`
7. `npm run test:coverage`
8. `npm run build`
9. 启动 `npm run start`
10. Playwright Chromium 功能/响应式/axe
11. 视觉比较
12. Lighthouse CI
13. 后续独立 job：WebKit/Firefox smoke

默认 build 必须使用 `npm run build`，不能在 CI 中暗中替换为 `--webpack`。

## 缓存

允许缓存：

- npm 下载缓存
- `.next/cache`
- Playwright 浏览器缓存，前提是 key 包含 OS、Playwright 版本和 lockfile hash

不建议缓存：

- `node_modules`
- 完整 `.next` 构建结果作为未经验证的跨提交输入
- Playwright 测试输出

## 失败产物

失败时或 `always()` 上传：

- Playwright HTML/report 或 blob report
- expected、actual、diff screenshots
- trace
- failure screenshot
- 必要时保留 video
- axe JSON/HTML 结果
- Lighthouse HTML/JSON
- build 日志

Playwright 建议：

- `trace: "retain-on-failure"`
- `screenshot: "only-on-failure"`
- `video: "retain-on-failure"`
- CI 禁止 `reuseExistingServer`

## 分支保护

稳定后将以下设为 required checks：

- `lint-typecheck-unit`
- `production-build`
- `chromium-acceptance`
- `accessibility`
- `visual-regression`
- `performance-budget`

WebKit/Firefox 初期可先非阻断观察，稳定后转为 required。

禁止通过重新运行多次碰运气隐藏 flaky test；出现不稳定测试应登记、定位并修复确定性来源。

---

# 十二、用户人工确认设计基准的步骤

## 1. 准备参考资料

用户提供并确认：

- PDF/参考图/设计稿的版本号和日期。
- 每张参考对应的语言、视口和页面。
- 是否为最终设计，还是仅供方向参考。
- 哪些偏差已知且允许。

若是 PDF：

- 指明比较页码。
- 以固定比例导出图片。
- 不用自动“适配页面”后截图进行像素比较。
- 记录 PDF 页面尺寸、导出分辨率和裁切区域。

## 2. 检查六个固定组合

逐一检查：

- 中文：1440×900、1024×768、390×844
- 日文：1440×900、1024×768、390×844

每个组合保存：

- 整页截图
- Hero
- ABOUT US
- 产品
- 服务
- Footer 的局部截图

## 3. 与参考设计比较

推荐同时进行：

- 并排比较
- 50% 透明度叠加
- 关键区域放大比较

每个区域检查：

- 字体家族、字重、字距、行高
- 中文和日文换行
- 容器宽度、边距、内距、区块间距
- 文字、边框、按钮和背景颜色
- 背景图位置及裁切
- 产品图和授权图的比例、清晰度、裁切
- CTA 尺寸、主次关系、标签和目标
- hover、focus、active 状态
- 断点换列和移动端重排
- 是否存在重叠、截断、横向滚动或异常空白

## 4. 标记结果

每个“语言 × 视口 × 区域”必须标记：

- `Accept`：与批准参考一致，无阻断差异。
- `Reject`：存在必须修复的问题，并关联 issue/截图。
- `Accept with notes`：差异已被明确接受，不阻断本次发布。

`Accept with notes` 必须记录：

- 差异描述
- 为什么接受
- 是否永久
- 后续 issue
- 负责人
- 到期时间

## 5. 批准第一版 golden screenshots

1. 默认 build、功能、响应式和 axe 先通过。
2. 在固定 CI 环境生成候选截图。
3. CI 上传候选截图 artifact。
4. 用户下载后与批准参考逐一比较。
5. 用户完成验收记录。
6. 由实现者将已批准截图加入专门 PR。
7. 设计/产品负责人和前端审查者共同批准。
8. 合并后这些截图才成为 golden baseline。

## 6. 后续基准更新规则

只允许在以下情况更新：

- 已批准的设计改版。
- 批准的文案导致预期换行变化。
- 浏览器/字体/渲染环境升级，并已完成全量人工复核。
- 修复缺陷后，新输出明确成为预期设计。

每次更新必须包含：

- 变更原因和设计/issue 链接
- before/after/diff
- 受影响语言和视口
- 人工验收记录
- 至少一名设计/产品审查者和一名前端审查者批准

`--update-snapshots` 只是生成候选文件，不是修复方法，也不能证明新输出正确。

---

# 十三、验收记录模板

```md
# Landing Page 验收记录

- PR / Commit:
- 构建环境:
- Node / npm:
- Playwright / Chromium:
- 参考设计版本:
- 验收日期:
- 验收人:

## 自动检查

| 检查 | 结果 | 报告/产物 |
|---|---|---|
| ESLint | Pass/Fail | |
| TypeScript | Pass/Fail | |
| 默认 production build | Pass/Fail | |
| Vitest | Pass/Fail | |
| Chromium E2E | Pass/Fail | |
| axe | Pass/Fail | |
| Visual regression | Pass/Fail | |
| Lighthouse | Pass/Fail | |
| Links/content | Pass/Fail | |

## 人工设计检查

| 语言 | 视口 | 区域 | 状态 | 说明/Issue |
|---|---|---|---|---|
| zh | 1440×900 | Hero | Accept | |
| zh | 1440×900 | About | | |
| ja | 390×844 | Navigation | | |

## Accessibility 人工检查

- [ ] 仅键盘可完成所有主要操作
- [ ] focus 清晰、顺序正确且未被遮挡
- [ ] 200% 文字缩放无内容丢失
- [ ] 400% reflow 无双向滚动
- [ ] 屏幕阅读器 landmarks/标题/链接合理
- [ ] 中日文语言朗读正确
- [ ] 点击目标和间距可接受
- [ ] axe incomplete 项已人工处理

## 最终决定

- 状态：Accept / Reject / Accept with notes
- 阻断问题:
- 已接受差异:
- 后续事项及负责人:
- 批准人:
```

---

# 十四、PR Checklist

```md
## Build and code quality

- [ ] 使用仓库规定的 Node/npm 版本
- [ ] npm run lint 通过
- [ ] npm run typecheck 通过
- [ ] npm run build 默认命令通过
- [ ] 未用 --webpack 成功掩盖默认构建失败
- [ ] 单元测试通过

## Functional

- [ ] 中文和日文内容正确
- [ ] 导航、语言切换和 CTA 正常
- [ ] 所有内部锚点和链接有效
- [ ] 图片加载成功
- [ ] 三类视口无截断、遮挡或横向溢出

## Accessibility

- [ ] axe 通过或豁免有 issue、负责人和期限
- [ ] 键盘和 focus 人工验收通过
- [ ] 缩放/reflow 人工验收通过
- [ ] 语言属性正确
- [ ] 图片 alt 和装饰语义已确认
- [ ] 点击目标已检查

## Visual and content

- [ ] 与批准的 PDF/参考图比较
- [ ] 六个语言/视口组合已检查
- [ ] 字体、换行、间距、颜色、背景和裁切已检查
- [ ] CTA 和交互状态已检查
- [ ] 截图 diff 已审查
- [ ] 若更新 golden，已附 before/after/diff 和批准记录
- [ ] 未把 update-snapshots 当作修复

## Performance and repository safety

- [ ] Lighthouse 达到预算
- [ ] 失败报告和截图可从 CI 下载
- [ ] 新生成物已使用精确 .gitignore 规则
- [ ] diff 中无本机路径、账号、凭据或个人信息
```

---

# 十五、建议实施批次及完成定义

## 批次 A：运行时与默认构建

完成定义：

- Node 24/npm 策略统一。
- README 与仓库规范一致。
- 默认 `npm run build` 在标准 CI 中通过。
- Turbopack 问题有明确根因和回归验证。
- Webpack 不再承担替代门槛。

## 批次 B：Vitest 与静态质量门槛

完成定义：

- Vitest 配置和测试目录落地。
- 语言选择、内容映射等稳定逻辑有测试。
- lint、typecheck、unit、coverage 可独立执行。
- 测试生成物正确忽略。

## 批次 C：Chromium 功能、内容和响应式

完成定义：

- 六个首期组合全部通过。
- 导航、语言切换、CTA、锚点、图片和 Footer 链接均有断言。
- 961/960、641/640 边界无明显布局退化。
- 失败时有 trace 和截图。

## 批次 D：Accessibility

完成定义：

- axe 覆盖六个组合。
- 键盘、focus、语言、缩放、reflow、点击目标均有检查。
- 人工无障碍记录完成。
- 所有豁免都有负责人和到期日。

## 批次 E：人工设计基准与视觉回归

完成定义：

- 参考设计版本明确。
- 用户完成六组合人工检查。
- 第一版 golden 由固定 CI 环境生成。
- before/after/diff 经用户及前端审查批准。
- CI 可以稳定报告真实视觉变化。

## 批次 F：性能、跨浏览器和 CI 强制

完成定义：

- Lighthouse 预算确定并稳定。
- WebKit/Firefox 关键 smoke 通过。
- CI 缓存和失败产物配置完成。
- required checks 已加入分支保护。
- 连续多个 PR 未出现无法解释的 flaky failure。

这套顺序的核心是：先证明项目能按默认生产路径构建，再证明功能和语义正确，之后才批准视觉基准，最后用性能与跨浏览器检查收紧发布门槛。自动化负责发现确定性回归；设计、翻译、品牌、法律内容和真实辅助技术体验始终需要人工签字。

---

## Acceptance Results

验收结论：当前 Landing Page 的核心功能、双语路由、响应式布局和基础无障碍结构基本通过，但整体仍不能判定为“全部验收通过”。发现 1 项明确代码失败，以及若干尚未建立验收基础设施的项目。

## 一、已通过的项目

| 验收项目 | 结果 | 证据 |
|---|---|---|
| ESLint | 通过 | `npm run lint` 退出码 0 |
| TypeScript strict | 通过 | `npm run typecheck` 退出码 0 |
| 默认生产构建 | 通过 | 您提供的本机 `npm run build` 截图显示 Turbopack 完整成功 |
| webpack 交叉构建 | 通过 | `npx next build --webpack` 成功 |
| 静态生成 | 通过 | `/zh`、`/ja` 均为 `● SSG` |
| 根路径重定向 | 通过 | `/` 返回 307 到 `/zh` |
| 旧语言参数兼容 | 通过 | `/?lang=ja` 返回 308 到 `/ja` |
| 非法语言 | 通过 | `/en` 返回 404 |
| 中文文档语言 | 通过 | `/zh` 的 `<html lang="zh-CN">` |
| 日文文档语言 | 通过 | `/ja` 的 `<html lang="ja">` |
| Canonical | 通过 | 中文和日文分别指向正式生产 URL |
| hreflang | 通过 | `zh-CN`、`ja`、`x-default` 互相对应 |
| sitemap | 通过 | `/sitemap.xml` 返回 200 和 XML |
| favicon | 通过 | `/icon.png` 返回 200，PNG 保留 RGBA 通道 |
| 页面地标 | 通过 | 单一 Header、Main、Footer，主要区块均有标签 |
| 标题层级 | 通过 | H1 → H2 → H3，没有跳级 |
| 页面区块 | 通过 | Hero、ABOUT、产品、服务、Footer 全部存在 |
| 卡片数量 | 通过 | 3 张产品卡片、3 张服务卡片 |
| 图片加载 | 通过 | 滚动触发懒加载后，所有图片均有有效自然尺寸 |
| 装饰图片语义 | 通过 | 装饰图片使用 `alt=""` 或 `aria-hidden` |
| 中日文切换 | 通过 | 实际点击后 URL 和 `<html lang>` 同步变化 |
| 语言链接属性 | 通过 | `lang`、`hreflang`、`aria-current` 正确 |
| 内部锚点 | 通过 | 所有 `#top`、`#about`、`#products`、`#services`、`#contact`、`#main-content` 均有真实目标 |
| 控制台错误 | 通过 | 浏览器未发现 warning/error |
| JSX 颜色规范 | 通过 | TSX/TS 中没有直接写 hex、RGB、RGBA |
| 生成文件管理 | 通过 | 没有跟踪 `.next`、`tsbuildinfo`、coverage 或测试报告 |
| Footer 文字对比度 | 通过 | 约 `6.65:1` |
| 卡片正文对比度 | 通过 | 约 `6.14:1` |
| ABOUT 正文对比度 | 通过 | 约 `5.63:1` |
| 焦点轮廓对比度 | 通过 | 蓝色轮廓在白底约 `3.50:1`，超过非文本 `3:1` 门槛 |

## 二、Responsive 验收结果

实测矩阵：

- 语言：中文、日文
- 视口宽度：390、641、700、800、950、1440px
- 浏览器：当前 Chromium 内核浏览器

所有 12 个组合均通过：

- 无页面横向滚动。
- 没有元素越出左右视口。
- Hero 标题和副标题可以自然换行。
- 中文和日文内容没有被固定高度裁切。
- 产品和服务卡片能根据内容增高。
- 390px 下移动导航仍在视口内。
- 导航和语言切换目标最低为 `24×24px`。
- Hero CTA 高度为 `48px`。
- 桌面 Hero CTA 最小宽度为 `144px`。
- 移动端 Hero CTA 宽度为 `216px`。
- 中文和日文卡片内容均保持在卡片范围内。

WebKit、Firefox 尚未测试，已被 [TODO.md](./TODO.md:191) 的 T-16 浏览器矩阵覆盖。

## 三、明确未通过且没有写入 TODO 的项目

### 1. 强调色文字与按钮对比度不合格

这是本次发现的明确代码失败，目前没有写入 TODO。

当前主蓝色为 `#4989e5`：

| 元素 | 实际情况 | 要求 | 结果 |
|---|---:|---:|---|
| ABOUT US 小标题，15px/800 | 约 `3.50:1` | `4.5:1` | 失败 |
| ABOUT“了解更多”按钮，18px/400 | 约 `3.50:1` | `4.5:1` | 失败 |
| Hero 主 CTA，16px/400 | 透明蓝合成后约 `4.02:1` | `4.5:1` | 失败 |

相关位置：

- [page.tsx](<./src/app/[lang]/page.tsx:97>)
- [page.tsx](<./src/app/[lang]/page.tsx:109>)
- [page.tsx](<./src/app/[lang]/page.tsx:120>)
- [globals.css](./src/app/globals.css:13)

建议新增 TODO：

```text
A-01 修复强调色文字和 CTA 的 WCAG AA 对比度
```

完成条件：

- 小文字和普通按钮文字最终合成对比度不低于 `4.5:1`。
- 同时检查 default、hover、focus、active 状态。
- 中日文、桌面和移动端重新验收。
- 不能只把字体加粗作为规避手段。

### 2. 没有 axe 自动无障碍检查

仓库没有：

- `@axe-core/playwright`
- axe 配置
- axe 测试
- CI 无障碍门槛

T-16 记录了 Playwright smoke，但没有明确包含 axe。

建议新增：

```text
A-02 建立 Playwright + axe 自动无障碍检查
```

至少检查：

- `/zh`、`/ja`
- 桌面和移动端
- WCAG 2.2 A/AA
- 失败时保存具体 rule、selector 和页面 URL

### 3. 没有正式视觉截图基准

T-16 提到了 golden screenshot 的更新权限，但没有把“建立首版截图基准”定义为独立交付物。目前只能进行人工视觉检查，无法证明未来 PR 没有产生视觉回归。

建议新增：

```text
V-05 建立固定 CI 环境的首版 golden screenshots
```

至少包含：

- `/zh`、`/ja`
- 1440px 桌面
- 950px 窄桌面
- 390px 移动端
- Hero、ABOUT、产品、服务、Footer
- 固定 Linux、浏览器、字体、动画和设备缩放
- 产品经理批准第一版基准

### 4. 没有性能验收门槛

目前没有 Lighthouse、Core Web Vitals 预算或构建资源预算，因此性能不能判定为通过。

值得关注的原始素材：

- `hero-background.png`：约 1.1MB，CSS 背景会直接加载该文件。
- `about-authorization.jpg`：约 1.9MB，但经 `next/image` 优化后实际响应较小。
- `Logo.png`：约 200KB。
- `icon.png`：约 200KB。

建议新增：

```text
P-01 建立 Landing Page 性能预算和 Lighthouse 验收
```

建议首期门槛：

- 移动端 Lighthouse Performance ≥ 90。
- LCP ≤ 2.5 秒。
- CLS ≤ 0.1。
- INP ≤ 200ms，若没有足够真实用户数据则先记录实验室指标。
- 首屏图片和字体请求需要有可审查的资源清单。
- 生产环境和预览环境分别保存结果。

### 5. 200%/400% 缩放和屏幕阅读器人工记录缺失

当前代码具备合理的重排基础，但本轮没有完整的人工作业记录证明：

- 200% 缩放通过。
- 400% 缩放通过。
- VoiceOver/NVDA 的地标、标题和语言发音通过。
- Skip link 的真实键盘激活流程通过。

本线程此前曾验证 Skip link 能把焦点移动到 `main#main-content`，但正式验收仍应保存人工记录，尤其是屏幕阅读器结果。

建议新增：

```text
A-03 建立缩放、键盘和屏幕阅读器人工验收记录
```

### 6. 没有自动链接和内容完整性测试

本次人工检查中所有现有内部链接都通过，但目前没有自动测试防止后续出现：

- `href="#..."` 找不到目标。
- 某语言缺少区块。
- 中日文卡片数量或稳定 ID 不一致。
- CTA 指向不存在的目标。

建议新增：

```text
Q-01 建立链接、锚点和多语言内容完整性测试
```

## 四、未通过但已经在 TODO 中的项目

| 项目 | TODO |
|---|---|
| 卡片底部 `+` 尚未实现真实交互 | V-01、D-01 |
| 产品/服务卡片尚不可键盘操作 | V-01 |
| 没有 CI workflow | T-16 |
| 没有 Playwright smoke | T-16 |
| 没有 Vitest 配置 | T-16 已提及，但完成定义应进一步明确 |
| 没有 WebKit/Firefox 自动矩阵 | T-16 |
| 没有失败截图、trace、HTML report | T-16 |
| 没有分支保护必过门槛 | T-16 |
| Open Graph/Twitter metadata 缺失 | T-02 |
| robots.txt 缺失 | T-03 |
| Organization JSON-LD 缺失 | T-04 |
| LocalBusiness 决策未完成 | T-05 |
| OfferCatalog 决策未完成 | T-06 |
| Metadata 外部验收记录缺失 | T-07 |
| 联系表单和交付流程未确定 | T-13 |
| Analytics 未确定 | T-14 |
| Hero 高度设计基准未确认 | H-01 |
| CTA 转化目标没有数据证明 | H-02 |
| 面板间隔设计未确认 | L-01 |
| 移动导航长期方案未确认 | L-04 |

## 五、TODO 中需要更新的旧状态

T-01 当前描述已经部分过时。

您的本机默认：

```bash
npm run build
```

已经成功，因此不能再写成“默认构建当前无法通过”。

建议将 T-01 更新为：

- 本地主验收环境：已通过。
- Codex 受限沙箱：因内部端口策略无法运行 Turbopack/PostCSS 子进程。
- 正式 CI/Vercel：等 T-16 建立后再确认稳定性。
- 如果 CI 默认构建也通过，T-01 可以关闭。

## 最终判定

当前可以判定：

- 功能与内容结构：通过。
- 中日文路由与 SEO 基础：通过。
- Chromium 响应式：通过。
- 链接与图片：通过。
- 基础无障碍结构：通过。
- WCAG AA：**未通过，存在 3 处强调色对比度失败**。
- 自动化验收体系：未通过，尚缺 Playwright、axe、视觉回归、性能和链接完整性测试。
- 产品级视觉验收：需要 golden screenshot 和产品经理签字后才能通过。

本次只执行验收，没有修改仓库文件；`domain-research/` 未处理。

如果将这份验收结果保存进仓库，建议 Git commit message：

```text
docs(qa): record landing page acceptance results
```
