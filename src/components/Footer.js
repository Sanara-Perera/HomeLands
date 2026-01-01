import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">PrimeHomes</h3>
            <p className="footer-tagline">Find your perfect property in Sri Lanka</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/sanaraperera/" target="_blank" rel="noopener noreferrer" className="social">LinkedIn</a>
              <a href="https://github.com/Sanara-Perera/PrimeHomes" target="_blank" rel="noopener noreferrer" className="social">Github</a>
              <a href="https://www.instagram.com/_sanara_03/" target="_blank" rel="noopener noreferrer" className="social">Instagram</a>
            </div>
            <div className="footer-contact">
              <a href="mailto:info@primehomes.lk">info@primehomes.lk</a>
            </div>
          </div>

          <div className="f-col">
            <h4>Properties</h4>
            <ul>
              <li><a href="#search">Search</a></li>
              <li><a href="#favourites">Favourites</a></li>
            </ul>
          </div>

          
        </div>

        <div className="footer-bottom">
          <div className="legal">© {year} PrimeHomes. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
