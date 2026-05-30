import SEO from '@/components/SEO';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies — F&B Operations Results | Leander Mena"
        description="Real results from pre-opening projects, operations recovery, and fractional GM engagements across Miami hospitality."
        path="/case-studies"
      />

      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="kicker">Documented Results</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 700, letterSpacing: '-0.02em',
            marginBottom: 'var(--space-3)',
          }}>
            Case Studies
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            color: 'var(--color-text-muted)',
            maxWidth: '58ch',
          }}>
            A selection of engagements with documented outcomes - pre-openings, turnarounds, and operational transformations across Miami hospitality.
          </p>
        </div>
      </header>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {caseStudies.map((cs, i) => (
              <article
                key={cs.id}
                className="card"
                style={{ padding: 'var(--space-8)' }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'var(--space-8)',
                  alignItems: 'start',
                }}>

                  {/* Left: Meta + Challenge */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
                      {cs.badge && (
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em',
                          textTransform: 'uppercase',
                          background: 'var(--color-primary)', color: '#0a0a0a',
                          padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)',
                        }}>
                          {cs.badge}
                        </span>
                      )}
                      <span className="kicker" style={{ margin: 0 }}>{cs.category}</span>
                    </div>

                    <h2 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                      fontWeight: 700, marginBottom: 'var(--space-2)',
                      lineHeight: 1.2,
                    }}>
                      {cs.title}
                    </h2>

                    <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                        <strong style={{ color: 'var(--color-text)' }}>Property:</strong> {cs.property}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                        <strong style={{ color: 'var(--color-text)' }}>Location:</strong> {cs.location}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                        <strong style={{ color: 'var(--color-text)' }}>Timeline:</strong> {cs.timeframe}
                      </span>
                    </div>

                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <h3 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>The Challenge</h3>
                      <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{cs.challenge}</p>
                    </div>

                    <div>
                      <h3 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>The Approach</h3>
                      <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{cs.approach}</p>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div
                    style={{
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-6)',
                    }}
                  >
                    <h3 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>Results</h3>
                    <ul className="list">
                      {cs.results.map((r) => (
                        <li key={r} style={{ color: 'var(--color-text)', fontWeight: 500 }}>{r}</li>
                      ))}
                    </ul>

                    <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
                      <a href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                        Discuss Your Project
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Ready to Work Together?</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700, marginBottom: 'var(--space-4)',
          }}>
            Your operation could be the next case study.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)', maxWidth: '52ch', marginInline: 'auto' }}>
            Pre-opening, recovery, or fractional leadership - let's talk about what your property needs.
          </p>
          <a href="/contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </section>
    </>
  );
}
