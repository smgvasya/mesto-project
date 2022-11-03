import "../pages/index.css";
import {
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
  selectors,
  avatarLink,
  formAvatar,
  addButtonAvatar,
  popupAvatar,
  elementsContainer
  } from "./constants.js";

import { enableValidation, preparePopup } from "./validate.js";
import { openPopup, closePopup, closePopupOverlay } from "./modal.js";
import { submitFormMesto, displayCard, submitFormAvatar } from "./utils.js";
import { addCard } from "./card";

import { testRes, getProfile, patchProfile, postCard, getInitialCards,
  deleteCard, patchAvatar, putLike, deleteLike } from "./api";





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

//Открытие окна обновления аватара
addButtonAvatar.addEventListener('click', function (){
  openPopup(popupAvatar);
  preparePopup(selectors);
});


//Добавление карточек из кода
// initialCards.forEach(displayCard);
// initialCards.reverse();


Promise.all([getProfile(), getInitialCards()])
  .then(([userData, cardsData]) => {
    profileName.textContent = userData.name;
    profileAbout.textContent = userData.about;
    avatarLink.src = userData.avatar;

    cardsData.reverse().forEach((element) => {
      displayCard(element, userData._id);
    });
  })
  .catch((err) => {
    console.log(err);
  });

formAvatar.addEventListener('submit', submitFormAvatar);
formMesto.addEventListener ('submit', submitFormMesto);


enableValidation(selectors);

