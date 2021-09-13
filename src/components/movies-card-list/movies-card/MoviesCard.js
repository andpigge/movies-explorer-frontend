import React from 'react';
import './moviesCard.css';

// Пользовательский хук
import useMobuleCards from '../../../utils/custom-hooks/useMobuleCards';

function MoviesCard({ movies, MovieSave, MovieDelete }) {
  const isMobuleCards = useMobuleCards();

  const {
    duration,
    image,
    thumbnail,
    nameRU,
    trailer,
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
          MovieSave ?
          <MovieSave movies={ movies } /> :
          <MovieDelete />
        }
      </div>
      <a
        href={ trailer }
        target='_blank'
        rel="noreferrer"
        className='movie__link'
      >
        <img
          alt='Фильм'
          src={ isMobuleCards ? image : thumbnail }
          className='movie__img'
        />
      </a>
    </div>
  );
}

export default MoviesCard;
