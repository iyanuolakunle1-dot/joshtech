import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    const el = ref.current
    let raf
    const handleMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate3d(${e.clientX - 220}px, ${e.clientY - 220}px, 0)`
        }
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[440px] h-[440px] rounded-full z-0 hidden sm:block opacity-40 dark:opacity-30"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(14,165,233,0.06) 40%, transparent 70%)',
        filter: 'blur(24px)',
        willChange: 'transform',
      }}
    />
  )
}
