function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#accueil">BLANCHARD-TOULET Lucas</a>
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
                <a className="nav-link" href="#a-propos">À propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projets">Projets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#competences">Compétences</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar