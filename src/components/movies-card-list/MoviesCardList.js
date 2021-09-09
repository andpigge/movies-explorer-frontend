import React from 'react';
import './moviesCardList.css';

// Компоненты
import MoviesCard from './movies-card/MoviesCard';

function MoviesCardList({ moviesList }) {

  return (
    <section className='movies-card movies_margin_center'>
      <ul className='movies-card__list'>
        {
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
