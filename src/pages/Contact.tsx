import { useState } from 'react'
import { SEO } from '@/components/SEO'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '', email: '', business: '', interest: '', details: ''
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('https://contact.leandermena.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.status === 'success') {
        setStatus('success')
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error - please email leander@leandermena.com directly.')
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Leander Mena - Miami F&B operations consultant."
        path="/contact"
      />

      <section className="section" style={{ minHeight: '80dvh' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 'clamp(2rem,5vw,4rem)', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <span className="kicker">Contact</span>
              <h1 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight mb-4">
                Contact Leander Mena
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '44ch', marginBottom: '2rem' }}>
                Tell me about your operation and what you're trying to solve. I'll respond within one business day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="mailto:leander@leandermena.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  leander@leandermena.com
                </a>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Miami, FL
                </span>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {status === 'success' ? (
                <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" style={{ marginInline: 'auto', marginBottom: '1rem' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
                  </svg>
                  <h2 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Message sent</h2>
                  <p style={{ color: 'var(--color-text-muted)' }}>I'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="field">
                      <label htmlFor="name">Your name</label>
                      <input id="name" type="text" required value={form.name} onChange={set('name')} placeholder="First and last" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email address</label>
                      <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="business">Restaurant or hotel name</label>
                    <input id="business" type="text" value={form.business} onChange={set('business')} placeholder="Optional" />
                  </div>
                  <div className="field">
                    <label htmlFor="interest">What are you looking for?</label>
                    <select id="interest" value={form.interest} onChange={set('interest')} required>
                      <option value="">Select one...</option>
                      <option value="fractional">Fractional F&B Leadership</option>
                      <option value="pre-opening">Pre-Opening Support</option>
                      <option value="recovery">Operations Recovery</option>
                      <option value="speaking">Speaking or Training</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="details">Tell me about your situation</label>
                    <textarea id="details" rows={5} value={form.details} onChange={set('details')} placeholder="What's the challenge? What have you tried? What does success look like?" />
                  </div>
                  {/* Honeypot */}
                  <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  {errorMsg && <p style={{ color: '#e05555', fontSize: '0.875rem' }}>{errorMsg}</p>}
                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ fontWeight: 800 }}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
