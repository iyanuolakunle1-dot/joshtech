import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Sparkles, ChevronLeft, ChevronRight, MessageSquareCode } from 'lucide-react'
import Reveal from './Reveal'
import { projects, projectCategories, socials } from '../data/content'

const getHostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url || 'live'
  }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const scrollContainerRef = useRef(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const scrollAmount = container.clientWidth * 0.8
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="projects" className="relative py-28 border-t border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="section-eyebrow mb-3">Featured Work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl">
                Production web applications,{' '}
                <span className="text-gradient">engineered for impact.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="muted max-w-md text-sm sm:text-base leading-relaxed">
                4-Column interactive project showcase. Scroll horizontally to inspect all 8 live deployments.
              </p>
              {/* Scroll controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleScroll('left')}
                  aria-label="Scroll Left"
                  className="w-10 h-10 rounded-xl card-base flex items-center justify-center hover:border-primary hover:text-primary dark:hover:text-white transition-all shadow-sm"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => handleScroll('right')}
                  aria-label="Scroll Right"
                  className="w-10 h-10 rounded-xl card-base flex items-center justify-center hover:border-primary hover:text-primary dark:hover:text-white transition-all shadow-sm"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'card-base hover:border-slate-400 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* 4 Grid, 1 Row Horizontal Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="project-scrollbar flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="w-[85vw] sm:w-[350px] md:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start flex flex-col"
              >
                <article className="card-base overflow-hidden flex flex-col h-full group hover:-translate-y-1.5 hover:border-primary/50 dark:hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300">
                  {/* Screenshot Image Preview Frame */}
                  <div className="relative h-[190px] w-full overflow-hidden bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 shrink-0">
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-slate-900/85 backdrop-blur-md text-white border border-white/15 shadow-sm">
                        <Sparkles size={10} className="text-primary-light" />
                        {project.badge || 'Full Stack'}
                      </span>
                    </div>

                    {/* Quick Live Preview Floating Button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                      <a
                        href={project.swagger || project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-lg transition-transform hover:scale-105"
                      >
                        <ExternalLink size={13} /> {project.swagger || project.live?.includes('swagger') ? 'Swagger API' : 'Live Demo'}
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-semibold shadow-lg transition-transform hover:scale-105 border border-white/20"
                      >
                        <Github size={13} /> Code
                      </a>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex flex-col flex-1 justify-between bg-white dark:bg-surface/90">
                    <div className="flex flex-col flex-1">
                      {/* Domain Header */}
                      <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-1 truncate">
                        {getHostname(project.live)}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-primary dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {project.name}
                      </h3>

                      {/* Tagline with fixed min height for perfect row alignment */}
                      <p className="text-slate-600 dark:text-slate-300 text-xs line-clamp-2 mt-1 font-medium leading-relaxed min-h-[34px]">
                        {project.tagline}
                      </p>

                      {/* Tech Chips with uniform height */}
                      <div className="flex flex-wrap gap-1 mt-3 mb-3 min-h-[26px] items-center">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-md text-slate-400 dark:text-slate-500">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 mt-auto border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={13} /> Repo
                      </a>

                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/2347040087040?text=Hi%20Joshua,%20I%20am%20interested%20in%20building%20a%20project%20like%20${encodeURIComponent(
                            project.name
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          title="Chat on WhatsApp about this project"
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all font-medium border border-emerald-500/20"
                        >
                          <MessageSquareCode size={13} /> Chat
                        </a>

                        <a
                          href={project.swagger || project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-primary hover:bg-primary-dark px-3 py-1.5 rounded-lg shadow-sm transition-all"
                        >
                          <span>{project.swagger || project.live?.includes('swagger') ? 'Swagger' : 'Live'}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Scroll helper hint bar */}
        <div className="mt-4 flex items-center justify-between text-xs muted font-mono">
          <span>← Scroll or drag horizontally to discover more projects →</span>
          <span className="hidden sm:inline-block">Showing {filteredProjects.length} total projects</span>
        </div>
      </div>
    </section>
  )
}


