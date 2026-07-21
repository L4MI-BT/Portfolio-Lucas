import ProjectCard from "./ProjectCard"

type Projet = {
  titre: string
  description: string
  technos: string[]
  lien?: string
  document?: string
  statut?: string
}

const projets: Projet[] = [
  {
    titre: 'Lexigle',
    description: "Glossaire d'acronymes collaboratif interne, développé lors de mon stage chez Crédit Agricole Touraine-Poitou (Lab'TP). De la modélisation des données au déploiement.",
    technos: ['ASP.NET MVC', 'EF Core', 'MariaDB', 'Stimulus.js', 'Bootstrap'],
    document: '/BLANCHARD-TOULET_LUCAS_DossierProjet_V2.pdf',
    statut: 'Projet interne, code non partageable',
  },
  {
    titre: 'Grand Angle',
    description: 'Site de musée/galerie avec gestion multilingue du contenu et interface admin.',
    technos: ['Symfony', 'MySQL', 'Bootstrap'],
    lien: 'https://github.com/L4MI-BT/Grand_Angle_Symfony',
  },
  {
    titre: 'Ce portfolio',
    description: 'Le site que tu es en train de regarder ! Développé avec React, TypeScript et Bootstrap.',
    technos: ['React', 'TypeScript', 'Vite', 'Bootstrap'],
    lien: 'https://github.com/L4MI-BT/Portfolio-Lucas',
  },
  {
    titre: 'Reco',
    description: 'Réseau social de recommandations culturelles (musique, films, recettes). Projet personnel en cours de développement.',
    technos: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript'],
    statut: 'En cours de développement',
  },
]

function Projects() {
  return (
    <section id="projets">
      <h2>Projets</h2>
      {projets.map((projet) => (
        <ProjectCard key={projet.titre} projet={projet} />
      ))}
    </section>
  )
}

export default Projects