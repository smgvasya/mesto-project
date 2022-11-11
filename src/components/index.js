import "../pages/index.css";
import {
  profileOpenButton,
  mestoOpenButton,
  popupProfile,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  popupMesto,
  formMesto,
  popupCloseButtons,
  selectors,
  avatarLink,
  formAvatar,
  avatarOpenButton,
  popupAvatar  } from "./constants.js";

import { enableValidation, preparePopup } from "./validate.js";
import { openPopup, closePopup, closePopupOverlay } from "./modal.js";
import { submitFormMesto, addCardToContainer, submitFormAvatar } from "./utils.js";

import { getProfile, getInitialCards } from "./api";

//Открытие окна редактирования профиля
profileOpenButton.addEventListener('click', function (){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupProfile);
  preparePopup(popupProfile, selectors);
});

//Закрытие всех модальных окон

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
  closePopupOverlay(popup);
});

//Открытие окна добавление карточки
mestoOpenButton.addEventListener('click', function (){
  openPopup(popupMesto);
  preparePopup(popupMesto, selectors);
});

//Открытие окна обновления аватара
avatarOpenButton.addEventListener('click', function (){
  openPopup(popupAvatar);
  preparePopup(popupAvatar, selectors);
});

Promise.all([getProfile(), getInitialCards()])
  .then(([userData, cardsData]) => {
    profileName.textContent = userData.name;
    profileAbout.textContent = userData.about;
    avatarLink.src = userData.avatar;

    cardsData.reverse().forEach((element) => {
      addCardToContainer(element, userData._id);
    });
  })
  .catch((err) => {
    console.log(err);
  });

formAvatar.addEventListener('submit', submitFormAvatar);
formMesto.addEventListener ('submit', submitFormMesto);


enableValidation(selectors);

