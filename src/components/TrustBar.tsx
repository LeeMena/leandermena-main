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
          {/* fix: elevated client name styling — larger, semibold with separator dots */}
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-4">
            {clients.map((c, i) => (
              <>
                <span
                  key={c}
                  className="text-sm font-semibold tracking-wide text-[#6a6a6a] hover:text-[#b8a080] transition-colors uppercase"
                >
                  {c}
                </span>
                {i < clients.length - 1 && (
                  <span className="text-[#333333] text-xs select-none">&middot;</span>
                )}
              </>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
