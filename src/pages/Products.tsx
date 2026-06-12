import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 'pre-opening-blueprint',
    title: 'Pre-Opening Blueprint',
    subtitle: 'The complete operational framework for restaurant launches',
    description: 'A battle-tested system covering every phase from groundbreaking to opening night. SOPs, hiring timelines, vendor checklists, training frameworks, and P&L templates - built from 5 real pre-openings.',
    price: '$297',
    badge: 'Most Popular',
    features: [
      '120-day pre-opening roadmap',
      'SOP template library (40+ docs)',
      'Staffing and training schedules',
      'Vendor bid and contract templates',
      'Opening night run-of-show',
      'P&L and cost projection models',
    ],
    cta: 'Get the Blueprint',
    href: '/blueprint',
  },
  {
    id: 'labor-cost-toolkit',
    title: 'Labor Cost Toolkit',
    subtitle: 'Cut labor cost without cutting your team',
    description: 'The scheduling model, variance tracking system, and labor audit process used to bring three Miami properties from 38%+ labor cost to under 30% - without layoffs.',
    price: '$147',
    badge: null,
    features: [
      'Weekly labor variance tracker',
      'Role-by-role scheduling model',
      'Overtime early-warning system',
      'Labor audit checklist',
      'Manager accountability framework',
      'Implementation guide',
    ],
    cta: 'Get the Toolkit',
    href: '/contact',
  },
  {
    id: 'operations-diagnostic',
    title: 'Operations Diagnostic Session',
    subtitle: '90-minute deep dive with Leander',
    description: 'A structured 90-minute video session to diagnose the highest-leverage issues in your operation. You leave with a prioritized action list and clarity on what to fix first.',
    price: '$450',
    badge: null,
    features: [
      'Pre-session intake questionnaire',
      '90-minute 1-on-1 video session',
      'Written summary of findings',
      'Prioritized action list',
      'Follow-up email Q&A (48 hours)',
    ],
    cta: 'Book a Session',
    href: '/contact',
  },
]

export default function Products() {
  return (
    <>
      <SEO
        title="Products & Tools - F&B Operations | Leander Mena"
        description="Operational templates, playbooks, and consulting sessions for restaurant and hospitality operators."
        path="/products"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Resources</span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight mb-3">
            Operational Tools & Resources
          </h1>
          <p className="section-intro">Playbooks, templates, and sessions built from 18+ years running Miami hospitality operations.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {products.map((p) => (
              <div key={p.id} className="card" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                {p.badge && (
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'var(--color-primary)', color: '#0a0a0a',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-sm)'
                  }}>{p.badge}</span>
                )}
                <span className="kicker" style={{ marginBottom: '0.35rem' }}>{p.subtitle}</span>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>{p.description}</p>
                <ul className="list" style={{ marginBottom: '1.25rem' }}>
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <strong style={{ fontSize: '1.35rem', color: 'var(--color-primary)' }}>{p.price}</strong>
                  <Link to={p.href} className="btn btn-primary" style={{ fontSize: '0.82rem' }}>{p.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
