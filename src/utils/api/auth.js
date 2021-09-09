import { apiServeAuth } from '../constants';
const { CONECT_SERVER, PATHS: { reg, login } } = apiServeAuth;

const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
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
    .then(checkResponse);
}
