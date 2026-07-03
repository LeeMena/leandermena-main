import { caseStudies } from '@/data/caseStudies'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Real results from Miami restaurant and hotel F&B consulting engagements: pre-opening builds, labor turnarounds, and multi-property scaling."
        path="/case-studies"
        schemaType="article"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '380px' }}>
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: 'url(/images/fnb-manager.jpg)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.45) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,8vw,6rem)' }}>
          <span className="kicker">Results</span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4">
            Case Studies
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Real outcomes from the floor. Every engagement measured by results.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))',
            gap: '1.5rem',
          }}>
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 0.07}>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <article style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'box-shadow 200ms ease, transform 200ms ease',
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.boxShadow = 'var(--shadow-lg)'
                      el.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.boxShadow = 'none'
                      el.style.transform = 'none'
                    }}
                  >
                    {/* Quote block */}
                    {cs.quote && (
                      <blockquote style={{
                        margin: 0,
                        padding: '1.5rem 1.5rem 1rem',
                        borderBottom: '1px solid var(--color-border)',
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.65,
                        flexShrink: 0,
                      }}>
                        &ldquo;{cs.quote.text}&rdquo;
                        <cite style={{ display: 'block', marginTop: '0.5rem', fontStyle: 'normal' }}>
                          <span className="block mt-1 not-italic font-bold text-xs uppercase tracking-widest text-[#b8a080]">{cs.quote.author}</span>
                        </cite>
                      </blockquote>
                    )}

                    {/* Body */}
                    <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span className="kicker" style={{ marginBottom: '0.4rem' }}>{cs.category}</span>
                      <h2 style={{ fontSize: 'clamp(1rem,2vw,1.15rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{cs.title}</h2>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>{cs.challenge}</p>

                      {/* Metrics */}
                      {cs.metrics && cs.metrics.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                          {cs.metrics.map((m, mi) => (
                            <span key={mi} style={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '9999px',
                              background: 'var(--color-surface-offset)',
                              color: 'var(--color-text-muted)',
                              border: '1px solid var(--color-border)',
                            }}>{m}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
