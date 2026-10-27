# mohamedtamer.me

Source for my personal site, live at [www.mohamedtamer.me](https://www.mohamedtamer.me).

## Stack

- Next.js 16 (App Router), React 19 and TypeScript
- Tailwind CSS, with next-themes for light and dark mode
- Framer Motion for small section transitions
- Zod to validate the site content at build time

## How the content works

Everything the site says lives in one file, `src/content/cv.ts`. The sections read from it, so there is no second copy to keep in sync. The file is checked against a Zod schema when the site builds, so a missing field or a broken link fails the build instead of shipping a broken page. `CONTENT_NOTES.md` explains which section uses which field.

The site also generates its own Open Graph image (`/api/og`), JSON-LD structured data, a sitemap and `robots.txt`.

## Running it locally

```bash
nvm use        # Node version from .nvmrc
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Deployment

Deployed on Vercel from the `main` branch. The optional search-engine verification variables are listed in `.env.example`.

## License

The code is MIT licensed (see `LICENSE`). The text and images describe me and my work, so please don't reuse them as your own.
