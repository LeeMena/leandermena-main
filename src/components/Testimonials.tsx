import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface Testimonial {
  quote: string
  name: string
  role: string
  venue: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Leander came in during our most chaotic pre-opening phase and within two weeks had our staffing model, training schedule, and SOPs locked in. We opened on time and hit our labor targets in month one.",
    name: 'Alex R.',
    role: 'Owner',
    venue: 'Independent Restaurant Group, Miami',
  },
  {
    quote:
      "We brought Leander in to stabilize labor costs that had drifted to 34%. In 60 days we were at 28% and guest satisfaction scores were up. He doesn't just diagnose â€” he stays until the fix sticks.",
    name: 'Partner, Hotel Management Co.',
    role: 'Regional Director',
    venue: 'Luxury Hotel Group, South Florida',
  },
  {
    quote:
      "As investors buying our first restaurant, we needed someone who could translate the concept into a real operation. Leander built the entire opening backbone and trained our GM to run it without him.",
    name: 'M. & J. Castellanos',
    role: 'Investors',
    venue: 'First-Time Restaurant Acquisition, Miami',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="section border-b-0">
      <div className="container">
        <ScrollReveal>
          <span className="kicker">What Clients Say</span>
          <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold tracking-tight text-[#e8e8e8] mb-3">
            Results operators notice.
          </h2>
          <p className="section-intro">
            {/* TODO: Replace with real testimonials from Leander's clients */}
            Below are representative quotes based on typical engagement outcomes.
            Replace with actual client testimonials for maximum credibility.
          </p>
        </ScrollReveal>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-10">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="card h-full flex flex-col">
                <svg
                  className="w-8 h-8 text-[#b8a080]/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-[#b8a080]/90 leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-[#2a2a2a]">
                  <p className="text-sm font-semibold text-[#e8e8e8]">{t.name}</p>
                  <p className="text-xs text-[#888888]">
                    {t.role}, {t.venue}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden mt-8">
          <div className="card">
            <svg
              className="w-8 h-8 text-[#b8a080]/30 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-sm text-[#b8a080]/90 leading-relaxed italic mb-6">
              "{testimonials[active].quote}"
            </p>
            <div className="pt-4 border-t border-[#2a2a2a]">
              <p className="text-sm font-semibold text-[#e8e8e8]">
                {testimonials[active].name}
              </p>
              <p className="text-xs text-[#888888]">
                {testimonials[active].role}, {testimonials[active].venue}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === active ? 'bg-[#b8a080]' : 'bg-[#2a2a2a]'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

