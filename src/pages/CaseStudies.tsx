import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'
import { caseStudies } from '@/caseStudies'

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Real F&B operations results: pre-openings, turnarounds, and revenue recovery across Miami hospitality."
        path="/case-studies"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/case-studies.jpg"
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
            <span className="kicker">Real Results</span>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-6">
              Case Studies
            </h1>
            <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
              Operational outcomes from pre-openings, turnarounds, and embedded engagements across Miami hospitality.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.id} delay={i * 100}>
                <div className="card" style={{ padding: 'var(--space-6)' }}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.4rem' }}>{cs.category}</span>
                      <h2 className="font-display text-xl font-bold text-[#e8e8e8]">{cs.title}</h2>
                    </div>
                    {cs.metric && (
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <strong style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', display: 'block' }}>{cs.metric}</strong>
                        <span style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>{cs.metricLabel}</span>
                      </div>
                    )}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{cs.summary}</p>
                  {cs.outcomes && (
                    <div className="flex flex-wrap gap-2">
                      {cs.outcomes.map(o => (
                        <span key={o} style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', background: 'rgba(180,144,96,0.1)', color: 'var(--color-primary)', letterSpacing: '0.04em' }}>{o}</span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="btn btn-primary">Start the Conversation</Link>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
