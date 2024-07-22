import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css'; // Importez les styles CSS modules pour ce composant

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, release_date, id } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  
  // Conversion de la note en pourcentage
  const votePercentage = Math.round(vote_average * 10);

  return (
    <Link to={`/film/${id}`} className={s.movieCardLink}>
      <div className={s.movieCard}>
        <div className={s.movieCardImage}>
          <img src={imageUrl} alt={title} className={s.poster} />
          <p className={s.filmNote}>{votePercentage}<span className={s.exponent}>%</span></p> {/* Affichage de la note en pourcentage */}
        </div>
        <div className={s.details}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.filmDate}>{new Date(release_date).getFullYear()}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
