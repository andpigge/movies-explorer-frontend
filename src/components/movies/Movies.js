import React, { useContext, useEffect, useState } from 'react';
import './movies.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';
import MoreCards from './more-cards/MoreCards';

// Контекст
import { MovieListContext } from '../../context/movieListContext';

// utils. Преобразует минуты в часы
import convertMinutes from '../../utils/convertMinutes';

function Movies() {
  // Данных может быть много, и все их передовать каждый раз не вижу смысла
  const [ moviesList, setMoviesList ] = useState([]);

  // Контекст
  const { result } = useContext(MovieListContext);

  // Создаю обьект с нужными данными. Данные одинаковые
  useEffect(() => {
    const newMoviesList = result.map(movie => {
      return {
        duration: convertMinutes(movie.duration),
        image: movie.image,
        nameRU: movie.nameRU,
        _id: movie._id,
        save: movie.save
      };
    });
    setMoviesList(newMoviesList);
  }, [ result ]);

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
