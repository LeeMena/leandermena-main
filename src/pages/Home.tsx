import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock, Award, Star, Zap, CheckCircle, Download } from 'lucide-react'
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

const stats = [
  { icon: <Clock className="w-5 h-5" />, value: '18+', label: 'Years Experience' },
  { icon: <TrendingUp className="w-5 h-5" />, value: '$12M+', label: 'Revenue Optimized' },
  { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Team Members Trained' },
  { icon: <Award className="w-5 h-5" />, value: '40+', label: 'Properties Operated' },
]

const trustBadges = [
  'Michelin-Star Concepts',
  'Luxury Hotels',
  'SLS Hotels',
  'Accor Properties',
  'Independent Restaurants',
  'Multi-Unit Groups',
]

export default function Home() {
  const [blueprintOpen, setBlueprintOpen] = useState(false)

  return (
    <>
      <SEO
        title="Leander Mena | Fractional F&B Leadership & Hospitality Consulting | Miami"
        description="Fractional F&B operations leadership for Miami restaurants, hotels & new openings. 18 years opening, stabilizing, and scaling hospitality operations."
        path="/"
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

            {/* FIX #4: lowered floor from 3rem to 2.25rem so 375px doesn't get a 48px heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 10vw, 7rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 0.95, color: '#ffffff', marginBottom: 'var(--space-6)' }}
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

            {/* FIX #1: column on mobile, row on tablet+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-cta-group"
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

          {/* FIX #2: removed md:grid-cols-4 Tailwind class (conflicts with inline style);
              responsive columns now handled via .stats-grid CSS below */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="stats-grid"
            style={{ marginTop: 'clamp(4rem, 8vw, 7rem)' }}
          >
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 'var(--space-6)', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#ffffff', marginBottom: 'var(--space-1)', lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{stat.label}</p>
              </div>
            ))}
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
          {/* FIX #3: min(320px, 100%) prevents overflow on narrow viewports */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'var(--space-16)', alignItems: 'center' }}>
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

      {/* CTA Banner */}
      <CTABanner
        title="Let's Build Something That Runs Well"
        subtitle="Whether you're 90 days from opening or trying to fix a difficult quarter, the next move is simple: start the conversation."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
        secondaryCta={{ label: 'Explore Products', href: '/products' }}
      />

      {/* Mobile layout styles */}
      <style>{`
        /* Hero CTA group: column on mobile, row on tablet+ */
        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          align-items: stretch;
          width: 100%;
          max-width: 360px;
          margin: 0 auto;
        }
        .hero-cta-group .btn {
          width: 100%;
          justify-content: center;
        }
        @media (min-width: 600px) {
          .hero-cta-group {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: none;
          }
          .hero-cta-group .btn {
            width: auto;
          }
        }

        /* Stats grid: 2-col on mobile, 4-col on md+ */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
        }
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </>
  )
}
