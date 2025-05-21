// src/components/Offres.js
import React from 'react';
import './Offres.css'; // Assurez-vous que le CSS est lié et stylé comme désiré
import { FaCheckCircle } from 'react-icons/fa'; // Icône pour les détails

// Définition des données des offres (assurez-vous que cela correspond à vos besoins)
const offresData = [
  {
    id: 'gratuit',
    titre: 'Découverte Gratuite',
    type: 'PDF',
    description: 'Obtenez un avant-goût de la valeur que je peux vous apporter avec un extrait exclusif de mon guide PDF complet.',
    details: [
      'Chapitre d\'introduction',
      'Quelques pages clés',
      'Aperçu des stratégies',
    ],
    tarif: 'GRATUIT',
    actionText: 'Télécharger l\'extrait',
    actionLink: '/pdf/extrait-gratuit.pdf', // Assurez-vous que ce chemin est correct
    isGratuit: true,
    downloadName: "Extrait_JambonBeurre_Coaching.pdf"
  },
  {
    id: '1mois',
    titre: 'Coaching Privé - 1 Mois',
    type: 'Coaching',
    description: 'Un accompagnement intensif pour débloquer rapidement votre potentiel et obtenir des résultats concrets.',
    details: [
      '4 sessions de coaching individuel (1h)',
      'Accès prioritaire par email/chat',
      'Plan d\'action personnalisé',
      'Accès complet au PDF premium',
    ],
    avantages: 'Idéal pour un objectif précis ou un coup de boost.',
    tarif: 'XXX €', // REMPLACEZ PAR VOTRE TARIF
    actionText: 'Choisir cette offre',
    actionLink: '#inscription',
    isGratuit: false,
  },
  {
    id: '3mois',
    titre: 'Coaching Privé - 3 Mois',
    type: 'Coaching',
    description: 'Un suivi régulier pour une transformation durable et l\'atteinte d\'objectifs ambitieux.',
    details: [
      '12 sessions de coaching individuel (1h)',
      'Suivi hebdomadaire personnalisé',
      'Accès prioritaire par email/chat',
      'Plan d\'action évolutif',
      'Accès complet au PDF premium',
      'Bonus : Module X exclusif',
    ],
    avantages: 'Le plus populaire pour un changement en profondeur.',
    tarif: 'YYY €', // REMPLACEZ PAR VOTRE TARIF
    actionText: 'Choisir cette offre',
    actionLink: '#inscription',
    isGratuit: false,
  },
  {
    id: '6mois',
    titre: 'Coaching Privé - 6 Mois',
    type: 'Coaching',
    description: 'L\'engagement ultime pour une maîtrise complète et des résultats exceptionnels sur le long terme.',
    details: [
      '24 sessions de coaching individuel (1h)',
      'Suivi bi-hebdomadaire approfondi',
      'Accès VIP illimité par email/chat',
      'Stratégie personnalisée et ajustements continus',
      'Accès complet au PDF premium et toutes ses mises à jour',
      'Bonus : Accès à un groupe privé + Module Y',
    ],
    avantages: 'Pour ceux qui visent l\'excellence et une transformation totale.',
    tarif: 'ZZZ €', // REMPLACEZ PAR VOTRE TARIF
    actionText: 'Choisir cette offre',
    actionLink: '#inscription',
    isGratuit: false,
  },
];

const Offres = () => {
  return (
    <section id="offres" className="offres-section">
      <div className="container">
        <h2>Mes Offres de Coaching et PDF</h2>
        <p className="section-subtitle">Choisissez l'accompagnement qui correspond le mieux à vos ambitions.</p>
        <div className="offres-grid">
          {offresData.map((offre) => {
            // Mettre en avant l'offre de 3 mois avec une classe spéciale.
            const estPopulaire = offre.id === '3mois'; // Détermine si l'offre est populaire
            return (
              <div key={offre.id} className={`offre-carte ${offre.isGratuit ? 'offre-gratuite' : ''} ${estPopulaire ? 'offre-populaire' : ''}`}>
                <h3>{offre.titre} {offre.type && <span className="offre-type">{offre.type}</span>}</h3>
                
                {/* MODIFICATION : Contenu complet de la carte d'offre */}
                <p className="offre-description">{offre.description}</p>
                
                <ul className="offre-details">
                  {offre.details.map((detail, index) => (
                    <li key={index}>
                      <FaCheckCircle className="offre-detail-icon" /> {detail}
                    </li>
                  ))}
                </ul>
                
                {offre.avantages && (
                  <p className="offre-avantages">
                    <strong>Avantage :</strong> {offre.avantages}
                  </p>
                )}
                
                <p className="offre-tarif">{offre.tarif}</p>
                
                {offre.isGratuit ? (
                  <a
                    href={offre.actionLink}
                    className="btn btn-secondary offre-action" // Utilise btn-secondary pour le gratuit
                    download={offre.downloadName}
                  >
                    {offre.actionText}
                  </a>
                ) : (
                  <a href={offre.actionLink} className="btn btn-primary offre-action">
                    {offre.actionText}
                  </a>
                )}
                {/* Fin de la MODIFICATION */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Offres;