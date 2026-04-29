import { useState, useEffect } from 'react'
import '../styles/style-index-header.css'
import { supabase } from '../lib/supabase'

const FALLBACK_QUOTES = [
  { quote: "Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.", author: "John Chris Jones" },
  { quote: "The details are not the details. They make the design.", author: "Charles Eames" },
  { quote: "There are three responses to a piece of design — yes, no, and wow! Wow is the one to aim for.", author: "Milton Glaser" },
  { quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { quote: "Good design is as little design as possible.", author: "Dieter Rams" },
]

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
  const [quotes, setQuotes] = useState(FALLBACK_QUOTES)
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * FALLBACK_QUOTES.length))

  useEffect(() => {
    supabase.from('quotes').select('quote, author').then(({ data }) => {
      if (data?.length) {
        setQuotes(data)
        setQuoteIndex(Math.floor(Math.random() * data.length))
      }
    })
  }, [])

  const go = (btn) => setView(TRANSITIONS[view][btn])

  const prevQuote   = () => setQuoteIndex(i => (i - 1 + quotes.length) % quotes.length)
  const nextQuote   = () => setQuoteIndex(i => (i + 1) % quotes.length)
  const randomQuote = () => setQuoteIndex(i => {
    let next
    do { next = Math.floor(Math.random() * quotes.length) } while (next === i)
    return next
  })

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
        <div className="quote-body">
          <p>"{quotes[quoteIndex].quote}"</p>
          <p className="quote-author">&mdash;{quotes[quoteIndex].author}</p>
        </div>
        <div className="quote-controls">
          <button onClick={prevQuote} aria-label="Previous quote">&#8592;</button>
          <button onClick={randomQuote} aria-label="Random quote">&#8635; Random</button>
          <button onClick={nextQuote} aria-label="Next quote">&#8594;</button>
        </div>
      </div>
    </header>
  )
}
