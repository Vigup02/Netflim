import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Importez correctement votre store (ne pas déstructurer si c'est un export par défaut)
import App from './App'; // Importez correctement App en tant que composant par défaut
import { Home } from './pages/Home/Home'; // Assurez-vous que le chemin est correct et ne pas déstructurer
import { Profil } from './pages/Profil/Profil'; // Assurez-vous que le chemin est correct et ne pas déstructurer
import { Film } from './pages/Film/Film'; // Assurez-vous que le chemin est correct et ne pas déstructurer

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} /> 
            <Route path="profil" element={<Profil />} />
            <Route path="film" element={<Film />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
