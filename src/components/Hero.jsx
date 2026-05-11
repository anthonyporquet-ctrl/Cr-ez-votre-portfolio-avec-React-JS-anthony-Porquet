import "./Hero.css";

export default function Hero({ openModal }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bonjour, je suis Anthony Porquet</h1>
        <h2>Développeur web full stack</h2>

        <button onClick={openModal}>
          En savoir plus
        </button>
      </div>
    </section>
  );
}