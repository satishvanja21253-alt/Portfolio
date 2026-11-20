import { useState } from 'react'
import { projects } from '../data/content.js'
import Arrow from './Arrow.jsx'

const tones = {
  sand: { tile: 'bg-sand text-ink', accent: 'bg-rust', label: 'text-ink/70' },
  ink: { tile: 'bg-ink text-cream', accent: 'bg-rust', label: 'text-cream/70' },
  amber: { tile: 'bg-amber text-ink', accent: 'bg-ink', label: 'text-ink/75' },
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null)
  const active = openIndex === null ? null : projects[openIndex]

  return (
    <section id="work" className="border-b border-ink/15 px-5 py-12 md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl uppercase md:text-5xl">Selected projects</h2>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/60">
          Campaign results
        </p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => {
          const tone = tones[project.tone]
          const isOpen = openIndex === index
          return (
            <article key={project.category}>
              <div className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden p-6 ${tone.tile}`}>
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em]">
                  <span>{project.client}</span>
                  <span className={`h-3 w-3 ${tone.accent}`} />
                </div>
                <div>
                  <p className="font-display text-[clamp(3rem,5.4vw,5rem)] uppercase leading-none">
                    {project.heroValue}
                  </p>
                  <p className={`mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${tone.label}`}>
                    {project.heroLabel}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-semibold">{project.category}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls="project-details"
                  className="inline-flex cursor-pointer items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-rust"
                >
                  <span className="border-b border-current pb-1">
                    {isOpen ? 'Hide project' : 'View project'}
                  </span>
                  <Arrow direction={isOpen ? 'up' : 'right'} />
                </button>
              </div>
            </article>
          )
        })}
      </div>

      <div id="project-details" aria-live="polite">
        {active && (
          <div className="mt-10 grid gap-8 border-t border-ink pt-8 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-rust">
                {active.client}
              </p>
              <h3 className="mt-2 font-display text-3xl uppercase">{active.category}</h3>
              <p className="mt-4 max-w-md leading-relaxed">{active.summary}</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
              {active.metrics.map((metric) => (
                <div key={metric.label} className="border-t border-ink/20 pt-4">
                  <dd className="font-display text-4xl leading-none md:text-5xl">{metric.value}</dd>
                  <dt className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/70">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  )
}
