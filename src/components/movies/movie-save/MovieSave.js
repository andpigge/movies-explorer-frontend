import React from 'react';
import './movieSave.css';

// Api
import MainApi from '../../../utils/api/MainApi';

function MovieSave({ movies }) {
  // const moviesImgClass = save ?
  // 'movie__save movie__save_active' :
  // 'movie__save';

  const saveCard = () => {
    console.log(movies)
    MainApi.saveMovie(movies)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
  };

  return (
    <button
      type='button'
      className='movie__save'
      onClick={ saveCard }
    ></button>
  );
}

export default MovieSave;
