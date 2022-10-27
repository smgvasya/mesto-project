//Валидация
const selectors = ({
  formSelector: ".form", //класс у всех форм
  inputSelector: ".form__input", //класс у всех инпутов
  buttonSelector: ".form__submit", // кнопка активная
  buttonDisabledSelector: "form__disable-submit", // кнопка выкл
  errorSelector: "form__profile-error", //  красный боттом при ошибке
  errorActiveSelector: "form__input-error_active", // делает видимым текст с ошибкой
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


const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      setEventListeners(formElement, selectors);
    });
    setEventListeners(formElement, selectors);
    });
  };

  // setEventListeners(formElement, selectors); - комментарий ревью
  // При сабмите устанавливать обработчики валидации не нужно, в таком виде, при каждом сабмите установится новый обработчик
  // addEventListener навешивает на элемент обработчик и,  если его потом не удалить, он останется на элементе навсегда.
  // Если Вы еще раз навешиваете обработчик, то на элементе будет уже 2 обработчика срабатывать друг за другом. И так далее.
  // На 10й раз Ваше приложение начнет глючить и пойдут ошибки в консоли, так как обработчики делают одно и тоже, а данных уже может и не быть давно.
  // Это называется утечка памяти. Поэтому либо нужно удалять обработчик правильно, либо навешивать его только 1 раз, а не при каждом открытии, закрытии или еще какой-нибудь операции.
  // Для деактивации кнопки и сброса ошибок лучше сделать отдельную функцию


  export { enableValidation, selectors };
