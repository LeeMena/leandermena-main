import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const cases = [
  {
    id: 'nightclub-recovery',
    label: 'Operations Recovery',
    title: 'From 38% Labor to Break-Even in 90 Days',
    location: 'Miami Beach nightclub, 400-capacity',
    challenge: 'Labor costs had ballooned to 38% of revenue. Management instability, no scheduling discipline, and a team operating without accountability structures.',
    approach: 'Completed a full labor audit in week one. Rebuilt the scheduling model around covers and revenue targets, not habit. Installed shift lead accountability and a daily P&L review cadence.',
    result: 'Labor dropped to 26% within 60 days. The venue hit break-even for the first time in 14 months by day 90. The scheduling model is still in use two years later.',
    metrics: ['38% → 26% labor cost', 'Break-even in 90 days', 'Team retention improved 40%'],
  },
  {
    id: 'hotel-fnb',
    label: 'Hotel F&B Restructure',
    title: 'Restructuring a 3-Outlet Hotel F&B Operation',
    location: 'Boutique hotel, Brickell',
    challenge: 'Three outlets operating as separate silos — rooftop bar, lobby café, and in-room dining — each with independent staffing and no shared systems. High cost, inconsistent guest experience.',
    approach: 'Consolidated the staffing model across all three outlets with cross-trained flex teams. Rebuilt the in-room dining menu to reduce prep complexity. Created unified SOPs for service standards.',
    result: 'F&B payroll reduced by 22% within one quarter. Guest satisfaction scores improved across all three outlets. The unified SOP became the property standard.',
    metrics: ['22% payroll reduction', 'Unified SOP across 3 outlets', 'Guest scores up across all outlets'],
  },
  {
    id: 'pre-opening',
    label: 'Pre-Opening Build',
    title: 'Pre-Opening Build: 220-Seat Latin-American Concept',
    location: 'Wynwood, Miami',
    challenge: 'The concept had a strong culinary identity but no operational infrastructure. Needed to build from scratch: hiring, training, systems, vendor relationships, and opening execution in 11 weeks.',
    approach: 'Led the full pre-opening build — staffing plan, hiring, menu training, POS configuration, vendor onboarding, and soft-open sequence. Ran two soft opens and a structured friends-and-family period.',
    result: 'Opened on schedule. First month revenue exceeded projections by 18%. Zero staff departures in the first 60 days — unusual for a new concept in a competitive market.',
    metrics: ['On-time opening', '18% above revenue projection', 'Zero staff departures in 60 days'],
  },
]

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies - F&B Operations Results | Leander Mena"
        description="Real results from Miami restaurant and hotel F&B consulting engagements - labor recovery, pre-opening builds, and multi-outlet restructures."
        path="/case-studies"
        schemaType="caseStudies"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/dining.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Case Studies</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4">
            Results from the Field
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Anonymized engagements. Real numbers. The kind of work that actually moves an operation.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {cases.map((c) => (
              <div key={c.id} className="card">
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span className="kicker" style={{ margin: 0 }}>{c.label}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-faint)' }}>{c.location}</span>
                </div>
                <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 700, marginBottom: '1.5rem' }}>{c.title}</h2>
                <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>Challenge</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{c.challenge}</p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>Approach</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{c.approach}</p>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>Result</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{c.result}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {c.metrics.map((m) => (
                    <span key={m} style={{
                      fontSize: '0.78rem', fontWeight: 600,
                      background: 'var(--color-primary-highlight)',
                      color: 'var(--color-primary)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                    }}>{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Your operation</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">What would your result look like?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>Every engagement starts with an honest conversation about where the operation is and what's actually possible.</p>
          <Link to="/contact" className="btn btn-primary">Start the Conversation</Link>
        </div>
      </section>
    </>
  )
}
