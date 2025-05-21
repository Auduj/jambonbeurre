// src/components/APropos.js
import React from 'react';
import Slider from 'react-slick';
import './APropos.css'; // Assurez-vous que le CSS est adapté
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// MODIFICATION : Adapter les données pour qu'elles soient textuelles.
// Vous pouvez toujours ajouter un champ 'src' si vous voulez mélanger texte et images.
const performancesData = [
  {
    id: 1,
    type: 'jeu', // Pourrait être utilisé pour styler différemment
    titre: 'World of Warcraft',
    description: 'Top 500 en raid mythique (20 joueurs) & Top 20 DH Havoc en Donjon Mythique+.',
    // src: '/images/wow-performance.jpg', // Optionnel: image de fond ou icône
    // alt: 'Performance World of Warcraft'
  },
  {
    id: 2,
    type: 'jeu',
    titre: 'Apex Legends',
    description: 'Atteinte du Top 500 classement Maître/Prédateur.',
    // src: '/images/apex-performance.jpg',
    // alt: 'Performance Apex Legends'
  },
  {
    id: 3,
    type: 'jeu',
    titre: 'Overwatch 2',
    description: 'Classement Top 500 en tant que joueur polyvalent.',
    // src: '/images/overwatch-performance.jpg',
    // alt: 'Performance Overwatch 2'
  },
  {
    id: 4,
    type: 'jeu',
    titre: 'Marvel Rivals',
    description: 'Actuellement classé parmi les Top 1000 joueurs mondiaux.',
    // src: '/images/marvel-rivals-performance.jpg',
    // alt: 'Performance Marvel Rivals'
  },
  // Ajoutez d'autres performances si nécessaire
];

const APropos = () => {
  const settings = {
    dots: true,
    infinite: performancesData.length > 1,
    speed: 700, // Vitesse de transition un peu plus lente pour le texte
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: performancesData.length > 1,
    autoplaySpeed: 5000, // Plus de temps pour lire le texte
    fade: true,
    adaptiveHeight: true, // Important si les descriptions ont des longueurs variables
  };

  return (
    <section id="apropos" className="apropos-section">
      <div className="container">
        <div className="apropos-content">
          <div className="apropos-text">
            <h2>À Propos de JambonBeurre</h2>
            <p>
              Je m'appelle JambonBeurre, joueur compétitif depuis plusieurs années sur des jeux d'équipe tels que World of Warcraft (Top 500 en raid mythique 20 joueurs et Top 20 Dh Havoc en Donjon), Apex Legends (Top 500) et Overwatch 2 (Top 500), et actuellement classé parmi les Top 1000 mondial sur Marvel Rivals.
            </p>
            <p>
              Fort de cette expérience sur des jeux d'équipe de haut niveau, je vous propose ici un concentré des principales notions à maîtriser pour devenir un joueur plus intelligent, plus rapide et plus impactant.
            </p>
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
              <img src="/images/profile-jambonbeurre.png" alt="JambonBeurre - Coach eSport" className="profile-photo" />
            </div>

            {/* MODIFICATION : Carrousel pour les performances textuelles */}
            {performancesData.length > 0 && (
              <>
                <h3>Mes Performances en Jeu</h3>
                <div className="carousel-container performance-carousel"> {/* Ajout d'une classe spécifique */}
                  <Slider {...settings}>
                    {performancesData.map(perf => (
                      <div key={perf.id} className="performance-slide">
                        {/* Optionnel: si vous avez une image de fond ou une icône pour chaque jeu */}
                        {/* perf.src && <img src={perf.src} alt={perf.alt || perf.titre} className="performance-background-image" /> */}
                        <h4>{perf.titre}</h4>
                        <p>{perf.description}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </>
            )}
            {performancesData.length === 0 && (
              <p className="text-center">Mes performances seront bientôt détaillées ici.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default APropos;