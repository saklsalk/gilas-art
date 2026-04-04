import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { useActiveSection } from '../../hooks/useActiveSection'
import { NAV_SECTIONS } from '../../constants'

export function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-umber/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-display text-2xl font-bold transition-colors ${
            scrolled ? 'text-beige' : 'text-dark-red'
          }`}
        >
          Gila&apos;s Art
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative font-ui text-sm transition-colors ${
                scrolled
                  ? activeSection === id
                    ? 'text-ochre'
                    : 'text-beige/70 hover:text-beige'
                  : activeSection === id
                    ? 'text-terracotta'
                    : 'text-umber/70 hover:text-umber'
              }`}
            >
              {t(`nav.${id}`)}
              {activeSection === id && (
                <motion.span
                  layoutId="nav-underline"
                  className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full ${
                    scrolled ? 'bg-ochre' : 'bg-terracotta'
                  }`}
                />
              )}
            </button>
          ))}
          <LanguageSwitcher scrolled={scrolled} />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 transition-all ${
              scrolled ? 'bg-beige' : 'bg-umber'
            } ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 transition-all ${
              scrolled ? 'bg-beige' : 'bg-umber'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 transition-all ${
              scrolled ? 'bg-beige' : 'bg-umber'
            } ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-umber/98 px-5 pb-6 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 pt-2">
              {NAV_SECTIONS.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-left font-ui text-lg ${
                    activeSection === id ? 'text-ochre' : 'text-beige/80'
                  }`}
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
              <div className="pt-2">
                <LanguageSwitcher scrolled={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
