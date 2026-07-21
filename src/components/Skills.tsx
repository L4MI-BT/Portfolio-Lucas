const competences = {
  backend: ['PHP / Symfony', 'C# / .NET', 'SQL'],
  frontend: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
  outils: ['Git', 'VS Code', 'Docker'],
  decouverte: ['Java', 'Python', 'TypeScript', 'React'],
}

function Skills() {
  return (
    <section id="competences">
      <h2>Compétences</h2>

      <div className="competences-groupe">
        <h3>Back-end</h3>
        <ul>
          {competences.backend.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="competences-groupe">
        <h3>Front-end</h3>
        <ul>
          {competences.frontend.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="competences-groupe">
        <h3>Outils</h3>
        <ul>
          {competences.outils.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="competences-groupe">
        <h3>Notion / découverte</h3>
        <ul>
          {competences.decouverte.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills