import React, { useContext, useEffect, useState } from 'react';
import './savedMovies.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';

// Контекст
import { SaveMovieListContext } from '../../context/saveMovieListContext';

// utils. Преобразует минуты в часы
import convertMinutes from '../../utils/convertMinutes';

function SavedMovies() {
  // Данных может быть много, и все их передовать каждый раз не вижу смысла
  const [ moviesList, setMoviesList ] = useState([]);

  // Контекст
  const { result } = useContext(SaveMovieListContext);

  // Создаю обьект с нужными данными. Данные одинаковые
  useEffect(() => {
    const newMoviesList = result.map(movie => {
      return {
        duration: convertMinutes(movie.duration),
        image: movie.image,
        nameRU: movie.nameRU,
        _id: movie._id,
      };
    });
    setMoviesList(newMoviesList);
  }, [ result ]);

  return (
    <>
      <Header />
      <main className='saved-movies saved-movies_margin_bottom'>
        <SearchForm />
        <MoviesCardList moviesList={ moviesList } />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
