// src/components/APropos.js
import React from 'react';
import Slider from 'react-slick';
import './APropos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// REMPLACEZ par vos vraies images
const screenshots = [
  { id: 1, src: '/images/screenshot1.jpg', alt: 'Description de la preuve 1' },
  { id: 2, src: '/images/screenshot2.jpg', alt: 'Description de la preuve 2' },
  { id: 3, src: '/images/screenshot3.jpg', alt: 'Description de la preuve 3' },
  // Ajoute d'autres screenshots
];

const APropos = () => {
  const settings = {
    dots: true,
    infinite: screenshots.length > 1, // Infinite seulement si plus d'une image
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: screenshots.length > 1, // Autoplay seulement si plus d'une image
    autoplaySpeed: 4000, // Augmenté pour laisser le temps de voir
    fade: true,
  };

  return (
    <section id="apropos" className="apropos-section">
      <div className="container">
        <div className="apropos-content">
          <div className="apropos-text">
            <h2>À Propos de JambonBeurre</h2>
            {/* MODIFICATION : Texte à remplacer par votre contenu */}
            <p>
              Coach passionné avec plus de <strong>[X années]</strong> d'expérience dans <strong>[Votre Domaine]</strong>, j'ai aidé des dizaines de clients à surmonter leurs blocages et à atteindre des objectifs qu'ils pensaient hors de portée. Mon approche est directe, personnalisée et axée sur des résultats concrets.
            </p>
            <h3>Mon Parcours & Expertise</h3>
            <p>
              Anciennement <strong>[Votre Ancien Poste/Domaine]</strong>, j'ai moi-même traversé <strong>[Défi que vous avez relevé]</strong>, ce qui m'a donné une compréhension profonde des challenges que vous rencontrez. J'ai développé une méthode unique, la <strong>[Nom de votre méthode, si applicable]</strong>, qui combine <strong>[Technique 1]</strong>, <strong>[Technique 2]</strong> et une bonne dose de pragmatisme.
            </p>
            <p>
              Mon expertise se concentre sur <strong>[Expertise 1]</strong>, <strong>[Expertise 2]</strong>, et l'art de transformer les idées en actions tangibles.
            </p>
            <h3>Votre Transformation</h3>
            <p>
              Mon objectif est de vous fournir les outils, la clarté et la motivation nécessaires pour que vous puissiez non seulement atteindre vos rêves, mais aussi construire une confiance inébranlable en vos capacités. Ensemble, nous allons lever les freins et tracer une feuille de route claire vers votre succès.
            </p>
          </div>

          {/* MODIFICATION : Conteneur pour la photo et le carousel */}
          <div className="apropos-visuals">
            <div className="profile-photo-container">
              <img src="/images/profile.jpg" alt="Votre Photo - JambonBeurre" className="profile-photo" />
            </div>
            {screenshots.length > 0 && (
              <>
                <h3>Mon Niveau en Action (Quelques Preuves)</h3>
                <div className="carousel-container">
                  <Slider {...settings}>
                    {screenshots.map(screen => (
                      <div key={screen.id}>
                        <img src={screen.src} alt={screen.alt} className="screenshot-image" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </>
            )}
            {screenshots.length === 0 && (
              <p>Les preuves de mon niveau seront bientôt disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default APropos;