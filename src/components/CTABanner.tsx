import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  variant?: 'default' | 'dark' | 'gradient';
}

export default function CTABanner({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = 'default',
}: CTABannerProps) {
  const variantStyles = {
    default: 'bg-primary text-primary-foreground',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground',
  };

  const LinkComponent = ({ cta }: { cta: CTABannerProps['primaryCta'] }) => {
    const baseClasses =
      'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200';

    if (cta.external) {
      return (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} bg-white text-slate-900 hover:bg-white/90`}
        >
          {cta.label}
          <ArrowRight className="h-4 w-4" />
        </a>
      );
    }

    return (
      <Link
        to={cta.href}
        className={`${baseClasses} bg-white text-slate-900 hover:bg-white/90`}
      >
        {cta.label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${variantStyles[variant]} py-20 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <LinkComponent cta={primaryCta} />

          {secondaryCta && (
            <LinkComponent cta={secondaryCta} />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}