import { useEffect } from 'react'
import Header from '../components/Header'
import Bookshelf from '../components/Bookshelf'
import Footer from '../components/Footer'

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add('bg-dark')
    return () => document.body.classList.remove('bg-dark')
  }, [])

  return (
    <>
      <Header />
      <main>
        <Bookshelf />
      </main>
      <Footer />
    </>
  )
}
