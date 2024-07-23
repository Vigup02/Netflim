import React from 'react';
import { Link} from 'react-router-dom';

import s from './style.module.css';

const Footer = () => {

  return (
    <footer>
        <div className={s.containerFooter}>
            <Link to="/" className={s.logo}></Link>
            <p className={s.copyright}>2024 © Tous droits réservés</p>
        </div>
    </footer>
  );


};


export default Footer;