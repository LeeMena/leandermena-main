import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const roles = [
  {
    venue: 'V&E Hospitality',
    title: 'General Manager — Dual Concepts',
    subtitle: 'Marabu Cuban Coal Fire Restaurant + La Cervecería de Barrio · Miami, FL',
    body: 'Handpicked to launch La Cervecería de Barrio during a period of operational disruption, then earned the expanded mandate to run both venues simultaneously. Managed full P&L for a 220-seat, 78-FTE operation delivering $9.1M in annual revenue — maintaining prime costs within plan while achieving double-digit sales and margin gains. Built a delivery and takeout operation in 10 days during the 2020 pandemic pivot; scaled off-premise to 24% of the following year\'s sales without margin dilution. Drove sustained profitability through data-informed menu strategy, labor optimization, and hands-on team development.',
    link: '/case-studies',
  },
  {
    venue: 'Maska Indian Kitchen + Bar',
    title: 'General Manager — Pre-Opening',
    subtitle: 'Midtown Miami, FL',
    body: 'Spearheaded the full pre-opening and launch of a 7,000 sq. ft. upscale Indian concept developed in partnership with Michelin-starred Chef Hemant Mathur. Directed 40+ hires, vendor sourcing and negotiations, supply chain setup, and cost control frameworks from groundbreaking to opening night. Drove P&L to $1.2M+ in year one through disciplined pricing, labor scheduling, and capital efficiency. Developed comprehensive SOPs and training protocols ensuring seamless FOH/BOH execution from day one.',
    link: '/case-studies',
  },
  {
    venue: 'Plomo Tequila & Taco Bar',
    title: 'General Manager — Pre-Opening',
    subtitle: 'Miami, FL',
    body: 'Led all opening logistics for a high-energy taco concept — recruiting the team, designing operational workflows, establishing vendor partnerships, and implementing service standards. Scaled the restaurant to accommodate 300 covers on peak days. Reduced FOH overtime by 23% through strategic labor scheduling, controlling costs while maintaining service quality across the floor.',
    link: '/services',
  },
  {
    venue: 'SBE | SLS Brickell Hotel Miami',
    title: 'Director of Banquets — Pre-Opening',
    subtitle: 'Miami, FL',
    body: 'Built banquet operations from scratch during the construction phase of one of Miami\'s most anticipated luxury hotel openings. Established workflows, vendor coordination, and team protocols to ensure seamless day-one readiness. Played a key role in executing the star-studded grand opening welcoming 1,500+ guests including celebrities and VIPs. Guided the full transition from construction site to five-star operational venue.',
    link: '/case-studies',
  },
  {
    venue: 'Accor Hotels | Sofitel → Pullman Miami Airport',
    title: 'Food & Beverage Manager — Rebrand',
    subtitle: 'Miami, FL',
    body: 'Led F&B operations through the repositioning of Sofitel Miami into Pullman Miami Airport, aligning all service standards with an elevated brand identity. Centralized beverage purchasing and achieved $180K+ in annual savings while strengthening supplier relationships and quality control. Developed comprehensive SOPs and staff training programs that raised team efficiency and service consistency across all outlets.',
    link: '/services',
  },
]

const earlier = [
  'Viceroy Hotel — Banquets Manager',
  'Grove Isle Hotel & Spa — Catering & Events Manager',
  'Palms Hotel & Spa — Catering Coordinator',
  'InterContinental Miami — Restaurant & Outlets Manager',
]

const tools = [
  { category: 'POS & Hospitality', items: 'Restaurant365 · Toast · SkyTab · Micros · Delphi · Opera · Extra Chef' },
  { category: 'Business Tools', items: 'Salesforce CRM · Microsoft Office Suite · Data Analysis & Forecasting' },
  { category: 'Languages', items: 'English (Fluent) · Spanish (Fluent) · French (Conversational)' },
]

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Leander Mena's Miami hospitality career - GM, pre-opening director, and F&B consultant across restaurants, hotels, and catering operations."
        path="/experience"
        schemaType="experience"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a] min-h-[280px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact.jpg"
            alt=""
            width="1400"
            height="600"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 py-16">
          <span className="kicker">Career History</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Experience
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            18 years opening, scaling, and leading hospitality operations across Miami's most demanding venues.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-6">
            {roles.map((r, i) => (
              <ScrollReveal key={r.venue} delay={i * 80}>
                <div className="role">
                  <div className="role-meta" style={{ paddingTop: 'var(--space-1)' }}>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#b8a080] block">{r.venue}</span>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-1">{r.title}</h2>
                    <p className="text-xs text-[#888888] mb-3 tracking-wide">{r.subtitle}</p>
                    <p className="text-[#888888] max-w-[68ch] mb-3 leading-relaxed" style={{ fontSize: '0.9rem' }}>{r.body}</p>
                    <Link to={r.link} className="text-xs text-[#b8a080] hover:text-[#d4b896] transition-colors">
                      Related work →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Earlier Roles */}
          <ScrollReveal delay={100}>
            <div className="mt-10 card" style={{ padding: 'var(--space-6)' }}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#b8a080] mb-4">Earlier Roles</h3>
              <div className="flex flex-wrap gap-3">
                {earlier.map((e) => (
                  <span key={e} style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-text-muted)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.25rem 0.75rem',
                  }}>{e}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tools & Languages */}
          <ScrollReveal delay={120}>
            <div className="mt-6 card" style={{ padding: 'var(--space-6)' }}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#b8a080] mb-5">Technical Proficiency & Languages</h3>
              <div className="flex flex-col gap-4">
                {tools.map((t) => (
                  <div key={t.category} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text)', minWidth: '160px' }}>{t.category}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{t.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn btn-primary">Work Together</Link>
          </div>
        </div>
      </section>
    </>
  )
}
