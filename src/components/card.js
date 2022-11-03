import {
  popupPhoto,
  popupImg,
  popupPhotoTitle,
  cardTemplate } from "./constants.js";

  import { openPopup } from "./modal.js";

  import { testRes, getProfile, patchProfile, postCard, getInitialCards,
    deleteCard, patchAvatar, putLike, deleteLike } from "./api";


// Функция добавления новой карточки

function addCard(element, userId) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const photoElement = cardElement.querySelector('.element__photo');
  const titleElement = cardElement.querySelector('.element__title');
  const likeElementCount = cardElement.querySelector('.element__like-count');
  const deleteElement = cardElement.querySelector('.element__button-trash');
  const elementLikes = cardElement.querySelector('.element__button-like');

  titleElement.textContent = element.name
  photoElement.src = element.link
  photoElement.alt = element.name
  likeElementCount.textContent = element.likes.length

  //Удаление карточки
  if (element.owner._id === userId ) {
    deleteCard(card._id)
    then(() =>{
      deleteElement.addEventListener('click', (evt) => {
        cardElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
    })
  } else {
    deleteElement.remove();
  }

  //Лайк карточки
if (userId) { // узнаём кто ставит лайк
    const likeUser = element.likes.some((userInfo) => {
      return userInfo._id === userId;
    });
    if (likeUser) {
      elementLikes.addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__button-like_active');
      });
    }
}
  //если лайк активен удалить, если нет добавить
if (elementLikes.classList.contains('element__button-like_active')) {
  deleteLike(card._id)
  .then ((res) => {
    likeElementCount.textContent = res.likes.length;
    elementLikes.classList.remove('element__button-like_active');
  })
  .catch((err) => {
    console.log(err);
  });
} else {
  putLike(card._id)
  .then ((res) => {
    likeElementCount.textContent = res.likes.length;
    elementLikes.classList.add('element__button-like_active');
  })
  .catch((err) => {
    console.log(err);
  });
}

  //Открытие модального окна/фото карточки
  photoElement.addEventListener("click", () => {
    popupImg.src = element.link;
    popupPhotoTitle.textContent = element.name;
    popupImg.alt = element.name;
    openPopup(popupPhoto);
  });
  return cardElement;
}

export { addCard };
