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

import { createCard } from "./card";
import { closePopup } from "./modal";

import { patchProfile, postCard, patchAvatar } from "./api";


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
function addCardToContainer(element, userId) {
  elementsContainer.prepend(createCard(element, userId));
}

// Функция формы добавления карточки/очистка инпутов
function submitFormMesto(evt) {
  evt.preventDefault ();
  renderLoading (evt.target, true)
  postCard(mestoName.value, mestoLink.value)
  .then((res) => {
    addCardToContainer(res, res.owner._id);
    closePopup(popupMesto);
    evt.target.reset();
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

export { submitFormMesto, submitFormProfile, addCardToContainer, submitFormAvatar, renderLoading };

