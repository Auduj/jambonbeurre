// Mon composant FAQ.js, pour répondre aux questions les plus courantes.
import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Qu’est-ce que le coaching privé ?',
    reponse: 'Le coaching privé est un accompagnement personnalisé où nous travaillons ensemble pour définir vos objectifs, identifier les obstacles et mettre en place des stratégies pour les atteindre. Les sessions sont confidentielles et adaptées à vos besoins spécifiques.'
  },
  {
    question: 'Comment accéder au PDF complet après achat ?',
    reponse: 'Une fois votre achat confirmé pour une offre incluant le PDF premium, vous recevrez un lien de téléchargement direct par email. Vous pourrez également y accéder depuis votre espace client (si applicable à l\'avenir).'
  },
  {
    question: 'Qu’est-ce qui est inclus dans l’offre gratuite (extrait PDF) ?',
    reponse: 'L\'extrait PDF gratuit contient généralement un chapitre d\'introduction et quelques pages clés du guide complet. Cela vous donne un excellent aperçu des thèmes abordés, de mon style et de la valeur que vous pouvez attendre de la version complète.'
  },
  {
    question: 'Quels types de résultats puis-je attendre ?',
    reponse: 'Les résultats varient en fonction de vos objectifs et de votre engagement. Cependant, mes clients rapportent généralement une meilleure clarté, une confiance accrue, l\'atteinte d\'objectifs spécifiques, et une amélioration globale de leur [domaine de coaching].'
  },
  {
    question: 'Comment se déroule une session de coaching ?',
    reponse: 'Nos sessions de coaching se déroulent généralement en ligne (visioconférence) et durent environ 1 heure. Nous commençons par faire le point sur vos progrès, discutons des défis rencontrés, explorons de nouvelles stratégies et définissons des actions claires pour la période suivante.'
  }
];

const FAQItem = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`faq-item ${faq.open ? 'open' : ''}`}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
        <span className="faq-icon">{faq.open ? '-' : '+'}</span>
      </div>
      {faq.open && <div className="faq-reponse">{faq.reponse}</div>}
    </div>
  );
};

const FAQ = () => {
  const [faqs, setFaqs] = useState(
    faqData.map(item => ({ ...item, open: false }))
  );

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false; // Optionnel : ça ferme les autres questions quand j'en ouvre une. Pratique !
      }
      return faq;
    }));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>Questions Fréquentes (FAQ)</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;