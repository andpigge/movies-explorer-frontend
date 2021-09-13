import React, { useEffect, useState } from 'react';
import './savedMovies.css';

// Компоненты
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';
import MovieDelete from './movie-delete/MovieDelete';

function SavedMovies({ moviesAllSaved, activePreloder }) {
  // Данных может быть много, и все их передовать каждый раз не вижу смысла
  const [ moviesList, setMoviesList ] = useState([]);

  // Создаю обьект с нужными данными для вывода.
  useEffect(() => {
    const newMoviesList = moviesAllSaved.map(movie => {
      return {
        movieId: movie.movieId,
        duration: movie.duration,
        thumbnail: movie.thumbnail,
        image: movie.image,
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
        <MoviesCardList
          moviesList={ moviesList }
          activePreloder={ activePreloder }
          MovieDelete={ MovieDelete }
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
