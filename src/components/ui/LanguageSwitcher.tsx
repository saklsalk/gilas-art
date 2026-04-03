import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
] as const

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-1 rounded-full bg-white/10 p-1">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`rounded-full px-3 py-1 font-ui text-sm transition-all ${
            i18n.language === code
              ? 'bg-gold text-deep-blue font-semibold shadow-sm'
              : 'text-cream/80 hover:text-cream hover:bg-white/10'
          }`}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
