import { useState } from 'react'
import SEO from '@/components/SEO'

export default function ClientTestimonialForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    clientName: '',
    clientRole: '',
    clientVenue: '',
    clientEmail: '',
    quote: '',
    canUseName: false,
    canUseVenue: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    setForm((prev) => ({ ...prev, [target.name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire this to your backend or email service
    // For now, it just shows a success message with the data to copy
    setSubmitted(true)
  }

  const jsonOutput = JSON.stringify(
    {
      quote: form.quote,
      name: form.canUseName ? form.clientName : 'Anonymous Client',
      role: form.clientRole,
      venue: form.canUseVenue ? form.clientVenue : 'Miami Hospitality Group',
      approved: true,
    },
    null,
    2
  )

  return (
    <>
      <SEO
        title="Client Testimonial"
        description="Share your experience working with Leander Mena."
        path="/testimonial"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">For Past Clients</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Share Your Experience
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Your feedback helps other operators understand what working together looks like.
            All fields are optional — share as much or as little as you're comfortable with.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
                  <div className="form-group">
                    <label htmlFor="clientName">Your Name</label>
                    <input
                      id="clientName"
                      name="clientName"
                      value={form.clientName}
                      onChange={handleChange}
                      placeholder="e.g., Alex Rodriguez"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="clientRole">Your Title / Role</label>
                    <input
                      id="clientRole"
                      name="clientRole"
                      value={form.clientRole}
                      onChange={handleChange}
                      placeholder="e.g., Owner, General Manager, Investor"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="clientVenue">Property / Venue Name</label>
                    <input
                      id="clientVenue"
                      name="clientVenue"
                      value={form.clientVenue}
                      onChange={handleChange}
                      placeholder="e.g., Maska Indian Kitchen + Bar"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="clientEmail">Email (for verification only, not displayed)</label>
                    <input
                      id="clientEmail"
                      name="clientEmail"
                      type="email"
                      value={form.clientEmail}
                      onChange={handleChange}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quote">Your Testimonial *</label>
                    <textarea
                      id="quote"
                      name="quote"
                      value={form.quote}
                      onChange={handleChange}
                      placeholder="What was the situation before Leander got involved? What did he do? What was the result? Be specific — numbers and outcomes help."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="canUseName"
                        checked={form.canUseName}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <span className="text-sm text-[#888888]">
                        I give permission to use my <strong className="text-[#e8e8e8]">name</strong> on leandermena.com
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="canUseVenue"
                        checked={form.canUseVenue}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <span className="text-sm text-[#888888]">
                        I give permission to use my <strong className="text-[#e8e8e8]">venue name</strong> on leandermena.com
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary w-fit">
                    Submit Testimonial
                  </button>
                </form>
              ) : (
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-8">
                  <div className="w-12 h-12 bg-[#b8a080]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#b8a080] text-xl">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#e8e8e8] mb-2">Thank You</h3>
                  <p className="text-sm text-[#888888] mb-6">
                    Your testimonial has been recorded. Copy the JSON below and paste it into{' '}
                    <code className="text-xs bg-[#1a1a1a] px-1 py-0.5 rounded">src/data/testimonials.ts</code>{' '}
                    to add it to the site.
                  </p>
                  <pre className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 text-xs text-[#b8a080] overflow-x-auto">
                    {jsonOutput}
                  </pre>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(jsonOutput)
                    }}
                    className="btn btn-secondary text-xs mt-4"
                  >
                    Copy JSON to Clipboard
                  </button>
                </div>
              )}
            </div>

            <div>
              <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 sticky top-24">
                <h3 className="text-sm font-bold text-[#e8e8e8] mb-4 uppercase tracking-wider">
                  Tips for a Great Testimonial
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-[#888888]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8a080]">→</span>
                    <span><strong className="text-[#e8e8e8]">Be specific.</strong> "Labor costs dropped 6%" is stronger than "things got better."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8a080]">→</span>
                    <span><strong className="text-[#e8e8e8]">Describe the before.</strong> What was the problem or gap before Leander started?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8a080]">→</span>
                    <span><strong className="text-[#e8e8e8]">Describe the after.</strong> What changed? What metrics moved?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8a080]">→</span>
                    <span><strong className="text-[#e8e8e8]">Mention the approach.</strong> Did he diagnose fast? Build systems? Train the team?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8a080]">→</span>
                    <span><strong className="text-[#e8e8e8]">Keep it concise.</strong> 2–4 sentences is the sweet spot for a website quote.</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
                  <h4 className="text-xs font-bold text-[#e8e8e8] mb-2 uppercase tracking-wider">
                    Example
                  </h4>
                  <p className="text-sm text-[#888888] italic">
                    "We were 60 days from opening with no GM and no training plan. Leander built the
                    entire operating backbone in 3 weeks, hired the management team, and ran
                    friends-and-family service. We opened on time and hit 85% labor efficiency in
                    month one."
                  </p>
                  <p className="text-xs text-[#555555] mt-2">
                    — Owner, Independent Restaurant, Miami
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
