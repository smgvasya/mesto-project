const addButtonProfile = document.querySelector('.profile__button');
const addButtonPhoto = document.querySelector('.profile__button-photo');
const popupProfile = document.querySelector('#popup-profile');
const closePopupProfile = document.querySelector('#popup-profile-close');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = document.querySelector('#edit-profile-name');
const aboutInput = document.querySelector('#edit-profile-about');
const formProfile = document.querySelector('#form-profile');
const formMesto = document.querySelector("#edit-mesto");
const popupMesto = document.querySelector('#popup-mesto');
const closePopupMesto = document.querySelector('#popup-mesto-close');

const popupPhoto = document.querySelector('#popup-photo');
const closePopupPhoto = document.querySelector('#popup-photo-close');
const popupImg = document.querySelector('.popup__img');
const popupPhotoTitle = document.querySelector('.popup__photo-title');
const elementsContainer = document.querySelector('.elements__container');
const contentElements = document.querySelector('.elements');

const mestoName = document.querySelector('#edit-mesto-title');
const mestoLink = document.querySelector('#edit-mesto-link');

const closeButtons = document.querySelectorAll('.popup__close');


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

//Функция формы редактирования профиля
function submitFormProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupProfile);
}
formProfile.addEventListener('submit', submitFormProfile);

//Открытие окна редактирования профиля
addButtonProfile.addEventListener('click', function (){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupProfile);
  checkInputValidity (formElement, nameInput, elements);
  checkInputValidity (formElement, aboutInput, elements);
});

//Закрытие всех модальных окон

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
  closePopupOverlay (popup);
});

//Открытие окна добавление карточки
  addButtonPhoto.addEventListener('click', function (){
    openPopup(popupMesto);
  });

// Функция добавления новой карточки
  function addCard(element) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const photoElement = cardElement.querySelector('.element__photo');
    const titleElement = cardElement.querySelector('.element__title');

    titleElement.textContent = element.name
    photoElement.src = element.link
    photoElement.alt = element.name


  //Удаление карточки
  const deleteElement = cardElement.querySelector('.element__button-trash');

  deleteElement.addEventListener('click', (evt) => {
      cardElement.remove();
  });

   //Лайк карточки
  const elementLikes = cardElement.querySelector('.element__button-like');

  elementLikes.addEventListener('click', (evt) => {
     evt.target.classList.toggle('element__button-like_active');
  });

   //Открытие модального окна/фото карточки
    photoElement.addEventListener("click", () => {
      popupImg.src = element.link;
      popupPhotoTitle.textContent = element.name;
      popupImg.alt = element.name;
      openPopup(popupPhoto);
    });
    return cardElement;
  }

  //Функция формы
  function displayCard(element) {
    elementsContainer.prepend(addCard(element));
  }

  //Добавление карточек из кода
  initialCards.forEach(displayCard);

// Функция формы добавления карточки/очистка инпутов
function SubmitFormMesto(evt) {
  evt.preventDefault ();

  const newElement = {
    name: mestoName.value,
    link: mestoLink.value
  };

  displayCard(newElement);
  closePopup(popupMesto);

  evt.target.reset()

}
formMesto.addEventListener ('submit', SubmitFormMesto);

//Валидация


const selectors = {
  formSelector: ".form",
  inputSelector: ".form__profile-input",
  buttonSelector: ".form__profile-submit",
  buttonDisabledSelector: "form__disable-submit",
  inputErrorSelector: "form__input-error",
  errorSelector: "form__profile-error",
  errorActiveSelector: "form__input-error_active",
  fieldsetSelector: "form__profile",
};


function showInputError (formElement, inputElement, errorMessage, selectors) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.errorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorActiveSelector);
};

function hideInputError (formElement, inputElement, selectors) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.errorSelector);
  errorElement.classList.remove(selectors.errorActiveSelector);
  errorElement.textContent = '';
};


// function checkInputValidity (formElement, inputElement, selectors) {
//   if (inputElement.validity.patternMismatch) {
//   inputElement.setCustomValidity(inputElement.dataset.errorMessage);
// } else {
//   inputElement.setCustomValidity('');
// }

// if (!inputElement.validity.valid) {
//   showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
// } else {
//   hideInputError(formElement, inputElement, selectors);
// }
// };

const checkInputValidity = (formElement, inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};



function setEventListeners (formElement, selectors) {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const buttonElement = formElement.querySelector(selectors.buttonSelector);
  toggleButtonState (inputList, buttonElement, selectors);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState (inputList, buttonElement, selectors);
    });
  });
};


function enableValidation (selectors) {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      setEventListeners(formElement, selectors);
    });
      setEventListeners(formElement, selectors);
    });
  };



// function enableValidation (selectors) {
//   const formList = Array.from(document.querySelectorAll(selectors.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//       setEventListeners(formElement, selectors);
//     });
//     const fieldsetList = Array.from(formElement.querySelectorAll('.form__profile'));
//     fieldsetList.forEach((fieldSet) => {
//     setEventListeners(fieldSet);
//     });
//   });
// };

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState (inputList, buttonElement, selectors) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectors.buttonDisabledSelector);
    buttonElement.disabled = true;
  }
  else {
    buttonElement.classList.remove(selectors.buttonDisabledSelector);
    buttonElement.disabled = false;
  };
};


enableValidation(selectors);

























