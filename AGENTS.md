# Repository guidelines

## Project baseline

- This repository is a Node.js 22.x, Next.js 16 App Router, React, and TypeScript project.
- Keep TypeScript strict. Prefer Server Components; add `"use client"` only when a component needs state, effects, event handlers, or browser-only APIs.
- Keep the application deployable on Vercel. Use standard Next.js build behavior and avoid machine-specific paths, persistent local filesystem state, or a custom server unless a requirement makes one necessary.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before considering a change complete.

## Dependency policy

Do not install the optional libraries below preemptively. Add one only when an implemented product requirement benefits from it, verify compatibility with the installed Next.js and React versions, and record the resulting package-lock change. Prefer the smallest dependency set that satisfies the requirement.

- **Tailwind CSS** — consider for utility-first styling or a shared design-token system. Follow the current [Tailwind theme documentation](https://tailwindcss.com/docs/theme). Do not mix it into the project solely for a small isolated style change.
- **Google Fonts** — browse available families at [Google Fonts](https://fonts.google.com/). For a selected family, prefer Next.js `next/font/google` so fonts are optimized and self-hosted at build time; this usually requires no extra npm package.
- **Material UI** — consider for a broad, accessible component system. If chosen, follow its current Next.js App Router integration guidance and install only the required MUI and Emotion packages.
- **React Icons** — consider when the interface needs icons not already available as small local assets. See [React Icons](https://react-icons.github.io/react-icons/), and import icons directly from the selected icon family.
- **React Hot Toast** — consider for transient success, error, or progress notifications. See [React Hot Toast](https://react-hot-toast.com/).
- **Headless UI** — consider for accessible unstyled interactive primitives that need custom visual styling. See [Headless UI](https://headlessui.com/).
- **React Redux** — consider only when client-side state is genuinely shared and complex enough to justify a global store. Follow [React Redux](https://react-redux.js.org/) and normally pair it with Redux Toolkit; keep providers in a focused Client Component.
- **React Loader Spinner** — consider when a product-specific loading indicator cannot be expressed cleanly with CSS or a lightweight local component. See [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/).

Before adding any optional package, briefly document why built-in Next.js/React/CSS capabilities are insufficient for that requirement.
