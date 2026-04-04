import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
] as const

export function LanguageSwitcher({ scrolled = false }: { scrolled?: boolean }) {
  const { i18n } = useTranslation()

  return (
    <div className={`flex gap-1 rounded-full p-1 ${scrolled ? 'bg-white/10' : 'bg-umber/10'}`}>
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`rounded-full px-3 py-1 font-ui text-sm transition-all ${
            i18n.language === code
              ? scrolled
                ? 'bg-ochre text-umber font-semibold shadow-sm'
                : 'bg-terracotta text-beige font-semibold shadow-sm'
              : scrolled
                ? 'text-beige/80 hover:text-beige hover:bg-white/10'
                : 'text-umber/70 hover:text-umber hover:bg-umber/10'
          }`}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
