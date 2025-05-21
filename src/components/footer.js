// src/components/Footer.js
import React from 'react';
import './Footer.css';
// Tu peux utiliser des icônes SVG ou une librairie comme react-icons (npm install react-icons)
import { FaDiscord, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        <div className="social-links">
          <a href="LIEN_DISCORD" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <FaDiscord />
          </a>
          <a href="LIEN_YOUTUBE" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="LIEN_INSTAGRAM" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="LIEN_TIKTOK" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
        <p className="copyright">
          &copy; {year} JambonBeurre. Tous droits réservés.
        </p>
        {/* Optionnel: Liens vers Politique de confidentialité, Mentions légales */}
        <div className="footer-links">
            <a href="/mentions-legales">Mentions Légales</a>
            <a href="/politique-confidentialite">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;