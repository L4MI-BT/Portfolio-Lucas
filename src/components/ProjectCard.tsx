type Projet = {
  titre: string
  description: string
  technos: string[]
  lien?: string
  document?: string
  statut?: string
}

function ProjectCard({ projet }: { projet: Projet }) {
  return (
    <div className="project-card-container">
      <div className="project-card">

        <div className="project-face project-recto">
          <h3>{projet.titre}</h3>
          <div className="projet-technos">
            {projet.technos.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
          <span className="project-hint">Survoler pour en savoir plus</span>
        </div>

        <div className="project-face project-verso">
          <p>{projet.description}</p>
          {projet.lien && (
            <a href={projet.lien} target="_blank" rel="noopener noreferrer">
              Voir le code
            </a>
          )}
          {projet.document && (
            <a href={projet.document} target="_blank" rel="noopener noreferrer">
              Voir mon mémoire
            </a>
          )}
          {projet.statut && <p className="projet-statut">{projet.statut}</p>}
        </div>

      </div>
    </div>
  )
}

export default ProjectCard