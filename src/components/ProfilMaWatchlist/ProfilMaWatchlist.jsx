import React from 'react';
import ProfilVignette from '../ProfilVignette/ProfilVignette.jsx';
import s from './style.module.css'; // Importez le fichier CSS module

const MaWatchlist = ({ movies }) => {
    return (
        <div className={s.profilWatchContainer}>
            <p className={s.profilTitre}>Ma Watchlist</p>
            <div className={s.grid}>
            {movies && movies.length > 0 ? (
                movies.map(movie => (
                    <ProfilVignette 
                        key={movie.id} 
                        id={movie.id} // Passez l'ID du film
                        title={movie.title} 
                        posterPath={movie.poster_path} 
                    />
                ))
            ) : (
                <p>No movies available in Ma Watchlist</p>
            )}
        </div>
        </div>
    );
};

export default MaWatchlist;