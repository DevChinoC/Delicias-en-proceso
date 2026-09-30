import { useState, useEffect, useRef, useCallback } from 'react'
import type { CommentItem } from '../types/testimonials'

// ─────────────────────────────────────────────
// Hook: lógica del carrusel automático
// Encapsula autoplay, navegación y animación
// ─────────────────────────────────────────────

const CAROUSEL_INTERVAL = 4000 // ms entre cada slide

export function useTestimonialsCarousel(items: CommentItem[]) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animDir, setAnimDir] = useState<'next' | 'prev'>('next')
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const triggerAnimation = useCallback((dir: 'next' | 'prev', nextIndex: number) => {
    setAnimDir(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex(nextIndex)
      setIsAnimating(false)
    }, 350)
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % items.length
      triggerAnimation('next', next)
      return prev // se actualiza dentro del timeout
    })
  }, [items.length, triggerAnimation])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev - 1 + items.length) % items.length
      triggerAnimation('prev', next)
      return prev
    })
  }, [items.length, triggerAnimation])

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      const dir = index > activeIndex ? 'next' : 'prev'
      triggerAnimation(dir, index)
    },
    [activeIndex, isAnimating, triggerAnimation]
  )

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startAutoPlay = useCallback(() => {
    stopAutoPlay()
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % items.length
        setAnimDir('next')
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 350)
        return next
      })
    }, CAROUSEL_INTERVAL)
  }, [items.length, stopAutoPlay])

  // Reinicia el autoplay cuando cambia la lista de items
  useEffect(() => {
    startAutoPlay()
    return stopAutoPlay
  }, [startAutoPlay, stopAutoPlay])

  return {
    activeIndex,
    isAnimating,
    animDir,
    CAROUSEL_INTERVAL,
    goNext,
    goPrev,
    goTo,
    startAutoPlay,
    stopAutoPlay,
  }
}
