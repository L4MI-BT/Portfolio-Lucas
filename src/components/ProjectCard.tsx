import { useState } from 'react'

type Projet = {
  titre: string
  description: string
  technos: string[]
  lien?: string
  document?: string
  statut?: string
}

function ProjectCard({ projet }: { projet: Projet }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="projet-card" onClick={() => setIsFlipped(!isFlipped)}>
      {!isFlipped ? (
        <div className="projet-recto">
          <h3>{projet.titre}</h3>
          <ul className="projet-technos">
            {projet.technos.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="projet-verso">
          <p>{projet.description}</p>
          {projet.lien && (
            <a href={projet.lien} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              Voir le code
            </a>
          )}
          {projet.document && (
            <a href={projet.document} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              Voir mon mémoire
            </a>
          )}
          {projet.statut && <p className="projet-statut">{projet.statut}</p>}
        </div>
      )}
    </div>
  )
}

export default ProjectCard