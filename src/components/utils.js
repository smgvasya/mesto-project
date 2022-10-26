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
  mestoLink } from "./constants.js";

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


// Функция формы добавления карточки/очистка инпутов
function SubmitFormMesto(evt) {
  evt.preventDefault ();

  const newElement = {
    name: mestoName.value,
    link: mestoLink.value
  };

  displayCard(newElement);
  closePopup(popupMesto);

  evt.target.reset()

}

export { SubmitFormMesto, submitFormProfile, displayCard };

