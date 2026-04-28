import { useState } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import '../styles/style-bookshelf.css'

export default function Bookshelf() {
  const [activeBook, setActiveBook] = useState(null)
  const anyActive = activeBook !== null

  const open = (id) => setActiveBook(id)
  const close = () => setActiveBook(null)

  return (
    <>
      <div className="bookshelf__depth"></div>
      <div className="bookshelf flex flex-center">

        {/* Web Design */}
        <Book
          variant="web"
          isActive={activeBook === 'web'}
          anyActive={anyActive}
          onOpen={() => open('web')}
          onClose={close}
          titles={[
            { text: 'Web Design', titleClass: 'book__title--web' },
            { text: '1.0',        titleClass: 'book__title--web book__title--web_sub' },
          ]}
        >
          <div className="book__page-shading"></div>
          <div className="book__page">
            <h3>Web Design</h3>
            <p className="book__text">
              &emsp;I began to teach myself frontend web design as a hobby in
              2020, and have since learned to love the process of creating
              dynamic digital content from pure code. I have produced most of
              my frontend work to date using vanilla HTML, CSS and Javascript,
              but also have experience with Django, Bootstrap, Sass, JQuery,
              and Pug. I am currently learning React.
            </p>
            <p className="book__text">
              &emsp;Follow <Link to="/web">this link</Link> to see some of my other projects.
            </p>
          </div>
          <div className="book__page">
            <div
              className="book__illus"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQwMDMwOTM&ixlib=rb-4.0.3&q=80&w=400)' }}
            ></div>
          </div>
        </Book>

        {/* Graphic Design */}
        <Book
          variant="graphic"
          extraClass="flex-column"
          isActive={activeBook === 'graphic'}
          anyActive={anyActive}
          onOpen={() => open('graphic')}
          onClose={close}
          titles={[
            { text: 'the Fundamentals of', titleClass: 'graphic-title graphic-title-sub' },
            { text: 'Graphic Design',       titleClass: 'graphic-title' },
          ]}
        >
          <div className="book__page-shading"></div>
          <div className="book__page">
            <div>
              <h3>Graphic Design</h3>
              <p className="book__text">
                &emsp;Over the years I have experimented with many types of
                design, from landscapes to logos, and from 3D modeling to
                simple line drawings. That work has been done by hand, or in
                Photoshop, Illustrator, InDesign, Sketchup, or even Autocad.
                You can take a peek at selected pieces{' '}
                <Link to="/graphic">right here!</Link>
              </p>
            </div>
            <div
              className="book__illus"
              style={{ backgroundImage: 'url(/graphic_design_assets/images/wallpaper.png)' }}
            ></div>
          </div>
          <div className="book__page">
            <div
              className="book__illus"
              style={{ backgroundImage: 'url(/graphic_design_assets/images/periodic_table_1000pxx1000px-01.png)', backgroundPosition: 'center' }}
            ></div>
          </div>
        </Book>

        {/* Data Visualization */}
        <Book
          variant="data"
          unpublished
          isActive={activeBook === 'data'}
          anyActive={anyActive}
          onOpen={() => open('data')}
          onClose={close}
          titles={[
            { text: 'Data Visualization, a Primer', titleClass: 'data-title' },
          ]}
        >
          <div className="book__page">
            <div
              className="book__illus"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1642516303080-431f6681f864?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3MDU5MzU&ixlib=rb-1.2.1&q=80)' }}
            ></div>
            <div>
              <h3 style={{ marginTop: '1rem' }}>Data Visualization</h3>
              <p className="book__text">
                &emsp;Coming soon.
              </p>
            </div>
          </div>
          <div className="book__page">
            <div>
              <p className="book__text">
                &emsp;Coming soon.
              </p>
            </div>
            <div
              className="book__illus"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1584291527935-456e8e2dd734?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3MDQyMTY&ixlib=rb-1.2.1&q=80)' }}
            ></div>
          </div>
          <div className="book__page-shading"></div>
        </Book>

        {/* Photography */}
        <Book
          variant="photo"
          unpublished
          isActive={activeBook === 'photo'}
          anyActive={anyActive}
          onOpen={() => open('photo')}
          onClose={close}
          titles={[
            { text: 'Photography 101', titleClass: 'photo-title' },
          ]}
        >
          <div className="book__page book__page--grid">
            <div className="book__illus" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1672627667545-e07869963d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQwMDMzODM&ixlib=rb-4.0.3&q=80&w=400)', gridColumn: '1 / 4' }}></div>
            <div className="book__illus" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1671488151311-472802f68f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQwMDM0MzE&ixlib=rb-4.0.3&q=80&w=400)', gridRow: '2 / 4' }}></div>
            <div className="book__illus" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1672729425843-f0cf27fa8f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQwMDM0MzE&ixlib=rb-4.0.3&q=80&w=400)', gridColumn: '2 / 4', gridRow: '2 / 4' }}></div>
          </div>
          <div className="book__page book__page--grid">
            <div className="book__illus" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1673560437416-7f8558024c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQwMDM0OTQ&ixlib=rb-4.0.3&q=80&w=400)', gridColumn: '1 / 3', gridRow: '1 / 3' }}></div>
            <div className="book__illus" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1673643680616-2c614c4c716e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQwMDM0OTQ&ixlib=rb-4.0.3&q=80&w=400)', gridRow: '1 / 3' }}></div>
            <div className="book__illus" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1672827863846-1837c32d7d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQwMDM1MzA&ixlib=rb-4.0.3&q=80&w=400)', gridColumn: '1 / 3' }}></div>
            <div className="book__illus" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1673120770434-37d148312261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQwMDM1NjA&ixlib=rb-4.0.3&q=80&w=400)' }}></div>
          </div>
          <div className="book__page-shading"></div>
        </Book>

        {/* Landscape Design */}
        <Book
          variant="landscape"
          extraClass="flex-column"
          unpublished
          isActive={activeBook === 'landscape'}
          anyActive={anyActive}
          onOpen={() => open('landscape')}
          onClose={close}
          titles={[
            { text: 'An Introduction to', titleClass: 'landscape-title landscape-title-sub' },
            { text: 'Landscape Design',   titleClass: 'landscape-title' },
          ]}
        >
          <div className="book__page">
            <div
              className="book__illus"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1610989653808-2303456a25e6?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3MDYxNzU&ixlib=rb-1.2.1&q=80)' }}
            ></div>
          </div>
          <div className="book__page">
            <div>
              <h3>Landscape Design</h3>
              <p className="book__text">&emsp;Coming soon.</p>
            </div>
          </div>
          <div className="book__page-shading"></div>
        </Book>

        {/* Creative Writing */}
        <Book
          variant="writing"
          isActive={activeBook === 'writing'}
          anyActive={anyActive}
          onOpen={() => open('writing')}
          onClose={close}
          titles={[
            { text: 'Creative Writing,', titleClass: 'writing-title' },
            { text: 'for Dummies',       titleClass: 'writing-title writing-title-sub' },
          ]}
        >
          <div className="book__page-shading"></div>
          <div className="book__page">
            <div>
              <h3 style={{ textAlign: 'center' }}>Creative</h3>
              <p className="book__text">
                &emsp;Many are the avid readers who dream of becoming writers
                in their own right. I count myself among them. And like many
                of my fellows, I have allowed myself to be held back by fear
                of the embarrassment of putting myself into a position of such
                vulnerability; exposing myself to ridicule, abuse or, worse
                yet, indifference.
              </p>
              <p className="book__text">
                &emsp;Well, those days are over! Here is a link to my{' '}
                <a href="https://substack.com/@fleecehunter">Substack</a>!
              </p>
            </div>
          </div>
          <div className="book__page">
            <div>
              <h3 style={{ textAlign: 'center' }}>Writing</h3>
              <p className="book__text">&emsp;...</p>
            </div>
          </div>
        </Book>

      </div>
    </>
  )
}
