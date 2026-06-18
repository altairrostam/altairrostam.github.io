# Altair Rostam Personal Site

Static-first personal site built with Astro, TypeScript, MDX, and Tailwind CSS.

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run audit:static
```

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: current active LTS
- Required environment variable: `SITE_URL`
- Production `SITE_URL`: `https://altairrostam.com`

Cloudflare cache rules are emitted from `public/_headers` into the built `dist/_headers` file.

## Deploy Checklist

1. Run `npm run check`.
2. Run `npm run build`.
3. Run `npm run audit:static`.
4. Confirm `public/resume.pdf` is current before publishing resume changes.
5. Confirm `SITE_URL` is set in Cloudflare Pages.
6. Smoke test `/`, `/projects`, `/writing`, `/about`, `/now`, `/resume`, `/rss.xml`, and `/sitemap-index.xml` after deploy.

## Content

- Projects: `src/content/projects/*.mdx`
- Writing: `src/content/writing/*.mdx`
- Shared contact links: `src/data/contact.ts`

Writing and project entries are validated by Astro content collections in `src/content/config.ts`.
