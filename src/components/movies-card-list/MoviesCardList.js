import React from 'react';
import './moviesCardList.css';

// Компоненты
import MoviesCard from './movies-card/MoviesCard';

import cardImg1 from '../../images/cards/movies-card-1.jpg';
import cardImg2 from '../../images/cards/movies-card-2.jpg';
import cardImg3 from '../../images/cards/movies-card-3.jpg';
import cardImg4 from '../../images/cards/movies-card-4.jpg';
import cardImg5 from '../../images/cards/movies-card-5.jpg';
// import cardImg6 from '../../images/cards/movies-card-6.jpg';
// import cardImg7 from '../../images/cards/movies-card-7.jpg';

function MoviesCardList({ moviesList }) {
  const imgList = [
    cardImg1, cardImg2, cardImg3,
    cardImg4, cardImg5,
  ];

  return (
    <section className='movies-card movies_margin_center'>
      <ul className='movies-card__list'>
        {
          moviesList.map((movie, i) => {
            return (
              <li key={ movie._id } className='movies-card__item'>
                <MoviesCard movies={ movie } cardImg={ imgList[i] } />
              </li>
            )
          })
        }
      </ul>
    </section>
  );
}

export default MoviesCardList;
