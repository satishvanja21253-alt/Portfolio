import { profile } from '../data/content.js'
import Arrow from './Arrow.jsx'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const linkClass =
    'text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-rust'

  return (
    <footer className="flex flex-col gap-6 border-t border-ink/15 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-5 md:px-10">
      <div className="flex items-center justify-between gap-5 sm:justify-start">
        <a href="#top" className="font-display text-xl uppercase tracking-wide">
          {profile.shortName}
        </a>
        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-cream sm:hidden"
        >
          <Arrow direction="up" />
        </a>
      </div>
      <p className="order-last text-xs text-ink/70 sm:order-none">
        © {currentYear} {profile.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-6 sm:gap-8">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`${linkClass} py-2`}>
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className={`${linkClass} py-2`}>
          Email
        </a>
        <a
          href="#top"
          aria-label="Back to top"
          className="hidden h-9 w-9 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-cream sm:flex"
        >
          <Arrow direction="up" />
        </a>
      </div>
    </footer>
  )
}
