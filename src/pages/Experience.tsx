import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const roles = [
  {
    venue: 'V&E Hospitality',
    title: 'General Manager | Dual Concept',
    subtitle: 'Marabu Cuban Coal Fire Restaurant + La Cervecería de Barrio · Miami, FL',
    body: 'Handpicked to launch La Cervecería de Barrio during a period of operational disruption, then earned the expanded mandate to run both venues simultaneously. Managed full P&L for a 220-seat, 78-FTE operation delivering $9.1M in annual revenue - maintaining prime costs within plan while achieving double-digit sales and margin gains. Built a delivery and takeout operation in 10 days during the 2020 pandemic pivot; scaled off-premise to 24% of the following year\'s sales without margin dilution. Drove sustained profitability through data-informed menu strategy, labor optimization, and hands-on team development.',
    link: '/case-studies',
    linkLabel: 'See case study →',
  },
  {
    venue: 'Maska Indian Kitchen + Bar',
    title: 'General Manager | Pre-Opening',
    subtitle: 'Midtown Miami, FL',
    body: 'Spearheaded the full pre-opening and launch of a 7,000 sq. ft. upscale Indian concept developed in partnership with Michelin-starred Chef Hemant Mathur. Directed 40+ hires, vendor sourcing and negotiations, supply chain setup, and cost control frameworks from groundbreaking to opening night. Drove P&L to $1.2M+ in year one through disciplined pricing, labor scheduling, and capital efficiency. Developed comprehensive SOPs and training protocols ensuring seamless FOH/BOH execution from day one.',
    link: '/case-studies',
    linkLabel: 'See case study →',
  },
  {
    venue: 'Plomo Tequila & Taco Bar',
    title: 'General Manager | Pre-Opening',
    subtitle: 'Miami, FL',
    body: 'Led all opening logistics for a high-energy taco concept - recruiting the team, designing operational workflows, establishing vendor partnerships, and implementing service standards. Scaled the restaurant to accommodate 300 covers on peak days. Reduced FOH overtime by 23% through strategic labor scheduling, controlling costs while maintaining service quality across the floor.',
    link: '/services',
    linkLabel: 'Fractional F&B director services →',
  },
  {
    venue: 'SBE | SLS Brickell Hotel Miami',
    title: 'Director of Banquets & Events | Pre-Opening',
    subtitle: 'Miami, FL',
    body: 'Built banquet and catering operations from scratch during the construction phase of one of Miami\'s most anticipated luxury hotel openings. Established workflows, vendor coordination, and team protocols to ensure a fully operational events department was ready for the hotel\'s debut. Managed complex multi-outlet event execution across F&B, AV, and facilities teams.',
    link: '/pre-opening',
    linkLabel: 'Pre-opening consulting →',
  },
  {
    venue: 'JW Marriott Marquis Miami',
    title: 'Catering & Convention Services Manager',
    subtitle: 'Miami, FL',
    body: 'Oversaw full event lifecycle for a high-volume, upscale convention hotel - from contract review and BEO management through on-floor execution. Coordinated across sales, culinary, AV, and facilities teams to deliver consistently polished events in a demanding, multi-outlet environment.',
    link: '/experience',
    linkLabel: 'Full experience →',
  },
]

const earlier = [
  { venue: 'Marriott Biscayne Bay', title: 'Senior Catering Manager' },
  { venue: 'Conrad Miami', title: 'Catering & Events Manager' },
  { venue: 'InterContinental Miami', title: 'Catering Manager' },
  { venue: 'Hyatt Regency Miami', title: 'Catering Coordinator' },
]

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience & Track Record | Leander Mena, F&B Operations"
        description="18+ years, 40+ properties, $12M+ in revenue optimized, 500+ team members trained across Michelin concepts, SLS Hotels, and Accor properties."
        path="/experience"
        schemaType="profile"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/kitchen.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Experience</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[24ch] mb-4">
            18+ Years Running Miami Restaurants and Hotel F&amp;B
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            From pre-opening GM roles to dual-concept operations and hotel catering leadership across Miami and South Florida.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {roles.map((r, i) => (
                <article
                  key={i}
                  style={{
                    padding: 'clamp(1.5rem,4vw,2.5rem) 0',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem 1.5rem', marginBottom: '0.25rem' }}>
                    <span className="font-display" style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)', fontWeight: 700, color: 'var(--color-text)' }}>{r.venue}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{r.title}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>{r.subtitle}</div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: '72ch' }}>{r.body}</p>
                  <Link to={r.link} style={{ fontSize: '0.82rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>{r.linkLabel}</Link>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Earlier roles */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-default)' }}>
          <ScrollReveal>
            <span className="kicker">Earlier Career</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-6">Earlier Roles: Catering, Banquets &amp; Hotel F&amp;B</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem' }}>
              {earlier.map((e, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{e.venue}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{e.title}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">Education &amp; Credentials</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-4">Education &amp; Credentials</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontWeight: 700, marginBottom: '0.2rem' }}>B.A. Hospitality Management</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Florida International University - FIU Chaplin School of Hospitality &amp; Tourism Management</div>
              </div>
              <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontWeight: 700, marginBottom: '0.2rem' }}>ServSafe Food Manager Certified</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>National Restaurant Association</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <ScrollReveal>
            <span className="kicker">Work Together</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Let’s Build Something Together</h2>
            <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>Looking for an experienced F&amp;B operator or pre-opening GM for your next project in Miami?</p>
            <Link to="/contact" className="btn btn-primary">Work Together</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
