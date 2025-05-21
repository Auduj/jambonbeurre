// Mon composant Accueil.js, la première chose que les gens voient !
import React from 'react';
import './Accueil.css'; // Mon fichier CSS juste pour ce composant.

const Accueil = () => {
  return (
    <section id="accueil" className="accueil-section">
      <div className="container">
        <div className="accueil-content">
          <div className="accueil-text">
            <h1>Bienvenue chez JambonBeurre Coaching !</h1>
            <p className="subtitle">Transformez votre potentiel en succès grâce à un accompagnement personnalisé et des ressources exclusives.</p>
            <p>Découvrez comment je peux vous aider à atteindre vos objectifs, que ce soit à travers un coaching privé sur mesure ou des guides PDF actionnables.</p>
            <div className="cta-buttons">
              <a href="#offres" className="btn btn-primary">Découvrir mes offres</a>
              <a href="#inscription" className="btn btn-secondary">Recevoir l'extrait PDF gratuit</a>
            </div>
          </div>
          <div className="accueil-video">
            <video controls width="100%" poster="/images/video-poster.jpg"> {/* Optionnel : une petite image qui s'affiche avant de lancer la vidéo. */}
              <source src="/video/intro-video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accueil;