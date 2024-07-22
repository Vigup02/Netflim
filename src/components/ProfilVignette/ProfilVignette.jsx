import React from 'react';

const ProfilVignette = ({ title, posterPath }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
    return (
        <div style={styles.container}>
            <img src={posterUrl} alt={title} style={styles.poster} />
            <div style={styles.title}>{title}</div>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '200px',
        height: '300px',
        margin: '10px'
    },
    poster: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    title: {
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '5px'
    }
};

export default ProfilVignette;