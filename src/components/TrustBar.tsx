import ScrollReveal from '@/components/ScrollReveal'

const clients = [
  'Maska Indian Kitchen + Bar',
  'SLS Brickell',
  'Marabu Restaurant',
  'Viceroy Miami',
  'Accor Properties',
  'SLS Hotels & Resorts',
]

export default function TrustBar() {
  return (
    <section className="py-8 border-b border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#888888] mb-6">
            Trusted by Miami's leading hospitality groups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span
                key={c}
                className="text-sm font-medium text-[#555555] hover:text-[#888888] transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
