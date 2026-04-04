import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Section } from '../components/layout/Section'

const BADGES = [
  { key: 'education', icon: '🎨' },
  { key: 'pedagogy', icon: '📖' },
  { key: 'therapy', icon: '💛' },
  { key: 'children', icon: '🤲' },
] as const

export function About() {
  const { t } = useTranslation()

  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo placeholder */}
        <div className="relative mx-auto max-w-md lg:mx-0">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-xl">
            {/* Placeholder — replace with Gila's photo */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sand to-terracotta/20">
              <span className="font-hand text-6xl text-terracotta/40">G</span>
            </div>
          </div>
          {/* Decorative paint accent */}
          <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-terracotta/10" />
          <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-ochre/15" />
        </div>

        {/* Text */}
        <div>
          <h2 className="font-display text-4xl font-bold text-dark-red md:text-5xl">
            {t('about.heading')}
          </h2>

          <div className="mt-8 space-y-5 font-body text-lg leading-relaxed text-umber-light">
            <p>{t('about.passage')}</p>
            <p>{t('about.passage2')}</p>
            <p className="font-hand text-2xl text-terracotta">
              {t('about.passage3')}
            </p>
          </div>

          {/* Experience badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {BADGES.map(({ key, icon }, i) => (
              <motion.span
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-sand px-4 py-2 font-ui text-sm text-umber"
              >
                <span>{icon}</span>
                {t(`about.badges.${key}`)}
              </motion.span>
            ))}
          </div>

          {/* Languages */}
          <p className="mt-6 font-hand text-lg text-sage">
            {t('about.languages')}
          </p>
        </div>
      </div>
    </Section>
  )
}
