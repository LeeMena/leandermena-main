import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'

export default function Contact() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    interest: '',
    details: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.interest) e.interest = 'Select an interest'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => { const n = { ...prev }; delete n[e.target.name]; return n })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return
    if (!validate()) return
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
    <>
      <SEO
        title="Contact"
        description="Start a conversation with Leander Mena about fractional F&B leadership, pre-opening consulting, or operations recovery for your Miami hospitality business."
        path="/contact"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Contact Leander Mena —” Miami F&B Consulting</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Start the Conversation
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Whether you have a specific engagement in mind or just want to understand how
            fractional leadership could work for your business, reach out. I respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 mb-6">
                  <h3 className="text-sm font-bold text-[#e8e8e8] mb-4 uppercase tracking-wider">
                    Contact Info
                  </h3>
                  <div className="flex flex-col gap-4 text-sm text-[#888888]">
                    <div className="flex items-start gap-3">
                      <span className="text-[#b8a080]">âŒ–</span>
                      <span>Miami, Florida Â· South Florida</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#b8a080]">âœ‰</span>
                      <a href="mailto:leander@leandermena.com" className="hover:text-[#b8a080]">
                        leander@leandermena.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#b8a080]">â—·</span>
                      <span>Response time: within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6">
                  <h3 className="text-sm font-bold text-[#e8e8e8] mb-4 uppercase tracking-wider">
                    Typical Engagements
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm text-[#888888]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#b8a080]">â†’</span>
                      Fractional F&B Director —” 2—“4 days/week
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b8a080]">â†’</span>
                      Pre-Opening Consulting —” 90-day sprint
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b8a080]">â†’</span>
                      Operations Recovery —” 30—“60 day intensive
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b8a080]">â†’</span>
                      Banquet & Catering Leadership —” project-based
                    </li>
                  </ul>
                </div>

                {/* Calendly inline embed */}
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 mt-6">
                  <h3 className="text-sm font-bold text-[#e8e8e8] mb-4 uppercase tracking-wider">
                    Or Book Directly
                  </h3>
                  <p className="text-sm text-[#888888] mb-4">
                    Prefer to schedule? Pick a time that works for you.
                  </p>
                  <div className="rounded-lg overflow-hidden bg-white">
                    <iframe
                      src="https://calendly.com/leandermena_consulting"
                      width="100%"
                      height="400"
                      frameBorder="0"
                      title="Schedule a discovery call with Leander Mena"
                    />
                  </div>
                  <p className="text-xs text-[#888888] mt-3">
                    Having trouble? Email directly at{' '}
                    <a href="mailto:leander@leandermena.com" className="text-[#b8a080]">
                      leander@leandermena.com
                    </a>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal delay={150}>
                {state === 'success' ? (
                  <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-8 text-center">
                    <div className="w-12 h-12 bg-[#b8a080]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#b8a080] text-xl">âœ“</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#e8e8e8] mb-2">Message Received</h3>
                    <p className="text-sm text-[#888888]">
                      Thank you. Leander will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-xl">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                      {errors.name && <span className="text-xs text-red-400 mt-1">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        autoComplete="email"
                      />
                      {errors.email && <span className="text-xs text-red-400 mt-1">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="business">Business / Property</label>
                      <input
                        id="business"
                        name="business"
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Restaurant or hotel name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="interest">What are you interested in? *</label>
                      <select
                        id="interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="fractional">Fractional F&B Leadership</option>
                        <option value="preopening">Pre-Opening Consulting</option>
                        <option value="recovery">Operations Recovery</option>
                        <option value="banquet">Banquet & Catering</option>
                        <option value="other">Something else</option>
                      </select>
                      {errors.interest && <span className="text-xs text-red-400 mt-1">{errors.interest}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="details">Project Details</label>
                      <textarea
                        id="details"
                        name="details"
                        value={form.details}
                        onChange={handleChange}
                        placeholder="Tell me about your timeline, team size, and biggest challenge..."
                        rows={5}
                      />
                    </div>

                    {/* Honeypot */}
                    <div className="hidden">
                      <input
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state === 'sending'}
                      className="btn btn-primary w-fit disabled:opacity-50"
                    >
                      {state === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {state === 'error' && (
                      <p className="text-sm text-red-400">
                        Something went wrong. Please email directly at{' '}
                        <a href="mailto:leander@leandermena.com">leander@leandermena.com</a>.
                      </p>
                    )}
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




