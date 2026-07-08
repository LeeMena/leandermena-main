import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'
import { heroImages } from '@/data/heroImages'

const industries = [
  {
    title: 'Independent Restaurants',
    body: 'Single-unit and owner-operated concepts that need executive-level systems without executive headcount: labor models, menu economics, SOPs, and a trained bench.',
    link: '/services',
    linkLabel: 'Fractional leadership',
  },
  {
    title: 'Multi-Unit Restaurant Groups',
    body: 'Groups scaling past the founder’s reach. Standardized playbooks, per-unit P&L discipline, and manager development so every room runs like the flagship.',
    link: '/case-studies',
    linkLabel: 'See the results',
  },
  {
    title: 'Hotels & Resorts F&B',
    body: 'All-day dining, specialty outlets, lobby bars, and in-room dining. Outlet-level P&L accountability and service standards built for luxury guest expectations.',
    link: '/pre-opening',
    linkLabel: 'Pre-opening builds',
  },
  {
    title: 'Banquets & Catering',
    body: 'From 50-cover private dinners to 1,000+ person conventions. BEO workflows, staff deployment models, and margin discipline for event-driven revenue.',
    link: '/services',
    linkLabel: 'Operations recovery',
  },
  {
    title: 'Private Clubs',
    body: 'Member-driven F&B where consistency is the product. Service rituals, retention-focused training, and financial reporting boards actually read.',
    link: '/contact',
    linkLabel: 'Start a conversation',
  },
  {
    title: 'New Concepts & Openings',
    body: 'First-time operators and seasoned developers alike: concept-to-opening-night infrastructure with a fixed scope and a hard deadline.',
    link: '/pre-opening',
    linkLabel: 'Open on time',
  },
]

export default function Industries() {
  return (
    <>
      <SEO
        title="Who I Work With | Leander Mena, Fractional F&B"
        description="Fractional F&B operations leadership for independent restaurants, multi-unit groups, hotel and resort F&B programs, banquet and catering operations, and private clubs nationwide."
        path="/industries"
        schemaType="industries"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '400px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages.industries.url}), url(${heroImages.industries.fallback})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Who I Work With</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
            Operators, Owners &amp; F&amp;B Programs Nationwide
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            The same operating discipline, applied to every format hospitality comes in: independent rooms, hotel programs, banquet floors, and clubs.
          </p>
        </div>
      </section>

      {/* Industry grid */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="grid-3">
              {industries.map((ind) => (
                <div key={ind.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <strong style={{ fontSize: '1.05rem', fontWeight: 700 }}>{ind.title}</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.7, flexGrow: 1 }}>{ind.body}</p>
                  <Link to={ind.link} style={{ fontSize: '0.8rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>
                    {ind.linkLabel} →
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <ScrollReveal>
            <span className="kicker">Not sure where you fit?</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Every Engagement Starts the Same Way</h2>
            <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>
              A 30-minute conversation about your operation, your numbers, and whether fractional leadership is the right tool.
            </p>
            <Link to="/contact" className="btn btn-primary">Book a Discovery Call</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
