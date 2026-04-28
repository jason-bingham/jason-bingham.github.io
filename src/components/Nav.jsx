import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style--nav.css'

const links = [
  { label: 'Web Design',       to: '/web' },
  { label: 'Graphic Design',   to: '/graphic' },
  { label: 'Photography',      to: null },
  { label: 'Landscape Design', to: null },
  { label: 'Creative Writing', to: '/writing' },
  { label: 'Home',             to: '/' },
]

export default function Nav({ pageTitle, currentPath }) {
  const [open, setOpen] = useState(false)
  // Suppress open/close animations on first render
  const [preload, setPreload] = useState(true)

  useEffect(() => {
    const id = requestAnimationFrame(() => setPreload(false))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <header className="flex flex-justify-c bg-dark">
      <nav className="navbar">
        <div className="flex flex-justify-c">
          <Link className="light flex flex-justify-c go-home" to="/">
            <img className="logo" src="/images/logos/logo.svg" alt="logo" />
          </Link>
        </div>

        <h1 className="page-title light flex flex-justify-c">{pageTitle}</h1>

        <div className="ham flex flex-justify-c">
          <div className="ham-menu" aria-expanded={open ? 'true' : 'false'}>
            <ul id="primary-nav">
              {links.map(({ label, to }) => {
                const isCurrent = to === currentPath
                const inactive = to === null
                return (
                  <li key={label}>
                    {inactive ? (
                      <span className="ham-link ham-link--inactive">{label}</span>
                    ) : (
                      <Link
                        className="ham-link"
                        to={to}
                        aria-current={isCurrent ? 'page' : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <button
            className={`ham-main light${preload ? ' preload' : ''}`}
            aria-controls="primary-nav"
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen(o => !o)}
          >
            <svg viewBox="0 0 100 100" width="30">
              <line className="ham-line top"     x1="15" x2="85" y1="30" y2="30" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
              <line className="ham-line top right" x1="85" x2="15" y1="30" y2="30" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
              <line className="ham-line middle"  x1="15" x2="85" y1="50" y2="50" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
              <line className="ham-line bottom"  x1="15" x2="85" y1="70" y2="70" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
              <line className="ham-line bottom right" x1="85" x2="15" y1="70" y2="70" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
              <line className="ham-line x"       x1="70" x2="30" y1="30" y2="70" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
              <line className="ham-line x"       x1="30" x2="70" y1="70" y2="30" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
              <line className="ham-line x"       x1="30" x2="70" y1="30" y2="70" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
              <line className="ham-line x"       x1="70" x2="30" y1="70" y2="30" stroke="var(--light)" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
