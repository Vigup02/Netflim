import React from 'react';
import s from './style.module.css';
import ProfilAvatarImage from '../../assets/images/ProfilAvatar.jpg';

const ProfilAvatarInfos = ({ pseudo, historiqueMovies }) => {
    const totalMovies = historiqueMovies.length;

    // Filtrer les films qui ont une durée définie et sont des nombres
    const totalMinutes = historiqueMovies
        .filter(movie => typeof movie.runtime === 'number' && !isNaN(movie.runtime))
        .reduce((total, movie) => total + movie.runtime, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return (
        <div className={s.container}>
            <img 
                src= {ProfilAvatarImage} 
                alt="Profile" 
                className={s.avatar} 
            />
            <div className={s.info}>
                <h3 className={s.pseudo}>{pseudo}</h3>
                <div className={s.pseudo_infos}>
                    <p><span className={s.highlight}>{totalMovies}</span> films regardés</p>
                    <p>Total de durée visionnage: <span className={s.highlight}>{hours} h {minutes} min</span></p>
                </div>
                
            </div>
        </div>
    );
};

export default ProfilAvatarInfos;