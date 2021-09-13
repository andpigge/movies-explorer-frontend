import React, { useContext, useState, useEffect } from 'react';
import './movieSave.css';

// Api
import MainApi from '../../../utils/api/MainApi';

import { SaveMovieListContext } from './../../../context/saveMovieListContext';

function MovieSave({ movie, pushMovieSaved }) {
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

  const saveCard = () => {
    if (existId) {
      console.log(existId)
      return;
    }
    MainApi.saveMovie(movie)
    .then(res => {
      pushMovieSaved(movie);
    })
    .catch(err => console.log(err));
  };

  return (
    <button
      type='button'
      className={ moviesImgClass }
      onClick={ saveCard }
    ></button>
  );
}

export default MovieSave;
