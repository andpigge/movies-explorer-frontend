import React from 'react';
import './moviesCard.css';

// Пользовательский хук
import useMobuleCards from '../../../utils/custom-hooks/useMobuleCards';

// utils. Преобразует минуты в часы
import convertMinutes from '../../../utils/convertMinutes';

function MoviesCard({ movie, MovieSave, MovieDelete, pushMovieSaved, removeMovieSaved, setIsLoadingCards }) {
  const isMobuleCards = useMobuleCards();

  const {
    duration,
    image,
    thumbnail,
    nameRU,
    trailer,
    _id,
  } = movie;

  return (
    <div className='movie'>
      <div className='movie__content'>
        <h2 className='movie__title'>
          { nameRU }
        </h2>
        <p className='movie__desc'>
          { convertMinutes(duration) }
        </p>
        {
          MovieSave ?
          <MovieSave movie={ movie } pushMovieSaved={ pushMovieSaved } setIsLoadingCards={ setIsLoadingCards } /> :
          <MovieDelete _id={ _id } removeMovieSaved={ removeMovieSaved } movie={ movie } />
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
