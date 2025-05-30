import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">Nael.</span> 
        <img
        src="../img/imgProfilApple.jpeg"
        width={40}
        height={40}
        alt="Photo de profil"
        />
      </div>
        
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#about" className="hover:text-black transition">À propos</a></li>
          <li><a href="#projects" className="hover:text-black transition">Projets</a></li>
          <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
