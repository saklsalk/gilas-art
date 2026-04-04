import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export function Section({ id, children, className = '', dark }: SectionProps) {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      id={id}
      ref={ref}
      className={`${dark ? 'bg-umber text-beige' : 'bg-beige text-dark-red'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-6xl px-5 py-20 md:py-28"
      >
        {children}
      </motion.div>
    </section>
  )
}
