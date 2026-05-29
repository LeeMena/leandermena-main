import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({ title, subtitle, primaryCta, secondaryCta }: CTABannerProps) {
  return (
    <section className="section-padding bg-luxury-dark border-t border-luxury-border/30">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="divider-gold mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-6">{title}</h2>
          <p className="text-luxury-muted leading-relaxed mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryCta.href} className="btn-primary flex items-center gap-2">
              {primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryCta && (
              <Link to={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
