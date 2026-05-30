import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Products() {
  return (
    <>
      <SEO
        title="Products & Resources"
        description="Operational toolkits, SOP templates, and playbooks built from 18+ years leading F&B operations across Miami restaurants and hotels."
        path="/products"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a] min-h-[240px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        </div>
        <div className="container relative z-10 py-16">
          <span className="kicker">Resources & Tools</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Operational tools built in the field.
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Every template, framework, and system I&rsquo;ve used to open, stabilize, and scale
            hospitality operations — packaged for operators who want results, not theory.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 80}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="card mt-12 text-center max-w-2xl mx-auto">
              <h3 className="font-display text-lg font-bold text-[#e8e8e8] mb-2">Need something custom?</h3>
              <p className="text-[#888888] text-sm mb-6">
                If your operation has a specific gap — staffing models, training programs, financial dashboards —
                I build custom tools as part of consulting engagements.
              </p>
              <a
                href="https://calendly.com/leandermena/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Book a Discovery Call
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
