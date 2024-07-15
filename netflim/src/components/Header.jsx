// Header.jsx
import React from 'react';
import styles from './style.module.css';
import './Header.css'; // Importez des styles spécifiques si nécessaire

const Header = () => {
  return (
    <header className="header">
      <h1>Mon Application</h1>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
