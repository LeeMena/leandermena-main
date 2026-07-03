import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Fractional F&B Director & GM Services – Miami Restaurants & Hotels | Leander Mena"
        description="Fractional F&B director and GM services for Miami restaurants, hotels, and hotel F&B programs. Operations leadership, pre-opening support, and team development — scoped to your exact needs."
        path="/services"
        schemaType="services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/dining.jpg)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Services</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
            Fractional F&amp;B Operations &amp; GM Services in Miami
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Executive-level F&amp;B leadership for Miami restaurants and hotels — without the full-time executive cost. Every engagement is scoped to the specific gaps and goals of your operation.
          </p>
        </div>
      </section>

      {/* SEO intro section */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Leander Mena provides <strong style={{ color: 'var(--color-text)' }}>fractional F&amp;B director and general manager services for Miami restaurants and hotels</strong>. With 18+ years running operations across independent concepts, hotel F&amp;B programs, and high-volume banquet venues, you get executive-level leadership and a proven operating playbook — without the full-time executive headcount.
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The fractional model is built for owners and operators who need an experienced GM or F&amp;B director to stabilize operations, build systems, and develop teams — but don't want to commit to a permanent executive salary. Engagements range from <Link to="/pre-opening" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>restaurant pre-opening GM support</Link> to ongoing fractional F&amp;B oversight across one or multiple Miami venues.
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            Whether you're launching a new concept in Miami or fixing an underperforming restaurant or hotel outlet, <Link to="/about" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>fractional F&amp;B leadership</Link> delivers a structured operating playbook: labor models, SOPs, menu economics, training programs, and performance dashboards tailored to your property.
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
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Ready to start?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>Tell me what you're working with. I'll tell you honestly whether I can help.</p>
          <Link to="/contact" className="btn btn-primary">Start the Conversation</Link>
        </div>
      </section>
    </>
  )
}
