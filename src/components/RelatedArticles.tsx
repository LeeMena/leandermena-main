import { Link } from 'react-router-dom'
import { insightPosts } from '@/data/insights'
import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'

interface Props {
  currentSlug: string
  /** Override the heading (defaults to the i18n "Keep reading" label). */
  heading?: string
}

// Picks up to three articles related to the current one: same-category
// posts first (excluding the current), then the newest remaining posts to
// fill. insightPosts is ordered newest-first, so relative order is
// preserved without sorting. Internal links here strengthen topical
// clustering for SEO and keep readers on-site after an article.
function pickRelated(currentSlug: string, limit = 3) {
  const current = insightPosts.find(p => p.slug === currentSlug)
  const others = insightPosts.filter(p => p.slug !== currentSlug)
  if (!current) return others.slice(0, limit)

  const sameCategory = others.filter(p => p.category === current.category)
  const rest = others.filter(p => p.category !== current.category)
  return [...sameCategory, ...rest].slice(0, limit)
}

export default function RelatedArticles({ currentSlug, heading }: Props) {
  const { lang } = useLanguage()
  const t = getT(lang)
  const related = pickRelated(currentSlug)
  if (related.length === 0) return null

  return (
    <section className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">{heading ?? t('blog.related')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map(post => (
            <Link
              key={post.slug}
              to={`/insights/${post.slug}`}
              className="group block bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-400 transition-colors"
            >
              <div className="h-36 bg-neutral-800 overflow-hidden">
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
              <div className="p-5">
                <span className="text-[0.65rem] font-semibold tracking-widest text-amber-400 uppercase">{post.category}</span>
                <h3 className="mt-2 text-base font-semibold leading-snug group-hover:text-amber-400 transition-colors">{t(`blog.title.${post.slug}`)}</h3>
                <p className="mt-2 text-xs text-neutral-500">{post.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
