// src/components/APropos.js
import React from 'react';
import Slider from 'react-slick';
import './APropos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// REMPLACEZ par vos vraies images et descriptions alternatives
const screenshots = [
  { id: 1, src: '/images/wow-raid-top500.jpg', alt: 'Top 500 raid mythique World of Warcraft' },
  { id: 2, src: '/images/apex-top500.jpg', alt: 'Top 500 Apex Legends' },
  { id: 3, src: '/images/overwatch-top500.jpg', alt: 'Top 500 Overwatch 2' },
  { id: 4, src: '/images/marvel-rivals-top1000.jpg', alt: 'Top 1000 Marvel Rivals' },
  // Ajoute d'autres screenshots pertinents
];

const APropos = () => {
  const settings = {
    dots: true,
    infinite: screenshots.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: screenshots.length > 1,
    autoplaySpeed: 4000,
    fade: true,
    adaptiveHeight: true, // Utile si les images ont des hauteurs différentes
  };

  return (
    <section id="apropos" className="apropos-section">
      <div className="container">
        <div className="apropos-content">
          <div className="apropos-text">
            <h2>À Propos de JambonBeurre</h2>
            {/* MODIFICATION : Intégration de votre nouveau texte */}
            <p>
              Je m'appelle JambonBeurre, joueur compétitif depuis plusieurs années sur des jeux d'équipe tels que World of Warcraft (Top 500 en raid mythique 20 joueurs et Top 20 Dh Havoc en Donjon), Apex Legends (Top 500) et Overwatch 2 (Top 500), et actuellement classé parmi les Top 1000 mondial sur Marvel Rivals.
            </p>
            <p>
              Fort de cette expérience sur des jeux d'équipe de haut niveau, je vous propose ici un concentré des principales notions à maîtriser pour devenir un joueur plus intelligent, plus rapide et plus impactant.
            </p>
            {/* Vous pouvez ajouter d'autres sections de texte ici si nécessaire, par exemple : */}
            <h3>Ma Philosophie de Coaching</h3>
            <p>
              Je crois fermement qu'au-delà des mécaniques pures, la compréhension stratégique, la communication efficace et un mental solide sont les clés pour exceller. Mon coaching vise à développer ces aspects chez chaque joueur, quel que soit son point de départ.
            </p>
            <h3>Ce que vous allez apprendre</h3>
            <p>
              Grâce à mes guides et à mon accompagnement, vous découvrirez comment analyser vos propres performances, identifier vos points faibles, optimiser votre prise de décision en jeu et maximiser votre impact au sein de votre équipe.
            </p>
          </div>

          <div className="apropos-visuals">
            <div className="profile-photo-container">
              {/* Assurez-vous que cette image existe et est pertinente */}
              <img src="/images/profile-jambonbeurre.jpg" alt="JambonBeurre - Coach eSport" className="profile-photo" />
            </div>
            {screenshots.length > 0 && (
              <>
                <h3>Mes Performances en Jeu</h3>
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
              <p className="text-center">Les preuves de mon niveau seront bientôt disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default APropos;