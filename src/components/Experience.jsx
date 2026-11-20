import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="bg-ink px-5 py-12 text-cream md:px-10">
      <h2 className="font-display text-4xl uppercase md:text-5xl">Experience &amp; education</h2>

      <div className="mt-8">
        {experience.map((item) => (
          <article
            key={item.role}
            className="grid gap-4 border-t border-cream/20 py-7 lg:grid-cols-[0.5fr_1.1fr_1.6fr]"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em]">
              <p className="text-amber">{item.kind}</p>
              {item.period && <p className="mt-2 text-cream/70">{item.period}</p>}
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-snug">{item.role}</h3>
              <p className="mt-1 text-sm text-cream/70">
                {item.org} · {item.place}
              </p>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-cream/85">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-rust" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
