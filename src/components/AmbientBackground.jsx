import { useMemo } from 'react'
import { motion } from 'framer-motion'

const particles = Array.from({ length: 12 })

export default function AmbientBackground() {
  const seeded = useMemo(
    () =>
      particles.map((_, i) => ({
        id: i,
        size: 2 + ((i * 19) % 3),
        left: (i * 47) % 100,
        top: (i * 31) % 100,
        delay: (i % 5) * 0.8,
        duration: 9 + (i % 4),
      })),
    []
  )

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-grad-mesh opacity-50 dark:opacity-40" />
      {seeded.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/10 dark:bg-indigo-400/10 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
