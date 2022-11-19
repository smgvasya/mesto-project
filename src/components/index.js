import "../pages/index.css";
import {
  profileOpenButton,
  mestoOpenButton,
  popupProfileSelector,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  popupMesto,
  formMesto,
  elementsContainer,
  selectors,
  avatarLink,
  formAvatar,
  avatarOpenButton,
  popupAvatarSelector,
  formProfile,
} from "./constants.js";

import { submitFormMesto, renderLoading } from "./utils.js";

import Api from "./Api";
import Popup from "./Popup";
import FormValidator from "./FormValidator";
import UserInfo from "./UserInfo";
import PopupWithImage from "./PopupWithImage";
import PopupWithForm from "./PopupWithForm";
import Card from "./card";
import Section from "./Section";

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16',
  headers: {
    authorization: '726accf3-eb3a-4622-8e8a-72bee3135f81',
    'Content-Type': 'application/json'
  }
});

// const cardSection = new Section({
//   data: items,
//   renderer: (item) => {
//     const card = new Card(item, '#card-template');
//     const cardElement = card._generateCard();
//     cardSection.addItem(cardElement);
//   }
//   }, elementsContainer);

//Открытие модального окна/фото карточки

  // photoElement.addEventListener("click", () => {
  //   const photoPopup = new PopupWithImage('#popup-photo');
  //   photoPopup.open();
  //   photoPopup.setEventListeners();
  // });

  //
  const photoPopup = new PopupWithImage('#popup-photo');
  photoPopup.setEventListeners();


const userInfo = new UserInfo({nameElementSelector: profileName,
                               infoElementSelector: profileAbout,
                               avatarElementSelector: avatarLink});

const popupEditForm = new PopupWithForm(popupProfileSelector,
  (evt, {'profile-name': profileNewName, 'profile-about':profileNewAbout})=>{
    evt.preventDefault ();
    renderLoading (evt.target, true);
    console.log()
    api.patchProfile({name: profileNewName, about:profileNewAbout})
      .then((res) =>{;
        userInfo.setUserInfo(res);
        popupEditForm.close();
      })
      .catch((err) => {;
        console.log(err);
      })
      .finally(() => {;
        renderLoading (evt.target, false);
      });
  }
);
popupEditForm.setEventListeners();

//Открытие окна редактирования профиля
profileOpenButton.addEventListener('click', function (){
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  aboutInput.value = info.about;
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

const popupAvatarForm = new PopupWithForm(popupAvatarSelector,
  (evt, {'avatar-link':avatarNewLink})=>{
    evt.preventDefault();
    renderLoading (evt.target, true);
    api.patchAvatar(avatarNewLink)
      .then((res) =>{;
        userInfo.setUserInfo(res);
        popupAvatarForm.close();
      })
      .catch((err) => {;
        console.log(err);
      })
      .finally(() => {;
        renderLoading (evt.target, false);
      });
  }
);
popupAvatarForm.setEventListeners();

const listenerDelCard = () => {
  api.deleteCard(this.id)
  .then(() => {
    removeElement(this);
  })
  .catch((err) => {
    console.log(err);
  });
}

const listenerLikeCard = (evt) => {
  if (elementLikes.classList.contains('element__button-like_active')) {
    api.deleteLike(element._id)
    .then ((res) => {
      //делаем что-то
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    api.putLike(element._id)
    .then ((res) => {
      //делаем что-то 2
    })
    .catch((err) => {
      console.log(err);
    });
}};

const listenerClickCard = () => {
  photoPopup.open({name: this.name,
                   link: this.img});
}

function addCardToContainer(element) {
  const newCard = new Card(element, userInfo.getUserId(), Card.cardTemplate, listenerClickCard, listenerDelCard, listenerLikeCard);
  elementsContainer.prepend(newCard.getCard());
}


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
    userInfo.setUserInfo(userData);
    cardsData.reverse().forEach((element) => {
      addCardToContainer(element);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//const handleFormProfile = (evt) =>{
//  submitFormProfile(evt, api);
//}

//formAvatar.addEventListener('submit', popupAvatarForm);
//formMesto.addEventListener ('submit', submitFormMesto);
//formProfile.addEventListener('submit', handleFormProfile);
