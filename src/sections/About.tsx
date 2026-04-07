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
        {/* Photo — round shape */}
        <div className="relative mx-auto lg:mx-0">
          <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-terracotta/20 shadow-xl md:h-96 md:w-96">
            <img
              src="/src/assets/about/gila.png"
              alt="Gila Gilad — Art Pedagogue"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Decorative paint accents */}
          <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-terracotta/10" />
          <div className="absolute -top-2 -left-2 h-14 w-14 rounded-full bg-ochre/15" />
          <div className="absolute -right-4 top-1/2 h-8 w-8 rounded-full bg-sage/20" />
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
