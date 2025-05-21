// Mon composant APropos.js, pour parler un peu de moi.
import React from 'react';
import Slider from 'react-slick';
import './APropos.css'; // Bien vérifier que mon CSS est raccord.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// PETITE MODIF : J'ai adapté les données pour qu'elles soient en mode texte.
// Je peux toujours rajouter un champ 'src' si je veux mélanger du texte et des images.
const performancesData = [
  {
    id: 1,
    type: 'jeu', // Ça, ça pourrait me servir pour mettre un style différent plus tard.
    titre: 'World of Warcraft',
    description: 'Top 500 en raid mythique (20 joueurs) & Top 20 DH Havoc en Donjon Mythique+.',
    // src: '/images/wow-performance.jpg', // Optionnel : une image de fond ou une petite icône, pourquoi pas.
    // alt: 'Ma performance sur World of Warcraft'
  },
  {
    id: 2,
    type: 'jeu',
    titre: 'Apex Legends',
    description: 'Atteinte du Top 500 classement Maître/Prédateur.',
    // src: '/images/apex-performance.jpg',
    // alt: 'Ma performance sur Apex Legends'
  },
  {
    id: 3,
    type: 'jeu',
    titre: 'Overwatch 2',
    description: 'Classement Top 500 en tant que joueur polyvalent.',
    // src: '/images/overwatch-performance.jpg',
    // alt: 'Ma performance sur Overwatch 2'
  },
  {
    id: 4,
    type: 'jeu',
    titre: 'Marvel Rivals',
    description: 'Actuellement classé parmi les Top 1000 joueurs mondiaux.',
    // src: '/images/marvel-rivals-performance.jpg',
    // alt: 'Ma performance sur Marvel Rivals'
  },
  // Si j'ai d'autres perfs à montrer, c'est ici.
];

const APropos = () => {
  const settings = {
    dots: true,
    infinite: performancesData.length > 1,
    speed: 700, // J'ai mis une vitesse de transition un peu plus lente pour le texte.
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: performancesData.length > 1,
    autoplaySpeed: 5000, // Ça laisse plus de temps pour lire ce qui est écrit.
    fade: true,
    adaptiveHeight: true, // C'est important si mes descriptions n'ont pas toutes la même longueur.
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

            {/* MA MODIF : Un carrousel pour afficher mes performances en texte. */}
            {performancesData.length > 0 && (
              <>
                <h3>Mes Performances en Jeu</h3>
                <div className="carousel-container performance-carousel"> {/* J'ai ajouté une classe spécifique ici. */}
                  <Slider {...settings}>
                    {performancesData.map(perf => (
                      <div key={perf.id} className="performance-slide">
                        {/* Optionnel : si je veux mettre une image de fond ou une icône pour chaque jeu. */}
                        {/* Si j'ai une image pour la perf (perf.src), alors je l'affiche. */}
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