import ThemeToggle from './ThemeToggle'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <HashLink className="navbar-brand" to="/">BLANCHARD-TOULET Lucas</HashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <HashLink className='nav-link' to="/#a-propos">À propos</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className='nav-link' to="/#parcours">Mon parcours</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className='nav-link' to="/#projets">Projets</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className='nav-link' to="/#competences">Compétences</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className='nav-link' to="/#contact">Contact</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='me-3'>
          <ThemeToggle/>
        </div>
      </nav>
  )
}

export default Navbar