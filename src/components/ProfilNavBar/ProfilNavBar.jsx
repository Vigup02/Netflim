import React from 'react';
import s from './style.module.css'; // Importez le fichier CSS module

const ProfilNavbar = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className={s.navbar}>
            <div 
                className={`${s.navItem} ${selectedTab === 'profil' ? s.selected : ''}`}
                onClick={() => setSelectedTab('profil')}
            >
                Mon Profil
            </div>
            <div 
                className={`${s.navItem} ${selectedTab === 'historique' ? s.selected : ''}`}
                onClick={() => setSelectedTab('historique')}
            >
                Historique
            </div>
            <div 
                className={`${s.navItem} ${selectedTab === 'watchlist' ? s.selected : ''}`}
                onClick={() => setSelectedTab('watchlist')}
            >
                Ma Watchlist
            </div>
            <div 
                className={`${s.navItem} ${selectedTab === 'infos' ? s.selected : ''}`}
                onClick={() => setSelectedTab('infos')}
            >
                Mes Informations
            </div>
        </div>
    );
};

export default ProfilNavbar;