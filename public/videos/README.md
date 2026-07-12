# Hero video slot

Drop an ambient background clip here to enable the home-hero video.

## Enable it

1. Add your clip as `public/videos/home-hero.mp4`.
2. In `src/data/heroImages.ts`, set:
   ```ts
   export const homeHeroVideo: string | null = '/videos/home-hero.mp4'
   ```
3. Deploy. That's it.

Until then the hero shows the static photo (`/images/landing-hero.jpg`),
which also serves as the video's poster and as the fallback for anyone
with `prefers-reduced-motion` enabled.

## Recommended specs (ambient loop)

- **Length:** 8–20 s, seamless loop
- **Audio:** none (the player is muted + `playsInline`; strip the track to
  save bytes)
- **Resolution:** 1080p max; 720p is usually plenty behind the scrim
- **Codec:** H.264 (`.mp4`) for universal support; add a `.webm` (VP9/AV1)
  source too if you want smaller files on modern browsers
- **Size:** aim for under ~3–5 MB — it loads on every homepage visit
- **Content:** slow, calm motion (a dining room, service, plating). Fast
  cuts fight with the headline sitting on top.

## Optional: add a WebM source

`Home.tsx` renders a single `<source type="video/mp4">`. To also serve a
smaller WebM, add `public/videos/home-hero.webm` and a second `<source
type="video/webm">` *before* the mp4 source in the hero markup — browsers
pick the first they support.

This folder is served as static assets (see `functions/_middleware.js`,
`public/_routes.json`, and the `/videos/*` cache rule in `public/_headers`).
