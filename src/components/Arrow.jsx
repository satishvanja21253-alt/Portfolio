export default function Arrow({ className = '', direction = 'right' }) {
  const rotation = { right: 'rotate-0', up: '-rotate-90', upRight: '-rotate-45', down: 'rotate-90' }
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 ${rotation[direction]} ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M1 8h13M9 3l5 5-5 5" />
    </svg>
  )
}
