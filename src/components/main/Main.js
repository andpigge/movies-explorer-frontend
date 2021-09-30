import React, { useRef } from 'react';
import './main.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Promo from './promo/Promo';
import AboutProject from './about-project/AboutProject';
import Techs from './techs/Techs';
import AboutMe from './about-me/AboutMe';
import Portfolio from './about-me/portfolio/Portfolio';

function Main({ loggedIn }) {
  const aboutProjectRef = useRef();

  return (
    <>
      <div className='background-container'>
        <Header loggedIn={ loggedIn } />
      </div>
      <main className='project'>
        <Promo aboutProjectRef={ aboutProjectRef } />
        <AboutProject aboutProjectRef={ aboutProjectRef } />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
