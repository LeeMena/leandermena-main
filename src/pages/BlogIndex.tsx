import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const ALL_POSTS = [
  {
    slug: '/insights/miami-restaurant-labor-market-2026',
    title: 'Miami Restaurant Labor Market 2026',
    description: 'What operators need to know about hiring, wages, and retention in the current Miami market.',
    kicker: 'Labor Market',
    date: '2024-07-01',
    readTime: 6,
  },
  {
    slug: '/insights/building-training-program-that-works',
    title: 'Building a Training Program That Works',
    description: 'Why most restaurant training fails - and how to build one that actually sticks and improves performance.',
    kicker: 'Training',
    date: '2024-07-15',
    readTime: 7,
  },
  {
    slug: '/insights/hotel-fb-why-your-restaurant-underperforms',
    title: 'Hotel F&B: Why Your Restaurant Underperforms',
    description: 'The structural differences between hotel F&B and standalone restaurants - and why most hotel operators get it wrong.',
    kicker: 'Hotel F&B',
    date: '2024-06-15',
    readTime: 5,
  },
  {
    slug: '/insights/reduce-labor-cost-without-cutting-service',
    title: 'How to Reduce Labor Cost Without Cutting Service',
    description: 'A case study and framework for restructuring labor without degrading guest experience.',
    kicker: 'Operations',
    date: '2024-06-01',
    readTime: 6,
  },
  {
    slug: '/insights/miami-pre-opening-playbook',
    title: 'The Miami Pre-Opening Playbook',
    description: 'A practical framework for opening restaurants and hotel F&B programs in Miami on time and on budget.',
    kicker: 'Pre-Opening',
    date: '2024-05-01',
    readTime: 5,
  },
  {
    slug: '/insights/real-cost-of-bad-pre-opening',
    title: 'The Real Cost of a Bad Pre-Opening',
    description: 'What actually goes wrong when pre-opening planning is skipped or rushed - and the financial impact.',
    kicker: 'Pre-Opening',
    date: '2024-05-15',
    readTime: 5,
  },
  {
    slug: '/insights/why-fractional-leadership-works',
    title: 'Why Fractional F&B Leadership Works',
    description: 'How operators are replacing full-time directors with fractional leaders - and getting better results at a fraction of the cost.',
    kicker: 'Leadership',
    date: '2024-04-20',
    readTime: 5,
  },
  {
    slug: '/insights/pre-opening-timeline',
    title: 'The Pre-Opening Timeline Most Operators Get Wrong',
    description: 'Why most restaurant pre-openings run behind - and the 120-day framework that fixes it.',
    kicker: 'Pre-Opening',
    date: '2024-04-01',
    readTime: 6,
  },
  {
    slug: '/insights/labor-cost-control-miami-restaurants',
    title: 'Labor Cost Control in Miami Restaurants',
    description: 'Practical tactics for reducing labor cost percentage without cutting service quality or burning out your team.',
    kicker: 'Operations',
    date: '2024-03-15',
    readTime: 6,
  },
  {
    slug: '/insights/what-a-fractional-gm-actually-does',
    title: 'What a Fractional F&B Director Actually Does',
    description: 'The role explained for operators who are considering it - scope, schedule, deliverables, and real expectations.',
    kicker: 'Fractional Leadership',
    date: '2024-02-29',
    readTime: 5,
  },
]

// Sort newest first
const posts = [...ALL_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const CATEGORIES = ['All', ...Array.from(new Set(posts.map((p) => p.kicker)))]

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.kicker === activeCategory)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <>
      <SEO
        title="Insights"
        description={`${posts.length} practical articles on F&B operations - pre-openings, labor cost, fractional leadership, training, and more from Leander Mena.`}
        path="/insights"
        schemaType="insights"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/insights.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Insights</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[18ch] mb-4">
            F&amp;B Operations Insights
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Practical thinking on restaurant and hotel operations from the floor up.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', paddingBlock: '0.85rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em',
                  textTransform: 'uppercase', padding: '0.3rem 0.85rem',
                  borderRadius: '9999px', border: '1px solid var(--color-border)',
                  background: activeCategory === cat ? 'var(--color-text)' : 'transparent',
                  color: activeCategory === cat ? 'var(--color-bg)' : 'var(--color-text-muted)',
                  cursor: 'pointer', transition: 'all 180ms ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>

          {/* Featured post */}
          {featured && (
            <Link
              to={featured.slug}
              style={{ display: 'block', textDecoration: 'none', marginBottom: 'var(--space-8)' }}
            >
              <div
                className="card"
                style={{
                  padding: 'var(--space-8)',
                  transition: 'border-color 200ms ease, box-shadow 200ms ease',
                  borderColor: 'var(--color-border)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-primary)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                  <span className="kicker" style={{ margin: 0 }}>{featured.kicker}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)', letterSpacing: '0.04em' }}>Latest</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-3)', lineHeight: 1.25 }}>{featured.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>{featured.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>
                    {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>{featured.readTime} min read</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginLeft: 'auto' }}>
                    Read <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Rest of posts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {rest.length > 0 ? (
              rest.map((p) => (
                <Link
                  key={p.slug}
                  to={p.slug}
                  style={{ display: 'block', padding: 'var(--space-5) 0', borderBottom: '1px solid var(--color-border)', textDecoration: 'none', transition: 'opacity 150ms ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.72')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: '0.35rem' }}>
                    <span className="kicker" style={{ margin: 0 }}>{p.kicker}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)', flexShrink: 0 }}>{p.readTime} min</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.05rem,2vw,1.2rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.35rem', lineHeight: 1.35 }}>{p.title}</h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '0.4rem' }}>{p.description}</p>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>
                    {new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </Link>
              ))
            ) : (
              !featured && (
                <p style={{ padding: '3rem 0', color: 'var(--color-text-muted)', textAlign: 'center' }}>No articles in this category yet.</p>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}
