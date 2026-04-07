// WhatsApp number — replace with Gila's actual number
export const WHATSAPP_NUMBER = '4917656015761'

export const SITE_URL = 'https://saklsalk.github.io/gilas-art'

export const NAV_SECTIONS = [
  'about',
  'classes',
  'gallery',
  'testimonials',
  'contact',
] as const

export type SectionId = (typeof NAV_SECTIONS)[number]
