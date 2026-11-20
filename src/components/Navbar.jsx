import { useState } from 'react'
import { navLinks, profile } from '../data/content.js'
import Arrow from './Arrow.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-cream">
      <div className="flex h-16 items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-display text-xl uppercase tracking-wide">
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-rust"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-3 bg-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-rust sm:inline-flex"
          >
            Let&apos;s talk
            <Arrow direction="upRight" />
          </a>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/15 px-5 py-3 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center justify-between border-b border-ink/10 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-rust"
              >
                {link.label}
                <Arrow />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-[44px] items-center justify-center gap-3 bg-ink px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-rust"
            >
              Let&apos;s talk
              <Arrow direction="upRight" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
