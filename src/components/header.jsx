import React from 'react'
import DarkModeToggle from './darkMode'  // adapte le chemin si besoin

export default function Header() {
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
            alt="Photo de profil"
          />
        </div>

        {/* Container liens + toggle à droite */}
        <div className="flex items-center gap-6">
          <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
            <li><a href="#about" className="hover:text-black dark:hover:text-white transition">À propos</a></li>
            <li><a href="#projects" className="hover:text-black dark:hover:text-white transition">Projets</a></li>
            <li><a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a></li>
          </ul>

          {/* Toggle dark mode */}
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  )
}
