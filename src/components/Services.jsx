import { services } from '../data/content.js'
import Arrow from './Arrow.jsx'

function ServiceIcon({ type }) {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
      <rect width="40" height="40" className="fill-ink" />
      {type === 'square' && <rect x="13" y="13" width="14" height="14" className="fill-amber" />}
      {type === 'circle' && (
        <circle cx="20" cy="20" r="6.5" className="fill-none stroke-amber" strokeWidth="5" />
      )}
      {type === 'diagonal' && <path d="M9 31 31 9v22z" className="fill-amber" />}
      {type === 'grid' && (
        <g className="fill-amber">
          <rect x="8" y="8" width="10.5" height="10.5" />
          <rect x="21.5" y="21.5" width="10.5" height="10.5" />
          <rect x="21.5" y="8" width="10.5" height="10.5" opacity="0.45" />
          <rect x="8" y="21.5" width="10.5" height="10.5" opacity="0.45" />
        </g>
      )}
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-amber px-5 py-12 md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl uppercase md:text-5xl">Services</h2>
        <a
          href="#contact"
          className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.14em]"
        >
          <span className="border-b border-current pb-1">Discuss a project</span>
          <Arrow />
        </a>
      </div>

      <div className="mt-9 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`flex gap-5 lg:px-6 ${index === 0 ? 'lg:pl-0' : 'lg:border-l lg:border-ink/25'}`}
          >
            <ServiceIcon type={service.icon} />
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.14em]">{service.title}</h3>
              <p className="mt-2 max-w-[16rem] text-sm leading-relaxed">{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
