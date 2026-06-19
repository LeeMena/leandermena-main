import { useEffect, useRef } from 'react'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

// Lightweight scroll reveal matching Experience page
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: 'translateY(18px)', transition: 'opacity 0.55s ease, transform 0.55s ease' }}
    >
      {children}
    </div>
  )
}

export default function About() {
  return (
    <>
      <SEO
        title="About Leander Mena"
        description="18 years driving multi-unit operations, pre-opening launches, and revenue growth across high-volume independent and luxury concepts in Miami."
        path="/about"
        schemaType="about"
      />

      {/* Hero - mirrors Experience exactly */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: 'clamp(420px, 60vw, 680px)' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/aboutme.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full"
            loading="eager"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10" style={{ paddingTop: 'clamp(3rem, 10vw, 7rem)', paddingBottom: 'clamp(3rem, 10vw, 7rem)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <Reveal>
              <span className="kicker">About</span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4 lg:mb-6">
                Built in the Trenches of Miami Hospitality
              </h1>
              <p className="text-[#d8d8d8] text-base lg:text-lg max-w-[52ch] mb-6 lg:mb-8 leading-relaxed">
                18 years. Pre-openings, turnarounds, multi-unit management. Every system I use was earned on the floor.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
                <Link to="/experience" className="btn btn-secondary">View Experience</Link>
              </div>
            </Reveal>

            <Reveal delay={200} className="hidden lg:block">
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">By the Numbers</span>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {[
                    { num: '18+', label: 'Years in Miami Hospitality' },
                    { num: '5+', label: 'Pre-Opening Projects Led' },
                    { num: '$9.1M', label: 'Annual Revenue Managed' },
                    { num: '3', label: 'Languages Spoken' },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <strong className="text-2xl font-extrabold text-[#d4b896]">{s.num}</strong>
                      <span className="text-xs text-[#cccccc] leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'clamp(2rem,5vw,4rem)', alignItems: 'start' }}>
            <Reveal>
              <span className="kicker">Background</span>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-6">From the floor up</h2>
              <div className="prose-article">
                <p>
                  Over 18 years in hospitality, I've learned that the gap between a great concept and a great restaurant is almost always operational. My career has been built closing that gap - from Michelin-starred pre-openings in Midtown Miami to multi-unit P&amp;L management at scale, and everywhere in between.
                </p>
                <p>
                  I've opened hotels, turned around struggling concepts, built training programs from scratch, and managed teams of 80+ across multiple outlets. The through-line in every engagement: operations only improve when someone with real accountability is in the building.
                </p>
                <p>
                  My approach is straightforward: understand the operation as it actually is, identify the highest-leverage interventions, and stay involved until the change is real - not just on paper. I work in English, Spanish, and conversational French, and I'm at home in both independent concepts and luxury hotel environments.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <img
                src="/images/about.jpg"
                alt="Leander Mena - Miami F&B Operations Consultant"
                width="600"
                height="750"
                loading="lazy"
                style={{ borderRadius: 'var(--radius-lg)', width: '100%', objectFit: 'cover', objectPosition: 'top', aspectRatio: '4/5' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <span className="kicker">What I believe</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-3">Operating principles</h2>
          <p className="section-intro">The mindset behind every engagement.</p>
          <div className="grid-3">
            {[
              { title: 'Systems over heroics', body: 'A well-run operation doesn\'t depend on the owner being present 80 hours a week. The goal is always replicable systems.' },
              { title: 'Floor presence is non-negotiable', body: 'You can\'t manage a restaurant from a spreadsheet. The data tells you what; the floor tells you why.' },
              { title: 'Root cause over symptom', body: 'High turnover, missed targets, inconsistent quality - these are symptoms. I work backward to the actual problem.' },
              { title: 'Speed with discipline', body: 'Operators need results quickly. I move fast without cutting corners on the fundamentals.' },
              { title: 'People build operations', body: 'The best SOP in the world fails without buy-in. Training, culture, and accountability come before the manual.' },
              { title: 'Honest assessment first', body: 'Before any plan, I need to understand what\'s actually happening - not what anyone wishes were happening.' },
            ].map((p) => (
              <Reveal key={p.title}>
                <div className="card">
                  <strong style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{p.title}</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Work together</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Ready to stabilize and grow?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>Let's talk about where your operation is and where it needs to go.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
