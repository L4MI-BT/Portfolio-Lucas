import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <section id="contact">
      <h2 className="text-center mb-5">Contact</h2>

      <div className="contact-content">

        <a href="mailto:l.blanchard-toulet@outlook.fr" className="contact-email">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          l.blanchard-toulet@outlook.fr
        </a>

        <a href="/Blanchard-Toulet_Lucas_CV_alternance.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary contact-cv">
          <FontAwesomeIcon icon={faFileArrowDown} className="me-2" />
          Télécharger mon CV
        </a>

        <div className="contact-links">

          <a href="tel:+33781226680" className="contact-link">
            <FontAwesomeIcon icon={faPhone} />
            07 81 22 66 80
          </a>

          <a href="https://www.linkedin.com/in/lucas-blanchard-toulet-181044240/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>

          <a href="https://github.com/L4MI-BT" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact