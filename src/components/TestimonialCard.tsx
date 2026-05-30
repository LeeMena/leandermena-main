import { motion } from 'framer-motion'
import type { Testimonial } from '@/data/testimonials'

interface Props {
  testimonial: Testimonial
  index: number
  featured?: boolean
}

export default function TestimonialCard({ testimonial, index, featured = false }: Props) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card"
      style={{ padding: featured ? 'var(--space-8)' : 'var(--space-6)' }}
    >
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: featured ? 'clamp(0.95rem, 1.8vw, 1.1rem)' : '0.9rem',
        fontStyle: 'italic',
        color: 'var(--color-text-muted)',
        lineHeight: 1.75,
        marginBottom: 'var(--space-5)',
      }}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>
        <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text)' }}>{testimonial.name}</p>
        <p style={{ fontSize: '0.78rem', color: 'var(--color-primary)' }}>{testimonial.role}</p>
        <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{testimonial.venue}</p>
      </footer>
    </motion.blockquote>
  )
}
