// Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './style.module.css';

const Header = () => {
  const location = useLocation();
  
  const renderHeaderContent = () => {
    if (location.pathname === '/profil') {
      return ((
        <>
          <Link to="/" className={s.logo}></Link>
          <Link className={s.btnProfile}  to="/">Me déconnecter <i class='bx bx-log-out'></i></Link>
        </>
      ));
    } else if (location.pathname === '/film') {
      return ((
        <>
          <Link to="/" className={s.logo}></Link>
          <Link className={s.btnProfileFilm} to="/film">Mon profil<i className='bx bx-user'></i></Link>
        </>
      ));
    } else {
      return ((
        <>
          <Link to="/" className={s.logo}></Link>
          <Link className={s.btnProfile} to="/profil">Mon profil <i className='bx bx-user'></i></Link>
        </>
      ));
    }
  };

  return (
    <header className="containerGlobal">
      {renderHeaderContent()}
    </header>
  );
};


export default Header;