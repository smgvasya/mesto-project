import {
  popupPhoto,
  popupImg,
  popupPhotoTitle,
  cardTemplate } from "./constants.js";

  import { openPopup } from "./modal.js";

  import { deleteCard, putLike, deleteLike } from "./api";

//DOM удаление элемента
const removeElement = (element) => {
  element.remove();
}

//пересчёт лайков
const countLike = (elementCount, likesArr) => {
  elementCount.textContent = likesArr.length;
}
//переключение лайков
const toggleLikeActive = (element) => {
  element.classList.toggle('element__button-like_active');
}


// Функция добавления новой карточки
function createCard(element, userId) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const photoElement = cardElement.querySelector('.element__photo');
  const titleElement = cardElement.querySelector('.element__title');
  const likeElementCount = cardElement.querySelector('.element__like-count');
  const deleteElement = cardElement.querySelector('.element__button-trash');
  const elementLikes = cardElement.querySelector('.element__button-like');

  titleElement.textContent = element.name
  photoElement.src = element.link
  photoElement.alt = element.name
  countLike(likeElementCount, element.likes);

//Удаление карточки или иконки
if (element.owner._id === userId ) {
  deleteElement.addEventListener('click', () =>
    listenerDelCard(cardElement, element._id))
  } else {
    removeElement(deleteElement);
  }

//Удаление карточки из DOM и сервера
const listenerDelCard = (cardElement, id) => {
  deleteCard(id)
  .then(() => {
    removeElement(cardElement);
  })
  .catch((err) => {
     console.log(err);
   });
}

//Определяем кто ставит лайк
if (userId) {
  const likeUser = element.likes.some((userInfo) => {
    return userInfo._id === userId;
  });
  if (likeUser) {
    toggleLikeActive(elementLikes);
  }
}

//Если лайк активен удалить, если нет добавить
elementLikes.addEventListener('click', (evt) => {
if (elementLikes.classList.contains('element__button-like_active')) {
  deleteLike(element._id)
  .then ((res) => {
    countLike(likeElementCount, res.likes);
    toggleLikeActive(elementLikes);
  })
  .catch((err) => {
    console.log(err);
  });
} else {
  putLike(element._id)
  .then ((res) => {
    countLike(likeElementCount, res.likes);
    toggleLikeActive(elementLikes);
  })
  .catch((err) => {
    console.log(err);
  });
}
});

//Открытие модального окна/фото карточки
photoElement.addEventListener("click", () => {
  popupImg.src = element.link;
  popupPhotoTitle.textContent = element.name;
  popupImg.alt = element.name;
  openPopup(popupPhoto);
});
  return cardElement;
}

export { createCard };
