import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({ title, subtitle, primaryCta, secondaryCta }: CTABannerProps) {
  return (
    <section className="section-padding bg-luxury-dark border-y border-luxury-border/30">
      <div className="container-luxury text-center">
        <span className="eyebrow">Next Step</span>
        <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4 max-w-2xl mx-auto">{title}</h2>
        <p className="text-luxury-muted max-w-xl mx-auto mb-10">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={primaryCta.href} className="btn-primary inline-flex items-center gap-2">
            {primaryCta.label} <ArrowRight size={14} />
          </Link>
          {secondaryCta && (
            <Link to={secondaryCta.href} className="btn-secondary">{secondaryCta.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
