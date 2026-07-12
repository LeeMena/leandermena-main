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

const prop = (block, name) => {
  const m = block.match(new RegExp(`\\b${name}="([^"]*)"`))
  return m ? m[1] : undefined
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
