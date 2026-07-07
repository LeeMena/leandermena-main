import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  variant?: 'default' | 'dark' | 'gold';
}

export default function CTABanner({
  title = 'Ready to work together?',
  subtitle = 'Book a free discovery call and find out what a fractional F&B leader can do for your operation.',
  primaryCta = { label: 'Book a Discovery Call', href: '/book' },
  secondaryCta = { label: 'Download Free Blueprint', href: '/blueprint' },
  variant = 'dark',
}: CTABannerProps) {
  const variantStyles = {
    default: 'bg-[#F2EDE6] text-[#121212]',
    dark: 'bg-[#121212] text-[#F2EDE6] border border-[#171717]',
    gold: 'bg-gradient-to-br from-[#CFA55B] via-[#b88d4a] to-[#9a7539] text-[#121212]',
  };

  const buttonStyles = {
    default: 'bg-[#121212] text-[#F2EDE6] hover:bg-[#171717]',
    dark: 'bg-[#CFA55B] text-[#121212] hover:bg-[#b88d4a]',
    gold: 'bg-[#121212] text-[#CFA55B] hover:bg-[#171717]',
  };

  const ghostButtonStyles = {
    default: 'border-[#121212]/20 text-[#121212] hover:bg-[#121212]/5 hover:border-[#121212]/40',
    dark: 'border-[#F2EDE6]/20 text-[#F2EDE6] hover:bg-[#F2EDE6]/5 hover:border-[#F2EDE6]/40',
    gold: 'border-[#121212]/20 text-[#121212] hover:bg-[#121212]/5 hover:border-[#121212]/40',
  };

  const LinkComponent = ({ cta, isSecondary = false }: { cta: CTABannerProps['primaryCta']; isSecondary?: boolean }) => {
    const baseClasses = 'inline-flex items-center gap-2 px-6 py-3 rounded-sm font-semibold transition-all duration-300 text-sm sm:text-base uppercase tracking-[1px]';

    const classes = isSecondary 
      ? `${baseClasses} border ${ghostButtonStyles[variant]}`
      : `${baseClasses} ${buttonStyles[variant]} shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5`;

    if (!cta?.href) return null;

    if (cta.external) {
      return (
        <a href={cta.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {cta.label}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      );
    }

    return (
      <Link to={cta.href} className={classes}>
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
      className={`${variantStyles[variant]} py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
    >
      {/* Gold variant background texture */}
      {variant === 'gold' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(0,0,0,0.1)_0%,_transparent_50%)]" />
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight mb-4 sm:mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <LinkComponent cta={primaryCta} />
          {secondaryCta && <LinkComponent cta={secondaryCta} isSecondary />}
        </motion.div>
      </div>
    </motion.section>
  );
}
