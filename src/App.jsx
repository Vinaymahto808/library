import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Books from './components/Books'
import ArchiveGrid from './components/ArchiveGrid'
import LocationSection from './components/LocationSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Reveal } from './components/Reveal'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.8 })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <Hero />
        <Reveal><Services /></Reveal>
        <Reveal><Books /></Reveal>
        <Reveal><ArchiveGrid /></Reveal>
        <Reveal><LocationSection /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  )
}
