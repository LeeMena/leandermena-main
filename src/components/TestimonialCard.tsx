import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

interface Props {
  testimonial: Testimonial;
  index: number;
  featured?: boolean;
}

export default function TestimonialCard({ testimonial, index, featured }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-8 border border-luxury-border/50 bg-luxury-card card-hover ${
        featured ? 'md:p-10' : ''
      }`}
    >
      <Quote className="w-6 h-6 text-gold/40 mb-6" />
      <p className={`text-luxury-muted leading-relaxed mb-8 ${
        featured ? 'text-base md:text-lg font-serif italic' : 'text-sm'
      }`}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
          <span className="text-gold text-sm font-medium">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-luxury-text">{testimonial.name}</p>
          <p className="text-[11px] text-luxury-muted/60">{testimonial.role} &mdash; {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
}
