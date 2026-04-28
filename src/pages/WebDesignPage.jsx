import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/style--page-web.css'

const projects = [
  { id: 'clock',       title: 'Clock',              href: 'https://jason-bingham.github.io/Projects/Clock/index.html',              screenshots: ['clock--screenshot1', 'clock--screenshot2', 'clock--screenshot3'] },
  { id: 'ari',         title: 'Tribute',             href: 'https://jason-bingham.github.io/Projects/BioAri/index.html',             screenshots: ['ari--screenshot1'] },
  { id: 'drum',        title: 'Drumkit',             href: 'https://jason-bingham.github.io/Projects/DrumKit/index.html',            screenshots: ['drum--screenshot1'] },
  { id: 'animal',      title: 'Animals',             href: 'https://jason-bingham.github.io/Projects/AnimalFarm/index.html',         screenshots: ['animal--screenshot1'] },
  { id: 'hamburger',   title: 'Hamburgers',          href: 'https://jason-bingham.github.io/Projects/Hamburgers/index.html',         screenshots: ['hamburger--screenshot1'] },
  { id: 'tables',      title: 'Tables',              href: 'https://jason-bingham.github.io/Projects/TedsTables/index.html',         screenshots: ['tables--screenshot1'] },
  { id: 'photogrid',   title: 'Photo Grid',          href: 'https://jason-bingham.github.io/Projects/PhotoGrid/index.html',          screenshots: ['photogrid--screenshot1'] },
  { id: 'photostack',  title: 'Photo Stack',         href: 'https://jason-bingham.github.io/Projects/SlidingPhotoStack/index.html',  screenshots: ['photostack--screenshot1'] },
  { id: 'regform',     title: 'Registration Form',   href: 'https://jason-bingham.github.io/Projects/RegistrationForm/index.html',   screenshots: ['regform--screenshot1'] },
  { id: 'retroconsole',title: 'Retro Console',       href: 'https://jason-bingham.github.io/Projects/RetroConsole/index.html',       screenshots: ['retroconsole--screenshot1'] },
  { id: 'QRCode',      title: 'QR Code Component',   href: 'https://jason-bingham.github.io/Projects/FEM-QRCodeComponent/index.html',screenshots: ['QRCode--screenshot1'] },
  { id: 'prodpreview', title: 'Product Preview',     href: 'https://jason-bingham.github.io/Projects/FEM-ProdPreviewCard/index.html',screenshots: ['prodpreview--screenshot1'] },
  { id: 'flex04',      title: 'Responsive Layout',   href: 'https://jason-bingham.github.io/Projects/flexchallenge04/index.html',    screenshots: ['flex04--screenshot1'] },
]

export default function WebDesignPage() {
  return (
    <>
      <Nav pageTitle="Web Design" currentPath="/web" />
      <main className="flex flex-justify-c">
        <div className="list-grid dark">
          {projects.map(({ id, title, href, screenshots }) => (
            <a key={id} className="project-card" href={href}>
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
