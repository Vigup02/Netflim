import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css'; // Styles CSS modules pour ce composant

const FilmCarousel = ({ movie }) => {
  const { backdrop_path, title, release_date, vote_average, overview, id } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w780${backdrop_path}`;

  // Conversion de la note en pourcentage
  const votePercentage = Math.round(vote_average * 10);

  return (
    <Link to={`/film/${id}`} className={s.filmCarouselLink}>
      <div className={s.filmCarousel}>
        <div className={s.filmImage}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={s.filmDetails}>
          <h2>{title}</h2>
          <p className={s.filmDate}>{release_date}</p>
          <p className={s.filmNote}>{votePercentage}<span className={s.exponent}>%</span></p> {/* Affichage de la note en pourcentage */}
          <p className={s.overview}>{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default FilmCarousel;
