import React from 'react';
import './movieSave.css';
function MovieSave({ save }) {
  const moviesImgClass = save ?
  'movie__save movie__save_active' :
  'movie__save';

  return (
    <button type='button' className={ moviesImgClass }></button>
  );
}

export default MovieSave;
