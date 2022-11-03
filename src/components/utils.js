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
  popupAvatar } from "./constants";

import { addCard } from "./card";
import { closePopup } from "./modal";

import { testRes, getProfile, patchProfile, postCard, getInitialCards,
  deleteCard, patchAvatar, putLike, deleteLike } from "./api";


//Функция формы редактирования профиля
function submitFormProfile (evt) {
  evt.preventDefault();
  renderLoading(true);

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
     renderLoading (false)
    });
}
formProfile.addEventListener('submit', submitFormProfile);


//Функция формы
function displayCard(element) {
  elementsContainer.prepend(addCard(element));
}

//!!!// Функция формы добавления карточки/очистка инпутов
function submitFormMesto(evt) {
  evt.preventDefault ();
  renderLoading(true);

  postCard(mestoName.value, mestoLink.value)
  .then((res) => {
    displayCard(res, userId);
    closePopup(popupMesto);
    evt.target.reset()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
     renderLoading (false)
    });
}

// const newElement = {
//   name: mestoName.value,
//   link: mestoLink.value
// };

// displayCard(newElement);
// closePopup(popupMesto);

//Функция формы редактирования аватара
function submitFormAvatar(evt) {
  evt.preventDefault ();
  renderLoading(true)

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
   renderLoading (false)
  });
}


// Улучшенный UX всех форм
function renderLoading(isLoading) {
  const submitText = document.querySelector('.form__input')
  if (isLoading) {
    submitText.textContent = "Сохранение...";
  } else {
    submitText.textContent = "Сохранить";
  }
}

export { submitFormMesto, submitFormProfile, displayCard, submitFormAvatar, renderLoading };

