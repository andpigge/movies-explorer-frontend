import React from 'react';
import './moviesCard.css';

// Компоненты
import MovieSave from './movie-save/MovieSave';
import MovieDelete from './movie-delete/MovieDelete';

// Пользовательский хук
import useMobuleCards from '../../../utils/custom-hooks/useMobuleCards';

function MoviesCard({ movies }) {
  const isMobuleCards = useMobuleCards(601);

  const {
    duration,
    imgDesc,
    imgModule,
    nameRU,
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
          <MovieSave /* save={ save } */ />
        }
      </div>
      <img
        alt='Фильм'
        src={ isMobuleCards ? imgModule : imgDesc }
        className='movie__img'
      />
    </div>
  );
}

export default MoviesCard;
