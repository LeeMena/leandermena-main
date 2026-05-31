import { useState } from 'react'
import { X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 w-full"
      >
        <div className="relative flex items-center justify-center gap-3 px-4 py-3 sm:py-2.5 bg-[#171717] border-b border-[#CFA55B]/20">
          {/* Subtle gold glow on left */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#CFA55B]/10 to-transparent pointer-events-none" />

          {/* Subtle gold glow on right */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#CFA55B]/10 to-transparent pointer-events-none" />

          {/* Icon */}
          <Sparkles className="h-3.5 w-3.5 text-[#CFA55B] flex-shrink-0" />

          {/* Content */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="hidden sm:inline text-[#CFA55B] font-semibold tracking-wider uppercase text-[10px]">
              Free Resource
            </span>

            <a
              href="/downloads/pre-opening-brand-kit.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EDE6] hover:text-[#CFA55B] transition-colors duration-200 font-medium underline underline-offset-2 decoration-[#CFA55B]/30 hover:decoration-[#CFA55B]"
            >
              The 90-Day Pre-Opening Blueprint
            </a>

            <span className="hidden sm:inline text-[#F2EDE6]/50 text-[11px]">
              — Download Now
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="ml-2 sm:ml-4 p-1 rounded-md text-[#F2EDE6]/40 hover:text-[#F2EDE6] hover:bg-[#F2EDE6]/10 transition-all duration-200 flex-shrink-0"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
