import React from 'react';
import './moviesCardList.css';

// Компоненты
import MoviesCard from './movies-card/MoviesCard';
import Preloader from '../preloader/Preloader';

function MoviesCardList({ moviesList, activePreloder }) {
  return (
    <section className='movies-card movies_margin_center'>
      <ul className='movies-card__list'>
        {
          activePreloder ?
            <Preloader />
          : moviesList.length === 0 ?
            <p className='movies-card__mesage'>
              Пусто
            </p>
          :
            moviesList.map((movie, i) => {
              return (
                <li key={ movie._id } className='movies-card__item'>
                  <MoviesCard movies={ movie } />
                </li>
              )
            })
        }
      </ul>
    </section>
  );
}

export default MoviesCardList;
