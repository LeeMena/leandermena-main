# /ico — Favicon Asset Folder

This folder contains all favicon and PWA icon assets for leandermena.com.

## SVG Sources (version-controlled, ready to use)

| File | Size | Purpose |
|---|---|---|
| `favicon.svg` | 32×32 | Browser tab (modern browsers) |
| `apple-touch-icon.svg` | 180×180 | iOS home screen reference |
| `android-chrome-192x192.svg` | 192×192 | Android PWA home screen reference |
| `android-chrome-512x512.svg` | 512×512 | Android splash screen reference |
| `site.webmanifest` | — | PWA manifest (update href paths in HTML) |

## PNG/ICO Files Needed (binary — generate from SVGs)

Upload these to `/ico/` after generating:

| File | Size | How to Generate |
|---|---|---|
| `favicon.ico` | 16/32/48 multi-res | https://realfavicongenerator.net — upload favicon.svg |
| `favicon-16x16.png` | 16×16 | Same tool |
| `favicon-32x32.png` | 32×32 | Same tool |
| `apple-touch-icon.png` | 180×180 | Same tool |
| `android-chrome-192x192.png` | 192×192 | Same tool |
| `android-chrome-512x512.png` | 512×512 | Same tool |

## Head Tag Block (paste into ALL .html pages)

```html
<!-- Favicons -->
<link rel="apple-touch-icon" sizes="180x180" href="/ico/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png">
<link rel="icon" type="image/svg+xml" href="/ico/favicon.svg">
<link rel="shortcut icon" href="/ico/favicon.ico">
<link rel="manifest" href="/ico/site.webmanifest">
<meta name="theme-color" content="#b8a080">
<meta name="msapplication-TileColor" content="#0a0a0a">
```
