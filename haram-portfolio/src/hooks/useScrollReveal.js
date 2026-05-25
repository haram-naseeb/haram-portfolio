import { useEffect, useRef } from 'react'

export const useScrollReveal = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export const useMousePosition = () => {
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const update = (e) => {
      position.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return position
}
