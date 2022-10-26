import {
  popupPhoto,
  popupImg,
  popupPhotoTitle } from "./constants.js";

  import { openPopup } from "./modal.js";

// Функция добавления новой карточки
function addCard(element) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const photoElement = cardElement.querySelector('.element__photo');
  const titleElement = cardElement.querySelector('.element__title');

  titleElement.textContent = element.name
  photoElement.src = element.link
  photoElement.alt = element.name


  //Удаление карточки
  const deleteElement = cardElement.querySelector('.element__button-trash');

  deleteElement.addEventListener('click', (evt) => {
    cardElement.remove();
  });

  //Лайк карточки
  const elementLikes = cardElement.querySelector('.element__button-like');

  elementLikes.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button-like_active');
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

export { addCard };
