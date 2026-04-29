import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import '../styles/style-admin.css'

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    setLoading(false)
  }

  return (
    <div className="admin-card">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <p className="admin-error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Log in'}
        </button>
      </form>
    </div>
  )
}

function AdminDashboard({ onLogout }) {
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchQuotes = async () => {
    const { data } = await supabase.from('quotes').select('id, quote, author').order('created_at')
    if (data) setQuotes(data)
  }

  useEffect(() => { fetchQuotes() }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.from('quotes').insert({ quote, author })
    if (error) {
      setError(error.message)
    } else {
      setQuote('')
      setAuthor('')
      fetchQuotes()
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    await supabase.from('quotes').delete().eq('id', id)
    fetchQuotes()
  }

  return (
    <div className="admin-card">
      <div className="admin-header">
        <h1>Quotes</h1>
        <button className="admin-btn-secondary" onClick={onLogout}>Log out</button>
      </div>

      <form onSubmit={handleAdd} className="admin-form">
        <h2>Add a quote</h2>
        <textarea
          placeholder="Quote text"
          value={quote}
          onChange={e => setQuote(e.target.value)}
          rows={3}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
        {error && <p className="admin-error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Saving…' : 'Add quote'}
        </button>
      </form>

      <ul className="admin-quote-list">
        {quotes.map(q => (
          <li key={q.id} className="admin-quote-item">
            <div>
              <p>"{q.quote}"</p>
              <p className="admin-quote-author">— {q.author}</p>
            </div>
            <button className="admin-btn-delete" onClick={() => handleDelete(q.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AdminPage() {
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => setSession(s))
    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = () => supabase.auth.signOut()

  if (session === undefined) return null

  return (
    <div className="admin-page">
      {session
        ? <AdminDashboard onLogout={handleLogout} />
        : <LoginForm />
      }
    </div>
  )
}
