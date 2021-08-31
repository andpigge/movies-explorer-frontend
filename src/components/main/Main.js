import React from 'react';
import './main.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Promo from './promo/Promo';

function Main() {
  return (
    <>
      <Header />
      <main className='about-project'>
        <Promo />
      </main>
      <Footer />
    </>
  );
}

export default Main;
