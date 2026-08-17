# 东方春意（Dongfangchunyi）

基于 Node.js、Next.js App Router 和 TypeScript 的 Web 项目，配置为可直接部署到 Vercel。

## 本地开发

项目文件已经初始化，但尚未安装依赖。首次开发时运行：

```bash
npm install
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

## 质量检查

```bash
npm run lint
npm run typecheck
npm run build
```

## 部署到 Vercel

将仓库导入 Vercel 即可。Vercel 会自动识别 Next.js，并使用 `npm run build` 构建项目。项目通过 `package.json` 指定 Node.js 22.x。

可选 UI 和状态管理依赖尚未安装；采用条件及链接见 [`AGENTS.md`](./AGENTS.md)。
