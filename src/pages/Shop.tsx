import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <>
      <SEO
        title="Shop - F&B Operations Resources | Leander Mena"
        description="Digital playbooks, SOP templates, toolkits, and courses built from 18+ years leading Miami hospitality operations."
        path="/shop"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Shop</span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight mb-3">
            F&B Operations Resources
          </h1>
          <p className="section-intro">Templates, playbooks, and tools built from real Miami hospitality operations.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Products are managed through the Resources page.</p>
          <Link to="/products" className="btn btn-primary">Browse Resources</Link>
        </div>
      </section>
    </>
  )
}
