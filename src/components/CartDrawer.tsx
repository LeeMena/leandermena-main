import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, total, itemCount, isOpen, setIsOpen, clearCart } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    // Replace with your Lemon Squeezy / Stripe checkout URL
    alert('Checkout coming soon — connect your payment processor here.');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
          zIndex: 999, backdropFilter: 'blur(2px)',
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(420px, 100vw)',
          background: 'var(--color-surface)',
          borderLeft: '1px solid var(--color-border)',
          zIndex: 1000,
          display: 'flex', flexDirection: 'column',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>
            Cart {itemCount > 0 && <span style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>({itemCount})</span>}
          </span>
          <button
            className="btn btn-ghost"
            style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: '3rem', color: 'var(--color-text-muted)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>&#8635;</div>
              <p style={{ fontSize: '0.95rem' }}>Your cart is empty.</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Browse the shop to add products.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    padding: '1rem',
                    background: 'var(--color-bg)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>{product.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{product.subtitle}</div>
                    <div style={{ color: 'var(--color-primary)', fontWeight: 700 }}>${product.price}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        style={{
                          width: 28, height: 28, borderRadius: 'var(--radius-sm)',
                          background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)',
                          color: 'var(--color-text)', cursor: 'pointer', fontSize: '1rem',
                        }}
                      >-</button>
                      <span style={{ fontSize: '0.9rem', minWidth: 20, textAlign: 'center' }}>{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        style={{
                          width: 28, height: 28, borderRadius: 'var(--radius-sm)',
                          background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)',
                          color: 'var(--color-text)', cursor: 'pointer', fontSize: '1rem',
                        }}
                      >+</button>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                    >Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{
            borderTop: '1px solid var(--color-border)',
            padding: '1.5rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Total</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                ${total.toLocaleString()}
              </span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <button
              style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '0.8rem', cursor: 'pointer', textAlign: 'center', textDecoration: 'underline' }}
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
