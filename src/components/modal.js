import {addButtonProfile,
  addButtonPhoto,
  popupProfile,
  closePopupProfile,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  formProfile,
  formMesto,
  popupMesto,
  closePopupMesto,
  popupPhoto,
  closePopupPhoto,
  popupImg,
  popupPhotoTitle,
  elementsContainer,
  contentElements,
  mestoName,
  mestoLink,
  closeButtons
} from "./index";

import {enableValidation, selectors} from "./validate";
import {submitFormProfile} from "./utils";
import {initialCards, addCard, displayCard, SubmitFormMesto} from "./cards";

//Функция открытие модальных окон
function openPopup(popup)  {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
}

//Функция закрытия модальных окон
function closePopup(popup)  {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupEsc);
}

//Функция закрытия мадальных окон по esc
function closePopupEsc (evt) {
  const popup = document.querySelectorAll('.popup');
  if (evt.key === 'Escape') {
    popup.forEach((element) => element.classList.remove('popup_opened'))
  }
}

//Функция закрытия мадальных окон при клике на оверлей
function closePopupOverlay (popup) {
  popup.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget){
      closePopup(popup);
    };
  });
}

export {openPopup, closePopup, closePopupEsc, closePopupOverlay};

