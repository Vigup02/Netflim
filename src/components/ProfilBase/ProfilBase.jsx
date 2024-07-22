import React from 'react';
import ProfilVignette from '../../components/ProfilVignette/ProfilVignette.jsx';

const ProfilBase = ({ historiqueMovies, watchlistMovies }) => {
    const getRandomMovies = (moviesArray, numMovies) => {
        const shuffled = [...moviesArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numMovies);
    };

    const randomHistoriqueMovies = getRandomMovies(historiqueMovies, 4);

    const renderMovies = (movies) => {
        return (
            <div style={styles.grid}>
                {movies.map(movie => (
                    <ProfilVignette
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                    />
                ))}
            </div>
        );
    };

    return (
        <div>
            <h3>Historique </h3>
            {renderMovies(randomHistoriqueMovies)}

            <h3>Ma Watchlist </h3>
            {renderMovies(watchlistMovies.slice(0, 4))}
            <button>Voir plus</button>

        </div>
    );
};

const styles = {
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px'
    }
};

export default ProfilBase;