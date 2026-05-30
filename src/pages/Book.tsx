import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'

const options = [
  {
    id: 'discovery',
    title: '30-Minute Discovery Call',
    description:
      'No obligation. We talk about your operation, your goals, and whether there\'s a fit. I\'ll tell you honestly if this engagement makes sense.',
    duration: '30 min',
    cost: 'Free',
    link: 'https://calendly.com/leandermena/30min',
    primary: true,
  },
  {
    id: 'deep-dive',
    title: 'Operational Deep-Dive',
    description:
      'A 90-minute working session where we map your current operation, identify the top 3 gaps, and define a 30-day action plan you can execute with or without further engagement.',
    duration: '90 min',
    cost: '$350',
    link: 'https://calendly.com/leandermena/30min',
    primary: false,
  },
]

export default function Book() {
  return (
    <>
      <SEO
        title="Book a Call"
        description="Schedule a discovery call or operational deep-dive with Leander Mena — Miami fractional F&B operations leader."
        path="/book"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a] min-h-[220px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        <div className="container relative z-10 py-16">
          <span className="kicker">Book a Session</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Start the conversation.
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Every engagement starts with a direct conversation. Choose the session that fits
            where you are right now.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-6">
            {options.map((o, i) => (
              <ScrollReveal key={o.id} delay={i * 150}>
                <div className={`card flex flex-col sm:flex-row sm:items-start gap-6 ${
                  o.primary ? 'border-[#b8a080]/30' : ''
                }`}>
                  <div className="flex-1">
                    {o.primary && (
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#0a0a0a] bg-[#b8a080] px-2 py-0.5 rounded mb-3 inline-block">
                        Start here
                      </span>
                    )}
                    <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">{o.title}</h2>
                    <p className="text-[#888888] max-w-[60ch] mb-3">{o.description}</p>
                    <p className="text-xs text-[#555555]">{o.duration}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
                    <strong className="text-2xl font-extrabold text-[#d4b896]">{o.cost}</strong>
                    <a
                      href={o.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={o.primary ? 'btn btn-primary' : 'btn btn-secondary'}
                    >
                      Schedule
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={350}>
            <div className="mt-10 p-6 border border-[#2a2a2a] rounded-xl text-center">
              <p className="text-sm text-[#888888]">
                Prefer to reach out directly?{' '}
                <a href="mailto:leander@leandermena.com" className="text-[#b8a080] hover:text-[#d4b896] font-semibold">
                  leander@leandermena.com
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
