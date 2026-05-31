import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xpwzgkqp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Leander Mena — Miami F&B operations consultant."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/contact.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(5rem,11vw,9rem)]">
          <ScrollReveal>
            <span className="kicker">Get in Touch</span>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-6">
              Let&rsquo;s Start a Conversation
            </h1>
            <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
              Whether you&rsquo;re opening a new concept, fixing an existing one, or just exploring — reach out directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">Book a Call</Link>
              <a href="mailto:leander@leandermena.com" className="btn btn-secondary">Send an Email</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
            <ScrollReveal>
              {status === 'sent' ? (
                <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
                  <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</p>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">Message received</h2>
                  <p className="text-[#888888]">I&rsquo;ll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card flex flex-col gap-5" style={{ padding: 'var(--space-6)' }}>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8]">Send a Message</h2>
                  <div className="flex flex-col gap-1">
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Name</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem', fontSize: '0.95rem', color: 'var(--color-text)', outline: 'none' }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Email</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem', fontSize: '0.95rem', color: 'var(--color-text)', outline: 'none' }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Message</label>
                    <textarea
                      required rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem', fontSize: '0.95rem', color: 'var(--color-text)', outline: 'none', resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ fontWeight: 800 }}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  {status === 'error' && <p style={{ color: 'var(--color-error, #e05)', fontSize: '0.85rem' }}>Something went wrong — try emailing me directly.</p>}
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col gap-4">
                <div className="card" style={{ padding: 'var(--space-5)' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem' }}>Direct Contact</span>
                  <a href="mailto:leander@leandermena.com" style={{ fontSize: '0.95rem', color: 'var(--color-text)', display: 'block', marginBottom: '0.3rem' }}>leander@leandermena.com</a>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Miami, Florida</span>
                </div>
                <div className="card" style={{ padding: 'var(--space-5)' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem' }}>Book a Call</span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>Prefer to talk directly? Schedule a free 30-minute discovery call.</p>
                  <Link to="/book" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontWeight: 800 }}>Book on Calendly</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
