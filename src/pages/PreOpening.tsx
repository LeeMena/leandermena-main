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
        title="Pre-Opening"
        description="Pre-opening restaurant consulting: 90-day framework from concept through launch. Leander Mena, Miami."
        path="/pre-opening"
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
            <span className="kicker">Pre-Opening Framework</span>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-6">
              From Concept to Open Door
            </h1>
            <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
              A battle-tested 90-day pre-opening system covering every phase from financial foundation through grand opening execution.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              <Link to="/blueprint" className="btn btn-secondary">Get the Blueprint</Link>
            </div>
          </ScrollReveal>
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
            <Link to="/blueprint" className="btn btn-secondary">Download the Blueprint</Link>
          </div>
        </div>
      </section>
    </>
  )
}
