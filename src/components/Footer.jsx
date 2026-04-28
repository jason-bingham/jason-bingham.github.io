import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="flex flex-justify-c">
      <Link to="/" className="credit light">
        Website designed, produced and maintained by Jason Bingham
      </Link>
    </footer>
  )
}
