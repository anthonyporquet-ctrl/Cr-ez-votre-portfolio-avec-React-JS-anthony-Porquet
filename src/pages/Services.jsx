import banner from "../assets/banner.jpg";
import "./Services.css";
import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";

export default function Services() {
  return (
    <div>

      <img src={banner} alt="Bannière" className="banner" />

      <div className="titre">
        <h1>Mon offre de Services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="bg-primary service-divider"></div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card custom-card h-100 text-center">
              <div className="card-body">
                <FaPaintBrush className="text-primary service-icon"/>
                <h2 className="card-title">UX Design</h2>
                <p className="card-text">
                  L'UX Design est une disipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels,object connectés, etc.) en plaçant l'utilisateur au centre des préocupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card h-100 text-center">
              <div className="card-body">
                <FaCode className="text-primary service-icon"/>
                <h2 className="card-title">Développement web</h2>
                <p className="card-text">
                  Le développement de sites web consiste é créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card h-100 text-center">
              <div className="card-body">
                <FaSearch className="text-primary service-icon"/>
                <h2 className="card-title">Référencement</h2>
                <p className="card-text">
                  Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les resultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}