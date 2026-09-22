import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [isDark])

  return (
    <button
      className="btn"
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      <FontAwesomeIcon icon={isDark ? faCircleHalfStroke : faMoon} />
    </button>
  )
}

export default ThemeToggle