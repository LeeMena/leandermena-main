// generate-route-meta.mjs
// ---------------------------------------------------------------
// Builds functions/route-meta.json: a route -> head-metadata map
// consumed by functions/_middleware.js to rewrite <head> tags at
// the edge, so non-JS crawlers and social scrapers (Facebook,
// LinkedIn, Slack, WhatsApp...) see per-route titles, descriptions,
// canonicals, and og:image - not the homepage defaults.
//
// Sources of truth (no duplication):
//   - Static pages: the <SEO .../> props already declared in each
//     src/pages/*.tsx component.
//   - Case studies: src/data/caseStudies.ts, composed exactly the
//     way CaseStudyDetail.tsx composes its SEO props.
//   - Coverage contract: every route in src/routes.ts must resolve
//     to an entry, or this script fails the build.
//
// Runs automatically via the npm `prebuild` hook. CI verifies the
// committed JSON is fresh (generate + git diff --exit-code).
// ---------------------------------------------------------------

import { readFileSync, readdirSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { tmpdir } from 'node:os'
import { buildSync } from 'esbuild'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pagesDir = join(root, 'src', 'pages')
const outFile = join(root, 'functions', 'route-meta.json')

// ---- 1. Extract <SEO .../> props from static page components ----

// JSX decodes HTML entities in string attributes (title="F&amp;B" renders "F&B"),
// so decode them here too; the middleware re-escapes text when it writes the head.
const ENTITIES = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ', middot: '·', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“' }
const decodeEntities = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') return String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : Number(e.slice(1)))
    return ENTITIES[e] ?? m
  })

const prop = (block, name) => {
  const m = block.match(new RegExp(`\\b${name}="([^"]*)"`))
  return m ? decodeEntities(m[1]) : undefined
}

const meta = {}

for (const file of readdirSync(pagesDir).sort()) {
  if (!file.endsWith('.tsx')) continue
  // CaseStudyDetail composes its meta from data at runtime; handled in step 2.
  if (file === 'CaseStudyDetail.tsx') continue

  const src = readFileSync(join(pagesDir, file), 'utf8')
  const seoBlock = src.match(/<SEO\b([\s\S]*?)\/>/)
  if (!seoBlock) {
    throw new Error(`route-meta: no <SEO/> block found in ${file}`)
  }
  const block = seoBlock[1]

  const title = prop(block, 'title')
  const description = prop(block, 'description')
  const path = prop(block, 'path')
  if (!title || !description || !path) {
    throw new Error(`route-meta: missing title/description/path in ${file}`)
  }

  const entry = { title, description }
  const image = prop(block, 'image')
  const imageAlt = prop(block, 'imageAlt')
  const type = prop(block, 'type')
  if (image) entry.image = image
  if (imageAlt) entry.imageAlt = imageAlt
  if (type && type !== 'website') entry.ogType = type
  if (/\bnoindex\b/.test(block)) entry.noindex = true

  // NotFound declares path="/404"; store it under a sentinel key used
  // by the middleware's unknown-route branch.
  meta[path === '/404' ? '__404__' : path] = entry
}

// ---- 2. Case-study detail routes from src/data/caseStudies.ts ----
// Compile the TS data module with esbuild and import it, then compose
// the meta exactly like CaseStudyDetail.tsx does.

const tmp = mkdtempSync(join(tmpdir(), 'route-meta-'))
try {
  const compiled = join(tmp, 'caseStudies.mjs')
  buildSync({
    entryPoints: [join(root, 'src', 'data', 'caseStudies.ts')],
    outfile: compiled,
    bundle: true,
    format: 'esm',
    platform: 'neutral',
  })
  const { caseStudies } = await import(pathToFileURL(compiled).href)
  for (const cs of caseStudies) {
    meta[`/case-studies/${cs.slug}`] = {
      title: `${cs.title} | Case Study - Leander Mena`,
      description: `${cs.challenge.slice(0, 155)}…`,
      ogType: 'article',
    }
  }
} finally {
  rmSync(tmp, { recursive: true, force: true })
}

// ---- 2b. Crawler body text for data-driven pages ----
// Non-JS crawlers (Bing's SEO checks) only see the static shell, so
// pages built from data files read as "thin content". Render the same
// data the page shows into plain HTML; the middleware puts it in #root
// and React replaces it on mount. Same content as the visible page.

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const list = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`

const tmp2 = mkdtempSync(join(tmpdir(), 'route-body-'))
try {
  const load = async (rel, name) => {
    const out = join(tmp2, `${name}.mjs`)
    buildSync({ entryPoints: [join(root, rel)], outfile: out, bundle: true, format: 'esm', platform: 'neutral' })
    return import(pathToFileURL(out).href)
  }
  const { services } = await load('src/data/services.ts', 'services')
  const { products } = await load('src/data/products.ts', 'products')
  const t = (await load('src/i18n/copy.ts', 'copy')).getT('en')

  if (meta['/services']) {
    meta['/services'].body =
      `<p>${esc(t('services.heroSub'))}</p>` +
      `<p>${esc(t('services.intro1.pre') + t('services.intro1.strong') + t('services.intro1.post'))}</p>` +
      services.map((s) =>
        `<section><h2>${esc(s.title)}</h2><p><em>${esc(s.subtitle)}</em></p><p>${esc(s.description)}</p>` +
        `<p><strong>${esc(s.price)}</strong> ${esc(s.priceNote)}</p>` +
        `<h3>What is included</h3>${list(s.features)}<h3>Deliverables</h3>${list(s.deliverables)}` +
        `<h3>Ideal for</h3>${list(s.idealFor)}</section>`).join('') +
      `<section><h2>${esc(t('services.guides.heading'))}</h2><p>${esc(t('services.guides.body'))}</p>` +
      `<ul><li><a href="/downloads/pre-opening-consulting-guide.pdf">Pre-Opening Consulting guide (PDF)</a></li>` +
      `<li><a href="/downloads/operations-consulting-guide.pdf">F&amp;B Operations Consulting guide (PDF)</a></li>` +
      `<li><a href="/downloads/operations-recovery-guide.pdf">Operations Recovery guide (PDF)</a></li>` +
      `<li><a href="/downloads/banquet-events-guide.pdf">Banquet and Events Build-Out guide (PDF)</a></li></ul></section>`
  }

  if (meta['/products']) {
    meta['/products'].body = products.map((p) =>
      `<section><h2>${esc(p.title)}</h2><p><em>${esc(p.subtitle)}</em></p><p>${esc(p.description)}</p>` +
      `<p><strong>$${p.price}</strong>${p.originalPrice ? ` (regularly $${p.originalPrice})` : ''}</p>` +
      `${list(p.features)}${p.includes?.length ? `<p>Includes: ${esc(p.includes.join(', '))}</p>` : ''}` +
      `${p.checkoutUrl ? `<p><a href="${esc(p.checkoutUrl)}">Get the ${esc(p.title)}</a></p>` : ''}</section>`).join('')
  }

  if (meta['/contact']) {
    meta['/contact'].body =
      `<p>${esc(t('contact.heroSub'))}</p><p>${esc(t('contact.directBody'))}</p>` +
      `<h2>${esc(t('contact.process.heading'))}</h2>` +
      `<ol><li><strong>${esc(t('contact.process.s1.title'))}.</strong> ${esc(t('contact.process.s1.body'))}</li>` +
      `<li><strong>${esc(t('contact.process.s2.title'))}.</strong> ${esc(t('contact.process.s2.body'))}</li>` +
      `<li><strong>${esc(t('contact.process.s3.title'))}.</strong> ${esc(t('contact.process.s3.body'))}</li></ol>` +
      `<h2>What to include in your message</h2><p>${esc(t('contact.form.detailsPh'))} ` +
      `Share the name of your restaurant or hotel if you can, and whether you need ${esc(t('contact.form.opt.fractional'))}, ` +
      `${esc(t('contact.form.opt.preOpening'))}, ${esc(t('contact.form.opt.recovery'))}, or ${esc(t('contact.form.opt.speaking'))}.</p>` +
      `<h2>How we can work together</h2><ul>` +
      services.map((s) => `<li><a href="/services">${esc(s.title)}</a>: ${esc(s.subtitle)}. ${esc(s.price)} ${esc(s.priceUnit)}</li>`).join('') +
      `</ul><p>Email <a href="mailto:info@leandermena.com">info@leandermena.com</a>. Based in Miami, Florida, working with restaurants and hotels across the U.S., on-site and remote. ${esc(t('contact.form.note'))}</p>`
  }
} finally {
  rmSync(tmp2, { recursive: true, force: true })
}

// ---- 3. Coverage check against the route manifest ----

const routesSrc = readFileSync(join(root, 'src', 'routes.ts'), 'utf8')
const declared = [...routesSrc.matchAll(/'(\/[^']*)'/g)].map(m => m[1])
if (declared.length === 0) {
  throw new Error('route-meta: could not parse any routes from src/routes.ts')
}
const missing = declared.filter(r => !meta[r])
if (missing.length) {
  throw new Error(`route-meta: routes.ts entries without meta: ${missing.join(', ')}`)
}
if (!meta['__404__']) {
  throw new Error('route-meta: NotFound page did not produce the __404__ entry')
}

// ---- 4. Emit (sorted, stable output for clean diffs) ----

const sorted = Object.fromEntries(
  Object.entries(meta).sort(([a], [b]) => a.localeCompare(b))
)
writeFileSync(outFile, JSON.stringify(sorted, null, 2) + '\n')
console.log(`route-meta: wrote ${Object.keys(sorted).length} entries to functions/route-meta.json`)
