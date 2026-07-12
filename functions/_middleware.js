// Cloudflare Pages middleware: SPA fallback + edge head rewriting.
//
// Social scrapers and non-JS crawlers never execute React, so without
// this they see the homepage <head> on every URL. For each known route
// we rewrite <title>, description, canonical, and og:/twitter: tags
// into the static shell before it leaves the edge (the React app then
// takes over in the browser exactly as before).
//
// Also handled here, where it is guaranteed to run regardless of
// _redirects/Functions precedence:
//   - trailing-slash canonicalization (single-hop 301)
//   - real HTTP 404 status (+ noindex) for unknown routes
//
// route-meta.json is generated from the page components by
// scripts/generate-route-meta.mjs (npm prebuild). Do not edit it by hand.

import routeMeta from './route-meta.json'

const BASE_URL = 'https://www.leandermena.com'

const ASSET_RE = /\.(js|css|map|png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|otf|json|xml|txt|pdf|webmanifest|html|mp4|webm|mov|ogg|m4v)$/

// Legacy-path 301s. These lived in _redirects, but _redirects does not
// apply to requests routed through Functions (verified with wrangler
// pages dev), so they must be handled here to actually fire.
const LEGACY_REDIRECTS = {
  '/contact.html': '/contact',
  '/blog': '/insights',
  '/pre-opening-blueprint': '/blueprint',
  '/pre-opening-checklist': '/blueprint',
  '/90-day-blueprint': '/blueprint',
  '/work': '/case-studies',
  '/portfolio': '/case-studies',
}

// Handler factories (plain objects with an `element` function; any other
// field name on a handler object trips HTMLRewriter's type checks)
const setContent = (text) => ({ element: (el) => el.setInnerContent(text) })
const setAttr = (name, value) => ({ element: (el) => el.setAttribute(name, value) })
const appendHtml = (html) => ({ element: (el) => el.append(html, { html: true }) })

function rewriteHead(shellResponse, path, meta, status) {
  const url = `${BASE_URL}${path}`
  const rw = new HTMLRewriter()
    .on('title', setContent(meta.title))
    .on('meta[name="description"]', setAttr('content', meta.description))
    .on('link[rel="canonical"]', setAttr('href', url))
    .on('meta[property="og:title"]', setAttr('content', meta.title))
    .on('meta[property="og:description"]', setAttr('content', meta.description))
    .on('meta[property="og:url"]', setAttr('content', url))
    .on('meta[property="og:type"]', setAttr('content', meta.ogType || 'website'))
    .on('meta[name="twitter:title"]', setAttr('content', meta.title))
    .on('meta[name="twitter:description"]', setAttr('content', meta.description))

  // Custom share image (per-article): override the default og/twitter
  // image and its alt text. Width/height stay 1200x630 - the generator
  // only emits images produced at that size.
  if (meta.image) {
    rw.on('meta[property="og:image"]', setAttr('content', meta.image))
      .on('meta[name="twitter:image"]', setAttr('content', meta.image))
    if (meta.imageAlt) {
      rw.on('meta[property="og:image:alt"]', setAttr('content', meta.imageAlt))
    }
  }

  // The static shell carries no robots meta (the SPA injects it);
  // crawlers that skip JS need the noindex signal in the raw HTML.
  if (meta.noindex) {
    rw.on('head', appendHtml('<meta name="robots" content="noindex, follow">'))
  }

  const transformed = rw.transform(shellResponse)
  if (status === 200) return transformed
  return new Response(transformed.body, {
    status,
    headers: transformed.headers,
  })
}

export async function onRequest(context) {
  const { request, next } = context
  const url = new URL(request.url)
  const path = url.pathname

  // Legacy 301s (checked before the asset test so /contact.html matches)
  const legacy =
    LEGACY_REDIRECTS[path] ||
    (path.startsWith('/blog/')
      ? `/insights/${path.slice('/blog/'.length)}`.replace(/\/+$/, '')
      : null)
  if (legacy) {
    return Response.redirect(`${url.origin}${legacy}${url.search}`, 301)
  }

  // Static assets: serve directly
  if (
    path.startsWith('/assets/') ||
    path.startsWith('/images/') ||
    path.startsWith('/videos/') ||
    path.startsWith('/downloads/') ||
    ASSET_RE.test(path)
  ) {
    return next()
  }

  // Trailing-slash canonicalization: single-hop 301 (root excluded)
  if (path.length > 1 && path.endsWith('/')) {
    const target = path.replace(/\/+$/, '') || '/'
    return Response.redirect(`${url.origin}${target}${url.search}`, 301)
  }

  const shell = await next('/index.html')
  const meta = routeMeta[path]

  if (!meta) {
    // Unknown route: the SPA shell still renders the React 404 page,
    // but crawlers now get a real 404 status + noindex instead of a
    // soft-404 with homepage metadata.
    const nf = routeMeta['__404__']
    return rewriteHead(shell, path, { ...nf, noindex: true }, 404)
  }

  return rewriteHead(shell, path, meta, 200)
}
