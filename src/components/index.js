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
  popupAvatar,
  formProfile
} from "./constants.js";

import { enableValidation, preparePopup } from "./validate.js";
import { openPopup, closePopup, closePopupOverlay } from "./modal.js";
import { submitFormMesto, addCardToContainer, submitFormAvatar, submitFormProfile } from "./utils.js";

import Api from "./api";

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16',
  headers: {
    authorization: '726accf3-eb3a-4622-8e8a-72bee3135f81',
    'Content-Type': 'application/json'
  }
});

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


//Добавление карточек из кода

Promise.all([api.getProfile(), api.getInitialCards()])
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

const handleFormProfile = (evt) =>{
  submitFormProfile(evt, api);
}

formAvatar.addEventListener('submit', submitFormAvatar);
formMesto.addEventListener ('submit', submitFormMesto);
formProfile.addEventListener('submit', handleFormProfile);

enableValidation(selectors);

