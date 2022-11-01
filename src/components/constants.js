const initialCards = [
  {
    name: 'До встречи!',
    link: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
  },
  {
    name: 'Вернулись в Лондон',
    link: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: 'Показываем Розе конец земли',
    link: 'https://images.unsplash.com/photo-1653525749885-46a75af1eb5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
  },
  {
    name: 'Запарковал?!',
    link: 'https://images.unsplash.com/photo-1655315149741-177f3aad852b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Опять и снова',
    link: 'https://images.unsplash.com/photo-1575824928808-abc8ae6cfbfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
  },
  {
    name: 'В пути',
    link: 'https://img.freepik.com/free-photo/3d-hyperspace-background-with-warp-tunnel-effect_1048-12526.jpg?t=st=1661697965~exp=1661698565~hmac=e9126f3e9d8afbc6d5a1cf66aec58da0771c53ae0f8169607bc70dc1a4804657'
  }
];


const addButtonProfile = document.querySelector('.profile__button');
const addButtonPhoto = document.querySelector('.profile__button-photo');
const popupProfile = document.querySelector('#popup-profile');
const closePopupProfile = document.querySelector('#popup-profile-close');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = document.querySelector('#input-name');
const aboutInput = document.querySelector('#input-about');
const formProfile = document.querySelector('#form-profile');
const formMesto = document.querySelector("#edit-mesto");
const popupMesto = document.querySelector('#popup-mesto');
const closePopupMesto = document.querySelector('#popup-mesto-close');

const popupPhoto = document.querySelector('#popup-photo');
const closePopupPhoto = document.querySelector('#popup-photo-close');
const popupImg = document.querySelector('.popup__img');
const popupPhotoTitle = document.querySelector('.popup__photo-title');
const elementsContainer = document.querySelector('.elements__container');
const contentElements = document.querySelector('.elements');

const mestoName = document.querySelector('#mesto-title');
const mestoLink = document.querySelector('#mesto-link');


const avatarLink = document.querySelector('.profile__avatar');
const avatarInput = document.querySelector('#avatar-link');
const formAvatar= document.querySelector("#form-avatar");
const addButtonAvatar = document.querySelector('.profile__button-avatar');
const popupAvatar = document.querySelector('#popup-avatar');


const closeButtons = document.querySelectorAll('.popup__close');
const cardTemplate = document.querySelector('#card-template').content;

const selectors = ({
  popupSelector: ".popup_opened", //класс у всех открытых попапов
  formSelector: ".form", //класс у всех форм
  inputSelector: ".form__input", //класс у всех инпутов
  buttonSelector: ".form__submit", // кнопка активная
  buttonDisabledSelector: "form__disable-submit", // кнопка выкл
  errorSelector: "form__profile-error", //  красный боттом при ошибке
  errorActiveSelector: "form__input-error_active", // делает видимым текст с ошибкой
});

export {
  initialCards,
  addButtonProfile,
  addButtonPhoto,
  popupProfile,
  closePopupProfile,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  formProfile,
  popupMesto,
  formMesto,
  closePopupMesto,
  popupPhoto,
  closePopupPhoto,
  popupImg,
  elementsContainer,
  popupPhotoTitle,
  contentElements,
  mestoName,
  mestoLink,
  avatarLink,
  avatarInput,
  formAvatar,
  addButtonAvatar,
  closeButtons,
  cardTemplate,
  popupAvatar,
  selectors
};
