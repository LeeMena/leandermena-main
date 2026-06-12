import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'var(--space-10)' }}
        >
          <div className="section-header">
            <span className="kicker">Consulting Services</span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                marginBottom: 'var(--space-4)',
              }}
            >
              Operational Leadership,<br />On Demand
            </h1>
            <div className="divider-gold mb-6 ml-0" />
            <p className="font-serif text-lg text-luxury-muted/80 italic max-w-2xl leading-relaxed">
              Four engagement models designed to meet you where you are - from pre-opening builds to operational turnarounds.
            </p>
          </div>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)' }}>
          {services.map((service, i) => <ServiceCard key={service.id} service={service} index={i} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <Link to="/services" className="btn btn-secondary">View All Services &amp; Pricing <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}
