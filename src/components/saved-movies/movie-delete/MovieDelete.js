import React from 'react';
import './movieDelete.css';

// Api
import MainApi from '../../../utils/api/MainApi';

function MovieDelete({ _id, removeMovieSavedAll }) {

  const deleteMovie = () => {
    MainApi.deleteMovie(_id)
    .then(res => {
      removeMovieSavedAll(res._id);
    })
    .catch(err => console.log(err));
  };

  return (
    <button
      type='button'
      className='movie__delete'
      onClick={ deleteMovie }
    ></button>
  );
}

export default MovieDelete;
