import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'

const cases = [
  {
    id: 'sls-brickell',
    kicker: 'Hotel F&B - Pre-Opening',
    title: 'SLS Brickell - Multi-Outlet Pre-Opening',
    location: 'Miami, FL',
    role: 'Director of F&B Operations',
    result: '$9.1M revenue managed across 4 outlets in first year',
    metrics: [
      { label: 'Revenue Managed', value: '$9.1M' },
      { label: 'Outlets Opened', value: '4' },
      { label: 'Team Built', value: '80+' },
    ],
    body: 'Led full pre-opening build for SLS Brickell hotel F&B division including rooftop bar, restaurant, banquet, and in-room dining. Responsible for hiring, SOP development, vendor contracts, and opening-night execution across all four outlets.',
  },
  {
    id: 'maska',
    kicker: 'Independent Restaurant - Recovery',
    title: 'Maska - Operations Stabilization',
    location: 'Miami, FL',
    role: 'Fractional General Manager',
    result: '23% overtime reduction within 60 days',
    metrics: [
      { label: 'Overtime Reduction', value: '23%' },
      { label: 'Timeline', value: '60 days' },
      { label: 'Team Size', value: '35' },
    ],
    body: 'Engaged post-opening to stabilize a high-volume Indian concept struggling with labor costs and service consistency. Rebuilt scheduling model, retraining service team, and implemented line-level accountability systems.',
  },
  {
    id: 'viceroy',
    kicker: 'Luxury Hotel - Turnaround',
    title: 'Viceroy Miami - F&B Turnaround',
    location: 'Miami, FL',
    role: 'F&B Operations Consultant',
    result: 'F&B cost reduced from 38% to 31% in 90 days',
    metrics: [
      { label: 'F&B Cost Reduction', value: '7pts' },
      { label: 'Timeline', value: '90 days' },
      { label: 'Revenue Impact', value: '+$400K' },
    ],
    body: 'Brought in to diagnose and correct persistent cost overruns in a luxury hotel F&B operation. Root causes included vendor pricing drift, uncontrolled comps, and scheduling inefficiencies. All three addressed within the first 30 days.',
  },
]

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies - F&B Operations Results | Leander Mena"
        description="Real results from pre-opening projects, operations recovery, and fractional GM engagements across Miami hospitality."
        path="/case-studies"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/dining.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Results</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4">
            Case Studies
          </h1>
          <p className="text-[#d8d8d8] text-base lg:text-lg max-w-[52ch] mb-6 lg:mb-8 leading-relaxed">
            A selection of engagements with documented outcomes - pre-openings, turnarounds, and operational transformations across Miami hospitality.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {cases.map((c) => (
              <div key={c.id} className="card">
                <span className="kicker">{c.kicker}</span>
                <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', fontWeight: 700, marginBottom: '0.25rem' }}>{c.title}</h2>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>{c.location} &middot; {c.role}</p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {c.metrics.map((m) => (
                    <div key={m.label} className="metric" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '68ch' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Your operation next</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Ready to build a case study of your own?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>Every engagement starts with an honest conversation about where your operation stands.</p>
          <Link to="/contact" className="btn btn-primary">Schedule a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
