import { useState, useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(() => {
    // Lecture du localStorage au chargement, sinon fallback sur la préférence système
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) {
      return stored === 'true'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const toggleDarkMode = (checked) => {
    setDarkMode(checked)
    localStorage.setItem('darkMode', checked) // Sauvegarde dans localStorage
    if (checked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    // Au montage, appliquer la classe selon l'état isDarkMode
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="p-4">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  )
}
