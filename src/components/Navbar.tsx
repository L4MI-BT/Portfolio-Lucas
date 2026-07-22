import { useRef } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Collapse } from 'bootstrap'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const navRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => {
    if (navRef.current) {
      const bsCollapse = Collapse.getInstance(navRef.current)
      bsCollapse?.hide()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <HashLink className="navbar-brand" to="/#accueil">BLANCHARD-TOULET Lucas</HashLink>

        <div className="d-flex align-items-center gap-3 order-lg-2">
          <ThemeToggle />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-label="Ouvrir le menu de navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navMenu" ref={navRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <HashLink className="nav-link" to="/#a-propos" onClick={closeMenu}>À propos</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#projets" onClick={closeMenu}>Projets</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#competences" onClick={closeMenu}>Compétences</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#contact" onClick={closeMenu}>Contact</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar