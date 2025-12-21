# Mohamed Tamer — Portfolio

Modernized personal site built with the Next.js App Router, React Server Components, and a Zod-validated CV data model.

## Stack

- Next.js 16 (App Router) with React 19 + TypeScript 5.9
- Tailwind CSS 3.4 + shadcn-inspired UI primitives
- next-themes for system-aware light/dark mode
- Framer Motion for purposeful section reveals

## Content source

All copy comes from `src/content/cv.ts` (validated with Zod). Update that file to change profile details, experience, projects, skills, or links—no hard-coded text elsewhere.

## Getting started

```bash
pnpm install
pnpm dev
```

## Quality gates

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `pnpm start` (runs the production build)

## Deployment

The app uses `output: "standalone"` for Vercel-friendly deployments. No external services or databases are required.
