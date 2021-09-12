import { profileApiUrl } from '../constants';
const { CONECT_SERVER, PATHS } = profileApiUrl;

class MainApi {
  #baseUrl
  #headers
  #pathGetProfile
  #pathUpdateProfile
  constructor({ baseUrl, headers, paths: { get, update } }) {
    this.#baseUrl = baseUrl;
    this.#headers = headers;
    this.#pathGetProfile = get;
    this.#pathUpdateProfile = update;
  }

  _checkResponse = res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
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
