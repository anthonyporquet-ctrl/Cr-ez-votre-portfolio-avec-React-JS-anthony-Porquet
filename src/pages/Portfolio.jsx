import "./Porfolio.css";
import banner from "../assets/banner.jpg";
import freshfood from "../assets/fresh-food.jpg";
import restaurantjaponais from "../assets/restaurant-japonais.jpg";
import espacebienetre from "../assets/espace-bien-etre.jpg";
import seo from "../assets/seo.jpg";
import coder from "../assets/coder.jpg";
import screens from "../assets/screens.jpg";


export default function Portfolio() {
  return (
    <div>
      <img src={banner} alt="Bannière" className="banner"/>

      
      <div className="container py-5">

      <div className="titre">
        <h1>Portfolio</h1>
        <p>Voici quelques-une de mes réalisations.</p>
        <div className="modal-divider"></div>
      </div>

        <div className="row g-4 mt-4">

          <div className="col-md-4">
            <div className="card custom-card">
              <img src={freshfood} className="card-img-top" alt="Fresh Food" />
              <div className="card-body">
                <h2 className="card-title">Fresh Food</h2>
                <p className="card-text">Site de vente de produits frais en ligne</p>
                <button className="btn btn-primary">Voir le site</button>
              </div>
              <div className="card-footer-custom">
                <p>Site réalisé avec PHP et MySQL</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card custom-card">
              <img src={restaurantjaponais} className="card-img-top" alt="Fresh Food" />
              <div className="card-body">
                <h2 className="card-title">Restaurant Akira</h2>
                <p className="card-text">Site de vente de produits frais en ligne</p>
                <button className="btn btn-primary">Voir le site</button>
              </div>
              <div className="card-footer-custom">
                <p>Site réalisé avec WordPress</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="card custom-card">
              <img src={espacebienetre} className="card-img-top" alt="Fresh Food" />
              <div className="card-body">
                <h2 className="card-title">Espace bien-être</h2>
                <p className="card-text">Site de vente de produits frais en ligne</p>
                <button className="btn btn-primary">Voir le site</button>
              </div>
              <div className="card-footer-custom">
                <p>Site réalisé avec LARAVEL</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="card custom-card">
            <img src={seo} className="card-img-top" alt="Fresh Food" />
              <div className="card-body">
                <h2 className="card-title">SEO</h2>
                <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                <button className="btn btn-primary">Voir le site</button>
              </div>
              <div className="card-footer-custom">
                <p>Utilisation des outils SEO</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="card custom-card">
              <img src={coder} className="card-img-top" alt="Fresh Food" />
              <div className="card-body">
                <h2 className="card-title">Création d'une API</h2>
                <p className="card-text">Création d'une API RESTFULL publique</p>
                <button className="btn btn-primary">Voir le site</button>
              </div>
              <div className="card-footer-custom">
                <p>PHP - SYMFONY</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="card custom-card">
              <img src={screens} className="card-img-top" alt="Fresh Food" />
              <div className="card-body">
                <h2 className="card-title">Maquette d'un site web</h2>
                <p className="card-text">Création du prototype d'un site</p>
                <button className="btn btn-primary">Voir le site</button>
              </div>
              <div className="card-footer-custom">
                <p>Réalisé avec FIGMA</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}