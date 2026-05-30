import { Link } from 'react-router-dom'
import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import TrustBar from '@/components/TrustBar'
import Testimonials from '@/components/Testimonials'

const stats = [
  { num: '18+', label: 'Years Experience' },
  { num: '$12M+', label: 'Revenue Optimized' },
  { num: '500+', label: 'Team Members Trained' },
  { num: '40+', label: 'Properties Operated' },
]

const capabilities = [
  'Pre-Opening GM',
  'P&L Oversight',
  'SOP Development',
  'Team Training',
  'Cost Control',
  'Banquet & Catering',
  'Operations Recovery',
  'Vendor Management',
]

const services = [
  {
    kicker: 'Fractional leadership',
    title: 'Fractional F&B Director',
    body: 'For restaurants and hotel groups that need a veteran operator 2–4 days per week. Stabilize operations, build systems, and develop your team.',
    href: '/services',
  },
  {
    kicker: 'New concept support',
    title: 'Pre-Opening & New Concepts',
    body: 'From construction walkthroughs to opening night — team hiring, SOP creation, vendor coordination, and opening-day execution.',
    href: '/pre-opening',
  },
  {
    kicker: 'Performance recovery',
    title: 'Operations Recovery',
    body: 'When labor costs drift, service drops, or turnover hurts consistency, I diagnose quickly and install systems that stick.',
    href: '/services',
  },
]

const experience = [
  {
    venue: 'Maska Indian Kitchen + Bar',
    title: 'Opening General Manager',
    body: 'Built the opening team, vendor relationships, service standards, and operational systems for a Miami concept led by a Michelin-starred chef.',
  },
  {
    venue: 'SLS Brickell',
    title: 'Director of Banquets — Pre-Opening',
    body: 'Created staffing models, event workflows, and banquet execution systems for a luxury urban hotel before first guest arrival.',
  },
  {
    venue: 'Marabu Restaurant',
    title: 'General Manager',
    body: 'Led labor optimization, service consistency improvements, and guest-experience recovery for a high-volume Miami restaurant.',
  },
]

const audience = [
  'Independent restaurant owners opening their first or second location',
  'Hotel management companies needing banquet or pre-opening leadership',
  'Multi-concept groups experiencing operational drift between locations',
  'Investors who acquired a hospitality asset and need quick stabilization',
]

const steps = [
  { num: '01', title: 'Discovery', body: '30-minute call to understand your goals, gaps, and timeline.' },
  { num: '02', title: 'Proposal', body: 'Clear scope, deliverables, and investment — within 48 hours.' },
  { num: '03', title: 'Engagement', body: 'On-site or hybrid leadership, tailored to your operation.' },
  { num: '04', title: 'Handoff', body: 'Systems, training, and documentation your team owns.' },
]

const results = [
  { num: '4pts', label: 'Labor cost reduction', sub: 'within 60 days' },
  { num: '30%', label: 'Turnover improvement', sub: 'average across engagements' },
  { num: '3–5×', label: 'ROI on consulting fee', sub: 'within 6 months' },
  { num: '90d', label: 'Average stabilization', sub: 'for recovery engagements' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Fractional F&B Operations Leader"
        description="18+ years opening, leading, and growing restaurants, hotels, banquets, and catering operations across Miami — now available as fractional leadership."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '680px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/landing-hero.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.05) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>

        <div className="container relative z-10 py-[clamp(6rem,13vw,11rem)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="kicker">Miami hospitality consulting</span>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-6">
                Fractional F&B Operations Leadership
              </h1>
              <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
                18+ years opening, stabilizing, and scaling hospitality operations across Miami.
                Senior operational expertise without the full-time overhead.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://calendly.com/leandermena/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book a Discovery Call
                </a>
                <Link to="/pre-opening" className="btn btn-secondary">
                  View Pre-Opening Support
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">At a glance</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Operational leadership for Miami restaurants & hotels
                </h3>
                <p className="text-sm text-[#cccccc] mb-6">
                  Pre-opening builds, operations recovery, and fractional F&B direction for
                  independent restaurants, luxury hotels, and multi-unit groups.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-[#3a3a3a] pt-6">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <strong className="text-2xl font-extrabold text-[#d4b896]">{s.num}</strong>
                      <span className="text-xs text-[#cccccc]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* CAPABILITIES BAND */}
      <section className="bg-[#c9a87a] py-4">
        <div className="container">
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
            {capabilities.map((c) => (
              <span key={c} className="text-xs font-semibold tracking-widest uppercase text-[#1a1a1a]">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FRACTIONAL */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="kicker">The Difference</span>
              <h2>Why Operators Choose Fractional Leadership</h2>
              <p className="text-[#bbbbbb] max-w-[54ch] leading-relaxed mb-8">
                Most hospitality groups don't need another full-time executive. They need a
                seasoned operator who can diagnose issues fast, implement systems that stick,
                and transfer knowledge to your existing team — without the overhead of a
                permanent hire.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Rapid Diagnosis', body: 'Identify root causes within the first week, not months.' },
                  { title: 'Systems That Stick', body: 'SOPs and training programs your team will actually follow.' },
                  { title: 'Proven Track Record', body: '18+ years across Michelin concepts, luxury hotels, and independents.' },
                  { title: 'Measurable ROI', body: 'Average 3–5× return on consulting investment within 6 months.' },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-[#c9a87a]/60 pl-4">
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-[#bbbbbb]">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card">
                <img
                  src="/images/aboutme.jpg"
                  alt="Leander Mena — Miami F&B Operations Leader"
                  width="600"
                  height="450"
                  className="w-full rounded-lg mb-6 object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="text-center">
                  <p className="font-display text-xl font-bold text-white">Leander Mena</p>
                  <p className="text-sm text-[#bbbbbb]">Miami, Florida</p>
                  <div className="flex justify-center gap-6 mt-4">
                    <div>
                      <strong className="text-lg font-extrabold text-[#d4b896]">$12M+</strong>
                      <p className="text-xs text-[#bbbbbb]">Revenue Optimized</p>
                    </div>
                    <div>
                      <strong className="text-lg font-extrabold text-[#d4b896]">500+</strong>
                      <p className="text-xs text-[#bbbbbb]">Team Members Trained</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link to="/about" className="btn btn-ghost text-xs">Learn More About Leander</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="kicker">What I do</span>
            <h2>Focused operational leadership</h2>
          </ScrollReveal>
          <div className="grid-3 mt-10">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div className="card h-full flex flex-col">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#d4b896] mb-3">{s.kicker}</span>
                  <h3 className="text-base font-bold text-white mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm text-[#bbbbbb] mb-6 flex-1">{s.body}</p>
                  <Link to={s.href} className="text-sm font-semibold text-[#d4b896] hover:text-[#e8cfa8] inline-flex items-center gap-1 group">
                    Learn more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH IMAGE BREAK */}
      <section className="relative overflow-hidden my-2" style={{ height: '420px' }}>
        <img
          src="/images/dining.jpg"
          alt="Miami restaurant dining room"
          width="1400"
          height="600"
          className="w-full h-full object-cover"
          style={{ opacity: 1 }}
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.3) 55%, rgba(10,10,10,0.05) 100%)' }} />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <ScrollReveal>
              <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white max-w-[22ch] leading-tight">
                “The floor doesn’t lie. Everything you need to know is in the room during service.”
              </p>
              <p className="text-[#c9a87a] text-sm mt-4 font-semibold tracking-wider uppercase">Leander Mena</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="kicker">Real Outcomes</span>
            <h2>What Results Look Like</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {results.map((r, i) => (
              <ScrollReveal key={r.label} delay={i * 100}>
                <div className="card text-center">
                  <strong className="block text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#d4b896] leading-none mb-2">{r.num}</strong>
                  <p className="text-sm font-bold text-white mb-1">{r.label}</p>
                  <p className="text-xs text-[#888888]">{r.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* EXPERIENCE */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="kicker">Selected experience</span>
            <h2>Proof, not a résumé dump.</h2>
          </ScrollReveal>
          <div className="grid-3 mt-10">
            {experience.map((e, i) => (
              <ScrollReveal key={e.venue} delay={i * 120}>
                <div className="card h-full flex flex-col">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#d4b896] mb-3">{e.venue}</span>
                  <h3 className="text-base font-bold text-white mb-3 leading-snug">{e.title}</h3>
                  <p className="text-sm text-[#bbbbbb] flex-1">{e.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/experience" className="btn btn-secondary">View Full Experience</Link>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="kicker">Who This Is For</span>
            <h2>Built for Operators Who Need Results</h2>
            <p className="section-intro">
              Whether you’re launching a new concept, recovering a struggling operation, or need
              hands-on leadership without a full-time hire — this is built for you.
            </p>
          </ScrollReveal>
          <div className="card">
            <ul className="list">
              {audience.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn btn-primary">Is this your project?</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="kicker">How We Work Together</span>
            <h2>A Simple, High-Impact Engagement Model</h2>
            <p className="section-intro">
              Every engagement starts with a no-obligation discovery call. From there, we define
              scope, timeline, and deliverables — no retainer lock-ins, no ambiguous billing.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 150}>
                <div className="card h-full">
                  <span className="text-3xl font-extrabold text-[#d4b896]/30">{s.num}</span>
                  <h3 className="text-base font-bold text-white mt-3 mb-2">{s.title}</h3>
                  <p className="text-sm text-[#bbbbbb]">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section border-b-0">
        <div className="container">
          <ScrollReveal>
            <div className="card p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#c9a87a]/8 rounded-full blur-[80px] pointer-events-none" />
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight text-white mb-4 relative">
                Let’s build something that runs well.
              </h2>
              <p className="text-[#bbbbbb] max-w-xl mx-auto mb-8 relative">
                Whether you’re 90 days from opening or trying to fix a difficult quarter,
                the next step is simple: start the conversation.
              </p>
              <div className="flex flex-wrap justify-center gap-3 relative">
                <a href="https://calendly.com/leandermena/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a Discovery Call</a>
                <Link to="/contact" className="btn btn-secondary">See Engagement Options</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
