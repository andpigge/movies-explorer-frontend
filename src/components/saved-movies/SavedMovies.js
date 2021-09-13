import React, { useEffect, useState } from 'react';
import './savedMovies.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';
import MovieDelete from './movie-delete/MovieDelete';

// utils. Преобразует минуты в часы
import convertMinutes from '../../utils/convertMinutes';

function SavedMovies({ addMovieListSaved, moviesAllSaved, loggedIn }) {
  // Данных может быть много, и все их передовать каждый раз не вижу смысла
  const [ moviesList, setMoviesList ] = useState([]);

  // Создаю обьект с нужными данными для вывода.
  useEffect(() => {
    const newMoviesList = moviesAllSaved.map(movie => {
      const imgDesc = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
      const imgModule = `https://api.nomoreparties.co${movie.image.url}`;
      return {
        _id: movie.id,
        duration: convertMinutes(movie.duration),
        imgDesc: imgDesc,
        imgModule: imgModule,
        nameRU: movie.nameRU,
        trailerLink: movie.trailerLink,
      };
    });
    setMoviesList(newMoviesList);
  }, [ moviesAllSaved ]);

  return (
    <>
      <Header />
      <main className='saved-movies saved-movies_margin_bottom'>
        <SearchForm />
        <MoviesCardList moviesList={ moviesList } MovieDelete={ MovieDelete } />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
