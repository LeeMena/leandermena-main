import { useState } from 'react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', business: '', interest: '', details: '' })
  const [honeypot, setHoneypot] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return
    setState('sending')
    try {
      const res = await fetch('https://api.leandermena.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Network error')
      setState('success')
      setForm({ name: '', email: '', business: '', interest: '', details: '' })
    } catch {
      setState('error')
    }
  }

  return (
    <div className="pt-16">
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(rgba(10,10,10,0.72),rgba(10,10,10,0.72)), url("/contact.jpg") center/cover no-repeat' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <span className="section-kicker mb-2 block">Contact Leander Mena — Miami F&amp;B Consulting</span>
          <h1 className="font-display text-4xl md:text-5xl text-luxury-text">Start the Conversation</h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      <section className="py-20 bg-luxury-black">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div>
            <span className="section-kicker mb-3 block">Get in touch</span>
            <h2 className="font-display text-3xl text-luxury-text mb-4">Let&rsquo;s talk about your operation.</h2>
            <div className="gold-divider mb-8" />
            <p className="text-luxury-muted text-sm leading-relaxed mb-8">
              Whether you have a specific engagement in mind or just want to understand how
              fractional leadership could work for your business, reach out. I respond within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gold text-lg">✉</span>
                <a href="mailto:consulting@leandermena.com" className="text-luxury-text text-sm hover:text-gold transition-colors">
                  consulting@leandermena.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gold text-lg">in</span>
                <a
                  href="https://www.linkedin.com/in/leandermena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-text text-sm hover:text-gold transition-colors"
                >
                  linkedin.com/in/leandermena
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gold text-lg">⌖</span>
                <span className="text-luxury-muted text-sm">Miami, Florida · South Florida</span>
              </div>
            </div>
          </div>

          <div className="luxury-card p-8">
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold flex items-center justify-center mb-4">
                  <span className="text-gold text-xl">✓</span>
                </div>
                <h3 className="font-display text-xl text-luxury-text mb-2">Message Received</h3>
                <p className="text-luxury-muted text-sm">Thank you. Leander will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input id="name" name="name" type="text" required className="form-input" value={form.name} onChange={handleChange} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" required className="form-input" value={form.email} onChange={handleChange} placeholder="jane@restaurant.com" />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="business">Business / Property</label>
                  <input id="business" name="business" type="text" className="form-input" value={form.business} onChange={handleChange} placeholder="Restaurant or hotel name" />
                </div>

                <div>
                  <label className="form-label" htmlFor="interest">Area of Interest</label>
                  <select id="interest" name="interest" className="form-input" value={form.interest} onChange={handleChange}>
                    <option value="">Select one…</option>
                    <option value="fractional">Fractional F&B Leadership</option>
                    <option value="pre-opening">Pre-Opening Consulting</option>
                    <option value="recovery">Operations Recovery</option>
                    <option value="sop">SOP & Training Systems</option>
                    <option value="other">Other / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="form-label" htmlFor="details">Tell me about your project</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="form-input resize-none"
                    value={form.details}
                    onChange={handleChange}
                    placeholder="What are you working on? What's the timeline? What's the challenge?"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-red-400 text-xs">Something went wrong. Please email consulting@leandermena.com directly.</p>
                )}

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
