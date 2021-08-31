import React from 'react';
import './promo.css';

import NavTab from './nav-tab/NavTab';

function Promo() {
  return (
    <div className='background'>
      <section className='promo project__margin-auto'>
        <h1 className='promo__title'>
          Учебный проект студента факультета
          <br/>Веб-разработки.
        </h1>
        <p className='promo__desc'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <NavTab />
      </section>
    </div>
  );
}

export default Promo;
