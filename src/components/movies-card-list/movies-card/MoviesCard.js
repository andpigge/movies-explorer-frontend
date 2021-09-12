import React from 'react';
import './moviesCard.css';

// Пользовательский хук
import useMobuleCards from '../../../utils/custom-hooks/useMobuleCards';

function MoviesCard({ movies, children }) {
  const isMobuleCards = useMobuleCards();

  const {
    duration,
    imgDesc,
    imgModule,
    nameRU,
    trailerLink,
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
          children
        }
      </div>
      <a
        href={ trailerLink }
        target='_blank'
        rel="noreferrer"
        className='movie__link'
      >
        <img
          alt='Фильм'
          src={ isMobuleCards ? imgModule : imgDesc }
          className='movie__img'
        />
      </a>
    </div>
  );
}

export default MoviesCard;
