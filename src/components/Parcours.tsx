function Parcours() {
  return (
    <section id="parcours">
      <h2 className="text-center mb-5">Parcours</h2>

      <div className="parcours-grid">
        <div>
          <h3 className="text-center mb-4">Expériences</h3>
          <div className="timeline">

            <div className="timeline-item">
              <span className="timeline-date">Avril-Mai 2026</span>
              <h4>Développeur stagiaire</h4>
              <p>Crédit Agricole Touraine-Poitou – Lab'TP, Poitiers</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2022-2025</span>
              <h4>Éducateur de nuit</h4>
              <p>Maison d'enfance de Salvert (MECS), Poitiers</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2019-2021</span>
              <h4>Chef de poste adjoint / Surveillant de baignade</h4>
              <p>Lac de Saint-Cyr, Poitiers</p>
            </div>

          </div>
        </div>

        <div>
          <h3 className="text-center mb-4">Formations</h3>
          <div className="timeline">

            <div className="timeline-item">
              <span className="timeline-date">2025-2026</span>
              <h4>Titre Pro Développeur Web et Web Mobile</h4>
              <p>ISFAC</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2024-2025</span>
              <h4>CAP Cuisine</h4>
              <p>L'École Internationale du Savoir-faire Français</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2021-2022</span>
              <h4>Licence Arts du Spectacle - Cinéma</h4>
              <p>Faculté de Poitiers</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2016-2019</span>
              <h4>BAC mention AB, spécialité maths, option cinéma</h4>
              <p>Loudun</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Parcours