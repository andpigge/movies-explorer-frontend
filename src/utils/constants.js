// Текст ссылок для навигации для компонента navigation в мобильном меню
const textListMenuMobule = [
  'Главная',
  'Фильмы',
  'Сохранённые фильмы',
];

// Ссылки для навигации для компонента navigation в мобильном меню
const navLinkMenuMobule = [
  '/',
  '/movies',
  '/saved-movies',
];

// Текст ссылок для навигации для компонента navigation
const textList = [
  'Фильмы',
  'Сохранённые фильмы',
];

// Ссылки для навигации для компонента navigation
const navLink = [
  '/movies',
  '/saved-movies',
];

// Текст для компонента tech
const techList = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

// Текст ссылок для компонента aboutMe
const aboutMeList = [
  'Vkontakte',
  'Github',
];

// Ссылки для компонента aboutMe
const aboutMeListLink = [
  'https://vk.com/uie_n',
  'https://github.com/andpigge',
];

// Текст ссылок для компонента portfolioList
const portfolioList = [
  'Статичный сайт',
  'Одностраничное приложение на React',
  'Многостраничное приложение на React',
];

// Ссылки для компонента portfolioList
const portfolioListLink = [
  'https://github.com/andpigge/russian-travel-update',
  'https://github.com/andpigge/react-mesto-api-full',
  'https://github.com/andpigge/movies-explorer-frontend',
];

const registerProps = {
  title: 'Добро пожаловать!',
  textAuth: 'Уже зарегистрированы?',
  textLink: 'Войти',
  link: '/signin',
};

const loginProps = {
  title: 'Рады видеть!',
  textAuth: 'Ещё не зарегистрированы?',
  textLink: 'Регистрация',
  link: '/signup',
};

const moviesApiUrl = {
  CONECT_SERVER: 'https://api.nomoreparties.co/beatfilm-movies',
  PATH_LIST: {
    movieList: '/',
  },
};

const authApiUrl = {
  CONECT_SERVER: 'https://movies-diploma-api.nomoredomains.monster/api',
  // CONECT_SERVER: 'http://localhost:3000/api',
  PATHS: {
    reg: 'signup',
    login: 'signin',
    user: 'users/me',
  }
};

const profileApiUrl = {
  CONECT_SERVER: 'https://movies-diploma-api.nomoredomains.monster/api',
  // CONECT_SERVER: 'http://localhost:3000/api',
  PATHS: {
    getMe: 'users/me',
    updateMe: 'users/me',
    getMovies: 'movies',
    createMovies: 'movies',
    deleteMovies: 'movies',
  }
};

export {
  textListMenuMobule,
  navLinkMenuMobule,
  textList,
  navLink,
  techList,
  aboutMeList,
  aboutMeListLink,
  portfolioList,
  portfolioListLink,
  registerProps,
  loginProps,
  moviesApiUrl,
  authApiUrl,
  profileApiUrl,
};
