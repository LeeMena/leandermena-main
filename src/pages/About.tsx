import { useEffect, useRef } from 'react'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import { heroImages } from '@/data/heroImages'

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
        title="About Leander Mena | 18+ Years in F&B Operations"
        description="From Miami's most demanding restaurants and luxury hotels to a nationally available fractional operator. Meet Leander Mena - pre-opening, turnaround, and F&B operations specialist."
        path="/about"
        schemaType="about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={heroImages.about.url}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = heroImages.about.fallback }}
            alt=""
            width="1920"
            height="1080"
            className="w-full h-full"
            loading="eager"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10" style={{ paddingTop: 'clamp(3rem, 10vw, 7rem)', paddingBottom: 'clamp(3rem, 10vw, 7rem)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <Reveal>
              <span className="kicker">About</span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4 lg:mb-6">
                Miami-Forged. Nationally Available.
              </h1>
              <p className="text-[#d8d8d8] text-base lg:text-lg max-w-[52ch] mb-6 lg:mb-8 leading-relaxed">
                18 years. Pre-openings, turnarounds, multi-unit management, and catering leadership. Every system I use was earned on the floor, and it travels.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
                <Link to="/experience" className="btn btn-secondary">View Career Experience</Link>
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
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-6">Built in the Trenches of Miami Hospitality</h2>
              <div className="prose-article">
                <p>
                  I learned operations in the only market that would let me fail fast enough to get good: Miami. Eighteen years across 40+ properties, from Michelin-starred <Link to="/pre-opening" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>pre-openings in Midtown</Link> to SLS and Accor luxury hotel programs, independent rooms, and multi-unit groups. Every engagement sharpened the same core skill: turning a vision into a functioning operation.
                </p>
                <p>
                  The systems that survive Miami's labor market, seasonality, and guest expectations travel. So I do too. Today I work as a fractional F&amp;B operator with restaurants and hotels across the country: on-site for the moments that require presence, remote for the systems, reporting, and coaching in between.
                </p>
                <p>
                  My approach is straightforward: understand the operation as it actually is, identify the highest-leverage interventions, and stay involved until the change is real and lasting. As a <Link to="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>fractional F&amp;B operations consultant</Link>, I work in English, Spanish, and conversational French, and I'm equally at home in independent concepts and luxury hotel environments.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              {/* Source photo is 414x418 - render at (or below) native size and
                  keep its natural square ratio so it never upscales or crops. */}
              <img
                src="/images/about.jpg"
                alt="Leander Mena - Fractional F&B Director and Restaurant Consultant, Miami"
                width="414"
                height="418"
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: '400px',
                  marginInline: 'auto',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-lg)',
                }}
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
          <p className="section-intro">The mindset behind every fractional F&amp;B and consulting engagement.</p>
          <div className="grid-3">
            {[
              { title: 'Systems over heroics', body: 'A well-run operation doesn\'t depend on the owner being present 80 hours a week. The goal is always replicable systems that hold without constant intervention.' },
              { title: 'Floor presence is non-negotiable', body: 'You can\'t manage a restaurant from a spreadsheet. The data tells you what happened. The floor tells you why.' },
              { title: 'Root cause over symptom', body: 'High turnover, missed targets, inconsistent quality are symptoms. I work backward to the actual problem before recommending anything.' },
              { title: 'Speed with discipline', body: 'Operators need results quickly. I move fast without cutting corners on the fundamentals that make change stick.' },
              { title: 'People build operations', body: 'The best SOP in the world fails without buy-in. Training, culture, and accountability come before the manual.' },
              { title: 'Honest assessment first', body: 'Before any plan, I need to understand what is actually happening on the ground, not what anyone wishes were happening.' },
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
            <Link to="/services" className="btn btn-secondary">View Fractional F&amp;B Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
