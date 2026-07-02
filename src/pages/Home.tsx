import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock, Award, Star, Zap, CheckCircle, Download, ChevronDown } from 'lucide-react'
import SEO from '@/components/SEO'
import CTABanner from '@/components/CTABanner'
import ProductCard from '@/components/ProductCard'
import TestimonialCard from '@/components/TestimonialCard'
import ServiceCard from '@/components/ServiceCard'
import BlueprintModal from '@/components/BlueprintModal'
import BlueprintCTA from '@/components/BlueprintCTA'
import { products } from '@/data/products'
import { services } from '@/data/services'
import { approvedTestimonials } from '@/data/testimonials'

// Animated counter hook
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function AnimatedStat({ value, suffix, label, icon, started }: { value: number; suffix: string; label: string; icon: React.ReactNode; started: boolean }) {
  const count = useCountUp(value, 1600, started)
  return (
    <div style={{ textAlign: 'center', padding: 'var(--space-6)', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', borderRadius: 'var(--radius-md)' }}>
      <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)', display: 'flex', justifyContent: 'center' }}>{icon}</div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#ffffff', marginBottom: 'var(--space-1)', lineHeight: 1, tabularNums: 'tabular-nums' } as React.CSSProperties}>
        {count}{suffix}
      </p>
      <p style={{ fontSize: '0.68rem', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{label}</p>
    </div>
  )
}

const trustBadges = [
  'Michelin-Star Concepts',
  'Luxury Hotels',
  'SLS Hotels',
  'Accor Properties',
  'Independent Restaurants',
  'Multi-Unit Groups',
]

const WHO_ITEMS = [
  {
    title: 'Hotel F&B Groups',
    desc: 'Your outlet is losing money or just breaking even. Occupancy drives covers but the standalone business never took hold. You need a restructure, not a rebrand.',
    link: '/insights/hotel-fb-why-your-restaurant-underperforms',
    linkLabel: 'Why Hotel F&B Underperforms',
  },
  {
    title: 'Independent Operators',
    desc: 'Labor is out of control, the team runs inconsistently without you, or you are 60 days from opening and behind. You need a senior operator, not another consultant deck.',
    link: '/services',
    linkLabel: 'See Engagement Models',
  },
  {
    title: 'New Restaurant Openings',
    desc: 'You have a date, a concept, and a budget. What you need is someone who has done this before and will be on-site when it counts - from vendor setup through the first 30 days.',
    link: '/insights/miami-pre-opening-playbook',
    linkLabel: 'Read the Pre-Opening Playbook',
  },
]

const FAQ_ITEMS = [
  {
    q: 'What does a fractional F&B director actually cost?',
    a: 'Fractional engagements are scoped based on hours per week and the complexity of your operation. A typical engagement runs $4,500 to $8,500 per week depending on scope. That is 25 to 40% of what a full-time hire at the same experience level would cost in total compensation.',
  },
  {
    q: 'How long does a pre-opening engagement last?',
    a: 'A properly resourced pre-opening takes 90 to 120 days from vendor setup through the first 30 days post-launch. I can engage at any point in that window, but the earlier the better. Compressed timelines are workable but require more resources and carry more risk.',
  },
  {
    q: 'Do you work outside Miami?',
    a: 'My primary market is Miami, where I have deep vendor relationships and operator networks. I take on select engagements in other Florida markets and nationally for pre-opening work where I can be fully present during the critical phases.',
  },
  {
    q: 'What is the minimum engagement?',
    a: 'The minimum engagement is an on-site diagnostic - typically 3 to 5 days - which produces a written operational assessment and a prioritized action plan. Many clients start there before deciding on a longer engagement.',
  },
  {
    q: 'How is this different from a traditional consultant?',
    a: 'A traditional consultant delivers recommendations. A fractional leader delivers outcomes. I am accountable for what happens after the deck is presented - not just for the quality of the analysis.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: 'var(--space-5) 0', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: 'var(--space-4)',
        }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.4 }}>{q}</span>
        <ChevronDown size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 220ms ease' }} />
      </button>
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '300px' : '0',
        transition: 'max-height 300ms cubic-bezier(0.16,1,0.3,1)',
      }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.75, paddingBottom: 'var(--space-5)' }}>{a}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [blueprintOpen, setBlueprintOpen] = useState(false)
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <SEO
        title="Leander Mena | Fractional F&B Leadership & Hospitality Consulting | Miami"
        description="Fractional F&B operations leadership for Miami restaurants, hotels & new openings. 18 years opening, stabilizing, and scaling hospitality operations."
        path="/"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlueprintModal isOpen={blueprintOpen} onClose={() => setBlueprintOpen(false)} />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100svh' }}>
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <img
            src="/landing-hero.jpg"
            alt=""
            width="1920"
            height="1080"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.50) 60%, var(--color-bg) 100%)' }} />
        </div>

        <div className="container relative" style={{ zIndex: 1, paddingTop: 'clamp(6rem, 12vw, 9rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="kicker">Miami, Florida</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 0.95, color: '#ffffff', marginBottom: 'var(--space-6)' }}
            >
              Leander Mena
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
              style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)', margin: '0 auto var(--space-6)', maxWidth: '200px' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-6)' }}
            >
              Hospitality &amp; Food-and-Beverage Operations
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', maxWidth: '54ch', margin: '0 auto var(--space-10)', lineHeight: 1.7 }}
            >
              18+ years opening, leading, and growing restaurants, hotels, banquets, and catering operations across Miami. Now available as fractional leadership and digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', justifyContent: 'center' }}
            >
              <Link to="/book" className="btn btn-primary">Book a Discovery Call <ArrowRight size={16} /></Link>
              <Link to="/products" className="btn btn-secondary">Explore Digital Products</Link>
              <button
                onClick={() => setBlueprintOpen(true)}
                className="btn btn-secondary"
                style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
              >
                <Download size={16} /> Free Pre-Opening Blueprint
              </button>
            </motion.div>
          </div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            style={{ marginTop: 'clamp(4rem, 8vw, 7rem)', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}
            className="md:grid-cols-4"
          >
            <AnimatedStat value={18} suffix="+" label="Years Experience" icon={<Clock className="w-5 h-5" />} started={statsStarted} />
            <AnimatedStat value={12} suffix="M+" label="Revenue Optimized" icon={<TrendingUp className="w-5 h-5" />} started={statsStarted} />
            <AnimatedStat value={500} suffix="+" label="Team Members Trained" icon={<Users className="w-5 h-5" />} started={statsStarted} />
            <AnimatedStat value={40} suffix="+" label="Properties Operated" icon={<Award className="w-5 h-5" />} started={statsStarted} />
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)', paddingBlock: 'var(--space-6)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-6)' }}>
            {trustBadges.map((badge) => (
              <span key={badge} style={{ fontSize: '0.72rem', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--color-text-muted)', opacity: 0.6 }}>{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Blueprint CTA */}
      <BlueprintCTA />

      {/* Who This Is For */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-10)' }}>
            <span className="kicker">Who This Is For</span>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Three Situations. One Operator.</h2>
            <p className="section-intro" style={{ marginBottom: 0 }}>The work is different depending on where you are. Here is where most clients come from.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {WHO_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-8)' }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)', opacity: 0.25, lineHeight: 1 }}>0{i + 1}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
                <Link
                  to={item.link}
                  style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none', letterSpacing: '0.02em' }}
                >
                  {item.linkLabel} <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-10)' }}>
            <span className="kicker">Consulting Services</span>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Operational Leadership, On Demand</h2>
            <p className="section-intro" style={{ marginBottom: 0 }}>Four engagement models designed to meet you where you are, from pre-opening builds to operational turnarounds.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)' }}>
            {services.map((service, i) => <ServiceCard key={service.id} service={service} index={i} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/services" className="btn btn-secondary">View All Services &amp; Pricing <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-10)' }}>
            <span className="kicker">Digital Products</span>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Tools Built from Real Experience</h2>
            <p className="section-intro" style={{ marginBottom: 0 }}>SOPs, playbooks, and courses distilled from 18+ years operating Miami&rsquo;s top hospitality venues.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/products" className="btn btn-secondary">Browse All Products <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-10)' }}>
            <span className="kicker">Client Results</span>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Measurable Impact, Real Words</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
            {approvedTestimonials.slice(0, 2).map((t, i) => <TestimonialCard key={t.name + i} testimonial={t} index={i} featured />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
            {approvedTestimonials.slice(2, 5).map((t, i) => <TestimonialCard key={t.name + i} testimonial={t} index={i} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/case-studies" className="btn btn-secondary">Read Full Case Studies <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Why Fractional */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-16)', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="kicker">The Difference</span>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>Why Operators Choose Fractional Leadership</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-8)', fontSize: '0.95rem' }}>
                Most hospitality groups don&rsquo;t need another full-time executive. They need a seasoned operator who can diagnose issues fast, implement systems that stick, and transfer knowledge to your existing team, without the overhead of a permanent C-suite hire.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                {[
                  { icon: <Zap size={18} />, title: 'Rapid Diagnosis', desc: 'Identify root causes within the first week, not months' },
                  { icon: <CheckCircle size={18} />, title: 'Systems That Stick', desc: 'SOPs and training programs your team will actually follow' },
                  { icon: <Star size={18} />, title: 'Proven Track Record', desc: '18+ years across Michelin concepts, luxury hotels, and independents' },
                  { icon: <TrendingUp size={18} />, title: 'Measurable ROI', desc: 'Average 3-5x return on consulting investment within 6 months' },
                ].map((item) => (
                  <li key={item.title} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                    <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(184,160,128,0.10)', color: 'var(--color-primary)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary">Learn More About Leander <ArrowRight size={16} /></Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', border: '1px solid var(--color-border)' }}>
                <img src="/images/about.jpg" alt="Leander Mena - F&B Operations Leader" width="600" height="750" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 45%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-8)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                  {[{ num: '$12M+', label: 'Revenue Optimized' }, { num: '500+', label: 'Team Members' }, { num: '40+', label: 'Properties' }, { num: '18+', label: 'Years Leading' }].map((s) => (
                    <div key={s.label}>
                      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)', lineHeight: 1 }}>{s.num}</p>
                      <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-10)' }}>
            <span className="kicker">How It Works</span>
            <h2 style={{ marginBottom: 0 }}>From First Call to Measurable Results</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-8)' }}>
            {[
              { step: '01', title: 'Discovery Call', desc: '30-minute conversation to understand your challenges, timeline, and goals.' },
              { step: '02', title: 'On-Site Diagnostic', desc: 'Deep-dive assessment of your operations, typically 3-5 days on location.' },
              { step: '03', title: 'Implementation', desc: 'Execute the action plan with weekly check-ins and real-time adjustments.' },
              { step: '04', title: 'Sustainable Results', desc: 'Handover systems, train your team, and ensure improvements stick long-term.' },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'rgba(184,160,128,0.18)', lineHeight: 1, display: 'block', marginBottom: 'var(--space-3)' }}>{item.step}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-8)' }}>
            <span className="kicker">Common Questions</span>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>What Operators Usually Ask First</h2>
            <p className="section-intro" style={{ marginBottom: 0 }}>The questions that come up most often before an engagement starts.</p>
          </motion.div>
          <div>
            {FAQ_ITEMS.map((item) => <FAQItem key={item.q} q={item.q} a={item.a} />)}
          </div>
          <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>Have a question that is not here?</p>
            <Link to="/contact" className="btn btn-secondary">Ask Leander Directly <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Let's Build Something That Runs Well"
        subtitle="Whether you're 90 days from opening or trying to fix a difficult quarter, the next move is simple: start the conversation."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
        secondaryCta={{ label: 'Explore Products', href: '/products' }}
      />
    </>
  )
}
