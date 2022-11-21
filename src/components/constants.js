const profileOpenButton = document.querySelector('.profile__button');
const mestoOpenButton = document.querySelector('.profile__button-photo');
const popupProfileSelector = '#popup-profile';

const profileName ='.profile__name';
const profileAbout = '.profile__about';
const nameInput = document.querySelector('#input-name');
const aboutInput = document.querySelector('#input-about');
const formProfile = document.querySelector('#form-profile');
const formMesto = document.querySelector("#edit-mesto");
const popupMesto = '#popup-mesto';

const elementsContainer = '.elements__container';

const avatarLink = '.profile__avatar';
const formAvatar= document.querySelector("#form-avatar");
const avatarOpenButton = document.querySelector('.profile__button-avatar');
const popupAvatarSelector = '#popup-avatar';

const selectors = ({
  formSelector: ".form", //класс у всех форм
  formInputSelector: ".form__input", //класс у всех инпутов
  buttonSelector: ".form__submit", // кнопка активная
  buttonDisabledSelector: "form__disable-submit", // кнопка выкл
  errorSelector: "form__profile-error", //  красный боттом при ошибке
  errorActiveSelector: "form__input-error_active", // делает видимым текст с ошибкой
});

export {profileOpenButton,
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
  formProfile}
