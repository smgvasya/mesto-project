//Валидация
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
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
}   else {
    inputElement.setCustomValidity("");
}
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(selectors.buttonDisabledSelector);
  }
  else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(selectors.buttonDisabledSelector);
  };
};

const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.formInputSelector));
  const buttonElement = formElement.querySelector(selectors.buttonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState (inputList, buttonElement, selectors);
    });
  });
};

function preparePopup(selectors) {
  const popup = document.querySelector(selectors.popupSelector);
  const formElement = popup.querySelector(selectors.formSelector);
  const inputList = Array.from(
    formElement.querySelectorAll(selectors.formInputSelector)
  );
  const buttonElement = formElement.querySelector(selectors.buttonSelector);
  toggleButtonState(inputList, buttonElement, selectors);
  inputList.forEach((inputElement) => {
    if (inputElement.value !== "") {
      checkInputValidity(formElement, inputElement, selectors);
    }
  });
}

const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, selectors);
    });
  };

  export { enableValidation, preparePopup };
