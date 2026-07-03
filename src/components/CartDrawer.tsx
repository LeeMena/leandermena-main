import { useCart } from '@/context/CartContext'
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

// Animate in/out: keep in DOM while transitioning
export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total, itemCount } = useCart()

  const handleCheckout = () => {
    alert('Checkout coming soon. Connect your payment processor here.')
  }

  if (!isOpen && items.length === 0) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 200,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 300ms ease',
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(420px, 100vw)',
          background: 'var(--color-surface)',
          zIndex: 201,
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-5) var(--space-6)',
          borderBottom: '1px solid var(--color-divider)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <ShoppingBag size={18} />
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
              Cart {itemCount > 0 && `(${itemCount})`}
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            style={{ color: 'var(--color-text-muted)', padding: 'var(--space-2)', borderRadius: 'var(--radius-sm)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-5) var(--space-6)' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-16) 0', color: 'var(--color-text-muted)' }}>
              <ShoppingBag size={40} style={{ margin: '0 auto var(--space-4)', opacity: 0.3 }} />
              <p style={{ fontSize: 'var(--text-sm)' }}>Your cart is empty</p>
              <button
                onClick={closeCart}
                style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              {items.map(item => (
                <li key={item.id} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                  {/* Product icon */}
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-surface-offset)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.5rem',
                  }}>
                    {item.icon}
                  </div>

                  {/* Details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)', lineHeight: 1.3 }}>{item.name}</p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)', lineHeight: 1.4 }}>{item.description}</p>

                    {/* Quantity + remove: 44px touch targets */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, minWidth: '1.5rem', textAlign: 'center' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          style={{ color: 'var(--color-text-faint)', padding: 'var(--space-1)' }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{
            padding: 'var(--space-5) var(--space-6)',
            borderTop: '1px solid var(--color-divider)',
            background: 'var(--color-surface)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Total</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 400, letterSpacing: '-0.02em' }}>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginBottom: 'var(--space-3)' }}
            >
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              style={{ width: '100%', textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 'var(--space-2)' }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
