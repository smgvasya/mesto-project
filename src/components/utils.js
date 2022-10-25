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
import {openPopup, closePopup, closePopupEsc, closePopupOverlay} from "./modal";
import {initialCards, addCard, displayCard, SubmitFormMesto} from "./cards";




//Функция формы редактирования профиля
function submitFormProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupProfile);
}

//Закрытие всех модальных окон

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
  closePopupOverlay (popup);
});

export {submitFormProfile};
