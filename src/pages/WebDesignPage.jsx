import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/style--page-web.css'
import webProjects from '../data/webProjects'

export default function WebDesignPage() {
  return (
    <>
      <Nav pageTitle="Web Design" currentPath="/web" />
      <main className="flex flex-justify-c">
        <div className="list-grid dark">
          {webProjects.map(({ id, title, screenshots }) => (
            <a key={id} className="project-card" href={`/web/${id}`}>
              {screenshots.map(shot => (
                <div key={shot} className={`project-card--screenshots project-card__${shot}`}></div>
              ))}
              <div className="project-title-background">
                <h2 className="project-title">{title}</h2>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
