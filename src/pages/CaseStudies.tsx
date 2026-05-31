import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { caseStudies } from '@/data/caseStudies'

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies — F&B Operations Results | Leander Mena"
        description="Real results from pre-opening projects, operations recovery, and fractional GM engagements across Miami hospitality."
        path="/case-studies"
      />

      <header className="page-header">
        <div className="container">
          <span className="kicker">Documented Results</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 'var(--space-3)',
          }}>
            Case Studies
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            color: 'var(--color-text-muted)',
            maxWidth: '58ch',
          }}>
            A selection of engagements with documented outcomes — pre-openings, turnarounds, and operational transformations across Miami hospitality.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.id} delay={i * 80}>
                <article className="card" style={{ padding: 'var(--space-8)' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--space-8)',
                    alignItems: 'start',
                  }}>

                    {/* Left: Meta + Challenge + Approach */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          background: 'var(--color-primary)', color: '#fff',
                          padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)',
                        }}>
                          {cs.industry}
                        </span>
                        <span className="kicker" style={{ margin: 0 }}>{cs.duration}</span>
                      </div>

                      <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)',
                        fontWeight: 700,
                        marginBottom: 'var(--space-2)',
                        lineHeight: 1.2,
                        color: 'var(--color-text)',
                      }}>
                        {cs.title}
                      </h2>

                      <p style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--space-5)' }}>
                        {cs.client}
                      </p>

                      <div style={{ marginBottom: 'var(--space-4)' }}>
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>The Challenge</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.68 }}>{cs.challenge}</p>
                      </div>

                      <div style={{ marginBottom: 'var(--space-5)' }}>
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>The Approach</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.68 }}>{cs.approach}</p>
                      </div>

                      {/* Services tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                        {cs.services.map((s) => (
                          <span key={s} style={{
                            fontSize: '0.68rem', letterSpacing: '0.06em',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-full)',
                            padding: '0.2rem 0.65rem',
                            color: 'var(--color-text-muted)',
                          }}>{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Results + Testimonial */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                      {/* Results grid */}
                      <div style={{
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--space-6)',
                      }}>
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>Results</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                          {cs.results.map((r) => (
                            <div key={r.label}>
                              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1 }}>{r.metric}</p>
                              <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)', lineHeight: 1.4 }}>{r.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      {cs.testimonial && (
                        <blockquote style={{
                          background: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          borderLeft: '3px solid var(--color-primary)',
                          borderRadius: 'var(--radius-md)',
                          padding: 'var(--space-5)',
                          margin: 0,
                        }}>
                          <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>"{cs.testimonial}"</p>
                        </blockquote>
                      )}

                      <Link to="/contact" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                        Discuss Your Project
                      </Link>
                    </div>

                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Ready to Work Together?</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700,
            marginBottom: 'var(--space-4)',
          }}>
            Your operation could be the next case study.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)', maxWidth: '52ch', marginInline: 'auto' }}>
            Pre-opening, recovery, or fractional leadership — let&rsquo;s talk about what your property needs.
          </p>
          <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
