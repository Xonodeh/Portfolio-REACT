import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // icônes burger
import DarkModeToggle from './darkMode'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-50 dark:bg-gray-900 dark:bg-opacity-90">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo à gauche */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Nael.</span>
          <img
            src="../img/favicon.png"
            width={40}
            height={40}
            alt="Logo"
          />
        </div>

        {/* Bouton burger (visible uniquement sur mobile) */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Liens + darkmode (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
            <li><a href="#about" className="hover:text-black dark:hover:text-white transition">À propos</a></li>
            <li><a href="#projects" className="hover:text-black dark:hover:text-white transition">Projets</a></li>
            <li><a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a></li>
          </ul>
          <DarkModeToggle />
        </div>
      </nav>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center py-6 space-y-4 shadow-lg">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition">À propos</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition">Projets</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition">Contact</a>
          <DarkModeToggle />
        </div>
      )}
    </header>
  )
}
