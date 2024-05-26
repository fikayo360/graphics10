
import { Hero } from './pages/hero/hero'
import { About } from './pages/about/about'
import { Works } from './pages/works/works'
import { Services } from './pages/services/services'
import { Flow } from './pages/flow/flow'
import { Reviews } from './pages/reviews/reviews'
import { Contact } from './pages/contact/contact'
import { Faq } from './pages/Faq/Faq'
import { Footer } from './pages/footer/footer'


function App() {

  return (
    <>
      <Hero/>
      <About />
      <Services/>
      <Works />
      <Reviews />
      <Faq />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App
