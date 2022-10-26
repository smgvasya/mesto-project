// import {
//   popupProfile,
//   profileName,
//   profileAbout,
//   nameInput,
//   aboutInput,
//   closeButtons
// } from "./index";

// import {closePopup, closePopupOverlay} from "./modal";


//Функция формы редактирования профиля
function submitFormProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupProfile);
};


// export { submitFormProfile };
