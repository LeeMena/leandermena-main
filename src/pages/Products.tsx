import SEO from '@/components/SEO'
import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { heroImages } from '@/data/heroImages'

export default function Products() {
  const { lang } = useLanguage()
  const t = getT(lang)
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
          <span className="kicker">{t('products.kicker')}</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[26ch] mb-4">
            {t('products.heroTitle')}
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            {t('products.heroSub')}
          </p>
        </div>
      </section>

      {/* Funnel intro */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)', paddingBlock: 'clamp(2.5rem,5vw,4rem)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            {t('products.intro.pre')}<Link to="/blueprint" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{t('products.intro.link1')}</Link>{t('products.intro.mid')}<Link to="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{t('products.intro.link2')}</Link>{t('products.intro.post')}
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-faint)', lineHeight: 1.7, marginTop: '1rem' }}>
            {t('products.disclaimer')}
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
          <span className="kicker">{t('products.cta.kicker')}</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">{t('products.cta.heading')}</h2>
          <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>
            {t('products.cta.body')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary">{t('products.cta.services')}</Link>
            <Link to="/contact" className="btn btn-secondary">{t('products.cta.contact')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
