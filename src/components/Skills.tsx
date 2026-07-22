import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhp, faHtml5, faCss3Alt, faJs, faBootstrap,
  faGitAlt, faDocker, faJava, faPython, faReact, faTypescript,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type Competence = {
  nom: string
  icone: IconDefinition
  couleur: string
}

const competences: Record<string, Competence[]> = {
  backend: [
    { nom: 'PHP / Symfony', icone: faPhp, couleur: '#777bb4' },
    { nom: 'C# / .NET', icone: faCode, couleur: '#684d9a' },
    { nom: 'SQL', icone: faDatabase, couleur: '#4479a1' },
  ],
  frontend: [
    { nom: 'HTML5', icone: faHtml5, couleur: '#e34f26' },
    { nom: 'CSS', icone: faCss3Alt, couleur: '#1572b6' },
    { nom: 'JavaScript', icone: faJs, couleur: '#f7df1e' },
    { nom: 'Bootstrap', icone: faBootstrap, couleur: '#7952b3' },
  ],
  outils: [
    { nom: 'Git', icone: faGitAlt, couleur: '#f05032' },
    { nom: 'VS Code', icone: faCode, couleur: '#007acc' },
    { nom: 'Docker', icone: faDocker, couleur: '#2496ed' },
  ],
  decouverte: [
    { nom: 'Java', icone: faJava, couleur: '#f89820' },
    { nom: 'Python', icone: faPython, couleur: '#3776ab' },
    { nom: 'TypeScript', icone: faTypescript, couleur: '#3178c6' },
    { nom: 'React', icone: faReact, couleur: '#61dafb' },
  ],
}

function Skills() {
  const groupes = [
    { titre: 'Back-end', liste: competences.backend },
    { titre: 'Front-end', liste: competences.frontend },
    { titre: 'Outils', liste: competences.outils },
    { titre: 'Notion / découverte', liste: competences.decouverte },
  ]

  return (
    <section id="competences">
      <h2 className="text-center mb-5">Compétences</h2>

      {groupes.map((groupe) => (
        <div className="mb-5" key={groupe.titre}>
          <h3 className="text-center mb-4">{groupe.titre}</h3>
          <div className="skill-grid">
            {groupe.liste.map((comp) => (
              <div className="skill-card" key={comp.nom}>
                <FontAwesomeIcon
                  icon={comp.icone}
                  style={{ color: comp.couleur }}
                  className="skill-icon"
                />
                <span>{comp.nom}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills