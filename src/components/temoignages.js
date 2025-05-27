// src/components/Temoignages.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Import du carrousel
import './Temoignages.css';

// Styles pour react-slick (à importer une fois dans App.js ou index.js)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultTemoignages = [
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
  const [temoignages, setTemoignages] = useState(() => {
    const saved = localStorage.getItem('temoignages');
    return saved ? JSON.parse(saved) : defaultTemoignages;
  });
  const [formData, setFormData] = useState({ nom: '', avis: '', note: 5 });

  useEffect(() => {
    localStorage.setItem('temoignages', JSON.stringify(temoignages));
  }, [temoignages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.avis) return;
    const newTemoignage = {
      id: Date.now(),
      nom: formData.nom,
      avis: formData.avis,
      note: Number(formData.note) || 5,
    };
    setTemoignages([...temoignages, newTemoignage]);
    setFormData({ nom: '', avis: '', note: 5 });
  };

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
        <p className="compteur-temoignages">Ils sont déjà {temoignages.length} à avoir suivi le programme</p>
        {temoignages.length > 0 ? (
          <Slider {...settings} className="temoignages-slider">
            {temoignages.map((temoignage) => (
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
        <form className="ajout-temoignage-form" onSubmit={handleSubmit}>
          <h3>Ajoute ton témoignage</h3>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Ton nom" required />
          <textarea name="avis" value={formData.avis} onChange={handleChange} placeholder="Ton avis" required />
          <select name="note" value={formData.note} onChange={handleChange}>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Temoignages;