import React from 'react';
import './moviesCard.css';

// Компоненты
import MovieSave from './movie-save/MovieSave';
import MovieDelete from './movie-delete/MovieDelete';

function MoviesCard({ movies, cardImg }) {
  const {
    duration,
    nameRU,
    save
  } = movies;

  return (
    <div className='movie'>
      <div className='movie__content'>
        <h2 className='movie__title'>
          { nameRU }
        </h2>
        <p className='movie__desc'>
          { duration }
        </p>
        {
          // Пока так пусть будет
          typeof save === 'undefined' ?
          <MovieDelete /> :
          <MovieSave save={ save } />
        }
      </div>
      <img
        alt='Фильм'
        src={ cardImg }
        className='movie__img'
      />
    </div>
  );
}

export default MoviesCard;
