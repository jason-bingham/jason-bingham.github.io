import { useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav'
import webProjects from '../data/webProjects'

export default function ProjectPage() {
  const { id } = useParams()
  const project = webProjects.find(p => p.id === id)

  if (!project) return <Navigate to="/web" replace />

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Nav pageTitle={project.title} currentPath="/web" />
      <iframe
        src={project.href}
        title={project.title}
        style={{ flex: 1, border: 'none' }}
      />
    </div>
  )
}
