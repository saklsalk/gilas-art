import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Section } from '../components/layout/Section'
import { WHATSAPP_NUMBER } from '../constants'

const CLASS_FORMATS = [
  {
    key: 'private',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    accent: 'border-ochre/40 hover:border-ochre',
    bg: 'bg-ochre/5',
  },
  {
    key: 'group',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    accent: 'border-sage/40 hover:border-sage',
    bg: 'bg-sage/5',
  },
  {
    key: 'project',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    accent: 'border-terracotta/40 hover:border-terracotta',
    bg: 'bg-terracotta/5',
  },
  {
    key: 'join',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    accent: 'border-beige/30 hover:border-beige',
    bg: 'bg-beige/5',
  },
]

export function Classes() {
  const { t } = useTranslation()

  return (
    <Section id="classes" dark>
      <div className="text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          {t('classes.heading')}
        </h2>
        <p className="mt-4 font-body text-lg text-beige/70">
          {t('classes.subheading')}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CLASS_FORMATS.map(({ key, icon, accent, bg }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`group rounded-2xl border-2 ${accent} ${bg} p-6 transition-all hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="text-ochre">{icon}</div>
            <h3 className="mt-4 font-display text-xl font-semibold text-beige">
              {t(`classes.${key}.title`)}
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-beige/70">
              {t(`classes.${key}.description`)}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 font-ui text-xs text-beige/60">
                {t(`classes.${key}.for`)}
              </span>
            </div>
            <p className="mt-3 font-ui text-sm font-semibold text-ochre">
              {t(`classes.${key}.price`)}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('contact.whatsapp_prefill'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-terracotta/20 px-5 py-2 font-ui text-sm font-medium text-terracotta-light transition-colors hover:bg-terracotta/30"
            >
              {t('classes.cta')}
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
