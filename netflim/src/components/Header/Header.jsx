// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import './style.module.css'; // Importez des styles spécifiques si nécessaire

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/film">Film</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
