import "../pages/index.css";
import {
  initialCards,
  addButtonProfile,
  addButtonPhoto,
  popupProfile,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  popupMesto,
  formMesto,
  closeButtons,
  selectors
  } from "./constants.js";

import { enableValidation, preparePopup } from "./validate.js";
import { openPopup, closePopup, closePopupOverlay } from "./modal.js";
import { submitFormMesto, displayCard } from "./utils.js";


initialCards.reverse();

//Открытие окна редактирования профиля
addButtonProfile.addEventListener('click', function (){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupProfile);
  preparePopup(selectors);
});

//Закрытие всех модальных окон

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
  closePopupOverlay (popup);
});

//Открытие окна добавление карточки
addButtonPhoto.addEventListener('click', function (){
  openPopup(popupMesto);
  preparePopup(selectors);
});


//Добавление карточек из кода
initialCards.forEach(displayCard);

formMesto.addEventListener ('submit', submitFormMesto);

enableValidation(selectors);

