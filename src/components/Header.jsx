import { useState } from 'react'
import '../styles/style-index-header.css'

const TRANSITIONS = {
  default:   { contact: 'collapsed', about: 'contact',   title: 'about'    },
  about:     { contact: 'collapsed', about: 'contact',   title: 'default'  },
  contact:   { contact: 'collapsed', about: 'about',     title: 'default'  },
  collapsed: { contact: 'contact',   about: 'about',     title: 'default'  },
}

function TabButton() {
  return (
    <svg width="30" height="40" viewBox="0 0 100 100">
      <line className="btn__topline"    x1="70" y1="20" x2="30" y2="50" strokeWidth="15" stroke="#222" strokeLinecap="round" />
      <line className="btn__bottomline" x1="30" y1="50" x2="70" y2="80" strokeWidth="15" stroke="#222" strokeLinecap="round" />
    </svg>
  )
}

export default function Header() {
  const [view, setView] = useState('default')

  const go = (btn) => setView(TRANSITIONS[view][btn])

  const contactClosed = view === 'collapsed'
  const aboutClosed   = view === 'collapsed' || view === 'contact'
  const titleClosed   = view !== 'default'

  return (
    <header>
      {/* Profile photo tab */}
      <picture className="tab tab--profile">
        <div className="tab__photo"></div>
      </picture>

      {/* Contact tab */}
      <div className={`tab tab--contact${contactClosed ? ' closed' : ''}`}>
        <div className={`tab__content tab__content--contact${view === 'contact' ? '' : ' hidden'}`}>
          <h2>Contact me</h2>
          <div className="tab__contact_line">
            <h3 className="tab__contact_header">email:</h3>
            <p><a href="mailto:jbingham223@gmail.com">jbingham223@gmail.com</a></p>
          </div>
          <div className="tab__contact_line">
            <h3 className="tab__contact_header">socials:</h3>
            <p><a href="https://www.linkedin.com/in/jason-bingham-67908421/">LinkedIn</a></p>
            <p><a href="https://codepen.io/Jason-Bingham/">Codepen</a></p>
          </div>
        </div>
        <button className="btn btn--contact" onClick={() => go('contact')}>
          <TabButton />
        </button>
      </div>

      {/* About tab */}
      <div className={`tab tab--about${aboutClosed ? ' closed' : ''}`}>
        <div className={`tab__content tab__content--about${view === 'about' ? '' : ' hidden'}`}>
          <h2>Hello!</h2>
          <p className="tab__about_paragraph">
            I'm a designer and frontend web developer, and I created this site
            as a home for everything I produce.<br /><br />Thank you for
            visiting. I hope you find something here to enjoy and have a
            wonderful day!
          </p>
        </div>
        <button className="btn btn--about" onClick={() => go('about')}>
          <TabButton />
        </button>
      </div>

      {/* Title tab */}
      <div className={`tab tab--title${titleClosed ? ' closed' : ''}`}>
        <div className={`tab__content tab__content--title${view === 'default' ? '' : ' hidden'}`}>
          <h1>
            welcome to<br />the portfolio of<br /><span>JASON BINGHAM</span>
          </h1>
        </div>
        <button className="btn btn--title" onClick={() => go('title')}>
          <TabButton />
        </button>
      </div>

      {/* Back panel (quote) — visible only when collapsed */}
      <div className={`tab--back${view === 'collapsed' ? '' : ' hidden'}`}>
        <img className="header-logo" src="/images/favicons/favicon_16x16.png" alt="Jason's Logo" />
        <p>
          "Design everything on the assumption that people are not heartless or
          stupid but marvelously capable, given the chance."<br />–John Chris Jones
        </p>
      </div>
    </header>
  )
}
