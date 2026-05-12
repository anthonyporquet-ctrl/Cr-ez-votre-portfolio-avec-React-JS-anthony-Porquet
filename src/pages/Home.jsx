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
        {githubData && (
          <>
            <h2>{githubData.name}</h2>
            <p>Repos publics : {githubData.public_repos}</p>
            <p>Followers : {githubData.followers}</p>
          </>
        )}
      </Modal>
    </>
  );
}