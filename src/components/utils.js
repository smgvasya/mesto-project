import {
  popupProfile,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  formProfile,
  popupMesto,
  elementsContainer,
  mestoName,
  mestoLink,
  avatarLink,
  avatarInput,
  popupAvatar } from "./constants.js";

import { addCard } from "./card";
import { closePopup } from "./modal";


//Функция формы редактирования профиля
function submitFormProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupProfile);
}
formProfile.addEventListener('submit', submitFormProfile);


//Функция формы
function displayCard(element) {
  elementsContainer.prepend(addCard(element));
}

//Функция формы редактирования аватара
function submitFormAvatar(evt){
  evt.preventDefault ();
  avatarLink.src = avatarInput.value;
  closePopup(popupAvatar);
  evt.target.reset()
}

// Функция формы добавления карточки/очистка инпутов
function submitFormMesto(evt) {
  evt.preventDefault ();

  const newElement = {
    name: mestoName.value,
    link: mestoLink.value
  };

  displayCard(newElement);
  closePopup(popupMesto);

  evt.target.reset()
}

// Улучшенный UX всех форм
function renderLoading(isLoading) {
  const submitText = document.querySelector('.form__input')
  if (isLoading) {
    submitText.textContent = "Сохранение...";
  } else {
    submitText.textContent = "Сохранить";
  }
}

export { submitFormMesto, submitFormProfile, displayCard, submitFormAvatar, renderLoading };

