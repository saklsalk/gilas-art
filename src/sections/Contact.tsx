import { useTranslation } from 'react-i18next'
import { Section } from '../components/layout/Section'
import { WhatsAppCTA } from '../components/ui/WhatsAppButton'

export function Contact() {
  const { t } = useTranslation()

  return (
    <Section id="contact" dark>
      <div className="text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          {t('contact.heading')}
        </h2>
        <p className="mt-4 font-body text-lg text-beige/70">
          {t('contact.subheading')}
        </p>

        {/* Location */}
        <div className="mt-8 flex items-center justify-center gap-2 text-beige/60">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
          </svg>
          <span className="font-ui">{t('contact.location')}</span>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <WhatsAppCTA />
        </div>
      </div>
    </Section>
  )
}
