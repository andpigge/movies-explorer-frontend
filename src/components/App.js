import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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

// Data
import saveMovieList from '../data/saveMovieList.json';

// Api
import { checkTokenApi } from '../utils/api/auth';

// HOC
import ProtectedRoute from './HOC/ProtectedRoute';

function App() {
  const history = useHistory();

  // Статус пользователя
  const [loggedIn, setLoggedIn] = useState(null);

  // Информация о пользователе
  const [userInfo, setUserInfo] = useState(false);

  // Фильмы
  const [movieList, setMovieList] = useState([]);
  const addMovieList = movieList => {
    setMovieList(movieList);
  }

  // Заход на сайт
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      checkTokenApi(token)
        .then(res => {
          // Информация о пользователе
          setUserInfo(res);

          setLoggedIn(true);
          history.push(`/movies`);
        });
    }
  }, [ loggedIn ]);

  return (
    <MovieListContext.Provider value={ movieList } >
      <SaveMovieListContext.Provider value={ saveMovieList } >
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
            <SavedMovies />
          </ProtectedRoute>

          <ProtectedRoute path={ '/profile' }>
            <Profile
              userInfo={ userInfo }
              setUserInfo={ setUserInfo }
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
