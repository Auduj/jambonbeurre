import React from 'react';
import ReactDOM from 'react-dom/client'; // Pour React 18+
// Si tu utilises une version de React antérieure à la 18, ce sera :
// import ReactDOM from 'react-dom';
import './index.css'; // Tes styles globaux pour la page
import App from './App'; // Ton composant principal
import reportWebVitals from './reportWebVitals'; // Optionnel

// Pour React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si tu utilises une version de React antérieure à la 18 :
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();