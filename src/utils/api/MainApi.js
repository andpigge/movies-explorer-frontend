import { profileApiUrl } from '../constants';
const { CONECT_SERVER, PATHS } = profileApiUrl;

class MainApi {
  #baseUrl
  #headers
  #pathGetProfile
  #pathUpdateProfile
  #getMovies
  #createMovies
  #deleteMovies
  constructor({ baseUrl, headers, paths: {
    getMe,
    updateMe,
    getMovies,
    createMovies,
    deleteMovies
  }})
  {
    this.#baseUrl = baseUrl;
    this.#headers = headers;
    this.#pathGetProfile = getMe;
    this.#pathUpdateProfile = updateMe;
    this.#getMovies = getMovies;
    this.#createMovies = createMovies;
    this.#deleteMovies = deleteMovies;
  }

  _checkResponse = res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _checkResponseMessage = res => {
    if (res.ok) {
      return res.json();
    }
    throw {
      message: res.json(),
      status: `Ошибка: ${res.status}`
    };
  }

  // Беру свежий токен из localStorage
  _updateToken = () => {
    this.#headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }

  // Получение данных пользователя
  getUserInfo = () => {
    this._updateToken();
    return fetch(`${this.#baseUrl}/${this.#pathGetProfile}`, {
      method: 'GET',
      headers: this.#headers,
    })
    .then(this._checkResponse);
  }

  // Обновление данных пользователя
  updateUserInfo = dataUsers => {
    this._updateToken();
    return fetch(`${this.#baseUrl}/${this.#pathUpdateProfile}`, {
      method: 'PATCH',
      headers: this.#headers,
      body: JSON.stringify(dataUsers),
    })
    .then(this._checkResponseMessage);
  }

  // Получение сохраненых фильмов
  getMovies = () => {
    this._updateToken();
    return fetch(`${this.#baseUrl}/${this.#getMovies}`, {
      method: 'GET',
      headers: this.#headers,
    })
    .then(this._checkResponse);
  }

  // Сохранить фильм
  saveMovie = dataMovies => {
    this._updateToken();
    return fetch(`${this.#baseUrl}/${this.#createMovies}`, {
      method: 'POST',
      headers: this.#headers,
      body: JSON.stringify(dataMovies),
    })
    .then(this._checkResponse);
  }

   // Удалить сохраненный фильм
   deleteMovie = id => {
    this._updateToken();
    return fetch(`${this.#baseUrl}/${this.#deleteMovies}/${id}`, {
      method: 'DELETE',
      headers: this.#headers,
    })
    .then(this._checkResponse);
  }
}

export default new MainApi({
  baseUrl: CONECT_SERVER,
  headers: {
    'Content-Type': 'application/json'
  },
  paths: PATHS
});
