# leandermena.com

Fractional F&B Operations Leadership site for Leander Mena, Miami.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v3** (luxury dark theme)
- **React Router v6** (client-side routing)
- **Cloudflare Pages** (hosting + CDN)

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `/dist`. Cloudflare Pages auto-deploys on push to `main`.

## Cloudflare Pages Settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` |
| Custom domain | `www.leandermena.com` |

## Images (kept from previous static site)

All original images are preserved at the repo root and served as public assets via Vite:
- `landing-hero.jpg` — Home hero
- `about.jpg` — About page headshot
- `1.jpg` — About page banner
- `dining.jpg` — Experience section
- `philosophy.jpg` — Philosophy hero
- `contact.jpg` / `contact-banner.jpg` — Contact + Services heroes
