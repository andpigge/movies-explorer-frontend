import React, { useContext, useEffect, useState } from 'react';
import './movies.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';
import MoreCards from './more-cards/MoreCards';

// Api
import MoviesApi from '../../utils/api/MoviesApi';

// utils. Преобразует минуты в часы
import convertMinutes from '../../utils/convertMinutes';

function Movies({ addMovieList, movieList, loggedIn }) {
  useEffect(() => {
    if (loggedIn) {
      MoviesApi.getmovieList()
        .then(movies => {
          addMovieList(movies);
        });
    }
  }, [ loggedIn ]);

  // Данных может быть много, и все их передовать каждый раз не вижу смысла
  const [ moviesList, setMoviesList ] = useState([]);

  // Создаю обьект с нужными данными. Данные одинаковые
  useEffect(() => {
    const newMoviesList = movieList.map(movie => {
      const imgDesc = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
      const imgModule = `https://api.nomoreparties.co${movie.image.url}`;
      return {
        _id: movie.id,
        duration: convertMinutes(movie.duration),
        imgDesc: imgDesc,
        imgModule: imgModule,
        nameRU: movie.nameRU,
      };
    });
    setMoviesList(newMoviesList);
  }, [ movieList ]);

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList moviesList={ moviesList } />
        <MoreCards />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
