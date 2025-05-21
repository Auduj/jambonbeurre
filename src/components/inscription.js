// src/components/Inscription.js
import React, { useState } from 'react';
import './Inscription.css';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    offre: 'gratuit', // Valeur par défaut
    consent: false,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!formData.consent) {
      setMessage('Vous devez accepter les termes et conditions.');
      return;
    }

    // Ici, vous intégreriez la logique d'envoi vers un backend ou un service tiers (Mailchimp, Sendinblue, etc.)
    // Pour l'exemple, on simule un succès
    console.log('Données du formulaire:', formData);

    if (formData.offre === 'gratuit') {
      setMessage('Merci ! Vous allez recevoir l\'extrait PDF par email (simulation).');
      // Idéalement, déclencher le téléchargement ou l'envoi d'email ici
      // Pour un téléchargement direct après soumission (alternative à l'email) :
      // window.location.href = '/pdf/extrait-gratuit.pdf';
    } else {
      setMessage(`Merci pour votre intérêt pour l'offre ${formData.offre} ! Nous vous contacterons bientôt (simulation).`);
      // Rediriger vers une page de paiement ou afficher des instructions
    }

    setFormData({ nom: '', email: '', offre: 'gratuit', consent: false }); // Reset form
  };

  return (
    <section id="inscription" className="inscription-section">
      <div className="container">
        <h2>Prêt à commencer ?</h2>
        <p className="section-subtitle">Inscrivez-vous pour recevoir votre extrait gratuit ou pour démarrer votre coaching.</p>
        <form onSubmit={handleSubmit} className="inscription-form">
          <div className="form-group">
            <label htmlFor="nom">Nom complet</label>
            <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="offre">Quelle offre vous intéresse ?</label>
            <select id="offre" name="offre" value={formData.offre} onChange={handleChange}>
              <option value="gratuit">Extrait PDF Gratuit</option>
              <option value="1mois">Coaching Privé - 1 Mois</option>
              <option value="3mois">Coaching Privé - 3 Mois</option>
              <option value="6mois">Coaching Privé - 6 Mois</option>
            </select>
          </div>
          <div className="form-group form-group-checkbox">
            <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} required />
            <label htmlFor="consent">J'accepte les termes et conditions et la politique de confidentialité.</label>
          </div>
          <button type="submit" className="btn btn-primary">S'inscrire</button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default Inscription;