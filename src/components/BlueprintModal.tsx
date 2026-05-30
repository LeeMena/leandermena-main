import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, CheckCircle, Loader2 } from 'lucide-react'

interface BlueprintModalProps {
  isOpen: boolean
  onClose: () => void
}

const WORKER_URL = 'https://odd-scene-3aa4.httpsskytabtechupdate011pagesdev.workers.dev'
const FORMSPREE_URL = 'https://formspree.io/f/mkoeaovj'

export default function BlueprintModal({ isOpen, onClose }: BlueprintModalProps) {
  const [form, setForm] = useState({ firstName: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      // Send to Worker (ConvertKit)
      await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          phone: form.phone,
        }),
      })

      // Also send to Formspree for email notification
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          phone: form.phone,
          _subject: 'New Blueprint Download Request',
        }),
      })

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStatus('idle')
      setForm({ firstName: '', email: '', phone: '' })
      setErrorMsg('')
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 50,
              background: 'rgba(10, 9, 8, 0.75)',
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="blueprint-modal-title"
            style={{
              position: 'fixed', inset: 0, zIndex: 51,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 'var(--space-4)',
              pointerEvents: 'none',
            }}
          >
            <div style={{
              pointerEvents: 'auto',
              width: '100%', maxWidth: '480px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-8)',
              position: 'relative',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
            }}>

              {/* Close button */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                style={{
                  position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)',
                  width: '32px', height: '32px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'color 180ms, background 180ms',
                }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                <X size={18} />
              </button>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                    <CheckCircle size={48} strokeWidth={1.5} />
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>
                    You're on the list
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 'var(--space-6)' }}>
                    Check your inbox — your 90-Day Pre-Opening Blueprint is on its way.
                  </p>
                  <button onClick={handleClose} className="btn btn-secondary" style={{ width: '100%' }}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <span className="kicker" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>Free Resource</span>
                    <h2
                      id="blueprint-modal-title"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                        color: 'var(--color-text)',
                        lineHeight: 1.2,
                        marginBottom: 'var(--space-2)',
                      }}
                    >
                      90-Day Pre-Opening Blueprint
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      The exact framework I use to open restaurants and hotels on time and on budget. Free download.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                      <label htmlFor="firstName" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Leander"
                        value={form.firstName}
                        onChange={handleChange}
                        style={{
                          padding: 'var(--space-3) var(--space-4)',
                          background: 'var(--color-bg)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          color: 'var(--color-text)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 180ms',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                      <label htmlFor="email" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        style={{
                          padding: 'var(--space-3) var(--space-4)',
                          background: 'var(--color-bg)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          color: 'var(--color-text)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 180ms',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                      <label htmlFor="phone" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+1 (305) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        style={{
                          padding: 'var(--space-3) var(--space-4)',
                          background: 'var(--color-bg)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          color: 'var(--color-text)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 180ms',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                      />
                    </div>

                    {errorMsg && (
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-error)' }}>{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}
                    >
                      {status === 'loading' ? (
                        <><Loader2 size={16} className="animate-spin" /> Sending…</>
                      ) : (
                        <><Download size={16} /> Get the Free Blueprint</>
                      )}
                    </button>

                    <p style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)', textAlign: 'center', lineHeight: 1.5 }}>
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
