import React, { useState, useEffect } from 'react';
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

// Контекст
import { MovieListContext } from '../context/movieListContext';
import { SaveMovieListContext } from '../context/saveMovieListContext';

// Api
import { checkTokenApi } from '../utils/api/auth';

// HOC
import ProtectedRoute from './HOC/ProtectedRoute';

function App() {
  // Статус пользователя
  const [loggedIn, setLoggedIn] = useState(null);

  // Информация о пользователе
  const [userInfo, setUserInfo] = useState(false);
  const addUserInfo = movieList => {
    setUserInfo(movieList);
  }

  // Фильмы
  const [movieList, setMovieList] = useState([]);
  const addMovieList = movieList => {
    setMovieList(movieList);
  }

  // Сохраненные фильмы
  const [movieListSaved, setMovieListSaved] = useState([]);
  const addMovieListSaved = movieListSaved => {
    setMovieListSaved(movieListSaved);
  }

  // Заход на сайт
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      checkTokenApi(token)
        .then(res => {
          addUserInfo(res);
          setLoggedIn(true);
        });
    }
  }, []);

  return (
    <MovieListContext.Provider value={ movieList } >
      <SaveMovieListContext.Provider value={ movieListSaved } >
        <Switch >
          <Route exact path='/'>
            <Main />
          </Route>

          <ProtectedRoute path={ '/movies' }>
            <Movies
              addMovieList={ addMovieList }
              moviesAll={ movieList }
              loggedIn={ loggedIn }
            />
          </ProtectedRoute>

          <ProtectedRoute path={ '/saved-movies' }>
            <SavedMovies
              addMovieListSaved={ addMovieListSaved }
              moviesAllSaved={ movieListSaved }
              loggedIn={ loggedIn }
            />
          </ProtectedRoute>

          <ProtectedRoute path={ '/profile' }>
            <Profile
              userInfo={ userInfo }
              addUserInfo={ addUserInfo }
              setLoggedIn={ setLoggedIn }
            />
          </ProtectedRoute>

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
