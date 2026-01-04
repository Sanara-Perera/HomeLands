/**
 * Footer.js
 * Site-wide footer component displayed on all pages
 * Contains:
 * - Branding and tagline
 * - Social media links
 * - Contact information
 * - Navigation links
 * - Copyright notice
 * 
 * Security: External links use rel="noopener noreferrer" to prevent security risks
 */

import './Footer.css';

export default function Footer() {
  // Get current year dynamically for copyright notice
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top section - brand and navigation */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">PrimeHomes</h3>
            <p className="footer-tagline">Find your perfect property in Sri Lanka</p>
            {/* Social media links - open in new tab with security attributes */}
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/sanaraperera/" target="_blank" rel="noopener noreferrer" className="social">LinkedIn</a>
              <a href="https://github.com/Sanara-Perera/PrimeHomes" target="_blank" rel="noopener noreferrer" className="social">Github</a>
              <a href="https://www.instagram.com/_sanara_03/" target="_blank" rel="noopener noreferrer" className="social">Instagram</a>
            </div>
            {/* Contact email */}
            <div className="footer-contact">
              <a href="mailto:info@primehomes.lk">info@primehomes.lk</a>
            </div>
          </div>
          {/* Navigation column */}
          <div className="f-col">
            <h4>Properties</h4>
            <ul>
              <li><a href="#search">Search</a></li>
              <li><a href="#favourites">Favourites</a></li>
            </ul>
          </div>

          
        </div>
        {/* Bottom section - copyright */}
        <div className="footer-bottom">
          <div className="legal">© {year} PrimeHomes. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
