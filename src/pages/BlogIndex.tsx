import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'
import { insightPosts as posts, insightCategories } from '@/data/insights'


import { useState } from 'react'

export default function BlogIndex() {
  const { lang } = useLanguage()
  const t = getT(lang)
  const [active, setActive] = useState('All')

  const catLabel: Record<string, string> = {
    'All': t('blog.cat.all'),
    'Labor Cost': t('blog.cat.labor'),
    'Pre-Opening': t('blog.cat.preOpening'),
    'Operations': t('blog.cat.operations'),
    'Hotel F&B': t('blog.cat.hotel'),
    'Fractional Leadership': t('blog.cat.fractional'),
  }

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      <SEO
        title="Insights | Leander Mena"
        description="Practical F&B operations content on labor cost, pre-opening, hotel restaurants, and fractional leadership from Leander Mena."
        path="/insights"
        schemaType="insights"
      />
      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-2">{t('nav.insights')}</h1>
          <p className="text-neutral-400 mb-10">{t('blog.intro')}</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {insightCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-amber-400 text-black'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {catLabel[cat] ?? cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map(post => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group block bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-400 transition-colors"
              >
                <div className="h-48 bg-neutral-800 overflow-hidden">
                  <img
                    src={post.image}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = post.fallback }}
                    alt={t(`blog.title.${post.slug}`)}
                    loading="lazy"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">{catLabel[post.category] ?? post.category}</span>
                  <h2 className="mt-2 text-lg font-semibold leading-snug group-hover:text-amber-400 transition-colors">{t(`blog.title.${post.slug}`)}</h2>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-neutral-500">{post.date} &bull; {post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
