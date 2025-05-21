// Mon composant Footer.js, le pied de page de mon site.
import React from 'react';
import './Footer.css';
// J'utilise react-icons pour les icônes des réseaux sociaux. C'est pratique !
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
        {/* Les trucs légaux, c'est important aussi ! */}
        <div className="footer-links">
            <a href="/mentions-legales">Mentions Légales</a>
            <a href="/politique-confidentialite">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;