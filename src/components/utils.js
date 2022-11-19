import {
  popupMesto,
  mestoName,
  mestoLink,
  selectors } from "./constants";


// Функция формы добавления карточки/очистка инпутов
function submitFormMesto(evt) {
  evt.preventDefault ();
  renderLoading (evt.target, true)
  api.postCard(mestoName.value, mestoLink.value)
  .then((res) => {
    cardSection.renderItems(res, res.owner._id);
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

// Улучшенный UX всех форм
function renderLoading(formElement, isLoading) {
   const btnSubmit = formElement.querySelector(selectors.buttonSelector)
  if (isLoading) {
    btnSubmit.textContent = "Сохранение...";
  } else {
    btnSubmit.textContent = "Сохранить";
  }
}

export { submitFormMesto, renderLoading };

