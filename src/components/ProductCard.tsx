import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface Props {
  product: Product;
}

const categoryLabel: Record<Product['category'], string> = {
  template: 'Template',
  playbook: 'Playbook',
  course: 'Course',
  toolkit: 'Toolkit',
};

export default function ProductCard({ product }: Props) {
  const { addToCart, items } = useCart();
  const inCart = items.some((i) => i.product.id === product.id);

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        paddingTop: product.badge ? 'calc(var(--space-6) + 0.5rem)' : 'var(--space-6)',
      }}
    >
      {/* Badge */}
      {product.badge && (
        <span style={{
          position: 'absolute', top: 'var(--space-4)', left: 'var(--space-6)',
          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em',
          textTransform: 'uppercase',
          background: 'var(--color-primary)', color: '#0a0a0a',
          padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)',
        }}>
          {product.badge}
        </span>
      )}

      {/* Category */}
      <span className="kicker" style={{ marginBottom: 'var(--space-2)' }}>
        {categoryLabel[product.category]}
      </span>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        fontWeight: 700, marginBottom: 'var(--space-1)',
        lineHeight: 1.25,
      }}>
        {product.title}
      </h3>

      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
        {product.subtitle}
      </p>

      {/* Description */}
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 'var(--space-4)', flex: 1 }}>
        {product.description}
      </p>

      {/* Features */}
      <ul className="list" style={{ marginBottom: 'var(--space-5)' }}>
        {product.features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      {/* Includes */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)',
        marginBottom: 'var(--space-5)',
      }}>
        {product.includes.map((inc) => (
          <span key={inc} className="skill-tag">{inc}</span>
        ))}
      </div>

      {/* Price + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', marginTop: 'auto' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            ${product.price}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textDecoration: 'line-through', marginLeft: '0.5rem' }}>
              ${product.originalPrice}
            </span>
          )}
        </div>
        <button
          className={inCart ? 'btn btn-ghost' : 'btn btn-primary'}
          style={{ whiteSpace: 'nowrap' }}
          onClick={() => addToCart(product)}
        >
          {inCart ? 'In Cart ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
