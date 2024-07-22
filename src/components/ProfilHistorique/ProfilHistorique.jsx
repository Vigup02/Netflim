import React from 'react';
import ProfilVignette from '../ProfilVignette/ProfilVignette.jsx';

const ProfilHistorique = ({ movies }) => {
    return (
        <div style={styles.grid}>
            {movies && movies.length > 0 ? (
                movies.map(movie => (
                    <ProfilVignette 
                        key={movie.id} 
                        title={movie.title} 
                        posterPath={movie.poster_path} 
                    />
                ))
            ) : (
                <p>No movies available in Historique</p>
            )}
        </div>
    );
};

const styles = {
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
};

export default ProfilHistorique;