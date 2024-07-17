// Home.js

import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './style.module.css'; // Assurez-vous d'importer le fichier de styles du carousel

const Home = () => {


  return (
    <div className="home">
      <h1>Carousel de Films</h1>
      <Carousel />
    </div>
  );
  
};

export default Home;
