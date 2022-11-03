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
    // method: "GET",
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

export const postProfile = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: link,
    }),
  })
  .then(testRes);
};

export const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`,{
      method: "DELETE",
      headers: config.headers,
  })
  .then(testRes);
}

export const patchAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  })
  .then(testRes);
};

export const putLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`,{
      method: "PUT",
      headers: config.headers,
  })
  .then(testRes);
}

export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`,{
      method: "DELETE",
      headers: config.headers,
  })
  .then(testRes);
}
