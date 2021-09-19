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
import { CurrentUserContext } from '../context/currentUserContext';

// Api
import { checkTokenApi } from '../utils/api/auth';
import MoviesApi from '../utils/api/MoviesApi';
import MainApi from '../utils/api/MainApi';

// HOC
import ProtectedRoute from './HOC/ProtectedRoute';

function App() {
  const history = useHistory();

  // Статус пользователя
  const [loggedIn, setLoggedIn] = useState(null);
  // Активен ли прелоудер
  const [ activePreloder, setActivePreloder ] = useState(false);
  // Была ли сохранена карточка. Если да, то подгружаю данные с БД. Сбрасываю state
  const [ isLoadingCards, setIsLoadingCards ] = useState();

  // Информация о пользователе
  const [userInfo, setUserInfo] = useState([]);
  const addUserInfo = userInfo => {
    setUserInfo(userInfo);
  }

  // Фильмы
  const [movieList, setMovieList] = useState([]);
  // Сохраненные фильмы
  const [movieListSaved, setMovieListSaved] = useState([]);
  const pushMovieSaved = movie => {
    setMovieListSaved(state => {
      const previousValue = state.slice(0);
      previousValue.push(movie);
      localStorage.setItem('savedMovies', JSON.stringify(previousValue));
      return previousValue;
    });
  };
  const removeMovieSaved = id => {
    setMovieListSaved(state => {
      const newMovieList = state.filter(movie => movie._id !== id);
      localStorage.setItem('savedMovies', JSON.stringify(newMovieList));
      return newMovieList;
    });
  };

  // Карточки связаны. Поэтому подгружаются вместе
  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    if (movies && savedMovies) {
      setMovieList(movies);
      setMovieListSaved(savedMovies);
      return;
    }
    if (loggedIn) {
      setActivePreloder(true)
      Promise.all([MoviesApi.getmovieList(), MainApi.getMovies()])
      .then(([ movies, savedMovies ]) => {
        setMovieList(movies);
        setMovieListSaved(savedMovies);
        // Сохраняю в localStorage
        localStorage.setItem('movies', JSON.stringify(movies));
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
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
          localStorage.setItem('userInfo', JSON.stringify(res));
          setLoggedIn(true);
        })
        .catch(err => {
          // Если ощибка с токеном, происходит выход
          console.log(err)
          setLoggedIn(false);
          localStorage.removeItem('jwt');
          localStorage.removeItem('savedMovies');
          localStorage.removeItem('movies');
          localStorage.removeItem('userInfo');
          history.push(`/`);
        });
    }
  }, [ loggedIn ]);

  return (
    <MovieListContext.Provider value={ movieList } >
      <SaveMovieListContext.Provider value={ movieListSaved } >
        <CurrentUserContext.Provider value={ userInfo } >
          <Switch >
            <Route exact path='/'>
              <Main loggedIn={ loggedIn } />
            </Route>

            <ProtectedRoute path={ '/movies' }>
              <Movies
                moviesAll={ movieList }
                activePreloder={ activePreloder }
                removeMovieSaved={ removeMovieSaved }
                pushMovieSaved={ pushMovieSaved }
                setIsLoadingCards={ setIsLoadingCards }
              />
            </ProtectedRoute>

            <ProtectedRoute path={ '/saved-movies' }>
              <SavedMovies
                moviesAllSaved={ movieListSaved }
                activePreloder={ activePreloder }
                removeMovieSaved={ removeMovieSaved }
                setIsLoadingCards={ setIsLoadingCards }
                isLoadingCards={ isLoadingCards }
                setMovieListSaved={ setMovieListSaved }
              />
            </ProtectedRoute>

            <ProtectedRoute path={ '/profile' }>
              <Profile
                addUserInfo={ addUserInfo }
                setLoggedIn={ setLoggedIn }
                loggedIn={ loggedIn }
              />
            </ProtectedRoute>

            <Route path='/signin' >
              <Login setLoggedIn={ setLoggedIn } />
            </Route>
            <Route path='/signup' >
              <Register setLoggedIn={ setLoggedIn } />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </CurrentUserContext.Provider>
      </SaveMovieListContext.Provider>
    </MovieListContext.Provider>
  );
}

export default App;
