// src/components/APropos.js
import React from 'react';
import Slider from 'react-slick';
import './APropos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const screenshots = [
  { id: 1, src: '/images/screenshot1.jpg', alt: 'Preuve de niveau 1' },
  { id: 2, src: '/images/screenshot2.jpg', alt: 'Preuve de niveau 2' },
  { id: 3, src: '/images/screenshot3.jpg', alt: 'Preuve de niveau 3' },
  // Ajoute d'autres screenshots
];

const APropos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Effet de fondu pour les images seules
  };

  return (
    <section id="apropos" className="apropos-section">
      <div className="container">
        <div className="apropos-content">
          <div className="apropos-text">
            <h2>À Propos de JambonBeurre</h2>
            <img src="/images/profile.jpg" alt="Votre Photo - JambonBeurre" className="profile-photo" />
            <h3>Mon Parcours & Expertise</h3>
            <p>
              [Décris ici ton parcours : tes expériences, les défis que tu as relevés,
              comment tu en es venu au coaching. Sois authentique et passionné.]
            </p>
            <p>
              [Explique ton expertise spécifique : les domaines dans lesquels tu excelles,
              les méthodes que tu utilises, ce qui te différencie.]
            </p>
            <p>
              Mon objectif est de vous fournir les outils et la motivation nécessaires pour
              [Décris l'impact que tu veux avoir sur tes clients : atteindre leurs rêves, surmonter leurs blocages, etc.].
            </p>
          </div>
          <div className="apropos-carousel">
            <h3>Mon Niveau en Action (Quelques Preuves)</h3>
            {screenshots.length > 0 ? (
              <Slider {...settings}>
                {screenshots.map(screen => (
                  <div key={screen.id}>
                    <img src={screen.src} alt={screen.alt} className="screenshot-image" />
                  </div>
                ))}
              </Slider>
            ) : (
              <p>Les preuves de mon niveau seront bientôt disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default APropos;