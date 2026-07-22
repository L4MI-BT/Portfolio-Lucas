import { Link } from 'react-router-dom'

function MentionsLegales() {
  return (
    <section className="mentions-legales">
      <Link to="/" className="btn btn-outline-primary mb-4">
        ← Retour au portfolio
      </Link>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Lucas Blanchard-Toulet<br />
        Contact : l.blanchard-toulet@outlook.fr
      </p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par GitHub Pages, GitHub Inc.<br />
        88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble de ce site (contenu, design, code) est la propriété de Lucas Blanchard-Toulet, sauf mention contraire.
      </p>
    </section>
  )
}

export default MentionsLegales