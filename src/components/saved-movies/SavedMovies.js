import React, { useEffect, useState } from 'react';
import './savedMovies.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';
import MovieDelete from './movie-delete/MovieDelete';

// Api
import MainApi from '../../utils/api/MainApi';

function SavedMovies({ moviesAllSaved, activePreloder, removeMovieSaved, setIsLoadingCards, isLoadingCards, setMovieListSaved }) {
  // Активен ли checkbox
  const [ checkFilter, setCheckFilter ] = useState(false);

  // Данных может быть много, и все их передовать каждый раз не вижу смысла
  const [ moviesList, setMoviesList ] = useState([]);
  // Найденные фильмы
  const [ resultSearch, setResultSearch ] = useState(false);

  // Создаю обьект с нужными данными для вывода.
  useEffect(() => {
    const newMoviesList = moviesAllSaved.map(movie => {
      return {
        movieId: movie.movieId,
        duration: movie.duration,
        thumbnail: movie.thumbnail,
        image: movie.image,
        nameRU: movie.nameRU,
        trailer: movie.trailer,
        _id: movie._id,
      };
    });
    setMoviesList(newMoviesList);
  }, [ moviesAllSaved ]);

  useEffect(() => {
    if (isLoadingCards) {
      MainApi.getMovies()
      .then(res => {
        setMovieListSaved(res);
        setIsLoadingCards(false);
      })
      .catch(err => console.log(err));
    }
  }, [ isLoadingCards ]);

  return (
    <>
      <Header />
      <main className='saved-movies saved-movies_margin_bottom'>
        <SearchForm />
        <MoviesCardList
          moviesList={ moviesList }
          activePreloder={ activePreloder }
          removeMovieSaved={ removeMovieSaved }
          MovieDelete={ MovieDelete }
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
