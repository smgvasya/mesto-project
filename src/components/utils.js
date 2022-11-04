import {
  popupProfile,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  formProfile,
  popupMesto,
  elementsContainer,
  mestoName,
  mestoLink,
  avatarLink,
  avatarInput,
  popupAvatar,
  selectors } from "./constants";

import { addCard } from "./card";
import { closePopup } from "./modal";

import { testRes, getProfile, patchProfile, postCard, getInitialCards,
  deleteCard, patchAvatar, putLike, deleteLike } from "./api";


//Функция формы редактирования профиля
function submitFormProfile (evt) {
  evt.preventDefault();
  renderLoading (evt.target, true)

  patchProfile(nameInput.value, aboutInput.value)
    .then((res) => {
      profileName.textContent = res.name;
      profileAbout.textContent = res.about;
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
     renderLoading (evt.target, false)
    });
}
formProfile.addEventListener('submit', submitFormProfile);


//Функция формы
function displayCard(element, userId) {
  elementsContainer.prepend(addCard(element, userId));
}

//!!!// Функция формы добавления карточки/очистка инпутов
function submitFormMesto(evt) {
  evt.preventDefault ();
  renderLoading (evt.target, true)
  postCard(mestoName.value, mestoLink.value)
  .then((res) => {
    displayCard(res);
    closePopup(popupMesto);
    evt.target.reset()
    })
  .catch((err) => {
      console.log(err)
   })
  .finally(() => {
      renderLoading (evt.target, false)
  });
}

//Функция формы редактирования аватара
function submitFormAvatar(evt) {
  evt.preventDefault ();
  renderLoading (evt.target, true)

  patchAvatar(avatarInput.value)
  .then((res) =>{
    avatarLink.src = res.avatar;
    closePopup(popupAvatar);
    evt.target.reset();
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    renderLoading (evt.target, false)
  });
}


// Улучшенный UX всех форм
function renderLoading(formElement, isLoading) {
   const btnSubmit = formElement.querySelector(selectors.buttonSelector)
  if (isLoading) {
    btnSubmit.textContent = "Сохранение...";
  } else {
    btnSubmit.textContent = "Сохранить";
  }
}

export { submitFormMesto, submitFormProfile, displayCard, submitFormAvatar, renderLoading };

