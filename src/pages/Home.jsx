import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Modal from "../components/Modal";

export default function Home() {
  const [githubData, setGithubData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/anthonyporquet-ctrl")
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <>
      <Hero openModal={() => setIsModalOpen(true)} />

      {isModalOpen && githubData && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{githubData.name}</h2>
            <p>Repos publics : {githubData.public_repos}</p>
            <p>Followers : {githubData.followers}</p>

            <a href={githubData.html_url} target="_blank" rel="noreferrer">
             Voir GitHub
            </a>

            <button onClick={() => setIsModalOpen(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}