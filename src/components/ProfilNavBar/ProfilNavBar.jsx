// src/components/ProfilNavbar/ProfilNavbar.jsx

import React from 'react';

const ProfilNavbar = ({ selectedTab, setSelectedTab }) => {
    return (
        <div style={styles.navbar}>
            <div 
                style={{ ...styles.navItem, borderBottom: selectedTab === 'profil' ? '2px solid pink' : 'none' }}
                onClick={() => setSelectedTab('profil')}
            >
                Mon Profil
            </div>
            <div 
                style={{ ...styles.navItem, borderBottom: selectedTab === 'historique' ? '2px solid pink' : 'none' }}
                onClick={() => setSelectedTab('historique')}
            >
                Historique
            </div>
            <div 
                style={{ ...styles.navItem, borderBottom: selectedTab === 'watchlist' ? '2px solid pink' : 'none' }}
                onClick={() => setSelectedTab('watchlist')}
            >
                Ma Watchlist
            </div>
            <div 
                style={{ ...styles.navItem, borderBottom: selectedTab === 'infos' ? '2px solid pink' : 'none' }}
                onClick={() => setSelectedTab('infos')}
            >
                Mes Informations
            </div>
        </div>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
    },
    navItem: {
        padding: '10px 20px',
        cursor: 'pointer',
    }
};

export default ProfilNavbar;