import { Code2, Layers, Rocket, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const pillars = [
  {
    icon: Code2,
    title: 'Full Stack Engineering',
    desc: 'Architecting complete software solutions — schema design, secure API backends, and responsive React user interfaces.',
  },
  {
    icon: Layers,
    title: 'Multi-Portal Architectures',
    desc: 'Building role-based enterprise portals (Admin, Staff, Client, Guest) with bulletproof Row-Level Security.',
  },
  {
    icon: Rocket,
    title: 'Shipped & Production Tested',
    desc: 'Focusing on clean code, database triggers, fast load times, and reliable deployments across Vercel & Render.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-eyebrow mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl">
            Engineering scalable web platforms with <span className="text-gradient">precision &amp; purpose.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
            <p className="lg:col-span-8 muted text-base sm:text-lg leading-relaxed">
              I&apos;m Joshua Olakunle, a Full Stack Developer dedicated to crafting complete, production-grade applications that solve real operational challenges. My shipped work spans across high-impact domains including 
              hospitality management (<span className="text-slate-800 dark:text-white font-medium">Luxora</span>), 
              healthcare ecosystems (<span className="text-slate-800 dark:text-white font-medium">Clinexa</span>), 
              educational test &amp; school suites (<span className="text-slate-800 dark:text-white font-medium">PrepDeck</span>, <span className="text-slate-800 dark:text-white font-medium">Academora</span>), 
              real-time collaboration &amp; social platforms (<span className="text-slate-800 dark:text-white font-medium">LinkUp</span>, <span className="text-slate-800 dark:text-white font-medium">BuzzHive</span>), 
              and e-commerce systems (<span className="text-slate-800 dark:text-white font-medium">ShopSphere</span>, <span className="text-slate-800 dark:text-white font-medium">FoodVerse</span>).
              <br /><br />
              Whether architecting PostgreSQL relational schemas with automated triggers, developing RESTful Express APIs, or crafting smooth, responsive React frontends with Tailwind CSS, I focus on clean architecture, security, and performance.
            </p>

            <div className="lg:col-span-4 card-base p-6 border-l-4 border-l-primary">
              <h4 className="font-display font-semibold text-base mb-2 flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                Core Engineering Values
              </h4>
              <ul className="text-xs sm:text-sm muted space-y-2.5">
                <li>• No dummy data — real database schemas &amp; triggers</li>
                <li>• Strict role-based permissions &amp; data privacy</li>
                <li>• Responsive, accessible &amp; fast interfaces</li>
                <li>• Maintainable, well-structured codebases</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.15 + i * 0.1}>
              <div className="card-base p-6 sm:p-7 h-full hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light flex items-center justify-center mb-5 border border-primary/20">
                  <p.icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{p.title}</h3>
                <p className="muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
