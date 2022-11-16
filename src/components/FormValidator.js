// const selectors = ({
//   formSelector: ".form", //класс у всех форм
//   formInputSelector: ".form__input", //класс у всех инпутов
//  ! buttonSelector: ".form__submit", // кнопка активная
//  ! buttonDisabledSelector: "form__disable-submit", // кнопка выкл
//  ! errorSelector: "form__profile-error", //  красный боттом при ошибке
//  ! errorActiveSelector: "form__input-error_active", // делает видимым текст с ошибкой
// });

export default class FormValidator {
 constructor(selectors, formElement){
    this.formElement = formElement;

    this._buttonElement = formElement.querySelector(selectors.buttonSelector);
    this._buttonDisabledElement = formElement.querySelector(selectors.buttonDisabledSelector);
    this._errorbottom = formElement.querySelector(selectors.errorSelector);
    this._errorMessage = formElement.querySelector(selectors.errorActiveSelector);
 }
    _showInputError(formElement, inputElement, errorMessage, selectors){
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
       inputElement.classList.add(selectors.errorSelector);
       errorElement.textContent = errorMessage;
       errorElement.classList.add(selectors.errorActiveSelector);
    }
// const showInputError = (formElement, inputElement, errorMessage, selectors) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(selectors.errorSelector);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(selectors.errorActiveSelector);
// };

// const hideInputError = (formElement, inputElement, selectors) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(selectors.errorSelector);
//   errorElement.classList.remove(selectors.errorActiveSelector);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement, selectors) => {
//   if (inputElement.validity.patternMismatch) {
//     inputElement.setCustomValidity(inputElement.dataset.errorMessage);
// }   else {
//     inputElement.setCustomValidity("");
// }
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
//   } else {
//     hideInputError(formElement, inputElement, selectors);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement, selectors) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.disabled = true;
//     buttonElement.classList.add(selectors.buttonDisabledSelector);
//   }
//   else {
//     buttonElement.disabled = false;
//     buttonElement.classList.remove(selectors.buttonDisabledSelector);
//   };
// };

// const setEventListeners = (formElement, selectors) => {
//   const inputList = Array.from(formElement.querySelectorAll(selectors.formInputSelector));
//   const buttonElement = formElement.querySelector(selectors.buttonSelector);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, selectors);
//       toggleButtonState (inputList, buttonElement, selectors);
//     });
//   });
// };

// function preparePopup(popup, selectors) {
//   const formElement = popup.querySelector(selectors.formSelector);//находим форму в попапе
//   const inputList = Array.from(
//     formElement.querySelectorAll(selectors.formInputSelector)//инпутные классы
//   );
//   const buttonElement = formElement.querySelector(selectors.buttonSelector); // кнопка формы
//   toggleButtonState(inputList, buttonElement, selectors);// изменяем состояние кнопки
//   inputList.forEach((inputElement) => {// проверяем состояние инпутов, если инпут пустой - не выводим ошибку
//     if (inputElement.value !== "") {
//       checkInputValidity(formElement, inputElement, selectors);
//     }
//   });
// }

// const enableValidation = (selectors) => {
//   const formList = Array.from(document.querySelectorAll(selectors.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, selectors);
//     });
//   };

//   export { enableValidation, preparePopup };

}
