import React, { useState } from 'react';
import styles from './style.module.css'; // Assurez-vous que le fichier de styles est correctement importé

const FilmHero = ({ movie, credits }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);
  
  // Fonction pour calculer la note moyenne en pourcentage
    const calculateVoteAverage = (average) => {
        return (average * 10).toFixed(0); // Multiplie par 10 pour obtenir sur 100, et arrondit à une décimale
    };

     // Fonction pour convertir la durée en heures et minutes
     const formatRuntime = (runtime) => {
      const hours = Math.floor(runtime / 60); // Calcul des heures
      const minutes = runtime % 60; // Calcul des minutes
      return `${hours}h ${minutes}m`; // Retourne la durée formatée
  };

    const handleHeartClick = () => {
      setIsHeartClicked(!isHeartClicked);
    };

    const handleBookmarkClick = () => {
        setIsBookmarkClicked(!isBookmarkClicked);
    };

    return (
      <div className="containerGlobal">
          <div className={styles['film-hero']}>
              {/* Condition pour vérifier si movie est défini */}
              {movie && (
                  <div className={styles['film-details']}>
                    <div className={styles['film-poster']}>
                      {/* Affichage de l'image du film avec l'URL provenant de l'API */}
                      <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                    </div>
                    <div className={styles['film-info']}>
                      <div className={styles['title_header']}>
                        <div className={styles['title']}>
                          <h1 className={styles['title_film']}>{movie.title}</h1>
                          {credits && (
                        <div className={styles['film-credits']}>
                            {/* Mapping à travers la liste des réalisateurs (directors) */}
                            {credits.directors.map(director => (
                                <p key={director}>Réalisé par {director}</p>
                            ))}
                        </div>
                      )}
                        </div>
                        <div className={styles['date-genre-duree']}>
                            {/* Conversion de la date de sortie en format localisé */}
                            <p>{new Date(movie.releaseDate).toLocaleDateString()}</p>
                            {/* Affichage des genres du film en les joignant par une virgule */}
                            <p>{movie.genres.join(', ')}</p>
                            <p>{formatRuntime(movie.runtime)}</p>
                          </div>
                          {/* Appel de la fonction calculateVoteAverage pour afficher la note moyenne */}
                        <div className={styles['eval']}>
                            <div className="filmNoteMain"> {calculateVoteAverage(movie.voteAverage)}<span className={"exponent"}>%</span></div>
                        </div>
                      </div>
                      <div className={styles['summary']}>
                        {movie.tagline && (
                          <h2 className={styles['accroche']}>{movie.tagline}</h2>
                        )}
                        <p className={styles['sum']}>{movie.overview}</p>

                      </div>
                    </div>               
                  </div>
              )}          
          </div>
        </div>
  );
};

export default FilmHero;
