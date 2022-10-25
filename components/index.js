import "../index.css";
import {enableValidation, selectors} from "./validate";
import {openPopup, closePopup, closePopupEsc, closePopupOverlay} from "./modal";
import {submitFormProfile} from "./utils";
import {initialCards, addCard, displayCard, SubmitFormMesto} from "./cards";



export const addButtonProfile = document.querySelector('.profile__button');
export const addButtonPhoto = document.querySelector('.profile__button-photo');
export const popupProfile = document.querySelector('#popup-profile');
export const closePopupProfile = document.querySelector('#popup-profile-close');

export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
export const nameInput = document.querySelector('#edit-profile-name');
export const aboutInput = document.querySelector('#edit-profile-about');
export const formProfile = document.querySelector('#form-profile');
export const formMesto = document.querySelector("#edit-mesto");
export const popupMesto = document.querySelector('#popup-mesto');
export const closePopupMesto = document.querySelector('#popup-mesto-close');

export const popupPhoto = document.querySelector('#popup-photo');
export const closePopupPhoto = document.querySelector('#popup-photo-close');
export const popupImg = document.querySelector('.popup__img');
export const popupPhotoTitle = document.querySelector('.popup__photo-title');
export const elementsContainer = document.querySelector('.elements__container');
export const contentElements = document.querySelector('.elements');

export const mestoName = document.querySelector('#edit-mesto-title');
export const mestoLink = document.querySelector('#edit-mesto-link');

export const closeButtons = document.querySelectorAll('.popup__close');


formProfile.addEventListener('submit', submitFormProfile);

//Открытие окна редактирования профиля
addButtonProfile.addEventListener('click', function (){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupProfile);
  // checkInputValidity (formElement, nameInput, elements);
  // checkInputValidity (formElement, aboutInput, elements);
});


//Открытие окна добавление карточки
addButtonPhoto.addEventListener('click', function (){
  openPopup(popupMesto);
});


formMesto.addEventListener ('submit', SubmitFormMesto);

enableValidation(selectors);


