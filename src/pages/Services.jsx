import banner from "../assets/banner.jpg";
import "./Services.css";

export default function Services() {
  return (
    <div>
      <img src={banner} alt="Bannière" className="banner"/>
    
      <div className="titre">
        <h1>Mon offre de Services</h1>

        <p>Voici les prestations sur lesquelles je peux intervenir</p>

        <div className="modal-divider"></div>
      </div>

      <div className="services-container">
        <article className="cadrage">
          <h2>UX Design</h2>
          <p>L'UX Design est une disipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels,object connectés, etc.) en plaçant l'utilisateur au centre des préocupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
        </article>
      

      
        <article className="cadrage">
          <h2>Développement web</h2>
          <p>Le développement de sites web consiste é créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).</p>
        </article>
      

      
        <article className="cadrage">
          <h2>Référencement</h2>
          <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les resultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
        </article>
      </div>
      
    </div>
  );
}