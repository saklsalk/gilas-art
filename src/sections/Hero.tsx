import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { WhatsAppCTA } from '../components/ui/WhatsAppButton'

function JoyDot({
  color,
  size,
  x,
  y,
  delay,
}: {
  color: string
  size: number
  x: string
  y: string
  delay: number
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: x,
        top: y,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.5 }}
      transition={{
        delay,
        duration: 0.8,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
    />
  )
}

const JOY_DOTS = [
  { color: '#C9A84C', size: 18, x: '15%', y: '25%', delay: 1.0 },
  { color: '#6B1D3A', size: 12, x: '78%', y: '20%', delay: 1.2 },
  { color: '#2D4A3E', size: 22, x: '85%', y: '60%', delay: 1.4 },
  { color: '#E0C872', size: 10, x: '10%', y: '70%', delay: 1.1 },
  { color: '#8B2E4F', size: 16, x: '60%', y: '75%', delay: 1.5 },
  { color: '#C9A84C', size: 8, x: '30%', y: '15%', delay: 1.3 },
  { color: '#3D6353', size: 14, x: '45%', y: '80%', delay: 1.6 },
  { color: '#6B1D3A', size: 20, x: '92%', y: '40%', delay: 1.1 },
  { color: '#E0C872', size: 12, x: '5%', y: '50%', delay: 1.7 },
]

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-deep-blue via-deep-blue-light to-burgundy">
      {/* Joy dots — paint splashes blooming */}
      {JOY_DOTS.map((dot, i) => (
        <JoyDot key={i} {...dot} />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="font-display text-6xl font-bold text-cream md:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Gila&apos;s Art
        </motion.h1>

        {/* Brush stroke underline */}
        <motion.div
          className="mx-auto mt-2 h-1 rounded-full bg-gold"
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        />

        <motion.p
          className="mt-6 font-body text-xl text-cream/80 md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <WhatsAppCTA />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-hand text-sm text-cream/50">{t('hero.scroll')}</span>
          <svg
            className="h-5 w-5 text-cream/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
