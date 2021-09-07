import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';

// Компоненты
import Main from './main/Main';
import Movies from './movies/Movies';
import SavedMovies from './saved-movies/SavedMovies';
import Profile from './profile/Profile';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import NotFound from './not-found/NotFound';

import Preloader from './preloader/Preloader';

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
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile' >
            <Profile />
          </Route>
          <Route path='/signin' >
            <Login />
          </Route>
          <Route path='/signup' >
            <Register />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </SaveMovieListContext.Provider>
    </MovieListContext.Provider>
  );
}

export default App;
