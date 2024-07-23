import React from 'react';
import s from './style.module.css';

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
                src="https://via.placeholder.com/150" 
                alt="Profile" 
                className={s.avatar} 
            />
            <div className={s.info}>
                <h3>{pseudo}</h3>
                <p>{totalMovies} films regardés</p>
                <p>Total de durée visionnage: {hours} h {minutes} min</p>
            </div>
        </div>
    );
};

export default ProfilAvatarInfos;