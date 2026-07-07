import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

interface Product {
  id: string
  title: string
  subtitle: string
  description: string
  price: string
  cta: string
  href: string
  features: string[]
}

const products: Product[] = [
  {
    id: 'blueprint',
    title: 'The Pre-Opening Blueprint',
    subtitle: 'Free Resource',
    description: 'A practical guide to restaurant pre-opening planning, covering staffing timelines, SOP frameworks, vendor setup, and cost controls. Built from 5 real pre-openings in Miami.',
    price: 'Free',
    cta: 'Download',
    href: '/blueprint',
    features: [
      'Pre-opening timeline framework',
      'Staffing plan template',
      'SOP checklist',
      'Vendor sourcing guide',
      'Cost control quick-reference',
    ],
  },
  {
    id: 'fractional',
    title: 'Fractional F&B Director',
    subtitle: 'Ongoing Engagement',
    description: 'Executive-level F&B operations leadership for Miami restaurants and hotels, scoped to your exact needs. No full-time salary required.',
    price: 'Custom Scope',
    cta: 'Get in Touch',
    href: '/contact',
    features: [
      'Weekly on-site hours',
      'P&L and cost control oversight',
      'Team development and training',
      'Menu engineering and costing',
      'Vendor and supplier management',
    ],
  },
  {
    id: 'preopening',
    title: 'Pre-Opening GM Support',
    subtitle: 'Project Engagement',
    description: 'Full pre-opening GM services for new restaurant and hotel F&B concepts in Miami. From groundbreaking to opening night.',
    price: 'Project-Based',
    cta: 'Get in Touch',
    href: '/contact',
    features: [
      'Staffing and hiring plans',
      'SOP and training program development',
      'Vendor sourcing and negotiation',
      'Opening week on-site leadership',
      'Post-opening stabilization support',
    ],
  },
]

export default function Products() {
  return (
    <>
      <SEO
        title="F&B Operations Resources & Services | Leander Mena"
        description="Pre-opening planning guides, fractional F&B director services, and GM support for Miami restaurants and hotels. Practical resources from 18+ years of hands-on operations."
        path="/products"
        schemaType="services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '380px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/dining.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(10,10,10,0.92) 40%,rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
          <span className="kicker">Resources</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[26ch] mb-4">
            F&amp;B Operations Resources &amp; Services
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Practical tools and engagement models built from 18+ years of running Miami restaurants and hotels.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {products.map((p) => (
              <div key={p.id} className="card">
                <div className="grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
                  <div>
                    <span className="kicker">{p.subtitle}</span>
                    <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 700, marginBottom: '0.75rem' }}>{p.title}</h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{p.description}</p>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <strong style={{ fontSize: '1.35rem', color: 'var(--color-primary)' }}>{p.price}</strong>
                    </div>
                    <Link
                      to={p.href}
                      className="btn btn-primary"
                      style={{ fontSize: '0.85rem' }}
                      aria-label={`${p.cta}: ${p.title}`}
                    >
                      {p.cta}
                    </Link>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>What’s included</strong>
                    <ul className="list">
                      {p.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Not sure where to start?</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Let’s Figure It Out Together</h2>
          <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>Tell me where you are in the process and what you’re trying to solve. I’ll tell you honestly what makes sense.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
