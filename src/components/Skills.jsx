import { process, processNote, skillGroups } from '../data/content.js'
import Arrow from './Arrow.jsx'

const stepColors = ['text-ink', 'text-amber', 'text-rust']

export default function Skills() {
  return (
    <section id="skills" className="grid border-b border-ink/15 lg:grid-cols-[1.5fr_0.8fr_0.9fr]">
      <div className="px-5 py-12 md:px-10">
        <h2 className="font-display text-4xl uppercase md:text-5xl">Skills</h2>
        <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em]">
                <span className="h-2 w-2 bg-rust" />
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="border border-ink/40 px-2.5 py-1 text-xs font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <ol className="flex flex-col justify-center px-5 pb-10 md:px-10 lg:py-12 lg:pl-0">
        {process.map((step, index) => (
          <li
            key={step}
            className="flex items-center gap-4 sm:gap-6 border-b border-ink/15 py-3 last:border-b-0"
          >
            <span className={`font-display text-5xl sm:text-6xl leading-none ${stepColors[index % stepColors.length]}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.16em]">{step}</span>
          </li>
        ))}
      </ol>

      <div className="flex flex-col justify-center border-t border-ink/15 px-5 py-10 md:px-10 lg:border-l lg:border-t-0">
        <p className="max-w-xs text-base sm:text-lg leading-relaxed">{processNote}</p>
        <a
          href="#contact"
          className="mt-6 sm:mt-8 inline-flex min-h-[44px] items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-rust"
        >
          <span className="border-b border-current pb-1">Let&apos;s work together</span>
          <Arrow />
        </a>
      </div>
    </section>
  )
}
