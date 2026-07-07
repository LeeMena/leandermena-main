import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
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

// --- Scroll reveal hook ---
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}

// --- Single word / line reveal ---
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

// --- Parallax wrapper ---
function ParallaxSection({ children, speed = 0.15 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

// --- Large animated number ---
function AnimatedStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const { ref, inView } = useReveal(0.3)
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(3.5rem, 10vw, 8rem)',
        fontWeight: 400,
        letterSpacing: '-0.04em',
        lineHeight: 0.9,
        color: '#ffffff',
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        opacity: inView ? 1 : 0,
        transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 0.8s ease ${delay}s`,
      }}>{value}</div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.5625rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        marginTop: '0.75rem',
        transform: inView ? 'translateY(0)' : 'translateY(12px)',
        opacity: inView ? 1 : 0,
        transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay + 0.1}s, opacity 0.8s ease ${delay + 0.1}s`,
      }}>{label}</div>
    </div>
  )
}

// --- Horizontal rule reveal ---
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

// --- Statement block ---
function Statement({ lines, accent, sub }: { lines: string[]; accent?: string; sub?: string }) {
  const { ref, inView } = useReveal(0.15)
  return (
    <div ref={ref} style={{ padding: 'clamp(5rem, 10vw, 9rem) 0' }}>
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
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '15%'])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '15%'])

  return (
    <>
      <SEO
        title="Leander Mena | Fractional F&B Leadership & Hospitality Consulting | Miami"
        description="Fractional F&B operations leadership for Miami restaurants, hotels & new openings. 18 years opening, stabilizing, and scaling hospitality operations."
        path="/"
      />
      <BlueprintModal isOpen={blueprintOpen} onClose={() => setBlueprintOpen(false)} />

      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100svh',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#0a0905',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            y: heroY,
            scale: 1.15,
            zIndex: 0,
          }}
        >
          <img
            src="/landing-hero.jpg"
            alt=""
            width="1920"
            height="1200"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,9,5,0.62) 0%, rgba(10,9,5,0.40) 40%, rgba(10,9,5,0.80) 80%, #0a0905 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(10,9,5,0.55) 100%)' }} />
        </motion.div>

        <motion.div
          style={{ position: 'relative', zIndex: 1, width: '100%', y: heroTextY, opacity: heroOpacity }}
        >
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
                Miami, Florida · F&amp;B Operations
              </motion.p>

              <div style={{ overflow: 'hidden', marginBottom: '0.04em' }}>
                <motion.h1
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3.25rem, 12vw, 10rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.035em',
                    lineHeight: 0.88,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  Leander
                </motion.h1>
              </div>
              <div style={{ overflow: 'hidden', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                  style={{
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
                </motion.div>
              </div>

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
                18+ years opening, leading, and scaling restaurants, hotels, and catering operations across Miami, now available as fractional leadership.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center' }}
              >
                <Link
                  to="/book"
                  className="btn btn-primary"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.18em', minHeight: '48px', paddingInline: 'var(--space-8)' }}
                >
                  Book a Discovery Call
                </Link>
                <button
                  onClick={() => setBlueprintOpen(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <Download size={11} />
                  Explore Digital Products
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 4vw, 2.5rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.4375rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
          }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '32px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
            }}
          />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'clamp(var(--space-8), 4vw, var(--space-12)) 0',
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }}>
            {[
              { value: '18+', label: 'Years Experience' },
              { value: '$12M+', label: 'Revenue Optimized' },
              { value: '500+', label: 'Team Members Trained' },
              { value: '40+', label: 'Properties Operated' },
            ].map((s, i) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
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
          <Statement accent="The Solution" lines={['Fractional', 'leadership.', 'Real results.']} sub="Senior operational expertise, available without the overhead of a full-time executive hire." />
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
              <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-body)', fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
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

      <BlueprintCTA onOpen={() => setBlueprintOpen(true)} />

      {/* PRODUCTS */}
      <section style={{ background: 'var(--color-bg)', padding: 'clamp(var(--space-16), 8vw, var(--space-28)) 0' }}>
        <div className="container">
          <RevealLine style={{ marginBottom: 'clamp(var(--space-10), 4vw, var(--space-16))' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>Digital Products</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--color-text)' }}>Tools Built from{' '}<em>Real Experience</em></h2>
              </div>
              <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-body)', fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
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
              <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-body)', fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                Read Full Case Studies <ArrowRight size={11} />
              </Link>
            </div>
          </RevealLine>
        </div>
      </section>

      <section style={{ background: '#0a0905', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <RevealRule />
          <Statement accent="The Difference" lines={['Why operators', 'choose fractional', 'leadership.']} sub="Most hospitality groups don't need another full-time executive. They need a seasoned operator who can diagnose issues fast, implement systems that stick, and transfer knowledge to your existing team." />
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
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.4375rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 'var(--space-5)' }}>{v.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 400, letterSpacing: '-0.01em', color: '#ffffff', marginBottom: 'var(--space-3)' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </RevealLine>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)', marginTop: 'clamp(var(--space-16), 8vw, var(--space-24))', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 'clamp(var(--space-12), 5vw, var(--space-20))' }}>
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
    </>
  )
}
