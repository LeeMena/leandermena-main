import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'pre-opening',
    title: 'The 90-Day Pre-Opening Framework',
    description: 'A structured approach to taking a restaurant concept from permit to packed house in 90 days without the chaos most operators accept as normal.',
    kicker: 'Pre-Opening',
    readTime: '8 min read',
  },
  {
    slug: 'fractional-gm',
    title: 'Why Fractional F&B Leadership Works',
    description: 'How operators are replacing full-time directors with fractional leaders — and getting better results at a fraction of the cost.',
    kicker: 'Leadership',
    readTime: '6 min read',
  },
  {
    slug: 'labor-cost',
    title: 'Controlling Labor Cost Without Cutting Staff',
    description: 'The scheduling and modeling disciplines that let high-volume operators reduce labor cost by 3–5% without losing team quality or guest experience.',
    kicker: 'Operations',
    readTime: '7 min read',
  },
]

export default function BlogIndex() {
  return (
    <>
      <SEO
        title="Insights"
        description="F&B operations insights from Leander Mena — pre-opening, labor cost, fractional leadership, and more."
        path="/insights"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/insights.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(5rem,11vw,9rem)]">
          <ScrollReveal>
            <span className="kicker">Field Notes</span>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-[#d8d8d8] text-lg max-w-[52ch] leading-relaxed">
              Practical F&B operations thinking from 18 years on the floor — no filler, no listicles.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-6">
            {posts.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 100}>
                <Link to={`/insights/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: 'var(--space-6)', cursor: 'pointer', transition: 'border-color 200ms ease' }}>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>{p.kicker}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>{p.readTime}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">{p.title}</h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 0 }}>{p.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
