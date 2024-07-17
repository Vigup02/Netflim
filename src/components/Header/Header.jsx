// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Header = () => {
  return (
    <header>
        <Link to="/" id="logo"></Link>
        <Link class="btnProfile" to="/profil">Mon profil <i class='bx bx-user' ></i></Link>
    </header>
  );
};

export default Header;
