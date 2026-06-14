import { useParams, Link, Navigate } from 'react-router-dom'
import { caseStudies } from '@/data/caseStudies'
import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) return <Navigate to="/case-studies" replace />

  const idx = caseStudies.indexOf(cs)
  const prev = caseStudies[idx - 1] ?? null
  const next = caseStudies[idx + 1] ?? null

  return (
    <>
      <SEO
        title={`${cs.title} | Case Study — Leander Mena`}
        description={`${cs.challenge.slice(0, 155)}…`}
        path={`/case-studies/${cs.slug}`}
        schemaType="article"
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-[#2a2a2a]"
        style={{ minHeight: '380px' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cs.image})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.94) 40%, rgba(10,10,10,0.6) 100%)' }}
        />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#888] hover:text-[#b8a080] transition-colors mb-6"
          >
            <ArrowLeft size={12} /> Case Studies
          </Link>
          <span className="kicker" style={{ marginBottom: '0.75rem' }}>{cs.kicker ?? cs.industry}</span>
          <h1 className="font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-white max-w-[22ch] mb-4">
            {cs.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-[#666]">
            <span>{cs.client}</span>
            <span>·</span>
            <span>Miami, FL</span>
            <span>·</span>
            <span>{cs.duration}</span>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid #2a2a2a' }}>
        <div className="container" style={{ paddingBlock: 'var(--space-8)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(140px, 1fr))`,
              gap: 'var(--space-6)',
            }}
          >
            {cs.results.map((r) => (
              <div key={r.label} style={{ textAlign: 'center' }}>
                <div
                  className="font-display"
                  style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#d4b896', lineHeight: 1, marginBottom: '0.4rem' }}
                >
                  {r.metric}
                </div>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#666' }}>
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>

          {/* Services tags */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {cs.services.map((s) => (
                <span
                  key={s}
                  style={{
                    display: 'inline-block',
                    padding: '0.3rem 0.85rem',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    border: '1px solid #3a3a3a',
                    borderRadius: 'var(--radius-full)',
                    color: '#b8a080',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Challenge */}
          <ScrollReveal delay={60}>
            <div style={{ marginBottom: 'var(--space-10)' }}>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}
              >
                The Challenge
              </h2>
              <p style={{ color: '#a0a0a0', lineHeight: 1.75, fontSize: '0.97rem' }}>{cs.challenge}</p>
            </div>
          </ScrollReveal>

          {/* Approach */}
          <ScrollReveal delay={100}>
            <div style={{ marginBottom: 'var(--space-10)' }}>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}
              >
                The Approach
              </h2>
              <p style={{ color: '#a0a0a0', lineHeight: 1.75, fontSize: '0.97rem' }}>{cs.approach}</p>
            </div>
          </ScrollReveal>

          {/* Testimonial */}
          {cs.testimonial && (
            <ScrollReveal delay={140}>
              <blockquote
                style={{
                  margin: '0 0 var(--space-10)',
                  padding: 'var(--space-6) var(--space-8)',
                  borderLeft: '3px solid #b8a080',
                  background: 'var(--color-surface)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                }}
              >
                <p
                  style={{
                    fontSize: 'clamp(1rem,2vw,1.15rem)',
                    fontStyle: 'italic',
                    color: '#d0d0d0',
                    lineHeight: 1.7,
                    marginBottom: '0.75rem',
                  }}
                >
                  &ldquo;{cs.testimonial}&rdquo;
                </p>
                <cite
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#b8a080',
                  }}
                >
                  — {cs.client}
                </cite>
              </blockquote>
            </ScrollReveal>
          )}

          {/* CTA */}
          <ScrollReveal delay={160}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                alignItems: 'center',
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid #2a2a2a',
              }}
            >
              <Link to="/contact" className="btn btn-primary">
                Start the Conversation
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#888' }}
              >
                <ArrowLeft size={13} /> All Case Studies
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Prev / Next */}
      {(prev || next) && (
        <section
          style={{
            borderTop: '1px solid #2a2a2a',
            background: 'var(--color-surface)',
          }}
        >
          <div
            className="container"
            style={{
              display: 'grid',
              gridTemplateColumns: prev && next ? '1fr 1fr' : '1fr',
              gap: 'var(--space-4)',
              paddingBlock: 'var(--space-8)',
            }}
          >
            {prev && (
              <Link
                to={`/case-studies/${prev.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <ArrowLeft size={12} style={{ color: '#666' }} />
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#666' }}>Previous</span>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#b8a080' }}>{prev.client}</span>
              </Link>
            )}
            {next && (
              <Link
                to={`/case-studies/${next.slug}`}
                style={{ textDecoration: 'none', color: 'inherit', textAlign: prev ? 'right' : 'left' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.4rem',
                    justifyContent: prev ? 'flex-end' : 'flex-start',
                  }}
                >
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#666' }}>Next</span>
                  <ArrowRight size={12} style={{ color: '#666' }} />
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#b8a080' }}>{next.client}</span>
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  )
}
