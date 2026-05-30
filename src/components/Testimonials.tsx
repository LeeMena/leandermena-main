import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { approvedTestimonials } from '@/data/testimonials'

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-[#b8a080]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
)

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const list = approvedTestimonials

  return (
    <section className="section border-b-0">
      <div className="container">
        <ScrollReveal>
          <span className="kicker">What Clients Say</span>
          <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold tracking-tight text-[#e8e8e8] mb-3">
            Results operators notice.
          </h2>
          <p className="section-intro">Real results from real engagements across Miami's hospitality market.</p>
        </ScrollReveal>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-10">
          {list.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="card h-full flex flex-col">
                <QuoteIcon />
                <p className="text-sm text-[#b8a080]/90 leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-[#2a2a2a]">
                  <p className="text-sm font-semibold text-[#e8e8e8]">{t.name}</p>
                  <p className="text-xs text-[#888888]">{t.role}, {t.venue}</p>
                  {t.date && (
                    <p className="text-xs text-[#555555] mt-1">
                      {new Date(t.date + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden mt-8">
          <div className="card">
            <QuoteIcon />
            <p className="text-sm text-[#b8a080]/90 leading-relaxed italic mb-6">
              "{list[active].quote}"
            </p>
            <div className="pt-4 border-t border-[#2a2a2a]">
              <p className="text-sm font-semibold text-[#e8e8e8]">{list[active].name}</p>
              <p className="text-xs text-[#888888]">{list[active].role}, {list[active].venue}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {list.map((_, i) => (
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
