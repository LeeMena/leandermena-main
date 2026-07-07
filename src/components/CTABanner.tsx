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
          <ArrowUpRight size={16} />
        </a>
      );
    }

    return (
      <Link to={cta.href} className={classes}>
        {cta.label}
        <ArrowRight size={16} />
      </Link>
    );
  };

  return (
    <section className={`relative overflow-hidden ${variantStyles[variant]}`}>
      {/* Gold variant background texture */}
      {variant === 'gold' && (
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)' }} />
      )}
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h2>
            <p className="text-base opacity-70 leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <LinkComponent cta={primaryCta} />
            {secondaryCta && <LinkComponent cta={secondaryCta} isSecondary />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
