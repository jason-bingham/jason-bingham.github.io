import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/style--page_graphic.css'

const images = [
  { src: '/graphic_design_assets/images/periodic_table_1000pxx1000px-01.png', cardClass: 'card--3_3' },
  { src: '/graphic_design_assets/images/electrons.png',                        cardClass: 'card--2_1' },
  { src: '/graphic_design_assets/images/pascals_triangle_vert.jpg',            cardClass: 'card--2_3' },
  { src: '/graphic_design_assets/images/color sphere.jpg',                     cardClass: 'card--2_1' },
  { src: '/graphic_design_assets/images/elephant.jpg',                         cardClass: 'card--1_2' },
  { src: '/graphic_design_assets/images/matar carta.png',                      cardClass: 'card--2_1' },
  { src: '/graphic_design_assets/images/FJU_Logo_v2.jpg',                      cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/RuSIANZ_Logo_v9.png',                  cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/butterfly-blue-monarch.png',           cardClass: 'card--2_1' },
  { src: '/graphic_design_assets/images/Gala-01.jpg',                          cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/weefor_01.jpg',                        cardClass: 'card--4_2' },
  { src: '/graphic_design_assets/images/ouro_water.jpg',                       cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/best_coast_warehouse.png',             cardClass: 'card--3_2' },
  { src: '/graphic_design_assets/images/WCW Logo 2.jpg',                       cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/WCW Logo.jpg',                         cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/LASPdesign_Logo_sq-02.png',            cardClass: 'card--2_2' },
  { src: "/graphic_design_assets/images/MiniMango_logo_option 2.png",          cardClass: 'card--1'   },
  { src: "/graphic_design_assets/images/Mommy's Sippy Cup_Flamingos with waves.png", cardClass: 'card--1' },
  { src: '/graphic_design_assets/images/Haeckel.jpg',                          cardClass: 'card--3_3' },
  { src: '/graphic_design_assets/images/PlantNative2.jpg',                     cardClass: 'card--2_2' },
  { src: '/graphic_design_assets/images/Once-2-01.jpg',                        cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/scene of the crime.jpg',               cardClass: 'card--2_1' },
  { src: '/graphic_design_assets/images/pattern1.png',                         cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/whereTo.png',                          cardClass: 'card--1'   },
  { src: '/graphic_design_assets/images/wallpaper.png',                        cardClass: 'card--1'   },
]

export default function GraphicDesignPage() {
  return (
    <>
      <Nav pageTitle="Graphic Design" currentPath="/graphic" />
      <main>
        <div className="card_container">
          {images.map(({ src, cardClass }) => (
            <img key={src} className={`card ${cardClass}`} src={src} alt="" />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
