import { Link } from 'react-router-dom'

function Footer() {
  const anneeActuelle = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>
        © {anneeActuelle} Lucas Blanchard-Toulet
        <span className="footer-separator">|</span>
        <Link to="/mentions-legales">Mentions légales</Link>
      </p>
    </footer>
  )
}

export default Footer