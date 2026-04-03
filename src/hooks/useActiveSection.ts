import { useEffect, useState } from 'react'
import { NAV_SECTIONS, type SectionId } from '../constants'

export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId)
          }
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )

    for (const id of NAV_SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return active
}
