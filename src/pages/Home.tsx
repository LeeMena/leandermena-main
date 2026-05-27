import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background:
            'linear-gradient(rgba(10,10,10,0.72), rgba(10,10,10,0.72)), url("/landing-hero.jpg") center/cover no-repeat fixed',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="animate-fade-up">
            <span className="section-kicker mb-4 block">Miami hospitality consulting</span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-luxury-text leading-tight mb-6">
              Fractional F&amp;B Operations Leadership
            </h1>
            <p className="text-luxury-muted text-lg leading-relaxed mb-8 max-w-lg">
              18+ years opening, stabilizing, and scaling hospitality operations across Miami.
              Senior operational expertise without the full-time overhead.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Discuss Your Project</Link>
              <Link to="/pre-opening" className="btn-outline">View Pre-Opening Support</Link>
            </div>
          </div>

          <aside className="luxury-card p-8 animate-slide-in-right">
            <p className="section-kicker mb-3">Built for operators</p>
            <h3 className="font-display text-xl text-luxury-text mb-4">
              Turn operational experience into measurable results.
            </h3>
            <p className="text-luxury-muted text-sm leading-relaxed mb-6">
              I help restaurant owners, hotel operators, and investors build the structure, standards,
              and team confidence needed to run well — every shift.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '18+', label: 'Years in Miami hospitality' },
                { value: '4', label: 'Core service areas' },
                { value: 'On-site', label: 'South Florida preferred' },
                { value: 'Hybrid', label: 'Available for SOP work' },
              ].map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <strong className="font-display text-gold text-2xl">{m.value}</strong>
                  <span className="text-luxury-muted text-xs">{m.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Capabilities ticker */}
      <div className="bg-luxury-dark border-y border-luxury-border py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-6 text-xs tracking-widest uppercase">
          {['Pre-Opening GM', 'P&L Oversight', 'SOP Development', 'Team Training', 'Cost Control', 'Banquet & Catering', 'Operations Recovery', 'Vendor Management'].map((s) => (
            <span key={s} className="text-gold-muted">{s}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-24 bg-luxury-black">
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-kicker mb-3 block">What I do</span>
          <h2 className="font-display text-3xl md:text-4xl text-luxury-text mb-4">Focused operational leadership</h2>
          <div className="gold-divider mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                kicker: 'Fractional leadership',
                title: 'Fractional F&B Director',
                body: 'For restaurants and hotel groups that need a veteran operator 2–4 days per week. Stabilize operations, build systems, and develop your team.',
              },
              {
                kicker: 'New concept support',
                title: 'Pre-Opening & New Concepts',
                body: 'From construction walkthroughs to opening night — team hiring, SOP creation, vendor coordination, and opening-day execution.',
              },
              {
                kicker: 'Performance recovery',
                title: 'Operations Recovery',
                body: 'When labor costs drift, service drops, or turnover hurts consistency, I diagnose quickly and install systems that stick.',
              },
            ].map((c) => (
              <div key={c.title} className="luxury-card p-7 hover:border-gold/40 transition-colors duration-300">
                <span className="section-kicker mb-3 block">{c.kicker}</span>
                <h3 className="font-display text-xl text-luxury-text mb-3">{c.title}</h3>
                <p className="text-luxury-muted text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="btn-gold">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Experience preview */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(rgba(10,10,10,0.88), rgba(10,10,10,0.88)), url("/dining.jpg") center/cover no-repeat' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-kicker mb-3 block">Selected experience</span>
          <h2 className="font-display text-3xl md:text-4xl text-luxury-text mb-4">Proof, not a résumé dump.</h2>
          <div className="gold-divider mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { venue: 'Maska Indian Kitchen + Bar', title: 'Opening General Manager', body: 'Built the opening team, vendor relationships, service standards, and operational systems for a Miami concept led by a Michelin-starred chef.' },
              { venue: 'SLS Brickell', title: 'Director of Banquets — Pre-Opening', body: 'Created staffing models, event workflows, and banquet execution systems for a luxury urban hotel before first guest arrival.' },
              { venue: 'Marabu Restaurant', title: 'General Manager', body: 'Led labor optimization, service consistency improvements, and guest-experience recovery for a high-volume Miami restaurant.' },
            ].map((c) => (
              <div key={c.title} className="luxury-card p-7">
                <span className="section-kicker mb-3 block">{c.venue}</span>
                <h3 className="font-display text-xl text-luxury-text mb-3">{c.title}</h3>
                <p className="text-luxury-muted text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/experience" className="btn-outline">View Full Experience</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-luxury-dark">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="luxury-card p-8">
            <h2 className="font-display text-2xl text-luxury-text mb-5">Who this is for</h2>
            <ul className="space-y-3 text-luxury-muted text-sm mb-6">
              {[
                'Independent restaurant owners opening their first or second location',
                'Hotel management companies needing banquet or pre-opening leadership',
                'Multi-concept groups experiencing operational drift between locations',
                'Investors who acquired a hospitality asset and need quick stabilization',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold">Is this your project?</Link>
          </div>
          <div className="luxury-card p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl text-luxury-text mb-4">Let&rsquo;s build something that runs well.</h2>
              <p className="text-luxury-muted text-sm leading-relaxed mb-6">
                Whether you&rsquo;re 90 days from opening or trying to fix a difficult quarter,
                the next step is simple: start the conversation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Email Leander</Link>
              <Link to="/services" className="btn-outline">See Engagement Options</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
