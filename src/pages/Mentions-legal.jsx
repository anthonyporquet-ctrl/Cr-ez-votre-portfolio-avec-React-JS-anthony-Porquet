import "./Mentions-legal.css";
import { Helmet } from "react-helmet-async";
import "bootstrap-icons/font/bootstrap-icons.css"

export default function MentionsLegal() {
  return (
    
    <div className="container my-5">

      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="titre text-center mb-5">
        <h1>Mentions légales</h1>
        <div className="bg-primary contact-divider"></div>
      </div>

      <div className="p-4">

        <div className="accordion" id="legalAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#editor"
              >
                L’éditeur du site
              </button>
            </h2>

            <div
              id="editor"
              className="accordion-collapse collapse show"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
              <p className="ap">Anthony Porquet</p>

            <p>
              <i className="bi bi-map me-2"></i>
              10 rue de Paris
            </p>

            <p>
              <i className="bi bi-geo-alt me-2"></i>
              75000 Paris
            </p>

            <p>
              <i className="bi bi-telephone me-2"></i>
              01 23 45 67 89
            </p>

            <p>
              <i className="bi bi-envelope me-2"></i>
              john.doe@email.com
            </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#host"
              >
                L’hébergeur du site
              </button>
            </h2>

            <div
              id="host"
              className="accordion-collapse collapse"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <p className="fs-4"><strong>alwaysdata</strong></p>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p>
                  <i className="bi bi-globe me-2"></i>
                  <a
                    href="https://www.alwaysdadta.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.alwaysdadta.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#credits"
              >
                Crédits
              </button>
            </h2>

            <div
              id="credits"
              className="accordion-collapse collapse"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <p className="fs-4"><strong>Crédits</strong></p>

                <p>
                  Ce site a été réalisé par Anthony Porquet, étudiant au{" "}
                  <a href="https://eleve.centre-europeen-formation.fr" target="_blank" rel="noopener noreferrer">
                    Centre Européen de formation.
                  </a>
                </p>

                <p className="fst-italic">
                  Les image utilisées sur ce site sont libres de droits et ont été obtenues sur le site{" "}
                  <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                    Pixabay
                  </a>
                </p>

                <p className="fst-italic">
                  Favicon de ce site a été fournie par{" "}
                  <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">
                    John dos Icon erstellt von Freepik - Flaticon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}