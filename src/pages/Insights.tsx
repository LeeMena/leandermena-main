import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'

const posts = [
  {
    slug: '/insights/fractional-gm',
    category: 'Leadership',
    title: 'What a Fractional GM Actually Does',
    excerpt: 'Most operators think fractional means part-time. It doesn\'t. Here\'s what a real fractional engagement looks like — and what it costs you not to have one.',
    image: '/images/fnb-manager.jpg',
    date: 'May 2025',
  },
  {
    slug: '/insights/pre-opening-checklist',
    category: 'Pre-Opening',
    title: 'The Pre-Opening Checklist That Actually Works',
    excerpt: 'After five pre-openings across Miami — restaurants, hotels, and catering — here\'s the framework that keeps a launch from falling apart in week one.',
    image: '/images/playbook.jpg',
    date: 'April 2025',
  },
  {
    slug: '/insights/labor-cost-control',
    category: 'Operations',
    title: 'How to Control Labor Cost Without Killing Morale',
    excerpt: 'Labor is your biggest lever — and your biggest risk. The operators who get it right aren\'t cutting heads. They\'re scheduling smarter and measuring what matters.',
    image: '/images/labor.jpg',
    date: 'March 2025',
  },
]

export default function Insights() {
  return (
    <>
      <SEO
        title="Insights — F&B Operations | Leander Mena"
        description="Practical hospitality operations insights from 18 years in Miami F&B — pre-opening, labor, leadership, and revenue."
        path="/insights"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: 'clamp(420px, 60vw, 680px)' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/insights.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10" style={{ paddingTop: 'clamp(3rem, 10vw, 7rem)', paddingBottom: 'clamp(3rem, 10vw, 7rem)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="kicker">Field Notes</span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4 lg:mb-6">
                Insights & Resources
              </h1>
              <p className="text-[#d8d8d8] text-base lg:text-lg max-w-[52ch] mb-6 lg:mb-8 leading-relaxed">
                Practical hospitality operations thinking from 18 years on the floor — pre-opening, labor, leadership, and revenue.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
                <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="hidden lg:block">
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">Latest Topics</span>
                <div className="flex flex-col gap-4 mt-4">
                  {posts.map((p) => (
                    <Link key={p.slug} to={p.slug} className="flex flex-col gap-1 group">
                      <span className="text-xs text-[#b8a080] uppercase tracking-widest">{p.category}</span>
                      <span className="text-sm text-[#e8e8e8] group-hover:text-[#d4b896] transition-colors leading-snug">{p.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link to={post.slug} className="card flex flex-col overflow-hidden group" style={{ textDecoration: 'none' }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--color-surface-offset)' }}>
                    <img src={post.image} alt={post.title} width="600" height="338" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                      <span className="kicker" style={{ margin: 0 }}>{post.category}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>{post.date}</span>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.65, flex: 1 }}>{post.excerpt}</p>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-primary)', fontWeight: 600, marginTop: 'var(--space-2)' }}>Read →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Want This Applied to Your Operation?</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>Reading is one thing. Execution is another.</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)', maxWidth: '52ch', marginInline: 'auto' }}>If any of this resonates, let's talk about what your operation actually needs.</p>
          <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
