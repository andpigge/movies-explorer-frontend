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
import MoviesApi from '../utils/api/MoviesApi';
import MainApi from '../utils/api/MainApi';

// HOC
import ProtectedRoute from './HOC/ProtectedRoute';

function App() {
  // Статус пользователя
  const [loggedIn, setLoggedIn] = useState(null);
  // Активен ли прелоудер
  const [ activePreloder, setActivePreloder ] = useState(false);

  // Информация о пользователе
  const [userInfo, setUserInfo] = useState(false);
  const addUserInfo = movieList => {
    setUserInfo(movieList);
  }

  // Фильмы
  const [movieList, setMovieList] = useState([]);
  // Сохраненные фильмы
  const [movieListSaved, setMovieListSaved] = useState([]);
  const pushMovieSaved = movie => {
    setMovieListSaved(state => {
      const previousValue = state.slice(0);
      previousValue.push(movie);
      return previousValue;
    });
  };

  // Карточки связаны. Поэтому подгружаются вместе
  useEffect(() => {
    if (loggedIn && (movieList.length === 0 || movieListSaved.length === 0 )) {
      setActivePreloder(true)
      Promise.all([MoviesApi.getmovieList(), MainApi.getMovies()])
      .then(([ movies, savedMovies ]) => {
        setMovieList(movies);
        setMovieListSaved(savedMovies);
      })
      .catch(err => console.log(err))
      .finally(() => setActivePreloder(false));
    }
  }, [ loggedIn ]);

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
              moviesAll={ movieList }
              activePreloder={ activePreloder }
              pushMovieSaved={ pushMovieSaved }
            />
          </ProtectedRoute>

          <ProtectedRoute path={ '/saved-movies' }>
            <SavedMovies
              moviesAllSaved={ movieListSaved }
              activePreloder={ activePreloder }
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
