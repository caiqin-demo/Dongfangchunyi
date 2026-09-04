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

## 许可证

仓库目前未包含许可证文件。复用源代码或资源前，请联系仓库所有者。
