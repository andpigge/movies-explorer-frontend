import React from 'react';
import './moviesCardList.css';

// Компоненты
import MoviesCard from './movies-card/MoviesCard';
import Preloader from '../preloader/Preloader';

function MoviesCardList(
  {
    moviesList, activePreloder,
    pushMovieSaved, removeMovieSavedAll,
    setIsLoadingCards, resultSearch,
    MovieSave, MovieDelete
  })
{
  return (
    <section className='movies-card movies_margin_center'>
      <ul className='movies-card__list'>
        {
          activePreloder ?
            <Preloader />
          : moviesList.length === 0 ?
            <p className='movies-card__mesage'>
              {
                resultSearch ? 'Ничего не нашел ...' : 'Пусто'
              }
            </p>
          :
            moviesList.map((movie) => {
              return (
                <li key={ movie.movieId } className='movies-card__item'>
                  <MoviesCard
                    movie={ movie }
                    MovieSave={ MovieSave }
                    MovieDelete={ MovieDelete }
                    pushMovieSaved={ pushMovieSaved }
                    removeMovieSavedAll={ removeMovieSavedAll }
                    setIsLoadingCards={ setIsLoadingCards }
                  />
                </li>
              )
            })
        }
      </ul>
    </section>
  );
}

export default MoviesCardList;
