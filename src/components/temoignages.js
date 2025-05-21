// src/components/Temoignages.js
import React from 'react';
import Slider from 'react-slick'; // Import du carrousel
import './Temoignages.css';

// Styles pour react-slick (à importer une fois dans App.js ou index.js)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const temoignagesData = [
  {
    id: 1,
    nom: 'Client Satisfait A',
    photo: '/images/clientA.jpg', // Optionnel
    avis: 'Grâce au coaching de JambonBeurre, j\'ai pu clarifier mes objectifs et mettre en place un plan d\'action concret. Les résultats ont été rapides et impressionnants !',
    note: 5, // Optionnel : une note de 1 à 5
  },
  {
    id: 2,
    nom: 'Client Potentiel B',
    avis: 'L\'extrait PDF m\'a vraiment ouvert les yeux sur des stratégies que je n\'avais pas envisagées. Hâte de découvrir le contenu complet et le coaching !',
    note: 4,
  },
  {
    id: 3,
    nom: 'Adepte Convaincu C',
    photo: '/images/clientC.jpg',
    avis: 'Le professionnalisme et la bienveillance de JambonBeurre sont exceptionnels. Chaque session est une source de motivation et de progression. Je recommande vivement !',
    note: 5,
  },
  // Ajoute plus de témoignages
];

const Temoignages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Afficher 2 témoignages à la fois sur desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // Pour tablettes et mobiles
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="temoignages" className="temoignages-section">
      <div className="container">
        <h2>Ce que disent mes clients</h2>
        {temoignagesData.length > 0 ? (
          <Slider {...settings} className="temoignages-slider">
            {temoignagesData.map((temoignage) => (
              <div key={temoignage.id} className="temoignage-carte">
                {temoignage.photo && <img src={temoignage.photo} alt={temoignage.nom} className="temoignage-photo" />}
                <p className="temoignage-avis">"{temoignage.avis}"</p>
                <p className="temoignage-nom">- {temoignage.nom}</p>
                {/* Optionnel: Afficher des étoiles pour la note */}
                {temoignage.note && (
                  <div className="temoignage-note">
                    {'★'.repeat(temoignage.note)}{'☆'.repeat(5 - temoignage.note)}
                  </div>
                )}
              </div>
            ))}
          </Slider>
        ) : (
          <p>Les témoignages arriveront bientôt !</p>
        )}
      </div>
    </section>
  );
}

export default Temoignages;