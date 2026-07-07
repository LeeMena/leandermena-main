# leandermena.com

Personal brand and consulting site for **Leander Mena** — Fractional F&B Director & Pre-Opening Consultant, Miami.

[![CI](https://github.com/LeeMena/leandermena-main/actions/workflows/ci.yml/badge.svg)](https://github.com/LeeMena/leandermena-main/actions/workflows/ci.yml)

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS v3 + custom OKLCH design tokens |
| Routing | React Router v6 |
| Animation | Framer Motion + GSAP |
| UI Primitives | Radix UI |
| Hosting | Cloudflare Pages (auto-deploy from `main`) |
| Analytics | Plausible (privacy-first, no cookies) |
| Forms | Cloudflare Functions (`/functions/contact.ts`) |

## Local Development

```bash
# 1. Clone
git clone https://github.com/LeeMena/leandermena-main.git
cd leandermena-main

# 2. Install dependencies (Node 18+)
npm install

# 3. Copy env template and fill in values
cp .env.example .env.local

# 4. Start dev server
npm run dev
# → http://localhost:5173
```

## Environment Variables

See [`.env.example`](.env.example) for all required variables. Never commit `.env.local`.

## Build & Preview

```bash
npm run build        # production build → dist/
npm run preview      # preview production build locally
npm run lint         # ESLint check
npm run type-check   # TypeScript check (tsc --noEmit)
```

## Deploy

Pushes to `main` trigger an automatic Cloudflare Pages deploy. No manual step needed.

For environment variables in production, set them in the Cloudflare Pages dashboard under **Settings → Environment Variables**.

## Project Structure

```
src/
  pages/        # Route-level page components
  components/   # Shared UI components
  data/         # Static data (case studies, blog posts, etc.)
  context/      # React context providers
  lib/          # Utilities and helpers
  index.css     # Design tokens + global styles (source of truth for fonts/colors)
public/         # Static assets served at root
functions/      # Cloudflare Pages Functions (contact form, etc.)
legacy/         # Old static site files — do not use in new code
```

## Design System

- **Fonts:** Cormorant Garamond (display) + DM Sans (body) — loaded from Google Fonts
- **Colors:** OKLCH-based custom properties defined in `src/index.css`; mirrored in `tailwind.config.js`
- **Dark mode:** Default. Class-based toggle via `[data-theme]` on `<html>`

## Notes

- The site is a fully client-side SPA. SEO relies on a well-structured sitemap and Cloudflare's edge caching.
- `legacy/` contains the previous static site and is not referenced by the React app. Safe to ignore.
- Root-level `.jpg` files (`blog-*.jpg`, `contacts.jpg`) are legacy assets — new images should go in `public/images/`.
