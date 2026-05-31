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

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '680px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/case-studies.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.05) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(6rem,13vw,11rem)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="kicker">Documented Results</span>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-6">
                Case Studies
              </h1>
              <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
                A selection of engagements with documented outcomes — pre-openings, turnarounds, and operational transformations across Miami hospitality.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
                <Link to="/services" className="btn btn-secondary">View Services</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">Results at a Glance</span>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {[
                    { num: '$9.1M', label: 'Annual Revenue Managed' },
                    { num: '23%', label: 'FOH Overtime Reduction' },
                    { num: '$1.2M+', label: 'Year-One Revenue, Maska' },
                    { num: '$180K+', label: 'Annual Savings, Accor Hotels' },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <strong className="text-2xl font-extrabold text-[#d4b896]">{s.num}</strong>
                      <span className="text-xs text-[#cccccc] leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
