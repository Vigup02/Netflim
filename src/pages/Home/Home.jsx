// Home.js

import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import s from './style.module.css';
const Home = () => {


  return (
    <div className={s.carouselBg}>
      <div className={s.containerGlobal}>
        <Carousel />
      </div>
    </div>
  );
  
};

export default Home;
