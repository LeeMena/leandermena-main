import { useState } from 'react'
import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'

const faqs = [
  {
    q: 'What does a typical engagement look like?',
    a: 'Most fractional engagements run 2–4 days per week over 3–6 months. Pre-opening projects are scoped to the timeline and complexity of the concept. Every engagement starts with a 30-minute discovery call.',
  },
  {
    q: 'Do you work outside of Miami?',
    a: 'My primary market is South Florida, but I consider projects in other markets depending on scope, timeline, and travel logistics.',
  },
  {
    q: 'What size operations do you work with?',
    a: 'Independent restaurants, multi-unit groups (2–5 locations), and hotel F&B departments. I right-size the engagement to match the operation.',
  },
  {
    q: 'How quickly can you start?',
    a: 'For urgent stabilization needs, I can typically begin within one week of scoping. Pre-opening projects are scheduled based on your construction and opening timeline.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xpwzgvod', {
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
        description="Start a conversation about fractional F&B leadership, pre-opening support, or operations recovery in Miami."
        path="/contact"
        schemaType="contact"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a] min-h-[280px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact (1) (1).jpg"
            alt=""
            width="1400"
            height="600"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 py-16">
          <span className="kicker">Get in Touch</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Start a Conversation
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Whether you’re 90 days from opening or trying to fix a difficult quarter —
            the first step is a simple conversation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              {status === 'sent' ? (
                <div className="card text-center py-12">
                  <p className="text-2xl mb-2">✓</p>
                  <h3 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">Message received.</h3>
                  <p className="text-[#888888]">I’ll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="field">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" required placeholder="Your name" value={form.name} onChange={handle} />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handle} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="field">
                      <label htmlFor="phone">Phone (optional)</label>
                      <input id="phone" name="phone" placeholder="(305) 000-0000" value={form.phone} onChange={handle} />
                    </div>
                    <div className="field">
                      <label htmlFor="type">Inquiry type</label>
                      <select id="type" name="type" required value={form.type} onChange={handle} aria-label="Select inquiry type">
                        <option value="">Select one…</option>
                        <option>Fractional F&amp;B Director</option>
                        <option>Pre-Opening Support</option>
                        <option>Operations Recovery</option>
                        <option>Banquet &amp; Catering</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Tell me about your project</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Concept, location, timeline, main challenge…" value={form.message} onChange={handle} />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  {status === 'error' && (
                    <p role="alert" className="text-sm text-red-400">Something went wrong. Please try again or email directly at consulting@leandermena.com</p>
                  )}
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col gap-6">
                <div className="card">
                  <h3 className="font-display text-lg font-bold text-[#e8e8e8] mb-4">Prefer to book directly?</h3>
                  <p className="text-sm text-[#888888] mb-4">
                    Schedule a 30-minute discovery call and we can talk through your project in real time.
                  </p>
                  <a
                    href="https://calendly.com/leandermena/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-center"
                  >
                    Book a Discovery Call
                  </a>
                </div>
                <div className="card">
                  <h3 className="font-display text-lg font-bold text-[#e8e8e8] mb-3">Response time</h3>
                  <p className="text-sm text-[#888888]">
                    I respond to all inquiries within one business day. For urgent operational needs,
                    note that in your message and I will prioritize accordingly.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-display text-lg font-bold text-[#e8e8e8] mb-4">Common Questions</h3>
                  <div className="flex flex-col gap-4">
                    {faqs.map((f) => (
                      <div key={f.q}>
                        <p className="text-sm font-bold text-[#e8e8e8] mb-1">{f.q}</p>
                        <p className="text-sm text-[#888888]">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
