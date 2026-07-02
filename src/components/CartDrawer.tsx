import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, total, itemCount, isOpen, setIsOpen, clearCart } = useCart();
  const [visible, setVisible] = useState(false)

  // Animate in/out — keep in DOM while transitioning
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    } else {
      setVisible(false)
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [setIsOpen])

  const handleCheckout = () => {
    alert('Checkout coming soon — connect your payment processor here.');
  };

  if (!isOpen && !visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(2px)',
          zIndex: 999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 300ms ease',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        aria-label="Shopping cart"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(420px, 100vw)',
          background: 'var(--color-surface)',
          borderLeft: '1px solid var(--color-border)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-8px 0 48px rgba(0,0,0,0.3)',
          transform: visible ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 320ms cubic-bezier(0.16,1,0.3,1)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--color-border)',
          flexShrink: 0,
        }}>
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '2px' }}>Your Order</p>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>
              Cart {itemCount > 0 && <span style={{ color: 'var(--color-primary)' }}>({itemCount})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface-offset)',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background 180ms ease, color 180ms ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.background = 'var(--color-surface-dynamic)'
              el.style.color = 'var(--color-text)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.background = 'var(--color-surface-offset)'
              el.style.color = 'var(--color-text-muted)'
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: '4rem', color: 'var(--color-text-muted)' }}>
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                style={{ margin: '0 auto 1rem', opacity: 0.3 }}>
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.35rem' }}>Your cart is empty</p>
              <p style={{ fontSize: '0.8rem' }}>Browse the shop to add products.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    gap: '0.875rem',
                    alignItems: 'flex-start',
                    padding: '0.875rem',
                    background: 'var(--color-bg)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.2rem', color: 'var(--color-text)' }}>{product.title}</div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{product.subtitle}</div>
                    <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.95rem' }}>${product.price}</div>
                  </div>

                  {/* Quantity + remove — 44px touch targets */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label="Decrease quantity"
                        style={{
                          width: '36px', height: '36px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--color-surface-offset)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text)',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'background 150ms ease',
                          WebkitTapHighlightColor: 'transparent',
                        }}
                      >−</button>
                      <span style={{ fontSize: '0.875rem', minWidth: '1.5rem', textAlign: 'center', fontWeight: 600 }}>{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Increase quantity"
                        style={{
                          width: '36px', height: '36px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--color-surface-offset)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text)',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'background 150ms ease',
                          WebkitTapHighlightColor: 'transparent',
                        }}
                      >+</button>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      style={{
                        minHeight: '32px',
                        padding: '0 0.5rem',
                        fontSize: '0.72rem',
                        color: 'var(--color-text-muted)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        transition: 'color 150ms ease',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-error)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-muted)' }}
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
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
            background: 'var(--color-surface)',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Total</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                ${total.toLocaleString()}
              </span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text-muted)',
                fontSize: '0.775rem',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'underline',
                minHeight: '36px',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-error)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-muted)' }}
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
