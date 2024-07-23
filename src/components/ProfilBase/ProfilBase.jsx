// src/components/ProfilBase/ProfilBase.jsx

import React from 'react';
import ProfilVignette from '../../components/ProfilVignette/ProfilVignette.jsx';
import s from './style.module.css'; // Importez le fichier CSS module

const ProfilBase = ({ historiqueMovies, watchlistMovies, setSelectedTab }) => {
    const getRandomMovies = (moviesArray, numMovies) => {
        const shuffled = [...moviesArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numMovies);
    };

    const randomHistoriqueMovies = getRandomMovies(historiqueMovies, 4);

    const renderMovies = (movies) => {
        return (
            <div className={s.grid}>
                {movies.map(movie => (
                    <ProfilVignette
                        key={movie.id}
                        id={movie.id} // Passez l'ID du film
                        title={movie.title}
                        posterPath={movie.poster_path}
                    />
                ))}
            </div>
        );
    };

    const handleButtonClick = () => {
        setSelectedTab('watchlist');
    };

    return (
        <div className={s.profilBaseContainer}>
            <p className={s.profilTitre}>Mes Favoris</p>
            {renderMovies(randomHistoriqueMovies)}

            <p className={s.profilTitre}>Ma Watchlist</p>
            {renderMovies(watchlistMovies.slice(0, 4))}
            <button className={s.button} onClick={handleButtonClick}>Accéder à ma Watchlist</button>
        </div>
    );
};

export default ProfilBase;
