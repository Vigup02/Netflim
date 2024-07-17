// Carousel.jsx

import React, { useState, useEffect } from 'react';
import FilmCarousel from '../../components/FilmCarousel/FilmCarousel'; // Composant FilmCarousel
import s from './style.module.css'; // Styles CSS modules pour ce composant
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const Carousel = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetchMoviesFromAPI();
    }, []);
  
    const fetchMoviesFromAPI = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3a71a64794e22e5d53730973eb8ec3df`);
        const data = await response.json();
        setMovies(data.results.slice(0, 5)); // Récupère seulement les 5 premiers films
      } catch (error) {
        console.error('Erreur lors de la récupération des films:', error);
      }
    };
  
      return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide">
            <FilmCarousel movie={movie} />
          </div>
        </SwiperSlide>
      ))}
      </Swiper>

      );
    };
    


    export default Carousel;