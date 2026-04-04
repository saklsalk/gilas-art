import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '../components/layout/Section'

// ─── Edit captions here ───────────────────────────────────────────────────────
const GALLERY_ITEMS = [
  { id: 1,  category: 'kids', caption: 'Caption placeholder 1',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.47.jpeg' },
  { id: 2,  category: 'kids', caption: 'Caption placeholder 2',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.47 (1).jpeg' },
  { id: 3,  category: 'kids', caption: 'Caption placeholder 3',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.48.jpeg' },
  { id: 4,  category: 'kids', caption: 'Caption placeholder 4',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.48 (1).jpeg' },
  { id: 5,  category: 'kids', caption: 'Caption placeholder 5',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.48 (3).jpeg' },
  { id: 6,  category: 'kids', caption: 'Caption placeholder 6',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.48 (4).jpeg' },
  { id: 7,  category: 'kids', caption: 'Caption placeholder 7',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.49.jpeg' },
  { id: 8,  category: 'kids', caption: 'Caption placeholder 8',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50.jpeg' },
  { id: 9,  category: 'kids', caption: 'Caption placeholder 9',  src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (2).jpeg' },
  { id: 10, category: 'kids', caption: 'Caption placeholder 10', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (3).jpeg' },
  { id: 11, category: 'kids', caption: 'Caption placeholder 11', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (4).jpeg' },
  { id: 12, category: 'kids', caption: 'Caption placeholder 12', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (5).jpeg' },
  { id: 13, category: 'kids', caption: 'Caption placeholder 13', src: '/src/assets/gallery/kids/WhatsApp Image 2026-04-03 at 14.40.50 (6).jpeg' },
]
// ─────────────────────────────────────────────────────────────────────────────

const FILTERS = ['all', 'kids', 'adults', 'artwork'] as const

export function Gallery() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<string>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length))

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, filtered.length])

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

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
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mb-4 break-inside-avoid cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full object-cover"
                />
              </div>
              {item.caption && (
                <p className="mt-1 px-1 font-body text-xs text-umber-light">{item.caption}</p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            {/* Content — stop propagation so clicking image doesn't close */}
            <div
              className="relative flex max-h-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeItem.src}
                alt={activeItem.caption}
                className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
              {activeItem.caption && (
                <p className="mt-3 font-body text-sm text-white/80">{activeItem.caption}</p>
              )}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25"
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25"
              aria-label="Next"
            >
              ›
            </button>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/25"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Counter */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-ui text-xs text-white/50">
              {(lightboxIndex ?? 0) + 1} / {filtered.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
