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
        validationMessage = inputElement.dataset.errorMessage;
      } else {
        validationMessage = inputElement.validationMessage;
      }
      return validationMessage;
    }

   _checkInputValidity (inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, this._getErrorMessage(inputElement));
      } else {
        this._hideInputError(inputElement);
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

   resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

   _setEventListeners() {
      this._formElement.addEventListener('submit', (evt)=>{
         evt.preventDefault();
      });

      this._inputList.forEach((inputElement) => {
        const obj = this;
        inputElement.addEventListener('input', function () {
          obj._checkInputValidity(inputElement);
          obj._toggleButtonState ();
        });
      });
   };

   enableValidation(){
      this._setEventListeners();
   };
}
