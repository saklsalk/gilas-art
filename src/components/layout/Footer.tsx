import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-umber py-10 text-beige/60">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <span className="font-logo text-xl text-beige">
              Gila&apos;s Art
            </span>
          </div>
          <p className="font-hand text-lg text-ochre/80">
            {t('footer.made_with')}
          </p>
          <p className="text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
