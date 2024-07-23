import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css'; // Styles CSS modules pour ce composant

// Fonction de troncature
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

// Fonction de formatage des dates
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('fr-FR', options);

  // Remplacer les noms de mois longs par des versions abrégées
  return formattedDate.replace(/(?<=\s)(\w{4,})(?=\s)/g, (match) => match.slice(0, 3) + '.');
};

const FilmCarousel = ({ movie }) => {
  const { backdrop_path, title, release_date, vote_average, overview, id } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w780${backdrop_path}`;

  // Conversion de la note en pourcentage
  const votePercentage = Math.round(vote_average * 10);

  // Limite de caractères pour l'overview
  const maxLength = 200; // Vous pouvez ajuster cette valeur selon vos besoins

  return (
    <Link to={`/film/${id}`} className={s.filmCarouselLink}>
      <div className={s.filmCarousel}>
        <div className={s.filmImage}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={s.filmDetails}>
          <h2>{title}</h2>
          <p className={s.filmDate}>{formatDate(release_date)}</p> {/* Utilisation de la fonction de formatage */}
          <p className={"filmNoteMain"}>{votePercentage}<span className={"exponent"}>%</span></p> {/* Affichage de la note en pourcentage */}
          <p className={s.overview}>{truncateText(overview, maxLength)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FilmCarousel;
