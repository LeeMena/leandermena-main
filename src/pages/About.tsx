import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const competencies = [
  {
    label: 'Operations & Strategy',
    items: ['Multi-Unit Management', 'Pre-Opening & Launch Operations', 'P&L Optimization', 'Labor Modeling & Cost Control', 'Vendor Relations & Negotiations', 'Regulatory Compliance'],
  },
  {
    label: 'Revenue & Growth',
    items: ['Menu Engineering & Development', 'Strategic Pricing', 'Delivery & Off-Premise Programs', 'Revenue Forecasting', 'Margin Optimization', 'Sales Strategy'],
  },
  {
    label: 'Leadership & Culture',
    items: ['High-Volume Team Building', 'Staff Training & Development', 'Guest Experience Design', 'Brand Consistency', 'SOP & Playbook Development', 'Cross-Functional Collaboration'],
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Leander Mena | 18 years in Miami hospitality. F&B operations leader for restaurants, hotels, banquets, and catering."
        path="/about"
        schemaType="about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '680px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/aboutme.jpg"
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
              <span className="kicker">Miami, Florida</span>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-6">
                About Leander Mena
              </h1>
              <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
                18 years driving multi-unit operations, pre-opening launches, and revenue growth across high-volume independent and luxury concepts in Miami.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
                <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">By the Numbers</span>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {[
                    { num: '18', label: 'Years in Miami Hospitality' },
                    { num: '$9.1M', label: 'Annual Revenue Managed' },
                    { num: '220', label: 'Seats + 78 FTEs Led' },
                    { num: '40+', label: 'Team Members Hired & Trained at Single Opening' },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <strong className="text-2xl font-extrabold text-[#d4b896]">{s.num}</strong>
                      <span className="text-xs text-[#cccccc] leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-start mb-12">
            <ScrollReveal>
              <img
                src="/images/about.jpg"
                alt="Leander Mena"
                width="220"
                height="293"
                className="w-full rounded-xl shadow-md object-cover aspect-[3/4]"
                loading="lazy"
              />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <span className="text-xs font-bold tracking-widest uppercase text-[#888888] mb-6 block">
                Professional Profile
              </span>
              <h2 className="font-display text-2xl font-bold text-[#e8e8e8] mb-4">
                Where Vision Meets Operational Reality
              </h2>
              <div className="flex flex-col gap-4 text-[#888888] max-w-[68ch]" style={{ fontSize: '0.92rem', lineHeight: 1.75 }}>
                <p>
                  Over 18 years in hospitality, I've learned that the gap between a great concept and a great restaurant is almost always operational. My career has been built closing that gap — from Michelin-starred pre-openings in Midtown Miami to multi-unit P&L management at scale, and everywhere in between.
                </p>
                <p>
                  I've built teams, negotiated vendor contracts, engineered menus, modeled labor, and stood on the floor through openings, pivots, and recoveries. When the pandemic hit in 2020, my team and I built a fully operational delivery program in 10 days. That's the pace I'm used to.
                </p>
                <p>
                  My approach is straightforward: understand the operation as it actually is, identify the highest-leverage interventions, and stay involved until the change is real — not just on paper. I work in English, Spanish, and conversational French, and I'm at home in both independent concepts and luxury hotel environments.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Competencies */}
          <ScrollReveal>
            <h3 className="font-display text-xl font-bold text-[#e8e8e8] mb-6">Core Competencies</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {competencies.map((c) => (
                <div key={c.label} className="card" style={{ padding: 'var(--space-6)' }}>
                  <h4 className="text-sm font-bold text-[#d4b896] mb-3">{c.label}</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {c.items.map((item) => (
                      <li key={item} style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0, display: 'inline-block' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
            <Link to="/experience" className="btn btn-secondary">Full Experience</Link>
          </div>
        </div>
      </section>
    </>
  )
}
