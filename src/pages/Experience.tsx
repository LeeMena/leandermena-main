import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

const roles = [
  {
    title: 'Director of Food & Beverage',
    company: 'La Cerveceria de Barrio',
    period: '2019 – 2023',
    location: 'Miami, FL',
    highlights: [
      'Oversaw $9.1M annual F&B revenue across full-service operations',
      'Led team of 78 FTEs across front-of-house, kitchen, and events',
      'Built delivery program from zero to operational in 10 days during pandemic',
      'Reduced labor cost by 4.2% through scheduling model redesign',
      'Managed full P&L including menu engineering, pricing, and vendor negotiations',
    ],
  },
  {
    title: 'F&B Operations Manager',
    company: 'V&E Hospitality',
    period: '2015 – 2019',
    location: 'Miami, FL',
    highlights: [
      'Directed pre-opening operations for two multi-concept hotel F&B programs',
      'Hired and trained 40+ team members per opening',
      'Developed SOP libraries, training manuals, and service standards',
      'Managed banquet and catering operations up to 500 covers',
      'Coordinated cross-functional buildout teams from permits through launch',
    ],
  },
  {
    title: 'Restaurant General Manager',
    company: 'Independent Concepts — Miami',
    period: '2008 – 2015',
    location: 'Miami, FL',
    highlights: [
      '7 years managing high-volume independent restaurants in Miami',
      'Built and scaled front-of-house teams across casual and fine dining formats',
      'Introduced structured labor modeling and cost-control disciplines',
      'Developed guest experience standards and service training programs',
      'Oversaw full operational P&L including food, beverage, and labor costs',
    ],
  },
]

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="18 years of F&B operations leadership in Miami. Director-level experience across independent restaurants, hotels, and pre-openings."
        path="/experience"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/experience.jpg"
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
            <span className="kicker">18 Years in Miami Hospitality</span>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-6">
              Experience & Track Record
            </h1>
            <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
              Director-level F&B operations across independent restaurants, luxury hotels, and multi-unit concepts throughout Miami.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-8">
            {roles.map((r, i) => (
              <ScrollReveal key={r.company} delay={i * 120}>
                <div className="card" style={{ padding: 'var(--space-6)' }}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h2 className="font-display text-xl font-bold text-[#e8e8e8]">{r.title}</h2>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, margin: '0.2rem 0 0' }}>{r.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block' }}>{r.period}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>{r.location}</span>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {r.highlights.map(h => (
                      <li key={h} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, marginTop: '0.55rem', display: 'inline-block' }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="btn btn-primary">Let&rsquo;s Talk</Link>
            <Link to="/about" className="btn btn-secondary">Full Profile</Link>
          </div>
        </div>
      </section>
    </>
  )
}
