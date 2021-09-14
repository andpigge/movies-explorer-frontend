import React, { useContext, useState, useEffect } from 'react';
import './movieSave.css';

// Api
import MainApi from '../../../utils/api/MainApi';

import { SaveMovieListContext } from './../../../context/saveMovieListContext';

function MovieSave({ movie, pushMovieSaved, setIsLoadingCards }) {
  const saveMovieList = useContext(SaveMovieListContext);

  const [ existId, setExistId ] = useState(false);

  const moviesImgClass = existId ?
  'movie__save movie__save_active' :
  'movie__save';

  useEffect(() => {
    const existId = saveMovieList.some(item => {
      return item.movieId === movie.movieId;
    });
    setExistId(existId);
  }, [ saveMovieList, movie ]);

  const saveMovie = () => {
    if (existId) {
      console.log(existId)
      return;
    }
    MainApi.saveMovie(movie)
    .then(res => {
      pushMovieSaved(movie);
      // Карточка успешно добавлена, и нужно обновить страницу
      setIsLoadingCards(true);
    })
    .catch(err => console.log(err));
  };

  return (
    <button
      type='button'
      className={ moviesImgClass }
      onClick={ saveMovie }
    ></button>
  );
}

export default MovieSave;
