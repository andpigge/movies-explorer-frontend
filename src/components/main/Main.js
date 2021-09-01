import React from 'react';
import './main.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Promo from './promo/Promo';
import AboutProject from './about-project/AboutProject';
import Techs from './techs/Techs';
import AboutMe from './about-me/AboutMe';

function Main() {
  return (
    <>
      <Header />
      <main className='project'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
