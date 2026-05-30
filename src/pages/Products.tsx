import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Star, Shield, Clock, Check } from 'lucide-react'
import SEO from '@/components/SEO'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import BlueprintModal from '@/components/BlueprintModal'
import { products } from '@/data/products'
import { Link } from 'react-router-dom'

const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'template', label: 'Templates' },
  { key: 'playbook', label: 'Playbooks' },
  { key: 'course', label: 'Courses' },
  { key: 'toolkit', label: 'Toolkits' },
]

const trustSignals = [
  { icon: <Download size={18} />, title: 'Instant Download', desc: 'Access immediately after purchase' },
  { icon: <Shield size={18} />, title: '30-Day Guarantee', desc: 'Full refund if not satisfied' },
  { icon: <Clock size={18} />, title: 'Lifetime Updates', desc: 'Free updates to all products' },
  { icon: <Star size={18} />, title: '4.8+ Average Rating', desc: 'From verified purchasers' },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [blueprintOpen, setBlueprintOpen] = useState(false)

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEO
        title="Digital Products | SOPs, Playbooks & Courses | Leander Mena"
        description="Hospitality operations templates, pre-opening playbooks, labor optimization toolkits, and online courses from 18+ years of Miami F&B leadership."
        path="/products"
      />

      <BlueprintModal isOpen={blueprintOpen} onClose={() => setBlueprintOpen(false)} />

      {/* Hero */}
      <section
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'clamp(5rem, 10vw, 8rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="kicker">Digital Products</span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-text)',
              }}
            >
              Tools Built from Real Experience
            </h1>
            <div style={{ height: '1px', background: 'linear-gradient(to right, var(--color-primary), transparent)', maxWidth: '160px', marginBottom: 'var(--space-4)' }} />
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                fontStyle: 'italic',
                color: 'var(--color-text-muted)',
                maxWidth: '56ch',
                lineHeight: 1.7,
              }}
            >
              SOPs, playbooks, and courses distilled from 18+ years operating Miami’s top hospitality venues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div className="container" style={{ paddingBlock: 'var(--space-6)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--space-4)' }}>
            {trustSignals.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(184,160,128,0.10)', color: 'var(--color-primary)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)' }}>{s.title}</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Free Blueprint highlight */}
      <div style={{ background: 'var(--color-primary)', paddingBlock: 'var(--space-4)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <p style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 500 }}>
            🎁 <strong>Free Resource:</strong> The 90-Day Pre-Opening Blueprint — our most popular framework, yours at no cost.
          </p>
          <button
            onClick={() => setBlueprintOpen(true)}
            style={{
              background: '#fff', color: 'var(--color-primary)',
              border: 'none', borderRadius: 'var(--radius-full)',
              padding: '0.4rem 1.1rem', fontSize: '0.78rem', fontWeight: 700,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
              flexShrink: 0,
            }}
          >
            <Download size={13} /> Get Free Blueprint
          </button>
        </div>
      </div>

      {/* Products grid */}
      <section className="section">
        <div className="container">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-10)', justifyContent: 'center' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={activeCategory === cat.key ? 'btn btn-primary' : 'btn btn-ghost'}
                style={{ fontSize: '0.78rem', padding: '0.45rem 1rem', minHeight: 34 }}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-surface-offset)',
              padding: 'clamp(var(--space-8), 4vw, var(--space-16))',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-12)',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="kicker">Limited Time</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
                The Complete Operations Bundle
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-6)', fontSize: '0.95rem' }}>
                Get all six digital products at a significant discount.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                {['All 6 digital products', 'Priority email support', 'Quarterly group Q&A calls', 'Private community access', 'Early access to new releases'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    <Check size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                <button className="btn btn-primary" style={{ gap: 'var(--space-2)' }}>Get the Bundle <ArrowRight size={15} /></button>
                <Link to="/book" className="btn btn-secondary">Have Questions? Book a Call</Link>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textDecoration: 'line-through', marginBottom: 'var(--space-1)' }}>
                ${products.reduce((a, p) => a + (p.originalPrice || p.price), 0)}
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 7vw, 5rem)', color: 'var(--color-primary)', lineHeight: 1, marginBottom: 'var(--space-2)' }}>$997</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>One-time payment</p>
              <span style={{ display: 'inline-block', padding: 'var(--space-2) var(--space-4)', background: 'rgba(184,160,128,0.10)', color: 'var(--color-primary)', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}>
                Save ${products.reduce((a, p) => a + (p.originalPrice || p.price), 0) - 997}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Product is Right for You?"
        subtitle="Book a free 15-minute consultation and I'll help you identify the best resources for your specific situation."
        primaryCta={{ label: 'Book a Free Consultation', href: '/book' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />
    </>
  )
}
