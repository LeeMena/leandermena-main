import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

interface ProductItem {
  id: string
  title: string
  subtitle: string
  description: string
  price: string
  badge: string | null
  features: string[]
  cta: string
  href: string
  external?: boolean
}

const products: ProductItem[] = [
  {
    id: 'pre-opening-blueprint',
    title: 'Pre-Opening Blueprint',
    subtitle: 'The complete operational framework for restaurant launches',
    description: 'A battle-tested system covering every phase from groundbreaking to opening night. SOPs, hiring timelines, vendor checklists, training frameworks, and P&L templates - built from 5 real pre-openings.',
    price: '$197',
    badge: 'Most Popular',
    features: [
      '120-day pre-opening roadmap',
      'SOP template library (40+ docs)',
      'Staffing and training schedules',
      'Vendor bid and contract templates',
      'Opening night run-of-show',
      'P&L and cost projection models',
    ],
    cta: 'Buy Now',
    href: 'https://leemena.gumroad.com/l/ypudd',
    external: true,
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

      {/* Free resource banner */}
      <div style={{ background: 'linear-gradient(90deg, var(--color-primary, #CFA55B) 0%, #b88d4a 100%)', color: '#121212' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem 1.25rem', paddingBlock: '0.75rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Free Resource</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Start with the free 90-Day Pre-Opening Blueprint</span>
          <Link to="/blueprint" style={{ background: '#121212', color: 'var(--color-primary, #CFA55B)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.5rem 1rem', borderRadius: '2px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
            Get Free Blueprint
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/playbook.jpg)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Shop Tools</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[18ch] mb-4">
            Operational Tools &amp; Resources
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Playbooks, templates, and sessions built from 18+ years running Miami hospitality operations.
          </p>
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
                <div style={{ fontFamily: 'var(--font-serif, inherit)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.85rem' }}>{p.price}</div>
                {p.external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.85rem', marginTop: 'auto', minHeight: '44px' }} aria-label={`${p.cta} — ${p.title} for ${p.price}`}>
                    {p.cta}
                  </a>
                ) : (
                  <Link to={p.href} className="btn btn-primary" style={{ fontSize: '0.85rem', marginTop: 'auto', minHeight: '44px' }}>{p.cta}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Custom work</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Need something more specific?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>Every engagement can be scoped to your exact situation. Let's talk.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
