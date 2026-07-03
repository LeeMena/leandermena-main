import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

const phases = [
  {
    number: '01',
    title: 'Concept & Financial Foundation',
    items: ['Concept statement and guest persona', 'P&L structure and opening budget', 'Labor and food cost targets', 'Entity, EIN, licenses, zoning, insurance', 'Org chart and hiring timeline'],
  },
  {
    number: '02',
    title: 'Buildout & Procurement',
    items: ['Vendor matrix and negotiation', 'Equipment and smallwares', 'Menu engineering and costing', 'POS, reservations, CRM setup', 'Digital presence and delivery setup'],
  },
  {
    number: '03',
    title: 'People & Process',
    items: ['Hiring sprint and structured interviews', 'SOP development', 'Two-week training curriculum', 'Soft opening planning', 'Guest feedback loop'],
  },
  {
    number: '04',
    title: 'Final Sprint & Launch',
    items: ['Inspection and permit finals', 'Staff readiness and mock service', 'Opening week execution cadence', 'Weekly scorecard', 'Red-flag trigger system'],
  },
]

export default function PreOpening() {
  return (
    <>
      <SEO
        title="Restaurant Pre-Opening Consultant Miami – 90-Day Launch Framework | Leander Mena"
        description="Restaurant and hotel F&B pre-opening consultant in Miami. End-to-end 90-day framework covering concept, hiring, SOP development, training, and opening-day execution."
        path="/pre-opening"
        schemaType="pre-opening"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/pre-opening.jpg"
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
            <span className="kicker">Pre-Opening Consulting</span>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-6">
              Restaurant Pre-Opening Consultant — Miami
            </h1>
            <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-4 leading-relaxed">
              A battle-tested 90-day pre-opening system for Miami restaurants and hotel F&amp;B programs — covering every phase from financial foundation through grand opening execution.
            </p>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] mb-8 leading-relaxed">
              18+ years leading pre-openings across independent concepts, luxury hotels, and multi-unit groups in Miami. Every phase is run with the same discipline: sequenced milestones, clear ownership, and no surprises on opening night.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              <Link to="/blueprint" className="btn btn-secondary">Get the Pre-Opening Blueprint</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEO intro */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            A <strong style={{ color: 'var(--color-text)' }}>restaurant pre-opening consultant in Miami</strong> manages every workstream between the day you sign your lease and the day you open your doors: concept alignment, vendor sourcing, licensing, hiring, SOP development, staff training, and opening-week execution. Without that structure, most openings run over budget, open late, and struggle through the first 90 days.
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            The <Link to="/blueprint" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Pre-Opening Blueprint</Link> that drives every engagement is built from 5+ pre-openings led across Miami — including a Michelin-starred concept, a luxury hotel banquet program, and multi-unit independent groups. <Link to="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>See all fractional F&amp;B director services →</Link>
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="section">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-6">
            {phases.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 100}>
                <div className="card h-full" style={{ padding: 'var(--space-6)' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>Phase {p.number}</span>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-4">{p.title}</h2>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {p.items.map(item => (
                      <li key={item} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, marginTop: '0.55rem', display: 'inline-block' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="btn btn-primary">Start the Conversation</Link>
            <Link to="/blueprint" className="btn btn-secondary">Download the Pre-Opening Blueprint</Link>
          </div>
        </div>
      </section>
    </>
  )
}
