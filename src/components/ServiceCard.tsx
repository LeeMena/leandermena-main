import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/data/services'

interface Props {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card flex flex-col h-full"
    >
      <div className="flex-1">
        <span className="kicker" style={{ marginBottom: 'var(--space-2)' }}>{service.duration}</span>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          fontWeight: 700,
          marginBottom: 'var(--space-2)',
          lineHeight: 1.2,
          color: 'var(--color-text)',
        }}>
          {service.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontStyle: 'italic', marginBottom: 'var(--space-4)' }}>
          {service.tagline}
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 'var(--space-4)' }}>
          {service.description}
        </p>
        <ul className="list" style={{ marginBottom: 'var(--space-4)' }}>
          {service.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
          <strong style={{ color: 'var(--color-text)' }}>Ideal for:</strong> {service.ideal}
        </p>
        <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}>
          Inquire <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}
