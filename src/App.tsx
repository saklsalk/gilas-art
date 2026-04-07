import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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

function RtlManager() {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])
  return null
}

function HomePage() {
  return (
    <>
      <RtlManager />
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
      <BrowserRouter basename="/gilas-art/">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
