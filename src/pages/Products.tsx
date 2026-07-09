import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { heroImages } from '@/data/heroImages'

export default function Products() {
  return (
    <>
      <SEO
        title="F&B Operations Playbooks, SOPs & Toolkits | Leander Mena"
        description="Battle-tested pre-opening playbooks, SOP collections, labor and menu-engineering toolkits distilled from 18+ years running top hospitality venues. Instant download."
        path="/products"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '380px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImages.products.url}), url(${heroImages.products.fallback})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(10,10,10,0.92) 40%,rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
          <span className="kicker">Digital Products</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[26ch] mb-4">
            Operator-Built Playbooks &amp; Toolkits
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Every playbook is pulled from real engagements: the same documents I hand clients. Instant download, wherever you operate.
          </p>
        </div>
      </section>

      {/* Funnel intro */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)', paddingBlock: 'clamp(2.5rem,5vw,4rem)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            Start with the free <Link to="/blueprint" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>90-Day Pre-Opening Blueprint</Link>, go deeper with the $197 Pre-Opening Playbook, and upgrade to a <Link to="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>hands-on engagement</Link> anytime. Each product stands alone; together they are the operating system I install in client venues.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-faint)', lineHeight: 1.7, marginTop: '1rem' }}>
            Available worldwide. The operational frameworks (timelines, SOPs, labor models, menu math) apply anywhere; compliance sections reference US regulations, so verify local health, labor, and tax requirements in your jurisdiction.
          </p>
        </div>
      </section>

      {/* Catalog: all six products */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'var(--space-4)' }}>
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} detailed />)}
          </div>
        </div>
      </section>

      {/* Cross-sell to engagements */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Ready for hands-on help?</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">The Playbooks Are the Map. I Also Drive.</h2>
          <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>
            If you want the systems installed with you, on your floor, that is a consulting engagement: pre-opening builds, turnarounds, and ongoing leadership, available nationwide.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary">See Ways to Work Together</Link>
            <Link to="/contact" className="btn btn-secondary">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
