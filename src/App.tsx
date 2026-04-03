import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { WhatsAppFloating } from './components/ui/WhatsAppButton'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Classes } from './sections/Classes'
import { Gallery } from './sections/Gallery'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'
import { MetaTags } from './seo/MetaTags'
import { SchemaOrg } from './seo/SchemaOrg'

function HomePage() {
  return (
    <>
      <MetaTags />
      <SchemaOrg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
