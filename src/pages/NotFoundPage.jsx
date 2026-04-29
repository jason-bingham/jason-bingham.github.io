import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <>
      <Nav pageTitle="404" currentPath={null} />
      <main className="flex flex-justify-c" style={{ flexDirection: 'column', alignItems: 'center', padding: '4rem 1rem', gap: '1.5rem' }}>
        <p className="light">Page not found.</p>
        <Link to="/" className="light">← Back to home</Link>
      </main>
      <Footer />
    </>
  )
}
