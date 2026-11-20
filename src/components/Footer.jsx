import { profile } from '../data/content.js'
import Arrow from './Arrow.jsx'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const linkClass =
    'text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-rust'

  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-ink/15 px-5 py-6 md:px-10">
      <a href="#top" className="font-display text-xl uppercase tracking-wide">
        {profile.shortName}
      </a>
      <p className="text-xs text-ink/70">
        © {currentYear} {profile.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-8">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className={linkClass}>
          Email
        </a>
        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-cream"
        >
          <Arrow direction="up" />
        </a>
      </div>
    </footer>
  )
}
