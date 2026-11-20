import { useState } from 'react'
import { profile, SHEET_MONKEY_URL } from '../data/content.js'
import Arrow from './Arrow.jsx'

const emptyForm = { name: '', email: '', message: '' }

function DetailIcon({ type }) {
  const paths = {
    mail: <path d="M2 4h16v12H2zM2 5l8 6 8-6" />,
    phone: <path d="M6 2h8v16H6zM9 15h2" />,
    pin: <path d="M10 18s6-5.5 6-10a6 6 0 0 0-12 0c0 4.5 6 10 6 10zM10 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />,
    link: <path d="M3 3h14v14H3zM7 9v5M7 6v.5M10.5 14V9M10.5 11c0-1.5 3.5-2 3.5.5V14" />,
    send: <path d="M18 2 2 9l6 2.5L10.5 18zM8 11.5 18 2" />,
  }
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    try {
      const response = await fetch(SHEET_MONKEY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Name: form.name.trim(),
          Email: form.email.trim(),
          Message: form.message.trim(),
          Created: 'x-sheetmonkey-current-date-time',
        }),
      })
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
      setForm(emptyForm)
      setStatus('success')
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full border-b border-cream/40 bg-transparent py-2 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-amber'
  const labelClass = 'block text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/70'
  const detailClass = 'flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.12em]'

  return (
    <section id="contact" className="grid lg:grid-cols-[1fr_1fr_1.15fr]">
      <div className="flex items-center bg-rust px-5 py-12 md:px-10">
        <h2 className="font-display text-5xl uppercase leading-[1.02] xl:text-6xl">
          Let&apos;s grow
          <br />
          something
          <br />
          remarkable
        </h2>
      </div>

      <ul className="flex flex-col justify-center gap-6 px-5 py-12 md:px-10">
        <li>
          <a href={`mailto:${profile.email}`} className={`${detailClass} break-all hover:text-rust`}>
            <DetailIcon type="mail" />
            {profile.email}
          </a>
        </li>
        <li>
          <a href={`tel:${profile.phoneHref}`} className={`${detailClass} hover:text-rust`}>
            <DetailIcon type="phone" />
            {profile.phone}
          </a>
        </li>
        <li>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`${detailClass} break-all hover:text-rust`}
          >
            <DetailIcon type="link" />
            {profile.linkedinLabel}
          </a>
        </li>
        <li className={detailClass}>
          <DetailIcon type="pin" />
          Based in {profile.location}
        </li>
        <li className={detailClass}>
          <DetailIcon type="send" />
          <span>
            {profile.availability}
            <span className="mt-1 block font-medium normal-case tracking-normal text-ink/70">
              {profile.workMode}
            </span>
          </span>
        </li>
      </ul>

      <form onSubmit={handleSubmit} className="bg-ink px-5 py-12 text-cream md:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            required
            value={form.message}
            onChange={handleChange}
            className={`${fieldClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-6 flex w-full cursor-pointer items-center justify-between border-b border-cream/40 pb-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-amber hover:text-amber disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <Arrow />
        </button>

        <p className="mt-4 min-h-5 text-sm" role="status" aria-live="polite">
          {status === 'success' && (
            <span className="text-amber">Thank you. Your message has been sent.</span>
          )}
          {status === 'error' && (
            <span className="text-cream">
              The message could not be sent. Please try again or email {profile.email}.
            </span>
          )}
        </p>
      </form>
    </section>
  )
}
