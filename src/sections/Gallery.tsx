import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '../components/layout/Section'

const GALLERY_ITEMS = [
  { id: 1,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.47.jpeg' },
  { id: 2,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.47 (1).jpeg' },
  { id: 3,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.48.jpeg' },
  { id: 4,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.48 (1).jpeg' },
  { id: 5,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.48 (3).jpeg' },
  { id: 6,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.48 (4).jpeg' },
  { id: 7,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.49.jpeg' },
  { id: 8,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50.jpeg' },
  { id: 9,  category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (2).jpeg' },
  { id: 10, category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (3).jpeg' },
  { id: 11, category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (4).jpeg' },
  { id: 12, category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (5).jpeg' },
  { id: 13, category: 'kids', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (6).jpeg' },
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
              <div className="w-full overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md">
                <img
                  src={item.src}
                  alt={`Gallery – ${item.category}`}
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}
