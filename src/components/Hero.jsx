import { profile } from '../data/content.js'
import portrait from '../assets/satish.webp'
import Arrow from './Arrow.jsx'

export default function Hero() {
  return (
    <section className="grid border-b border-ink/15 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-5 py-10 md:px-10 lg:py-16">
        <h1 className="font-display text-[clamp(2.75rem,13vw,6rem)] uppercase leading-[0.95] tracking-tight lg:text-[clamp(4.5rem,8.2vw,9rem)]">
          {profile.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">
          {profile.tagline}
        </p>
        <p className="mt-4 max-w-md text-base leading-relaxed sm:text-lg">{profile.intro}</p>
        <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href="#work"
            className="inline-flex min-h-[48px] items-center justify-center gap-4 bg-ink px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-rust"
          >
            View my work
            <Arrow />
          </a>
          <a
            href="#about"
            className="inline-flex min-h-[44px] items-center justify-center border-b border-ink pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-rust hover:text-rust sm:inline sm:min-h-0 sm:justify-start"
          >
            About me
          </a>
        </div>
      </div>

      <div className="relative min-h-[380px] overflow-hidden sm:min-h-[520px] lg:min-h-[680px]">
        <div className="absolute inset-y-0 left-0 right-[14%] bg-rust lg:left-[6%]" />
        <div className="absolute bottom-0 right-0 h-[42%] w-[46%] bg-amber" />

        {/* crosshair mark */}
        <div className="absolute left-[12%] top-[58%] hidden h-6 w-6 lg:block" aria-hidden="true">
          <span className="absolute left-1/2 top-0 h-full w-px bg-cream/70" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-cream/70" />
        </div>

        <img
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          className="absolute left-[43%] top-[5%] h-[155%] sm:h-[165%] w-auto max-w-none -translate-x-1/2 select-none lg:left-[46%]"
          draggable="false"
        />

        <div
          className="absolute right-[4.5%] top-8 hidden items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] sm:flex"
          style={{ writingMode: 'vertical-rl' }}
          aria-hidden="true"
        >
          Growth with purpose
          <span className="h-24 w-px bg-ink" />
        </div>

        <div className="absolute bottom-6 right-6 hidden grid-cols-5 gap-1.5 sm:grid" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className={`h-2 w-2 ${index === 3 ? 'bg-transparent' : 'bg-ink'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
