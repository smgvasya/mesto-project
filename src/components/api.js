export default class Api{

  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _testRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfile(){
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
    .then(this._testRes);
  };

  patchProfile({name, about}){
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .then(this._testRes);
  };

  postCard({name, link}) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
    .then(this._testRes);
  };

  getInitialCards(){
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(this._testRes);
  }

  deleteCard(cardId){
    return fetch(`${this._baseUrl}/cards/${cardId}`,{
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._testRes);
  }

  patchAvatar(link){
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    })
    .then(this._testRes);
  };

  putLike(cardId){
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`,{
      method: "PUT",
      headers: this._headers,
    })
    .then(this._testRes);
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`,{
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._testRes);
  }
}
