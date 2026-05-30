import { useEffect, useRef } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function CalendlyModal({ isOpen, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl w-full max-w-2xl overflow-hidden relative">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a2a]">
          <h3 className="text-sm font-bold text-[#e8e8e8]">Book a Discovery Call</h3>
          <button
            onClick={onClose}
            className="text-[#888888] hover:text-[#e8e8e8] transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <div className="p-0">
          <iframe
            src="https://calendly.com/leandermena/30min"
            width="100%"
            height="600"
            frameBorder="0"
            title="Book a 30-minute discovery call with Leander Mena"
            className="bg-white"
          />
        </div>
        <p className="px-6 py-3 text-xs text-[#888888] border-t border-[#2a2a2a]">
          Having trouble? Email directly at{' '}
          <a href="mailto:leander@leandermena.com" className="text-[#b8a080]">
            leander@leandermena.com
          </a>
        </p>
      </div>
    </div>
  )
}
