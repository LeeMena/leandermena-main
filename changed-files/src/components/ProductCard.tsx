import { useState } from 'react'
import { ShoppingCart, Star, Check, Download, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Product } from '@/data/products'
import BlueprintModal from './BlueprintModal'

interface ProductCardProps {
  product: Product
  index?: number
  detailed?: boolean
}

const categoryLabel: Record<Product['category'], string> = {
  template: 'Template',
  playbook: 'Playbook',
  course: 'Course',
  toolkit: 'Toolkit',
}

const BLUEPRINT_IDS = ['pre-opening-playbook']

export default function ProductCard({ product, index = 0, detailed = false }: ProductCardProps) {
  const [blueprintOpen, setBlueprintOpen] = useState(false)
  const isBlueprint = BLUEPRINT_IDS.includes(product.id)

  const handleCTA = () => {
    if (isBlueprint) {
      setBlueprintOpen(true)
    }
  }

  if (detailed) {
    return (
      <>
        <BlueprintModal isOpen={blueprintOpen} onClose={() => setBlueprintOpen(false)} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Image / cover area */}
          <div
            style={{
              aspectRatio: '16/9',
              background: 'linear-gradient(135deg, #0f0e0c 0%, #1c1a16 100%)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '64px', height: '64px',
                borderRadius: '50%',
                background: 'rgba(184,160,128,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Download size={24} style={{ color: 'var(--color-primary)', opacity: 0.7 }} />
            </div>
            {product.badge && (
              <span style={{
                position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)',
                fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                background: 'var(--color-primary)', color: '#fff',
                padding: '3px 10px', borderRadius: 'var(--radius-full)',
                fontWeight: 600,
              }}>{product.badge}</span>
            )}
            {product.originalPrice && (
              <span style={{
                position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)',
                fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(161,44,123,0.85)', color: '#fff',
                padding: '3px 10px', borderRadius: 'var(--radius-full)',
              }}>Save ${product.originalPrice - product.price}</span>
            )}
          </div>

          <div style={{ padding: 'var(--space-6)', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-2)', display: 'block' }}>
              {categoryLabel[product.category]}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>{product.title}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>{product.subtitle}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 'var(--space-5)' }}>{product.description}</p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
              {product.features.slice(0, 4).map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  <Check size={13} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  {f}
                </li>
              ))}
            </ul>

            {typeof product.rating === 'number' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} style={{ color: 'var(--color-primary)', fill: i < Math.floor(product.rating ?? 0) ? 'var(--color-primary)' : 'transparent' }} />
                  ))}
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>{product.rating}{product.reviewCount ? ` (${product.reviewCount} reviews)` : ''}</span>
              </div>
            )}

            <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary)' }}>${product.price}</span>
                {product.originalPrice && (
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-faint)', textDecoration: 'line-through', marginLeft: 'var(--space-2)' }}>${product.originalPrice}</span>
                )}
              </div>
              {product.checkoutUrl ? (
                <a
                  href={product.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={`Buy ${product.title} for $${product.price}`}
                  style={{ fontSize: '0.78rem', gap: 'var(--space-2)', padding: '0.55rem 1rem', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
                >
                  <ShoppingCart size={14} /> Buy Now <ExternalLink size={12} />
                </a>
              ) : isBlueprint ? (
                <button onClick={handleCTA} className="btn btn-primary" style={{ fontSize: '0.78rem', gap: 'var(--space-2)', padding: '0.55rem 1rem', minHeight: '44px' }}>
                  <Download size={14} /> Free Download
                </button>
              ) : (
                <a
                  href={`mailto:leander@leandermena.com?subject=${encodeURIComponent(`Notify me: ${product.title}`)}`}
                  className="btn btn-primary"
                  style={{ fontSize: '0.78rem', gap: 'var(--space-2)', padding: '0.55rem 1rem', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
                >
                  Notify Me
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </>
    )
  }

  // Compact card (used on homepage + shop)
  return (
    <>
      <BlueprintModal isOpen={blueprintOpen} onClose={() => setBlueprintOpen(false)} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            aspectRatio: '16/9',
            background: 'linear-gradient(135deg, #0f0e0c 0%, #1c1a16 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '52px', height: '52px',
              borderRadius: '50%',
              background: 'rgba(184,160,128,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Download size={20} style={{ color: 'var(--color-primary)', opacity: 0.7 }} />
          </div>
          {product.badge && (
            <span style={{
              position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)',
              fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              background: 'var(--color-primary)', color: '#fff',
              padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 600,
            }}>{product.badge}</span>
          )}
        </div>

        <div style={{ padding: 'var(--space-5)' }}>
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-1)', display: 'block' }}>
            {categoryLabel[product.category]}
          </span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>{product.title}</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>{product.subtitle}</p>

          {typeof product.rating === 'number' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)', marginBottom: 'var(--space-4)' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} style={{ color: 'var(--color-primary)', fill: i < Math.floor(product.rating ?? 0) ? 'var(--color-primary)' : 'transparent' }} />
              ))}
              <span style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', marginLeft: 'var(--space-1)' }}>{product.rating}</span>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border)' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)' }}>${product.price}</span>
              {product.originalPrice && (
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)', textDecoration: 'line-through', marginLeft: 'var(--space-1)' }}>${product.originalPrice}</span>
              )}
            </div>
            {product.checkoutUrl ? (
              <a
                href={product.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buy ${product.title} for $${product.price}`}
                style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600, minWidth: '44px', minHeight: '44px', justifyContent: 'center' }}
              >
                Buy <ShoppingCart size={15} />
              </a>
            ) : isBlueprint ? (
              <button onClick={handleCTA} aria-label="Download free blueprint" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600, minWidth: '44px', minHeight: '44px', justifyContent: 'center' }}>
                <Download size={15} />
              </button>
            ) : (
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}
