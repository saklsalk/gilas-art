import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Section } from '../components/layout/Section'

export function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true }) as Array<{
    quote: string
    name: string
    detail: string
  }>

  return (
    <Section id="testimonials" className="bg-sand!">
      <div className="text-center">
        <h2 className="font-display text-4xl font-bold text-dark-red md:text-5xl">
          {t('testimonials.heading')}
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            className="rounded-2xl border border-terracotta/20 bg-beige p-6 shadow-sm transition-shadow hover:shadow-md"
            style={{
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 27px, rgba(194,112,62,0.06) 28px)',
            }}
          >
            {/* Quote mark */}
            <span className="font-display text-5xl leading-none text-terracotta/30">
              &ldquo;
            </span>
            <p className="mt-2 font-body text-base leading-relaxed text-umber-light italic">
              {item.quote}
            </p>
            <div className="mt-6 border-t border-terracotta/15 pt-4">
              <p className="font-ui text-sm font-semibold text-dark-red">
                {item.name}
              </p>
              <p className="font-hand text-base text-terracotta">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
