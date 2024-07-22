import React, { useEffect, useState } from 'react';
import { NetflimApi } from '../../api/netflim-api.js';
import FilmHero from '../../components/Film_hero/Film_hero.jsx';
import styles from './style.module.css';


const Film = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const movieId = 12; // Remplacez avec l'ID réel du film

  useEffect(() => {
      const fetchMovieData = async () => {
          try {
              const movieData = await NetflimApi.fetchById(movieId);
              const creditsData = await NetflimApi.fetchCredits(movieId);
              setMovie(movieData);
              setCredits(creditsData);
              console.log('Backdrop Path:', movieData.backdropPath);
          } catch (error) {
              console.error('Erreur lors de la récupération des données du film:', error);
              // Gérer l'erreur ici si nécessaire
          }
      };
      fetchMovieData();
  }, [movieId]);

  return (
      <div className={styles['film-body']}>
        {movie && (
          <div className={styles['backgrd']} >
            {/* Affichage de l'image du fond d'écran du film avec l'URL provenant de l'API */}
            <img src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`} alt={movie.title} />             
            <div className={styles['gradient']} />
          </div>
        )}
        <FilmHero movie={movie} credits={credits} className={styles['custom-film-hero']} />
      </div>
  );
};

export default Film;