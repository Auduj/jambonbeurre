import React from 'react';
import './App.css'; // Mes styles globaux, pour que tout soit cohérent.

import Accueil from './components/Accueil';
import Offres from './components/Offres';
import Inscription from './components/Inscription';
import Temoignages from './components/Temoignages';
import APropos from './components/APropos';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';

// Important : ne pas oublier d'importer les CSS de react-slick, sinon ça ne marchera pas bien.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      {/* Ma barre de navigation pour naviguer facilement sur la page. */}
      <header className="main-header">
        <nav>
          <a href="#accueil" className="nav-logo">JambonBeurre</a>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#offres">Offres</a></li>
            <li><a href="#apropos">À Propos</a></li>
            <li><a href="#temoignages">Témoignages</a></li>
            <li><a href="#blog">Blog</a></li>
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
        <Blog />
        <FAQ />
        <Inscription /> {/* J'ai mis le composant Inscription ici, c'est plus logique après les offres et la FAQ. */}
      </main>

      <Footer />
    </div>
  );
}

export default App;