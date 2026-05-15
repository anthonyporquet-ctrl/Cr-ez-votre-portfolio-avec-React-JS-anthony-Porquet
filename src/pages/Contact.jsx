import "./Contact.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {
  return (
    <div className="container py-5">

      <div className="titre text-center mb-4">
        <h1>Contact</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire.
        </p>
        <div className="bg-primary contact-divider"></div>
      </div>

      <div className="contact-box">
        <div className="row g-4">
          <div className="col-md-6">
            <h2 className="fw-bold">Formulaire de contact</h2>
            <div className="bg-primary contact-divider2"></div>

            <form>
              <input className="form-control mb-3" type="text" placeholder="Nom" required />
              <input className="form-control mb-3" type="email" placeholder="Email" required />
              <input className="form-control mb-3" type="tel" placeholder="Téléphone" required />
              <input className="form-control mb-3" type="text" placeholder="Sujet" required />
              <textarea className="form-control mb-3" rows="15" placeholder="Votre message" required></textarea>

              <div className="text-center">
                <button className="bg-primary btn btn-primary">
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">

            <h2 className="fw-bold">Coordonnées</h2>
            <div className="bg-primary contact-divider2"></div>
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

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1632434490793!2d2.338486612414283!3d48.87416449947635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3f28fcc371%3A0xbc7fa94944d869d!2s10%20Rue%20de%20Provence%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1778764672523!5m2!1sfr!2sfr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}