import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { SITE_URL } from '../constants'

export function MetaTags() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <Helmet>
      <html lang={lang} />
      <title>{t('seo.title')}</title>
      <meta name="description" content={t('seo.description')} />

      {/* Hreflang alternates */}
      <link rel="alternate" hrefLang="de" href={`${SITE_URL}?lang=de`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}?lang=en`} />
      <link rel="alternate" hrefLang="ru" href={`${SITE_URL}?lang=ru`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}?lang=de`} />
      <link rel="canonical" href={`${SITE_URL}?lang=${lang}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t('seo.title')} />
      <meta property="og:description" content={t('seo.description')} />
      <meta property="og:url" content={`${SITE_URL}?lang=${lang}`} />
      <meta property="og:locale" content={lang === 'de' ? 'de_DE' : lang === 'ru' ? 'ru_RU' : 'en_US'} />
      <meta property="og:site_name" content="Gila's Art" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('seo.title')} />
      <meta name="twitter:description" content={t('seo.description')} />

      {/* Geo */}
      <meta name="geo.region" content="DE-BE" />
      <meta name="geo.placename" content="Berlin Schöneberg" />
    </Helmet>
  )
}
