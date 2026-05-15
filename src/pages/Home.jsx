import { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import monImage from "../assets/john-doe-about.jpg";

export default function Home() {
  const [githubData, setGithubData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/anthonyporquet-ctrl")
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  if (!githubData) {
  return <p>Chargement du profil GitHub...</p>;
  }

  return (
    <>
      <Hero openModal={() => setOpen(true)} />

      <Modal open={open} close={() => setOpen(false)}>

                  <h2 className="modal-title">Mon profil GitHub</h2>

          <div className="modal-divider"></div>

          <div className="modal-content">

            <img src={githubData.avatar_url} />

            <div className="modal-info">
              <p>Pseudo : {githubData.login}</p>
              <p>Adresse : {githubData.location}</p>
              <p>Description : {githubData.bio}</p>
              <p>Repos : {githubData.public_repos}</p>
              <p>Followers : {githubData.followers}</p>
              <p>Following : {githubData.following}</p>
            </div>

          </div>

          <div className="modal-divider"></div>

          <div className="modal-footer">
            <button onClick={() => setOpen(false)}>
              Fermer
            </button>
          </div>
          
      </Modal>

      <div className="cadre">

        <article className="apropos">

          <h3>A propos</h3>
            <div className="bg-primary modal-divider2"></div>

          <img src={monImage} alt="mon image" />

          <p>Lorem ipsum dolor sit amet consectur adipisicing elit. Optio, necessitatibus consectur tempore perferendis nostrum, edelectus reiciendis impedit aut iure eniem placeat? Natus, neque at?</p>
          <p>Lorem ipsum dolor sit amet consectur adipisicing elit. Optio, necessitatibus consectur tempore perferendis nostrum, edelectus reiciendis impedit aut iure eniem placeat? Natus, neque at?</p>
          <p>Lorem ipsum dolor sit amet consectur adipisicing elit. Optio, necessitatibus consectur tempore perferendis nostrum, edelectus reiciendis impedit aut iure eniem placeat? Natus, neque at?</p>

        </article>

        <article className="competence">

          <h3>Mes compétences</h3>
          
            <div className="bg-primary modal-divider2"></div>

            <div className="skill">
              <p>HTML 90%</p>
              <div className="bar"><div className="fill html"></div></div>
            </div>

            <div className="skill">
              <p>CSS 80%</p>
              <div className="bar"><div className="fill css"></div></div>
            </div>

            <div className="skill">
              <p>JAVASCRIPT 70%</p>
              <div className="bar"><div className="fill js"></div></div>
            </div>

            <div className="skill">
              <p>PHP 60%</p>
              <div className="bar"><div className="fill php"></div></div>
            </div>

            <div className="skill">
              <p>REACT 50%</p>
              <div className="bar"><div className="fill react"></div></div>
            </div>
        
        </article>
      </div>
    </>
  );
}