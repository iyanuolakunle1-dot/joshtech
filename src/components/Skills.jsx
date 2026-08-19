import Reveal from './Reveal'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-eyebrow mb-3">Technical Stack</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl">
            Technologies &amp; tools I use to <span className="text-gradient">ship end-to-end.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="card-base p-6 sm:p-7 h-full group hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-primary/50 hover:text-primary dark:hover:text-primary-light transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
