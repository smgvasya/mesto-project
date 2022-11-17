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
import { submitFormMesto, addCardToContainer, submitFormProfile, renderLoading } from "./utils.js";

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

popupEditForm.setEventListeners();
popupAvatarForm.setEventListeners();
// нью.setEventListeners();


 const popupAvatarForm = new PopupWithForm(popupAvatar, {
  handleSubmitForm: (avatarInput) => {
    renderLoading (evt.target, true)
    api.patchAvatar(avatarInput.value)
    .then((res) =>{
      avatarLink.src = res.avatar;
      submitFormAvatar.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading (evt.target, false)
    });
}
})

// Функция формы редактирования аватара
// function submitFormAvatar(evt) {
//   evt.preventDefault ();
//   renderLoading (evt.target, true)

//   api.patchAvatar(avatarInput.value)
//   .then((res) =>{
//     avatarLink.src = res.avatar;
//     closePopup(popupAvatar);
//     evt.target.reset();
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => {
//     renderLoading (evt.target, false)
//   });
// }

//Открытие окна обновления аватара
avatarOpenButton.addEventListener('click', function (){
  popupAvatarForm.open();
});


//Открытие окна добавление карточки
mestoOpenButton.addEventListener('click', function (){
  openPopup(popupMesto);
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

formAvatar.addEventListener('submit', popupAvatarForm);
formMesto.addEventListener ('submit', submitFormMesto);
formProfile.addEventListener('submit', handleFormProfile);


