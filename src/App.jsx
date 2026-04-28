import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WebDesignPage from './pages/WebDesignPage'
import GraphicDesignPage from './pages/GraphicDesignPage'
import WritingPage from './pages/WritingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web" element={<WebDesignPage />} />
        <Route path="/graphic" element={<GraphicDesignPage />} />
        <Route path="/writing" element={<WritingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
