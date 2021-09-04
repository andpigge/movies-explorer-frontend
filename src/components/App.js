import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';

// Компоненты
import Main from './main/Main';
import Movies from './movies/Movies';
import SavedMovies from './saved-movies/SavedMovies';

// Контекст
import { MovieListContext } from '../context/movieListContext';
import { SaveMovieListContext } from '../context/saveMovieListContext';

// Data
import dataMovies from '../data/movieList.json';
import saveMovieList from '../data/saveMovieList.json';

function App() {
  return (
    <MovieListContext.Provider value={ dataMovies } >
      <SaveMovieListContext.Provider value={ saveMovieList } >
        <Switch >
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
        </Switch>
      </SaveMovieListContext.Provider>
    </MovieListContext.Provider>
  );
}

export default App;
