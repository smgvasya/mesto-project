export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16/',
  headers: {
    authorization: '726accf3-eb3a-4622-8e8a-72bee3135f81',
    'Content-Type': 'application/json'
  }
}

export function testRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(testRes);
}

export const getProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  })
  .then(testRes);
};

export const patchProfile = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  })
  .then(testRes);
};

