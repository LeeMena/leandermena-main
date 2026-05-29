import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Rocket, TrendingUp, Mic } from 'lucide-react';
import type { Service } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  crown: <Crown className="w-5 h-5" />,
  rocket: <Rocket className="w-5 h-5" />,
  'trending-up': <TrendingUp className="w-5 h-5" />,
  mic: <Mic className="w-5 h-5" />,
};

interface Props {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 border card-hover ${
        service.popular
          ? 'border-gold/40 bg-luxury-card'
          : 'border-luxury-border bg-luxury-dark'
      }`}
    >
      {service.popular && (
        <span className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase text-luxury-black bg-gold px-3 py-1">
          Most Popular
        </span>
      )}
      <div className="text-gold mb-6">{iconMap[service.icon] ?? <Crown className="w-5 h-5" />}</div>
      <h3 className="font-serif text-xl text-luxury-text mb-2">{service.title}</h3>
      <p className="text-[10px] tracking-[0.15em] uppercase text-luxury-muted/60 mb-4">{service.subtitle}</p>
      <p className="text-sm text-luxury-muted leading-relaxed mb-6">{service.description}</p>
      <div className="mb-6">
        <span className="font-serif text-2xl text-gold">{service.price}</span>
        <span className="text-xs text-luxury-muted ml-2">{service.priceNote}</span>
      </div>
      <Link to="/contact" className="btn-secondary w-full justify-center text-[10px] flex items-center gap-2">
        {service.cta}
        <ArrowRight className="w-3 h-3" />
      </Link>
    </motion.div>
  );
}
