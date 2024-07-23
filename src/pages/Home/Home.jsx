import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import MovieCard from '../../components/MovieCard/MovieCard';
import { NetflimApi } from '../../api/netflim-api.js';
import s from './style.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const topRatedMovies = await NetflimApi.fetchAll();
        setTopMovies(topRatedMovies.results.slice(0, 5));

        const allMovies = await NetflimApi.fetchAll();
        setMovies(allMovies.results.slice(4, 20));
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={s.wrapperCarousel}>
      <div className="containerGlobal">
        <h1>Les 20 films que l’équipe de Netflim a adorés</h1>
      </div>
      <div className={s.carouselBg}>
        <div className="containerGlobal">
          <Carousel movies={topMovies} />
        </div>
      </div> 
      <div className={s.cardsContainer}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
