import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '../components/layout/Section'

// Placeholder gallery items — replace with real images
const GALLERY_ITEMS = [
  { id: 1, category: 'kids', aspect: 'aspect-[3/4]', color: 'from-ochre/20 to-terracotta/10' },
  { id: 2, category: 'artwork', aspect: 'aspect-square', color: 'from-sage/20 to-ochre/10' },
  { id: 3, category: 'kids', aspect: 'aspect-[4/3]', color: 'from-terracotta/15 to-umber/10' },
  { id: 4, category: 'adults', aspect: 'aspect-[3/4]', color: 'from-umber/15 to-ochre/15' },
  { id: 5, category: 'artwork', aspect: 'aspect-square', color: 'from-ochre/25 to-sage/10' },
  { id: 6, category: 'kids', aspect: 'aspect-[4/3]', color: 'from-terracotta/20 to-ochre/15' },
]

const FILTERS = ['all', 'kids', 'adults', 'artwork'] as const

export function Gallery() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<string>('all')

  const filtered =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter)

  return (
    <Section id="gallery">
      <div className="text-center">
        <h2 className="font-display text-4xl font-bold text-dark-red md:text-5xl">
          {t('gallery.heading')}
        </h2>
        <p className="mt-4 font-body text-lg text-umber-light">
          {t('gallery.subheading')}
        </p>
      </div>

      {/* Filter pills */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 font-ui text-sm transition-all ${
              filter === f
                ? 'bg-umber text-beige shadow-md'
                : 'bg-sand text-umber-light hover:bg-umber/10'
            }`}
          >
            {t(`gallery.filters.${f}`)}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mb-4 break-inside-avoid"
            >
              <div
                className={`${item.aspect} w-full overflow-hidden rounded-xl bg-gradient-to-br ${item.color} shadow-sm transition-shadow hover:shadow-md`}
              >
                {/* Replace with real <img> tags when photos are available */}
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-hand text-3xl text-umber/20">
                    {item.category === 'artwork' ? '🎨' : item.category === 'kids' ? '✏️' : '🖌️'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}
