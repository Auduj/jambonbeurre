import React from 'react';
import './App.css'; // Styles globaux

import Accueil from './components/accueil';
import Offres from './components/offres';
import Inscription from './components/inscription';
import Temoignages from './components/temoignages';
import APropos from './components/apropos';
import FAQ from './components/faq';
import Footer from './components/footer';

// N'oublie pas d'importer les CSS de react-slick si tu l'utilises
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      {/* Optionnel: Un composant Header/Navbar pour la navigation One Page */}
      <header className="main-header">
        <nav>
          <a href="#accueil" className="nav-logo">JambonBeurre</a>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#offres">Offres</a></li>
            <li><a href="#apropos">À Propos</a></li>
            <li><a href="#temoignages">Témoignages</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#inscription" className="nav-cta">S'inscrire</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Accueil />
        <Offres />
        <APropos />
        <Temoignages />
        <FAQ />
        <Inscription /> {/* Placé ici pour qu'il soit après les offres et la FAQ si on y réfère */}
      </main>

      <Footer />
    </div>
  );
}

export default App;