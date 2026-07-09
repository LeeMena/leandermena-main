import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'
import { heroImages } from '@/data/heroImages'

// The single local "safety net" page: owns Miami-intent queries so the
// national pages can stay geo-neutral without sacrificing local rankings.
export default function MiamiRestaurantConsultant() {
  return (
    <>
      <SEO
        title="Miami Restaurant & Hotel F&B Consultant | Leander Mena"
        description="A Miami-based F&B operations consultant with 18+ years opening and running the city's top restaurants, hotels, and banquet programs. On-site consulting across South Florida."
        path="/miami-restaurant-consultant"
        schemaType="miami"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages.miami.url}), url(${heroImages.miami.fallback})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Miami &amp; South Florida</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
            Miami Restaurant &amp; Hotel F&amp;B Consulting
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            18+ years opening and running Miami's top restaurants, hotels, and banquet programs. On-site consulting across South Florida.
          </p>
        </div>
      </section>

      {/* Local credibility */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">Local Track Record</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Built in This Market</h2>
            <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Leander Mena is a <strong style={{ color: 'var(--color-text)' }}>Miami restaurant and hotel F&amp;B consultant</strong> whose entire operating playbook was built in this market: Michelin-starred pre-openings in Midtown, banquet and events leadership at SLS Brickell, dual-concept P&amp;L management for V&amp;E Hospitality, and catering roles across the JW Marriott Marquis, Conrad, and InterContinental Miami.
            </p>
            <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              For Miami and South Florida operators, that means on-site consulting without travel overhead: pre-opening builds, operations turnarounds, banquet program fixes, and ongoing F&amp;B consulting oversight, with same-week floor presence when something breaks.
            </p>
            <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              Explore <Link to="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>engagement models</Link>, see <Link to="/case-studies" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Miami case studies</Link>, or <Link to="/contact" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>book a discovery call</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Venues */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-default)' }}>
          <ScrollReveal>
            <span className="kicker">Where the Systems Were Forged</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-6">Miami Properties &amp; Projects</h2>
            <div className="grid-3">
              {[
                { venue: 'Maska Indian Kitchen + Bar', role: 'Pre-Opening GM, Michelin-starred chef partnership' },
                { venue: 'SLS Brickell (SBE)', role: 'Director of Banquets & Events, pre-opening' },
                { venue: 'Marabu + La Cervecería de Barrio', role: 'Dual-concept GM, $9.1M annual revenue' },
                { venue: 'Plomo Tequila & Taco Bar', role: 'Pre-Opening GM, 300-cover peak days' },
                { venue: 'JW Marriott Marquis Miami', role: 'Catering & Convention Services' },
                { venue: 'Conrad · InterContinental · Hyatt', role: 'Catering and events leadership' },
              ].map((v) => (
                <div key={v.venue} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem' }}>{v.venue}</strong>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{v.role}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <ScrollReveal>
            <span className="kicker">Work Together</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Operating in Miami or South Florida?</h2>
            <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>
              Tell me where your operation is stuck. I'll tell you honestly whether I can help, and I can be on your floor this week.
            </p>
            <Link to="/contact" className="btn btn-primary">Book a Discovery Call</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
