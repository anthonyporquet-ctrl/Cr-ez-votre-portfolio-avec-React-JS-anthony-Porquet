import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Modal from "../components/Modal";

export default function Home() {
  const [githubData, setGithubData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/anthonyporquet-ctrl")
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <>
      <Hero openModal={() => setOpen(true)} />

      <Modal open={open} close={() => setOpen(false)}>

        <div>
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
        </div>  
      </Modal>
    </>
  );
}