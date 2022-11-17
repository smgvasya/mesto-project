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

import { openPopup, closePopup, closePopupOverlay } from "./modal.js";
import { submitFormMesto, addCardToContainer, submitFormAvatar, submitFormProfile } from "./utils.js";

import Api from "./Api";
import Popup from "./Popup";
import FormValidator from "./FormValidator";
import PopupWithImage from "./PopupWithForm";
import PopupWithForm from "./PopupWithForm";

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16',
  headers: {
    authorization: '726accf3-eb3a-4622-8e8a-72bee3135f81',
    'Content-Type': 'application/json'
  }
});

const popupEditForm = new Popup('#popup-profile');
popupEditForm.setEventListeners();

//Открытие окна редактирования профиля
profileOpenButton.addEventListener('click', function (){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  popupEditForm.open();
});

//Валидация для каждой фоормы
const profileFormValidator = new FormValidator(
  selectors,
  formProfile
);

const avatarFormValidator = new FormValidator(
  selectors,
  formAvatar
);

const mestoFormValidator = new FormValidator(
  selectors,
  formMesto
);

mestoFormValidator.enableValidation();
avatarFormValidator.enableValidation();
profileFormValidator.enableValidation();

// нью.setEventListeners();
// нью.setEventListeners();
// нью.setEventListeners();


//Закрытие всех модальных окон
// popupCloseButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
//   closePopupOverlay(popup);
// });

//Открытие окна добавление карточки
mestoOpenButton.addEventListener('click', function (){
  openPopup(popupMesto);
});

//Открытие окна обновления аватара
avatarOpenButton.addEventListener('click', function (){
  openPopup(popupAvatar);
});

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


