// src/components/Offres.js
import React from 'react';
import './Offres.css';
// MODIFICATION : Importer l'icône
import { FaCheckCircle } from 'react-icons/fa';

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
    actionLink: '/pdf/extrait-gratuit.pdf', // MODIFICATION : Assurez-vous que ce chemin est correct ou pointe vers #inscription
    isGratuit: true,
    downloadName: "Extrait_JambonBeurre_Coaching.pdf" // Ajout pour l'attribut download
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
    tarif: 'XXX €', // Remplacez par votre tarif
    actionText: 'Choisir cette offre',
    actionLink: '#inscription', // Lien vers le formulaire
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
    tarif: 'YYY €', // Remplacez par votre tarif
    actionText: 'Choisir cette offre',
    actionLink: '#inscription',
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
    tarif: 'ZZZ €', // Remplacez par votre tarif
    actionText: 'Choisir cette offre',
    actionLink: '#inscription',
  },
];

const Offres = () => {
  return (
    <section id="offres" className="offres-section">
      <div className="container">
        <h2>Mes Offres de Coaching et PDF</h2>
        <p className="section-subtitle">Choisissez l'accompagnement qui correspond le mieux à vos ambitions.</p>
        <div className="offres-grid">
          {offresData.map((offre) => (
            // MODIFICATION : Ajout de la classe 'offre-populaire' pour l'offre de 3 mois par exemple
            <div key={offre.id} className={`offre-carte ${offre.isGratuit ? 'offre-gratuite' : ''} ${offre.id === '3mois' ? 'offre-populaire' : ''}`}>
              <h3>{offre.titre} {offre.type && <span className="offre-type">{offre.type}</span>}</h3>
              {/* ... reste du JSX ... */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offres;