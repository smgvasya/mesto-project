import "../pages/index.css";
import {
  profileOpenButton,
  mestoOpenButton,
  popupProfileSelector,
  profileName,
  profileAbout,
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

import Api from "./Api";
import FormValidator from "./FormValidator";
import UserInfo from "./UserInfo";
import PopupWithImage from "./PopupWithImage";
import PopupWithForm from "./PopupWithForm";
import Card from "./Сard";
import Section from "./Section";

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16',
  headers: {
    authorization: '726accf3-eb3a-4622-8e8a-72bee3135f81',
    'Content-Type': 'application/json'
  }
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

const setlistenerDelCard = (obj) => {
  api.deleteCard(obj.id)
  .then(() => {
    obj.getCard().remove();
  })
  .catch((err) => {
    console.log(err);
  });
}

const setlistenerLikeCard = (evt, obj) => {
  if (evt.target.classList.contains('element__button-like_active')) {
    api.deleteLike(obj.id)
    .then ((res) => {
      obj.setLikeCount(res.likes)
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    api.putLike(obj.id)
    .then ((res) => {
      obj.setLikeCount(res.likes)
    })
    .catch((err) => {
      console.log(err);
    });
}};

const setlistenerClickCard = (photo) => {
  photoPopup.open(photo);
}

const cardSection = new Section({
  items: [],
  renderer: (item) => {
    const card = new Card(item, userInfo.getUserId(), Card.cardTemplate, setlistenerClickCard, setlistenerDelCard, setlistenerLikeCard);
    const cardElement = card.getCard();
    cardSection.addItem(cardElement);
  }
}, elementsContainer);

const userInfo = new UserInfo({nameElementSelector: profileName,
                               infoElementSelector: profileAbout,
                               avatarElementSelector: avatarLink});

const popupEditForm = new PopupWithForm(popupProfileSelector, selectors.buttonSelector,
  (evt, obj)=>{
    evt.preventDefault ();
    popupEditForm.setBtnLabel(true);
    api.patchProfile(obj)
      .then((res) =>{;
        userInfo.setUserInfo(res);
        popupEditForm.close();
      })
      .catch((err) => {;
        console.log(err);
      })
      .finally(() => {;
        popupEditForm.setBtnLabel(false);
      });
  }
);

//Открытие окна редактирования профиля
profileOpenButton.addEventListener('click', function (){
  const info = userInfo.getUserInfo();
  popupEditForm.setInputValues(info);
  popupEditForm.open();
  profileFormValidator.resetValidation();
});

const popupAvatarForm = new PopupWithForm(popupAvatarSelector, selectors.buttonSelector,
  (evt, obj)=>{
    evt.preventDefault();
    popupAvatarForm.setBtnLabel(true);
    api.patchAvatar(obj)
      .then((res) =>{;
        userInfo.setUserInfo(res);
        popupAvatarForm.close();
      })
      .catch((err) => {;
        console.log(err);
      })
      .finally(() => {;
        popupAvatarForm.setBtnLabel(false);
      });
  }
);

// Функция формы добавления карточки/очистка инпутов
const popupEditMesto = new PopupWithForm(popupMesto, selectors.buttonSelector,
  (evt, obj) => {
    evt.preventDefault ();
    popupEditMesto.setBtnLabel(true)
    api.postCard(obj)
      .then((res) => {
        cardSection.setRenderItems([res]);
        cardSection.renderItems();
        popupEditMesto.close();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupEditMesto.setBtnLabel(false)
      });
  })

const photoPopup = new PopupWithImage('#popup-photo');

//Открытие окна обновления аватара
avatarOpenButton.addEventListener('click', function (){
  popupAvatarForm.open();
  avatarFormValidator.resetValidation();
});

//Открытие окна добавление карточки
mestoOpenButton.addEventListener('click', function (){
  popupEditMesto.open();
  mestoFormValidator.resetValidation();
});

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData);
    cardsData.reverse();
    cardSection.setRenderItems(cardsData);
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

mestoFormValidator.enableValidation();
avatarFormValidator.enableValidation();
profileFormValidator.enableValidation();

photoPopup.setEventListeners();
popupEditMesto.setEventListeners();
popupAvatarForm.setEventListeners();
popupEditForm.setEventListeners();
