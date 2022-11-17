import {
  popupProfile,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
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
import PopupWithForm from "./PopupWithForm";

//Функция формы редактирования профиля
function submitFormProfile (evt, api) {
  evt.preventDefault();
  renderLoading (evt.target, true)

  api.patchProfile({name: nameInput.value, about: aboutInput.value})
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

//Функция формы
function addCardToContainer(element, userId) {
  elementsContainer.prepend(createCard(element, userId));
}

// Функция формы добавления карточки/очистка инпутов
function submitFormMesto(evt) {
  evt.preventDefault ();
  renderLoading (evt.target, true)
  api.postCard(mestoName.value, mestoLink.value)
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


//  const submitFormAvatar = new PopupWithForm(popupAvatar, {
//   handleSubmitForm: (avatarInput) => {
//     renderLoading (evt.target, true)
//     api.patchAvatar(avatarInput.value)
//     .then((res) =>{
//       avatarLink.src = res.avatar;
//       submitFormAvatar.close();
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//     .finally(() => {
//       renderLoading (evt.target, false)
//     });
// }
// })

// Функция формы редактирования аватара
function submitFormAvatar(evt) {
  evt.preventDefault ();
  renderLoading (evt.target, true)

  api.patchAvatar(avatarInput.value)
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

