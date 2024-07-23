import React, { useEffect, useState } from 'react'; // Importation des hooks useEffect et useState de React
import { useParams } from 'react-router-dom'; // Importation du hook useParams pour accéder aux paramètres de l'URL
import { NetflimApi } from '../../api/netflim-api.js'; // Importation de l'API personnalisée pour récupérer les données des films
import FilmHero from '../../components/Film_hero/Film_hero.jsx'; // Importation du composant FilmHero
import styles from './style.module.css'; // Importation des styles CSS modulaires pour ce composant

// Composant principal Film
const Film = () => {
  const { movieId } = useParams(); // Utilisation de useParams pour obtenir le movieId à partir de l'URL
  const [movie, setMovie] = useState(null); // Déclaration de l'état pour stocker les données du film
  const [credits, setCredits] = useState(null); // Déclaration de l'état pour stocker les crédits du film

  // Effet pour récupérer les données du film et ses crédits lorsque le movieId change
  useEffect(() => {
      const fetchMovieData = async () => {
          try {
              // Appels asynchrones pour récupérer les données du film et ses crédits
              const movieData = await NetflimApi.fetchById(movieId);
              const creditsData = await NetflimApi.fetchCredits(movieId);
              // Mise à jour des états avec les données récupérées
              setMovie(movieData);
              setCredits(creditsData);
              console.log('Backdrop Path:', movieData.backdropPath); // Affichage du chemin de l'image du fond dans la console pour le débogage
          } catch (error) {
              console.error('Erreur lors de la récupération des données du film:', error); // Gestion des erreurs
              // Gérer l'erreur ici si nécessaire
          }
      };
      fetchMovieData(); // Appel de la fonction pour récupérer les données
  }, [movieId]); // Dépendance de l'effet sur movieId, il s'exécutera à chaque changement de movieId

  return (
      <div className={styles['film-body']}>
        {movie && (
          <div className={styles['backgrd']} >
            {/* Affichage de l'image du fond d'écran du film avec l'URL provenant de l'API */}
            <img src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`} alt={movie.title} />
            <div className={styles['gradient']} /> {/* Ajout d'un dégradé sur l'image */}
          </div>
        )}
        {/* Utilisation du composant FilmHero pour afficher les informations du film et les crédits */}
        <FilmHero movie={movie} credits={credits} className={styles['custom-film-hero']} />
      </div>
  );
};

export default Film; // Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application