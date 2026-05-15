import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-column">
        <h3>Anthony Porquet</h3>
        <p>123 rue du Dev, Paris</p>
        <p>06 00 00 00 00</p>

        <div className="socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg className="icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8-.7 2.2-1.1-.8-.1-1.6-.3-2.3-.9-.6-.5-1-1.2-1-2 0-.5.1-1 .4-1.4-.2-.4-.4-1-.4-1.7 0 0 .6-.2 1.9.7.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.3-.9 1.9-.7 1.9-.7.2.7.2 1.3-.1 1.7.3.4.4.9.4 1.4 0 .8-.3 1.5-1 2-.7.6-1.5.8-2.3.9.5.5 1.1 1.3 2.2 1.1 0 0 .6-.1 1.7-1.2 0 0 .6-.1 1.7.7 0 0 .1 0-.1.7 0 0-.6 2-3.7 1.3v2.2c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.2 5.4 18.3.5 12 .5z"
              />
            </svg>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <svg className="icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.5 5.9c-.8.4-1.6.6-2.5.8.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.9-2.6 1.1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3 4.8a4 4 0 0 0 1.2 5.3c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 4 3-1.6 1.2-3.7 1.8-5.8 1.5A11.2 11.2 0 0 0 9 20c7.3 0 11.3-6 11.3-11.2v-.5c.8-.6 1.5-1.3 2.2-2.1z"
              />
            </svg>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v6zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h3>Navigation</h3>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-column">
        <h3>Mes dernière réelisations</h3>
        <a href="/portfolio">Fresh Food</a>
        <a href="/portfolio">Restaurant Akira</a>
        <a href="/portfolio">Espace bien-être</a>
        <a href="/portfolio">SEO</a>
        <a href="/portfolio">Création d'une API</a>
        <a href="/portfolio">Maquette d'un site web</a>
      </div>
    </footer>
  );
}