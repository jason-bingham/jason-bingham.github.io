import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/style--page-writing.css'

export default function WritingPage() {
  return (
    <div className="writing-page">
      <Nav pageTitle="Creative Writing" currentPath="/writing" />
      <main>
        <ul className="blurb__list">
          <li className="blurb">
            <a href="/writing_samples/theReason.html">
              <h2>The Reason</h2>
              <p>A meditation on the meaning of life.</p>
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
