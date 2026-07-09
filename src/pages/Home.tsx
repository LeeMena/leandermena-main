import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import SEO from '@/components/SEO'
import BlueprintModal from '@/components/BlueprintModal'
import BlueprintCTA from '@/components/BlueprintCTA'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import { services } from '@/data/services'
import { approvedTestimonials } from '@/data/testimonials'
import { products } from '@/data/products'
import { heroImages } from '@/data/heroImages'

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}

function RevealLine({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, inView } = useReveal(0.2)
  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }}>
      <div style={{
        transform: inView ? 'translateY(0)' : 'translateY(100%)',
        opacity: inView ? 1 : 0,
        transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 0.7s ease ${delay}s`,
      }}>
        {children}
      </div>
    </div>
  )
}

function AnimatedStat({ value, label, delay = 0, tone = 'dark' }: { value: string; label: string; delay?: number; tone?: 'dark' | 'theme' }) {
  const { ref, inView } = useReveal(0.3)
  const valueColor = tone === 'dark' ? '#ffffff' : 'var(--color-text)'
  const labelColor = tone === 'dark' ? 'rgba(255,255,255,0.4)' : 'var(--color-text-muted)'
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.75rem, 9vw, 8rem)',
        fontWeight: 400,
        letterSpacing: '-0.04em',
        lineHeight: 0.9,
        color: valueColor,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        opacity: inView ? 1 : 0,
        transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 0.8s ease ${delay}s`,
      }}>{value}</div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.5625rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: labelColor,
        marginTop: '0.75rem',
        transform: inView ? 'translateY(0)' : 'translateY(12px)',
        opacity: inView ? 1 : 0,
        transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay + 0.1}s, opacity 0.8s ease ${delay + 0.1}s`,
      }}>{label}</div>
    </div>
  )
}

function RevealRule({ delay = 0 }: { delay?: number }) {
  const { ref, inView } = useReveal()
  return (
    <div ref={ref} style={{ height: '1px', overflow: 'hidden' }}>
      <div style={{
        height: '1px',
        background: 'rgba(255,255,255,0.12)',
        transform: inView ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: `transform 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }} />
    </div>
  )
}

function Statement({ lines, accent, sub }: { lines: string[]; accent?: string; sub?: string }) {
  const { ref, inView } = useReveal(0.15)
  return (
    <div ref={ref} style={{ padding: 'clamp(3.5rem, 9vw, 9rem) 0' }}>
      {accent && (
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.5625rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease 0.1s',
        }}>{accent}</div>
      )}
      <div>
        {lines.map((line, i) => (
          <div key={i} style={{ overflow: 'hidden' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 8vw, 7.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 0.92,
              color: '#ffffff',
              transform: inView ? 'translateY(0)' : 'translateY(110%)',
              opacity: inView ? 1 : 0,
              transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${0.08 * i}s, opacity 0.6s ease ${0.08 * i}s`,
              paddingBottom: '0.06em',
            }}>{line}</div>
          </div>
        ))}
      </div>
      {sub && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          color: 'rgba(255,255,255,0.45)',
          marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
          maxWidth: '52ch',
          lineHeight: 1.7,
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.9s ease 0.4s',
        }}>{sub}</p>
      )}
    </div>
  )
}

export default function Home() {
  const [blueprintOpen, setBlueprintOpen] = useState(false)

  return (
    <>
      <SEO
        title="F&B Operations Consultant | Leander Mena"
        description="F&B operations consulting, pre-opening builds, and operations turnaround for restaurants and hotels nationwide. 18+ years running Miami's top hospitality venues - now available across the U.S."
        path="/"
        schemaType="home"
      />
      <BlueprintModal isOpen={blueprintOpen} onClose={() => setBlueprintOpen(false)} />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          minHeight: 'clamp(420px, 60vw, 680px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#0a0905',
          paddingBlock: 'clamp(4rem, 9vw, 7rem)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src={heroImages.home.url}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = heroImages.home.fallback }}
            alt={heroImages.home.alt}
            width="1600"
            height="1067"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 80%' }}
          />
          {/* Brighter: left 0.55/0.18, bottom 0.4 */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,9,5,0.55) 40%, rgba(10,9,5,0.18) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,5,0.4) 0%, transparent 40%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="container">
            <div style={{ maxWidth: '900px' }}>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.5625rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                }}
              >
                F&amp;B Operations Consulting · U.S. Nationwide
              </motion.p>

              <h1 style={{ margin: 0 }}>
                <span className="sr-only">F&amp;B Operations Consulting for Restaurants &amp; Hotels Nationwide - </span>
                <div style={{ overflow: 'hidden', marginBottom: '0.04em' }}>
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(3.25rem, 12vw, 10rem)',
                      fontWeight: 400,
                      letterSpacing: '-0.035em',
                      lineHeight: 0.88,
                      color: '#ffffff',
                    }}
                  >
                    Leander
                  </motion.span>
                </div>
                <span className="sr-only"> </span>
                <div style={{ overflow: 'hidden', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(3.25rem, 12vw, 10rem)',
                      fontWeight: 400,
                      letterSpacing: '-0.035em',
                      lineHeight: 0.88,
                      color: 'rgba(255,255,255,0.22)',
                      fontStyle: 'italic',
                    }}
                  >
                    Mena
                  </motion.span>
                </div>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)',
                  color: 'rgba(255,255,255,0.50)',
                  maxWidth: '46ch',
                  lineHeight: 1.75,
                  marginBottom: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                Eighteen years forged in Miami's most demanding kitchens, hotels, and banquet halls. Now embedded with operators nationwide - on-site when it matters, remote in between.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="hero-cta-row"
              >
                <Link
                  to="/book"
                  className="btn btn-primary hero-cta"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.18em', minHeight: '48px', paddingInline: 'var(--space-8)' }}
                >
                  Book a Discovery Call
                </Link>
                <button
                  onClick={() => setBlueprintOpen(true)}
                  className="hero-cta-ghost"
                >
                  <Download size={12} />
                  Explore Digital Products
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.5625rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: 'clamp(1.25rem, 2.5vw, 2rem)',
                }}
              >
                Based in Miami · US Nationwide · Select International Engagements
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'clamp(var(--space-8), 4vw, var(--space-12)) 0',
      }}>
        <div className="container">
          <div className="home-stats-grid">
            {[
              { value: '18+', label: 'Years Experience' },
              { value: '$12M+', label: 'Revenue Optimized' },
              { value: '500+', label: 'Team Members Trained' },
              { value: '40+', label: 'Properties Operated' },
            ].map((s, i) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 0.08} tone="theme" />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#0a0905', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <RevealRule />
          <Statement accent="The Problem" lines={['Most operators', "don't need more", 'advice.']} sub="They need someone who's actually done it, at scale, under pressure, with real consequences." />
        </div>
      </section>

      <section style={{ background: '#0a0905', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <RevealRule delay={0.1} />
          <Statement accent="The Solution" lines={['Expert', 'consulting.', 'Real results.']} sub="Senior operational expertise, available without the overhead of a full-time executive hire." />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'var(--color-bg)', padding: 'clamp(var(--space-16), 8vw, var(--space-28)) 0' }}>
        <div className="container">
          <RevealLine style={{ marginBottom: 'clamp(var(--space-10), 4vw, var(--space-16))' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>Engagement Models</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--color-text)' }}>Operational Leadership,{' '}<em>On Demand</em></h2>
              </div>
              <Link to="/services" className="home-section-link">
                View All Services &amp; Pricing <ArrowRight size={11} />
              </Link>
            </div>
          </RevealLine>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 'var(--space-4)' }}>
            {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'clamp(var(--space-16), 8vw, var(--space-28)) 0' }}>
        <div className="container">
          <RevealLine style={{ marginBottom: 'clamp(var(--space-12), 5vw, var(--space-20))' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--color-text)' }}>From First Call to{' '}<em>Measurable Results</em></h2>
          </RevealLine>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 'clamp(var(--space-8), 4vw, var(--space-12))' }}>
            {[
              { n: '01', title: 'Discovery Call', body: '30-minute conversation to understand your challenges, timeline, and goals.' },
              { n: '02', title: 'On-Site Diagnostic', body: 'Deep-dive assessment of your operations, typically 3-5 days on location.' },
              { n: '03', title: 'Implementation', body: 'Execute the action plan with weekly check-ins and real-time adjustments.' },
              { n: '04', title: 'Sustainable Results', body: 'Handover systems, train your team, and ensure improvements stick long-term.' },
            ].map((step, i) => (
              <RevealLine key={step.n} delay={i * 0.08}>
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-6)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, letterSpacing: '-0.04em', color: 'var(--color-text-faint)', lineHeight: 1, marginBottom: 'var(--space-4)' }}>{step.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>{step.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{step.body}</p>
                </div>
              </RevealLine>
            ))}
          </div>
        </div>
      </section>

      <BlueprintCTA />

      {/* PRODUCTS */}
      <section style={{ background: 'var(--color-bg)', padding: 'clamp(var(--space-16), 8vw, var(--space-28)) 0' }}>
        <div className="container">
          <RevealLine style={{ marginBottom: 'clamp(var(--space-10), 4vw, var(--space-16))' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>Digital Products</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--color-text)' }}>Tools Built from{' '}<em>Real Experience</em></h2>
              </div>
              <Link to="/products" className="home-section-link">
                Browse All Products <ArrowRight size={11} />
              </Link>
            </div>
          </RevealLine>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'var(--space-4)' }}>
            {products.slice(0, 3).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'clamp(var(--space-16), 8vw, var(--space-28)) 0' }}>
        <div className="container">
          <RevealLine style={{ marginBottom: 'clamp(var(--space-10), 4vw, var(--space-16))' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>Client Results</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--color-text)' }}>Measurable Impact,{' '}<em>Real Words</em></h2>
          </RevealLine>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {approvedTestimonials.map((t, i) => <TestimonialCard key={t.id} testimonial={t} index={i} />)}
          </div>
          <RevealLine delay={0.2} style={{ marginTop: 'clamp(var(--space-10), 4vw, var(--space-14))' }}>
            <div style={{ textAlign: 'center' }}>
              <Link to="/case-studies" className="home-section-link" style={{ whiteSpace: 'normal' }}>
                Read Full Case Studies <ArrowRight size={11} />
              </Link>
            </div>
          </RevealLine>
        </div>
      </section>

      <section style={{ background: '#0a0905', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <RevealRule />
          <Statement accent="The Difference" lines={['Why operators', 'choose expert', 'consulting.']} sub="Most hospitality groups don't need another full-time executive. They need a seasoned operator who can diagnose issues fast, implement systems that stick, and transfer knowledge to your existing team." />
          <RevealRule delay={0.1} />
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={{ background: '#0a0905', padding: 'clamp(var(--space-16), 8vw, var(--space-28)) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 'clamp(var(--space-8), 4vw, var(--space-12))' }}>
            {[
              { n: '01', title: 'Rapid Diagnosis', body: 'Identify root causes within the first week, not months' },
              { n: '02', title: 'Systems That Stick', body: 'SOPs and training programs your team will actually follow' },
              { n: '03', title: 'Proven Track Record', body: '18+ years across Michelin concepts, luxury hotels, and independents' },
              { n: '04', title: 'Measurable ROI', body: 'Average 3-5x return on consulting investment within 6 months' },
            ].map((v, i) => (
              <RevealLine key={v.n} delay={i * 0.08}>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 'var(--space-6)' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 'var(--space-5)' }}>{v.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 400, letterSpacing: '-0.01em', color: '#ffffff', marginBottom: 'var(--space-3)' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </RevealLine>
            ))}
          </div>
          <div className="home-stats-grid" style={{ marginTop: 'clamp(var(--space-16), 8vw, var(--space-24))', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 'clamp(var(--space-12), 5vw, var(--space-20))' }}>
            {[
              { value: '$12M+', label: 'Revenue Optimized' },
              { value: '500+', label: 'Team Members' },
              { value: '40+', label: 'Properties' },
              { value: '18+', label: 'Years Leading' },
            ].map((s, i) => <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      <CTABanner />

      <style>{`
        .home-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(2.5rem, 8vw, 3.5rem) var(--space-4);
        }
        @media (min-width: 768px) {
          .home-stats-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: var(--space-6);
          }
        }
        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-3);
          align-items: center;
        }
        .hero-cta-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 48px;
          padding: 0 var(--space-6);
          font-family: var(--font-body);
          font-size: 0.625rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          background: none;
          border: 1px solid rgba(255,255,255,0.16);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: color 200ms ease, border-color 200ms ease;
        }
        .hero-cta-ghost:hover {
          color: #ffffff;
          border-color: rgba(255,255,255,0.4);
        }
        @media (max-width: 639px) {
          .hero-cta-row {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-cta-row .hero-cta {
            width: 100%;
            justify-content: center;
            min-height: 52px;
          }
          .hero-cta-ghost {
            width: 100%;
          }
        }
        .home-section-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-body);
          font-size: 0.625rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          min-height: 44px;
          transition: color 200ms ease;
        }
        .home-section-link:hover {
          color: var(--color-primary);
        }
      `}</style>
    </>
  )
}
