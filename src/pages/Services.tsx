import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Hospitality Consulting Services - Miami | Leander Mena"
        description="Fractional GM services, pre-opening builds, and operations recovery for Miami restaurants and hotel F&B teams."
        path="/services"
      />

      {/* Hero - About-style full-bleed */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/dining.jpg)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Services</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[18ch] mb-4">
            Miami Hospitality Consulting Services
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Every engagement is scoped to the specific gaps and goals of your operation.
            No retainers, no vague deliverables - just clear work and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {services.map((s) => (
              <div key={s.id} className="card" style={{ position: 'relative' }}>
                {s.popular && (
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'var(--color-primary)', color: '#0a0a0a',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-sm)'
                  }}>Most Popular</span>
                )}
                <div className="grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
                  <div>
                    <span className="kicker">{s.subtitle}</span>
                    <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 700, marginBottom: '0.75rem' }}>{s.title}</h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.description}</p>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{s.price}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>{s.priceNote}</span>
                    </div>
                    <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>{s.cta}</Link>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>What's included</strong>
                      <ul className="list">
                        {s.features.map((f) => <li key={f}>{f}</li>)}
                      </ul>
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>Deliverables</strong>
                      <ul className="list">
                        {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Get started</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Not sure which service fits?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>Every engagement starts with a conversation. Tell me about your operation and I'll tell you what I'd do.</p>
          <Link to="/contact" className="btn btn-primary">Schedule a Free Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
