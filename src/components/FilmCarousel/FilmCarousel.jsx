// FilmCarousel.js

import React from 'react';
import s from './style.module.css'; // Styles CSS modules pour ce composant

const FilmCarousel = ({ movie }) => {
  const { title, release_date, vote_average, overview, poster_path } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className={s.filmCarousel}>
      <div className={s.filmImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={s.filmDetails}>
        <h2>{title}</h2>
        <p>Date de sortie: {release_date}</p>
        <p>Note: {vote_average}%</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default FilmCarousel;
