import React, { useEffect, useState } from 'react';
import './movies.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';
import MoreCards from './more-cards/MoreCards';
import MovieSave from './movie-save/MovieSave';

// Пользовательский хук
import useMobuleCards from '../../utils/custom-hooks/useMobuleCards';

function Movies({ moviesAll, activePreloder, pushMovieSaved }) {
  // Здесь счетчик начинается с 2. Идет аналогия с массивом for, постфиксный и префексный инкремент.
  // При первом создании компонента, state останентся 2.
  const [ count, setCount ] = useState(null);
  const [ amount, setAmount ] = useState(null);
  // Активная ли кнопка
  const [ isActiveButton, setIsActiveButton ] = useState(true);
  // Активен ли checkbox
  const [ checkFilter, setCheckFilter ] = useState(false);

  const [ moviesListAmount, setAmountMoviesList ] = useState([]);
  // Найденные фильмы
  const [ resultSearch, setResultSearch ] = useState(false);
  // Данных может быть много, и все их передовать каждый раз не вижу смысла
  const [ moviesList, setMoviesList ] = useState([]);

  // По умолчанию 601 ширина
  const isMobuleCards = useMobuleCards();

  // Меняю amount на мобильных устройствах.
  // При изменении экрана, сбрасываю счетчик
  useEffect(() => {
    if (isMobuleCards) {
      setAmount(5);
      setCount(2);
      return;
    }
    setAmount(7);
    setCount(2);
  }, [ isMobuleCards ]);

  // Сохраняю определенное количество карточек
  useEffect(() => {
    if (resultSearch) {
      setAmountMoviesList(resultSearch.slice(0, amount));
      return;
    }
    setAmountMoviesList(moviesAll.slice(0, amount));
  }, [ amount, moviesAll, resultSearch ]);

  // Создаю обьект с нужными данными.
  useEffect(() => {
    const newMoviesList = moviesListAmount.map(movie => {
      const imgDesc = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
      const imgModule = `https://api.nomoreparties.co${movie.image.url}`;
      return {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: imgModule,
        trailer: movie.trailerLink,
        thumbnail: imgDesc,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      };
    });
    setMoviesList(newMoviesList);
  }, [ moviesListAmount ]);

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm
          setResultSearch={ setResultSearch }
          setIsActiveButton={ setIsActiveButton }
          setCheckFilter={ setCheckFilter }
          checkFilter={ checkFilter }
        />
        <MoviesCardList
          moviesList={ moviesList }
          activePreloder={ activePreloder }
          pushMovieSaved={ pushMovieSaved }
          MovieSave={ MovieSave }
        />
        <MoreCards
          setAmountMoviesList={ setAmountMoviesList }
          moviesListAmount={ moviesListAmount }
          resultSearch={ resultSearch }
          amount={ amount }
          setCount={ setCount }
          count={ count }
          setIsActiveButton={ setIsActiveButton }
          isActiveButton={ isActiveButton }
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
