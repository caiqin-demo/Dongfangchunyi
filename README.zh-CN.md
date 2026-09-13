# 东方纯一株式会社

[English](./README.md) | [日本語](./README.ja.md)

这是东方纯一株式会社（Eastern Purity Co., Ltd.）面向生命科学领域的多语言 B2B 官网，使用 Next.js 构建，并提供中文（`zh`）和日文（`ja`）公开路由。

## 网站范围

每个支持的语言版本均包含以下页面：

- 首页
- 公司简介
- 联系我们
- 抗体产品
- ELISA 试剂盒
- 实验室仪器
- 酵母双杂交
- 基因组测序

根路由默认重定向到日文版（`/ja`）。旧式 `/?lang=zh` 和 `/?lang=ja` 请求会重定向到对应的本地化路由。

## 技术栈

- Node.js 24.x
- npm 11（仓库声明 `npm@11.17.0`）
- Next.js 16 App Router
- React 19
- 启用严格检查的 TypeScript
- Tailwind CSS 4 与 PostCSS
- ESLint 9 及 Next.js 配置
- React Icons

## 项目结构

```text
src/
  app/        本地化路由、共享页面实现、字体与页面资源
  components/ 共享站点组件与页面模板
  content/    类型化的中文与日文内容
  i18n/       语言配置
  lib/        路由、站点 URL 与元数据辅助逻辑
tests/        Node.js 测试
```

网站使用共享组件和类型化的本地化内容，并生成本地化元数据、canonical URL、`hreflang` 链接和站点地图。

## 本地开发

### 前置条件

请安装 Node.js 24.x。项目使用 npm，并包含锁定文件。

如使用 nvm，仓库包含 `.nvmrc` 文件：

```bash
nvm use
node --version
npm --version
```

### 安装依赖

```bash
npm ci
```

### 配置站点 URL（可选）

需要在本地生成绝对元数据 URL 时，复制环境变量模板：

```bash
cp .env.example .env.local
```

测试 canonical、`hreflang` 或站点地图 URL 时，将 `SITE_URL` 设为本地地址：

```dotenv
SITE_URL=http://localhost:3000
```

`SITE_URL` 仅用于生成绝对 canonical、`hreflang` 和站点地图 URL。未设置时会使用默认生产站点 URL。

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。也可直接访问 [http://localhost:3000/zh](http://localhost:3000/zh) 和 [http://localhost:3000/ja](http://localhost:3000/ja)。

### 在本地运行生产构建

```bash
npm run build
npm run start
```

## 质量检查

在交付变更前运行适用的检查：

```bash
npm run lint
npm run typecheck
node --test tests/*.test.mjs
npm run build
```

`npm run typecheck` 会依次运行 `next typegen` 和 `tsc --noEmit`。

## 部署到 Vercel

本仓库遵循 Next.js 应用的标准 Vercel 集成方式：

1. 将仓库导入 Vercel 项目。
2. 除非部署有明确需求，否则保留自动识别的 Next.js 框架设置。
3. 当部署需要使用不同于默认值的公开站点来源时，在 Vercel 项目环境变量中将 `SITE_URL` 设置为该来源。
4. 部署。Vercel 会安装依赖并运行已配置的生产构建。

仓库没有定义自定义 `vercel.json`、Docker 镜像或 CI 部署工作流。

## 项目文档

- [仓库规则](./AGENTS.md)
- [环境变量模板](./.env.example)
- [项目任务清单](./TODO.md)

## 一、当前项目是什么架构

最准确的定义是：

> 一个模块化单体、内容驱动、服务端优先、中日双语的 Next.js 企业营销网站。

它不是微前端，也不是需要 Redux、数据库、CMS 或复杂 API 层的全栈业务系统。

```text
浏览器
└── Next.js 16 App Router
    ├── /zh Locale Root Layout
    ├── /ja Locale Root Layout
    ├── 本地化页面路由适配器
    │   └── 共享页面实现
    │       ├── AboutPageTemplate
    │       ├── ProductPageTemplate
    │       └── ServicePageTemplate
    ├── 共享站点组件
    │   ├── SiteHeader
    │   ├── SiteFooter
    │   └── NonLandingHeroMedia
    ├── 强类型内容层
    │   ├── 中文内容模块
    │   ├── 日文内容模块
    │   ├── 产品原始数据
    │   └── TypeScript 内容契约
    ├── 小范围 Client Components
    │   ├── 语言切换
    │   ├── URL 查询参数同步
    │   └── 错误恢复
    └── 平台能力
        ├── Metadata / Canonical / hreflang
        ├── Sitemap / Robots
        ├── Error Boundary
        └── Server Error Instrumentation
```

关键代码入口包括：

- [package.json](./package.json)
- [国际化配置](./src/i18n/config.ts)
- [产品页面模板](./src/components/product-pages/ProductPageTemplate.tsx)
- [服务页面模板](./src/components/service-pages/ServicePageTemplate.tsx)
- [共享 Header](./src/components/SiteHeader.tsx)
- [共享 Footer](./src/components/SiteFooter.tsx)
- [本地化 Metadata](./src/lib/localized-metadata.ts)
- [服务端错误记录](./src/lib/server-error-record.ts)

## 二、为什么选择这个架构

### 1. Server Components-first

网站主要展示企业、产品和生命科学服务内容，大部分页面不需要浏览器状态。

因此默认使用 Server Components，只把以下功能放进 Client Components：

- 服务技术选择
- Yeast Two Hybrid 系统切换
- URL 查询参数同步
- 语言切换参数保持
- 错误恢复与屏幕阅读器通知

这样可以减少客户端 JavaScript、Hydration 和状态管理复杂度。

### 2. 路径式中日双语路由

语言通过 `/zh/...` 和 `/ja/...` 表达，而不是使用 `?lang=zh`。

原因是：

- URL 稳定且可分享
- 搜索引擎容易识别语言版本
- Canonical 和 `hreflang` 关系清晰
- 每个语言可以拥有正确的 `<html lang>`
- 中文与日文字体入口可以分离

当前实现使用中文、日文薄路由适配器，再调用共享的 `[lang]` 页面实现。代价是增加少量路由文件，但避免复制完整页面。

### 3. 强类型内容模块，而不是 CMS 或 i18n 库

当前只有中文和日文，内容由开发者维护，发布频率有限，因此使用 TypeScript 内容模块：

- 每个语言一个内容文件
- 所有语言满足同一个内容契约
- 重复项目使用稳定 ID
- 产品原始数据与翻译展示分离
- `satisfies`、元组和联合类型检查内容完整性

这样能在编译阶段发现缺字段、漏语言、错误产品 ID。代价是非技术人员不能直接在 CMS 中编辑内容；如果未来语言数量和编辑人员明显增加，才值得引入 CMS 或专业 i18n 系统。

### 4. 共享模板和共享 Shell

产品页、服务页、About 页分别有自己的共享模板，同时共用 Header、Footer、页面容器和非 Landing Hero 图片管线。

这样既避免每个页面复制结构，又没有强行做一个“万能页面模板”。

### 5. URL 作为交互状态

服务技术和 Yeast Two Hybrid 当前选项写入 Query String，而不是只放在 React State 或 Redux 中。

优点：

- 页面可刷新
- 状态可分享
- 支持前进和后退
- 切换语言时可保留有效选择

代价是必须处理非法值、重复参数、默认值、URL 规范化和内部更新回声。

### 6. Tailwind 和原生 Web 平台优先

这是定制化企业营销站点，因此使用：

- Tailwind CSS
- CSS Grid
- Container Queries
- CSS Subgrid
- Semantic Design Tokens
- 原生 HTML 表格和按钮

没有引入 Material UI、Redux 或复杂组件库，因为当前需求不需要完整后台组件体系或全局客户端状态。

## 许可证

[MIT](https://github.com/caiqin-demo/Dongfangchunyi/blob/main/LICENSE). The shortest license that works.
