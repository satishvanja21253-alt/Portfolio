import { about } from '../data/content.js'
import Arrow from './Arrow.jsx'

export default function About() {
  return (
    <section id="about" className="grid border-b border-ink/15 lg:grid-cols-[1.15fr_0.75fr_1.1fr]">
      <div className="px-5 py-12 md:px-10">
        <span className="block h-1 w-9 bg-rust" />
        <h2 className="mt-4 font-display text-4xl uppercase md:text-5xl">About me</h2>
        <p className="mt-6 max-w-lg leading-relaxed">{about.text}</p>
        <a
          href="#experience"
          className="mt-7 inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-rust"
        >
          <span className="border-b border-current pb-1">Read more</span>
          <Arrow />
        </a>
      </div>

      <dl className="flex flex-col justify-center px-5 pb-12 md:px-10 lg:py-12 lg:pl-0">
        {about.stats.map((stat) => (
          <div
            key={stat.label.join(' ')}
            className="flex items-center gap-5 border-b border-ink/15 py-5 last:border-b-0"
          >
            <dd className="min-w-[7.5rem] font-display text-5xl leading-none">
              {stat.value}
              <span className="ml-0.5 text-3xl">{stat.suffix}</span>
            </dd>
            <dt className="text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em]">
              {stat.label.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </dt>
          </div>
        ))}
      </dl>

      <div className="relative min-h-[300px] overflow-hidden bg-ink" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[19rem] leading-none text-rust">
          S
        </span>
        <span className="absolute right-[14%] top-[12%] h-4 w-4 bg-amber" />
        <span className="absolute bottom-[10%] left-[9%] h-4 w-4 bg-cream" />
      </div>
    </section>
  )
}
