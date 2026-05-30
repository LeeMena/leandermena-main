import { useState } from 'react';
import SEO from '@/components/SEO';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'template', label: 'Templates' },
  { value: 'playbook', label: 'Playbooks' },
  { value: 'course', label: 'Courses' },
  { value: 'toolkit', label: 'Toolkits' },
] as const;

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { itemCount, setIsOpen } = useCart();

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Shop — F&B Operations Resources | Leander Mena"
        description="Digital playbooks, SOP templates, toolkits, and courses built from 18+ years leading Miami hospitality operations."
        path="/shop"
      />

      <CartDrawer />

      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <div>
              <span className="kicker">Resources & Tools</span>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 700, letterSpacing: '-0.02em',
                marginBottom: 'var(--space-3)',
              }}>
                F&B Operations Shop
              </h1>
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                color: 'var(--color-text-muted)',
                maxWidth: '58ch',
              }}>
                The exact systems, templates, and frameworks built across 18+ years opening and operating restaurants and hotel F&B programs in Miami.
              </p>
            </div>

            {/* Cart button */}
            {itemCount > 0 && (
              <button
                className="btn btn-secondary"
                onClick={() => setIsOpen(true)}
                style={{ flexShrink: 0 }}
              >
                View Cart ({itemCount})
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            {categories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={activeCategory === value ? 'btn btn-primary' : 'btn btn-ghost'}
                style={{ fontSize: '0.82rem', padding: '0.5rem 1rem', minHeight: 36 }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <p style={{ color: 'var(--color-text-muted)' }}>No products in this category yet.</p>
          ) : (
            <div className="grid-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Need Something Custom?</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700, marginBottom: 'var(--space-4)',
          }}>
            These templates don't fit your situation?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)', maxWidth: '52ch', marginInline: 'auto' }}>
            Every operation is different. Let's talk about a direct engagement tailored to your property, timeline, and goals.
          </p>
          <a href="/contact" className="btn btn-primary">Start a Conversation</a>
        </div>
      </section>
    </>
  );
}
