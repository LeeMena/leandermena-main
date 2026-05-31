import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient fade background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/95 via-[#0D0D0D]/80 to-transparent pointer-events-none" />

      <div className="relative flex items-center justify-between px-6 sm:px-8 lg:px-12 py-5 sm:py-6">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-serif text-xl sm:text-[1.35rem] font-semibold tracking-[0.5px] text-[#F5F0E8] no-underline"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Leander <span className="text-[#C9A96E]">Mena</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[0.8rem] font-medium uppercase tracking-[1.5px] transition-colors duration-300 no-underline ${
                pathname === link.href 
                  ? 'text-[#C9A96E]' 
                  : 'text-[#B8B0A0] hover:text-[#C9A96E]'
              }`}
            >
<<<<<<< Updated upstream
              Let&rsquo;s Talk
            </button>
          </div>
=======
              {link.label}
            </Link>
          ))}
>>>>>>> Stashed changes

          {/* Gold pill CTA */}
          <Link
            to="/book"
            className="text-[0.8rem] font-semibold uppercase tracking-[1px] bg-[#C9A96E] text-[#0D0D0D] px-6 py-2.5 rounded-sm transition-all duration-300 hover:bg-[#E8D5B0] hover:-translate-y-px no-underline"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#B8B0A0] hover:text-[#C9A96E] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0D0D0D]/98 backdrop-blur-lg border-t border-[#2A2A2A]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium uppercase tracking-[1.5px] py-2 transition-colors no-underline ${
                    pathname === link.href 
                      ? 'text-[#C9A96E]' 
                      : 'text-[#B8B0A0] hover:text-[#C9A96E]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold uppercase tracking-[1px] bg-[#C9A96E] text-[#0D0D0D] px-6 py-3 rounded-sm text-center no-underline mt-2"
              >
<<<<<<< Updated upstream
                Let&rsquo;s Talk
              </button>
=======
                Book a Call
              </Link>
>>>>>>> Stashed changes
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
