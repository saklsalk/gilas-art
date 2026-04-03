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
    <Section id="testimonials" className="bg-cream-warm!">
      <div className="text-center">
        <h2 className="font-display text-4xl font-bold text-deep-blue md:text-5xl">
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
            className="rounded-2xl border border-gold/20 bg-cream p-6 shadow-sm transition-shadow hover:shadow-md"
            style={{
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 27px, rgba(201,168,76,0.08) 28px)',
            }}
          >
            {/* Quote mark */}
            <span className="font-display text-5xl leading-none text-gold/30">
              &ldquo;
            </span>
            <p className="mt-2 font-body text-base leading-relaxed text-charcoal-light italic">
              {item.quote}
            </p>
            <div className="mt-6 border-t border-gold/15 pt-4">
              <p className="font-ui text-sm font-semibold text-deep-blue">
                {item.name}
              </p>
              <p className="font-hand text-base text-burgundy">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
