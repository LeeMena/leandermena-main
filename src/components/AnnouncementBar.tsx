import { useState } from 'react'
import { X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

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
        className="relative z-50 w-full bg-[#171717] border-b border-[#CFA55B]/20"
      >
        {/* Subtle gold glow edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#CFA55B]/10 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#CFA55B]/10 to-transparent pointer-events-none" />

        <div className="relative flex items-center justify-center gap-3 px-4 py-2.5 sm:py-2">
          {/* Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#CFA55B]/10 border border-[#CFA55B]/20 px-2.5 py-1 rounded-full">
            <Sparkles className="h-3 w-3 text-[#CFA55B]" />
            <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#CFA55B]">
              Free Resource
            </span>
          </div>

          {/* Title */}
          <Link
            to="/blueprint"
            className="text-xs sm:text-sm text-[#F2EDE6] hover:text-[#CFA55B] transition-colors duration-200 font-medium no-underline"
          >
            The 90-Day Pre-Opening Blueprint
          </Link>

          {/* Arrow indicator */}
          <span className="hidden sm:inline text-[#CFA55B]/60 text-xs">→</span>

          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="absolute right-3 sm:right-4 p-1 rounded-md text-[#F2EDE6]/40 hover:text-[#F2EDE6] hover:bg-[#F2EDE6]/10 transition-all duration-200"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
