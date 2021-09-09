import { moviesApiUrl } from '../constants';
const { CONECT_SERVER, PATH_LIST } = moviesApiUrl;

class MoviesApi {
  #baseUrl
  #headers
  #movieListPath
  constructor({ baseUrl, headers, pathList }) {
    this.#baseUrl = baseUrl;
    this.#headers = headers;
    this.#movieListPath = pathList.movieList;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getmovieList() {
    fetch(`${ this.#baseUrl }/${ this.#movieListPath }`, {
      method: 'GET',
      headers: this.#headers,
    })
    .then(this._checkResponse);
  }
}

export default new MoviesApi({
  baseUrl: CONECT_SERVER,
  headers: {
    'Content-Type': 'application/json'
  },
  pathList: PATH_LIST,
});
