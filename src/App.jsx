import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import About from './components/about'
import Footer from './components/footer'
import Contact from './components/contact'

export default function App() {
  return (
    <div className="font-apple bg-white text-gray-900 min-h-screen">

      <Header />
      <main >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
