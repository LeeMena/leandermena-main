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

// --- Statement block (the "Space" big text moments) ---
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
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%'])
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

      {/* ── HERO ── Full-screen cinematic entry */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100svh',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#0a0905',
        }}
      >
        {/* Parallax background image */}
        <motion.div
          style={{
            position: 'absolute',
            inset: '-20%',
            y: heroY,
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
          {/* Multi-layer overlay for cinematic darkness */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,9,5,0.62) 0%, rgba(10,9,5,0.40) 40%, rgba(10,9,5,0.80) 80%, #0a0905 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(10,9,5,0.55) 100%)' }} />
        </motion.div>

        {/* Centered hero text */}
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
                18+ years opening, leading, and scaling restaurants, hotels, and catering operations across Miami — now available as fractional leadership.
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
                    padding: '0.75rem 0',
                    transition: 'color 200ms ease',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.80)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  <Download size={12} /> Free Pre-Opening Blueprint
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 4vw, 2.5rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.4375rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Scroll</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.30), transparent)' }}
          />
        </motion.div>
      </section>

      {/* ── DARK SCROLLYTELLING BODY ── */}
      <div style={{ background: '#0a0905', color: '#ffffff' }}>

        {/* ── NUMBERS SECTION ── The bold data moment */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBlock: 'clamp(4rem, 8vw, 7rem)' }}>
          <div className="container">
            <div className="home-stats-grid">
              <AnimatedStat value="18+" label="Years of Experience" delay={0} />
              <AnimatedStat value="$12M+" label="Revenue Optimized" delay={0.1} />
              <AnimatedStat value="500+" label="Team Members Trained" delay={0.2} />
              <AnimatedStat value="40+" label="Properties Operated" delay={0.3} />
            </div>
          </div>
        </section>

        {/* ── STATEMENT 01 — The Problem ── */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="container">
            <Statement
              accent="The Reality"
              lines={['Most openings', 'fail the same way.']}
              sub="Missed timelines. Undertrained staff. Systems built on instinct rather than process. The difference between a venue that opens strong and one that never recovers is decided in the 90 days before the doors open."
            />
          </div>
        </section>

        {/* ── STATEMENT 02 — The Solution ── */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.018)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px,100%), 1fr))', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center', paddingBlock: 'clamp(5rem, 10vw, 9rem)' }}>
              <Statement
                accent="The Approach"
                lines={['Fractional.', 'Focused.', 'Measurable.']}
              />
              <div>
                {[
                  { n: '01', title: 'Rapid Diagnosis', body: 'Root causes identified within the first week, not months into a retainer.' },
                  { n: '02', title: 'Systems That Stick', body: 'SOPs and training programs your team will actually follow — built with them, not for them.' },
                  { n: '03', title: 'Measurable ROI', body: 'Average 3–5× return on consulting investment within 6 months.' },
                  { n: '04', title: 'No Full-Time Overhead', body: 'Senior operator-level expertise without the cost or complexity of a C-suite hire.' },
                ].map((item, i) => {
                  const { ref, inView } = useReveal(0.2)
                  return (
                    <div
                      key={item.n}
                      ref={ref}
                      style={{
                        display: 'flex',
                        gap: 'clamp(1rem, 2.5vw, 2rem)',
                        paddingBlock: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                        borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateX(0)' : 'translateX(20px)',
                        transition: `opacity 0.8s ease ${i * 0.08}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.20)', paddingTop: '0.2em', flexShrink: 0, width: '1.5rem' }}>{item.n}</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 400, color: '#ffffff', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>{item.title}</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.40)', lineHeight: 1.65 }}>{item.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── Dark card grid */}
        <section style={{ paddingBlock: 'clamp(5rem, 10vw, 9rem)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="container">
            <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              <RevealLine>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '1rem' }}>Consulting Services</p>
              </RevealLine>
              <RevealLine delay={0.08}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#ffffff', margin: 0 }}>Operational leadership,<br />on demand.</h2>
              </RevealLine>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px,100%), 1fr))', gap: 'var(--space-4)' }}>
              {services.map((service, i) => <ServiceCard key={service.id} service={service} index={i} />)}
            </div>
            <div style={{ marginTop: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <Link to="/services" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                View all services &amp; pricing <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROCESS — Editorial numbered list ── */}
        <section style={{ paddingBlock: 'clamp(5rem, 10vw, 9rem)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="container">
            <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
              <RevealLine>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '1rem' }}>How It Works</p>
              </RevealLine>
              <RevealLine delay={0.08}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#ffffff', margin: 0 }}>First call to<br />measurable results.</h2>
              </RevealLine>
            </div>
            <div>
              {[
                { step: '01', title: 'Discovery Call', desc: '30-minute conversation to understand your challenges, timeline, and goals.' },
                { step: '02', title: 'On-Site Diagnostic', desc: 'Deep-dive assessment of your operations — typically 3–5 days on location.' },
                { step: '03', title: 'Implementation', desc: 'Execute the action plan with weekly check-ins and real-time adjustments.' },
                { step: '04', title: 'Sustainable Results', desc: 'Handover systems, train your team, and ensure improvements stick long-term.' },
              ].map((item, i) => {
                const { ref, inView } = useReveal(0.25)
                return (
                  <div key={item.step} ref={ref}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '3rem 1fr auto',
                      gap: 'clamp(1rem, 3vw, 2.5rem)',
                      alignItems: 'baseline',
                      paddingBlock: 'clamp(1.25rem, 2.5vw, 2rem)',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(24px)',
                      transition: `opacity 0.8s ease ${i * 0.1}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                    }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.5rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.18)' }}>{item.step}</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 2.5vw, 1.75rem)', fontWeight: 400, letterSpacing: '-0.02em', color: '#ffffff', marginBottom: '0.35rem' }}>{item.title}</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, maxWidth: '52ch' }}>{item.desc}</p>
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.04em', lineHeight: 1, alignSelf: 'center' }}>{item.step}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── STATEMENT 03 — Brand conviction ── */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="container">
            <Statement
              accent="The Philosophy"
              lines={['Operations is culture.', 'Culture is revenue.']}
              sub="Every SOP, every shift briefing, every table turn is a reflection of leadership. When the systems are right, everything else follows."
            />
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ paddingBlock: 'clamp(5rem, 10vw, 9rem)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="container">
            <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              <RevealLine>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '1rem' }}>Client Results</p>
              </RevealLine>
              <RevealLine delay={0.08}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#ffffff', margin: 0 }}>Measurable impact,<br />real words.</h2>
              </RevealLine>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              {approvedTestimonials.slice(0, 2).map((t, i) => <TestimonialCard key={t.name + i} testimonial={t} index={i} featured />)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px,100%), 1fr))', gap: 'var(--space-4)' }}>
              {approvedTestimonials.slice(2, 5).map((t, i) => <TestimonialCard key={t.name + i} testimonial={t} index={i} />)}
            </div>
            <div style={{ marginTop: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <Link to="/case-studies" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                Read full case studies <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={{ paddingBlock: 'clamp(5rem, 10vw, 9rem)', background: 'rgba(255,255,255,0.018)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="container">
            <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              <RevealLine>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.5625rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '1rem' }}>Digital Products</p>
              </RevealLine>
              <RevealLine delay={0.08}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#ffffff', margin: 0 }}>Tools built from<br />real experience.</h2>
              </RevealLine>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px,100%), 1fr))', gap: 'var(--space-4)' }}>
              {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
            <div style={{ marginTop: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <Link to="/products" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                Browse all products <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── BLUEPRINT CTA ── */}
        <BlueprintCTA />

        {/* ── FINAL CTA ── */}
        <CTABanner
          title="Let's Build Something That Runs Well"
          subtitle="Whether you're 90 days from opening or trying to fix a difficult quarter — the next move is simple: start the conversation."
          primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
          secondaryCta={{ label: 'Explore Products', href: '/products' }}
        />
      </div>

      <style>{`
        .home-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem);
        }
        @media (min-width: 640px) {
          .home-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </>
  )
}
