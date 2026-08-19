import Reveal from './Reveal'
import AnimatedCounter from './AnimatedCounter'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="relative py-20 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="card-base p-8 sm:p-12 grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-4 shadow-soft">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-xs sm:text-sm muted font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
