import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  pin?: boolean;
  scrub?: boolean | number;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
  pin = false,
  scrub = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    // Simple entrance animation (no pin, no scrub)
    if (!pin && !scrub) {
      const directions = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
      };

      gsap.fromTo(
        el,
        { opacity: 0, ...directions[direction] },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        }
      );
    }

    // Pin section while scrolling
    if (pin) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
      });
    }

    // Scrubbed animation (scroll controls timeline)
    if (scrub) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 20%',
          scrub: scrub === true ? 1 : scrub,
        },
      });

      tl.fromTo(
        el,
        { opacity: 0, y: distance },
        { opacity: 1, y: 0, ease: 'none' }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el) st.kill();
      });
    };
  }, [direction, delay, duration, distance, once, pin, scrub]);

  return (
    <motion.div
      ref={ref}
      className={className}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

// Utility hook for scroll-triggered animations on any element
export function useScrollAnimation(
  ref: React.RefObject<HTMLElement | null>,
  options?: {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    scrollTrigger?: ScrollTrigger.Vars;
  }
) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const defaultFrom = { opacity: 0, y: 40 };
    const defaultTo = { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' };
    const defaultScrollTrigger = {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none' as const,
    };

    const tween = gsap.fromTo(
      el,
      options?.from || defaultFrom,
      {
        ...defaultTo,
        ...options?.to,
        scrollTrigger: {
          ...defaultScrollTrigger,
          ...options?.scrollTrigger,
        },
      }
    );

    return () => { tween.kill(); };
  }, [ref, options]);
}
