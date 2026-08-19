import Reveal from './Reveal'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="relative py-28 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-eyebrow mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl">
            Services &amp; solutions I provide to <span className="text-gradient">grow your product.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card-base p-6 sm:p-7 h-full hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-primary mb-4" />
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
