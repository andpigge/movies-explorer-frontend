import { authApiUrl } from '../constants';
const { CONECT_SERVER, PATHS: { reg, login, user } } = authApiUrl;

const checkResponseMessage = res => {
  if (res.ok) {
    return res.json();
  }
  throw {
    message: res.json(),
    status: `Ошибка: ${res.status}`
  };
}

// Регистрация
const registerApi = dataReg => {
  return fetch(`${CONECT_SERVER}/${reg}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataReg)
  })
    .then(checkResponseMessage);
}

// Авторизация
const signInApi = dataLogin => {
  return fetch(`${CONECT_SERVER}/${login}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataLogin)
  })
    .then(checkResponseMessage);
}

// Проверка токена
const checkTokenApi = token => {
  return fetch(`${CONECT_SERVER}/${user}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export {
  registerApi,
  signInApi,
  checkTokenApi,
};
