import React, { useState } from 'react';
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
import saveMovieList from '../data/saveMovieList.json';

function App() {
  // Статус пользователя
  const [loggedIn, setLoggedIn] = useState(false);

  // Фильмы
  const [movieList, setMovieList] = useState([]);
  const addMovieList = movieList => {
    setMovieList(movieList);
  }

  return (
    <MovieListContext.Provider value={ movieList } >
      <SaveMovieListContext.Provider value={ saveMovieList } >
        <Switch >
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies
              addMovieList={ addMovieList }
              moviesAll={ movieList }
              loggedIn={ loggedIn }
            />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile' >
            <Profile />
          </Route>
          <Route path='/signin' >
            <Login setLoggedIn={ setLoggedIn } />
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
