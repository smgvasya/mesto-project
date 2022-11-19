import {
  popupPhoto,
  popupImg,
  popupPhotoTitle,
  cardTemplate} from "./constants.js";


export default class Card {
  static cardTemplate = document.querySelector('#card-template').content;

  constructor({cardId, owner, link, name, likes}, userId, cardTemplate, handleCardClick, handleDelCard, handleLikeClick) {
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDelCard = handleDelCard;
    this._userId = userId;
    this._cardTemplate = cardTemplate;
    this.id = cardId;
    this._isMine = this._checkIsOurCard(owner);
    this._link = link;
    this._name = name;
    this._likes = likes;
    this._cardElement = this._cardTemplate.querySelector('.element').cloneNode(true);
    this.photoElement = this._cardElement.querySelector('.element__photo');
    this._titleElement = this._cardElement.querySelector('.element__title');
    this._likeElementCount = this._cardElement.querySelector('.element__like-count');
    this._deleteElement = this._cardElement.querySelector('.element__button-trash');
    this._elementLikes = this._cardElement.querySelector('.element__button-like');
    this._generateCard();
  }

  _removeElement = () => {
    this._deleteElement.remove();
  }

  _checkIsOurCard(owner){
    return this._userId === owner._id;
  }

  _listenerDelCard = this._handleDelCard;//.bind(this);

  _listenerClickCard = this._handleCardClick;//.bind(this);

  _listenerLikeCard = this._handleLikeClick;//.bind(this);

  _showDelBtn = () =>{
    if (this._isMine) {
      this._deleteElement.addEventListener('click', () => this._listenerDelCard);
    } else {
      this._removeElement();
    }
  }

  _hasMineLike = () =>{
    const likeUser = this._likes.some((userInfo) => {
      return userInfo._id === this._userId;
    });
    return likeUser;
  }

  _showLikeCount = () => {
    this._likeElementCount.textContent = this._likes.length;
  }

  _toggleLikeActive = (element) => {
    element.classList.toggle('element__button-like_active');
  }

  setLikeCount(newLikes){
    this._elementLikes = newLikes;
    this._showLikeCount();
    this._toggleLikeActive(elementLikes);
  }

  _generateCard(){
    this._titleElement.textContent = this._name
    this.photoElement.src = this._link
    this.photoElement.alt = this._name
    this.photoElement.addEventListener("click", this._listenerClickCard);
    this._showLikeCount();
    this._showDelBtn();
    if (this._hasMineLike()) {
      toggleLikeActive(elementLikes);
    }
    this._elementLikes.addEventListener('click', this._listenerLikeCard);
  }

  getCard(){
    return this._cardElement;
  }

}


////////////////////////////////////////////////////////////////////////

//DOM удаление элемента
// const removeElement = (element) => {
//   element.remove();
// }

// //пересчёт лайков
// const countLike = (elementCount, likesArr) => {
//   elementCount.textContent = likesArr.length;
// }
// //переключение лайков
// const toggleLikeActive = (element) => {
//   element.classList.toggle('element__button-like_active');
// }


// Функция добавления новой карточки
// function createCard(element, userId) {
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   const photoElement = cardElement.querySelector('.element__photo');
//   const titleElement = cardElement.querySelector('.element__title');
//   const likeElementCount = cardElement.querySelector('.element__like-count');
//   const deleteElement = cardElement.querySelector('.element__button-trash');
//   const elementLikes = cardElement.querySelector('.element__button-like');

//   titleElement.textContent = element.name
//   photoElement.src = element.link
//   photoElement.alt = element.name
//   countLike(likeElementCount, element.likes);

  //Удаление карточки или иконки
  // if (element.owner._id === userId ) {
  //   deleteElement.addEventListener('click', () =>
  //   listenerDelCard(cardElement, element._id))
  // } else {
  //   removeElement(deleteElement);
  // }

  //Удаление карточки из DOM и сервера
  // const listenerDelCard = (cardElement, id) => {
  //   api.deleteCard(id)
  //   .then(() => {
  //     removeElement(cardElement);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  //Определяем кто ставит лайк
  // if (userId) {
  //   const likeUser = element.likes.some((userInfo) => {
  //     return userInfo._id === userId;
  //   });
  //   if (likeUser) {
  //     toggleLikeActive(elementLikes);
  //   }
  // }

  //Если лайк активен удалить, если нет добавить
  // elementLikes.addEventListener('click', (evt) => {
  //   if (elementLikes.classList.contains('element__button-like_active')) {
  //     api.deleteLike(element._id)
  //     .then ((res) => {
  //       countLike(likeElementCount, res.likes);
  //       toggleLikeActive(elementLikes);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   } else {
  //     api.putLike(element._id)
  //     .then ((res) => {
  //       countLike(likeElementCount, res.likes);
  //       toggleLikeActive(elementLikes);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }
  // });


//   return cardElement;
// }

// export { createCard };
