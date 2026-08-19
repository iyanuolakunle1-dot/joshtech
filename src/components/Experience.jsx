import Reveal from './Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-eyebrow mb-3">Background &amp; Milestones</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl">
            My development journey, <span className="text-gradient">step by step.</span>
          </h2>
        </Reveal>

        <div className="mt-14 relative pl-8 sm:pl-10">
          {/* Vertical subtle timeline line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-slate-300 dark:bg-slate-800" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.08} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-bg-light dark:ring-bg shadow-sm" />
                <p className="font-mono text-xs uppercase tracking-wider text-primary dark:text-primary-light font-semibold mb-1">
                  {item.year}
                </p>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{item.org}</p>
                <p className="text-sm muted leading-relaxed max-w-2xl">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
