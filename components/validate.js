//Валидация

const selectors = ({
  formSelector: ".form", //класс у всех форм
  inputSelector: ".form__profile-input", //класс у всех инпутов
  buttonSelector: ".form__profile-submit", //класс кнопка активная
  buttonDisabledSelector: "form__disable-submit", //класс кнопок выкл
  errorSelector: "form__profile-error", // класс крассный боттом при ошибке
  errorActiveSelector: "form__input-error_active", // класс делает видимым текст с ошибкой
  fieldsetSelector: ".form__profile" // класс филдсетов всех
});


const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.errorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorActiveSelector);
};

const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.errorSelector);
  errorElement.classList.remove(selectors.errorActiveSelector);
  errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
}   else {
    inputElement.setCustomValidity("");
}
};

const setEventListeners = (formElement, selectors) => {
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


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectors.buttonDisabledSelector);
  }
  else {
    buttonElement.classList.remove(selectors.buttonDisabledSelector);
  };
};

const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, selectors);
    });
  };

  export {enableValidation, selectors};
