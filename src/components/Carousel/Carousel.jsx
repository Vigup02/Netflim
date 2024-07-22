import React from 'react';
import FilmCarousel from '../../components/FilmCarousel/FilmCarousel';
import s from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Carousel = ({ movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return null; // Ou un message de chargement, à votre choix
  }

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={false}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{ delay: 20000 }}
      className="mySwiper"
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <FilmCarousel movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
