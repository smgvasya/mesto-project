// const selectors = ({
//   formSelector: ".form", //класс у всех форм
//  ! formInputSelector: ".form__input", //класс у всех инпутов
//  ! buttonSelector: ".form__submit", // кнопка активная
//  ! buttonDisabledSelector: "form__disable-submit", // кнопка выкл
//  ! errorSelector: "form__profile-error", //  красный боттом при ошибке
//  ! errorActiveSelector: "form__input-error_active", // делает видимым текст с ошибкой
// });

export default class FormValidator {
   constructor(optionsObj, formElement){
      this._formElement = formElement;

      this._inputList = Array.from(this._formElement.querySelectorAll(optionsObj.formInputSelector));
      this._buttonElement = this._formElement.querySelector(optionsObj.buttonSelector);
      this._buttonDisabledSelector = optionsObj.buttonDisabledSelector;
      this._errorSelector = optionsObj.errorSelector;
      this._errorActiveSelector = optionsObj.errorActiveSelector;
   }

   _showInputError(inputElement, errorMessage){
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._errorSelector);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorActiveSelector);
   }

   _hideInputError(inputElement){
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._errorSelector);
      errorElement.classList.remove(this._errorActiveSelector);
      errorElement.textContent = '';
   };

   _getErrorMessage(inputElement){
      let validationMessage = "";
      if(inputElement.validity.patternMismatch){
        validationMessage = inputElement.dataset.customError;
      } else {
        validationMessage = inputElement.validationMessage;
      }
      return validationMessage;
    }

   _checkInputValidity (inputElement) {
      if (!inputElement.validity.valid) {
         showInputError(inputElement, this._getErrorMessage(inputElement));
      } else {
         hideInputError(inputElement);
      }
   };

   _hasInvalidInput(inputList){
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
   };

   _toggleButtonState(){
      if (this._hasInvalidInput(this._inputList)) {
         this._buttonElement.disabled = true;
         this._buttonElement.classList.add(this._buttonDisabledSelector);
      } else {
         this._buttonElement.disabled = false;
         this._buttonElement.classList.remove(this._buttonDisabledSelector);
      };
   };

   _setEventListeners() {
      this._formElement.addEventListener('submit', (evt)=>{
         evt.preventDefault();
      });

      this._inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', function () {
            this._checkInputValidity(inputElement);
            this._toggleButtonState ();
         });
      });
   };

   refreshButtonStatus(){
      this._toggleButtonState();
   }

   enableValidation(){
      this._setEventListeners();
   };
}

//  _preparePopup(popup, selectors) {
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
