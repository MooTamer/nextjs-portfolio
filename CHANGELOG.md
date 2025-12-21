# Changelog

## 2025-12-21

- Upgraded the stack to Next.js 16, React 19, TypeScript 5.9, Tailwind CSS 3.4, and standardized on pnpm with Node 20.18.0 via `.nvmrc`.
- Added linting/formatting pipeline (ESLint flat config, Prettier) and stricter TS settings with bundler-style resolution.
- Rebuilt the app on the App Router (`src/app`) with server-first rendering, light/dark theming, sticky navigation, loading/error/not-found states, sitemap/robots, and a dynamic OG image endpoint.
- Introduced shadcn-inspired UI primitives, motion utilities, and refreshed visual system (new fonts, gradients, cards, badges).
- Created a Zod-validated CV content model (`src/content/cv.ts`) that powers all site sections (hero, about, experience, projects, skills, education, languages, contact) with no hard-coded copy elsewhere.
- Removed legacy Contentlayer/MDX/Upstash code, old pages router artifacts, and unused dependencies/configs.
- Documented setup and quality gates in `README.md` plus content model guidance in `CONTENT_NOTES.md`.
